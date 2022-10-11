/* eslint-disable */
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "thesixnetwork.sixnft.nftmngr";

export interface NftAttributeValue {
  name: string;
  number_attribute_value: NumberAttributeValue | undefined;
  string_attribute_value: StringAttributeValue | undefined;
  boolean_attribute_value: BooleanAttributeValue | undefined;
  float_attribute_value: FloatAttributeValue | undefined;
}

export interface NumberAttributeValue {
  value: number;
}

export interface StringAttributeValue {
  value: string;
}

export interface BooleanAttributeValue {
  value: boolean;
}

export interface FloatAttributeValue {
  value: number;
}

const baseNftAttributeValue: object = { name: "" };

export const NftAttributeValue = {
  encode(message: NftAttributeValue, writer: Writer = Writer.create()): Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.number_attribute_value !== undefined) {
      NumberAttributeValue.encode(
        message.number_attribute_value,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.string_attribute_value !== undefined) {
      StringAttributeValue.encode(
        message.string_attribute_value,
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.boolean_attribute_value !== undefined) {
      BooleanAttributeValue.encode(
        message.boolean_attribute_value,
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (message.float_attribute_value !== undefined) {
      FloatAttributeValue.encode(
        message.float_attribute_value,
        writer.uint32(42).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): NftAttributeValue {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseNftAttributeValue } as NftAttributeValue;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.number_attribute_value = NumberAttributeValue.decode(
            reader,
            reader.uint32()
          );
          break;
        case 3:
          message.string_attribute_value = StringAttributeValue.decode(
            reader,
            reader.uint32()
          );
          break;
        case 4:
          message.boolean_attribute_value = BooleanAttributeValue.decode(
            reader,
            reader.uint32()
          );
          break;
        case 5:
          message.float_attribute_value = FloatAttributeValue.decode(
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

  fromJSON(object: any): NftAttributeValue {
    const message = { ...baseNftAttributeValue } as NftAttributeValue;
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    if (
      object.number_attribute_value !== undefined &&
      object.number_attribute_value !== null
    ) {
      message.number_attribute_value = NumberAttributeValue.fromJSON(
        object.number_attribute_value
      );
    } else {
      message.number_attribute_value = undefined;
    }
    if (
      object.string_attribute_value !== undefined &&
      object.string_attribute_value !== null
    ) {
      message.string_attribute_value = StringAttributeValue.fromJSON(
        object.string_attribute_value
      );
    } else {
      message.string_attribute_value = undefined;
    }
    if (
      object.boolean_attribute_value !== undefined &&
      object.boolean_attribute_value !== null
    ) {
      message.boolean_attribute_value = BooleanAttributeValue.fromJSON(
        object.boolean_attribute_value
      );
    } else {
      message.boolean_attribute_value = undefined;
    }
    if (
      object.float_attribute_value !== undefined &&
      object.float_attribute_value !== null
    ) {
      message.float_attribute_value = FloatAttributeValue.fromJSON(
        object.float_attribute_value
      );
    } else {
      message.float_attribute_value = undefined;
    }
    return message;
  },

  toJSON(message: NftAttributeValue): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.number_attribute_value !== undefined &&
      (obj.number_attribute_value = message.number_attribute_value
        ? NumberAttributeValue.toJSON(message.number_attribute_value)
        : undefined);
    message.string_attribute_value !== undefined &&
      (obj.string_attribute_value = message.string_attribute_value
        ? StringAttributeValue.toJSON(message.string_attribute_value)
        : undefined);
    message.boolean_attribute_value !== undefined &&
      (obj.boolean_attribute_value = message.boolean_attribute_value
        ? BooleanAttributeValue.toJSON(message.boolean_attribute_value)
        : undefined);
    message.float_attribute_value !== undefined &&
      (obj.float_attribute_value = message.float_attribute_value
        ? FloatAttributeValue.toJSON(message.float_attribute_value)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<NftAttributeValue>): NftAttributeValue {
    const message = { ...baseNftAttributeValue } as NftAttributeValue;
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    if (
      object.number_attribute_value !== undefined &&
      object.number_attribute_value !== null
    ) {
      message.number_attribute_value = NumberAttributeValue.fromPartial(
        object.number_attribute_value
      );
    } else {
      message.number_attribute_value = undefined;
    }
    if (
      object.string_attribute_value !== undefined &&
      object.string_attribute_value !== null
    ) {
      message.string_attribute_value = StringAttributeValue.fromPartial(
        object.string_attribute_value
      );
    } else {
      message.string_attribute_value = undefined;
    }
    if (
      object.boolean_attribute_value !== undefined &&
      object.boolean_attribute_value !== null
    ) {
      message.boolean_attribute_value = BooleanAttributeValue.fromPartial(
        object.boolean_attribute_value
      );
    } else {
      message.boolean_attribute_value = undefined;
    }
    if (
      object.float_attribute_value !== undefined &&
      object.float_attribute_value !== null
    ) {
      message.float_attribute_value = FloatAttributeValue.fromPartial(
        object.float_attribute_value
      );
    } else {
      message.float_attribute_value = undefined;
    }
    return message;
  },
};

const baseNumberAttributeValue: object = { value: 0 };

export const NumberAttributeValue = {
  encode(
    message: NumberAttributeValue,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.value !== 0) {
      writer.uint32(8).uint64(message.value);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): NumberAttributeValue {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseNumberAttributeValue } as NumberAttributeValue;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.value = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): NumberAttributeValue {
    const message = { ...baseNumberAttributeValue } as NumberAttributeValue;
    if (object.value !== undefined && object.value !== null) {
      message.value = Number(object.value);
    } else {
      message.value = 0;
    }
    return message;
  },

  toJSON(message: NumberAttributeValue): unknown {
    const obj: any = {};
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial(object: DeepPartial<NumberAttributeValue>): NumberAttributeValue {
    const message = { ...baseNumberAttributeValue } as NumberAttributeValue;
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    } else {
      message.value = 0;
    }
    return message;
  },
};

const baseStringAttributeValue: object = { value: "" };

export const StringAttributeValue = {
  encode(
    message: StringAttributeValue,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.value !== "") {
      writer.uint32(10).string(message.value);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): StringAttributeValue {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseStringAttributeValue } as StringAttributeValue;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.value = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): StringAttributeValue {
    const message = { ...baseStringAttributeValue } as StringAttributeValue;
    if (object.value !== undefined && object.value !== null) {
      message.value = String(object.value);
    } else {
      message.value = "";
    }
    return message;
  },

  toJSON(message: StringAttributeValue): unknown {
    const obj: any = {};
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial(object: DeepPartial<StringAttributeValue>): StringAttributeValue {
    const message = { ...baseStringAttributeValue } as StringAttributeValue;
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    } else {
      message.value = "";
    }
    return message;
  },
};

const baseBooleanAttributeValue: object = { value: false };

export const BooleanAttributeValue = {
  encode(
    message: BooleanAttributeValue,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.value === true) {
      writer.uint32(8).bool(message.value);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): BooleanAttributeValue {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseBooleanAttributeValue } as BooleanAttributeValue;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.value = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BooleanAttributeValue {
    const message = { ...baseBooleanAttributeValue } as BooleanAttributeValue;
    if (object.value !== undefined && object.value !== null) {
      message.value = Boolean(object.value);
    } else {
      message.value = false;
    }
    return message;
  },

  toJSON(message: BooleanAttributeValue): unknown {
    const obj: any = {};
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial(
    object: DeepPartial<BooleanAttributeValue>
  ): BooleanAttributeValue {
    const message = { ...baseBooleanAttributeValue } as BooleanAttributeValue;
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    } else {
      message.value = false;
    }
    return message;
  },
};

const baseFloatAttributeValue: object = { value: 0 };

export const FloatAttributeValue = {
  encode(
    message: FloatAttributeValue,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.value !== 0) {
      writer.uint32(9).double(message.value);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): FloatAttributeValue {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseFloatAttributeValue } as FloatAttributeValue;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.value = reader.double();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): FloatAttributeValue {
    const message = { ...baseFloatAttributeValue } as FloatAttributeValue;
    if (object.value !== undefined && object.value !== null) {
      message.value = Number(object.value);
    } else {
      message.value = 0;
    }
    return message;
  },

  toJSON(message: FloatAttributeValue): unknown {
    const obj: any = {};
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial(object: DeepPartial<FloatAttributeValue>): FloatAttributeValue {
    const message = { ...baseFloatAttributeValue } as FloatAttributeValue;
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    } else {
      message.value = 0;
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

if (util.Long !== Long) {
  util.Long = Long as any;
  configure();
}
