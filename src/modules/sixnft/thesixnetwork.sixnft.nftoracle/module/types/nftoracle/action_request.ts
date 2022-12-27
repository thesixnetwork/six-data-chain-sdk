/* eslint-disable */
import {
  RequestStatus,
  DataHash,
  requestStatusFromJSON,
  requestStatusToJSON,
} from "../nftoracle/request";
import { Timestamp } from "../google/protobuf/timestamp";
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "thesixnetwork.sixnft.nftoracle";

export interface ActionParameter {
  name: string;
  value: string;
}

export interface ActionOracleParam {
  nft_schema_code: string;
  token_id: string;
  action: string;
  params: ActionParameter[];
  ref_id: string;
  expired_at: Date | undefined;
  on_behalf_of: string;
}

export interface ActionOracleRequest {
  id: number;
  nft_schema_code: string;
  token_id: string;
  action: string;
  params: ActionParameter[];
  caller: string;
  ref_id: string;
  required_confirm: number;
  status: RequestStatus;
  current_confirm: number;
  confirmers: string[];
  created_at: Date | undefined;
  valid_until: Date | undefined;
  data_hashes: DataHash[];
  expired_height: number;
  execution_error_message: string;
}

const baseActionParameter: object = { name: "", value: "" };

export const ActionParameter = {
  encode(message: ActionParameter, writer: Writer = Writer.create()): Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): ActionParameter {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseActionParameter } as ActionParameter;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.value = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ActionParameter {
    const message = { ...baseActionParameter } as ActionParameter;
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = String(object.value);
    } else {
      message.value = "";
    }
    return message;
  },

  toJSON(message: ActionParameter): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial(object: DeepPartial<ActionParameter>): ActionParameter {
    const message = { ...baseActionParameter } as ActionParameter;
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    } else {
      message.value = "";
    }
    return message;
  },
};

const baseActionOracleParam: object = {
  nft_schema_code: "",
  token_id: "",
  action: "",
  ref_id: "",
  on_behalf_of: "",
};

