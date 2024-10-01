/* eslint-disable */
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "thesixnetwork.sixnft.nftmngr";

export interface MapTokenToMinter {
  token_id: string;
  minter: string;
}

export interface MetadataCreator {
  nftSchemaCode: string;
  metadataMintedBy: MapTokenToMinter[];
}

const baseMapTokenToMinter: object = { token_id: "", minter: "" };

export const MapTokenToMinter = {
  encode(message: MapTokenToMinter, writer: Writer = Writer.create()): Writer {
    if (message.token_id !== "") {
      writer.uint32(10).string(message.token_id);
    }
    if (message.minter !== "") {
      writer.uint32(18).string(message.minter);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MapTokenToMinter {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMapTokenToMinter } as MapTokenToMinter;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.token_id = reader.string();
          break;
        case 2:
          message.minter = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MapTokenToMinter {
    const message = { ...baseMapTokenToMinter } as MapTokenToMinter;
    if (object.token_id !== undefined && object.token_id !== null) {
      message.token_id = String(object.token_id);
    } else {
      message.token_id = "";
    }
    if (object.minter !== undefined && object.minter !== null) {
      message.minter = String(object.minter);
    } else {
      message.minter = "";
    }
    return message;
  },

  toJSON(message: MapTokenToMinter): unknown {
    const obj: any = {};
    message.token_id !== undefined && (obj.token_id = message.token_id);
    message.minter !== undefined && (obj.minter = message.minter);
    return obj;
  },

  fromPartial(object: DeepPartial<MapTokenToMinter>): MapTokenToMinter {
    const message = { ...baseMapTokenToMinter } as MapTokenToMinter;
    if (object.token_id !== undefined && object.token_id !== null) {
      message.token_id = object.token_id;
    } else {
      message.token_id = "";
    }
    if (object.minter !== undefined && object.minter !== null) {
      message.minter = object.minter;
    } else {
      message.minter = "";
    }
    return message;
  },
};

const baseMetadataCreator: object = { nftSchemaCode: "" };

export const MetadataCreator = {
  encode(message: MetadataCreator, writer: Writer = Writer.create()): Writer {
    if (message.nftSchemaCode !== "") {
      writer.uint32(10).string(message.nftSchemaCode);
    }
    for (const v of message.metadataMintedBy) {
      MapTokenToMinter.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MetadataCreator {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMetadataCreator } as MetadataCreator;
    message.metadataMintedBy = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nftSchemaCode = reader.string();
          break;
        case 2:
          message.metadataMintedBy.push(
            MapTokenToMinter.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MetadataCreator {
    const message = { ...baseMetadataCreator } as MetadataCreator;
    message.metadataMintedBy = [];
    if (object.nftSchemaCode !== undefined && object.nftSchemaCode !== null) {
      message.nftSchemaCode = String(object.nftSchemaCode);
    } else {
      message.nftSchemaCode = "";
    }
    if (
      object.metadataMintedBy !== undefined &&
      object.metadataMintedBy !== null
    ) {
      for (const e of object.metadataMintedBy) {
        message.metadataMintedBy.push(MapTokenToMinter.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: MetadataCreator): unknown {
    const obj: any = {};
    message.nftSchemaCode !== undefined &&
      (obj.nftSchemaCode = message.nftSchemaCode);
    if (message.metadataMintedBy) {
      obj.metadataMintedBy = message.metadataMintedBy.map((e) =>
        e ? MapTokenToMinter.toJSON(e) : undefined
      );
    } else {
      obj.metadataMintedBy = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<MetadataCreator>): MetadataCreator {
    const message = { ...baseMetadataCreator } as MetadataCreator;
    message.metadataMintedBy = [];
    if (object.nftSchemaCode !== undefined && object.nftSchemaCode !== null) {
      message.nftSchemaCode = object.nftSchemaCode;
    } else {
      message.nftSchemaCode = "";
    }
    if (
      object.metadataMintedBy !== undefined &&
      object.metadataMintedBy !== null
    ) {
      for (const e of object.metadataMintedBy) {
        message.metadataMintedBy.push(MapTokenToMinter.fromPartial(e));
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
