/* eslint-disable */
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "thesixnetwork.sixnft.nftoracle";

export interface OracleConfig {
  minimum_confirmation: number;
}

const baseOracleConfig: object = { minimum_confirmation: 0 };

export const OracleConfig = {
  encode(message: OracleConfig, writer: Writer = Writer.create()): Writer {
    if (message.minimum_confirmation !== 0) {
      writer.uint32(8).int32(message.minimum_confirmation);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): OracleConfig {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseOracleConfig } as OracleConfig;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.minimum_confirmation = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): OracleConfig {
    const message = { ...baseOracleConfig } as OracleConfig;
    if (
      object.minimum_confirmation !== undefined &&
      object.minimum_confirmation !== null
    ) {
      message.minimum_confirmation = Number(object.minimum_confirmation);
    } else {
      message.minimum_confirmation = 0;
    }
    return message;
  },

  toJSON(message: OracleConfig): unknown {
    const obj: any = {};
    message.minimum_confirmation !== undefined &&
      (obj.minimum_confirmation = message.minimum_confirmation);
    return obj;
  },

  fromPartial(object: DeepPartial<OracleConfig>): OracleConfig {
    const message = { ...baseOracleConfig } as OracleConfig;
    if (
      object.minimum_confirmation !== undefined &&
      object.minimum_confirmation !== null
    ) {
      message.minimum_confirmation = object.minimum_confirmation;
    } else {
      message.minimum_confirmation = 0;
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
