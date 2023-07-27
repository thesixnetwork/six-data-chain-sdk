/* eslint-disable */
import { Reader, Writer } from "protobufjs/minimal";
import {
  PageRequest,
  PageResponse,
} from "../../../cosmos/base/query/v1beta1/pagination";
import { TokenPair } from "../../../evmos/erc20/v1/erc20";
import { Params } from "../../../evmos/erc20/v1/genesis";

export const protobufPackage = "evmos.erc20.v1";

/**
 * QueryTokenPairsRequest is the request type for the Query/TokenPairs RPC
 * method.
 */
export interface QueryTokenPairsRequest {
  /** pagination defines an optional pagination for the request. */
  pagination: PageRequest | undefined;
}

/**
 * QueryTokenPairsResponse is the response type for the Query/TokenPairs RPC
 * method.
 */
export interface QueryTokenPairsResponse {
  token_pairs: TokenPair[];
  /** pagination defines the pagination in the response. */
  pagination: PageResponse | undefined;
}

/** QueryTokenPairRequest is the request type for the Query/TokenPair RPC method. */
export interface QueryTokenPairRequest {
  /**
   * token identifier can be either the hex contract address of the ERC20 or the
   * Cosmos base denomination
   */
  token: string;
}

/**
 * QueryTokenPairResponse is the response type for the Query/TokenPair RPC
 * method.
 */
export interface QueryTokenPairResponse {
  token_pair: TokenPair | undefined;
}

/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}

/**
 * QueryParamsResponse is the response type for the Query/Params RPC
 * method.
 */
export interface QueryParamsResponse {
  params: Params | undefined;
}

const baseQueryTokenPairsRequest: object = {};

export const QueryTokenPairsRequest = {
  encode(
    message: QueryTokenPairsRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryTokenPairsRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryTokenPairsRequest } as QueryTokenPairsRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryTokenPairsRequest {
    const message = { ...baseQueryTokenPairsRequest } as QueryTokenPairsRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryTokenPairsRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryTokenPairsRequest>
  ): QueryTokenPairsRequest {
    const message = { ...baseQueryTokenPairsRequest } as QueryTokenPairsRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryTokenPairsResponse: object = {};

export const QueryTokenPairsResponse = {
  encode(
    message: QueryTokenPairsResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.token_pairs) {
      TokenPair.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryTokenPairsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryTokenPairsResponse,
    } as QueryTokenPairsResponse;
    message.token_pairs = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.token_pairs.push(TokenPair.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryTokenPairsResponse {
    const message = {
      ...baseQueryTokenPairsResponse,
    } as QueryTokenPairsResponse;
    message.token_pairs = [];
    if (object.token_pairs !== undefined && object.token_pairs !== null) {
      for (const e of object.token_pairs) {
        message.token_pairs.push(TokenPair.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryTokenPairsResponse): unknown {
    const obj: any = {};
    if (message.token_pairs) {
      obj.token_pairs = message.token_pairs.map((e) =>
        e ? TokenPair.toJSON(e) : undefined
      );
    } else {
      obj.token_pairs = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryTokenPairsResponse>
  ): QueryTokenPairsResponse {
    const message = {
      ...baseQueryTokenPairsResponse,
    } as QueryTokenPairsResponse;
    message.token_pairs = [];
    if (object.token_pairs !== undefined && object.token_pairs !== null) {
      for (const e of object.token_pairs) {
        message.token_pairs.push(TokenPair.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryTokenPairRequest: object = { token: "" };

export const QueryTokenPairRequest = {
  encode(
    message: QueryTokenPairRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.token !== "") {
      writer.uint32(10).string(message.token);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryTokenPairRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryTokenPairRequest } as QueryTokenPairRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.token = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryTokenPairRequest {
    const message = { ...baseQueryTokenPairRequest } as QueryTokenPairRequest;
    if (object.token !== undefined && object.token !== null) {
      message.token = String(object.token);
    } else {
      message.token = "";
    }
    return message;
  },

  toJSON(message: QueryTokenPairRequest): unknown {
    const obj: any = {};
    message.token !== undefined && (obj.token = message.token);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryTokenPairRequest>
  ): QueryTokenPairRequest {
    const message = { ...baseQueryTokenPairRequest } as QueryTokenPairRequest;
    if (object.token !== undefined && object.token !== null) {
      message.token = object.token;
    } else {
      message.token = "";
    }
    return message;
  },
};

const baseQueryTokenPairResponse: object = {};

export const QueryTokenPairResponse = {
  encode(
    message: QueryTokenPairResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.token_pair !== undefined) {
      TokenPair.encode(message.token_pair, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryTokenPairResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryTokenPairResponse } as QueryTokenPairResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.token_pair = TokenPair.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryTokenPairResponse {
    const message = { ...baseQueryTokenPairResponse } as QueryTokenPairResponse;
    if (object.token_pair !== undefined && object.token_pair !== null) {
      message.token_pair = TokenPair.fromJSON(object.token_pair);
    } else {
      message.token_pair = undefined;
    }
    return message;
  },

  toJSON(message: QueryTokenPairResponse): unknown {
    const obj: any = {};
    message.token_pair !== undefined &&
      (obj.token_pair = message.token_pair
        ? TokenPair.toJSON(message.token_pair)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryTokenPairResponse>
  ): QueryTokenPairResponse {
    const message = { ...baseQueryTokenPairResponse } as QueryTokenPairResponse;
    if (object.token_pair !== undefined && object.token_pair !== null) {
      message.token_pair = TokenPair.fromPartial(object.token_pair);
    } else {
      message.token_pair = undefined;
    }
    return message;
  },
};

const baseQueryParamsRequest: object = {};

export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): QueryParamsRequest {
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    return message;
  },

  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest {
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    return message;
  },
};

const baseQueryParamsResponse: object = {};

export const QueryParamsResponse = {
  encode(
    message: QueryParamsResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryParamsResponse {
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromJSON(object.params);
    } else {
      message.params = undefined;
    }
    return message;
  },

  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse {
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    } else {
      message.params = undefined;
    }
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** TokenPairs retrieves registered token pairs */
  TokenPairs(request: QueryTokenPairsRequest): Promise<QueryTokenPairsResponse>;
  /** TokenPair retrieves a registered token pair */
  TokenPair(request: QueryTokenPairRequest): Promise<QueryTokenPairResponse>;
  /** Params retrieves the erc20 module params */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  TokenPairs(
    request: QueryTokenPairsRequest
  ): Promise<QueryTokenPairsResponse> {
    const data = QueryTokenPairsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "evmos.erc20.v1.Query",
      "TokenPairs",
      data
    );
    return promise.then((data) =>
      QueryTokenPairsResponse.decode(new Reader(data))
    );
  }

  TokenPair(request: QueryTokenPairRequest): Promise<QueryTokenPairResponse> {
    const data = QueryTokenPairRequest.encode(request).finish();
    const promise = this.rpc.request("evmos.erc20.v1.Query", "TokenPair", data);
    return promise.then((data) =>
      QueryTokenPairResponse.decode(new Reader(data))
    );
  }

  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("evmos.erc20.v1.Query", "Params", data);
    return promise.then((data) => QueryParamsResponse.decode(new Reader(data)));
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
}

type Builtin = Date | Function | Uint8Array | string | number | undefined;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;
