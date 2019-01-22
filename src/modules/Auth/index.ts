import ScannerPreview from './view/ScannerPreview/ScannerPreview';
import ScannerCamera from './view/ScannerCamera/ScannerCamera';
import SignTransaction from './view/SignTransaction/SignTransaction';

import { IModule } from 'shared/types/app';
import { reducer, rootSaga } from './redux';
import * as namespace from './namespace';

export { namespace };

class SignTransactionModule implements IModule {
  public getRoutes() {
    return {
      ScannerPreview: {
        screen: ScannerPreview,
      },
      ScannerCamera: {
        screen: ScannerCamera,
      },
      SignTransaction: {
        screen: SignTransaction,
      },
    };
  }

  public getReducer() {
    return { name: 'auth', reducer };
  }

  public getSaga() {
    return rootSaga;
  }

}

export default SignTransactionModule;
