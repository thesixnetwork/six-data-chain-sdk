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

export interface NftoracleActionOracleRequest {
  /** @format uint64 */
  id?: string;
  nft_schema_code?: string;
  token_id?: string;
  action?: string;
  params?: NftoracleActionParameter[];
  caller?: string;
  ref_id?: string;

  /** @format uint64 */
  required_confirm?: string;
  status?: NftoracleRequestStatus;

  /** @format uint64 */
  current_confirm?: string;
  confirmers?: string[];

  /** @format date-time */
  created_at?: string;

  /** @format date-time */
  valid_until?: string;
  data_hashes?: NftoracleDataHash[];

  /** @format int64 */
  expired_height?: string;
  execution_error_message?: string;
}

export interface NftoracleActionParameter {
  name?: string;
  value?: string;
}

export interface NftoracleActionSigner {
  actor_address?: string;
  owner_address?: string;

  /** @format date-time */
  created_at?: string;

  /** @format date-time */
  expired_at?: string;
  creator?: string;
  creation_flow?: NftoracleCreationFlow;
}

export interface NftoracleActionSignerConfig {
  chain?: string;
  contractAddress?: string;
  creator?: string;
}

export interface NftoracleBindedSigner {
  ownerAddress?: string;
  signers?: NftoracleSetSignerParams[];

  /** @format uint64 */
  actorCount?: string;
}

export interface NftoracleCollectionOwnerRequest {
  /** @format uint64 */
  id?: string;
  nftSchemaCode?: string;
  signer?: string;

  /** @format uint64 */
  required_confirm?: string;
  status?: NftoracleRequestStatus;

  /** @format uint64 */
  current_confirm?: string;
  confirmers?: string[];

  /** @format date-time */
  created_at?: string;

  /** @format date-time */
  valid_until?: string;
  contract_info?: NftoracleOriginContractInfo[];

  /** @format int64 */
  expired_height?: string;
}

export interface NftoracleContractInfoHash {
  contract_param?: NftoracleParameterSyncSignerByOracle;

  /** @format byte */
  hash?: string;
  confirmers?: string[];
}

export enum NftoracleCreationFlow {
  ORACLE = "ORACLE",
  INTERNAL_OWNER = "INTERNAL_OWNER",
}

export interface NftoracleDataHash {
  origin_data?: NftoracleNftOriginData;

  /** @format byte */
  hash?: string;
  confirmers?: string[];
}

export interface NftoracleMintRequest {
  /** @format uint64 */
  id?: string;
  nft_schema_code?: string;
  token_id?: string;

  /** @format uint64 */
  required_confirm?: string;
  status?: NftoracleRequestStatus;

  /** @format uint64 */
  current_confirm?: string;
  confirmers?: string[];

  /** @format date-time */
  created_at?: string;

  /** @format date-time */
  valid_until?: string;
  data_hashes?: NftoracleDataHash[];

  /** @format int64 */
  expired_height?: string;
}

export interface NftoracleMsgCreateActionRequestResponse {
  /** @format uint64 */
  id?: string;
}

export interface NftoracleMsgCreateActionSignerConfigResponse {
  chain?: string;
  rpc_endpoint?: string;
  contractAddress?: string;
  contractName?: string;
  contractOwner?: string;
}

export interface NftoracleMsgCreateActionSignerResponse {
  ownerAddress?: string;
  signerAddress?: string;
  expireAt?: string;
}

export interface NftoracleMsgCreateMintRequestResponse {
  /** @format uint64 */
  id?: string;
  nftSchemaCode?: string;
  tokenId?: string;
}

export interface NftoracleMsgCreateSyncActionSignerResponse {
  /** @format uint64 */
  id?: string;
  chain?: string;
  ownerAddress?: string;
  actorAddress?: string;
}

export interface NftoracleMsgCreateVerifyCollectionOwnerRequestResponse {
  /** @format uint64 */
  id?: string;
  nftSchemaCode?: string;
  ownerAddress?: string;
}

export interface NftoracleMsgDeleteActionSignerConfigResponse {
  chain?: string;
}

