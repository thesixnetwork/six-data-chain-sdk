/* eslint-disable */
import { AttributeDefinition } from "../nftmngr/attribute_definition";
import { Action } from "../nftmngr/action";
import { NftAttributeValue } from "../nftmngr/nft_attribute_value";
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "thesixnetwork.sixnft.nftmngr";

export interface FlagStatus {
  status_name: string;
  status_value: boolean;
}

export interface OnChainData {
  nft_attributes: AttributeDefinition[];
  token_attributes: AttributeDefinition[];
  actions: Action[];
  status: FlagStatus[];
}

export interface OnChainDataV2 {
  token_attributes: AttributeDefinition[];
  actions: Action[];
  status: FlagStatus[];
}

export interface OnChainDataV1 {
  reveal_required: boolean;
  reveal_secret: Uint8Array;
  nft_attributes: AttributeDefinition[];
  token_attributes: AttributeDefinition[];
  actions: Action[];
  status: FlagStatus[];
  nft_attributes_value: NftAttributeValue[];
}

const baseFlagStatus: object = { status_name: "", status_value: false };

export const FlagStatus = {
  encode(message: FlagStatus, writer: Writer = Writer.create()): Writer {
    if (message.status_name !== "") {
      writer.uint32(10).string(message.status_name);
    }
    if (message.status_value === true) {
      writer.uint32(16).bool(message.status_value);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): FlagStatus {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseFlagStatus } as FlagStatus;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.status_name = reader.string();
          break;
        case 2:
          message.status_value = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): FlagStatus {
    const message = { ...baseFlagStatus } as FlagStatus;
    if (object.status_name !== undefined && object.status_name !== null) {
      message.status_name = String(object.status_name);
    } else {
      message.status_name = "";
    }
    if (object.status_value !== undefined && object.status_value !== null) {
      message.status_value = Boolean(object.status_value);
    } else {
      message.status_value = false;
    }
    return message;
  },

  toJSON(message: FlagStatus): unknown {
    const obj: any = {};
    message.status_name !== undefined &&
      (obj.status_name = message.status_name);
    message.status_value !== undefined &&
      (obj.status_value = message.status_value);
    return obj;
  },

  fromPartial(object: DeepPartial<FlagStatus>): FlagStatus {
    const message = { ...baseFlagStatus } as FlagStatus;
    if (object.status_name !== undefined && object.status_name !== null) {
      message.status_name = object.status_name;
    } else {
      message.status_name = "";
    }
    if (object.status_value !== undefined && object.status_value !== null) {
      message.status_value = object.status_value;
    } else {
      message.status_value = false;
    }
    return message;
  },
};

const baseOnChainData: object = {};

