/* eslint-disable */
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "thesixnetwork.sixnft.nftoracle";

export interface Trait {
  trait_type: string;
  value: string;
  display_type: string;
  max_value: string;
}

const baseTrait: object = {
  trait_type: "",
  value: "",
  display_type: "",
  max_value: "",
};

export const Trait = {
  encode(message: Trait, writer: Writer = Writer.create()): Writer {
    if (message.trait_type !== "") {
      writer.uint32(10).string(message.trait_type);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    if (message.display_type !== "") {
      writer.uint32(26).string(message.display_type);
    }
    if (message.max_value !== "") {
      writer.uint32(34).string(message.max_value);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Trait {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseTrait } as Trait;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.trait_type = reader.string();
          break;
        case 2:
          message.value = reader.string();
          break;
        case 3:
          message.display_type = reader.string();
          break;
        case 4:
          message.max_value = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Trait {
    const message = { ...baseTrait } as Trait;
    if (object.trait_type !== undefined && object.trait_type !== null) {
      message.trait_type = String(object.trait_type);
    } else {
      message.trait_type = "";
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = String(object.value);
    } else {
      message.value = "";
    }
    if (object.display_type !== undefined && object.display_type !== null) {
      message.display_type = String(object.display_type);
    } else {
      message.display_type = "";
    }
    if (object.max_value !== undefined && object.max_value !== null) {
      message.max_value = String(object.max_value);
    } else {
      message.max_value = "";
    }
    return message;
  },

  toJSON(message: Trait): unknown {
    const obj: any = {};
    message.trait_type !== undefined && (obj.trait_type = message.trait_type);
    message.value !== undefined && (obj.value = message.value);
    message.display_type !== undefined &&
      (obj.display_type = message.display_type);
    message.max_value !== undefined && (obj.max_value = message.max_value);
    return obj;
  },

  fromPartial(object: DeepPartial<Trait>): Trait {
    const message = { ...baseTrait } as Trait;
    if (object.trait_type !== undefined && object.trait_type !== null) {
      message.trait_type = object.trait_type;
    } else {
      message.trait_type = "";
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    } else {
      message.value = "";
    }
    if (object.display_type !== undefined && object.display_type !== null) {
      message.display_type = object.display_type;
    } else {
      message.display_type = "";
    }
    if (object.max_value !== undefined && object.max_value !== null) {
      message.max_value = object.max_value;
    } else {
      message.max_value = "";
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
