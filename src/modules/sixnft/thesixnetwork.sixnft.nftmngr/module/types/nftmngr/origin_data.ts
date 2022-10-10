/* eslint-disable */
import { AttributeDefinition } from "../nftmngr/attribute_definition";
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "thesixnetwork.sixnft.nftmngr";

export enum AttributeOverriding {
  ORIGIN = 0,
  CHAIN = 1,
  UNRECOGNIZED = -1,
}

export function attributeOverridingFromJSON(object: any): AttributeOverriding {
  switch (object) {
    case 0:
    case "ORIGIN":
      return AttributeOverriding.ORIGIN;
    case 1:
    case "CHAIN":
      return AttributeOverriding.CHAIN;
    case -1:
    case "UNRECOGNIZED":
    default:
      return AttributeOverriding.UNRECOGNIZED;
  }
}

export function attributeOverridingToJSON(object: AttributeOverriding): string {
  switch (object) {
    case AttributeOverriding.ORIGIN:
      return "ORIGIN";
    case AttributeOverriding.CHAIN:
      return "CHAIN";
    default:
      return "UNKNOWN";
  }
}

export enum URIRetrievalMethod {
  BASE = 0,
  TOKEN = 1,
  UNRECOGNIZED = -1,
}

export function uRIRetrievalMethodFromJSON(object: any): URIRetrievalMethod {
  switch (object) {
    case 0:
    case "BASE":
      return URIRetrievalMethod.BASE;
    case 1:
    case "TOKEN":
      return URIRetrievalMethod.TOKEN;
    case -1:
    case "UNRECOGNIZED":
    default:
      return URIRetrievalMethod.UNRECOGNIZED;
  }
}

export function uRIRetrievalMethodToJSON(object: URIRetrievalMethod): string {
  switch (object) {
    case URIRetrievalMethod.BASE:
      return "BASE";
    case URIRetrievalMethod.TOKEN:
      return "TOKEN";
    default:
      return "UNKNOWN";
  }
}

export interface OriginData {
  origin_chain: string;
  origin_contract_address: string;
  origin_base_uri: string;
  attribute_overriding: AttributeOverriding;
  metadata_format: string;
  origin_attributes: AttributeDefinition[];
  uri_retrieval_method: URIRetrievalMethod;
}

const baseOriginData: object = {
  origin_chain: "",
  origin_contract_address: "",
  origin_base_uri: "",
  attribute_overriding: 0,
  metadata_format: "",
  uri_retrieval_method: 0,
};

