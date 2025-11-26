import dayjs  from 'dayjs';
import { baseUrl } from "../../../App/Base";
import { clearStorage } from "../../utils/clearStorage";
import { AppError, ErrorModel } from "../Error/AppError";
import { EXEPTION } from "../Error/Exeption";
import { HttpStatus } from "../Error/HttpStatus";

import { TokenModel } from "../TokenModel";

export interface RequestOptions {
  headers?: Record<string, string>;
  queryParams?: Record<string, string>;
  body?: unknown;
}

export class HttpClient {
  private async request<T>(
    method: string,
    endpoint: string,
    options: RequestOptions = {}
  ): Promise<T> {
    const { headers = {}, queryParams = {}, body } = options;
    const token = this.getToken();
    const queryString = new URLSearchParams(queryParams).toString();
    const fullUrl = queryString ? `${endpoint}?${queryString}` : endpoint;

    let finalBody: BodyInit | null = null;
    const finalHeaders: Record<string, string> = { ...headers };

    if (body instanceof FormData) {
      finalBody = body;
      delete finalHeaders["Content-Type"];
    } else if (body && typeof body === "object") {
      finalBody = JSON.stringify(body);
      finalHeaders["Content-Type"] = "application/json";
    }

    if (token) {
      finalHeaders["Authorization"] = `Bearer ${token}`;
    }

    try {
      const response = await fetch(baseUrl + fullUrl, {
        method,
        headers: finalHeaders,
        body: finalBody,
      });

      if (!response.ok) {
        let errorData;
        try {
          errorData = await response.json();
        } catch {
          errorData = response.statusText;
        }
        if (response.status === HttpStatus.S401) {

          throw new AppError({
            exeption: EXEPTION.AUTHORISATION_ERROR,
            message: response.statusText,
            status: response.status,
            data: errorData,
          }).getErrorState();
        }
        throw new AppError({
          exeption: EXEPTION.INTERNAL_SERVER_ERROR,
          message: response.statusText,
          status: response.status,
          data: errorData,
        }).getErrorState();
      }

      return (await response.json()) as T;
    } catch (error) {
      const err = error as ErrorModel;
      console.log("error", error);
      throw new AppError({
        exeption: EXEPTION.SERVER_ERROR,
        message: err.message ?? "An unknown error occurred",
        status: err.status,
        data: err.data ?? error,
      }).getErrorState();
    }
  }

  get<T = unknown>(endpoint: string, options: RequestOptions = {}): Promise<T> {
    return this.request("GET", endpoint, options);
  }

  post<T = unknown>(
    endpoint: string,
    options: RequestOptions = {}
  ): Promise<T> {
    return this.request("POST", endpoint, options);
  }

  put<T = unknown>(endpoint: string, options: RequestOptions = {}): Promise<T> {
    return this.request("PUT", endpoint, options);
  }

  patch<T = unknown>(
    endpoint: string,
    options: RequestOptions = {}
  ): Promise<T> {
    return this.request("PATCH", endpoint, options);
  }

  delete<T = unknown>(
    endpoint: string,
    options: RequestOptions = {}
  ): Promise<T> {
    return this.request("DELETE", endpoint, options);
  }

  private getToken(): string | null {
    const ND_Token = localStorage.getItem("ND_Token");

    if (!ND_Token) return null;
    const token: TokenModel = JSON.parse(ND_Token);
    const actualTime = dayjs().unix();
    const tokenTime = dayjs().add(token.expires_in, "seconds").unix();

    const remainTime = tokenTime - actualTime;

    if (remainTime < 0) {
      clearStorage();
      return null;
    }

    return token.access_token;
  }
}
