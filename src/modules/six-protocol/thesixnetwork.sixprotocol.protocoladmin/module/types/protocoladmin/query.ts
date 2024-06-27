/* eslint-disable */
import { Reader, Writer } from "protobufjs/minimal";
import { Params } from "../protocoladmin/params";
import { Group } from "../protocoladmin/group";
import {
  PageRequest,
  PageResponse,
} from "../cosmos/base/query/v1beta1/pagination";
import { Admin } from "../protocoladmin/admin";

export const protobufPackage = "thesixnetwork.sixprotocol.protocoladmin";

/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}

/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params | undefined;
}

export interface QueryGetGroupRequest {
  name: string;
}

export interface QueryGetGroupResponse {
  group: Group | undefined;
}

export interface QueryAllGroupRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllGroupResponse {
  group: Group[];
  pagination: PageResponse | undefined;
}

export interface QueryGetAdminRequest {
  group: string;
  admin: string;
}

export interface QueryGetAdminResponse {
  admin: Admin | undefined;
}

export interface QueryAllAdminRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllAdminResponse {
  admin: Admin[];
  pagination: PageResponse | undefined;
}

export interface QueryListAdminOfGroupRequest {
  group: string;
  pagination: PageRequest | undefined;
}

export interface QueryListAdminOfGroupResponse {
  admin: string[];
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

const baseQueryGetGroupRequest: object = { name: "" };

export const QueryGetGroupRequest = {
  encode(
    message: QueryGetGroupRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetGroupRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetGroupRequest } as QueryGetGroupRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetGroupRequest {
    const message = { ...baseQueryGetGroupRequest } as QueryGetGroupRequest;
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    return message;
  },

  toJSON(message: QueryGetGroupRequest): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryGetGroupRequest>): QueryGetGroupRequest {
    const message = { ...baseQueryGetGroupRequest } as QueryGetGroupRequest;
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    return message;
  },
};

const baseQueryGetGroupResponse: object = {};

