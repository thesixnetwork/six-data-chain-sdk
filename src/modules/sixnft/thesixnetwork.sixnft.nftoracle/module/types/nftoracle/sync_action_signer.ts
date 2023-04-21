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

export interface SyncActionSigner {
  id: number;
  chain: string;
  actor_address: string;
  owner_address: string;
  /** will use as creator when message is success */
  caller: string;
  required_confirm: number;
  status: RequestStatus;
  current_confirm: number;
  confirmers: string[];
  created_at: Date | undefined;
  valid_until: Date | undefined;
  data_hashes: ContractInfoHash[];
  expired_height: number;
  execution_error_message: string;
}

export interface ParameterSyncSignerByOracle {
  chain: string;
  /** get from smart contract */
  owner_address: string;
  /** get from smart contract */
  actor_address: string;
  expire_epoch: string;
}

export interface ContractInfoHash {
  contract_param: ParameterSyncSignerByOracle | undefined;
  hash: Uint8Array;
  confirmers: string[];
}

const baseSyncActionSigner: object = {
  id: 0,
  chain: "",
  actor_address: "",
  owner_address: "",
  caller: "",
  required_confirm: 0,
  status: 0,
  current_confirm: 0,
  confirmers: "",
  expired_height: 0,
  execution_error_message: "",
};