export const OriginData = {
  encode(message: OriginData, writer: Writer = Writer.create()): Writer {
    if (message.origin_chain !== "") {
      writer.uint32(10).string(message.origin_chain);
    }
    if (message.origin_contract_address !== "") {
      writer.uint32(18).string(message.origin_contract_address);
    }
    if (message.origin_base_uri !== "") {
      writer.uint32(26).string(message.origin_base_uri);
    }
    if (message.attribute_overriding !== 0) {
      writer.uint32(32).int32(message.attribute_overriding);
    }
    if (message.metadata_format !== "") {
      writer.uint32(42).string(message.metadata_format);
    }
    for (const v of message.origin_attributes) {
      AttributeDefinition.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    if (message.uri_retrieval_method !== 0) {
      writer.uint32(56).int32(message.uri_retrieval_method);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): OriginData {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseOriginData } as OriginData;
    message.origin_attributes = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.origin_chain = reader.string();
          break;
        case 2:
          message.origin_contract_address = reader.string();
          break;
        case 3:
          message.origin_base_uri = reader.string();
          break;
        case 4:
          message.attribute_overriding = reader.int32() as any;
          break;
        case 5:
          message.metadata_format = reader.string();
          break;
        case 6:
          message.origin_attributes.push(
            AttributeDefinition.decode(reader, reader.uint32())
          );
          break;
        case 7:
          message.uri_retrieval_method = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): OriginData {
    const message = { ...baseOriginData } as OriginData;
    message.origin_attributes = [];
    if (object.origin_chain !== undefined && object.origin_chain !== null) {
      message.origin_chain = String(object.origin_chain);
    } else {
      message.origin_chain = "";
    }
    if (
      object.origin_contract_address !== undefined &&
      object.origin_contract_address !== null
    ) {
      message.origin_contract_address = String(object.origin_contract_address);
    } else {
      message.origin_contract_address = "";
    }
    if (
      object.origin_base_uri !== undefined &&
      object.origin_base_uri !== null
    ) {
      message.origin_base_uri = String(object.origin_base_uri);
    } else {
      message.origin_base_uri = "";
    }
    if (
      object.attribute_overriding !== undefined &&
      object.attribute_overriding !== null
    ) {
      message.attribute_overriding = attributeOverridingFromJSON(
        object.attribute_overriding
      );
    } else {
      message.attribute_overriding = 0;
    }
    if (
      object.metadata_format !== undefined &&
      object.metadata_format !== null
    ) {
      message.metadata_format = String(object.metadata_format);
    } else {
      message.metadata_format = "";
    }
    if (
      object.origin_attributes !== undefined &&
      object.origin_attributes !== null
    ) {
      for (const e of object.origin_attributes) {
        message.origin_attributes.push(AttributeDefinition.fromJSON(e));
      }
    }
    if (
      object.uri_retrieval_method !== undefined &&
      object.uri_retrieval_method !== null
    ) {
      message.uri_retrieval_method = uRIRetrievalMethodFromJSON(
        object.uri_retrieval_method
      );
    } else {
      message.uri_retrieval_method = 0;
    }
    return message;
  },

  toJSON(message: OriginData): unknown {
    const obj: any = {};
    message.origin_chain !== undefined &&
      (obj.origin_chain = message.origin_chain);
    message.origin_contract_address !== undefined &&
      (obj.origin_contract_address = message.origin_contract_address);
    message.origin_base_uri !== undefined &&
      (obj.origin_base_uri = message.origin_base_uri);
    message.attribute_overriding !== undefined &&
      (obj.attribute_overriding = attributeOverridingToJSON(
        message.attribute_overriding
      ));
    message.metadata_format !== undefined &&
      (obj.metadata_format = message.metadata_format);
    if (message.origin_attributes) {
      obj.origin_attributes = message.origin_attributes.map((e) =>
        e ? AttributeDefinition.toJSON(e) : undefined
      );
    } else {
      obj.origin_attributes = [];
    }
    message.uri_retrieval_method !== undefined &&
      (obj.uri_retrieval_method = uRIRetrievalMethodToJSON(
        message.uri_retrieval_method
      ));
    return obj;
  },

  fromPartial(object: DeepPartial<OriginData>): OriginData {
    const message = { ...baseOriginData } as OriginData;
    message.origin_attributes = [];
    if (object.origin_chain !== undefined && object.origin_chain !== null) {
      message.origin_chain = object.origin_chain;
    } else {
      message.origin_chain = "";
    }
    if (
      object.origin_contract_address !== undefined &&
      object.origin_contract_address !== null
    ) {
      message.origin_contract_address = object.origin_contract_address;
    } else {
      message.origin_contract_address = "";
    }
    if (
      object.origin_base_uri !== undefined &&
      object.origin_base_uri !== null
    ) {
      message.origin_base_uri = object.origin_base_uri;
    } else {
      message.origin_base_uri = "";
    }
    if (
      object.attribute_overriding !== undefined &&
      object.attribute_overriding !== null
    ) {
      message.attribute_overriding = object.attribute_overriding;
    } else {
      message.attribute_overriding = 0;
    }
    if (
      object.metadata_format !== undefined &&
      object.metadata_format !== null
    ) {
      message.metadata_format = object.metadata_format;
    } else {
      message.metadata_format = "";
    }
    if (
      object.origin_attributes !== undefined &&
      object.origin_attributes !== null
    ) {
      for (const e of object.origin_attributes) {
        message.origin_attributes.push(AttributeDefinition.fromPartial(e));
      }
    }
    if (
      object.uri_retrieval_method !== undefined &&
      object.uri_retrieval_method !== null
    ) {
      message.uri_retrieval_method = object.uri_retrieval_method;
    } else {
      message.uri_retrieval_method = 0;
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
