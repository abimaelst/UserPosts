import { MESSAGE_ERROR } from "../models";

export const handlerErrors = (error: number | string) => {
  const HttpResponse = Number(error);
  if (error < 499) {
    return MESSAGE_ERROR.unavailable;
  }

  return MESSAGE_ERROR.general;
};
