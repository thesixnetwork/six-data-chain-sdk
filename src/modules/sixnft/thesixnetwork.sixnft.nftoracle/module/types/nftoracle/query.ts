/* eslint-disable */
import { Reader, util, configure, Writer } from "protobufjs/minimal";
import * as Long from "long";
import { Params } from "../nftoracle/params";
import { MintRequest } from "../nftoracle/mint_request";
import {
  PageRequest,
  PageResponse,
} from "../cosmos/base/query/v1beta1/pagination";
import { ActionRequest } from "../nftoracle/action_request";
import { CollectionOwnerRequest } from "../nftoracle/collection_owner_request";
import { OracleConfig } from "../nftoracle/oracle_config";

export const protobufPackage = "thesixnetwork.sixnft.nftoracle";

/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}

/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params | undefined;
}

export interface QueryGetMintRequestRequest {
  id: number;
}

export interface QueryGetMintRequestResponse {
  MintRequest: MintRequest | undefined;
}

export interface QueryAllMintRequestRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllMintRequestResponse {
  MintRequest: MintRequest[];
  pagination: PageResponse | undefined;
}

export interface QueryGetActionRequestRequest {
  id: number;
}

export interface QueryGetActionRequestResponse {
  ActionRequest: ActionRequest | undefined;
}

export interface QueryAllActionRequestRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllActionRequestResponse {
  ActionRequest: ActionRequest[];
  pagination: PageResponse | undefined;
}

export interface QueryGetCollectionOwnerRequestRequest {
  id: number;
}

export interface QueryGetCollectionOwnerRequestResponse {
  CollectionOwnerRequest: CollectionOwnerRequest | undefined;
}

export interface QueryAllCollectionOwnerRequestRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllCollectionOwnerRequestResponse {
  CollectionOwnerRequest: CollectionOwnerRequest[];
  pagination: PageResponse | undefined;
}

export interface QueryGetOracleConfigRequest {}

export interface QueryGetOracleConfigResponse {
  OracleConfig: OracleConfig | undefined;
}

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

const baseQueryGetMintRequestRequest: object = { id: 0 };