export const SyncActionSigner = {
  encode(message: SyncActionSigner, writer: Writer = Writer.create()): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.chain !== "") {
      writer.uint32(18).string(message.chain);
    }
    if (message.actor_address !== "") {
      writer.uint32(26).string(message.actor_address);
    }
    if (message.owner_address !== "") {
      writer.uint32(34).string(message.owner_address);
    }
    if (message.caller !== "") {
      writer.uint32(42).string(message.caller);
    }
    if (message.required_confirm !== 0) {
      writer.uint32(48).uint64(message.required_confirm);
    }
    if (message.status !== 0) {
      writer.uint32(56).int32(message.status);
    }
    if (message.current_confirm !== 0) {
      writer.uint32(64).uint64(message.current_confirm);
    }
    for (const v of message.confirmers) {
      writer.uint32(74).string(v!);
    }
    if (message.created_at !== undefined) {
      Timestamp.encode(
        toTimestamp(message.created_at),
        writer.uint32(82).fork()
      ).ldelim();
    }
    if (message.valid_until !== undefined) {
      Timestamp.encode(
        toTimestamp(message.valid_until),
        writer.uint32(90).fork()
      ).ldelim();
    }
    for (const v of message.data_hashes) {
      ContractInfoHash.encode(v!, writer.uint32(98).fork()).ldelim();
    }
    if (message.expired_height !== 0) {
      writer.uint32(104).int64(message.expired_height);
    }
    if (message.execution_error_message !== "") {
      writer.uint32(114).string(message.execution_error_message);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): SyncActionSigner {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseSyncActionSigner } as SyncActionSigner;
    message.confirmers = [];
    message.data_hashes = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.chain = reader.string();
          break;
        case 3:
          message.actor_address = reader.string();
          break;
        case 4:
          message.owner_address = reader.string();
          break;
        case 5:
          message.caller = reader.string();
          break;
        case 6:
          message.required_confirm = longToNumber(reader.uint64() as Long);
          break;
        case 7:
          message.status = reader.int32() as any;
          break;
        case 8:
          message.current_confirm = longToNumber(reader.uint64() as Long);
          break;
        case 9:
          message.confirmers.push(reader.string());
          break;
        case 10:
          message.created_at = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 11:
          message.valid_until = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 12:
          message.data_hashes.push(
            ContractInfoHash.decode(reader, reader.uint32())
          );
          break;
        case 13:
          message.expired_height = longToNumber(reader.int64() as Long);
          break;
        case 14:
          message.execution_error_message = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SyncActionSigner {
    const message = { ...baseSyncActionSigner } as SyncActionSigner;
    message.confirmers = [];
    message.data_hashes = [];
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    if (object.chain !== undefined && object.chain !== null) {
      message.chain = String(object.chain);
    } else {
      message.chain = "";
    }
    if (object.actor_address !== undefined && object.actor_address !== null) {
      message.actor_address = String(object.actor_address);
    } else {
      message.actor_address = "";
    }
    if (object.owner_address !== undefined && object.owner_address !== null) {
      message.owner_address = String(object.owner_address);
    } else {
      message.owner_address = "";
    }
    if (object.caller !== undefined && object.caller !== null) {
      message.caller = String(object.caller);
    } else {
      message.caller = "";
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
    if (object.data_hashes !== undefined && object.data_hashes !== null) {
      for (const e of object.data_hashes) {
        message.data_hashes.push(ContractInfoHash.fromJSON(e));
      }
    }
    if (object.expired_height !== undefined && object.expired_height !== null) {
      message.expired_height = Number(object.expired_height);
    } else {
      message.expired_height = 0;
    }
    if (
      object.execution_error_message !== undefined &&
      object.execution_error_message !== null
    ) {
      message.execution_error_message = String(object.execution_error_message);
    } else {
      message.execution_error_message = "";
    }
    return message;
  },

  toJSON(message: SyncActionSigner): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.chain !== undefined && (obj.chain = message.chain);
    message.actor_address !== undefined &&
      (obj.actor_address = message.actor_address);
    message.owner_address !== undefined &&
      (obj.owner_address = message.owner_address);
    message.caller !== undefined && (obj.caller = message.caller);
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
    if (message.data_hashes) {
      obj.data_hashes = message.data_hashes.map((e) =>
        e ? ContractInfoHash.toJSON(e) : undefined
      );
    } else {
      obj.data_hashes = [];
    }
    message.expired_height !== undefined &&
      (obj.expired_height = message.expired_height);
    message.execution_error_message !== undefined &&
      (obj.execution_error_message = message.execution_error_message);
    return obj;
  },

  fromPartial(object: DeepPartial<SyncActionSigner>): SyncActionSigner {
    const message = { ...baseSyncActionSigner } as SyncActionSigner;
    message.confirmers = [];
    message.data_hashes = [];
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    if (object.chain !== undefined && object.chain !== null) {
      message.chain = object.chain;
    } else {
      message.chain = "";
    }
    if (object.actor_address !== undefined && object.actor_address !== null) {
      message.actor_address = object.actor_address;
    } else {
      message.actor_address = "";
    }
    if (object.owner_address !== undefined && object.owner_address !== null) {
      message.owner_address = object.owner_address;
    } else {
      message.owner_address = "";
    }
    if (object.caller !== undefined && object.caller !== null) {
      message.caller = object.caller;
    } else {
      message.caller = "";
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
    if (object.data_hashes !== undefined && object.data_hashes !== null) {
      for (const e of object.data_hashes) {
        message.data_hashes.push(ContractInfoHash.fromPartial(e));
      }
    }
    if (object.expired_height !== undefined && object.expired_height !== null) {
      message.expired_height = object.expired_height;
    } else {
      message.expired_height = 0;
    }
    if (
      object.execution_error_message !== undefined &&
      object.execution_error_message !== null
    ) {
      message.execution_error_message = object.execution_error_message;
    } else {
      message.execution_error_message = "";
    }
    return message;
  },
};

const baseParameterSyncSignerByOracle: object = {
  chain: "",
  owner_address: "",
  actor_address: "",
  expire_epoch: "",
};

