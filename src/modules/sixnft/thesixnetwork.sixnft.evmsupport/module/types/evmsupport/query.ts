/* eslint-disable */
import { Reader, Writer } from "protobufjs/minimal";
import { Params } from "../evmsupport/params";
import { AddressBinding } from "../evmsupport/address_binding";
import {
  PageRequest,
  PageResponse,
} from "../cosmos/base/query/v1beta1/pagination";

export const protobufPackage = "thesixnetwork.sixnft.evmsupport";

/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}

/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params | undefined;
}

export interface QueryGetAddressBindingRequest {
  ethAddress: string;
  nativeAddress: string;
}

export interface QueryGetAddressBindingResponse {
  addressBinding: AddressBinding | undefined;
}

export interface QueryAllAddressBindingRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllAddressBindingResponse {
  addressBinding: AddressBinding[];
  pagination: PageResponse | undefined;
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

const baseQueryGetAddressBindingRequest: object = {
  ethAddress: "",
  nativeAddress: "",
};

export const QueryGetAddressBindingRequest = {
  encode(
    message: QueryGetAddressBindingRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.ethAddress !== "") {
      writer.uint32(10).string(message.ethAddress);
    }
    if (message.nativeAddress !== "") {
      writer.uint32(18).string(message.nativeAddress);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetAddressBindingRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetAddressBindingRequest,
    } as QueryGetAddressBindingRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ethAddress = reader.string();
          break;
        case 2:
          message.nativeAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetAddressBindingRequest {
    const message = {
      ...baseQueryGetAddressBindingRequest,
    } as QueryGetAddressBindingRequest;
    if (object.ethAddress !== undefined && object.ethAddress !== null) {
      message.ethAddress = String(object.ethAddress);
    } else {
      message.ethAddress = "";
    }
    if (object.nativeAddress !== undefined && object.nativeAddress !== null) {
      message.nativeAddress = String(object.nativeAddress);
    } else {
      message.nativeAddress = "";
    }
    return message;
  },

  toJSON(message: QueryGetAddressBindingRequest): unknown {
    const obj: any = {};
    message.ethAddress !== undefined && (obj.ethAddress = message.ethAddress);
    message.nativeAddress !== undefined &&
      (obj.nativeAddress = message.nativeAddress);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetAddressBindingRequest>
  ): QueryGetAddressBindingRequest {
    const message = {
      ...baseQueryGetAddressBindingRequest,
    } as QueryGetAddressBindingRequest;
    if (object.ethAddress !== undefined && object.ethAddress !== null) {
      message.ethAddress = object.ethAddress;
    } else {
      message.ethAddress = "";
    }
    if (object.nativeAddress !== undefined && object.nativeAddress !== null) {
      message.nativeAddress = object.nativeAddress;
    } else {
      message.nativeAddress = "";
    }
    return message;
  },
};

const baseQueryGetAddressBindingResponse: object = {};

export const QueryGetAddressBindingResponse = {
  encode(
    message: QueryGetAddressBindingResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.addressBinding !== undefined) {
      AddressBinding.encode(
        message.addressBinding,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetAddressBindingResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetAddressBindingResponse,
    } as QueryGetAddressBindingResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.addressBinding = AddressBinding.decode(
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

  fromJSON(object: any): QueryGetAddressBindingResponse {
    const message = {
      ...baseQueryGetAddressBindingResponse,
    } as QueryGetAddressBindingResponse;
    if (object.addressBinding !== undefined && object.addressBinding !== null) {
      message.addressBinding = AddressBinding.fromJSON(object.addressBinding);
    } else {
      message.addressBinding = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetAddressBindingResponse): unknown {
    const obj: any = {};
    message.addressBinding !== undefined &&
      (obj.addressBinding = message.addressBinding
        ? AddressBinding.toJSON(message.addressBinding)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetAddressBindingResponse>
  ): QueryGetAddressBindingResponse {
    const message = {
      ...baseQueryGetAddressBindingResponse,
    } as QueryGetAddressBindingResponse;
    if (object.addressBinding !== undefined && object.addressBinding !== null) {
      message.addressBinding = AddressBinding.fromPartial(
        object.addressBinding
      );
    } else {
      message.addressBinding = undefined;
    }
    return message;
  },
};

const baseQueryAllAddressBindingRequest: object = {};

export const QueryAllAddressBindingRequest = {
  encode(
    message: QueryAllAddressBindingRequest,
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
  ): QueryAllAddressBindingRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllAddressBindingRequest,
    } as QueryAllAddressBindingRequest;
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

  fromJSON(object: any): QueryAllAddressBindingRequest {
    const message = {
      ...baseQueryAllAddressBindingRequest,
    } as QueryAllAddressBindingRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllAddressBindingRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllAddressBindingRequest>
  ): QueryAllAddressBindingRequest {
    const message = {
      ...baseQueryAllAddressBindingRequest,
    } as QueryAllAddressBindingRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllAddressBindingResponse: object = {};

export const QueryAllAddressBindingResponse = {
  encode(
    message: QueryAllAddressBindingResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.addressBinding) {
      AddressBinding.encode(v!, writer.uint32(10).fork()).ldelim();
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
  ): QueryAllAddressBindingResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllAddressBindingResponse,
    } as QueryAllAddressBindingResponse;
    message.addressBinding = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.addressBinding.push(
            AddressBinding.decode(reader, reader.uint32())
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

  fromJSON(object: any): QueryAllAddressBindingResponse {
    const message = {
      ...baseQueryAllAddressBindingResponse,
    } as QueryAllAddressBindingResponse;
    message.addressBinding = [];
    if (object.addressBinding !== undefined && object.addressBinding !== null) {
      for (const e of object.addressBinding) {
        message.addressBinding.push(AddressBinding.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllAddressBindingResponse): unknown {
    const obj: any = {};
    if (message.addressBinding) {
      obj.addressBinding = message.addressBinding.map((e) =>
        e ? AddressBinding.toJSON(e) : undefined
      );
    } else {
      obj.addressBinding = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllAddressBindingResponse>
  ): QueryAllAddressBindingResponse {
    const message = {
      ...baseQueryAllAddressBindingResponse,
    } as QueryAllAddressBindingResponse;
    message.addressBinding = [];
    if (object.addressBinding !== undefined && object.addressBinding !== null) {
      for (const e of object.addressBinding) {
        message.addressBinding.push(AddressBinding.fromPartial(e));
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

/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Queries a AddressBinding by index. */
  AddressBinding(
    request: QueryGetAddressBindingRequest
  ): Promise<QueryGetAddressBindingResponse>;
  /** Queries a list of AddressBinding items. */
  AddressBindingAll(
    request: QueryAllAddressBindingRequest
  ): Promise<QueryAllAddressBindingResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "thesixnetwork.sixnft.evmsupport.Query",
      "Params",
      data
    );
    return promise.then((data) => QueryParamsResponse.decode(new Reader(data)));
  }

  AddressBinding(
    request: QueryGetAddressBindingRequest
  ): Promise<QueryGetAddressBindingResponse> {
    const data = QueryGetAddressBindingRequest.encode(request).finish();
    const promise = this.rpc.request(
      "thesixnetwork.sixnft.evmsupport.Query",
      "AddressBinding",
      data
    );
    return promise.then((data) =>
      QueryGetAddressBindingResponse.decode(new Reader(data))
    );
  }

  AddressBindingAll(
    request: QueryAllAddressBindingRequest
  ): Promise<QueryAllAddressBindingResponse> {
    const data = QueryAllAddressBindingRequest.encode(request).finish();
    const promise = this.rpc.request(
      "thesixnetwork.sixnft.evmsupport.Query",
      "AddressBindingAll",
      data
    );
    return promise.then((data) =>
      QueryAllAddressBindingResponse.decode(new Reader(data))
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
