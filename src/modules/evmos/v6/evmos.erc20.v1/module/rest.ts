/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface Erc20V1Params {
  /** parameter to enable the conversion of Cosmos coins <--> ERC20 tokens. */
  enable_erc20?: boolean;

  /**
   * parameter to enable the EVM hook that converts an ERC20 token to a Cosmos
   * Coin by transferring the Tokens through a MsgEthereumTx to the
   * ModuleAddress Ethereum address.
   */
  enable_evm_hook?: boolean;
}

export interface ProtobufAny {
  "@type"?: string;
}

export interface RpcStatus {
  /** @format int32 */
  code?: number;
  message?: string;
  details?: ProtobufAny[];
}

export type V1MsgConvertCoinResponse = object;

export type V1MsgConvertERC20Response = object;

/**
* Owner enumerates the ownership of a ERC20 contract.

 - OWNER_UNSPECIFIED: OWNER_UNSPECIFIED defines an invalid/undefined owner.
 - OWNER_MODULE: OWNER_MODULE erc20 is owned by the erc20 module account.
 - OWNER_EXTERNAL: EXTERNAL erc20 is owned by an external account.
*/
export enum V1Owner {
  OWNER_UNSPECIFIED = "OWNER_UNSPECIFIED",
  OWNER_MODULE = "OWNER_MODULE",
  OWNER_EXTERNAL = "OWNER_EXTERNAL",
}

/**
* QueryParamsResponse is the response type for the Query/Params RPC
method.
*/
export interface V1QueryParamsResponse {
  params?: Erc20V1Params;
}

/**
* QueryTokenPairResponse is the response type for the Query/TokenPair RPC
method.
*/
export interface V1QueryTokenPairResponse {
  /**
   * TokenPair defines an instance that records a pairing consisting of a native
   *  Cosmos Coin and an ERC20 token address.
   */
  token_pair?: V1TokenPair;
}

/**
* QueryTokenPairsResponse is the response type for the Query/TokenPairs RPC
method.
*/
export interface V1QueryTokenPairsResponse {
  token_pairs?: V1TokenPair[];

  /** pagination defines the pagination in the response. */
  pagination?: V1Beta1PageResponse;
}

/**
* TokenPair defines an instance that records a pairing consisting of a native
 Cosmos Coin and an ERC20 token address.
*/
export interface V1TokenPair {
  erc20_address?: string;
  denom?: string;
  enabled?: boolean;

  /**
   * Owner enumerates the ownership of a ERC20 contract.
   *
   *  - OWNER_UNSPECIFIED: OWNER_UNSPECIFIED defines an invalid/undefined owner.
   *  - OWNER_MODULE: OWNER_MODULE erc20 is owned by the erc20 module account.
   *  - OWNER_EXTERNAL: EXTERNAL erc20 is owned by an external account.
   */
  contract_owner?: V1Owner;
}

/**
* Coin defines a token with a denomination and an amount.

NOTE: The amount field is an Int which implements the custom method
signatures required by gogoproto.
*/
export interface V1Beta1Coin {
  denom?: string;
  amount?: string;
}

/**
* message SomeRequest {
         Foo some_parameter = 1;
         PageRequest pagination = 2;
 }
*/
export interface V1Beta1PageRequest {
  /**
   * key is a value returned in PageResponse.next_key to begin
   * querying the next page most efficiently. Only one of offset or key
   * should be set.
   * @format byte
   */
  key?: string;

  /**
   * offset is a numeric offset that can be used when key is unavailable.
   * It is less efficient than using key. Only one of offset or key should
   * be set.
   * @format uint64
   */
  offset?: string;

  /**
   * limit is the total number of results to be returned in the result page.
   * If left empty it will default to a value to be set by each app.
   * @format uint64
   */
  limit?: string;

  /**
   * count_total is set to true  to indicate that the result set should include
   * a count of the total number of items available for pagination in UIs.
   * count_total is only respected when offset is used. It is ignored when key
   * is set.
   */
  count_total?: boolean;