export interface NftoracleMsgDeleteActionSignerResponse {
  ownerAddress?: string;
  signerAddress?: string;
}

export interface NftoracleMsgSetMinimumConfirmationResponse {
  newConfirmation?: string;
}

export interface NftoracleMsgSubmitActionResponseResponse {
  actionRequestID?: string;
}

export interface NftoracleMsgSubmitMintResponseResponse {
  mintRequestID?: string;
}

export interface NftoracleMsgSubmitSyncActionSignerResponse {
  /** @format uint64 */
  verifyRequestID?: string;
  expireAt?: string;
}

export interface NftoracleMsgSubmitVerifyCollectionOwnerResponse {
  /** @format uint64 */
  verifyRequestID?: string;
}

export interface NftoracleMsgUpdateActionSignerConfigResponse {
  chain?: string;
  rpc_endpoint?: string;
  new_rpc_endpoint?: string;
  contractAddress?: string;
  new_contractAddress?: string;
  contractName?: string;
  new_contractName?: string;
  contractOwner?: string;
  new_contractOwner?: string;
}

export interface NftoracleMsgUpdateActionSignerResponse {
  ownerAddress?: string;
  signerAddress?: string;
  expireAt?: string;
}

export interface NftoracleNftOriginData {
  image?: string;
  holder_address?: string;
  traits?: NftoracleTrait[];
}

export interface NftoracleOracleConfig {
  /** @format int32 */
  minimum_confirmation?: number;
}

export interface NftoracleOriginContractInfo {
  contractOriginDataInfo?: NftoracleOriginContractParam;

  /** @format byte */
  hash?: string;
  confirmers?: string[];
}

export interface NftoracleOriginContractParam {
  chain?: string;
  contract_address?: string;
  contract_owner?: string;

  /** @format date-time */
  request_expire?: string;
}

export interface NftoracleParameterSyncSignerByOracle {
  chain?: string;
  owner_address?: string;
  actor_address?: string;
  expire_epoch?: string;
}

/**
 * Params defines the parameters for the module.
 */
export interface NftoracleParams {
  mint_request_active_duration?: string;
  action_request_active_duration?: string;
  verify_request_active_duration?: string;
  action_signer_active_duration?: string;
  sync_action_signer_active_duration?: string;
}

export interface NftoracleQueryAllActionRequestResponse {
  ActionOracleRequest?: NftoracleActionOracleRequest[];

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

export interface NftoracleQueryAllActionSignerConfigResponse {
  actionSignerConfig?: NftoracleActionSignerConfig[];

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

export interface NftoracleQueryAllActionSignerResponse {
  actionSigner?: NftoracleActionSigner[];

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

export interface NftoracleQueryAllCollectionOwnerRequestResponse {
  CollectionOwnerRequest?: NftoracleCollectionOwnerRequest[];

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

export interface NftoracleQueryAllMintRequestResponse {
  MintRequest?: NftoracleMintRequest[];

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

export interface NftoracleQueryAllSyncActionSignerResponse {
  SyncActionSigner?: NftoracleSyncActionSigner[];

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

export interface NftoracleQueryGetActionRequestResponse {
  ActionOracleRequest?: NftoracleActionOracleRequest;
}

export interface NftoracleQueryGetActionSignerConfigResponse {
  actionSignerConfig?: NftoracleActionSignerConfig;
}

export interface NftoracleQueryGetActionSignerResponse {
  actionSigner?: NftoracleActionSigner;
}

export interface NftoracleQueryGetBindedSignerResponse {
  bindedSigner?: NftoracleBindedSigner;
}

export interface NftoracleQueryGetCollectionOwnerRequestResponse {
  CollectionOwnerRequest?: NftoracleCollectionOwnerRequest;
}

export interface NftoracleQueryGetMintRequestResponse {
  MintRequest?: NftoracleMintRequest;
}

export interface NftoracleQueryGetOracleConfigResponse {
  OracleConfig?: NftoracleOracleConfig;
}

export interface NftoracleQueryGetSyncActionSignerResponse {
  SyncActionSigner?: NftoracleSyncActionSigner;
}

/**
 * QueryParamsResponse is response type for the Query/Params RPC method.
 */
export interface NftoracleQueryParamsResponse {
  /** params holds all the parameters of this module. */
  params?: NftoracleParams;
}

export enum NftoracleRequestStatus {
  PENDING = "PENDING",
  SUCCESS_WITH_CONSENSUS = "SUCCESS_WITH_CONSENSUS",
  FAILED_WITHOUT_CONCENSUS = "FAILED_WITHOUT_CONCENSUS",
  EXPIRED = "EXPIRED",
  FAILED_ON_EXECUTION = "FAILED_ON_EXECUTION",
  FAILED_REJECT_BY_CONSENSUS = "FAILED_REJECT_BY_CONSENSUS",
}

export interface NftoracleSyncActionSigner {
  /** @format uint64 */
  id?: string;
  chain?: string;
  actor_address?: string;
  owner_address?: string;
  caller?: string;

