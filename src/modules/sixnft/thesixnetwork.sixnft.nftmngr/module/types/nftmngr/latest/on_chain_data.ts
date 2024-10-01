/* eslint-disable */
import { AttributeDefinition } from "../../nftmngr/latest/attribute_definition";
import { Action } from "../../nftmngr/latest/action";
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
