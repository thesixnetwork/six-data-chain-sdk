/* eslint-disable */
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";
import { NftData } from "../nftmngr/nft_data";

export const protobufPackage = "thesixnetwork.sixnft.nftmngr";

export interface NftCollection {
  nftSchemaCode: string;
  total: number;
  nftDatas: NftData[];
}

const baseNftCollection: object = { nftSchemaCode: "", total: 0 };

export const NftCollection = {
  encode(message: NftCollection, writer: Writer = Writer.create()): Writer {
    if (message.nftSchemaCode !== "") {
      writer.uint32(10).string(message.nftSchemaCode);
    }
    if (message.total !== 0) {
      writer.uint32(16).uint64(message.total);
    }
    for (const v of message.nftDatas) {
      NftData.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): NftCollection {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseNftCollection } as NftCollection;
    message.nftDatas = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nftSchemaCode = reader.string();
          break;
        case 2:
          message.total = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.nftDatas.push(NftData.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): NftCollection {
    const message = { ...baseNftCollection } as NftCollection;
    message.nftDatas = [];
    if (object.nftSchemaCode !== undefined && object.nftSchemaCode !== null) {
      message.nftSchemaCode = String(object.nftSchemaCode);
    } else {
      message.nftSchemaCode = "";
    }
    if (object.total !== undefined && object.total !== null) {
      message.total = Number(object.total);
    } else {
      message.total = 0;
    }
    if (object.nftDatas !== undefined && object.nftDatas !== null) {
      for (const e of object.nftDatas) {
        message.nftDatas.push(NftData.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: NftCollection): unknown {
    const obj: any = {};
    message.nftSchemaCode !== undefined &&
      (obj.nftSchemaCode = message.nftSchemaCode);
    message.total !== undefined && (obj.total = message.total);
    if (message.nftDatas) {
      obj.nftDatas = message.nftDatas.map((e) =>
        e ? NftData.toJSON(e) : undefined
      );
    } else {
      obj.nftDatas = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<NftCollection>): NftCollection {
    const message = { ...baseNftCollection } as NftCollection;
    message.nftDatas = [];
    if (object.nftSchemaCode !== undefined && object.nftSchemaCode !== null) {
      message.nftSchemaCode = object.nftSchemaCode;
    } else {
      message.nftSchemaCode = "";
    }
    if (object.total !== undefined && object.total !== null) {
      message.total = object.total;
    } else {
      message.total = 0;
    }
    if (object.nftDatas !== undefined && object.nftDatas !== null) {
      for (const e of object.nftDatas) {
        message.nftDatas.push(NftData.fromPartial(e));
      }
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