export const ActionOracleParam = {
  encode(message: ActionOracleParam, writer: Writer = Writer.create()): Writer {
    if (message.nft_schema_code !== "") {
      writer.uint32(10).string(message.nft_schema_code);
    }
    if (message.token_id !== "") {
      writer.uint32(18).string(message.token_id);
    }
    if (message.action !== "") {
      writer.uint32(26).string(message.action);
    }
    for (const v of message.params) {
      ActionParameter.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.ref_id !== "") {
      writer.uint32(42).string(message.ref_id);
    }
    if (message.expired_at !== undefined) {
      Timestamp.encode(
        toTimestamp(message.expired_at),
        writer.uint32(50).fork()
      ).ldelim();
    }
    if (message.on_behalf_of !== "") {
      writer.uint32(58).string(message.on_behalf_of);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): ActionOracleParam {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseActionOracleParam } as ActionOracleParam;
    message.params = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nft_schema_code = reader.string();
          break;
        case 2:
          message.token_id = reader.string();
          break;
        case 3:
          message.action = reader.string();
          break;
        case 4:
          message.params.push(ActionParameter.decode(reader, reader.uint32()));
          break;
        case 5:
          message.ref_id = reader.string();
          break;
        case 6:
          message.expired_at = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 7:
          message.on_behalf_of = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ActionOracleParam {
    const message = { ...baseActionOracleParam } as ActionOracleParam;
    message.params = [];
    if (
      object.nft_schema_code !== undefined &&
      object.nft_schema_code !== null
    ) {
      message.nft_schema_code = String(object.nft_schema_code);
    } else {
      message.nft_schema_code = "";
    }
    if (object.token_id !== undefined && object.token_id !== null) {
      message.token_id = String(object.token_id);
    } else {
      message.token_id = "";
    }
    if (object.action !== undefined && object.action !== null) {
      message.action = String(object.action);
    } else {
      message.action = "";
    }
    if (object.params !== undefined && object.params !== null) {
      for (const e of object.params) {
        message.params.push(ActionParameter.fromJSON(e));
      }
    }
    if (object.ref_id !== undefined && object.ref_id !== null) {
      message.ref_id = String(object.ref_id);
    } else {
      message.ref_id = "";
    }
    if (object.expired_at !== undefined && object.expired_at !== null) {
      message.expired_at = fromJsonTimestamp(object.expired_at);
    } else {
      message.expired_at = undefined;
    }
    if (object.on_behalf_of !== undefined && object.on_behalf_of !== null) {
      message.on_behalf_of = String(object.on_behalf_of);
    } else {
      message.on_behalf_of = "";
    }
    return message;
  },

  toJSON(message: ActionOracleParam): unknown {
    const obj: any = {};
    message.nft_schema_code !== undefined &&
      (obj.nft_schema_code = message.nft_schema_code);
    message.token_id !== undefined && (obj.token_id = message.token_id);
    message.action !== undefined && (obj.action = message.action);
    if (message.params) {
      obj.params = message.params.map((e) =>
        e ? ActionParameter.toJSON(e) : undefined
      );
    } else {
      obj.params = [];
    }
    message.ref_id !== undefined && (obj.ref_id = message.ref_id);
    message.expired_at !== undefined &&
      (obj.expired_at =
        message.expired_at !== undefined
          ? message.expired_at.toISOString()
          : null);
    message.on_behalf_of !== undefined &&
      (obj.on_behalf_of = message.on_behalf_of);
    return obj;
  },

  fromPartial(object: DeepPartial<ActionOracleParam>): ActionOracleParam {
    const message = { ...baseActionOracleParam } as ActionOracleParam;
    message.params = [];
    if (
      object.nft_schema_code !== undefined &&
      object.nft_schema_code !== null
    ) {
      message.nft_schema_code = object.nft_schema_code;
    } else {
      message.nft_schema_code = "";
    }
    if (object.token_id !== undefined && object.token_id !== null) {
      message.token_id = object.token_id;
    } else {
      message.token_id = "";
    }
    if (object.action !== undefined && object.action !== null) {
      message.action = object.action;
    } else {
      message.action = "";
    }
    if (object.params !== undefined && object.params !== null) {
      for (const e of object.params) {
        message.params.push(ActionParameter.fromPartial(e));
      }
    }
    if (object.ref_id !== undefined && object.ref_id !== null) {
      message.ref_id = object.ref_id;
    } else {
      message.ref_id = "";
    }
    if (object.expired_at !== undefined && object.expired_at !== null) {
      message.expired_at = object.expired_at;
    } else {
      message.expired_at = undefined;
    }
    if (object.on_behalf_of !== undefined && object.on_behalf_of !== null) {
      message.on_behalf_of = object.on_behalf_of;
    } else {
      message.on_behalf_of = "";
    }
    return message;
  },
};

const baseActionOracleRequest: object = {
  id: 0,
  nft_schema_code: "",
  token_id: "",
  action: "",
  caller: "",
  ref_id: "",
  required_confirm: 0,
  status: 0,
  current_confirm: 0,
  confirmers: "",
  expired_height: 0,
  execution_error_message: "",
};

export const ActionOracleRequest = {
  encode(
    message: ActionOracleRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.nft_schema_code !== "") {
      writer.uint32(18).string(message.nft_schema_code);
    }
    if (message.token_id !== "") {
      writer.uint32(26).string(message.token_id);
    }
    if (message.action !== "") {
      writer.uint32(34).string(message.action);
    }
    for (const v of message.params) {
      ActionParameter.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    if (message.caller !== "") {
      writer.uint32(50).string(message.caller);
    }
    if (message.ref_id !== "") {
      writer.uint32(58).string(message.ref_id);
    }
    if (message.required_confirm !== 0) {
      writer.uint32(64).uint64(message.required_confirm);
    }
    if (message.status !== 0) {
      writer.uint32(72).int32(message.status);
    }
    if (message.current_confirm !== 0) {
      writer.uint32(80).uint64(message.current_confirm);
    }
    for (const v of message.confirmers) {
      writer.uint32(90).string(v!);
    }
    if (message.created_at !== undefined) {
      Timestamp.encode(
        toTimestamp(message.created_at),
        writer.uint32(98).fork()
      ).ldelim();
    }
    if (message.valid_until !== undefined) {
      Timestamp.encode(
        toTimestamp(message.valid_until),
        writer.uint32(106).fork()
      ).ldelim();
    }
    for (const v of message.data_hashes) {
      DataHash.encode(v!, writer.uint32(114).fork()).ldelim();
    }
    if (message.expired_height !== 0) {
      writer.uint32(120).int64(message.expired_height);
    }
    if (message.execution_error_message !== "") {
      writer.uint32(130).string(message.execution_error_message);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): ActionOracleRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseActionOracleRequest } as ActionOracleRequest;
    message.params = [];
    message.confirmers = [];
    message.data_hashes = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.nft_schema_code = reader.string();
          break;
        case 3:
          message.token_id = reader.string();
          break;
        case 4:
          message.action = reader.string();
          break;
        case 5:
          message.params.push(ActionParameter.decode(reader, reader.uint32()));
          break;
        case 6:
          message.caller = reader.string();
          break;
        case 7:
          message.ref_id = reader.string();
          break;
        case 8:
          message.required_confirm = longToNumber(reader.uint64() as Long);
          break;
        case 9:
          message.status = reader.int32() as any;
          break;
        case 10:
          message.current_confirm = longToNumber(reader.uint64() as Long);
          break;
        case 11:
          message.confirmers.push(reader.string());
          break;
        case 12:
          message.created_at = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 13:
          message.valid_until = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 14:
          message.data_hashes.push(DataHash.decode(reader, reader.uint32()));
          break;
        case 15:
          message.expired_height = longToNumber(reader.int64() as Long);
          break;
        case 16:
          message.execution_error_message = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ActionOracleRequest {
    const message = { ...baseActionOracleRequest } as ActionOracleRequest;
    message.params = [];
    message.confirmers = [];
    message.data_hashes = [];
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    if (
      object.nft_schema_code !== undefined &&
      object.nft_schema_code !== null
    ) {
      message.nft_schema_code = String(object.nft_schema_code);
    } else {
      message.nft_schema_code = "";
    }
    if (object.token_id !== undefined && object.token_id !== null) {
      message.token_id = String(object.token_id);
    } else {
      message.token_id = "";
    }
    if (object.action !== undefined && object.action !== null) {
      message.action = String(object.action);
    } else {
      message.action = "";
    }
    if (object.params !== undefined && object.params !== null) {
      for (const e of object.params) {
        message.params.push(ActionParameter.fromJSON(e));
      }
    }
    if (object.caller !== undefined && object.caller !== null) {
      message.caller = String(object.caller);
    } else {
      message.caller = "";
    }
    if (object.ref_id !== undefined && object.ref_id !== null) {
      message.ref_id = String(object.ref_id);
    } else {
      message.ref_id = "";
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
        message.data_hashes.push(DataHash.fromJSON(e));
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

  toJSON(message: ActionOracleRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.nft_schema_code !== undefined &&
      (obj.nft_schema_code = message.nft_schema_code);
    message.token_id !== undefined && (obj.token_id = message.token_id);
    message.action !== undefined && (obj.action = message.action);
    if (message.params) {
      obj.params = message.params.map((e) =>
        e ? ActionParameter.toJSON(e) : undefined
      );
    } else {
      obj.params = [];
    }
    message.caller !== undefined && (obj.caller = message.caller);
    message.ref_id !== undefined && (obj.ref_id = message.ref_id);
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
        e ? DataHash.toJSON(e) : undefined
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

  fromPartial(object: DeepPartial<ActionOracleRequest>): ActionOracleRequest {
    const message = { ...baseActionOracleRequest } as ActionOracleRequest;
    message.params = [];
    message.confirmers = [];
    message.data_hashes = [];
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    if (
      object.nft_schema_code !== undefined &&
      object.nft_schema_code !== null
    ) {
      message.nft_schema_code = object.nft_schema_code;
    } else {
      message.nft_schema_code = "";
    }
    if (object.token_id !== undefined && object.token_id !== null) {
      message.token_id = object.token_id;
    } else {
      message.token_id = "";
    }
    if (object.action !== undefined && object.action !== null) {
      message.action = object.action;
    } else {
      message.action = "";
    }
    if (object.params !== undefined && object.params !== null) {
      for (const e of object.params) {
        message.params.push(ActionParameter.fromPartial(e));
      }
    }
    if (object.caller !== undefined && object.caller !== null) {
      message.caller = object.caller;
    } else {
      message.caller = "";
    }
    if (object.ref_id !== undefined && object.ref_id !== null) {
      message.ref_id = object.ref_id;
    } else {
      message.ref_id = "";
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
        message.data_hashes.push(DataHash.fromPartial(e));
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


