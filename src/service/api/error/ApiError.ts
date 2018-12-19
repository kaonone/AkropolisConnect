import AppError from 'shared/types/error';

export default class ApiError extends AppError {
  public status: number;
  public code?: string;

  constructor({ code, message, status }: IOptions) {
    super(`ApiError: ${code || message || ''}`, 'API');
    this.status = status;
    this.code = code;
  }
}

interface IOptions {
  status: number;
  code?: string;
  message?: string;
}
