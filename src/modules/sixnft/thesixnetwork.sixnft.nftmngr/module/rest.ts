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

export interface NftmngrAction {
  name?: string;
  desc?: string;
  disable?: boolean;
  when?: string;
  then?: string[];
  allowed_actioner?: NftmngrAllowedActioner;
  params?: NftmngractionParams[];
}

export interface NftmngrActionByRefId {
  refId?: string;
  creator?: string;
  nftSchemaCode?: string;
  tokenId?: string;
  action?: string;
}

export interface NftmngrActionExecutor {
  nftSchemaCode?: string;
  executorAddress?: string;
  creator?: string;
}

export interface NftmngrActionOfSchema {
  nftSchemaCode?: string;
  name?: string;

  /** @format uint64 */
  index?: string;
}

export interface NftmngrActionParameter {
  name?: string;
  value?: string;
}

export enum NftmngrAllowedActioner {
  ALLOWED_ACTIONER_ALL = "ALLOWED_ACTIONER_ALL",
  ALLOWED_ACTIONER_SYSTEM_ONLY = "ALLOWED_ACTIONER_SYSTEM_ONLY",
  ALLOWED_ACTIONER_USER_ONLY = "ALLOWED_ACTIONER_USER_ONLY",
}

export interface NftmngrAttributeDefinition {
  name?: string;
  data_type?: string;
  required?: boolean;
  display_value_field?: string;
  display_option?: NftmngrDisplayOption;
  default_mint_value?: NftmngrDefaultMintValue;
  hidden_overide?: boolean;
  hidden_to_marketplace?: boolean;

  /** @format uint64 */
  index?: string;
}

export enum NftmngrAttributeLocation {
  NFT_ATTRIBUTE = "NFT_ATTRIBUTE",
  TOKEN_ATTRIBUTE = "TOKEN_ATTRIBUTE",
}

export enum NftmngrAttributeOverriding {
  ORIGIN = "ORIGIN",
  CHAIN = "CHAIN",
}

export enum NftmngrAuthorizeTo {
  SYSTEM = "SYSTEM",
  ALL = "ALL",
}

export interface NftmngrBooleanAttributeValue {
  value?: boolean;
}

export interface NftmngrDefaultMintValue {
  number_attribute_value?: NftmngrNumberAttributeValue;
  string_attribute_value?: NftmngrStringAttributeValue;
  boolean_attribute_value?: NftmngrBooleanAttributeValue;
  float_attribute_value?: NftmngrFloatAttributeValue;
}

export interface NftmngrDisplayOption {
  bool_true_value?: string;
  bool_false_value?: string;
  opensea?: NftmngrOpenseaDisplayOption;
}

export interface NftmngrExecutorOfSchema {
  nftSchemaCode?: string;
  executorAddress?: string[];
}

export interface NftmngrFeeConfig {
  fee_amount?: string;
  fee_distributions?: NftmngrFeeDistribution[];
}

export interface NftmngrFeeDistribution {
  method?: NftmngrFeeDistributionMethod;

  /** @format float */
  portion?: number;
}

export enum NftmngrFeeDistributionMethod {
  BURN = "BURN",
  REWARD_POOL = "REWARD_POOL",
  TRANSFER = "TRANSFER",
}

export enum NftmngrFeeSubject {
  CREATE_NFT_SCHEMA = "CREATE_NFT_SCHEMA",
}

export interface NftmngrFlagStatus {
  status_name?: string;
  status_value?: boolean;
}

export interface NftmngrFloatAttributeValue {
  /** @format double */
  value?: number;
}

export interface NftmngrMapTokenToMinter {
  token_id?: string;
  minter?: string;
}

export interface NftmngrMetadataCreator {
  nftSchemaCode?: string;
  metadataMintedBy?: NftmngrMapTokenToMinter[];
}

export interface NftmngrMsgAddActionResponse {
  code?: string;
  name?: string;
  onchainData?: NftmngrOnChainData;
}

export interface NftmngrMsgAddAttributeResponse {
  code?: string;
  name?: string;
  onchainData?: NftmngrOnChainData;
}

export interface NftmngrMsgChangeOrgOwnerResponse {
  orgName?: string;
  oldOwner?: string;
  newOwner?: string;
}

export interface NftmngrMsgChangeSchemaOwnerResponse {
  nftSchemaCode?: string;
  newOwner?: string;
}

export interface NftmngrMsgCreateActionExecutorResponse {
  nftSchemaCode?: string;
  executorAddress?: string;
}

