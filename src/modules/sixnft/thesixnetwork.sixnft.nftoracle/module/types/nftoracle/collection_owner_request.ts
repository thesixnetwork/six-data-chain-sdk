/* eslint-disable */
import {
  RequestStatus,
  OriginTxInfo,
  requestStatusFromJSON,
  requestStatusToJSON,
} from "../nftoracle/request";
import { Timestamp } from "../google/protobuf/timestamp";
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "thesixnetwork.sixnft.nftoracle";

export interface TxOriginParam {
  chain: string;
  tx_hash: string;
  block_number: number;
  deployer_address: string;
}

export interface CollectionOwnerRequest {
  id: number;
  nftSchemaCode: string;
  signer: string;
  required_confirm: number;
  status: RequestStatus;
  current_confirm: number;
  confirmers: { [key: string]: boolean };
  created_at: Date | undefined;
  valid_until: Date | undefined;
  origin_tx: OriginTxInfo[];
  expired_height: number;
}

export interface CollectionOwnerRequest_ConfirmersEntry {
  key: string;
  value: boolean;
}

const baseTxOriginParam: object = {
  chain: "",
  tx_hash: "",
  block_number: 0,
  deployer_address: "",
};

export const TxOriginParam = {
  encode(message: TxOriginParam, writer: Writer = Writer.create()): Writer {
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

  decode(input: Reader | Uint8Array, length?: number): TxOriginParam {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseTxOriginParam } as TxOriginParam;
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

  fromJSON(object: any): TxOriginParam {
    const message = { ...baseTxOriginParam } as TxOriginParam;
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

  toJSON(message: TxOriginParam): unknown {
    const obj: any = {};
    message.chain !== undefined && (obj.chain = message.chain);
    message.tx_hash !== undefined && (obj.tx_hash = message.tx_hash);
    message.block_number !== undefined &&
      (obj.block_number = message.block_number);
    message.deployer_address !== undefined &&
      (obj.deployer_address = message.deployer_address);
    return obj;
  },

  fromPartial(object: DeepPartial<TxOriginParam>): TxOriginParam {
    const message = { ...baseTxOriginParam } as TxOriginParam;
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

const baseCollectionOwnerRequest: object = {
  id: 0,
  nftSchemaCode: "",
  signer: "",
  required_confirm: 0,
  status: 0,
  current_confirm: 0,
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
    Object.entries(message.confirmers).forEach(([key, value]) => {
      CollectionOwnerRequest_ConfirmersEntry.encode(
        { key: key as any, value },
        writer.uint32(58).fork()
      ).ldelim();
    });
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
    for (const v of message.origin_tx) {
      OriginTxInfo.encode(v!, writer.uint32(82).fork()).ldelim();
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
    message.confirmers = {};
    message.origin_tx = [];
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
          const entry7 = CollectionOwnerRequest_ConfirmersEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry7.value !== undefined) {
            message.confirmers[entry7.key] = entry7.value;
          }
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
          message.origin_tx.push(OriginTxInfo.decode(reader, reader.uint32()));
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
    message.confirmers = {};
    message.origin_tx = [];
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
      Object.entries(object.confirmers).forEach(([key, value]) => {
        message.confirmers[key] = Boolean(value);
      });
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
    if (object.origin_tx !== undefined && object.origin_tx !== null) {
      for (const e of object.origin_tx) {
        message.origin_tx.push(OriginTxInfo.fromJSON(e));
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
    obj.confirmers = {};
    if (message.confirmers) {
      Object.entries(message.confirmers).forEach(([k, v]) => {
        obj.confirmers[k] = v;
      });
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
    if (message.origin_tx) {
      obj.origin_tx = message.origin_tx.map((e) =>
        e ? OriginTxInfo.toJSON(e) : undefined
      );
    } else {
      obj.origin_tx = [];
    }
    message.expired_height !== undefined &&
      (obj.expired_height = message.expired_height);
    return obj;
  },

  fromPartial(
    object: DeepPartial<CollectionOwnerRequest>
  ): CollectionOwnerRequest {
    const message = { ...baseCollectionOwnerRequest } as CollectionOwnerRequest;
    message.confirmers = {};
    message.origin_tx = [];
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
      Object.entries(object.confirmers).forEach(([key, value]) => {
        if (value !== undefined) {
          message.confirmers[key] = Boolean(value);
        }
      });
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
    if (object.origin_tx !== undefined && object.origin_tx !== null) {
      for (const e of object.origin_tx) {
        message.origin_tx.push(OriginTxInfo.fromPartial(e));
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

const baseCollectionOwnerRequest_ConfirmersEntry: object = {
  key: "",
  value: false,
};

export const CollectionOwnerRequest_ConfirmersEntry = {
  encode(
    message: CollectionOwnerRequest_ConfirmersEntry,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value === true) {
      writer.uint32(16).bool(message.value);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): CollectionOwnerRequest_ConfirmersEntry {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCollectionOwnerRequest_ConfirmersEntry,
    } as CollectionOwnerRequest_ConfirmersEntry;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CollectionOwnerRequest_ConfirmersEntry {
    const message = {
      ...baseCollectionOwnerRequest_ConfirmersEntry,
    } as CollectionOwnerRequest_ConfirmersEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = String(object.key);
    } else {
      message.key = "";
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = Boolean(object.value);
    } else {
      message.value = false;
    }
    return message;
  },

  toJSON(message: CollectionOwnerRequest_ConfirmersEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial(
    object: DeepPartial<CollectionOwnerRequest_ConfirmersEntry>
  ): CollectionOwnerRequest_ConfirmersEntry {
    const message = {
      ...baseCollectionOwnerRequest_ConfirmersEntry,
    } as CollectionOwnerRequest_ConfirmersEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    } else {
      message.key = "";
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    } else {
      message.value = false;
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

if (util.Long !== Long) {
  util.Long = Long as any;
  configure();
}
