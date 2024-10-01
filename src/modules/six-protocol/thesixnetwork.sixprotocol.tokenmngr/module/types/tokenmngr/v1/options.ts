/* eslint-disable */
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "thesixnetwork.sixprotocol.tokenmngr";

export interface Options {
  defaultMintee: string;
}

const baseOptions: object = { defaultMintee: "" };

export const Options = {
  encode(message: Options, writer: Writer = Writer.create()): Writer {
    if (message.defaultMintee !== "") {
      writer.uint32(10).string(message.defaultMintee);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Options {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseOptions } as Options;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.defaultMintee = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Options {
    const message = { ...baseOptions } as Options;
    if (object.defaultMintee !== undefined && object.defaultMintee !== null) {
      message.defaultMintee = String(object.defaultMintee);
    } else {
      message.defaultMintee = "";
    }
    return message;
  },

  toJSON(message: Options): unknown {
    const obj: any = {};
    message.defaultMintee !== undefined &&
      (obj.defaultMintee = message.defaultMintee);
    return obj;
  },

  fromPartial(object: DeepPartial<Options>): Options {
    const message = { ...baseOptions } as Options;
    if (object.defaultMintee !== undefined && object.defaultMintee !== null) {
      message.defaultMintee = object.defaultMintee;
    } else {
      message.defaultMintee = "";
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
