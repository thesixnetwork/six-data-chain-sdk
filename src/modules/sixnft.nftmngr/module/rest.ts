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
import fetch from "cross-fetch";
export interface NftAttributeValueBooleanAttributeValue {
  value?: boolean;
}

export interface NftAttributeValueFloatAttributeValue {
  /** @format double */
  value?: number;
}

export interface NftAttributeValueNumberAttributeValue {
  /** @format uint64 */
  value?: string;
}

export interface NftAttributeValueStringAttributeValue {
  value?: string;
}

export interface GooglerpcStatus {
  /** @format int32 */
  code?: number;
  message?: string;
  details?: ProtobufAny[];
}

export interface NftmngrAction {
  name?: string;
  desc?: string;
  when?: string;
  then?: string[];
}

export interface NftmngrActionByRefId {
  refId?: string;
  creator?: string;
  nftSchemaCode?: string;
  tokenId?: string;
  action?: string;
}

export interface NftmngrAttributeDefinition {
  name?: string;
  data_type?: string;
  required?: boolean;
  display_value_field?: string;
  display_option?: NftmngrDisplayOption;
  default_mint_value?: string;
  hidden_to_marketplace?: boolean;
}

export enum NftmngrAttributeOverriding {
  ORIGIN = "ORIGIN",
  CHAIN = "CHAIN",
}

export interface NftmngrDisplayOption {
  bool_true_value?: string;
  bool_false_value?: string;
  opensea?: NftmngrOpenseaDisplayOption;
}

export interface NftmngrMsgCreateMetadataResponse {
  nftSchemaCode?: string;
  tokenId?: string;
}

export interface NftmngrMsgCreateNFTSchemaResponse {
  code?: string;
}

export interface NftmngrMsgPerformActionByAdminResponse {
  nft_schema_code?: string;
  token_id?: string;
}

export interface NftmngrNFTSchema {
  code?: string;
  name?: string;
  owner?: string;
  origin_data?: NftmngrOriginData;
  onchain_data?: NftmngrOnChainData;
}

export interface NftmngrNftAttributeValue {
  name?: string;
  number_attribute_value?: NftAttributeValueNumberAttributeValue;
  string_attribute_value?: NftAttributeValueStringAttributeValue;
  boolean_attribute_value?: NftAttributeValueBooleanAttributeValue;
  float_attribute_value?: NftAttributeValueFloatAttributeValue;
}

export interface NftmngrNftData {
  nft_schema_code?: string;
  token_id?: string;
  token_owner?: string;
  owner_address_type?: NftmngrOwnerAddressType;
  origin_image?: string;
  onchain_image?: string;
  origin_attributes?: NftmngrNftAttributeValue[];
  onchain_attributes?: NftmngrNftAttributeValue[];
}

export interface NftmngrOnChainData {
  reveal_required?: boolean;

  /** @format byte */
  reveal_secret?: string;
  nft_attributes?: NftmngrAttributeDefinition[];
  token_attributes?: NftmngrAttributeDefinition[];
  actions?: NftmngrAction[];
  status?: Record<string, boolean>;
  on_off_switch?: Record<string, boolean>;
  nft_attributes_value?: NftmngrNftAttributeValue[];
}

export interface NftmngrOpenseaDisplayOption {
  display_type?: string;
  trait_type?: string;

  /** @format uint64 */
  max_value?: string;
}

export interface NftmngrOrganization {
  name?: string;
  owner?: string;
}

export interface NftmngrOriginData {
  origin_chain?: string;
  origin_contract_address?: string;
  origin_base_uri?: string;
  attribute_overriding?: NftmngrAttributeOverriding;
  metadata_format?: string;
  origin_attributes?: NftmngrAttributeDefinition[];
  uri_retrieval_method?: NftmngrURIRetrievalMethod;
}

export enum NftmngrOwnerAddressType {
  ORIGIN_ADDRESS = "ORIGIN_ADDRESS",
  INTERNAL_ADDRESS = "INTERNAL_ADDRESS",
}

