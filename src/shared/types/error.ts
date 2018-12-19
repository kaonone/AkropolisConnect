export type ErrorType = 'APP' | 'API' | 'VIEW';

export default class AppError extends Error {
  public type: ErrorType;

  constructor(msg: string, type: ErrorType) {
    super(msg);
    this.type = type;
    this.name = this.constructor.name;
  }
}
