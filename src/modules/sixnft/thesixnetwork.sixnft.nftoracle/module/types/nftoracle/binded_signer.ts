/* eslint-disable */
import { Timestamp } from "../google/protobuf/timestamp";
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "thesixnetwork.sixnft.nftoracle";

export interface _SetSignerParams {
  actor_address: string;
  expired_at: Date | undefined;
}

export interface BindedSigner {
  ownerAddress: string;
  signers: _SetSignerParams[];
  actorCount: number;
}

const base_SetSignerParams: object = { actor_address: "" };

export const _SetSignerParams = {
  encode(message: _SetSignerParams, writer: Writer = Writer.create()): Writer {
    if (message.actor_address !== "") {
      writer.uint32(10).string(message.actor_address);
    }
    if (message.expired_at !== undefined) {
      Timestamp.encode(
        toTimestamp(message.expired_at),
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): _SetSignerParams {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...base_SetSignerParams } as _SetSignerParams;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.actor_address = reader.string();
          break;
        case 2:
          message.expired_at = fromTimestamp(
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

  fromJSON(object: any): _SetSignerParams {
    const message = { ...base_SetSignerParams } as _SetSignerParams;
    if (object.actor_address !== undefined && object.actor_address !== null) {
      message.actor_address = String(object.actor_address);
    } else {
      message.actor_address = "";
    }
    if (object.expired_at !== undefined && object.expired_at !== null) {
      message.expired_at = fromJsonTimestamp(object.expired_at);
    } else {
      message.expired_at = undefined;
    }
    return message;
  },

  toJSON(message: _SetSignerParams): unknown {
    const obj: any = {};
    message.actor_address !== undefined &&
      (obj.actor_address = message.actor_address);
    message.expired_at !== undefined &&
      (obj.expired_at =
        message.expired_at !== undefined
          ? message.expired_at.toISOString()
          : null);
    return obj;
  },

  fromPartial(object: DeepPartial<_SetSignerParams>): _SetSignerParams {
    const message = { ...base_SetSignerParams } as _SetSignerParams;
    if (object.actor_address !== undefined && object.actor_address !== null) {
      message.actor_address = object.actor_address;
    } else {
      message.actor_address = "";
    }
    if (object.expired_at !== undefined && object.expired_at !== null) {
      message.expired_at = object.expired_at;
    } else {
      message.expired_at = undefined;
    }
    return message;
  },
};

const baseBindedSigner: object = { ownerAddress: "", actorCount: 0 };

export const BindedSigner = {
  encode(message: BindedSigner, writer: Writer = Writer.create()): Writer {
    if (message.ownerAddress !== "") {
      writer.uint32(10).string(message.ownerAddress);
    }
    for (const v of message.signers) {
      _SetSignerParams.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.actorCount !== 0) {
      writer.uint32(24).uint64(message.actorCount);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): BindedSigner {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseBindedSigner } as BindedSigner;
    message.signers = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ownerAddress = reader.string();
          break;
        case 2:
          message.signers.push(
            _SetSignerParams.decode(reader, reader.uint32())
          );
          break;
        case 3:
          message.actorCount = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BindedSigner {
    const message = { ...baseBindedSigner } as BindedSigner;
    message.signers = [];
    if (object.ownerAddress !== undefined && object.ownerAddress !== null) {
      message.ownerAddress = String(object.ownerAddress);
    } else {
      message.ownerAddress = "";
    }
    if (object.signers !== undefined && object.signers !== null) {
      for (const e of object.signers) {
        message.signers.push(_SetSignerParams.fromJSON(e));
      }
    }
    if (object.actorCount !== undefined && object.actorCount !== null) {
      message.actorCount = Number(object.actorCount);
    } else {
      message.actorCount = 0;
    }
    return message;
  },

  toJSON(message: BindedSigner): unknown {
    const obj: any = {};
    message.ownerAddress !== undefined &&
      (obj.ownerAddress = message.ownerAddress);
    if (message.signers) {
      obj.signers = message.signers.map((e) =>
        e ? _SetSignerParams.toJSON(e) : undefined
      );
    } else {
      obj.signers = [];
    }
    message.actorCount !== undefined && (obj.actorCount = message.actorCount);
    return obj;
  },

  fromPartial(object: DeepPartial<BindedSigner>): BindedSigner {
    const message = { ...baseBindedSigner } as BindedSigner;
    message.signers = [];
    if (object.ownerAddress !== undefined && object.ownerAddress !== null) {
      message.ownerAddress = object.ownerAddress;
    } else {
      message.ownerAddress = "";
    }
    if (object.signers !== undefined && object.signers !== null) {
      for (const e of object.signers) {
        message.signers.push(_SetSignerParams.fromPartial(e));
      }
    }
    if (object.actorCount !== undefined && object.actorCount !== null) {
      message.actorCount = object.actorCount;
    } else {
      message.actorCount = 0;
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


