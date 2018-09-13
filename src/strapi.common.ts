declare var global;
global.process = {env: {NODE_ENV: ''}};

import Strapi from 'strapi-sdk-javascript';
import {
  StoreConfig
} from 'strapi-sdk-javascript/build/main/lib/sdk';
import {
  AxiosRequestConfig
} from 'axios';

export class Common extends Strapi {

  constructor(baseURL: string, storeConfig?: StoreConfig, requestConfig?: AxiosRequestConfig) {
    super(baseURL, storeConfig, requestConfig);
  }
}