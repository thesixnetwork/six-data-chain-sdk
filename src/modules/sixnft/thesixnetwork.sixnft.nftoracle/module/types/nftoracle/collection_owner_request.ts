/* eslint-disable */
import {
  RequestStatus,
  requestStatusFromJSON,
  requestStatusToJSON,
} from "../nftoracle/request";
import { Timestamp } from "../google/protobuf/timestamp";
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "thesixnetwork.sixnft.nftoracle";

export interface OriginContractParam {
  chain: string;
  contract_address: string;
  contract_owner: string;
  request_expire: Date | undefined;
}

export interface CollectionOwnerRequest {
  id: number;
  nftSchemaCode: string;
  signer: string;
  required_confirm: number;
  status: RequestStatus;
  current_confirm: number;
  confirmers: string[];
  created_at: Date | undefined;
  valid_until: Date | undefined;
  contract_info: OriginContractInfo[];
  expired_height: number;
}

export interface OriginContractInfo {
  contractOriginDataInfo: OriginContractParam | undefined;
  hash: Uint8Array;
  confirmers: string[];
}

const baseOriginContractParam: object = {
  chain: "",
  contract_address: "",
  contract_owner: "",
};

export const OriginContractParam = {
  encode(
    message: OriginContractParam,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.chain !== "") {
      writer.uint32(10).string(message.chain);
    }
    if (message.contract_address !== "") {
      writer.uint32(18).string(message.contract_address);
    }
    if (message.contract_owner !== "") {
      writer.uint32(26).string(message.contract_owner);
    }
    if (message.request_expire !== undefined) {
      Timestamp.encode(
        toTimestamp(message.request_expire),
        writer.uint32(34).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): OriginContractParam {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseOriginContractParam } as OriginContractParam;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chain = reader.string();
          break;
        case 2:
          message.contract_address = reader.string();
          break;
        case 3:
          message.contract_owner = reader.string();
          break;
        case 4:
          message.request_expire = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): OriginContractParam {
    const message = { ...baseOriginContractParam } as OriginContractParam;
    if (object.chain !== undefined && object.chain !== null) {
      message.chain = String(object.chain);
    } else {
      message.chain = "";
    }
    if (
      object.contract_address !== undefined &&
      object.contract_address !== null
    ) {
      message.contract_address = String(object.contract_address);
    } else {
      message.contract_address = "";
    }
    if (object.contract_owner !== undefined && object.contract_owner !== null) {
      message.contract_owner = String(object.contract_owner);
    } else {
      message.contract_owner = "";
    }
    if (object.request_expire !== undefined && object.request_expire !== null) {
      message.request_expire = fromJsonTimestamp(object.request_expire);
    } else {
      message.request_expire = undefined;
    }
    return message;
  },

  toJSON(message: OriginContractParam): unknown {
    const obj: any = {};
    message.chain !== undefined && (obj.chain = message.chain);
    message.contract_address !== undefined &&
      (obj.contract_address = message.contract_address);
    message.contract_owner !== undefined &&
      (obj.contract_owner = message.contract_owner);
    message.request_expire !== undefined &&
      (obj.request_expire =
        message.request_expire !== undefined
          ? message.request_expire.toISOString()
          : null);
    return obj;
  },

  fromPartial(object: DeepPartial<OriginContractParam>): OriginContractParam {
    const message = { ...baseOriginContractParam } as OriginContractParam;
    if (object.chain !== undefined && object.chain !== null) {
      message.chain = object.chain;
    } else {
      message.chain = "";
    }
    if (
      object.contract_address !== undefined &&
      object.contract_address !== null
    ) {
      message.contract_address = object.contract_address;
    } else {
      message.contract_address = "";
    }
    if (object.contract_owner !== undefined && object.contract_owner !== null) {
      message.contract_owner = object.contract_owner;
    } else {
      message.contract_owner = "";
    }
    if (object.request_expire !== undefined && object.request_expire !== null) {
      message.request_expire = object.request_expire;
    } else {
      message.request_expire = undefined;
    }
    return message;
  },
};

const baseCollectionOwnerRequest: object = {
  id: 0,
  nftSchemaCode: "",
  signer: "",
  required_confirm: 0,
  status: 0,
  current_confirm: 0,
  confirmers: "",
  expired_height: 0,
};

