import { bind } from 'decko';
import BaseApi from './BaseApi';

// import authConverter from '../converters/auth';

class Auth extends BaseApi {

  @bind
  public async signTransaction() {
    // const response: IResponse<{ results: ICommandForCourierResponse[] }> = await this.httpActions.get({
    //   url: '/signTransaction/',
    // });

    // const body = response.data;
    // return body.results.map(authConverter);
  }
}

export default Auth;
