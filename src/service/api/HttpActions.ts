import { bind } from 'decko';
import { ApiError } from './error';

class HttpActions {
  private options: IDefaultOptions;

  constructor(options: IDefaultOptions) {
    this.options = options;
  }

  @bind
  public async get<T>(args: IMethodArgs): Promise<IResponse<T>> {
    return this._fetch<T>({ method: 'get', ...args });
  }

  @bind
  public async post<T>(args: IMethodArgs): Promise<IResponse<T>> {
    return this._fetch<T>({ method: 'post', ...args });
  }

  @bind
  public async _fetch<T>({ method, url, data }: IFetchOptions): Promise<IResponse<T>> {
    const baseUrl = 'https://acropolis_backend';

    const privateHeaders = this.options.getPrivateHeaders();
    const resHeaders = { ...this.options.headers, ...privateHeaders };

    const body = data ? JSON.stringify(data) : undefined;
    const fetchResponse = await fetch(`${baseUrl}${url}`, {
      method,
      body,
      headers: resHeaders,
    });

    const responseData: T = await fetchResponse.json();
    return {
      data: responseData,
      headers: fetchResponse.headers,
      status: fetchResponse.status,
      statusText: fetchResponse.statusText,
    };
  }

  public throwErrorIfExists(response: IResponse<any>) {
    if (response.data.error || response.status >= 400) {
      throw new ApiError({
        code: response.data.error || JSON.stringify(response.data),
        status: response.status,
      });
    }
  }
}

interface IOptions {
  headers: IHeaders;
}

interface IDefaultOptions extends IOptions {
  getPrivateHeaders: () => IHeaders;
}

interface IMethodArgs {
  url: string;
  data?: object;
}

interface IFetchOptions extends IMethodArgs {
  method: IMethod;
}

export interface IResponse<T> {
  data: T;
  headers: Headers;
  status: number;
  statusText: string;
}

export interface IHeaders {
  [key: string]: string;
}

type IMethod = 'get' | 'patch' | 'post';

export default HttpActions;
