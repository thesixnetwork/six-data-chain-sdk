/* eslint-disable */
import { OpenseaDisplayOption } from "../nftmngr/opensea_display_option";
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "thesixnetwork.sixnft.nftmngr";

export interface DisplayOption {
  bool_true_value: string;
  bool_false_value: string;
  opensea: OpenseaDisplayOption | undefined;
}

const baseDisplayOption: object = { bool_true_value: "", bool_false_value: "" };

export const DisplayOption = {
  encode(message: DisplayOption, writer: Writer = Writer.create()): Writer {
    if (message.bool_true_value !== "") {
      writer.uint32(10).string(message.bool_true_value);
    }
    if (message.bool_false_value !== "") {
      writer.uint32(18).string(message.bool_false_value);
    }
    if (message.opensea !== undefined) {
      OpenseaDisplayOption.encode(
        message.opensea,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): DisplayOption {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDisplayOption } as DisplayOption;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bool_true_value = reader.string();
          break;
        case 2:
          message.bool_false_value = reader.string();
          break;
        case 3:
          message.opensea = OpenseaDisplayOption.decode(
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

  fromJSON(object: any): DisplayOption {
    const message = { ...baseDisplayOption } as DisplayOption;
    if (
      object.bool_true_value !== undefined &&
      object.bool_true_value !== null
    ) {
      message.bool_true_value = String(object.bool_true_value);
    } else {
      message.bool_true_value = "";
    }
    if (
      object.bool_false_value !== undefined &&
      object.bool_false_value !== null
    ) {
      message.bool_false_value = String(object.bool_false_value);
    } else {
      message.bool_false_value = "";
    }
    if (object.opensea !== undefined && object.opensea !== null) {
      message.opensea = OpenseaDisplayOption.fromJSON(object.opensea);
    } else {
      message.opensea = undefined;
    }
    return message;
  },

  toJSON(message: DisplayOption): unknown {
    const obj: any = {};
    message.bool_true_value !== undefined &&
      (obj.bool_true_value = message.bool_true_value);
    message.bool_false_value !== undefined &&
      (obj.bool_false_value = message.bool_false_value);
    message.opensea !== undefined &&
      (obj.opensea = message.opensea
        ? OpenseaDisplayOption.toJSON(message.opensea)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<DisplayOption>): DisplayOption {
    const message = { ...baseDisplayOption } as DisplayOption;
    if (
      object.bool_true_value !== undefined &&
      object.bool_true_value !== null
    ) {
      message.bool_true_value = object.bool_true_value;
    } else {
      message.bool_true_value = "";
    }
    if (
      object.bool_false_value !== undefined &&
      object.bool_false_value !== null
    ) {
      message.bool_false_value = object.bool_false_value;
    } else {
      message.bool_false_value = "";
    }
    if (object.opensea !== undefined && object.opensea !== null) {
      message.opensea = OpenseaDisplayOption.fromPartial(object.opensea);
    } else {
      message.opensea = undefined;
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