/**
 * Params defines the parameters for the module.
 */
export type NftmngrParams = object;

export interface NftmngrQueryAllActionByRefIdResponse {
  actionByRefId?: NftmngrActionByRefId[];

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

export interface NftmngrQueryAllNFTSchemaResponse {
  nFTSchema?: NftmngrNFTSchema[];

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

export interface NftmngrQueryAllNftDataResponse {
  nftData?: NftmngrNftData[];

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

export interface NftmngrQueryAllOrganizationResponse {
  organization?: NftmngrOrganization[];

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

export interface NftmngrQueryGetActionByRefIdResponse {
  actionByRefId?: NftmngrActionByRefId;
}

export interface NftmngrQueryGetNFTSchemaResponse {
  nFTSchema?: NftmngrNFTSchema;
}

export interface NftmngrQueryGetNftDataResponse {
  nftData?: NftmngrNftData;
}

export interface NftmngrQueryGetOrganizationResponse {
  organization?: NftmngrOrganization;
}

/**
 * QueryParamsResponse is response type for the Query/Params RPC method.
 */
export interface NftmngrQueryParamsResponse {
  /** params holds all the parameters of this module. */
  params?: NftmngrParams;
}

export enum NftmngrURIRetrievalMethod {
  BASE = "BASE",
  TOKEN = "TOKEN",
}

/**
* `Any` contains an arbitrary serialized protocol buffer message along with a
URL that describes the type of the serialized message.

Protobuf library provides support to pack/unpack Any values in the form
of utility functions or additional generated methods of the Any type.

Example 1: Pack and unpack a message in C++.

    Foo foo = ...;
    Any any;
    any.PackFrom(foo);
    ...
    if (any.UnpackTo(&foo)) {
      ...
    }

Example 2: Pack and unpack a message in Java.

    Foo foo = ...;
    Any any = Any.pack(foo);
    ...
    if (any.is(Foo.class)) {
      foo = any.unpack(Foo.class);
    }

 Example 3: Pack and unpack a message in Python.

    foo = Foo(...)
    any = Any()
    any.Pack(foo)
    ...
    if any.Is(Foo.DESCRIPTOR):
      any.Unpack(foo)
      ...

 Example 4: Pack and unpack a message in Go

     foo := &pb.Foo{...}
     any, err := anypb.New(foo)
     if err != nil {
       ...
     }
     ...
     foo := &pb.Foo{}
     if err := any.UnmarshalTo(foo); err != nil {
       ...
     }

The pack methods provided by protobuf library will by default use
'type.googleapis.com/full.type.name' as the type URL and the unpack
methods only use the fully qualified type name after the last '/'
in the type URL, for example "foo.bar.com/x/y.z" will yield type
name "y.z".


JSON
====
The JSON representation of an `Any` value uses the regular
representation of the deserialized, embedded message, with an
additional field `@type` which contains the type URL. Example:

    package google.profile;
    message Person {
      string first_name = 1;
      string last_name = 2;
    }

    {
      "@type": "type.googleapis.com/google.profile.Person",
      "firstName": <string>,
      "lastName": <string>
    }

If the embedded message type is well-known and has a custom JSON
representation, that representation will be embedded adding a field
`value` which holds the custom JSON in addition to the `@type`
field. Example (for message [google.protobuf.Duration][]):

    {
      "@type": "type.googleapis.com/google.protobuf.Duration",
      "value": "1.212s"
    }
*/
export interface ProtobufAny {
  /**
   * A URL/resource name that uniquely identifies the type of the serialized
   * protocol buffer message. This string must contain at least
   * one "/" character. The last segment of the URL's path must represent
   * the fully qualified name of the type (as in
   * `path/google.protobuf.Duration`). The name should be in a canonical form
   * (e.g., leading "." is not accepted).
   *
   * In practice, teams usually precompile into the binary all types that they
   * expect it to use in the context of Any. However, for URLs which use the
   * scheme `http`, `https`, or no scheme, one can optionally set up a type
   * server that maps type URLs to message definitions as follows:
   *
   * * If no scheme is provided, `https` is assumed.
   * * An HTTP GET on the URL must yield a [google.protobuf.Type][]
   *   value in binary format, or produce an error.
   * * Applications are allowed to cache lookup results based on the
   *   URL, or have them precompiled into a binary to avoid any
   *   lookup. Therefore, binary compatibility needs to be preserved
   *   on changes to types. (Use versioned type names to manage
   *   breaking changes.)
   *
   * Note: this functionality is not currently available in the official
   * protobuf release, and it is not used for type URLs beginning with
   * type.googleapis.com.
   *
   * Schemes other than `http`, `https` (or the empty scheme) might be
   * used with implementation specific semantics.
   */
  "@type"?: string;
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
 * @title nftmngr/action.proto
 * @version version not set
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Query
   * @name QueryActionByRefIdAll
   * @summary Queries a list of ActionByRefId items.
   * @request GET:/sixnft/nftmngr/action_by_ref_id
   */
  queryActionByRefIdAll = (
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<NftmngrQueryAllActionByRefIdResponse, GooglerpcStatus>({
      path: `/sixnft/nftmngr/action_by_ref_id`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryActionByRefId
   * @summary Queries a ActionByRefId by index.
   * @request GET:/sixnft/nftmngr/action_by_ref_id/{refId}
   */
  queryActionByRefId = (refId: string, params: RequestParams = {}) =>
    this.request<NftmngrQueryGetActionByRefIdResponse, GooglerpcStatus>({
      path: `/sixnft/nftmngr/action_by_ref_id/${refId}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryNftDataAll
   * @summary Queries a list of NftData items.
   * @request GET:/sixnft/nftmngr/nft_data
   */
  queryNftDataAll = (
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<NftmngrQueryAllNftDataResponse, GooglerpcStatus>({
      path: `/sixnft/nftmngr/nft_data`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryNftData
   * @summary Queries a NftData by index.
   * @request GET:/sixnft/nftmngr/nft_data/{nftSchemaCode}/{tokenId}
   */
  queryNftData = (nftSchemaCode: string, tokenId: string, params: RequestParams = {}) =>
    this.request<NftmngrQueryGetNftDataResponse, GooglerpcStatus>({
      path: `/sixnft/nftmngr/nft_data/${nftSchemaCode}/${tokenId}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryNftSchemaAll
   * @summary Queries a list of NFTSchema items.
   * @request GET:/sixnft/nftmngr/nft_schema
   */
  queryNftSchemaAll = (
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<NftmngrQueryAllNFTSchemaResponse, GooglerpcStatus>({
      path: `/sixnft/nftmngr/nft_schema`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryNftSchema
   * @summary Queries a NFTSchema by index.
   * @request GET:/sixnft/nftmngr/nft_schema/{code}
   */
  queryNftSchema = (code: string, params: RequestParams = {}) =>
    this.request<NftmngrQueryGetNFTSchemaResponse, GooglerpcStatus>({
      path: `/sixnft/nftmngr/nft_schema/${code}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryOrganizationAll
   * @summary Queries a list of Organization items.
   * @request GET:/sixnft/nftmngr/organization
   */
  queryOrganizationAll = (
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<NftmngrQueryAllOrganizationResponse, GooglerpcStatus>({
      path: `/sixnft/nftmngr/organization`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryOrganization
   * @summary Queries a Organization by index.
   * @request GET:/sixnft/nftmngr/organization/{name}
   */
  queryOrganization = (name: string, params: RequestParams = {}) =>
    this.request<NftmngrQueryGetOrganizationResponse, GooglerpcStatus>({
      path: `/sixnft/nftmngr/organization/${name}`,
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
   * @request GET:/sixnft/nftmngr/params
   */
  queryParams = (params: RequestParams = {}) =>
    this.request<NftmngrQueryParamsResponse, GooglerpcStatus>({
      path: `/sixnft/nftmngr/params`,
      method: "GET",
      format: "json",
      ...params,
    });
}
