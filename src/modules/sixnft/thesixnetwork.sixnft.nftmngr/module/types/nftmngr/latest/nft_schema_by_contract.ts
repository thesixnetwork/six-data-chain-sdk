/* eslint-disable */
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "thesixnetwork.sixnft.nftmngr";

export interface NFTSchemaByContract {
  originContractAddress: string;
  schemaCodes: string[];
}

const baseNFTSchemaByContract: object = {
  originContractAddress: "",
  schemaCodes: "",
};

export const NFTSchemaByContract = {
  encode(
    message: NFTSchemaByContract,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.originContractAddress !== "") {
      writer.uint32(10).string(message.originContractAddress);
    }
    for (const v of message.schemaCodes) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): NFTSchemaByContract {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseNFTSchemaByContract } as NFTSchemaByContract;
    message.schemaCodes = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.originContractAddress = reader.string();
          break;
        case 2:
          message.schemaCodes.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): NFTSchemaByContract {
    const message = { ...baseNFTSchemaByContract } as NFTSchemaByContract;
    message.schemaCodes = [];
    if (
      object.originContractAddress !== undefined &&
      object.originContractAddress !== null
    ) {
      message.originContractAddress = String(object.originContractAddress);
    } else {
      message.originContractAddress = "";
    }
    if (object.schemaCodes !== undefined && object.schemaCodes !== null) {
      for (const e of object.schemaCodes) {
        message.schemaCodes.push(String(e));
      }
    }
    return message;
  },

  toJSON(message: NFTSchemaByContract): unknown {
    const obj: any = {};
    message.originContractAddress !== undefined &&
      (obj.originContractAddress = message.originContractAddress);
    if (message.schemaCodes) {
      obj.schemaCodes = message.schemaCodes.map((e) => e);
    } else {
      obj.schemaCodes = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<NFTSchemaByContract>): NFTSchemaByContract {
    const message = { ...baseNFTSchemaByContract } as NFTSchemaByContract;
    message.schemaCodes = [];
    if (
      object.originContractAddress !== undefined &&
      object.originContractAddress !== null
    ) {
      message.originContractAddress = object.originContractAddress;
    } else {
      message.originContractAddress = "";
    }
    if (object.schemaCodes !== undefined && object.schemaCodes !== null) {
      for (const e of object.schemaCodes) {
        message.schemaCodes.push(e);
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
