// @flow

import { default as HttpActions, IResponse } from '../HttpActions';
// import ApiError from '../errors/ApiError';

class BaseApi {
  public httpActions: HttpActions;

  constructor(httpActions: HttpActions) {
    this.httpActions = httpActions;
  }

  // throwErrorIfExists(response: IResponse<any>, convertCodeError: any = error => error) {
  //   // todo так же определять по статусам
  //   if (response.data.error || response.status >= 400) {
  //     throw new ApiError({
  //       code: (convertCodeError(response.data.error || JSON.stringify(response.data)): any),
  //     status: response.status,
  //     });
  // }
  // }
}

export default BaseApi;
