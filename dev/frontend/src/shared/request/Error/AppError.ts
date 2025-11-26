import { EXEPTION } from "./Exeption";
import { HttpStatus } from "./HttpStatus";
export interface ErrorModel {
  exeption: EXEPTION;
  message: string;
  status: HttpStatus;
  data?: unknown;
}
export class AppError extends Error {
  exeption: EXEPTION;
  message: string;
  status: HttpStatus;
  data?: unknown;
  constructor(data: ErrorModel) {
    super(data.message);
    this.exeption = data.exeption;
    this.status = data.status;
    this.message = data.message;
    this.data = data.data;
    this.stack = "";
  }
  getErrorState() {
    return {
      exeption: this.exeption,
      status: this.status,
      message: this.message,
      data: this.data,
    };
  }
}
