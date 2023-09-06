/* eslint-disable */
import { SchemaAttribute } from "../nftmngr/schema_attribute";
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "thesixnetwork.sixnft.nftmngr";

export interface AttributeOfSchema {
  nftSchemaCode: string;
  schemaAttributes: SchemaAttribute[];
}

const baseAttributeOfSchema: object = { nftSchemaCode: "" };

export const AttributeOfSchema = {
  encode(message: AttributeOfSchema, writer: Writer = Writer.create()): Writer {
    if (message.nftSchemaCode !== "") {
      writer.uint32(10).string(message.nftSchemaCode);
    }
    for (const v of message.schemaAttributes) {
      SchemaAttribute.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): AttributeOfSchema {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseAttributeOfSchema } as AttributeOfSchema;
    message.schemaAttributes = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nftSchemaCode = reader.string();
          break;
        case 2:
          message.schemaAttributes.push(
            SchemaAttribute.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AttributeOfSchema {
    const message = { ...baseAttributeOfSchema } as AttributeOfSchema;
    message.schemaAttributes = [];
    if (object.nftSchemaCode !== undefined && object.nftSchemaCode !== null) {
      message.nftSchemaCode = String(object.nftSchemaCode);
    } else {
      message.nftSchemaCode = "";
    }
    if (
      object.schemaAttributes !== undefined &&
      object.schemaAttributes !== null
    ) {
      for (const e of object.schemaAttributes) {
        message.schemaAttributes.push(SchemaAttribute.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: AttributeOfSchema): unknown {
    const obj: any = {};
    message.nftSchemaCode !== undefined &&
      (obj.nftSchemaCode = message.nftSchemaCode);
    if (message.schemaAttributes) {
      obj.schemaAttributes = message.schemaAttributes.map((e) =>
        e ? SchemaAttribute.toJSON(e) : undefined
      );
    } else {
      obj.schemaAttributes = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<AttributeOfSchema>): AttributeOfSchema {
    const message = { ...baseAttributeOfSchema } as AttributeOfSchema;
    message.schemaAttributes = [];
    if (object.nftSchemaCode !== undefined && object.nftSchemaCode !== null) {
      message.nftSchemaCode = object.nftSchemaCode;
    } else {
      message.nftSchemaCode = "";
    }
    if (
      object.schemaAttributes !== undefined &&
      object.schemaAttributes !== null
    ) {
      for (const e of object.schemaAttributes) {
        message.schemaAttributes.push(SchemaAttribute.fromPartial(e));
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
