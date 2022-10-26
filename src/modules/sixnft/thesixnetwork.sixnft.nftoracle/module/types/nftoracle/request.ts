/* eslint-disable */
import { Trait } from "../nftoracle/opensea";
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "thesixnetwork.sixnft.nftoracle";

export enum RequestStatus {
  PENDING = 0,
  SUCCESS_WITH_CONSENSUS = 1,
  FAILED_WITHOUT_CONCENSUS = 2,
  EXPIRED = 3,
  FAILED_ON_EXECUTION = 4,
  FAILED_REJECT_BY_CONSENSUS = 5,
  UNRECOGNIZED = -1,
}

export function requestStatusFromJSON(object: any): RequestStatus {
  switch (object) {
    case 0:
    case "PENDING":
      return RequestStatus.PENDING;
    case 1:
    case "SUCCESS_WITH_CONSENSUS":
      return RequestStatus.SUCCESS_WITH_CONSENSUS;
    case 2:
    case "FAILED_WITHOUT_CONCENSUS":
      return RequestStatus.FAILED_WITHOUT_CONCENSUS;
    case 3:
    case "EXPIRED":
      return RequestStatus.EXPIRED;
    case 4:
    case "FAILED_ON_EXECUTION":
      return RequestStatus.FAILED_ON_EXECUTION;
    case 5:
    case "FAILED_REJECT_BY_CONSENSUS":
      return RequestStatus.FAILED_REJECT_BY_CONSENSUS;
    case -1:
    case "UNRECOGNIZED":
    default:
      return RequestStatus.UNRECOGNIZED;
  }
}

export function requestStatusToJSON(object: RequestStatus): string {
  switch (object) {
    case RequestStatus.PENDING:
      return "PENDING";
    case RequestStatus.SUCCESS_WITH_CONSENSUS:
      return "SUCCESS_WITH_CONSENSUS";
    case RequestStatus.FAILED_WITHOUT_CONCENSUS:
      return "FAILED_WITHOUT_CONCENSUS";
    case RequestStatus.EXPIRED:
      return "EXPIRED";
    case RequestStatus.FAILED_ON_EXECUTION:
      return "FAILED_ON_EXECUTION";
    case RequestStatus.FAILED_REJECT_BY_CONSENSUS:
      return "FAILED_REJECT_BY_CONSENSUS";
    default:
      return "UNKNOWN";
  }
}

export interface NftOriginData {
  image: string;
  holder_address: string;
  traits: Trait[];
}

export interface DataHash {
  origin_data: NftOriginData | undefined;
  hash: Uint8Array;
  confirmers: string[];
}

const baseNftOriginData: object = { image: "", holder_address: "" };

