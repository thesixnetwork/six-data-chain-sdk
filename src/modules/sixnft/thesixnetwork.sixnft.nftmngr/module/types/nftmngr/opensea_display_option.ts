/* eslint-disable */
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "thesixnetwork.sixnft.nftmngr";

export interface OpenseaDisplayOption {
  display_type: string;
  trait_type: string;
  max_value: number;
}

const baseOpenseaDisplayOption: object = {
  display_type: "",
  trait_type: "",
  max_value: 0,
};

export const OpenseaDisplayOption = {
  encode(
    message: OpenseaDisplayOption,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.display_type !== "") {
      writer.uint32(10).string(message.display_type);
    }
    if (message.trait_type !== "") {
      writer.uint32(18).string(message.trait_type);
    }
    if (message.max_value !== 0) {
      writer.uint32(24).uint64(message.max_value);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): OpenseaDisplayOption {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseOpenseaDisplayOption } as OpenseaDisplayOption;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.display_type = reader.string();
          break;
        case 2:
          message.trait_type = reader.string();
          break;
        case 3:
          message.max_value = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): OpenseaDisplayOption {
    const message = { ...baseOpenseaDisplayOption } as OpenseaDisplayOption;
    if (object.display_type !== undefined && object.display_type !== null) {
      message.display_type = String(object.display_type);
    } else {
      message.display_type = "";
    }
    if (object.trait_type !== undefined && object.trait_type !== null) {
      message.trait_type = String(object.trait_type);
    } else {
      message.trait_type = "";
    }
    if (object.max_value !== undefined && object.max_value !== null) {
      message.max_value = Number(object.max_value);
    } else {
      message.max_value = 0;
    }
    return message;
  },

  toJSON(message: OpenseaDisplayOption): unknown {
    const obj: any = {};
    message.display_type !== undefined &&
      (obj.display_type = message.display_type);
    message.trait_type !== undefined && (obj.trait_type = message.trait_type);
    message.max_value !== undefined && (obj.max_value = message.max_value);
    return obj;
  },

  fromPartial(object: DeepPartial<OpenseaDisplayOption>): OpenseaDisplayOption {
    const message = { ...baseOpenseaDisplayOption } as OpenseaDisplayOption;
    if (object.display_type !== undefined && object.display_type !== null) {
      message.display_type = object.display_type;
    } else {
      message.display_type = "";
    }
    if (object.trait_type !== undefined && object.trait_type !== null) {
      message.trait_type = object.trait_type;
    } else {
      message.trait_type = "";
    }
    if (object.max_value !== undefined && object.max_value !== null) {
      message.max_value = object.max_value;
    } else {
      message.max_value = 0;
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


