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
    return {
      address: '0xE47494379c1d48ee73454C251A6395FDd4F9eb43', data: '0x8f834227000000000000000000000000000000005224',
    };
    // return authConverter(body.results);
  }
}

export default Auth;
