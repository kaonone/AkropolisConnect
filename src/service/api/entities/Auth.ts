// @flow

import { bind } from 'decko';
import BaseApi from './BaseApi';
import { IResponse } from '../HttpActions';

// import courierConverters from '../converters/courier';

class Courier extends BaseApi {

  @bind
  public async loadCommandsForCouriers() {
    // const response: IResponse<{ results: ICommandForCourierResponse[] }> = await this.httpActions.get({
    //   url: '/commands-for-couriers-in-bot/',
    // });

    // const body = response.data;
    // return body.results.map(courierConverters.commandForCourierFromResponse);
  }
}

export default Courier;
