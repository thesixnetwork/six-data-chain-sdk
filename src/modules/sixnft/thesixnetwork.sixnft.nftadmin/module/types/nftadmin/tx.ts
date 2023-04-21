/* eslint-disable */
import { Reader, Writer } from "protobufjs/minimal";

export const protobufPackage = "thesixnetwork.sixnft.nftadmin";

export interface MsgGrantPermission {
  creator: string;
  name: string;
  grantee: string;
}

export interface MsgGrantPermissionResponse {
  grantee: string;
}

export interface MsgRevokePermission {
  creator: string;
  name: string;
  revokee: string;
}

export interface MsgRevokePermissionResponse {
  revokee: string;
}

const baseMsgGrantPermission: object = { creator: "", name: "", grantee: "" };

export const MsgGrantPermission = {
  encode(
    message: MsgGrantPermission,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.grantee !== "") {
      writer.uint32(26).string(message.grantee);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgGrantPermission {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgGrantPermission } as MsgGrantPermission;
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
          message.grantee = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgGrantPermission {
    const message = { ...baseMsgGrantPermission } as MsgGrantPermission;
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
    if (object.grantee !== undefined && object.grantee !== null) {
      message.grantee = String(object.grantee);
    } else {
      message.grantee = "";
    }
    return message;
  },

  toJSON(message: MsgGrantPermission): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.name !== undefined && (obj.name = message.name);
    message.grantee !== undefined && (obj.grantee = message.grantee);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgGrantPermission>): MsgGrantPermission {
    const message = { ...baseMsgGrantPermission } as MsgGrantPermission;
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
    if (object.grantee !== undefined && object.grantee !== null) {
      message.grantee = object.grantee;
    } else {
      message.grantee = "";
    }
    return message;
  },
};

const baseMsgGrantPermissionResponse: object = { grantee: "" };

export const MsgGrantPermissionResponse = {
  encode(
    message: MsgGrantPermissionResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.grantee !== "") {
      writer.uint32(10).string(message.grantee);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgGrantPermissionResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgGrantPermissionResponse,
    } as MsgGrantPermissionResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.grantee = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgGrantPermissionResponse {
    const message = {
      ...baseMsgGrantPermissionResponse,
    } as MsgGrantPermissionResponse;
    if (object.grantee !== undefined && object.grantee !== null) {
      message.grantee = String(object.grantee);
    } else {
      message.grantee = "";
    }
    return message;
  },

  toJSON(message: MsgGrantPermissionResponse): unknown {
    const obj: any = {};
    message.grantee !== undefined && (obj.grantee = message.grantee);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgGrantPermissionResponse>
  ): MsgGrantPermissionResponse {
    const message = {
      ...baseMsgGrantPermissionResponse,
    } as MsgGrantPermissionResponse;
    if (object.grantee !== undefined && object.grantee !== null) {
      message.grantee = object.grantee;
    } else {
      message.grantee = "";
    }
    return message;
  },
};

const baseMsgRevokePermission: object = { creator: "", name: "", revokee: "" };

export const MsgRevokePermission = {
  encode(
    message: MsgRevokePermission,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.revokee !== "") {
      writer.uint32(26).string(message.revokee);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgRevokePermission {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgRevokePermission } as MsgRevokePermission;
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
          message.revokee = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgRevokePermission {
    const message = { ...baseMsgRevokePermission } as MsgRevokePermission;
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
    if (object.revokee !== undefined && object.revokee !== null) {
      message.revokee = String(object.revokee);
    } else {
      message.revokee = "";
    }
    return message;
  },

  toJSON(message: MsgRevokePermission): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.name !== undefined && (obj.name = message.name);
    message.revokee !== undefined && (obj.revokee = message.revokee);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgRevokePermission>): MsgRevokePermission {
    const message = { ...baseMsgRevokePermission } as MsgRevokePermission;
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
    if (object.revokee !== undefined && object.revokee !== null) {
      message.revokee = object.revokee;
    } else {
      message.revokee = "";
    }
    return message;
  },
};

const baseMsgRevokePermissionResponse: object = { revokee: "" };

export const MsgRevokePermissionResponse = {
  encode(
    message: MsgRevokePermissionResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.revokee !== "") {
      writer.uint32(10).string(message.revokee);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgRevokePermissionResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgRevokePermissionResponse,
    } as MsgRevokePermissionResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.revokee = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgRevokePermissionResponse {
    const message = {
      ...baseMsgRevokePermissionResponse,
    } as MsgRevokePermissionResponse;
    if (object.revokee !== undefined && object.revokee !== null) {
      message.revokee = String(object.revokee);
    } else {
      message.revokee = "";
    }
    return message;
  },

  toJSON(message: MsgRevokePermissionResponse): unknown {
    const obj: any = {};
    message.revokee !== undefined && (obj.revokee = message.revokee);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgRevokePermissionResponse>
  ): MsgRevokePermissionResponse {
    const message = {
      ...baseMsgRevokePermissionResponse,
    } as MsgRevokePermissionResponse;
    if (object.revokee !== undefined && object.revokee !== null) {
      message.revokee = object.revokee;
    } else {
      message.revokee = "";
    }
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  GrantPermission(
    request: MsgGrantPermission
  ): Promise<MsgGrantPermissionResponse>;
  /** this line is used by starport scaffolding # proto/tx/rpc */
  RevokePermission(
    request: MsgRevokePermission
  ): Promise<MsgRevokePermissionResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  GrantPermission(
    request: MsgGrantPermission
  ): Promise<MsgGrantPermissionResponse> {
    const data = MsgGrantPermission.encode(request).finish();
    const promise = this.rpc.request(
      "thesixnetwork.sixnft.nftadmin.Msg",
      "GrantPermission",
      data
    );
    return promise.then((data) =>
      MsgGrantPermissionResponse.decode(new Reader(data))
    );
  }

  RevokePermission(
    request: MsgRevokePermission
  ): Promise<MsgRevokePermissionResponse> {
    const data = MsgRevokePermission.encode(request).finish();
    const promise = this.rpc.request(
      "thesixnetwork.sixnft.nftadmin.Msg",
      "RevokePermission",
      data
    );
    return promise.then((data) =>
      MsgRevokePermissionResponse.decode(new Reader(data))
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