export const CollectionOwnerRequest = {
  encode(
    message: CollectionOwnerRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.nftSchemaCode !== "") {
      writer.uint32(18).string(message.nftSchemaCode);
    }
    if (message.signer !== "") {
      writer.uint32(26).string(message.signer);
    }
    if (message.required_confirm !== 0) {
      writer.uint32(32).uint64(message.required_confirm);
    }
    if (message.status !== 0) {
      writer.uint32(40).int32(message.status);
    }
    if (message.current_confirm !== 0) {
      writer.uint32(48).uint64(message.current_confirm);
    }
    for (const v of message.confirmers) {
      writer.uint32(58).string(v!);
    }
    if (message.created_at !== undefined) {
      Timestamp.encode(
        toTimestamp(message.created_at),
        writer.uint32(66).fork()
      ).ldelim();
    }
    if (message.valid_until !== undefined) {
      Timestamp.encode(
        toTimestamp(message.valid_until),
        writer.uint32(74).fork()
      ).ldelim();
    }
    for (const v of message.contract_info) {
      OriginContractInfo.encode(v!, writer.uint32(82).fork()).ldelim();
    }
    if (message.expired_height !== 0) {
      writer.uint32(88).int64(message.expired_height);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): CollectionOwnerRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCollectionOwnerRequest } as CollectionOwnerRequest;
    message.confirmers = [];
    message.contract_info = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.nftSchemaCode = reader.string();
          break;
        case 3:
          message.signer = reader.string();
          break;
        case 4:
          message.required_confirm = longToNumber(reader.uint64() as Long);
          break;
        case 5:
          message.status = reader.int32() as any;
          break;
        case 6:
          message.current_confirm = longToNumber(reader.uint64() as Long);
          break;
        case 7:
          message.confirmers.push(reader.string());
          break;
        case 8:
          message.created_at = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 9:
          message.valid_until = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 10:
          message.contract_info.push(
            OriginContractInfo.decode(reader, reader.uint32())
          );
          break;
        case 11:
          message.expired_height = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CollectionOwnerRequest {
    const message = { ...baseCollectionOwnerRequest } as CollectionOwnerRequest;
    message.confirmers = [];
    message.contract_info = [];
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    if (object.nftSchemaCode !== undefined && object.nftSchemaCode !== null) {
      message.nftSchemaCode = String(object.nftSchemaCode);
    } else {
      message.nftSchemaCode = "";
    }
    if (object.signer !== undefined && object.signer !== null) {
      message.signer = String(object.signer);
    } else {
      message.signer = "";
    }
    if (
      object.required_confirm !== undefined &&
      object.required_confirm !== null
    ) {
      message.required_confirm = Number(object.required_confirm);
    } else {
      message.required_confirm = 0;
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = requestStatusFromJSON(object.status);
    } else {
      message.status = 0;
    }
    if (
      object.current_confirm !== undefined &&
      object.current_confirm !== null
    ) {
      message.current_confirm = Number(object.current_confirm);
    } else {
      message.current_confirm = 0;
    }
    if (object.confirmers !== undefined && object.confirmers !== null) {
      for (const e of object.confirmers) {
        message.confirmers.push(String(e));
      }
    }
    if (object.created_at !== undefined && object.created_at !== null) {
      message.created_at = fromJsonTimestamp(object.created_at);
    } else {
      message.created_at = undefined;
    }
    if (object.valid_until !== undefined && object.valid_until !== null) {
      message.valid_until = fromJsonTimestamp(object.valid_until);
    } else {
      message.valid_until = undefined;
    }
    if (object.contract_info !== undefined && object.contract_info !== null) {
      for (const e of object.contract_info) {
        message.contract_info.push(OriginContractInfo.fromJSON(e));
      }
    }
    if (object.expired_height !== undefined && object.expired_height !== null) {
      message.expired_height = Number(object.expired_height);
    } else {
      message.expired_height = 0;
    }
    return message;
  },

  toJSON(message: CollectionOwnerRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.nftSchemaCode !== undefined &&
      (obj.nftSchemaCode = message.nftSchemaCode);
    message.signer !== undefined && (obj.signer = message.signer);
    message.required_confirm !== undefined &&
      (obj.required_confirm = message.required_confirm);
    message.status !== undefined &&
      (obj.status = requestStatusToJSON(message.status));
    message.current_confirm !== undefined &&
      (obj.current_confirm = message.current_confirm);
    if (message.confirmers) {
      obj.confirmers = message.confirmers.map((e) => e);
    } else {
      obj.confirmers = [];
    }
    message.created_at !== undefined &&
      (obj.created_at =
        message.created_at !== undefined
          ? message.created_at.toISOString()
          : null);
    message.valid_until !== undefined &&
      (obj.valid_until =
        message.valid_until !== undefined
          ? message.valid_until.toISOString()
          : null);
    if (message.contract_info) {
      obj.contract_info = message.contract_info.map((e) =>
        e ? OriginContractInfo.toJSON(e) : undefined
      );
    } else {
      obj.contract_info = [];
    }
    message.expired_height !== undefined &&
      (obj.expired_height = message.expired_height);
    return obj;
  },

  fromPartial(
    object: DeepPartial<CollectionOwnerRequest>
  ): CollectionOwnerRequest {
    const message = { ...baseCollectionOwnerRequest } as CollectionOwnerRequest;
    message.confirmers = [];
    message.contract_info = [];
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    if (object.nftSchemaCode !== undefined && object.nftSchemaCode !== null) {
      message.nftSchemaCode = object.nftSchemaCode;
    } else {
      message.nftSchemaCode = "";
    }
    if (object.signer !== undefined && object.signer !== null) {
      message.signer = object.signer;
    } else {
      message.signer = "";
    }
    if (
      object.required_confirm !== undefined &&
      object.required_confirm !== null
    ) {
      message.required_confirm = object.required_confirm;
    } else {
      message.required_confirm = 0;
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    } else {
      message.status = 0;
    }
    if (
      object.current_confirm !== undefined &&
      object.current_confirm !== null
    ) {
      message.current_confirm = object.current_confirm;
    } else {
      message.current_confirm = 0;
    }
    if (object.confirmers !== undefined && object.confirmers !== null) {
      for (const e of object.confirmers) {
        message.confirmers.push(e);
      }
    }
    if (object.created_at !== undefined && object.created_at !== null) {
      message.created_at = object.created_at;
    } else {
      message.created_at = undefined;
    }
    if (object.valid_until !== undefined && object.valid_until !== null) {
      message.valid_until = object.valid_until;
    } else {
      message.valid_until = undefined;
    }
    if (object.contract_info !== undefined && object.contract_info !== null) {
      for (const e of object.contract_info) {
        message.contract_info.push(OriginContractInfo.fromPartial(e));
      }
    }
    if (object.expired_height !== undefined && object.expired_height !== null) {
      message.expired_height = object.expired_height;
    } else {
      message.expired_height = 0;
    }
    return message;
  },
};

