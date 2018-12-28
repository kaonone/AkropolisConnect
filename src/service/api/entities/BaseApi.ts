import { default as HttpActions, IResponse } from '../HttpActions';

class BaseApi {
  public httpActions: HttpActions;

  constructor(httpActions: HttpActions) {
    this.httpActions = httpActions;
  }
}

export default BaseApi;
