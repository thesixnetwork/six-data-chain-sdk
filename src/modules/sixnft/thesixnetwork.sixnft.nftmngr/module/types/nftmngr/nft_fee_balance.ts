/* eslint-disable */
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "thesixnetwork.sixnft.nftmngr";

export interface NFTFeeBalance {
  /** map<int32, string> fee_balances = 1; */
  fee_balances: string[];
}

const baseNFTFeeBalance: object = { fee_balances: "" };

export const NFTFeeBalance = {
  encode(message: NFTFeeBalance, writer: Writer = Writer.create()): Writer {
    for (const v of message.fee_balances) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): NFTFeeBalance {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseNFTFeeBalance } as NFTFeeBalance;
    message.fee_balances = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fee_balances.push(reader.string());
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
    message.fee_balances = [];
    if (object.fee_balances !== undefined && object.fee_balances !== null) {
      for (const e of object.fee_balances) {
        message.fee_balances.push(String(e));
      }
    }
    return message;
  },

  toJSON(message: NFTFeeBalance): unknown {
    const obj: any = {};
    if (message.fee_balances) {
      obj.fee_balances = message.fee_balances.map((e) => e);
    } else {
      obj.fee_balances = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<NFTFeeBalance>): NFTFeeBalance {
    const message = { ...baseNFTFeeBalance } as NFTFeeBalance;
    message.fee_balances = [];
    if (object.fee_balances !== undefined && object.fee_balances !== null) {
      for (const e of object.fee_balances) {
        message.fee_balances.push(e);
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
