/* eslint-disable */
import { DisplayOption } from "../nftmngr/display_option";
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "sixnft.nftmngr";

export interface AttributeDefinition {
  name: string;
  data_type: string;
  required: boolean;
  display_value_field: string;
  display_option: DisplayOption | undefined;
  default_mint_value: string;
  hidden_to_marketplace: boolean;
}

const baseAttributeDefinition: object = {
  name: "",
  data_type: "",
  required: false,
  display_value_field: "",
  default_mint_value: "",
  hidden_to_marketplace: false,
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
    if (message.default_mint_value !== "") {
      writer.uint32(50).string(message.default_mint_value);
    }
    if (message.hidden_to_marketplace === true) {
      writer.uint32(56).bool(message.hidden_to_marketplace);
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
          message.default_mint_value = reader.string();
          break;
        case 7:
          message.hidden_to_marketplace = reader.bool();
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
      message.default_mint_value = String(object.default_mint_value);
    } else {
      message.default_mint_value = "";
    }
    if (
      object.hidden_to_marketplace !== undefined &&
      object.hidden_to_marketplace !== null
    ) {
      message.hidden_to_marketplace = Boolean(object.hidden_to_marketplace);
    } else {
      message.hidden_to_marketplace = false;
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
      (obj.default_mint_value = message.default_mint_value);
    message.hidden_to_marketplace !== undefined &&
      (obj.hidden_to_marketplace = message.hidden_to_marketplace);
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
      message.default_mint_value = object.default_mint_value;
    } else {
      message.default_mint_value = "";
    }
    if (
      object.hidden_to_marketplace !== undefined &&
      object.hidden_to_marketplace !== null
    ) {
      message.hidden_to_marketplace = object.hidden_to_marketplace;
    } else {
      message.hidden_to_marketplace = false;
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
