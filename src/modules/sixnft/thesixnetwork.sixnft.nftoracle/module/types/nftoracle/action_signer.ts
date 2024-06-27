/* eslint-disable */
import { Timestamp } from "../google/protobuf/timestamp";
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "thesixnetwork.sixnft.nftoracle";

export enum CreationFlow {
  ORACLE = 0,
  INTERNAL_OWNER = 1,
  UNRECOGNIZED = -1,
}

export function creationFlowFromJSON(object: any): CreationFlow {
  switch (object) {
    case 0:
    case "ORACLE":
      return CreationFlow.ORACLE;
    case 1:
    case "INTERNAL_OWNER":
      return CreationFlow.INTERNAL_OWNER;
    case -1:
    case "UNRECOGNIZED":
    default:
      return CreationFlow.UNRECOGNIZED;
  }
}

export function creationFlowToJSON(object: CreationFlow): string {
  switch (object) {
    case CreationFlow.ORACLE:
      return "ORACLE";
    case CreationFlow.INTERNAL_OWNER:
      return "INTERNAL_OWNER";
    default:
      return "UNKNOWN";
  }
}

export interface ActionSigner {
  actor_address: string;
  owner_address: string;
  created_at: Date | undefined;
  expired_at: Date | undefined;
  creator: string;
  creation_flow: CreationFlow;
}

export interface SetSignerSignature {
  signature: string;
  message: string;
}

export interface SetSignerParams {
  owner_address: string;
  actor_address: string;
  expired_at: Date | undefined;
}

const baseActionSigner: object = {
  actor_address: "",
  owner_address: "",
  creator: "",
  creation_flow: 0,
};

export const ActionSigner = {
  encode(message: ActionSigner, writer: Writer = Writer.create()): Writer {
    if (message.actor_address !== "") {
      writer.uint32(10).string(message.actor_address);
    }
    if (message.owner_address !== "") {
      writer.uint32(18).string(message.owner_address);
    }
    if (message.created_at !== undefined) {
      Timestamp.encode(
        toTimestamp(message.created_at),
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.expired_at !== undefined) {
      Timestamp.encode(
        toTimestamp(message.expired_at),
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (message.creator !== "") {
      writer.uint32(42).string(message.creator);
    }
    if (message.creation_flow !== 0) {
      writer.uint32(48).int32(message.creation_flow);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): ActionSigner {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseActionSigner } as ActionSigner;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.actor_address = reader.string();
          break;
        case 2:
          message.owner_address = reader.string();
          break;
        case 3:
          message.created_at = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 4:
          message.expired_at = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 5:
          message.creator = reader.string();
          break;
        case 6:
          message.creation_flow = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ActionSigner {
    const message = { ...baseActionSigner } as ActionSigner;
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
    if (object.created_at !== undefined && object.created_at !== null) {
      message.created_at = fromJsonTimestamp(object.created_at);
    } else {
      message.created_at = undefined;
    }
    if (object.expired_at !== undefined && object.expired_at !== null) {
      message.expired_at = fromJsonTimestamp(object.expired_at);
    } else {
      message.expired_at = undefined;
    }
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.creation_flow !== undefined && object.creation_flow !== null) {
      message.creation_flow = creationFlowFromJSON(object.creation_flow);
    } else {
      message.creation_flow = 0;
    }
    return message;
  },

  toJSON(message: ActionSigner): unknown {
    const obj: any = {};
    message.actor_address !== undefined &&
      (obj.actor_address = message.actor_address);
    message.owner_address !== undefined &&
      (obj.owner_address = message.owner_address);
    message.created_at !== undefined &&
      (obj.created_at =
        message.created_at !== undefined
          ? message.created_at.toISOString()
          : null);
    message.expired_at !== undefined &&
      (obj.expired_at =
        message.expired_at !== undefined
          ? message.expired_at.toISOString()
          : null);
    message.creator !== undefined && (obj.creator = message.creator);
    message.creation_flow !== undefined &&
      (obj.creation_flow = creationFlowToJSON(message.creation_flow));
    return obj;
  },

  fromPartial(object: DeepPartial<ActionSigner>): ActionSigner {
    const message = { ...baseActionSigner } as ActionSigner;
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
    if (object.created_at !== undefined && object.created_at !== null) {
      message.created_at = object.created_at;
    } else {
      message.created_at = undefined;
    }
    if (object.expired_at !== undefined && object.expired_at !== null) {
      message.expired_at = object.expired_at;
    } else {
      message.expired_at = undefined;
    }
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.creation_flow !== undefined && object.creation_flow !== null) {
      message.creation_flow = object.creation_flow;
    } else {
      message.creation_flow = 0;
    }
    return message;
  },
};

const baseSetSignerSignature: object = { signature: "", message: "" };

export const SetSignerSignature = {
  encode(
    message: SetSignerSignature,
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

  decode(input: Reader | Uint8Array, length?: number): SetSignerSignature {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseSetSignerSignature } as SetSignerSignature;
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

  fromJSON(object: any): SetSignerSignature {
    const message = { ...baseSetSignerSignature } as SetSignerSignature;
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

  toJSON(message: SetSignerSignature): unknown {
    const obj: any = {};
    message.signature !== undefined && (obj.signature = message.signature);
    message.message !== undefined && (obj.message = message.message);
    return obj;
  },

  fromPartial(object: DeepPartial<SetSignerSignature>): SetSignerSignature {
    const message = { ...baseSetSignerSignature } as SetSignerSignature;
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

const baseSetSignerParams: object = { owner_address: "", actor_address: "" };

export const SetSignerParams = {
  encode(message: SetSignerParams, writer: Writer = Writer.create()): Writer {
    if (message.owner_address !== "") {
      writer.uint32(10).string(message.owner_address);
    }
    if (message.actor_address !== "") {
      writer.uint32(18).string(message.actor_address);
    }
    if (message.expired_at !== undefined) {
      Timestamp.encode(
        toTimestamp(message.expired_at),
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): SetSignerParams {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseSetSignerParams } as SetSignerParams;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner_address = reader.string();
          break;
        case 2:
          message.actor_address = reader.string();
          break;
        case 3:
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

  fromJSON(object: any): SetSignerParams {
    const message = { ...baseSetSignerParams } as SetSignerParams;
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
    if (object.expired_at !== undefined && object.expired_at !== null) {
      message.expired_at = fromJsonTimestamp(object.expired_at);
    } else {
      message.expired_at = undefined;
    }
    return message;
  },

  toJSON(message: SetSignerParams): unknown {
    const obj: any = {};
    message.owner_address !== undefined &&
      (obj.owner_address = message.owner_address);
    message.actor_address !== undefined &&
      (obj.actor_address = message.actor_address);
    message.expired_at !== undefined &&
      (obj.expired_at =
        message.expired_at !== undefined
          ? message.expired_at.toISOString()
          : null);
    return obj;
  },

  fromPartial(object: DeepPartial<SetSignerParams>): SetSignerParams {
    const message = { ...baseSetSignerParams } as SetSignerParams;
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
    if (object.expired_at !== undefined && object.expired_at !== null) {
      message.expired_at = object.expired_at;
    } else {
      message.expired_at = undefined;
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