export const OnChainData = {
  encode(message: OnChainData, writer: Writer = Writer.create()): Writer {
    for (const v of message.nft_attributes) {
      AttributeDefinition.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.token_attributes) {
      AttributeDefinition.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.actions) {
      Action.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.status) {
      FlagStatus.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): OnChainData {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseOnChainData } as OnChainData;
    message.nft_attributes = [];
    message.token_attributes = [];
    message.actions = [];
    message.status = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nft_attributes.push(
            AttributeDefinition.decode(reader, reader.uint32())
          );
          break;
        case 2:
          message.token_attributes.push(
            AttributeDefinition.decode(reader, reader.uint32())
          );
          break;
        case 3:
          message.actions.push(Action.decode(reader, reader.uint32()));
          break;
        case 4:
          message.status.push(FlagStatus.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): OnChainData {
    const message = { ...baseOnChainData } as OnChainData;
    message.nft_attributes = [];
    message.token_attributes = [];
    message.actions = [];
    message.status = [];
    if (object.nft_attributes !== undefined && object.nft_attributes !== null) {
      for (const e of object.nft_attributes) {
        message.nft_attributes.push(AttributeDefinition.fromJSON(e));
      }
    }
    if (
      object.token_attributes !== undefined &&
      object.token_attributes !== null
    ) {
      for (const e of object.token_attributes) {
        message.token_attributes.push(AttributeDefinition.fromJSON(e));
      }
    }
    if (object.actions !== undefined && object.actions !== null) {
      for (const e of object.actions) {
        message.actions.push(Action.fromJSON(e));
      }
    }
    if (object.status !== undefined && object.status !== null) {
      for (const e of object.status) {
        message.status.push(FlagStatus.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: OnChainData): unknown {
    const obj: any = {};
    if (message.nft_attributes) {
      obj.nft_attributes = message.nft_attributes.map((e) =>
        e ? AttributeDefinition.toJSON(e) : undefined
      );
    } else {
      obj.nft_attributes = [];
    }
    if (message.token_attributes) {
      obj.token_attributes = message.token_attributes.map((e) =>
        e ? AttributeDefinition.toJSON(e) : undefined
      );
    } else {
      obj.token_attributes = [];
    }
    if (message.actions) {
      obj.actions = message.actions.map((e) =>
        e ? Action.toJSON(e) : undefined
      );
    } else {
      obj.actions = [];
    }
    if (message.status) {
      obj.status = message.status.map((e) =>
        e ? FlagStatus.toJSON(e) : undefined
      );
    } else {
      obj.status = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<OnChainData>): OnChainData {
    const message = { ...baseOnChainData } as OnChainData;
    message.nft_attributes = [];
    message.token_attributes = [];
    message.actions = [];
    message.status = [];
    if (object.nft_attributes !== undefined && object.nft_attributes !== null) {
      for (const e of object.nft_attributes) {
        message.nft_attributes.push(AttributeDefinition.fromPartial(e));
      }
    }
    if (
      object.token_attributes !== undefined &&
      object.token_attributes !== null
    ) {
      for (const e of object.token_attributes) {
        message.token_attributes.push(AttributeDefinition.fromPartial(e));
      }
    }
    if (object.actions !== undefined && object.actions !== null) {
      for (const e of object.actions) {
        message.actions.push(Action.fromPartial(e));
      }
    }
    if (object.status !== undefined && object.status !== null) {
      for (const e of object.status) {
        message.status.push(FlagStatus.fromPartial(e));
      }
    }
    return message;
  },
};

const baseOnChainDataV2: object = {};

export const OnChainDataV2 = {
  encode(message: OnChainDataV2, writer: Writer = Writer.create()): Writer {
    for (const v of message.token_attributes) {
      AttributeDefinition.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.actions) {
      Action.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.status) {
      FlagStatus.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): OnChainDataV2 {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseOnChainDataV2 } as OnChainDataV2;
    message.token_attributes = [];
    message.actions = [];
    message.status = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.token_attributes.push(
            AttributeDefinition.decode(reader, reader.uint32())
          );
          break;
        case 2:
          message.actions.push(Action.decode(reader, reader.uint32()));
          break;
        case 3:
          message.status.push(FlagStatus.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): OnChainDataV2 {
    const message = { ...baseOnChainDataV2 } as OnChainDataV2;
    message.token_attributes = [];
    message.actions = [];
    message.status = [];
    if (
      object.token_attributes !== undefined &&
      object.token_attributes !== null
    ) {
      for (const e of object.token_attributes) {
        message.token_attributes.push(AttributeDefinition.fromJSON(e));
      }
    }
    if (object.actions !== undefined && object.actions !== null) {
      for (const e of object.actions) {
        message.actions.push(Action.fromJSON(e));
      }
    }
    if (object.status !== undefined && object.status !== null) {
      for (const e of object.status) {
        message.status.push(FlagStatus.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: OnChainDataV2): unknown {
    const obj: any = {};
    if (message.token_attributes) {
      obj.token_attributes = message.token_attributes.map((e) =>
        e ? AttributeDefinition.toJSON(e) : undefined
      );
    } else {
      obj.token_attributes = [];
    }
    if (message.actions) {
      obj.actions = message.actions.map((e) =>
        e ? Action.toJSON(e) : undefined
      );
    } else {
      obj.actions = [];
    }
    if (message.status) {
      obj.status = message.status.map((e) =>
        e ? FlagStatus.toJSON(e) : undefined
      );
    } else {
      obj.status = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<OnChainDataV2>): OnChainDataV2 {
    const message = { ...baseOnChainDataV2 } as OnChainDataV2;
    message.token_attributes = [];
    message.actions = [];
    message.status = [];
    if (
      object.token_attributes !== undefined &&
      object.token_attributes !== null
    ) {
      for (const e of object.token_attributes) {
        message.token_attributes.push(AttributeDefinition.fromPartial(e));
      }
    }
    if (object.actions !== undefined && object.actions !== null) {
      for (const e of object.actions) {
        message.actions.push(Action.fromPartial(e));
      }
    }
    if (object.status !== undefined && object.status !== null) {
      for (const e of object.status) {
        message.status.push(FlagStatus.fromPartial(e));
      }
    }
    return message;
  },
};

const baseOnChainDataV1: object = { reveal_required: false };

export const OnChainDataV1 = {
  encode(message: OnChainDataV1, writer: Writer = Writer.create()): Writer {
    if (message.reveal_required === true) {
      writer.uint32(8).bool(message.reveal_required);
    }
    if (message.reveal_secret.length !== 0) {
      writer.uint32(18).bytes(message.reveal_secret);
    }
    for (const v of message.nft_attributes) {
      AttributeDefinition.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.token_attributes) {
      AttributeDefinition.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.actions) {
      Action.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.status) {
      FlagStatus.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.nft_attributes_value) {
      NftAttributeValue.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): OnChainDataV1 {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseOnChainDataV1 } as OnChainDataV1;
    message.nft_attributes = [];
    message.token_attributes = [];
    message.actions = [];
    message.status = [];
    message.nft_attributes_value = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.reveal_required = reader.bool();
          break;
        case 2:
          message.reveal_secret = reader.bytes();
          break;
        case 3:
          message.nft_attributes.push(
            AttributeDefinition.decode(reader, reader.uint32())
          );
          break;
        case 4:
          message.token_attributes.push(
            AttributeDefinition.decode(reader, reader.uint32())
          );
          break;
        case 5:
          message.actions.push(Action.decode(reader, reader.uint32()));
          break;
        case 6:
          message.status.push(FlagStatus.decode(reader, reader.uint32()));
          break;
        case 7:
          message.nft_attributes_value.push(
            NftAttributeValue.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): OnChainDataV1 {
    const message = { ...baseOnChainDataV1 } as OnChainDataV1;
    message.nft_attributes = [];
    message.token_attributes = [];
    message.actions = [];
    message.status = [];
    message.nft_attributes_value = [];
    if (
      object.reveal_required !== undefined &&
      object.reveal_required !== null
    ) {
      message.reveal_required = Boolean(object.reveal_required);
    } else {
      message.reveal_required = false;
    }
    if (object.reveal_secret !== undefined && object.reveal_secret !== null) {
      message.reveal_secret = bytesFromBase64(object.reveal_secret);
    }
    if (object.nft_attributes !== undefined && object.nft_attributes !== null) {
      for (const e of object.nft_attributes) {
        message.nft_attributes.push(AttributeDefinition.fromJSON(e));
      }
    }
    if (
      object.token_attributes !== undefined &&
      object.token_attributes !== null
    ) {
      for (const e of object.token_attributes) {
        message.token_attributes.push(AttributeDefinition.fromJSON(e));
      }
    }
    if (object.actions !== undefined && object.actions !== null) {
      for (const e of object.actions) {
        message.actions.push(Action.fromJSON(e));
      }
    }
    if (object.status !== undefined && object.status !== null) {
      for (const e of object.status) {
        message.status.push(FlagStatus.fromJSON(e));
      }
    }
    if (
      object.nft_attributes_value !== undefined &&
      object.nft_attributes_value !== null
    ) {
      for (const e of object.nft_attributes_value) {
        message.nft_attributes_value.push(NftAttributeValue.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: OnChainDataV1): unknown {
    const obj: any = {};
    message.reveal_required !== undefined &&
      (obj.reveal_required = message.reveal_required);
    message.reveal_secret !== undefined &&
      (obj.reveal_secret = base64FromBytes(
        message.reveal_secret !== undefined
          ? message.reveal_secret
          : new Uint8Array()
      ));
    if (message.nft_attributes) {
      obj.nft_attributes = message.nft_attributes.map((e) =>
        e ? AttributeDefinition.toJSON(e) : undefined
      );
    } else {
      obj.nft_attributes = [];
    }
    if (message.token_attributes) {
      obj.token_attributes = message.token_attributes.map((e) =>
        e ? AttributeDefinition.toJSON(e) : undefined
      );
    } else {
      obj.token_attributes = [];
    }
    if (message.actions) {
      obj.actions = message.actions.map((e) =>
        e ? Action.toJSON(e) : undefined
      );
    } else {
      obj.actions = [];
    }
    if (message.status) {
      obj.status = message.status.map((e) =>
        e ? FlagStatus.toJSON(e) : undefined
      );
    } else {
      obj.status = [];
    }
    if (message.nft_attributes_value) {
      obj.nft_attributes_value = message.nft_attributes_value.map((e) =>
        e ? NftAttributeValue.toJSON(e) : undefined
      );
    } else {
      obj.nft_attributes_value = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<OnChainDataV1>): OnChainDataV1 {
    const message = { ...baseOnChainDataV1 } as OnChainDataV1;
    message.nft_attributes = [];
    message.token_attributes = [];
    message.actions = [];
    message.status = [];
    message.nft_attributes_value = [];
    if (
      object.reveal_required !== undefined &&
      object.reveal_required !== null
    ) {
      message.reveal_required = object.reveal_required;
    } else {
      message.reveal_required = false;
    }
    if (object.reveal_secret !== undefined && object.reveal_secret !== null) {
      message.reveal_secret = object.reveal_secret;
    } else {
      message.reveal_secret = new Uint8Array();
    }
    if (object.nft_attributes !== undefined && object.nft_attributes !== null) {
      for (const e of object.nft_attributes) {
        message.nft_attributes.push(AttributeDefinition.fromPartial(e));
      }
    }
    if (
      object.token_attributes !== undefined &&
      object.token_attributes !== null
    ) {
      for (const e of object.token_attributes) {
        message.token_attributes.push(AttributeDefinition.fromPartial(e));
      }
    }
    if (object.actions !== undefined && object.actions !== null) {
      for (const e of object.actions) {
        message.actions.push(Action.fromPartial(e));
      }
    }
    if (object.status !== undefined && object.status !== null) {
      for (const e of object.status) {
        message.status.push(FlagStatus.fromPartial(e));
      }
    }
    if (
      object.nft_attributes_value !== undefined &&
      object.nft_attributes_value !== null
    ) {
      for (const e of object.nft_attributes_value) {
        message.nft_attributes_value.push(NftAttributeValue.fromPartial(e));
      }
    }
    return message;
  },
};

declare var self: any | undefined;
declare var window: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

const atob: (b64: string) => string =
  globalThis.atob ||
  ((b64) => globalThis.Buffer.from(b64, "base64").toString("binary"));
function bytesFromBase64(b64: string): Uint8Array {
  const bin = atob(b64);
  const arr = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; ++i) {
    arr[i] = bin.charCodeAt(i);
  }
  return arr;
}

const btoa: (bin: string) => string =
  globalThis.btoa ||
  ((bin) => globalThis.Buffer.from(bin, "binary").toString("base64"));
function base64FromBytes(arr: Uint8Array): string {
  const bin: string[] = [];
  for (let i = 0; i < arr.byteLength; ++i) {
    bin.push(String.fromCharCode(arr[i]));
  }
  return btoa(bin.join(""));
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
