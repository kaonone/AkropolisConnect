import { IAppReduxState } from 'shared/types/app';

export default function makeSelectFeatureState<
  T extends IAppReduxState, K extends keyof IAppReduxState
>(featureName: K) {
  return (state: T): T[K] => {
    if (!state[featureName]) {
      throw new Error(`Cannot find ${featureName} feature state!`);
    }

    return state[featureName];
  };
}
