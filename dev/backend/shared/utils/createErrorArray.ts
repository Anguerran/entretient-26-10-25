import { ZodIssue } from "zod";

export const createErrorArray = (zError: ZodIssue[]) => {
  const errorArray = zError.map((error) => ({
    field: error.path,
    message: error.message,
  }));
  return errorArray;
};