export const QueryGetMintRequestRequest = {
  encode(
    message: QueryGetMintRequestRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetMintRequestRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetMintRequestRequest,
    } as QueryGetMintRequestRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetMintRequestRequest {
    const message = {
      ...baseQueryGetMintRequestRequest,
    } as QueryGetMintRequestRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: QueryGetMintRequestRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetMintRequestRequest>
  ): QueryGetMintRequestRequest {
    const message = {
      ...baseQueryGetMintRequestRequest,
    } as QueryGetMintRequestRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseQueryGetMintRequestResponse: object = {};

export const QueryGetMintRequestResponse = {
  encode(
    message: QueryGetMintRequestResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.MintRequest !== undefined) {
      MintRequest.encode(
        message.MintRequest,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetMintRequestResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetMintRequestResponse,
    } as QueryGetMintRequestResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.MintRequest = MintRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetMintRequestResponse {
    const message = {
      ...baseQueryGetMintRequestResponse,
    } as QueryGetMintRequestResponse;
    if (object.MintRequest !== undefined && object.MintRequest !== null) {
      message.MintRequest = MintRequest.fromJSON(object.MintRequest);
    } else {
      message.MintRequest = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetMintRequestResponse): unknown {
    const obj: any = {};
    message.MintRequest !== undefined &&
      (obj.MintRequest = message.MintRequest
        ? MintRequest.toJSON(message.MintRequest)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetMintRequestResponse>
  ): QueryGetMintRequestResponse {
    const message = {
      ...baseQueryGetMintRequestResponse,
    } as QueryGetMintRequestResponse;
    if (object.MintRequest !== undefined && object.MintRequest !== null) {
      message.MintRequest = MintRequest.fromPartial(object.MintRequest);
    } else {
      message.MintRequest = undefined;
    }
    return message;
  },
};

const baseQueryAllMintRequestRequest: object = {};

export const QueryAllMintRequestRequest = {
  encode(
    message: QueryAllMintRequestRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllMintRequestRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllMintRequestRequest,
    } as QueryAllMintRequestRequest;
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

  fromJSON(object: any): QueryAllMintRequestRequest {
    const message = {
      ...baseQueryAllMintRequestRequest,
    } as QueryAllMintRequestRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllMintRequestRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllMintRequestRequest>
  ): QueryAllMintRequestRequest {
    const message = {
      ...baseQueryAllMintRequestRequest,
    } as QueryAllMintRequestRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllMintRequestResponse: object = {};

export const QueryAllMintRequestResponse = {
  encode(
    message: QueryAllMintRequestResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.MintRequest) {
      MintRequest.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllMintRequestResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllMintRequestResponse,
    } as QueryAllMintRequestResponse;
    message.MintRequest = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.MintRequest.push(MintRequest.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryAllMintRequestResponse {
    const message = {
      ...baseQueryAllMintRequestResponse,
    } as QueryAllMintRequestResponse;
    message.MintRequest = [];
    if (object.MintRequest !== undefined && object.MintRequest !== null) {
      for (const e of object.MintRequest) {
        message.MintRequest.push(MintRequest.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllMintRequestResponse): unknown {
    const obj: any = {};
    if (message.MintRequest) {
      obj.MintRequest = message.MintRequest.map((e) =>
        e ? MintRequest.toJSON(e) : undefined
      );
    } else {
      obj.MintRequest = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllMintRequestResponse>
  ): QueryAllMintRequestResponse {
    const message = {
      ...baseQueryAllMintRequestResponse,
    } as QueryAllMintRequestResponse;
    message.MintRequest = [];
    if (object.MintRequest !== undefined && object.MintRequest !== null) {
      for (const e of object.MintRequest) {
        message.MintRequest.push(MintRequest.fromPartial(e));
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

const baseQueryGetActionRequestRequest: object = { id: 0 };

export const QueryGetActionRequestRequest = {
  encode(
    message: QueryGetActionRequestRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetActionRequestRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetActionRequestRequest,
    } as QueryGetActionRequestRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetActionRequestRequest {
    const message = {
      ...baseQueryGetActionRequestRequest,
    } as QueryGetActionRequestRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: QueryGetActionRequestRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetActionRequestRequest>
  ): QueryGetActionRequestRequest {
    const message = {
      ...baseQueryGetActionRequestRequest,
    } as QueryGetActionRequestRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseQueryGetActionRequestResponse: object = {};

export const QueryGetActionRequestResponse = {
  encode(
    message: QueryGetActionRequestResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.ActionRequest !== undefined) {
      ActionRequest.encode(
        message.ActionRequest,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetActionRequestResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetActionRequestResponse,
    } as QueryGetActionRequestResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ActionRequest = ActionRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetActionRequestResponse {
    const message = {
      ...baseQueryGetActionRequestResponse,
    } as QueryGetActionRequestResponse;
    if (object.ActionRequest !== undefined && object.ActionRequest !== null) {
      message.ActionRequest = ActionRequest.fromJSON(object.ActionRequest);
    } else {
      message.ActionRequest = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetActionRequestResponse): unknown {
    const obj: any = {};
    message.ActionRequest !== undefined &&
      (obj.ActionRequest = message.ActionRequest
        ? ActionRequest.toJSON(message.ActionRequest)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetActionRequestResponse>
  ): QueryGetActionRequestResponse {
    const message = {
      ...baseQueryGetActionRequestResponse,
    } as QueryGetActionRequestResponse;
    if (object.ActionRequest !== undefined && object.ActionRequest !== null) {
      message.ActionRequest = ActionRequest.fromPartial(object.ActionRequest);
    } else {
      message.ActionRequest = undefined;
    }
    return message;
  },
};

const baseQueryAllActionRequestRequest: object = {};

export const QueryAllActionRequestRequest = {
  encode(
    message: QueryAllActionRequestRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllActionRequestRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllActionRequestRequest,
    } as QueryAllActionRequestRequest;
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

  fromJSON(object: any): QueryAllActionRequestRequest {
    const message = {
      ...baseQueryAllActionRequestRequest,
    } as QueryAllActionRequestRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllActionRequestRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllActionRequestRequest>
  ): QueryAllActionRequestRequest {
    const message = {
      ...baseQueryAllActionRequestRequest,
    } as QueryAllActionRequestRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllActionRequestResponse: object = {};

export const QueryAllActionRequestResponse = {
  encode(
    message: QueryAllActionRequestResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.ActionRequest) {
      ActionRequest.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllActionRequestResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllActionRequestResponse,
    } as QueryAllActionRequestResponse;
    message.ActionRequest = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ActionRequest.push(
            ActionRequest.decode(reader, reader.uint32())
          );
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

  fromJSON(object: any): QueryAllActionRequestResponse {
    const message = {
      ...baseQueryAllActionRequestResponse,
    } as QueryAllActionRequestResponse;
    message.ActionRequest = [];
    if (object.ActionRequest !== undefined && object.ActionRequest !== null) {
      for (const e of object.ActionRequest) {
        message.ActionRequest.push(ActionRequest.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllActionRequestResponse): unknown {
    const obj: any = {};
    if (message.ActionRequest) {
      obj.ActionRequest = message.ActionRequest.map((e) =>
        e ? ActionRequest.toJSON(e) : undefined
      );
    } else {
      obj.ActionRequest = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllActionRequestResponse>
  ): QueryAllActionRequestResponse {
    const message = {
      ...baseQueryAllActionRequestResponse,
    } as QueryAllActionRequestResponse;
    message.ActionRequest = [];
    if (object.ActionRequest !== undefined && object.ActionRequest !== null) {
      for (const e of object.ActionRequest) {
        message.ActionRequest.push(ActionRequest.fromPartial(e));
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

const baseQueryGetCollectionOwnerRequestRequest: object = { id: 0 };

export const QueryGetCollectionOwnerRequestRequest = {
  encode(
    message: QueryGetCollectionOwnerRequestRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetCollectionOwnerRequestRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetCollectionOwnerRequestRequest,
    } as QueryGetCollectionOwnerRequestRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetCollectionOwnerRequestRequest {
    const message = {
      ...baseQueryGetCollectionOwnerRequestRequest,
    } as QueryGetCollectionOwnerRequestRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: QueryGetCollectionOwnerRequestRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetCollectionOwnerRequestRequest>
  ): QueryGetCollectionOwnerRequestRequest {
    const message = {
      ...baseQueryGetCollectionOwnerRequestRequest,
    } as QueryGetCollectionOwnerRequestRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseQueryGetCollectionOwnerRequestResponse: object = {};

export const QueryGetCollectionOwnerRequestResponse = {
  encode(
    message: QueryGetCollectionOwnerRequestResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.CollectionOwnerRequest !== undefined) {
      CollectionOwnerRequest.encode(
        message.CollectionOwnerRequest,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetCollectionOwnerRequestResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetCollectionOwnerRequestResponse,
    } as QueryGetCollectionOwnerRequestResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.CollectionOwnerRequest = CollectionOwnerRequest.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetCollectionOwnerRequestResponse {
    const message = {
      ...baseQueryGetCollectionOwnerRequestResponse,
    } as QueryGetCollectionOwnerRequestResponse;
    if (
      object.CollectionOwnerRequest !== undefined &&
      object.CollectionOwnerRequest !== null
    ) {
      message.CollectionOwnerRequest = CollectionOwnerRequest.fromJSON(
        object.CollectionOwnerRequest
      );
    } else {
      message.CollectionOwnerRequest = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetCollectionOwnerRequestResponse): unknown {
    const obj: any = {};
    message.CollectionOwnerRequest !== undefined &&
      (obj.CollectionOwnerRequest = message.CollectionOwnerRequest
        ? CollectionOwnerRequest.toJSON(message.CollectionOwnerRequest)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetCollectionOwnerRequestResponse>
  ): QueryGetCollectionOwnerRequestResponse {
    const message = {
      ...baseQueryGetCollectionOwnerRequestResponse,
    } as QueryGetCollectionOwnerRequestResponse;
    if (
      object.CollectionOwnerRequest !== undefined &&
      object.CollectionOwnerRequest !== null
    ) {
      message.CollectionOwnerRequest = CollectionOwnerRequest.fromPartial(
        object.CollectionOwnerRequest
      );
    } else {
      message.CollectionOwnerRequest = undefined;
    }
    return message;
  },
};

const baseQueryAllCollectionOwnerRequestRequest: object = {};

export const QueryAllCollectionOwnerRequestRequest = {
  encode(
    message: QueryAllCollectionOwnerRequestRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllCollectionOwnerRequestRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllCollectionOwnerRequestRequest,
    } as QueryAllCollectionOwnerRequestRequest;
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

  fromJSON(object: any): QueryAllCollectionOwnerRequestRequest {
    const message = {
      ...baseQueryAllCollectionOwnerRequestRequest,
    } as QueryAllCollectionOwnerRequestRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllCollectionOwnerRequestRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllCollectionOwnerRequestRequest>
  ): QueryAllCollectionOwnerRequestRequest {
    const message = {
      ...baseQueryAllCollectionOwnerRequestRequest,
    } as QueryAllCollectionOwnerRequestRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllCollectionOwnerRequestResponse: object = {};

export const QueryAllCollectionOwnerRequestResponse = {
  encode(
    message: QueryAllCollectionOwnerRequestResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.CollectionOwnerRequest) {
      CollectionOwnerRequest.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllCollectionOwnerRequestResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllCollectionOwnerRequestResponse,
    } as QueryAllCollectionOwnerRequestResponse;
    message.CollectionOwnerRequest = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.CollectionOwnerRequest.push(
            CollectionOwnerRequest.decode(reader, reader.uint32())
          );
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

  fromJSON(object: any): QueryAllCollectionOwnerRequestResponse {
    const message = {
      ...baseQueryAllCollectionOwnerRequestResponse,
    } as QueryAllCollectionOwnerRequestResponse;
    message.CollectionOwnerRequest = [];
    if (
      object.CollectionOwnerRequest !== undefined &&
      object.CollectionOwnerRequest !== null
    ) {
      for (const e of object.CollectionOwnerRequest) {
        message.CollectionOwnerRequest.push(CollectionOwnerRequest.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllCollectionOwnerRequestResponse): unknown {
    const obj: any = {};
    if (message.CollectionOwnerRequest) {
      obj.CollectionOwnerRequest = message.CollectionOwnerRequest.map((e) =>
        e ? CollectionOwnerRequest.toJSON(e) : undefined
      );
    } else {
      obj.CollectionOwnerRequest = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllCollectionOwnerRequestResponse>
  ): QueryAllCollectionOwnerRequestResponse {
    const message = {
      ...baseQueryAllCollectionOwnerRequestResponse,
    } as QueryAllCollectionOwnerRequestResponse;
    message.CollectionOwnerRequest = [];
    if (
      object.CollectionOwnerRequest !== undefined &&
      object.CollectionOwnerRequest !== null
    ) {
      for (const e of object.CollectionOwnerRequest) {
        message.CollectionOwnerRequest.push(
          CollectionOwnerRequest.fromPartial(e)
        );
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

const baseQueryGetOracleConfigRequest: object = {};

export const QueryGetOracleConfigRequest = {
  encode(
    _: QueryGetOracleConfigRequest,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetOracleConfigRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetOracleConfigRequest,
    } as QueryGetOracleConfigRequest;
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

  fromJSON(_: any): QueryGetOracleConfigRequest {
    const message = {
      ...baseQueryGetOracleConfigRequest,
    } as QueryGetOracleConfigRequest;
    return message;
  },

  toJSON(_: QueryGetOracleConfigRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<QueryGetOracleConfigRequest>
  ): QueryGetOracleConfigRequest {
    const message = {
      ...baseQueryGetOracleConfigRequest,
    } as QueryGetOracleConfigRequest;
    return message;
  },
};

const baseQueryGetOracleConfigResponse: object = {};

export const QueryGetOracleConfigResponse = {
  encode(
    message: QueryGetOracleConfigResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.OracleConfig !== undefined) {
      OracleConfig.encode(
        message.OracleConfig,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetOracleConfigResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetOracleConfigResponse,
    } as QueryGetOracleConfigResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.OracleConfig = OracleConfig.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetOracleConfigResponse {
    const message = {
      ...baseQueryGetOracleConfigResponse,
    } as QueryGetOracleConfigResponse;
    if (object.OracleConfig !== undefined && object.OracleConfig !== null) {
      message.OracleConfig = OracleConfig.fromJSON(object.OracleConfig);
    } else {
      message.OracleConfig = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetOracleConfigResponse): unknown {
    const obj: any = {};
    message.OracleConfig !== undefined &&
      (obj.OracleConfig = message.OracleConfig
        ? OracleConfig.toJSON(message.OracleConfig)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetOracleConfigResponse>
  ): QueryGetOracleConfigResponse {
    const message = {
      ...baseQueryGetOracleConfigResponse,
    } as QueryGetOracleConfigResponse;
    if (object.OracleConfig !== undefined && object.OracleConfig !== null) {
      message.OracleConfig = OracleConfig.fromPartial(object.OracleConfig);
    } else {
      message.OracleConfig = undefined;
    }
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Queries a MintRequest by id. */
  MintRequest(
    request: QueryGetMintRequestRequest
  ): Promise<QueryGetMintRequestResponse>;
  /** Queries a list of MintRequest items. */
  MintRequestAll(
    request: QueryAllMintRequestRequest
  ): Promise<QueryAllMintRequestResponse>;
  /** Queries a ActionRequest by id. */
  ActionRequest(
    request: QueryGetActionRequestRequest
  ): Promise<QueryGetActionRequestResponse>;
  /** Queries a list of ActionRequest items. */
  ActionRequestAll(
    request: QueryAllActionRequestRequest
  ): Promise<QueryAllActionRequestResponse>;
  /** Queries a CollectionOwnerRequest by id. */
  CollectionOwnerRequest(
    request: QueryGetCollectionOwnerRequestRequest
  ): Promise<QueryGetCollectionOwnerRequestResponse>;
  /** Queries a list of CollectionOwnerRequest items. */
  CollectionOwnerRequestAll(
    request: QueryAllCollectionOwnerRequestRequest
  ): Promise<QueryAllCollectionOwnerRequestResponse>;
  /** Queries a OracleConfig by index. */
  OracleConfig(
    request: QueryGetOracleConfigRequest
  ): Promise<QueryGetOracleConfigResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "thesixnetwork.sixnft.nftoracle.Query",
      "Params",
      data
    );
    return promise.then((data) => QueryParamsResponse.decode(new Reader(data)));
  }

  MintRequest(
    request: QueryGetMintRequestRequest
  ): Promise<QueryGetMintRequestResponse> {
    const data = QueryGetMintRequestRequest.encode(request).finish();
    const promise = this.rpc.request(
      "thesixnetwork.sixnft.nftoracle.Query",
      "MintRequest",
      data
    );
    return promise.then((data) =>
      QueryGetMintRequestResponse.decode(new Reader(data))
    );
  }

  MintRequestAll(
    request: QueryAllMintRequestRequest
  ): Promise<QueryAllMintRequestResponse> {
    const data = QueryAllMintRequestRequest.encode(request).finish();
    const promise = this.rpc.request(
      "thesixnetwork.sixnft.nftoracle.Query",
      "MintRequestAll",
      data
    );
    return promise.then((data) =>
      QueryAllMintRequestResponse.decode(new Reader(data))
    );
  }

  ActionRequest(
    request: QueryGetActionRequestRequest
  ): Promise<QueryGetActionRequestResponse> {
    const data = QueryGetActionRequestRequest.encode(request).finish();
    const promise = this.rpc.request(
      "thesixnetwork.sixnft.nftoracle.Query",
      "ActionRequest",
      data
    );
    return promise.then((data) =>
      QueryGetActionRequestResponse.decode(new Reader(data))
    );
  }

  ActionRequestAll(
    request: QueryAllActionRequestRequest
  ): Promise<QueryAllActionRequestResponse> {
    const data = QueryAllActionRequestRequest.encode(request).finish();
    const promise = this.rpc.request(
      "thesixnetwork.sixnft.nftoracle.Query",
      "ActionRequestAll",
      data
    );
    return promise.then((data) =>
      QueryAllActionRequestResponse.decode(new Reader(data))
    );
  }

  CollectionOwnerRequest(
    request: QueryGetCollectionOwnerRequestRequest
  ): Promise<QueryGetCollectionOwnerRequestResponse> {
    const data = QueryGetCollectionOwnerRequestRequest.encode(request).finish();
    const promise = this.rpc.request(
      "thesixnetwork.sixnft.nftoracle.Query",
      "CollectionOwnerRequest",
      data
    );
    return promise.then((data) =>
      QueryGetCollectionOwnerRequestResponse.decode(new Reader(data))
    );
  }

  CollectionOwnerRequestAll(
    request: QueryAllCollectionOwnerRequestRequest
  ): Promise<QueryAllCollectionOwnerRequestResponse> {
    const data = QueryAllCollectionOwnerRequestRequest.encode(request).finish();
    const promise = this.rpc.request(
      "thesixnetwork.sixnft.nftoracle.Query",
      "CollectionOwnerRequestAll",
      data
    );
    return promise.then((data) =>
      QueryAllCollectionOwnerRequestResponse.decode(new Reader(data))
    );
  }

  OracleConfig(
    request: QueryGetOracleConfigRequest
  ): Promise<QueryGetOracleConfigResponse> {
    const data = QueryGetOracleConfigRequest.encode(request).finish();
    const promise = this.rpc.request(
      "thesixnetwork.sixnft.nftoracle.Query",
      "OracleConfig",
      data
    );
    return promise.then((data) =>
      QueryGetOracleConfigResponse.decode(new Reader(data))
    );
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
}

declare var self: any | undefined;
declare var window: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

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

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (util.Long !== Long) {
  util.Long = Long as any;
  configure();
}