const baseOriginContractInfo: object = { confirmers: "" };

export const OriginContractInfo = {
  encode(
    message: OriginContractInfo,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.contractOriginDataInfo !== undefined) {
      OriginContractParam.encode(
        message.contractOriginDataInfo,
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

  decode(input: Reader | Uint8Array, length?: number): OriginContractInfo {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseOriginContractInfo } as OriginContractInfo;
    message.confirmers = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contractOriginDataInfo = OriginContractParam.decode(
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

  fromJSON(object: any): OriginContractInfo {
    const message = { ...baseOriginContractInfo } as OriginContractInfo;
    message.confirmers = [];
    if (
      object.contractOriginDataInfo !== undefined &&
      object.contractOriginDataInfo !== null
    ) {
      message.contractOriginDataInfo = OriginContractParam.fromJSON(
        object.contractOriginDataInfo
      );
    } else {
      message.contractOriginDataInfo = undefined;
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

  toJSON(message: OriginContractInfo): unknown {
    const obj: any = {};
    message.contractOriginDataInfo !== undefined &&
      (obj.contractOriginDataInfo = message.contractOriginDataInfo
        ? OriginContractParam.toJSON(message.contractOriginDataInfo)
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

  fromPartial(object: DeepPartial<OriginContractInfo>): OriginContractInfo {
    const message = { ...baseOriginContractInfo } as OriginContractInfo;
    message.confirmers = [];
    if (
      object.contractOriginDataInfo !== undefined &&
      object.contractOriginDataInfo !== null
    ) {
      message.contractOriginDataInfo = OriginContractParam.fromPartial(
        object.contractOriginDataInfo
      );
    } else {
      message.contractOriginDataInfo = undefined;
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

function toTimestamp(date: Date): Timestamp {
  const seconds = date.getTime() / 1_000;
  const nanos = (date.getTime() % 1_000) * 1_000_000;
  return { seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
  let millis = t.seconds * 1_000;
  millis += t.nanos / 1_000_000;
  return new Date(millis);
}

function fromJsonTimestamp(o: any): Date {
  if (o instanceof Date) {
    return o;
  } else if (typeof o === "string") {
    return new Date(o);
  } else {
    return fromTimestamp(Timestamp.fromJSON(o));
  }
}

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}


