/* eslint-disable */
import { OriginData } from "../nftmngr/origin_data";
import { OnChainData } from "../nftmngr/on_chain_data";
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "thesixnetwork.sixnft.nftmngr";

export interface NFTSchema {
  code: string;
  name: string;
  owner: string;
  system_actioners: string[];
  origin_data: OriginData | undefined;
  onchain_data: OnChainData | undefined;
  isVerified: boolean;
}

const baseNFTSchema: object = {
  code: "",
  name: "",
  owner: "",
  system_actioners: "",
  isVerified: false,
};

export const NFTSchema = {
  encode(message: NFTSchema, writer: Writer = Writer.create()): Writer {
    if (message.code !== "") {
      writer.uint32(10).string(message.code);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.owner !== "") {
      writer.uint32(26).string(message.owner);
    }
    for (const v of message.system_actioners) {
      writer.uint32(34).string(v!);
    }
    if (message.origin_data !== undefined) {
      OriginData.encode(message.origin_data, writer.uint32(42).fork()).ldelim();
    }
    if (message.onchain_data !== undefined) {
      OnChainData.encode(
        message.onchain_data,
        writer.uint32(50).fork()
      ).ldelim();
    }
    if (message.isVerified === true) {
      writer.uint32(56).bool(message.isVerified);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): NFTSchema {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseNFTSchema } as NFTSchema;
    message.system_actioners = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.code = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.owner = reader.string();
          break;
        case 4:
          message.system_actioners.push(reader.string());
          break;
        case 5:
          message.origin_data = OriginData.decode(reader, reader.uint32());
          break;
        case 6:
          message.onchain_data = OnChainData.decode(reader, reader.uint32());
          break;
        case 7:
          message.isVerified = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): NFTSchema {
    const message = { ...baseNFTSchema } as NFTSchema;
    message.system_actioners = [];
    if (object.code !== undefined && object.code !== null) {
      message.code = String(object.code);
    } else {
      message.code = "";
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = String(object.owner);
    } else {
      message.owner = "";
    }
    if (
      object.system_actioners !== undefined &&
      object.system_actioners !== null
    ) {
      for (const e of object.system_actioners) {
        message.system_actioners.push(String(e));
      }
    }
    if (object.origin_data !== undefined && object.origin_data !== null) {
      message.origin_data = OriginData.fromJSON(object.origin_data);
    } else {
      message.origin_data = undefined;
    }
    if (object.onchain_data !== undefined && object.onchain_data !== null) {
      message.onchain_data = OnChainData.fromJSON(object.onchain_data);
    } else {
      message.onchain_data = undefined;
    }
    if (object.isVerified !== undefined && object.isVerified !== null) {
      message.isVerified = Boolean(object.isVerified);
    } else {
      message.isVerified = false;
    }
    return message;
  },

  toJSON(message: NFTSchema): unknown {
    const obj: any = {};
    message.code !== undefined && (obj.code = message.code);
    message.name !== undefined && (obj.name = message.name);
    message.owner !== undefined && (obj.owner = message.owner);
    if (message.system_actioners) {
      obj.system_actioners = message.system_actioners.map((e) => e);
    } else {
      obj.system_actioners = [];
    }
    message.origin_data !== undefined &&
      (obj.origin_data = message.origin_data
        ? OriginData.toJSON(message.origin_data)
        : undefined);
    message.onchain_data !== undefined &&
      (obj.onchain_data = message.onchain_data
        ? OnChainData.toJSON(message.onchain_data)
        : undefined);
    message.isVerified !== undefined && (obj.isVerified = message.isVerified);
    return obj;
  },

  fromPartial(object: DeepPartial<NFTSchema>): NFTSchema {
    const message = { ...baseNFTSchema } as NFTSchema;
    message.system_actioners = [];
    if (object.code !== undefined && object.code !== null) {
      message.code = object.code;
    } else {
      message.code = "";
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    } else {
      message.owner = "";
    }
    if (
      object.system_actioners !== undefined &&
      object.system_actioners !== null
    ) {
      for (const e of object.system_actioners) {
        message.system_actioners.push(e);
      }
    }
    if (object.origin_data !== undefined && object.origin_data !== null) {
      message.origin_data = OriginData.fromPartial(object.origin_data);
    } else {
      message.origin_data = undefined;
    }
    if (object.onchain_data !== undefined && object.onchain_data !== null) {
      message.onchain_data = OnChainData.fromPartial(object.onchain_data);
    } else {
      message.onchain_data = undefined;
    }
    if (object.isVerified !== undefined && object.isVerified !== null) {
      message.isVerified = object.isVerified;
    } else {
      message.isVerified = false;
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