  /** @format uint64 */
  required_confirm?: string;
  status?: NftoracleRequestStatus;

  /** @format uint64 */
  current_confirm?: string;
  confirmers?: string[];

  /** @format date-time */
  created_at?: string;

  /** @format date-time */
  valid_until?: string;
  data_hashes?: NftoracleContractInfoHash[];

  /** @format int64 */
  expired_height?: string;
  execution_error_message?: string;
}

export interface NftoracleTrait {
  trait_type?: string;
  value?: string;
  display_type?: string;
  max_value?: string;
}

export interface NftoracleSetSignerParams {
  actor_address?: string;

  /** @format date-time */
  expired_at?: string;
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
 * @title nftoracle/action_request.proto
 * @version version not set
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Query
   * @name QueryActionRequestAll
   * @summary Queries a list of ActionRequest items.
   * @request GET:/thesixnetwork/sixnft/nftoracle/action_request
   */
  queryActionRequestAll = (
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
      "pagination.reverse"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<NftoracleQueryAllActionRequestResponse, RpcStatus>({
      path: `/thesixnetwork/sixnft/nftoracle/action_request`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryActionOracleRequest
   * @summary Queries a ActionRequest by id.
   * @request GET:/thesixnetwork/sixnft/nftoracle/action_request/{id}
   */
  queryActionOracleRequest = (id: string, params: RequestParams = {}) =>
    this.request<NftoracleQueryGetActionRequestResponse, RpcStatus>({
      path: `/thesixnetwork/sixnft/nftoracle/action_request/${id}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryActionSignerAll
   * @summary Queries a list of ActionSigner items.
   * @request GET:/thesixnetwork/sixnft/nftoracle/action_signer
   */
  queryActionSignerAll = (
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
      "pagination.reverse"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<NftoracleQueryAllActionSignerResponse, RpcStatus>({
      path: `/thesixnetwork/sixnft/nftoracle/action_signer`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryActionSigner
   * @summary Queries a ActionSigner by index.
   * @request GET:/thesixnetwork/sixnft/nftoracle/action_signer/{actorAddress}/{ownerAddress}
   */
  queryActionSigner = (actorAddress: string, ownerAddress: string, params: RequestParams = {}) =>
    this.request<NftoracleQueryGetActionSignerResponse, RpcStatus>({
      path: `/thesixnetwork/sixnft/nftoracle/action_signer/${actorAddress}/${ownerAddress}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryActionSignerConfigAll
   * @summary Queries a list of ActionSignerConfig items.
   * @request GET:/thesixnetwork/sixnft/nftoracle/action_signer_config
   */
  queryActionSignerConfigAll = (
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
      "pagination.reverse"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<NftoracleQueryAllActionSignerConfigResponse, RpcStatus>({
      path: `/thesixnetwork/sixnft/nftoracle/action_signer_config`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryActionSignerConfig
   * @summary Queries a ActionSignerConfig by index.
   * @request GET:/thesixnetwork/sixnft/nftoracle/action_signer_config/{chain}
   */
  queryActionSignerConfig = (chain: string, params: RequestParams = {}) =>
    this.request<NftoracleQueryGetActionSignerConfigResponse, RpcStatus>({
      path: `/thesixnetwork/sixnft/nftoracle/action_signer_config/${chain}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryBindedSigner
   * @summary Queries a BindedSigner by index.
   * @request GET:/thesixnetwork/sixnft/nftoracle/binded_signer/{ownerAddress}
   */
  queryBindedSigner = (ownerAddress: string, params: RequestParams = {}) =>
    this.request<NftoracleQueryGetBindedSignerResponse, RpcStatus>({
      path: `/thesixnetwork/sixnft/nftoracle/binded_signer/${ownerAddress}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryCollectionOwnerRequestAll
   * @summary Queries a list of CollectionOwnerRequest items.
   * @request GET:/thesixnetwork/sixnft/nftoracle/collection_owner_request
   */
  queryCollectionOwnerRequestAll = (
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
      "pagination.reverse"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<NftoracleQueryAllCollectionOwnerRequestResponse, RpcStatus>({
      path: `/thesixnetwork/sixnft/nftoracle/collection_owner_request`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryCollectionOwnerRequest
   * @summary Queries a CollectionOwnerRequest by id.
   * @request GET:/thesixnetwork/sixnft/nftoracle/collection_owner_request/{id}
   */
  queryCollectionOwnerRequest = (id: string, params: RequestParams = {}) =>
    this.request<NftoracleQueryGetCollectionOwnerRequestResponse, RpcStatus>({
      path: `/thesixnetwork/sixnft/nftoracle/collection_owner_request/${id}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryMintRequestAll
   * @summary Queries a list of MintRequest items.
   * @request GET:/thesixnetwork/sixnft/nftoracle/mint_request
   */
  queryMintRequestAll = (
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
      "pagination.reverse"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<NftoracleQueryAllMintRequestResponse, RpcStatus>({
      path: `/thesixnetwork/sixnft/nftoracle/mint_request`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryMintRequest
   * @summary Queries a MintRequest by id.
   * @request GET:/thesixnetwork/sixnft/nftoracle/mint_request/{id}
   */
  queryMintRequest = (id: string, params: RequestParams = {}) =>
    this.request<NftoracleQueryGetMintRequestResponse, RpcStatus>({
      path: `/thesixnetwork/sixnft/nftoracle/mint_request/${id}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryOracleConfig
   * @summary Queries a OracleConfig by index.
   * @request GET:/thesixnetwork/sixnft/nftoracle/oracle_config
   */
  queryOracleConfig = (params: RequestParams = {}) =>
    this.request<NftoracleQueryGetOracleConfigResponse, RpcStatus>({
      path: `/thesixnetwork/sixnft/nftoracle/oracle_config`,
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
   * @request GET:/thesixnetwork/sixnft/nftoracle/params
   */
  queryParams = (params: RequestParams = {}) =>
    this.request<NftoracleQueryParamsResponse, RpcStatus>({
      path: `/thesixnetwork/sixnft/nftoracle/params`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QuerySyncActionSignerAll
   * @summary Queries a list of SyncActionSigner items.
   * @request GET:/thesixnetwork/sixnft/nftoracle/sync_action_signer
   */
  querySyncActionSignerAll = (
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
      "pagination.reverse"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<NftoracleQueryAllSyncActionSignerResponse, RpcStatus>({
      path: `/thesixnetwork/sixnft/nftoracle/sync_action_signer`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QuerySyncActionSigner
   * @summary Queries a SyncActionSigner by id.
   * @request GET:/thesixnetwork/sixnft/nftoracle/sync_action_signer/{id}
   */
  querySyncActionSigner = (id: string, params: RequestParams = {}) =>
    this.request<NftoracleQueryGetSyncActionSignerResponse, RpcStatus>({
      path: `/thesixnetwork/sixnft/nftoracle/sync_action_signer/${id}`,
      method: "GET",
      format: "json",
      ...params,
    });
}
