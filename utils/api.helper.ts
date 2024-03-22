type sendSuccessResponseType<DataType> = {
  data: DataType;
  message: string;
};

export function sendSuccessResponse<DataType>({
  data,
  message,
}: sendSuccessResponseType<DataType>) {
  return { ok: true, data, message };
}

export function sendErrorResponse(message: string) {
  return { ok: false, message, data: null };
}
