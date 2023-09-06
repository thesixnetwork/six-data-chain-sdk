/* eslint-disable */
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";
import {
  NumberAttributeValue,
  StringAttributeValue,
  BooleanAttributeValue,
  FloatAttributeValue,
} from "../nftmngr/nft_attribute_value";
import { DisplayOption } from "../nftmngr/display_option";

export const protobufPackage = "thesixnetwork.sixnft.nftmngr";

export interface DefaultMintValue {
  number_attribute_value: NumberAttributeValue | undefined;
  string_attribute_value: StringAttributeValue | undefined;
  boolean_attribute_value: BooleanAttributeValue | undefined;
  float_attribute_value: FloatAttributeValue | undefined;
}

export interface AttributeDefinition {
  name: string;
  data_type: string;
  required: boolean;
  display_value_field: string;
  display_option: DisplayOption | undefined;
  default_mint_value: DefaultMintValue | undefined;
  /** flag that allows action to override hidden */
  hidden_overide: boolean;
  hidden_to_marketplace: boolean;
  index: number;
}

const baseDefaultMintValue: object = {};

export const DefaultMintValue = {
  encode(message: DefaultMintValue, writer: Writer = Writer.create()): Writer {
    if (message.number_attribute_value !== undefined) {
      NumberAttributeValue.encode(
        message.number_attribute_value,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.string_attribute_value !== undefined) {
      StringAttributeValue.encode(
        message.string_attribute_value,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.boolean_attribute_value !== undefined) {
      BooleanAttributeValue.encode(
        message.boolean_attribute_value,
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.float_attribute_value !== undefined) {
      FloatAttributeValue.encode(
        message.float_attribute_value,
        writer.uint32(34).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): DefaultMintValue {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDefaultMintValue } as DefaultMintValue;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.number_attribute_value = NumberAttributeValue.decode(
            reader,
            reader.uint32()
          );
          break;
        case 2:
          message.string_attribute_value = StringAttributeValue.decode(
            reader,
            reader.uint32()
          );
          break;
        case 3:
          message.boolean_attribute_value = BooleanAttributeValue.decode(
            reader,
            reader.uint32()
          );
          break;
        case 4:
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

  fromJSON(object: any): DefaultMintValue {
    const message = { ...baseDefaultMintValue } as DefaultMintValue;
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

  toJSON(message: DefaultMintValue): unknown {
    const obj: any = {};
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

  fromPartial(object: DeepPartial<DefaultMintValue>): DefaultMintValue {
    const message = { ...baseDefaultMintValue } as DefaultMintValue;
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

const baseAttributeDefinition: object = {
  name: "",
  data_type: "",
  required: false,
  display_value_field: "",
  hidden_overide: false,
  hidden_to_marketplace: false,
  index: 0,
};

export const AttributeDefinition = {
  encode(
    message: AttributeDefinition,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.data_type !== "") {
      writer.uint32(18).string(message.data_type);
    }
    if (message.required === true) {
      writer.uint32(24).bool(message.required);
    }
    if (message.display_value_field !== "") {
      writer.uint32(34).string(message.display_value_field);
    }
    if (message.display_option !== undefined) {
      DisplayOption.encode(
        message.display_option,
        writer.uint32(42).fork()
      ).ldelim();
    }
    if (message.default_mint_value !== undefined) {
      DefaultMintValue.encode(
        message.default_mint_value,
        writer.uint32(50).fork()
      ).ldelim();
    }
    if (message.hidden_overide === true) {
      writer.uint32(56).bool(message.hidden_overide);
    }
    if (message.hidden_to_marketplace === true) {
      writer.uint32(64).bool(message.hidden_to_marketplace);
    }
    if (message.index !== 0) {
      writer.uint32(72).uint64(message.index);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): AttributeDefinition {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseAttributeDefinition } as AttributeDefinition;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.data_type = reader.string();
          break;
        case 3:
          message.required = reader.bool();
          break;
        case 4:
          message.display_value_field = reader.string();
          break;
        case 5:
          message.display_option = DisplayOption.decode(
            reader,
            reader.uint32()
          );
          break;
        case 6:
          message.default_mint_value = DefaultMintValue.decode(
            reader,
            reader.uint32()
          );
          break;
        case 7:
          message.hidden_overide = reader.bool();
          break;
        case 8:
          message.hidden_to_marketplace = reader.bool();
          break;
        case 9:
          message.index = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AttributeDefinition {
    const message = { ...baseAttributeDefinition } as AttributeDefinition;
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    if (object.data_type !== undefined && object.data_type !== null) {
      message.data_type = String(object.data_type);
    } else {
      message.data_type = "";
    }
    if (object.required !== undefined && object.required !== null) {
      message.required = Boolean(object.required);
    } else {
      message.required = false;
    }
    if (
      object.display_value_field !== undefined &&
      object.display_value_field !== null
    ) {
      message.display_value_field = String(object.display_value_field);
    } else {
      message.display_value_field = "";
    }
    if (object.display_option !== undefined && object.display_option !== null) {
      message.display_option = DisplayOption.fromJSON(object.display_option);
    } else {
      message.display_option = undefined;
    }
    if (
      object.default_mint_value !== undefined &&
      object.default_mint_value !== null
    ) {
      message.default_mint_value = DefaultMintValue.fromJSON(
        object.default_mint_value
      );
    } else {
      message.default_mint_value = undefined;
    }
    if (object.hidden_overide !== undefined && object.hidden_overide !== null) {
      message.hidden_overide = Boolean(object.hidden_overide);
    } else {
      message.hidden_overide = false;
    }
    if (
      object.hidden_to_marketplace !== undefined &&
      object.hidden_to_marketplace !== null
    ) {
      message.hidden_to_marketplace = Boolean(object.hidden_to_marketplace);
    } else {
      message.hidden_to_marketplace = false;
    }
    if (object.index !== undefined && object.index !== null) {
      message.index = Number(object.index);
    } else {
      message.index = 0;
    }
    return message;
  },

  toJSON(message: AttributeDefinition): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.data_type !== undefined && (obj.data_type = message.data_type);
    message.required !== undefined && (obj.required = message.required);
    message.display_value_field !== undefined &&
      (obj.display_value_field = message.display_value_field);
    message.display_option !== undefined &&
      (obj.display_option = message.display_option
        ? DisplayOption.toJSON(message.display_option)
        : undefined);
    message.default_mint_value !== undefined &&
      (obj.default_mint_value = message.default_mint_value
        ? DefaultMintValue.toJSON(message.default_mint_value)
        : undefined);
    message.hidden_overide !== undefined &&
      (obj.hidden_overide = message.hidden_overide);
    message.hidden_to_marketplace !== undefined &&
      (obj.hidden_to_marketplace = message.hidden_to_marketplace);
    message.index !== undefined && (obj.index = message.index);
    return obj;
  },

  fromPartial(object: DeepPartial<AttributeDefinition>): AttributeDefinition {
    const message = { ...baseAttributeDefinition } as AttributeDefinition;
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    if (object.data_type !== undefined && object.data_type !== null) {
      message.data_type = object.data_type;
    } else {
      message.data_type = "";
    }
    if (object.required !== undefined && object.required !== null) {
      message.required = object.required;
    } else {
      message.required = false;
    }
    if (
      object.display_value_field !== undefined &&
      object.display_value_field !== null
    ) {
      message.display_value_field = object.display_value_field;
    } else {
      message.display_value_field = "";
    }
    if (object.display_option !== undefined && object.display_option !== null) {
      message.display_option = DisplayOption.fromPartial(object.display_option);
    } else {
      message.display_option = undefined;
    }
    if (
      object.default_mint_value !== undefined &&
      object.default_mint_value !== null
    ) {
      message.default_mint_value = DefaultMintValue.fromPartial(
        object.default_mint_value
      );
    } else {
      message.default_mint_value = undefined;
    }
    if (object.hidden_overide !== undefined && object.hidden_overide !== null) {
      message.hidden_overide = object.hidden_overide;
    } else {
      message.hidden_overide = false;
    }
    if (
      object.hidden_to_marketplace !== undefined &&
      object.hidden_to_marketplace !== null
    ) {
      message.hidden_to_marketplace = object.hidden_to_marketplace;
    } else {
      message.hidden_to_marketplace = false;
    }
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index;
    } else {
      message.index = 0;
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


