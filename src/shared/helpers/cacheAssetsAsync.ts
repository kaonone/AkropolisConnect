import { Font } from 'expo';

const cacheAssetsAsync = ({ fonts = [] }: any) => {
  return Promise.all([ ...cacheFonts(fonts)]);
};

function cacheFonts(fonts: [any]) {
  return fonts.map(font => Font.loadAsync(font));
}

export default cacheAssetsAsync;
