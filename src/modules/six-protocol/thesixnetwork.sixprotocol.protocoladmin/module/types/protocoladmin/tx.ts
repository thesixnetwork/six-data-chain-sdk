/* eslint-disable */
import { Reader, Writer } from "protobufjs/minimal";

export const protobufPackage = "thesixnetwork.sixprotocol.protocoladmin";

export interface MsgCreateGroup {
  creator: string;
  name: string;
}

export interface MsgCreateGroupResponse {}

export interface MsgUpdateGroup {
  creator: string;
  name: string;
}

export interface MsgUpdateGroupResponse {}

export interface MsgDeleteGroup {
  creator: string;
  name: string;
}

export interface MsgDeleteGroupResponse {}

export interface MsgAddAdminToGroup {
  creator: string;
  name: string;
  address: string;
}

export interface MsgAddAdminToGroupResponse {}

export interface MsgRemoveAdminFromGroup {
  creator: string;
  name: string;
  address: string;
}

export interface MsgRemoveAdminFromGroupResponse {}

const baseMsgCreateGroup: object = { creator: "", name: "" };

export const MsgCreateGroup = {
  encode(message: MsgCreateGroup, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateGroup {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateGroup } as MsgCreateGroup;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateGroup {
    const message = { ...baseMsgCreateGroup } as MsgCreateGroup;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    return message;
  },

  toJSON(message: MsgCreateGroup): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateGroup>): MsgCreateGroup {
    const message = { ...baseMsgCreateGroup } as MsgCreateGroup;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    return message;
  },
};

const baseMsgCreateGroupResponse: object = {};

export const MsgCreateGroupResponse = {
  encode(_: MsgCreateGroupResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateGroupResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateGroupResponse } as MsgCreateGroupResponse;
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

  fromJSON(_: any): MsgCreateGroupResponse {
    const message = { ...baseMsgCreateGroupResponse } as MsgCreateGroupResponse;
    return message;
  },

  toJSON(_: MsgCreateGroupResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgCreateGroupResponse>): MsgCreateGroupResponse {
    const message = { ...baseMsgCreateGroupResponse } as MsgCreateGroupResponse;
    return message;
  },
};

const baseMsgUpdateGroup: object = { creator: "", name: "" };

export const MsgUpdateGroup = {
  encode(message: MsgUpdateGroup, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateGroup {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateGroup } as MsgUpdateGroup;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateGroup {
    const message = { ...baseMsgUpdateGroup } as MsgUpdateGroup;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    return message;
  },

  toJSON(message: MsgUpdateGroup): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgUpdateGroup>): MsgUpdateGroup {
    const message = { ...baseMsgUpdateGroup } as MsgUpdateGroup;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    return message;
  },
};

const baseMsgUpdateGroupResponse: object = {};

export const MsgUpdateGroupResponse = {
  encode(_: MsgUpdateGroupResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateGroupResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateGroupResponse } as MsgUpdateGroupResponse;
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

  fromJSON(_: any): MsgUpdateGroupResponse {
    const message = { ...baseMsgUpdateGroupResponse } as MsgUpdateGroupResponse;
    return message;
  },

  toJSON(_: MsgUpdateGroupResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgUpdateGroupResponse>): MsgUpdateGroupResponse {
    const message = { ...baseMsgUpdateGroupResponse } as MsgUpdateGroupResponse;
    return message;
  },
};

const baseMsgDeleteGroup: object = { creator: "", name: "" };

export const MsgDeleteGroup = {
  encode(message: MsgDeleteGroup, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteGroup {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgDeleteGroup } as MsgDeleteGroup;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDeleteGroup {
    const message = { ...baseMsgDeleteGroup } as MsgDeleteGroup;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    return message;
  },

  toJSON(message: MsgDeleteGroup): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgDeleteGroup>): MsgDeleteGroup {
    const message = { ...baseMsgDeleteGroup } as MsgDeleteGroup;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    return message;
  },
};

const baseMsgDeleteGroupResponse: object = {};

export const MsgDeleteGroupResponse = {
  encode(_: MsgDeleteGroupResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteGroupResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgDeleteGroupResponse } as MsgDeleteGroupResponse;
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

  fromJSON(_: any): MsgDeleteGroupResponse {
    const message = { ...baseMsgDeleteGroupResponse } as MsgDeleteGroupResponse;
    return message;
  },

  toJSON(_: MsgDeleteGroupResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgDeleteGroupResponse>): MsgDeleteGroupResponse {
    const message = { ...baseMsgDeleteGroupResponse } as MsgDeleteGroupResponse;
    return message;
  },
};

const baseMsgAddAdminToGroup: object = { creator: "", name: "", address: "" };

export const MsgAddAdminToGroup = {
  encode(
    message: MsgAddAdminToGroup,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.address !== "") {
      writer.uint32(26).string(message.address);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgAddAdminToGroup {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgAddAdminToGroup } as MsgAddAdminToGroup;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgAddAdminToGroup {
    const message = { ...baseMsgAddAdminToGroup } as MsgAddAdminToGroup;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = String(object.address);
    } else {
      message.address = "";
    }
    return message;
  },

  toJSON(message: MsgAddAdminToGroup): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.name !== undefined && (obj.name = message.name);
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgAddAdminToGroup>): MsgAddAdminToGroup {
    const message = { ...baseMsgAddAdminToGroup } as MsgAddAdminToGroup;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    } else {
      message.address = "";
    }
    return message;
  },
};

const baseMsgAddAdminToGroupResponse: object = {};