  /**
   * reverse is set to true if results are to be returned in the descending order.
   *
   * Since: cosmos-sdk 0.43
   */
  reverse?: boolean;
}

/**
* PageResponse is to be embedded in gRPC response messages where the
corresponding request message has used PageRequest.

 message SomeResponse {
         repeated Bar results = 1;
         PageResponse page = 2;
 }
*/
export interface V1Beta1PageResponse {
  /** @format byte */
  next_key?: string;

  /** @format uint64 */
  total?: string;
}

export type QueryParamsType = Record<string | number, any>;
export type ResponseFormat = keyof Omit<Body, "body" | "bodyUsed">;

export interface FullRequestParams extends Omit<RequestInit, "body"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: keyof Omit<Body, "body" | "bodyUsed">;
  /** request body */
  body?: unknown;
  /** base url */
  baseUrl?: string;
  /** request cancellation token */
  cancelToken?: CancelToken;
}

export type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;

export interface ApiConfig<SecurityDataType = unknown> {
  baseUrl?: string;
  baseApiParams?: Omit<RequestParams, "baseUrl" | "cancelToken" | "signal">;
  securityWorker?: (securityData: SecurityDataType) => RequestParams | void;
}

export interface HttpResponse<D extends unknown, E extends unknown = unknown> extends Response {
  data: D;
  error: E;
}

type CancelToken = Symbol | string | number;

export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
}

export class HttpClient<SecurityDataType = unknown> {
  public baseUrl: string = "";
  private securityData: SecurityDataType = null as any;
  private securityWorker: null | ApiConfig<SecurityDataType>["securityWorker"] = null;
  private abortControllers = new Map<CancelToken, AbortController>();

  private baseApiParams: RequestParams = {
    credentials: "same-origin",
    headers: {},
    redirect: "follow",
    referrerPolicy: "no-referrer",
  };

  constructor(apiConfig: ApiConfig<SecurityDataType> = {}) {
    Object.assign(this, apiConfig);
  }

  public setSecurityData = (data: SecurityDataType) => {
    this.securityData = data;
  };

  private addQueryParam(query: QueryParamsType, key: string) {
    const value = query[key];

    return (
      encodeURIComponent(key) +
      "=" +
      encodeURIComponent(Array.isArray(value) ? value.join(",") : typeof value === "number" ? value : `${value}`)
    );
  }

  protected toQueryString(rawQuery?: QueryParamsType): string {
    const query = rawQuery || {};
    const keys = Object.keys(query).filter((key) => "undefined" !== typeof query[key]);
    return keys
      .map((key) =>
        typeof query[key] === "object" && !Array.isArray(query[key])
          ? this.toQueryString(query[key] as QueryParamsType)
          : this.addQueryParam(query, key),
      )
      .join("&");
  }

  protected addQueryParams(rawQuery?: QueryParamsType): string {
    const queryString = this.toQueryString(rawQuery);
    return queryString ? `?${queryString}` : "";
  }

  private contentFormatters: Record<ContentType, (input: any) => any> = {
    [ContentType.Json]: (input: any) =>
      input !== null && (typeof input === "object" || typeof input === "string") ? JSON.stringify(input) : input,
    [ContentType.FormData]: (input: any) =>
      Object.keys(input || {}).reduce((data, key) => {
        data.append(key, input[key]);
        return data;
      }, new FormData()),
    [ContentType.UrlEncoded]: (input: any) => this.toQueryString(input),
  };

