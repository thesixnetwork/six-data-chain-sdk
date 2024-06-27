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

export interface ProtobufAny {
  "@type"?: string;
}

export interface RpcStatus {
  /** @format int32 */
  code?: number;
  message?: string;
  details?: ProtobufAny[];
}

export interface TokenmngrBurn {
  /** @format uint64 */
  id?: string;
  creator?: string;

  /**
   * Coin defines a token with a denomination and an amount.
   *
   * NOTE: The amount field is an Int which implements the custom method
   * signatures required by gogoproto.
   */
  amount?: V1Beta1Coin;
}

export interface TokenmngrMintperm {
  token?: string;
  address?: string;
  creator?: string;
}

export interface TokenmngrMsgBurnResponse {
  /** @format uint64 */
  id?: string;
}

export type TokenmngrMsgCreateMintpermResponse = object;

export type TokenmngrMsgCreateOptionsResponse = object;

export type TokenmngrMsgCreateTokenResponse = object;

export type TokenmngrMsgDeleteMintpermResponse = object;

export type TokenmngrMsgDeleteOptionsResponse = object;

export type TokenmngrMsgDeleteTokenResponse = object;

export interface TokenmngrMsgEnableContractConverterResponse {
  contractAddress?: string;
  enable?: boolean;
}

export type TokenmngrMsgMintResponse = object;

export interface TokenmngrMsgSendWrapTokenResponse {
  receiver?: string;
  amount?: string;
}

export interface TokenmngrMsgSetConverterParamsResponse {
  contractAddress?: string;
  abi?: string;
}

export interface TokenmngrMsgUnwrapTokenResponse {
  /**
   * Coin defines a token with a denomination and an amount.
   *
   * NOTE: The amount field is an Int which implements the custom method
   * signatures required by gogoproto.
   */
  amount?: V1Beta1Coin;
}

export type TokenmngrMsgUpdateMintpermResponse = object;

export type TokenmngrMsgUpdateOptionsResponse = object;

export type TokenmngrMsgUpdateTokenResponse = object;

export interface TokenmngrMsgWrapTokenResponse {
  /**
   * Coin defines a token with a denomination and an amount.
   *
   * NOTE: The amount field is an Int which implements the custom method
   * signatures required by gogoproto.
   */
  amount?: V1Beta1Coin;
}

export interface TokenmngrOptions {
  defaultMintee?: string;
}

/**
 * Params defines the parameters for the module.
 */
export type TokenmngrParams = object;

export interface TokenmngrQueryAllMintpermResponse {
  mintperm?: TokenmngrMintperm[];

  /**
   * PageResponse is to be embedded in gRPC response messages where the
   * corresponding request message has used PageRequest.
   *
   *  message SomeResponse {
   *          repeated Bar results = 1;
   *          PageResponse page = 2;
   *  }
   */
  pagination?: V1Beta1PageResponse;
}

export interface TokenmngrQueryAllTokenBurnResponse {
  tokenBurn?: TokenmngrTokenBurn[];

  /**
   * PageResponse is to be embedded in gRPC response messages where the
   * corresponding request message has used PageRequest.
   *
   *  message SomeResponse {
   *          repeated Bar results = 1;
   *          PageResponse page = 2;
   *  }
   */
  pagination?: V1Beta1PageResponse;
}

export interface TokenmngrQueryAllTokenResponse {
  token?: TokenmngrToken[];

  /**
   * PageResponse is to be embedded in gRPC response messages where the
   * corresponding request message has used PageRequest.
   *
   *  message SomeResponse {
   *          repeated Bar results = 1;
   *          PageResponse page = 2;
   *  }
   */
  pagination?: V1Beta1PageResponse;
}

export interface TokenmngrQueryBurnsResponse {
  Burn?: TokenmngrBurn[];

  /**
   * PageResponse is to be embedded in gRPC response messages where the
   * corresponding request message has used PageRequest.
   *
   *  message SomeResponse {
   *          repeated Bar results = 1;
   *          PageResponse page = 2;
   *  }
   */
  pagination?: V1Beta1PageResponse;
}

export interface TokenmngrQueryGetMintpermResponse {
  mintperm?: TokenmngrMintperm;
}

export interface TokenmngrQueryGetOptionsResponse {
  Options?: TokenmngrOptions;
}

export interface TokenmngrQueryGetTokenBurnResponse {
  tokenBurn?: TokenmngrTokenBurn;
}

