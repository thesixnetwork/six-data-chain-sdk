/* eslint-disable */
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "cosmos.staking.v2beta1";

export interface WhitelistDelegator {
  validator_address: string;
  delegator_address: string[];
}

const baseWhitelistDelegator: object = {
  validator_address: "",
  delegator_address: "",
};

export const WhitelistDelegator = {
  encode(
    message: WhitelistDelegator,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.validator_address !== "") {
      writer.uint32(10).string(message.validator_address);
    }
    for (const v of message.delegator_address) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): WhitelistDelegator {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseWhitelistDelegator } as WhitelistDelegator;
    message.delegator_address = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validator_address = reader.string();
          break;
        case 2:
          message.delegator_address.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): WhitelistDelegator {
    const message = { ...baseWhitelistDelegator } as WhitelistDelegator;
    message.delegator_address = [];
    if (
      object.validator_address !== undefined &&
      object.validator_address !== null
    ) {
      message.validator_address = String(object.validator_address);
    } else {
      message.validator_address = "";
    }
    if (
      object.delegator_address !== undefined &&
      object.delegator_address !== null
    ) {
      for (const e of object.delegator_address) {
        message.delegator_address.push(String(e));
      }
    }
    return message;
  },

  toJSON(message: WhitelistDelegator): unknown {
    const obj: any = {};
    message.validator_address !== undefined &&
      (obj.validator_address = message.validator_address);
    if (message.delegator_address) {
      obj.delegator_address = message.delegator_address.map((e) => e);
    } else {
      obj.delegator_address = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<WhitelistDelegator>): WhitelistDelegator {
    const message = { ...baseWhitelistDelegator } as WhitelistDelegator;
    message.delegator_address = [];
    if (
      object.validator_address !== undefined &&
      object.validator_address !== null
    ) {
      message.validator_address = object.validator_address;
    } else {
      message.validator_address = "";
    }
    if (
      object.delegator_address !== undefined &&
      object.delegator_address !== null
    ) {
      for (const e of object.delegator_address) {
        message.delegator_address.push(e);
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
