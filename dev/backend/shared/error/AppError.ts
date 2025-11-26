import { ExeptionEnum } from "./ExeptionEnum";
import { HttpStatusEnum } from "./httpStatusEnum";

export class AppError extends Error {
  data: ErrorModel = {
    data: ["This error is unexpected or uncontrolled please report it"],
    message: "Something went Wrong please report to the team",
    status: HttpStatusEnum.S500,
    type: ExeptionEnum.INTERNAL_SERVER_ERROR,
  };
  constructor(data: Partial<ErrorModel>) {
    super(data.message);
    this.data = {
      ...this.data,
      ...data,
    };
  }
  getError(error?: unknown): ErrorModel {
    if (error instanceof AppError) {
      return error.data;
    }
    return this.data
  }
}

export interface ErrorModel {
  message: string;
  status: HttpStatusEnum;
  data: unknown;
  type: ExeptionEnum;
  
}