export interface NftmngrMsgCreateMetadataResponse {
  nftSchemaCode?: string;
  tokenId?: string;
}

export interface NftmngrMsgCreateMultiMetadataResponse {
  nftSchemaCode?: string;
  tokenId?: string[];
}

export interface NftmngrMsgCreateNFTSchemaResponse {
  code?: string;
}

export interface NftmngrMsgDeleteActionExecutorResponse {
  nftSchemaCode?: string;
  executorAddress?: string;
}

export interface NftmngrMsgDeleteSchemaAttributeResponse {
  nftSchemaCode?: string;
  name?: string;
}

export interface NftmngrMsgPerformActionByAdminResponse {
  nft_schema_code?: string;
  token_id?: string;
}

export interface NftmngrMsgPerformMultiTokenActionResponse {
  nftSchemaCode?: string;
  tokenId?: string[];
  action?: string[];
}

export interface NftmngrMsgResyncAttributesResponse {
  nftSchemaCode?: string;
}

export interface NftmngrMsgSetAttributeOveridingResponse {
  schemaCode?: string;
  newOveriding?: string;
}

export interface NftmngrMsgSetBaseUriResponse {
  code?: string;
  uri?: string;
}

export type NftmngrMsgSetFeeConfigResponse = object;

export interface NftmngrMsgSetMetadataFormatResponse {
  schemaCode?: string;
  newFormat?: string;
}

export interface NftmngrMsgSetMintauthResponse {
  nftSchemaCode?: string;
}

export interface NftmngrMsgSetOriginChainResponse {
  schemaCode?: string;
  newOriginChain?: string;
}

export interface NftmngrMsgSetOriginContractResponse {
  schemaCode?: string;
  newContractAddress?: string;
}

export interface NftmngrMsgSetUriRetrievalMethodResponse {
  schemaCode?: string;
  newMethod?: string;
}

export interface NftmngrMsgShowAttributesResponse {
  nftSchema?: string;
}

export interface NftmngrMsgToggleActionResponse {
  code?: string;
  name?: string;
  onchainDataAction?: NftmngrOnChainData;
}

export interface NftmngrMsgUpdateActionExecutorResponse {
  nftSchemaCode?: string;
  executorAddress?: string;
}

export interface NftmngrMsgUpdateActionResponse {
  nftSchemaCode?: string;
  name?: string;
}

export interface NftmngrMsgUpdateSchemaAttributeResponse {
  nftSchemaCode?: string;
  name?: string;
  new_attribute?: NftmngrSchemaAttribute;
}

export interface NftmngrNFTFeeBalance {
  fee_balances?: string[];
}

export interface NftmngrNFTFeeConfig {
  schema_fee?: NftmngrFeeConfig;
}

export interface NftmngrNFTSchema {
  code?: string;
  name?: string;
  owner?: string;
  description?: string;
  origin_data?: NftmngrOriginData;
  onchain_data?: NftmngrOnChainData;
  isVerified?: boolean;
  mint_authorization?: string;
}

export interface NftmngrNFTSchemaByContract {
  originContractAddress?: string;
  schemaCodes?: string[];
}

export interface NftmngrNftAttributeValue {
  name?: string;
  number_attribute_value?: NftmngrNumberAttributeValue;
  string_attribute_value?: NftmngrStringAttributeValue;
  boolean_attribute_value?: NftmngrBooleanAttributeValue;
  float_attribute_value?: NftmngrFloatAttributeValue;
  hidden_to_marketplace?: boolean;
}

export interface NftmngrNftData {
  nft_schema_code?: string;
  token_id?: string;
  token_owner?: string;
  owner_address_type?: NftmngrOwnerAddressType;
  origin_image?: string;
  onchain_image?: string;
  token_uri?: string;
  origin_attributes?: NftmngrNftAttributeValue[];
  onchain_attributes?: NftmngrNftAttributeValue[];
}

export interface NftmngrNumberAttributeValue {
  /** @format uint64 */
  value?: string;
}

