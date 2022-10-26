/* eslint-disable */
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "thesixnetwork.sixnft.nftmngr";

export interface NFTFeeBalance {
  fee_balances: { [key: number]: string };
}

export interface NFTFeeBalance_FeeBalancesEntry {
  key: number;
  value: string;
}

const baseNFTFeeBalance: object = {};

export const NFTFeeBalance = {
  encode(message: NFTFeeBalance, writer: Writer = Writer.create()): Writer {
    Object.entries(message.fee_balances).forEach(([key, value]) => {
      NFTFeeBalance_FeeBalancesEntry.encode(
        { key: key as any, value },
        writer.uint32(10).fork()
      ).ldelim();
    });
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): NFTFeeBalance {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseNFTFeeBalance } as NFTFeeBalance;
    message.fee_balances = {};
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          const entry1 = NFTFeeBalance_FeeBalancesEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry1.value !== undefined) {
            message.fee_balances[entry1.key] = entry1.value;
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): NFTFeeBalance {
    const message = { ...baseNFTFeeBalance } as NFTFeeBalance;
    message.fee_balances = {};
    if (object.fee_balances !== undefined && object.fee_balances !== null) {
      Object.entries(object.fee_balances).forEach(([key, value]) => {
        message.fee_balances[Number(key)] = String(value);
      });
    }
    return message;
  },

  toJSON(message: NFTFeeBalance): unknown {
    const obj: any = {};
    obj.fee_balances = {};
    if (message.fee_balances) {
      Object.entries(message.fee_balances).forEach(([k, v]) => {
        obj.fee_balances[k] = v;
      });
    }
    return obj;
  },

  fromPartial(object: DeepPartial<NFTFeeBalance>): NFTFeeBalance {
    const message = { ...baseNFTFeeBalance } as NFTFeeBalance;
    message.fee_balances = {};
    if (object.fee_balances !== undefined && object.fee_balances !== null) {
      Object.entries(object.fee_balances).forEach(([key, value]) => {
        if (value !== undefined) {
          message.fee_balances[Number(key)] = String(value);
        }
      });
    }
    return message;
  },
};

const baseNFTFeeBalance_FeeBalancesEntry: object = { key: 0, value: "" };

export const NFTFeeBalance_FeeBalancesEntry = {
  encode(
    message: NFTFeeBalance_FeeBalancesEntry,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.key !== 0) {
      writer.uint32(8).int32(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): NFTFeeBalance_FeeBalancesEntry {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseNFTFeeBalance_FeeBalancesEntry,
    } as NFTFeeBalance_FeeBalancesEntry;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.int32();
          break;
        case 2:
          message.value = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): NFTFeeBalance_FeeBalancesEntry {
    const message = {
      ...baseNFTFeeBalance_FeeBalancesEntry,
    } as NFTFeeBalance_FeeBalancesEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = Number(object.key);
    } else {
      message.key = 0;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = String(object.value);
    } else {
      message.value = "";
    }
    return message;
  },

  toJSON(message: NFTFeeBalance_FeeBalancesEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial(
    object: DeepPartial<NFTFeeBalance_FeeBalancesEntry>
  ): NFTFeeBalance_FeeBalancesEntry {
    const message = {
      ...baseNFTFeeBalance_FeeBalancesEntry,
    } as NFTFeeBalance_FeeBalancesEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    } else {
      message.key = 0;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    } else {
      message.value = "";
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
