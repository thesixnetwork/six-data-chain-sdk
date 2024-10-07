/* eslint-disable */
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "thesixnetwork.sixnft.nftmngr";

export interface ActionExecutor {
  nftSchemaCode: string;
  executorAddress: string;
  creator: string;
}

export interface ActionExecutorBySchema {
  nftSchemaCode: string;
  executorAddress: string[];
}

const baseActionExecutor: object = {
  nftSchemaCode: "",
  executorAddress: "",
  creator: "",
};

export const ActionExecutor = {
  encode(message: ActionExecutor, writer: Writer = Writer.create()): Writer {
    if (message.nftSchemaCode !== "") {
      writer.uint32(10).string(message.nftSchemaCode);
    }
    if (message.executorAddress !== "") {
      writer.uint32(18).string(message.executorAddress);
    }
    if (message.creator !== "") {
      writer.uint32(26).string(message.creator);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): ActionExecutor {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseActionExecutor } as ActionExecutor;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nftSchemaCode = reader.string();
          break;
        case 2:
          message.executorAddress = reader.string();
          break;
        case 3:
          message.creator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ActionExecutor {
    const message = { ...baseActionExecutor } as ActionExecutor;
    if (object.nftSchemaCode !== undefined && object.nftSchemaCode !== null) {
      message.nftSchemaCode = String(object.nftSchemaCode);
    } else {
      message.nftSchemaCode = "";
    }
    if (
      object.executorAddress !== undefined &&
      object.executorAddress !== null
    ) {
      message.executorAddress = String(object.executorAddress);
    } else {
      message.executorAddress = "";
    }
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    return message;
  },

  toJSON(message: ActionExecutor): unknown {
    const obj: any = {};
    message.nftSchemaCode !== undefined &&
      (obj.nftSchemaCode = message.nftSchemaCode);
    message.executorAddress !== undefined &&
      (obj.executorAddress = message.executorAddress);
    message.creator !== undefined && (obj.creator = message.creator);
    return obj;
  },

  fromPartial(object: DeepPartial<ActionExecutor>): ActionExecutor {
    const message = { ...baseActionExecutor } as ActionExecutor;
    if (object.nftSchemaCode !== undefined && object.nftSchemaCode !== null) {
      message.nftSchemaCode = object.nftSchemaCode;
    } else {
      message.nftSchemaCode = "";
    }
    if (
      object.executorAddress !== undefined &&
      object.executorAddress !== null
    ) {
      message.executorAddress = object.executorAddress;
    } else {
      message.executorAddress = "";
    }
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    return message;
  },
};

const baseActionExecutorBySchema: object = {
  nftSchemaCode: "",
  executorAddress: "",
};

export const ActionExecutorBySchema = {
  encode(
    message: ActionExecutorBySchema,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.nftSchemaCode !== "") {
      writer.uint32(10).string(message.nftSchemaCode);
    }
    for (const v of message.executorAddress) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): ActionExecutorBySchema {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseActionExecutorBySchema } as ActionExecutorBySchema;
    message.executorAddress = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nftSchemaCode = reader.string();
          break;
        case 2:
          message.executorAddress.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ActionExecutorBySchema {
    const message = { ...baseActionExecutorBySchema } as ActionExecutorBySchema;
    message.executorAddress = [];
    if (object.nftSchemaCode !== undefined && object.nftSchemaCode !== null) {
      message.nftSchemaCode = String(object.nftSchemaCode);
    } else {
      message.nftSchemaCode = "";
    }
    if (
      object.executorAddress !== undefined &&
      object.executorAddress !== null
    ) {
      for (const e of object.executorAddress) {
        message.executorAddress.push(String(e));
      }
    }
    return message;
  },

  toJSON(message: ActionExecutorBySchema): unknown {
    const obj: any = {};
    message.nftSchemaCode !== undefined &&
      (obj.nftSchemaCode = message.nftSchemaCode);
    if (message.executorAddress) {
      obj.executorAddress = message.executorAddress.map((e) => e);
    } else {
      obj.executorAddress = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<ActionExecutorBySchema>
  ): ActionExecutorBySchema {
    const message = { ...baseActionExecutorBySchema } as ActionExecutorBySchema;
    message.executorAddress = [];
    if (object.nftSchemaCode !== undefined && object.nftSchemaCode !== null) {
      message.nftSchemaCode = object.nftSchemaCode;
    } else {
      message.nftSchemaCode = "";
    }
    if (
      object.executorAddress !== undefined &&
      object.executorAddress !== null
    ) {
      for (const e of object.executorAddress) {
        message.executorAddress.push(e);
      }
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
