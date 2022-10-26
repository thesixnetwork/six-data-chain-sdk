/* eslint-disable */
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "thesixnetwork.sixnft.nftmngr";

export enum FeeDistributionMethod {
  BURN = 0,
  REWARD_POOL = 1,
  TRANSFER = 2,
  UNRECOGNIZED = -1,
}

export function feeDistributionMethodFromJSON(
  object: any
): FeeDistributionMethod {
  switch (object) {
    case 0:
    case "BURN":
      return FeeDistributionMethod.BURN;
    case 1:
    case "REWARD_POOL":
      return FeeDistributionMethod.REWARD_POOL;
    case 2:
    case "TRANSFER":
      return FeeDistributionMethod.TRANSFER;
    case -1:
    case "UNRECOGNIZED":
    default:
      return FeeDistributionMethod.UNRECOGNIZED;
  }
}

export function feeDistributionMethodToJSON(
  object: FeeDistributionMethod
): string {
  switch (object) {
    case FeeDistributionMethod.BURN:
      return "BURN";
    case FeeDistributionMethod.REWARD_POOL:
      return "REWARD_POOL";
    case FeeDistributionMethod.TRANSFER:
      return "TRANSFER";
    default:
      return "UNKNOWN";
  }
}

export interface FeeDistribution {
  method: FeeDistributionMethod;
  portion: number;
}

export interface FeeConfig {
  fee_amount: string;
  fee_distributions: FeeDistribution[];
}

export interface NFTFeeConfig {
  schema_fee: FeeConfig | undefined;
}

const baseFeeDistribution: object = { method: 0, portion: 0 };

export const FeeDistribution = {
  encode(message: FeeDistribution, writer: Writer = Writer.create()): Writer {
    if (message.method !== 0) {
      writer.uint32(8).int32(message.method);
    }
    if (message.portion !== 0) {
      writer.uint32(21).float(message.portion);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): FeeDistribution {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseFeeDistribution } as FeeDistribution;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.method = reader.int32() as any;
          break;
        case 2:
          message.portion = reader.float();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): FeeDistribution {
    const message = { ...baseFeeDistribution } as FeeDistribution;
    if (object.method !== undefined && object.method !== null) {
      message.method = feeDistributionMethodFromJSON(object.method);
    } else {
      message.method = 0;
    }
    if (object.portion !== undefined && object.portion !== null) {
      message.portion = Number(object.portion);
    } else {
      message.portion = 0;
    }
    return message;
  },

  toJSON(message: FeeDistribution): unknown {
    const obj: any = {};
    message.method !== undefined &&
      (obj.method = feeDistributionMethodToJSON(message.method));
    message.portion !== undefined && (obj.portion = message.portion);
    return obj;
  },

  fromPartial(object: DeepPartial<FeeDistribution>): FeeDistribution {
    const message = { ...baseFeeDistribution } as FeeDistribution;
    if (object.method !== undefined && object.method !== null) {
      message.method = object.method;
    } else {
      message.method = 0;
    }
    if (object.portion !== undefined && object.portion !== null) {
      message.portion = object.portion;
    } else {
      message.portion = 0;
    }
    return message;
  },
};

const baseFeeConfig: object = { fee_amount: "" };

export const FeeConfig = {
  encode(message: FeeConfig, writer: Writer = Writer.create()): Writer {
    if (message.fee_amount !== "") {
      writer.uint32(10).string(message.fee_amount);
    }
    for (const v of message.fee_distributions) {
      FeeDistribution.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): FeeConfig {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseFeeConfig } as FeeConfig;
    message.fee_distributions = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fee_amount = reader.string();
          break;
        case 2:
          message.fee_distributions.push(
            FeeDistribution.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): FeeConfig {
    const message = { ...baseFeeConfig } as FeeConfig;
    message.fee_distributions = [];
    if (object.fee_amount !== undefined && object.fee_amount !== null) {
      message.fee_amount = String(object.fee_amount);
    } else {
      message.fee_amount = "";
    }
    if (
      object.fee_distributions !== undefined &&
      object.fee_distributions !== null
    ) {
      for (const e of object.fee_distributions) {
        message.fee_distributions.push(FeeDistribution.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: FeeConfig): unknown {
    const obj: any = {};
    message.fee_amount !== undefined && (obj.fee_amount = message.fee_amount);
    if (message.fee_distributions) {
      obj.fee_distributions = message.fee_distributions.map((e) =>
        e ? FeeDistribution.toJSON(e) : undefined
      );
    } else {
      obj.fee_distributions = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<FeeConfig>): FeeConfig {
    const message = { ...baseFeeConfig } as FeeConfig;
    message.fee_distributions = [];
    if (object.fee_amount !== undefined && object.fee_amount !== null) {
      message.fee_amount = object.fee_amount;
    } else {
      message.fee_amount = "";
    }
    if (
      object.fee_distributions !== undefined &&
      object.fee_distributions !== null
    ) {
      for (const e of object.fee_distributions) {
        message.fee_distributions.push(FeeDistribution.fromPartial(e));
      }
    }
    return message;
  },
};

const baseNFTFeeConfig: object = {};

export const NFTFeeConfig = {
  encode(message: NFTFeeConfig, writer: Writer = Writer.create()): Writer {
    if (message.schema_fee !== undefined) {
      FeeConfig.encode(message.schema_fee, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): NFTFeeConfig {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseNFTFeeConfig } as NFTFeeConfig;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.schema_fee = FeeConfig.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): NFTFeeConfig {
    const message = { ...baseNFTFeeConfig } as NFTFeeConfig;
    if (object.schema_fee !== undefined && object.schema_fee !== null) {
      message.schema_fee = FeeConfig.fromJSON(object.schema_fee);
    } else {
      message.schema_fee = undefined;
    }
    return message;
  },

  toJSON(message: NFTFeeConfig): unknown {
    const obj: any = {};
    message.schema_fee !== undefined &&
      (obj.schema_fee = message.schema_fee
        ? FeeConfig.toJSON(message.schema_fee)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<NFTFeeConfig>): NFTFeeConfig {
    const message = { ...baseNFTFeeConfig } as NFTFeeConfig;
    if (object.schema_fee !== undefined && object.schema_fee !== null) {
      message.schema_fee = FeeConfig.fromPartial(object.schema_fee);
    } else {
      message.schema_fee = undefined;
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
