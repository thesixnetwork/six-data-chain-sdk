/* eslint-disable */
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "thesixnetwork.sixnft.nftmngr";

export interface ExecutorOfSchema {
  nftSchemaCode: string;
  executorAddress: string[];
}

const baseExecutorOfSchema: object = { nftSchemaCode: "", executorAddress: "" };

export const ExecutorOfSchema = {
  encode(message: ExecutorOfSchema, writer: Writer = Writer.create()): Writer {
    if (message.nftSchemaCode !== "") {
      writer.uint32(10).string(message.nftSchemaCode);
    }
    for (const v of message.executorAddress) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): ExecutorOfSchema {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseExecutorOfSchema } as ExecutorOfSchema;
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

  fromJSON(object: any): ExecutorOfSchema {
    const message = { ...baseExecutorOfSchema } as ExecutorOfSchema;
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

  toJSON(message: ExecutorOfSchema): unknown {
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

  fromPartial(object: DeepPartial<ExecutorOfSchema>): ExecutorOfSchema {
    const message = { ...baseExecutorOfSchema } as ExecutorOfSchema;
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