  private mergeRequestParams(params1: RequestParams, params2?: RequestParams): RequestParams {
    return {
      ...this.baseApiParams,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.baseApiParams.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  private createAbortSignal = (cancelToken: CancelToken): AbortSignal | undefined => {
    if (this.abortControllers.has(cancelToken)) {
      const abortController = this.abortControllers.get(cancelToken);
      if (abortController) {
        return abortController.signal;
      }
      return void 0;
    }

    const abortController = new AbortController();
    this.abortControllers.set(cancelToken, abortController);
    return abortController.signal;
  };

  public abortRequest = (cancelToken: CancelToken) => {
    const abortController = this.abortControllers.get(cancelToken);

    if (abortController) {
      abortController.abort();
      this.abortControllers.delete(cancelToken);
    }
  };

  public request = <T = any, E = any>({
    body,
    secure,
    path,
    type,
    query,
    format = "json",
    baseUrl,
    cancelToken,
    ...params
  }: FullRequestParams): Promise<HttpResponse<T, E>> => {
    const secureParams = (secure && this.securityWorker && this.securityWorker(this.securityData)) || {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const queryString = query && this.toQueryString(query);
    const payloadFormatter = this.contentFormatters[type || ContentType.Json];

    return fetch(`${baseUrl || this.baseUrl || ""}${path}${queryString ? `?${queryString}` : ""}`, {
      ...requestParams,
      headers: {
        ...(type && type !== ContentType.FormData ? { "Content-Type": type } : {}),
        ...(requestParams.headers || {}),
      },
      signal: cancelToken ? this.createAbortSignal(cancelToken) : void 0,
      body: typeof body === "undefined" || body === null ? null : payloadFormatter(body),
    }).then(async (response) => {
      const r = response as HttpResponse<T, E>;
      r.data = (null as unknown) as T;
      r.error = (null as unknown) as E;

      const data = await response[format]()
        .then((data) => {
          if (r.ok) {
            r.data = data;
          } else {
            r.error = data;
          }
          return r;
        })
        .catch((e) => {
          r.error = e;
          return r;
        });

      if (cancelToken) {
        this.abortControllers.delete(cancelToken);
      }

      if (!response.ok) throw data;
      return data;
    });
  };
}

/**
 * @title evmos/erc20/v1/erc20.proto
 * @version version not set
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Query
   * @name QueryParams
   * @summary Params retrieves the erc20 module params
   * @request GET:/evmos/erc20/v1/params
   */
  queryParams = (params: RequestParams = {}) =>
    this.request<V1QueryParamsResponse, RpcStatus>({
      path: `/evmos/erc20/v1/params`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryTokenPairs
   * @summary TokenPairs retrieves registered token pairs
   * @request GET:/evmos/erc20/v1/token_pairs
   */
  queryTokenPairs = (
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
      "pagination.reverse"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<V1QueryTokenPairsResponse, RpcStatus>({
      path: `/evmos/erc20/v1/token_pairs`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryTokenPair
   * @summary TokenPair retrieves a registered token pair
   * @request GET:/evmos/erc20/v1/token_pairs/{token}
   */
  queryTokenPair = (token: string, params: RequestParams = {}) =>
    this.request<V1QueryTokenPairResponse, RpcStatus>({
      path: `/evmos/erc20/v1/token_pairs/${token}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
 * No description
 * 
 * @tags Msg
 * @name MsgConvertCoin
 * @summary ConvertCoin mints a ERC20 representation of the native Cosmos coin denom
that is registered on the token mapping.
 * @request GET:/evmos/erc20/v1/tx/convert_coin
 */
  msgConvertCoin = (
    query?: { "coin.denom"?: string; "coin.amount"?: string; receiver?: string; sender?: string },
    params: RequestParams = {},
  ) =>
    this.request<V1MsgConvertCoinResponse, RpcStatus>({
      path: `/evmos/erc20/v1/tx/convert_coin`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
 * No description
 * 
 * @tags Msg
 * @name MsgConvertErc20
 * @summary ConvertERC20 mints a native Cosmos coin representation of the ERC20 token
contract that is registered on the token mapping.
 * @request GET:/evmos/erc20/v1/tx/convert_erc20
 */
  msgConvertErc20 = (
    query?: { contract_address?: string; amount?: string; receiver?: string; sender?: string },
    params: RequestParams = {},
  ) =>
    this.request<V1MsgConvertERC20Response, RpcStatus>({
      path: `/evmos/erc20/v1/tx/convert_erc20`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
}