export const ParameterSyncSignerByOracle = {
  encode(
    message: ParameterSyncSignerByOracle,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.chain !== "") {
      writer.uint32(10).string(message.chain);
    }
    if (message.owner_address !== "") {
      writer.uint32(18).string(message.owner_address);
    }
    if (message.actor_address !== "") {
      writer.uint32(26).string(message.actor_address);
    }
    if (message.expire_epoch !== "") {
      writer.uint32(34).string(message.expire_epoch);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): ParameterSyncSignerByOracle {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseParameterSyncSignerByOracle,
    } as ParameterSyncSignerByOracle;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chain = reader.string();
          break;
        case 2:
          message.owner_address = reader.string();
          break;
        case 3:
          message.actor_address = reader.string();
          break;
        case 4:
          message.expire_epoch = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ParameterSyncSignerByOracle {
    const message = {
      ...baseParameterSyncSignerByOracle,
    } as ParameterSyncSignerByOracle;
    if (object.chain !== undefined && object.chain !== null) {
      message.chain = String(object.chain);
    } else {
      message.chain = "";
    }
    if (object.owner_address !== undefined && object.owner_address !== null) {
      message.owner_address = String(object.owner_address);
    } else {
      message.owner_address = "";
    }
    if (object.actor_address !== undefined && object.actor_address !== null) {
      message.actor_address = String(object.actor_address);
    } else {
      message.actor_address = "";
    }
    if (object.expire_epoch !== undefined && object.expire_epoch !== null) {
      message.expire_epoch = String(object.expire_epoch);
    } else {
      message.expire_epoch = "";
    }
    return message;
  },

  toJSON(message: ParameterSyncSignerByOracle): unknown {
    const obj: any = {};
    message.chain !== undefined && (obj.chain = message.chain);
    message.owner_address !== undefined &&
      (obj.owner_address = message.owner_address);
    message.actor_address !== undefined &&
      (obj.actor_address = message.actor_address);
    message.expire_epoch !== undefined &&
      (obj.expire_epoch = message.expire_epoch);
    return obj;
  },

  fromPartial(
    object: DeepPartial<ParameterSyncSignerByOracle>
  ): ParameterSyncSignerByOracle {
    const message = {
      ...baseParameterSyncSignerByOracle,
    } as ParameterSyncSignerByOracle;
    if (object.chain !== undefined && object.chain !== null) {
      message.chain = object.chain;
    } else {
      message.chain = "";
    }
    if (object.owner_address !== undefined && object.owner_address !== null) {
      message.owner_address = object.owner_address;
    } else {
      message.owner_address = "";
    }
    if (object.actor_address !== undefined && object.actor_address !== null) {
      message.actor_address = object.actor_address;
    } else {
      message.actor_address = "";
    }
    if (object.expire_epoch !== undefined && object.expire_epoch !== null) {
      message.expire_epoch = object.expire_epoch;
    } else {
      message.expire_epoch = "";
    }
    return message;
  },
};

const baseContractInfoHash: object = { confirmers: "" };

export const ContractInfoHash = {
  encode(message: ContractInfoHash, writer: Writer = Writer.create()): Writer {
    if (message.contract_param !== undefined) {
      ParameterSyncSignerByOracle.encode(
        message.contract_param,
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

  decode(input: Reader | Uint8Array, length?: number): ContractInfoHash {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseContractInfoHash } as ContractInfoHash;
    message.confirmers = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contract_param = ParameterSyncSignerByOracle.decode(
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

  fromJSON(object: any): ContractInfoHash {
    const message = { ...baseContractInfoHash } as ContractInfoHash;
    message.confirmers = [];
    if (object.contract_param !== undefined && object.contract_param !== null) {
      message.contract_param = ParameterSyncSignerByOracle.fromJSON(
        object.contract_param
      );
    } else {
      message.contract_param = undefined;
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

  toJSON(message: ContractInfoHash): unknown {
    const obj: any = {};
    message.contract_param !== undefined &&
      (obj.contract_param = message.contract_param
        ? ParameterSyncSignerByOracle.toJSON(message.contract_param)
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

  fromPartial(object: DeepPartial<ContractInfoHash>): ContractInfoHash {
    const message = { ...baseContractInfoHash } as ContractInfoHash;
    message.confirmers = [];
    if (object.contract_param !== undefined && object.contract_param !== null) {
      message.contract_param = ParameterSyncSignerByOracle.fromPartial(
        object.contract_param
      );
    } else {
      message.contract_param = undefined;
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


