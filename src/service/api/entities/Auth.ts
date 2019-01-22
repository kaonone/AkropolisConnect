import { bind } from 'decko';
import BaseApi from './BaseApi';
import { ITransaction } from 'shared/models/types';

import { IResponse } from '../HttpActions';
// import authConverter from '../converters/auth';

class Auth extends BaseApi {

  @bind
  public async loadTransaction() {
    // const response: IResponse<{ results: ITransaction }> = await this.httpActions.get({
    //   url: '/signTransaction/',
    // });

    // const body = response.data;
    return { address: 'address', data: 'data' };
    // return authConverter(body.results);
  }
}

export default Auth;
