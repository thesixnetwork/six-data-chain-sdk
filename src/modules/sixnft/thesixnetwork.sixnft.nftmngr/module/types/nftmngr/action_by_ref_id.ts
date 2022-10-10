/* eslint-disable */
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "thesixnetwork.sixnft.nftmngr";

export interface ActionByRefId {
  refId: string;
  creator: string;
  nftSchemaCode: string;
  tokenId: string;
  action: string;
}

const baseActionByRefId: object = {
  refId: "",
  creator: "",
  nftSchemaCode: "",
  tokenId: "",
  action: "",
};

export const ActionByRefId = {
  encode(message: ActionByRefId, writer: Writer = Writer.create()): Writer {
    if (message.refId !== "") {
      writer.uint32(10).string(message.refId);
    }
    if (message.creator !== "") {
      writer.uint32(18).string(message.creator);
    }
    if (message.nftSchemaCode !== "") {
      writer.uint32(26).string(message.nftSchemaCode);
    }
    if (message.tokenId !== "") {
      writer.uint32(34).string(message.tokenId);
    }
    if (message.action !== "") {
      writer.uint32(42).string(message.action);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): ActionByRefId {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseActionByRefId } as ActionByRefId;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.refId = reader.string();
          break;
        case 2:
          message.creator = reader.string();
          break;
        case 3:
          message.nftSchemaCode = reader.string();
          break;
        case 4:
          message.tokenId = reader.string();
          break;
        case 5:
          message.action = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ActionByRefId {
    const message = { ...baseActionByRefId } as ActionByRefId;
    if (object.refId !== undefined && object.refId !== null) {
      message.refId = String(object.refId);
    } else {
      message.refId = "";
    }
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.nftSchemaCode !== undefined && object.nftSchemaCode !== null) {
      message.nftSchemaCode = String(object.nftSchemaCode);
    } else {
      message.nftSchemaCode = "";
    }
    if (object.tokenId !== undefined && object.tokenId !== null) {
      message.tokenId = String(object.tokenId);
    } else {
      message.tokenId = "";
    }
    if (object.action !== undefined && object.action !== null) {
      message.action = String(object.action);
    } else {
      message.action = "";
    }
    return message;
  },

  toJSON(message: ActionByRefId): unknown {
    const obj: any = {};
    message.refId !== undefined && (obj.refId = message.refId);
    message.creator !== undefined && (obj.creator = message.creator);
    message.nftSchemaCode !== undefined &&
      (obj.nftSchemaCode = message.nftSchemaCode);
    message.tokenId !== undefined && (obj.tokenId = message.tokenId);
    message.action !== undefined && (obj.action = message.action);
    return obj;
  },

  fromPartial(object: DeepPartial<ActionByRefId>): ActionByRefId {
    const message = { ...baseActionByRefId } as ActionByRefId;
    if (object.refId !== undefined && object.refId !== null) {
      message.refId = object.refId;
    } else {
      message.refId = "";
    }
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.nftSchemaCode !== undefined && object.nftSchemaCode !== null) {
      message.nftSchemaCode = object.nftSchemaCode;
    } else {
      message.nftSchemaCode = "";
    }
    if (object.tokenId !== undefined && object.tokenId !== null) {
      message.tokenId = object.tokenId;
    } else {
      message.tokenId = "";
    }
    if (object.action !== undefined && object.action !== null) {
      message.action = object.action;
    } else {
      message.action = "";
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
