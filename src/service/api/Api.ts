import { bind } from 'decko';
import { default as HttpActions, IHeaders } from './HttpActions';

import { Auth } from './entities';

class Api {
  public auth: Auth;
  public httpActions: HttpActions;

  constructor() {
    this.httpActions = new HttpActions({
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      getPrivateHeaders: this.getPrivateHeaders,
    });

    this.auth = new Auth(this.httpActions);
  }

  @bind
  public getPrivateHeaders(): IHeaders {
    return { Authorization: `Token ${'toooken'}` };
  }
}

export default Api;