export interface TokenmngrQueryGetTokenResponse {
  token?: TokenmngrToken;
}

/**
 * QueryParamsResponse is response type for the Query/Params RPC method.
 */
export interface TokenmngrQueryParamsResponse {
  /** params holds all the parameters of this module. */
  params?: TokenmngrParams;
}

export interface TokenmngrToken {
  name?: string;
  base?: string;

  /**
   * Coin defines a token with a denomination and an amount.
   *
   * NOTE: The amount field is an Int which implements the custom method
   * signatures required by gogoproto.
   */
  maxSupply?: V1Beta1Coin;
  mintee?: string;
  creator?: string;
}

export interface TokenmngrTokenBurn {
  /**
   * Coin defines a token with a denomination and an amount.
   *
   * NOTE: The amount field is an Int which implements the custom method
   * signatures required by gogoproto.
   */
  amount?: V1Beta1Coin;
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
 * @title tokenmngr/burn.proto
 * @version version not set
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Query
   * @name QueryMintpermAll
   * @summary Queries a list of Mintperm items.
   * @request GET:/thesixnetwork/six-protocol/tokenmngr/mintperm
   */
  queryMintpermAll = (
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<TokenmngrQueryAllMintpermResponse, RpcStatus>({
      path: `/thesixnetwork/six-protocol/tokenmngr/mintperm`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryMintperm
   * @summary Queries a Mintperm by index.
   * @request GET:/thesixnetwork/six-protocol/tokenmngr/mintperm/{token}/{address}
   */
  queryMintperm = (token: string, address: string, params: RequestParams = {}) =>
    this.request<TokenmngrQueryGetMintpermResponse, RpcStatus>({
      path: `/thesixnetwork/six-protocol/tokenmngr/mintperm/${token}/${address}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryOptions
   * @summary Queries a Options by index.
   * @request GET:/thesixnetwork/six-protocol/tokenmngr/options
   */
  queryOptions = (params: RequestParams = {}) =>
    this.request<TokenmngrQueryGetOptionsResponse, RpcStatus>({
      path: `/thesixnetwork/six-protocol/tokenmngr/options`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryParams
   * @summary Parameters queries the parameters of the module.
   * @request GET:/thesixnetwork/six-protocol/tokenmngr/params
   */
  queryParams = (params: RequestParams = {}) =>
    this.request<TokenmngrQueryParamsResponse, RpcStatus>({
      path: `/thesixnetwork/six-protocol/tokenmngr/params`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryTokenAll
   * @summary Queries a list of Token items.
   * @request GET:/thesixnetwork/six-protocol/tokenmngr/token
   */
  queryTokenAll = (
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<TokenmngrQueryAllTokenResponse, RpcStatus>({
      path: `/thesixnetwork/six-protocol/tokenmngr/token`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryToken
   * @summary Queries a Token by index.
   * @request GET:/thesixnetwork/six-protocol/tokenmngr/token/{name}
   */
  queryToken = (name: string, params: RequestParams = {}) =>
    this.request<TokenmngrQueryGetTokenResponse, RpcStatus>({
      path: `/thesixnetwork/six-protocol/tokenmngr/token/${name}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryBurns
   * @summary Queries a list of Burns items.
   * @request GET:/thesixnetwork/sixprotocol/tokenmngr/burns
   */
  queryBurns = (
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<TokenmngrQueryBurnsResponse, RpcStatus>({
      path: `/thesixnetwork/sixprotocol/tokenmngr/burns`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryTokenBurnAll
   * @summary Queries a list of TokenBurn items.
   * @request GET:/thesixnetwork/sixprotocol/tokenmngr/token_burn
   */
  queryTokenBurnAll = (
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<TokenmngrQueryAllTokenBurnResponse, RpcStatus>({
      path: `/thesixnetwork/sixprotocol/tokenmngr/token_burn`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryTokenBurn
   * @summary Queries a TokenBurn by index.
   * @request GET:/thesixnetwork/sixprotocol/tokenmngr/token_burn/{token}
   */
  queryTokenBurn = (token: string, params: RequestParams = {}) =>
    this.request<TokenmngrQueryGetTokenBurnResponse, RpcStatus>({
      path: `/thesixnetwork/sixprotocol/tokenmngr/token_burn/${token}`,
      method: "GET",
      format: "json",
      ...params,
    });
}