export const MsgAddAdminToGroupResponse = {
  encode(
    _: MsgAddAdminToGroupResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgAddAdminToGroupResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgAddAdminToGroupResponse,
    } as MsgAddAdminToGroupResponse;
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

  fromJSON(_: any): MsgAddAdminToGroupResponse {
    const message = {
      ...baseMsgAddAdminToGroupResponse,
    } as MsgAddAdminToGroupResponse;
    return message;
  },

  toJSON(_: MsgAddAdminToGroupResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgAddAdminToGroupResponse>
  ): MsgAddAdminToGroupResponse {
    const message = {
      ...baseMsgAddAdminToGroupResponse,
    } as MsgAddAdminToGroupResponse;
    return message;
  },
};

const baseMsgRemoveAdminFromGroup: object = {
  creator: "",
  name: "",
  address: "",
};

export const MsgRemoveAdminFromGroup = {
  encode(
    message: MsgRemoveAdminFromGroup,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.address !== "") {
      writer.uint32(26).string(message.address);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgRemoveAdminFromGroup {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgRemoveAdminFromGroup,
    } as MsgRemoveAdminFromGroup;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgRemoveAdminFromGroup {
    const message = {
      ...baseMsgRemoveAdminFromGroup,
    } as MsgRemoveAdminFromGroup;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = String(object.address);
    } else {
      message.address = "";
    }
    return message;
  },

  toJSON(message: MsgRemoveAdminFromGroup): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.name !== undefined && (obj.name = message.name);
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgRemoveAdminFromGroup>
  ): MsgRemoveAdminFromGroup {
    const message = {
      ...baseMsgRemoveAdminFromGroup,
    } as MsgRemoveAdminFromGroup;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    } else {
      message.address = "";
    }
    return message;
  },
};

const baseMsgRemoveAdminFromGroupResponse: object = {};

export const MsgRemoveAdminFromGroupResponse = {
  encode(
    _: MsgRemoveAdminFromGroupResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgRemoveAdminFromGroupResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgRemoveAdminFromGroupResponse,
    } as MsgRemoveAdminFromGroupResponse;
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

  fromJSON(_: any): MsgRemoveAdminFromGroupResponse {
    const message = {
      ...baseMsgRemoveAdminFromGroupResponse,
    } as MsgRemoveAdminFromGroupResponse;
    return message;
  },

  toJSON(_: MsgRemoveAdminFromGroupResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgRemoveAdminFromGroupResponse>
  ): MsgRemoveAdminFromGroupResponse {
    const message = {
      ...baseMsgRemoveAdminFromGroupResponse,
    } as MsgRemoveAdminFromGroupResponse;
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  CreateGroup(request: MsgCreateGroup): Promise<MsgCreateGroupResponse>;
  UpdateGroup(request: MsgUpdateGroup): Promise<MsgUpdateGroupResponse>;
  DeleteGroup(request: MsgDeleteGroup): Promise<MsgDeleteGroupResponse>;
  AddAdminToGroup(
    request: MsgAddAdminToGroup
  ): Promise<MsgAddAdminToGroupResponse>;
  /** this line is used by starport scaffolding # proto/tx/rpc */
  RemoveAdminFromGroup(
    request: MsgRemoveAdminFromGroup
  ): Promise<MsgRemoveAdminFromGroupResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  CreateGroup(request: MsgCreateGroup): Promise<MsgCreateGroupResponse> {
    const data = MsgCreateGroup.encode(request).finish();
    const promise = this.rpc.request(
      "thesixnetwork.sixprotocol.protocoladmin.Msg",
      "CreateGroup",
      data
    );
    return promise.then((data) =>
      MsgCreateGroupResponse.decode(new Reader(data))
    );
  }

  UpdateGroup(request: MsgUpdateGroup): Promise<MsgUpdateGroupResponse> {
    const data = MsgUpdateGroup.encode(request).finish();
    const promise = this.rpc.request(
      "thesixnetwork.sixprotocol.protocoladmin.Msg",
      "UpdateGroup",
      data
    );
    return promise.then((data) =>
      MsgUpdateGroupResponse.decode(new Reader(data))
    );
  }

  DeleteGroup(request: MsgDeleteGroup): Promise<MsgDeleteGroupResponse> {
    const data = MsgDeleteGroup.encode(request).finish();
    const promise = this.rpc.request(
      "thesixnetwork.sixprotocol.protocoladmin.Msg",
      "DeleteGroup",
      data
    );
    return promise.then((data) =>
      MsgDeleteGroupResponse.decode(new Reader(data))
    );
  }

  AddAdminToGroup(
    request: MsgAddAdminToGroup
  ): Promise<MsgAddAdminToGroupResponse> {
    const data = MsgAddAdminToGroup.encode(request).finish();
    const promise = this.rpc.request(
      "thesixnetwork.sixprotocol.protocoladmin.Msg",
      "AddAdminToGroup",
      data
    );
    return promise.then((data) =>
      MsgAddAdminToGroupResponse.decode(new Reader(data))
    );
  }

  RemoveAdminFromGroup(
    request: MsgRemoveAdminFromGroup
  ): Promise<MsgRemoveAdminFromGroupResponse> {
    const data = MsgRemoveAdminFromGroup.encode(request).finish();
    const promise = this.rpc.request(
      "thesixnetwork.sixprotocol.protocoladmin.Msg",
      "RemoveAdminFromGroup",
      data
    );
    return promise.then((data) =>
      MsgRemoveAdminFromGroupResponse.decode(new Reader(data))
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