export const NftOriginData = {
  encode(message: NftOriginData, writer: Writer = Writer.create()): Writer {
    if (message.image !== "") {
      writer.uint32(10).string(message.image);
    }
    if (message.holder_address !== "") {
      writer.uint32(18).string(message.holder_address);
    }
    for (const v of message.traits) {
      Trait.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): NftOriginData {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseNftOriginData } as NftOriginData;
    message.traits = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.image = reader.string();
          break;
        case 2:
          message.holder_address = reader.string();
          break;
        case 3:
          message.traits.push(Trait.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): NftOriginData {
    const message = { ...baseNftOriginData } as NftOriginData;
    message.traits = [];
    if (object.image !== undefined && object.image !== null) {
      message.image = String(object.image);
    } else {
      message.image = "";
    }
    if (object.holder_address !== undefined && object.holder_address !== null) {
      message.holder_address = String(object.holder_address);
    } else {
      message.holder_address = "";
    }
    if (object.traits !== undefined && object.traits !== null) {
      for (const e of object.traits) {
        message.traits.push(Trait.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: NftOriginData): unknown {
    const obj: any = {};
    message.image !== undefined && (obj.image = message.image);
    message.holder_address !== undefined &&
      (obj.holder_address = message.holder_address);
    if (message.traits) {
      obj.traits = message.traits.map((e) => (e ? Trait.toJSON(e) : undefined));
    } else {
      obj.traits = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<NftOriginData>): NftOriginData {
    const message = { ...baseNftOriginData } as NftOriginData;
    message.traits = [];
    if (object.image !== undefined && object.image !== null) {
      message.image = object.image;
    } else {
      message.image = "";
    }
    if (object.holder_address !== undefined && object.holder_address !== null) {
      message.holder_address = object.holder_address;
    } else {
      message.holder_address = "";
    }
    if (object.traits !== undefined && object.traits !== null) {
      for (const e of object.traits) {
        message.traits.push(Trait.fromPartial(e));
      }
    }
    return message;
  },
};

const baseDataHash: object = { confirmers: "" };

export const DataHash = {
  encode(message: DataHash, writer: Writer = Writer.create()): Writer {
    if (message.origin_data !== undefined) {
      NftOriginData.encode(
        message.origin_data,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.hash.length !== 0) {
      writer.uint32(18).bytes(message.hash);
    }
    for (const v of message.confirmers) {
      writer.uint32(26).string(v!);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): DataHash {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDataHash } as DataHash;
    message.confirmers = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.origin_data = NftOriginData.decode(reader, reader.uint32());
          break;
        case 2:
          message.hash = reader.bytes();
          break;
        case 3:
          message.confirmers.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DataHash {
    const message = { ...baseDataHash } as DataHash;
    message.confirmers = [];
    if (object.origin_data !== undefined && object.origin_data !== null) {
      message.origin_data = NftOriginData.fromJSON(object.origin_data);
    } else {
      message.origin_data = undefined;
    }
    if (object.hash !== undefined && object.hash !== null) {
      message.hash = bytesFromBase64(object.hash);
    }
    if (object.confirmers !== undefined && object.confirmers !== null) {
      for (const e of object.confirmers) {
        message.confirmers.push(String(e));
      }
    }
    return message;
  },

  toJSON(message: DataHash): unknown {
    const obj: any = {};
    message.origin_data !== undefined &&
      (obj.origin_data = message.origin_data
        ? NftOriginData.toJSON(message.origin_data)
        : undefined);
    message.hash !== undefined &&
      (obj.hash = base64FromBytes(
        message.hash !== undefined ? message.hash : new Uint8Array()
      ));
    if (message.confirmers) {
      obj.confirmers = message.confirmers.map((e) => e);
    } else {
      obj.confirmers = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<DataHash>): DataHash {
    const message = { ...baseDataHash } as DataHash;
    message.confirmers = [];
    if (object.origin_data !== undefined && object.origin_data !== null) {
      message.origin_data = NftOriginData.fromPartial(object.origin_data);
    } else {
      message.origin_data = undefined;
    }
    if (object.hash !== undefined && object.hash !== null) {
      message.hash = object.hash;
    } else {
      message.hash = new Uint8Array();
    }
    if (object.confirmers !== undefined && object.confirmers !== null) {
      for (const e of object.confirmers) {
        message.confirmers.push(e);
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

const atob: (b64: string) => string =
  globalThis.atob ||
  ((b64) => globalThis.Buffer.from(b64, "base64").toString("binary"));
function bytesFromBase64(b64: string): Uint8Array {
  const bin = atob(b64);
  const arr = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; ++i) {
    arr[i] = bin.charCodeAt(i);
  }
  return arr;
}

const btoa: (bin: string) => string =
  globalThis.btoa ||
  ((bin) => globalThis.Buffer.from(bin, "binary").toString("base64"));
function base64FromBytes(arr: Uint8Array): string {
  const bin: string[] = [];
  for (let i = 0; i < arr.byteLength; ++i) {
    bin.push(String.fromCharCode(arr[i]));
  }
  return btoa(bin.join(""));
}

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
