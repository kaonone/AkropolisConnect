import { Linking, LinkInfo } from 'expo';
import { bind } from 'decko';

import { PathTypes } from './namespace';

type LinkHandler = (linkData: string) => void;

class LinkingManager {

  public handlers: Record<PathTypes, LinkHandler[]> = {
    transaction: [],
  };

  constructor() {
    Linking.addEventListener('url', this.handleForegroundLinking);
    Linking.getInitialURL().then((url) => {
      const link = Linking.parse(url);
      this.handleLinking(link);
    });
  }

  @bind
  public subscribe(type: PathTypes, handler: (linkData: string) => void) {
    this.handlers[type].push(handler);
    return () => this.unsubscribe(type, handler);
  }

  @bind
  public unsubscribe(type: PathTypes, removeHanlder: (linkData: string) => void) {
    this.handlers[type] = this.handlers[type].filter(handler => handler !== removeHanlder);
  }

  @bind
  public handleForegroundLinking(event: { url: string }) {
    const link = Linking.parse(event.url);
    this.handleLinking(link);
  }

  @bind
  public handleLinking(link: LinkInfo) {
    const { queryParams, path } = link;
    if (queryParams.data && this.handlers[path as PathTypes]) {
      this.handlers[link.path as PathTypes].forEach(handler => handler(queryParams.data!));
    }
  }
}

export default LinkingManager;
