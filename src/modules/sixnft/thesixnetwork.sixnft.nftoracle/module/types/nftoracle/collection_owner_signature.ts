/* eslint-disable */
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "thesixnetwork.sixnft.nftoracle";

export interface CollectionOwnerSignature {
  signature: string;
  message: string;
}

const baseCollectionOwnerSignature: object = { signature: "", message: "" };

export const CollectionOwnerSignature = {
  encode(
    message: CollectionOwnerSignature,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.signature !== "") {
      writer.uint32(10).string(message.signature);
    }
    if (message.message !== "") {
      writer.uint32(18).string(message.message);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): CollectionOwnerSignature {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCollectionOwnerSignature,
    } as CollectionOwnerSignature;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.signature = reader.string();
          break;
        case 2:
          message.message = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CollectionOwnerSignature {
    const message = {
      ...baseCollectionOwnerSignature,
    } as CollectionOwnerSignature;
    if (object.signature !== undefined && object.signature !== null) {
      message.signature = String(object.signature);
    } else {
      message.signature = "";
    }
    if (object.message !== undefined && object.message !== null) {
      message.message = String(object.message);
    } else {
      message.message = "";
    }
    return message;
  },

  toJSON(message: CollectionOwnerSignature): unknown {
    const obj: any = {};
    message.signature !== undefined && (obj.signature = message.signature);
    message.message !== undefined && (obj.message = message.message);
    return obj;
  },

  fromPartial(
    object: DeepPartial<CollectionOwnerSignature>
  ): CollectionOwnerSignature {
    const message = {
      ...baseCollectionOwnerSignature,
    } as CollectionOwnerSignature;
    if (object.signature !== undefined && object.signature !== null) {
      message.signature = object.signature;
    } else {
      message.signature = "";
    }
    if (object.message !== undefined && object.message !== null) {
      message.message = object.message;
    } else {
      message.message = "";
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
