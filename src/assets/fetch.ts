import React from 'react';
import * as axios from 'axios';
import commonConfig from './config';
import store from '../store';
import { add, minus } from '../store/actions/loadingCounter'

/**
 * @author john.bian
 * @description axios封装
 * @
 */
class Fetch {
  constructor(public ax: axios.AxiosInstance) {}

  /**
   * get 请求
   * @param url 请求地址
   */
  public async get(url: string): Promise<any> {
    console.log(url);
    try {
      const ret = await this.ax.get(encodeURI(url));
      console.log(ret)
      return this.handleResponse(ret);
    } catch (err) {
      console.log(err)
      return this.commonErrorHandle(err);
    }
  }

  /**
   * post 请求
   * @param url 请求地址
   * @param params 请求参数
   */
  public async post(url: any, params: any): Promise<any> {
    try {
      const ret = await this.ax.post(encodeURI(url), params);
      return this.handleResponse(ret);
    } catch (err) {
      return this.commonErrorHandle(err);
    }
  }

  private handleResponse(ret: axios.AxiosResponse): any {
    return ret.data;
  }

  private commonErrorHandle(err: any): any {
    return err;
  }
}
const instance = axios.default.create({
  baseURL: commonConfig.baseUrl,
  timeout: 60 * 1000,
});

// 请求头拦截 处理
instance.interceptors.request.use((config): any => {
  config.headers = {
  };
  store.dispatch(add());
  return config;
});

// 请求返回 处理
instance.interceptors.response.use((response): any => {
  store.dispatch(minus());
  return response;
}, (err): any => {
  store.dispatch(minus());
  return err.response;
});

const fetch = new Fetch(instance);

export default fetch;
