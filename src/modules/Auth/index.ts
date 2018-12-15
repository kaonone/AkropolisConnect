import ScannerPreview from './view/ScannerPreview/ScannerPreview';
import ScannerCamera from './view/ScannerCamera/ScannerCamera';
import SignTransaction from './view/SignTransaction/SignTransaction';

import { IModule } from 'shared/types/app';
// import { reducer } from './redux';

class SignTransactionModule implements IModule {
  getRoutes() {
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

  getReducer() {
    return { name: 'orders', reducer: () => { } };
  }

}

export default SignTransactionModule;