export const QueryGetGroupResponse = {
  encode(
    message: QueryGetGroupResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.group !== undefined) {
      Group.encode(message.group, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetGroupResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetGroupResponse } as QueryGetGroupResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.group = Group.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetGroupResponse {
    const message = { ...baseQueryGetGroupResponse } as QueryGetGroupResponse;
    if (object.group !== undefined && object.group !== null) {
      message.group = Group.fromJSON(object.group);
    } else {
      message.group = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetGroupResponse): unknown {
    const obj: any = {};
    message.group !== undefined &&
      (obj.group = message.group ? Group.toJSON(message.group) : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetGroupResponse>
  ): QueryGetGroupResponse {
    const message = { ...baseQueryGetGroupResponse } as QueryGetGroupResponse;
    if (object.group !== undefined && object.group !== null) {
      message.group = Group.fromPartial(object.group);
    } else {
      message.group = undefined;
    }
    return message;
  },
};

const baseQueryAllGroupRequest: object = {};

export const QueryAllGroupRequest = {
  encode(
    message: QueryAllGroupRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllGroupRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllGroupRequest } as QueryAllGroupRequest;
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

  fromJSON(object: any): QueryAllGroupRequest {
    const message = { ...baseQueryAllGroupRequest } as QueryAllGroupRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllGroupRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryAllGroupRequest>): QueryAllGroupRequest {
    const message = { ...baseQueryAllGroupRequest } as QueryAllGroupRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllGroupResponse: object = {};

export const QueryAllGroupResponse = {
  encode(
    message: QueryAllGroupResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.group) {
      Group.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllGroupResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllGroupResponse } as QueryAllGroupResponse;
    message.group = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.group.push(Group.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryAllGroupResponse {
    const message = { ...baseQueryAllGroupResponse } as QueryAllGroupResponse;
    message.group = [];
    if (object.group !== undefined && object.group !== null) {
      for (const e of object.group) {
        message.group.push(Group.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllGroupResponse): unknown {
    const obj: any = {};
    if (message.group) {
      obj.group = message.group.map((e) => (e ? Group.toJSON(e) : undefined));
    } else {
      obj.group = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllGroupResponse>
  ): QueryAllGroupResponse {
    const message = { ...baseQueryAllGroupResponse } as QueryAllGroupResponse;
    message.group = [];
    if (object.group !== undefined && object.group !== null) {
      for (const e of object.group) {
        message.group.push(Group.fromPartial(e));
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

const baseQueryGetAdminRequest: object = { group: "", admin: "" };

export const QueryGetAdminRequest = {
  encode(
    message: QueryGetAdminRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.group !== "") {
      writer.uint32(10).string(message.group);
    }
    if (message.admin !== "") {
      writer.uint32(18).string(message.admin);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetAdminRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetAdminRequest } as QueryGetAdminRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.group = reader.string();
          break;
        case 2:
          message.admin = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetAdminRequest {
    const message = { ...baseQueryGetAdminRequest } as QueryGetAdminRequest;
    if (object.group !== undefined && object.group !== null) {
      message.group = String(object.group);
    } else {
      message.group = "";
    }
    if (object.admin !== undefined && object.admin !== null) {
      message.admin = String(object.admin);
    } else {
      message.admin = "";
    }
    return message;
  },

  toJSON(message: QueryGetAdminRequest): unknown {
    const obj: any = {};
    message.group !== undefined && (obj.group = message.group);
    message.admin !== undefined && (obj.admin = message.admin);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryGetAdminRequest>): QueryGetAdminRequest {
    const message = { ...baseQueryGetAdminRequest } as QueryGetAdminRequest;
    if (object.group !== undefined && object.group !== null) {
      message.group = object.group;
    } else {
      message.group = "";
    }
    if (object.admin !== undefined && object.admin !== null) {
      message.admin = object.admin;
    } else {
      message.admin = "";
    }
    return message;
  },
};

const baseQueryGetAdminResponse: object = {};

export const QueryGetAdminResponse = {
  encode(
    message: QueryGetAdminResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.admin !== undefined) {
      Admin.encode(message.admin, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetAdminResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetAdminResponse } as QueryGetAdminResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.admin = Admin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetAdminResponse {
    const message = { ...baseQueryGetAdminResponse } as QueryGetAdminResponse;
    if (object.admin !== undefined && object.admin !== null) {
      message.admin = Admin.fromJSON(object.admin);
    } else {
      message.admin = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetAdminResponse): unknown {
    const obj: any = {};
    message.admin !== undefined &&
      (obj.admin = message.admin ? Admin.toJSON(message.admin) : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetAdminResponse>
  ): QueryGetAdminResponse {
    const message = { ...baseQueryGetAdminResponse } as QueryGetAdminResponse;
    if (object.admin !== undefined && object.admin !== null) {
      message.admin = Admin.fromPartial(object.admin);
    } else {
      message.admin = undefined;
    }
    return message;
  },
};

const baseQueryAllAdminRequest: object = {};

export const QueryAllAdminRequest = {
  encode(
    message: QueryAllAdminRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllAdminRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllAdminRequest } as QueryAllAdminRequest;
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

  fromJSON(object: any): QueryAllAdminRequest {
    const message = { ...baseQueryAllAdminRequest } as QueryAllAdminRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllAdminRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryAllAdminRequest>): QueryAllAdminRequest {
    const message = { ...baseQueryAllAdminRequest } as QueryAllAdminRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllAdminResponse: object = {};

export const QueryAllAdminResponse = {
  encode(
    message: QueryAllAdminResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.admin) {
      Admin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllAdminResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllAdminResponse } as QueryAllAdminResponse;
    message.admin = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.admin.push(Admin.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryAllAdminResponse {
    const message = { ...baseQueryAllAdminResponse } as QueryAllAdminResponse;
    message.admin = [];
    if (object.admin !== undefined && object.admin !== null) {
      for (const e of object.admin) {
        message.admin.push(Admin.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllAdminResponse): unknown {
    const obj: any = {};
    if (message.admin) {
      obj.admin = message.admin.map((e) => (e ? Admin.toJSON(e) : undefined));
    } else {
      obj.admin = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllAdminResponse>
  ): QueryAllAdminResponse {
    const message = { ...baseQueryAllAdminResponse } as QueryAllAdminResponse;
    message.admin = [];
    if (object.admin !== undefined && object.admin !== null) {
      for (const e of object.admin) {
        message.admin.push(Admin.fromPartial(e));
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

const baseQueryListAdminOfGroupRequest: object = { group: "" };

export const QueryListAdminOfGroupRequest = {
  encode(
    message: QueryListAdminOfGroupRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.group !== "") {
      writer.uint32(10).string(message.group);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryListAdminOfGroupRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryListAdminOfGroupRequest,
    } as QueryListAdminOfGroupRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.group = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryListAdminOfGroupRequest {
    const message = {
      ...baseQueryListAdminOfGroupRequest,
    } as QueryListAdminOfGroupRequest;
    if (object.group !== undefined && object.group !== null) {
      message.group = String(object.group);
    } else {
      message.group = "";
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryListAdminOfGroupRequest): unknown {
    const obj: any = {};
    message.group !== undefined && (obj.group = message.group);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryListAdminOfGroupRequest>
  ): QueryListAdminOfGroupRequest {
    const message = {
      ...baseQueryListAdminOfGroupRequest,
    } as QueryListAdminOfGroupRequest;
    if (object.group !== undefined && object.group !== null) {
      message.group = object.group;
    } else {
      message.group = "";
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryListAdminOfGroupResponse: object = { admin: "" };

export const QueryListAdminOfGroupResponse = {
  encode(
    message: QueryListAdminOfGroupResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.admin) {
      writer.uint32(10).string(v!);
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
  ): QueryListAdminOfGroupResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryListAdminOfGroupResponse,
    } as QueryListAdminOfGroupResponse;
    message.admin = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.admin.push(reader.string());
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

  fromJSON(object: any): QueryListAdminOfGroupResponse {
    const message = {
      ...baseQueryListAdminOfGroupResponse,
    } as QueryListAdminOfGroupResponse;
    message.admin = [];
    if (object.admin !== undefined && object.admin !== null) {
      for (const e of object.admin) {
        message.admin.push(String(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryListAdminOfGroupResponse): unknown {
    const obj: any = {};
    if (message.admin) {
      obj.admin = message.admin.map((e) => e);
    } else {
      obj.admin = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryListAdminOfGroupResponse>
  ): QueryListAdminOfGroupResponse {
    const message = {
      ...baseQueryListAdminOfGroupResponse,
    } as QueryListAdminOfGroupResponse;
    message.admin = [];
    if (object.admin !== undefined && object.admin !== null) {
      for (const e of object.admin) {
        message.admin.push(e);
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
  /** Queries a Group by index. */
  Group(request: QueryGetGroupRequest): Promise<QueryGetGroupResponse>;
  /** Queries a list of Group items. */
  GroupAll(request: QueryAllGroupRequest): Promise<QueryAllGroupResponse>;
  /** Queries a Admin by index. */
  Admin(request: QueryGetAdminRequest): Promise<QueryGetAdminResponse>;
  /** Queries a list of Admin items. */
  AdminAll(request: QueryAllAdminRequest): Promise<QueryAllAdminResponse>;
  /** Queries a list of ListAdminOfGroup items. */
  ListAdminOfGroup(
    request: QueryListAdminOfGroupRequest
  ): Promise<QueryListAdminOfGroupResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "thesixnetwork.sixprotocol.protocoladmin.Query",
      "Params",
      data
    );
    return promise.then((data) => QueryParamsResponse.decode(new Reader(data)));
  }

  Group(request: QueryGetGroupRequest): Promise<QueryGetGroupResponse> {
    const data = QueryGetGroupRequest.encode(request).finish();
    const promise = this.rpc.request(
      "thesixnetwork.sixprotocol.protocoladmin.Query",
      "Group",
      data
    );
    return promise.then((data) =>
      QueryGetGroupResponse.decode(new Reader(data))
    );
  }

  GroupAll(request: QueryAllGroupRequest): Promise<QueryAllGroupResponse> {
    const data = QueryAllGroupRequest.encode(request).finish();
    const promise = this.rpc.request(
      "thesixnetwork.sixprotocol.protocoladmin.Query",
      "GroupAll",
      data
    );
    return promise.then((data) =>
      QueryAllGroupResponse.decode(new Reader(data))
    );
  }

  Admin(request: QueryGetAdminRequest): Promise<QueryGetAdminResponse> {
    const data = QueryGetAdminRequest.encode(request).finish();
    const promise = this.rpc.request(
      "thesixnetwork.sixprotocol.protocoladmin.Query",
      "Admin",
      data
    );
    return promise.then((data) =>
      QueryGetAdminResponse.decode(new Reader(data))
    );
  }

  AdminAll(request: QueryAllAdminRequest): Promise<QueryAllAdminResponse> {
    const data = QueryAllAdminRequest.encode(request).finish();
    const promise = this.rpc.request(
      "thesixnetwork.sixprotocol.protocoladmin.Query",
      "AdminAll",
      data
    );
    return promise.then((data) =>
      QueryAllAdminResponse.decode(new Reader(data))
    );
  }

  ListAdminOfGroup(
    request: QueryListAdminOfGroupRequest
  ): Promise<QueryListAdminOfGroupResponse> {
    const data = QueryListAdminOfGroupRequest.encode(request).finish();
    const promise = this.rpc.request(
      "thesixnetwork.sixprotocol.protocoladmin.Query",
      "ListAdminOfGroup",
      data
    );
    return promise.then((data) =>
      QueryListAdminOfGroupResponse.decode(new Reader(data))
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