export interface NftmngrOnChainData {
  nft_attributes?: NftmngrAttributeDefinition[];
  token_attributes?: NftmngrAttributeDefinition[];
  actions?: NftmngrAction[];
  status?: NftmngrFlagStatus[];
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

export interface NftmngrQueryAllActionExecutorResponse {
  actionExecutor?: NftmngrActionExecutor[];

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

export interface NftmngrQueryAllActionOfSchemaResponse {
  actionOfSchema?: NftmngrActionOfSchema[];

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

export interface NftmngrQueryAllExecutorOfSchemaResponse {
  executorOfSchema?: NftmngrExecutorOfSchema[];

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

export interface NftmngrQueryAllMetadataCreatorResponse {
  metadataCreator?: NftmngrMetadataCreator[];

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

export interface NftmngrQueryAllNFTSchemaByContractResponse {
  nFTSchemaByContract?: NftmngrNFTSchemaByContract[];

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

export interface NftmngrQueryAllSchemaAttributeResponse {
  schemaAttribute?: NftmngrSchemaAttribute[];

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

export interface NftmngrQueryGetActionExecutorResponse {
  actionExecutor?: NftmngrActionExecutor;
}

export interface NftmngrQueryGetActionOfSchemaResponse {
  actionOfSchema?: NftmngrActionOfSchema;
}

export interface NftmngrQueryGetExecutorOfSchemaResponse {
  executorOfSchema?: NftmngrExecutorOfSchema;
}

export interface NftmngrQueryGetMetadataCreatorResponse {
  metadataCreator?: NftmngrMetadataCreator;
}

export interface NftmngrQueryGetNFTFeeBalanceResponse {
  NFTFeeBalance?: NftmngrNFTFeeBalance;
}

export interface NftmngrQueryGetNFTFeeConfigResponse {
  NFTFeeConfig?: NftmngrNFTFeeConfig;
}

export interface NftmngrQueryGetNFTSchemaByContractResponse {
  nFTSchemaByContract?: NftmngrNFTSchemaByContract;
}

export interface NftmngrQueryGetNFTSchemaResponse {
  nFTSchema?: NftmngrNFTSchema;
}

export interface NftmngrQueryGetNftCollectionResponse {
  nftCollection?: NftmngrNftData[];

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

export interface NftmngrQueryGetNftDataResponse {
  nftData?: NftmngrNftData;
}

export interface NftmngrQueryGetOrganizationResponse {
  organization?: NftmngrOrganization;
}

export interface NftmngrQueryGetSchemaAttributeResponse {
  schemaAttribute?: NftmngrSchemaAttribute;
}

export interface NftmngrQueryListAttributeBySchemaResponse {
  schemaAttribute?: NftmngrSchemaAttribute[];
}

/**
 * QueryParamsResponse is response type for the Query/Params RPC method.
 */
export interface NftmngrQueryParamsResponse {
  /** params holds all the parameters of this module. */
  params?: NftmngrParams;
}

export interface NftmngrSchemaAttribute {
  nftSchemaCode?: string;
  name?: string;
  data_type?: string;
  current_value?: NftmngrSchemaAttributeValue;
  creator?: string;
}

export interface NftmngrSchemaAttributeValue {
  number_attribute_value?: NftmngrNumberAttributeValue;
  string_attribute_value?: NftmngrStringAttributeValue;
  boolean_attribute_value?: NftmngrBooleanAttributeValue;
  float_attribute_value?: NftmngrFloatAttributeValue;
}

export interface NftmngrStringAttributeValue {
  value?: string;
}

export enum NftmngrURIRetrievalMethod {
  BASE = "BASE",
  TOKEN = "TOKEN",
}

export interface NftmngractionParams {
  name?: string;
  desc?: string;
  data_type?: string;
  required?: boolean;
  default_value?: string;
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
   * @request GET:/thesixnetwork/sixnft/nftmngr/action_by_ref_id
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
    this.request<NftmngrQueryAllActionByRefIdResponse, RpcStatus>({
      path: `/thesixnetwork/sixnft/nftmngr/action_by_ref_id`,
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
   * @request GET:/thesixnetwork/sixnft/nftmngr/action_by_ref_id/{refId}
   */
  queryActionByRefId = (refId: string, params: RequestParams = {}) =>
    this.request<NftmngrQueryGetActionByRefIdResponse, RpcStatus>({
      path: `/thesixnetwork/sixnft/nftmngr/action_by_ref_id/${refId}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryActionExecutorAll
   * @summary Queries a list of ActionExecutor items.
   * @request GET:/thesixnetwork/sixnft/nftmngr/action_executor
   */
  queryActionExecutorAll = (
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<NftmngrQueryAllActionExecutorResponse, RpcStatus>({
      path: `/thesixnetwork/sixnft/nftmngr/action_executor`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryActionExecutor
   * @summary Queries a ActionExecutor by index.
   * @request GET:/thesixnetwork/sixnft/nftmngr/action_executor/{nftSchemaCode}/{executorAddress}
   */
  queryActionExecutor = (nftSchemaCode: string, executorAddress: string, params: RequestParams = {}) =>
    this.request<NftmngrQueryGetActionExecutorResponse, RpcStatus>({
      path: `/thesixnetwork/sixnft/nftmngr/action_executor/${nftSchemaCode}/${executorAddress}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryActionOfSchemaAll
   * @summary Queries a list of ActionOfSchema items.
   * @request GET:/thesixnetwork/sixnft/nftmngr/action_of_schema
   */
  queryActionOfSchemaAll = (
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<NftmngrQueryAllActionOfSchemaResponse, RpcStatus>({
      path: `/thesixnetwork/sixnft/nftmngr/action_of_schema`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryActionOfSchema
   * @summary Queries a ActionOfSchema by index.
   * @request GET:/thesixnetwork/sixnft/nftmngr/action_of_schema/{nftSchemaCode}/{name}
   */
  queryActionOfSchema = (nftSchemaCode: string, name: string, params: RequestParams = {}) =>
    this.request<NftmngrQueryGetActionOfSchemaResponse, RpcStatus>({
      path: `/thesixnetwork/sixnft/nftmngr/action_of_schema/${nftSchemaCode}/${name}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryExecutorOfSchemaAll
   * @summary Queries a list of ExecutorOfSchema items.
   * @request GET:/thesixnetwork/sixnft/nftmngr/executor_of_schema
   */
  queryExecutorOfSchemaAll = (
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<NftmngrQueryAllExecutorOfSchemaResponse, RpcStatus>({
      path: `/thesixnetwork/sixnft/nftmngr/executor_of_schema`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryExecutorOfSchema
   * @summary Queries a ExecutorOfSchema by index.
   * @request GET:/thesixnetwork/sixnft/nftmngr/executor_of_schema/{nftSchemaCode}
   */
  queryExecutorOfSchema = (nftSchemaCode: string, params: RequestParams = {}) =>
    this.request<NftmngrQueryGetExecutorOfSchemaResponse, RpcStatus>({
      path: `/thesixnetwork/sixnft/nftmngr/executor_of_schema/${nftSchemaCode}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryListAttributeBySchema
   * @summary Queries a list of ListAttributeBySchema items.
   * @request GET:/thesixnetwork/sixnft/nftmngr/list_attribute_by_schema/{nftSchemaCode}
   */
  queryListAttributeBySchema = (nftSchemaCode: string, params: RequestParams = {}) =>
    this.request<NftmngrQueryListAttributeBySchemaResponse, RpcStatus>({
      path: `/thesixnetwork/sixnft/nftmngr/list_attribute_by_schema/${nftSchemaCode}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryMetadataCreatorAll
   * @summary Queries a list of MetadataCreator items.
   * @request GET:/thesixnetwork/sixnft/nftmngr/metadata_creator
   */
  queryMetadataCreatorAll = (
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<NftmngrQueryAllMetadataCreatorResponse, RpcStatus>({
      path: `/thesixnetwork/sixnft/nftmngr/metadata_creator`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryMetadataCreator
   * @summary Queries a MetadataCreator by index.
   * @request GET:/thesixnetwork/sixnft/nftmngr/metadata_creator/{nftSchemaCode}
   */
  queryMetadataCreator = (nftSchemaCode: string, params: RequestParams = {}) =>
    this.request<NftmngrQueryGetMetadataCreatorResponse, RpcStatus>({
      path: `/thesixnetwork/sixnft/nftmngr/metadata_creator/${nftSchemaCode}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryNftCollection
   * @summary Queries a NftCollection by index.
   * @request GET:/thesixnetwork/sixnft/nftmngr/nft_collection/{nftSchemaCode}
   */
  queryNftCollection = (
    nftSchemaCode: string,
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<NftmngrQueryGetNftCollectionResponse, RpcStatus>({
      path: `/thesixnetwork/sixnft/nftmngr/nft_collection/${nftSchemaCode}`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryNftDataAll
   * @summary Queries a list of NftData items.
   * @request GET:/thesixnetwork/sixnft/nftmngr/nft_data
   */
  queryNftDataAll = (
    query?: {
      withGlobal?: boolean;
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<NftmngrQueryAllNftDataResponse, RpcStatus>({
      path: `/thesixnetwork/sixnft/nftmngr/nft_data`,
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
   * @request GET:/thesixnetwork/sixnft/nftmngr/nft_data/{nftSchemaCode}/{tokenId}
   */
  queryNftData = (
    nftSchemaCode: string,
    tokenId: string,
    query?: { withGlobal?: boolean },
    params: RequestParams = {},
  ) =>
    this.request<NftmngrQueryGetNftDataResponse, RpcStatus>({
      path: `/thesixnetwork/sixnft/nftmngr/nft_data/${nftSchemaCode}/${tokenId}`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryNftFeeBalance
   * @summary Queries a NFTFeeBalance by index.
   * @request GET:/thesixnetwork/sixnft/nftmngr/nft_fee_balance
   */
  queryNftFeeBalance = (params: RequestParams = {}) =>
    this.request<NftmngrQueryGetNFTFeeBalanceResponse, RpcStatus>({
      path: `/thesixnetwork/sixnft/nftmngr/nft_fee_balance`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryNftFeeConfig
   * @summary Queries a NFTFeeConfig by index.
   * @request GET:/thesixnetwork/sixnft/nftmngr/nft_fee_config
   */
  queryNftFeeConfig = (params: RequestParams = {}) =>
    this.request<NftmngrQueryGetNFTFeeConfigResponse, RpcStatus>({
      path: `/thesixnetwork/sixnft/nftmngr/nft_fee_config`,
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
   * @request GET:/thesixnetwork/sixnft/nftmngr/nft_schema
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
    this.request<NftmngrQueryAllNFTSchemaResponse, RpcStatus>({
      path: `/thesixnetwork/sixnft/nftmngr/nft_schema`,
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
   * @request GET:/thesixnetwork/sixnft/nftmngr/nft_schema/{code}
   */
  queryNftSchema = (code: string, params: RequestParams = {}) =>
    this.request<NftmngrQueryGetNFTSchemaResponse, RpcStatus>({
      path: `/thesixnetwork/sixnft/nftmngr/nft_schema/${code}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryNftSchemaByContractAll
   * @summary Queries a list of NFTSchemaByContract items.
   * @request GET:/thesixnetwork/sixnft/nftmngr/nft_schema_by_contract
   */
  queryNftSchemaByContractAll = (
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<NftmngrQueryAllNFTSchemaByContractResponse, RpcStatus>({
      path: `/thesixnetwork/sixnft/nftmngr/nft_schema_by_contract`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryNftSchemaByContract
   * @summary Queries a NFTSchemaByContract by index.
   * @request GET:/thesixnetwork/sixnft/nftmngr/nft_schema_by_contract/{originContractAddress}
   */
  queryNftSchemaByContract = (originContractAddress: string, params: RequestParams = {}) =>
    this.request<NftmngrQueryGetNFTSchemaByContractResponse, RpcStatus>({
      path: `/thesixnetwork/sixnft/nftmngr/nft_schema_by_contract/${originContractAddress}`,
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
   * @request GET:/thesixnetwork/sixnft/nftmngr/organization
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
    this.request<NftmngrQueryAllOrganizationResponse, RpcStatus>({
      path: `/thesixnetwork/sixnft/nftmngr/organization`,
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
   * @request GET:/thesixnetwork/sixnft/nftmngr/organization/{name}
   */
  queryOrganization = (name: string, params: RequestParams = {}) =>
    this.request<NftmngrQueryGetOrganizationResponse, RpcStatus>({
      path: `/thesixnetwork/sixnft/nftmngr/organization/${name}`,
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
   * @request GET:/thesixnetwork/sixnft/nftmngr/params
   */
  queryParams = (params: RequestParams = {}) =>
    this.request<NftmngrQueryParamsResponse, RpcStatus>({
      path: `/thesixnetwork/sixnft/nftmngr/params`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QuerySchemaAttributeAll
   * @summary Queries a list of SchemaAttribute items.
   * @request GET:/thesixnetwork/sixnft/nftmngr/schema_attribute
   */
  querySchemaAttributeAll = (
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<NftmngrQueryAllSchemaAttributeResponse, RpcStatus>({
      path: `/thesixnetwork/sixnft/nftmngr/schema_attribute`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QuerySchemaAttribute
   * @summary Queries a SchemaAttribute by index.
   * @request GET:/thesixnetwork/sixnft/nftmngr/schema_attribute/{nftSchemaCode}/{name}
   */
  querySchemaAttribute = (nftSchemaCode: string, name: string, params: RequestParams = {}) =>
    this.request<NftmngrQueryGetSchemaAttributeResponse, RpcStatus>({
      path: `/thesixnetwork/sixnft/nftmngr/schema_attribute/${nftSchemaCode}/${name}`,
      method: "GET",
      format: "json",
      ...params,
    });
}
