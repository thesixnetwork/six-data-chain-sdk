/* eslint-disable */
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "thesixnetwork.sixnft.nftmngr";

export interface Status {
  first_mint_complete: boolean;
}

const baseStatus: object = { first_mint_complete: false };

export const Status = {
  encode(message: Status, writer: Writer = Writer.create()): Writer {
    if (message.first_mint_complete === true) {
      writer.uint32(8).bool(message.first_mint_complete);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Status {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseStatus } as Status;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.first_mint_complete = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Status {
    const message = { ...baseStatus } as Status;
    if (
      object.first_mint_complete !== undefined &&
      object.first_mint_complete !== null
    ) {
      message.first_mint_complete = Boolean(object.first_mint_complete);
    } else {
      message.first_mint_complete = false;
    }
    return message;
  },

  toJSON(message: Status): unknown {
    const obj: any = {};
    message.first_mint_complete !== undefined &&
      (obj.first_mint_complete = message.first_mint_complete);
    return obj;
  },

  fromPartial(object: DeepPartial<Status>): Status {
    const message = { ...baseStatus } as Status;
    if (
      object.first_mint_complete !== undefined &&
      object.first_mint_complete !== null
    ) {
      message.first_mint_complete = object.first_mint_complete;
    } else {
      message.first_mint_complete = false;
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
