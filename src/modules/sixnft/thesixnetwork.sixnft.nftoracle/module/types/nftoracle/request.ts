/* eslint-disable */
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";
import { Trait } from "../nftoracle/opensea";

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

export interface TransactionOriginDataInfo {
  chain: string;
  tx_hash: string;
  block_number: number;
  deployer_address: string;
}

export interface DataHash {
  origin_data: NftOriginData | undefined;
  hash: Uint8Array;
  confirmers: string[];
}

export interface OriginTxInfo {
  transactionOriginDataInfo: TransactionOriginDataInfo | undefined;
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

const baseTransactionOriginDataInfo: object = {
  chain: "",
  tx_hash: "",
  block_number: 0,
  deployer_address: "",
};

export const TransactionOriginDataInfo = {
  encode(
    message: TransactionOriginDataInfo,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.chain !== "") {
      writer.uint32(10).string(message.chain);
    }
    if (message.tx_hash !== "") {
      writer.uint32(18).string(message.tx_hash);
    }
    if (message.block_number !== 0) {
      writer.uint32(24).uint64(message.block_number);
    }
    if (message.deployer_address !== "") {
      writer.uint32(34).string(message.deployer_address);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): TransactionOriginDataInfo {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseTransactionOriginDataInfo,
    } as TransactionOriginDataInfo;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chain = reader.string();
          break;
        case 2:
          message.tx_hash = reader.string();
          break;
        case 3:
          message.block_number = longToNumber(reader.uint64() as Long);
          break;
        case 4:
          message.deployer_address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TransactionOriginDataInfo {
    const message = {
      ...baseTransactionOriginDataInfo,
    } as TransactionOriginDataInfo;
    if (object.chain !== undefined && object.chain !== null) {
      message.chain = String(object.chain);
    } else {
      message.chain = "";
    }
    if (object.tx_hash !== undefined && object.tx_hash !== null) {
      message.tx_hash = String(object.tx_hash);
    } else {
      message.tx_hash = "";
    }
    if (object.block_number !== undefined && object.block_number !== null) {
      message.block_number = Number(object.block_number);
    } else {
      message.block_number = 0;
    }
    if (
      object.deployer_address !== undefined &&
      object.deployer_address !== null
    ) {
      message.deployer_address = String(object.deployer_address);
    } else {
      message.deployer_address = "";
    }
    return message;
  },

  toJSON(message: TransactionOriginDataInfo): unknown {
    const obj: any = {};
    message.chain !== undefined && (obj.chain = message.chain);
    message.tx_hash !== undefined && (obj.tx_hash = message.tx_hash);
    message.block_number !== undefined &&
      (obj.block_number = message.block_number);
    message.deployer_address !== undefined &&
      (obj.deployer_address = message.deployer_address);
    return obj;
  },

  fromPartial(
    object: DeepPartial<TransactionOriginDataInfo>
  ): TransactionOriginDataInfo {
    const message = {
      ...baseTransactionOriginDataInfo,
    } as TransactionOriginDataInfo;
    if (object.chain !== undefined && object.chain !== null) {
      message.chain = object.chain;
    } else {
      message.chain = "";
    }
    if (object.tx_hash !== undefined && object.tx_hash !== null) {
      message.tx_hash = object.tx_hash;
    } else {
      message.tx_hash = "";
    }
    if (object.block_number !== undefined && object.block_number !== null) {
      message.block_number = object.block_number;
    } else {
      message.block_number = 0;
    }
    if (
      object.deployer_address !== undefined &&
      object.deployer_address !== null
    ) {
      message.deployer_address = object.deployer_address;
    } else {
      message.deployer_address = "";
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

const baseOriginTxInfo: object = { confirmers: "" };

export const OriginTxInfo = {
  encode(message: OriginTxInfo, writer: Writer = Writer.create()): Writer {
    if (message.transactionOriginDataInfo !== undefined) {
      TransactionOriginDataInfo.encode(
        message.transactionOriginDataInfo,
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

  decode(input: Reader | Uint8Array, length?: number): OriginTxInfo {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseOriginTxInfo } as OriginTxInfo;
    message.confirmers = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.transactionOriginDataInfo = TransactionOriginDataInfo.decode(
            reader,
            reader.uint32()
          );
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

  fromJSON(object: any): OriginTxInfo {
    const message = { ...baseOriginTxInfo } as OriginTxInfo;
    message.confirmers = [];
    if (
      object.transactionOriginDataInfo !== undefined &&
      object.transactionOriginDataInfo !== null
    ) {
      message.transactionOriginDataInfo = TransactionOriginDataInfo.fromJSON(
        object.transactionOriginDataInfo
      );
    } else {
      message.transactionOriginDataInfo = undefined;
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

  toJSON(message: OriginTxInfo): unknown {
    const obj: any = {};
    message.transactionOriginDataInfo !== undefined &&
      (obj.transactionOriginDataInfo = message.transactionOriginDataInfo
        ? TransactionOriginDataInfo.toJSON(message.transactionOriginDataInfo)
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

  fromPartial(object: DeepPartial<OriginTxInfo>): OriginTxInfo {
    const message = { ...baseOriginTxInfo } as OriginTxInfo;
    message.confirmers = [];
    if (
      object.transactionOriginDataInfo !== undefined &&
      object.transactionOriginDataInfo !== null
    ) {
      message.transactionOriginDataInfo = TransactionOriginDataInfo.fromPartial(
        object.transactionOriginDataInfo
      );
    } else {
      message.transactionOriginDataInfo = undefined;
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

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}


