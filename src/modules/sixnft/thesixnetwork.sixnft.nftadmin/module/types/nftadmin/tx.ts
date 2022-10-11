/* eslint-disable */
import { Reader, util, configure, Writer } from "protobufjs/minimal";
import * as Long from "long";

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

export interface MsgMint {
  creator: string;
  amount: number;
  token: string;
}

export interface MsgMintResponse {
  amount: string;
  token: string;
}

export interface MsgBurn {
  creator: string;
  amount: number;
  token: string;
}

export interface MsgBurnResponse {
  amount: string;
  token: string;
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

const baseMsgMint: object = { creator: "", amount: 0, token: "" };

export const MsgMint = {
  encode(message: MsgMint, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.amount !== 0) {
      writer.uint32(16).uint64(message.amount);
    }
    if (message.token !== "") {
      writer.uint32(26).string(message.token);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgMint {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgMint } as MsgMint;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.amount = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.token = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgMint {
    const message = { ...baseMsgMint } as MsgMint;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Number(object.amount);
    } else {
      message.amount = 0;
    }
    if (object.token !== undefined && object.token !== null) {
      message.token = String(object.token);
    } else {
      message.token = "";
    }
    return message;
  },

  toJSON(message: MsgMint): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.amount !== undefined && (obj.amount = message.amount);
    message.token !== undefined && (obj.token = message.token);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgMint>): MsgMint {
    const message = { ...baseMsgMint } as MsgMint;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    } else {
      message.amount = 0;
    }
    if (object.token !== undefined && object.token !== null) {
      message.token = object.token;
    } else {
      message.token = "";
    }
    return message;
  },
};

const baseMsgMintResponse: object = { amount: "", token: "" };

export const MsgMintResponse = {
  encode(message: MsgMintResponse, writer: Writer = Writer.create()): Writer {
    if (message.amount !== "") {
      writer.uint32(10).string(message.amount);
    }
    if (message.token !== "") {
      writer.uint32(18).string(message.token);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgMintResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgMintResponse } as MsgMintResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amount = reader.string();
          break;
        case 2:
          message.token = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgMintResponse {
    const message = { ...baseMsgMintResponse } as MsgMintResponse;
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = String(object.amount);
    } else {
      message.amount = "";
    }
    if (object.token !== undefined && object.token !== null) {
      message.token = String(object.token);
    } else {
      message.token = "";
    }
    return message;
  },

  toJSON(message: MsgMintResponse): unknown {
    const obj: any = {};
    message.amount !== undefined && (obj.amount = message.amount);
    message.token !== undefined && (obj.token = message.token);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgMintResponse>): MsgMintResponse {
    const message = { ...baseMsgMintResponse } as MsgMintResponse;
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    } else {
      message.amount = "";
    }
    if (object.token !== undefined && object.token !== null) {
      message.token = object.token;
    } else {
      message.token = "";
    }
    return message;
  },
};

const baseMsgBurn: object = { creator: "", amount: 0, token: "" };

export const MsgBurn = {
  encode(message: MsgBurn, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.amount !== 0) {
      writer.uint32(16).uint64(message.amount);
    }
    if (message.token !== "") {
      writer.uint32(26).string(message.token);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgBurn {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgBurn } as MsgBurn;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.amount = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.token = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgBurn {
    const message = { ...baseMsgBurn } as MsgBurn;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Number(object.amount);
    } else {
      message.amount = 0;
    }
    if (object.token !== undefined && object.token !== null) {
      message.token = String(object.token);
    } else {
      message.token = "";
    }
    return message;
  },

  toJSON(message: MsgBurn): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.amount !== undefined && (obj.amount = message.amount);
    message.token !== undefined && (obj.token = message.token);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgBurn>): MsgBurn {
    const message = { ...baseMsgBurn } as MsgBurn;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    } else {
      message.amount = 0;
    }
    if (object.token !== undefined && object.token !== null) {
      message.token = object.token;
    } else {
      message.token = "";
    }
    return message;
  },
};

const baseMsgBurnResponse: object = { amount: "", token: "" };

export const MsgBurnResponse = {
  encode(message: MsgBurnResponse, writer: Writer = Writer.create()): Writer {
    if (message.amount !== "") {
      writer.uint32(10).string(message.amount);
    }
    if (message.token !== "") {
      writer.uint32(18).string(message.token);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgBurnResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgBurnResponse } as MsgBurnResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amount = reader.string();
          break;
        case 2:
          message.token = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgBurnResponse {
    const message = { ...baseMsgBurnResponse } as MsgBurnResponse;
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = String(object.amount);
    } else {
      message.amount = "";
    }
    if (object.token !== undefined && object.token !== null) {
      message.token = String(object.token);
    } else {
      message.token = "";
    }
    return message;
  },

  toJSON(message: MsgBurnResponse): unknown {
    const obj: any = {};
    message.amount !== undefined && (obj.amount = message.amount);
    message.token !== undefined && (obj.token = message.token);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgBurnResponse>): MsgBurnResponse {
    const message = { ...baseMsgBurnResponse } as MsgBurnResponse;
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    } else {
      message.amount = "";
    }
    if (object.token !== undefined && object.token !== null) {
      message.token = object.token;
    } else {
      message.token = "";
    }
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  GrantPermission(
    request: MsgGrantPermission
  ): Promise<MsgGrantPermissionResponse>;
  RevokePermission(
    request: MsgRevokePermission
  ): Promise<MsgRevokePermissionResponse>;
  Mint(request: MsgMint): Promise<MsgMintResponse>;
  /** this line is used by starport scaffolding # proto/tx/rpc */
  Burn(request: MsgBurn): Promise<MsgBurnResponse>;
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

  Mint(request: MsgMint): Promise<MsgMintResponse> {
    const data = MsgMint.encode(request).finish();
    const promise = this.rpc.request(
      "thesixnetwork.sixnft.nftadmin.Msg",
      "Mint",
      data
    );
    return promise.then((data) => MsgMintResponse.decode(new Reader(data)));
  }

  Burn(request: MsgBurn): Promise<MsgBurnResponse> {
    const data = MsgBurn.encode(request).finish();
    const promise = this.rpc.request(
      "thesixnetwork.sixnft.nftadmin.Msg",
      "Burn",
      data
    );
    return promise.then((data) => MsgBurnResponse.decode(new Reader(data)));
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
