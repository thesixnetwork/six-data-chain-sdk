/* eslint-disable */
import { TokenPair } from "../../../evmos/erc20/v1/erc20";
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "evmos.erc20.v1";

/** GenesisState defines the module's genesis state. */
export interface GenesisState {
  /** module parameters */
  params: Params | undefined;
  /** registered token pairs */
  token_pairs: TokenPair[];
}

/** Params defines the erc20 module params */
export interface Params {
  /** parameter to enable the conversion of Cosmos coins <--> ERC20 tokens. */
  enable_erc20: boolean;
  /**
   * parameter to enable the EVM hook that converts an ERC20 token to a Cosmos
   * Coin by transferring the Tokens through a MsgEthereumTx to the
   * ModuleAddress Ethereum address.
   */
  enable_evm_hook: boolean;
}

const baseGenesisState: object = {};

export const GenesisState = {
  encode(message: GenesisState, writer: Writer = Writer.create()): Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.token_pairs) {
      TokenPair.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGenesisState } as GenesisState;
    message.token_pairs = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.token_pairs.push(TokenPair.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
    message.token_pairs = [];
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromJSON(object.params);
    } else {
      message.params = undefined;
    }
    if (object.token_pairs !== undefined && object.token_pairs !== null) {
      for (const e of object.token_pairs) {
        message.token_pairs.push(TokenPair.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    if (message.token_pairs) {
      obj.token_pairs = message.token_pairs.map((e) =>
        e ? TokenPair.toJSON(e) : undefined
      );
    } else {
      obj.token_pairs = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
    message.token_pairs = [];
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    } else {
      message.params = undefined;
    }
    if (object.token_pairs !== undefined && object.token_pairs !== null) {
      for (const e of object.token_pairs) {
        message.token_pairs.push(TokenPair.fromPartial(e));
      }
    }
    return message;
  },
};

const baseParams: object = { enable_erc20: false, enable_evm_hook: false };

export const Params = {
  encode(message: Params, writer: Writer = Writer.create()): Writer {
    if (message.enable_erc20 === true) {
      writer.uint32(8).bool(message.enable_erc20);
    }
    if (message.enable_evm_hook === true) {
      writer.uint32(16).bool(message.enable_evm_hook);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Params {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseParams } as Params;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.enable_erc20 = reader.bool();
          break;
        case 2:
          message.enable_evm_hook = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Params {
    const message = { ...baseParams } as Params;
    if (object.enable_erc20 !== undefined && object.enable_erc20 !== null) {
      message.enable_erc20 = Boolean(object.enable_erc20);
    } else {
      message.enable_erc20 = false;
    }
    if (
      object.enable_evm_hook !== undefined &&
      object.enable_evm_hook !== null
    ) {
      message.enable_evm_hook = Boolean(object.enable_evm_hook);
    } else {
      message.enable_evm_hook = false;
    }
    return message;
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    message.enable_erc20 !== undefined &&
      (obj.enable_erc20 = message.enable_erc20);
    message.enable_evm_hook !== undefined &&
      (obj.enable_evm_hook = message.enable_evm_hook);
    return obj;
  },

  fromPartial(object: DeepPartial<Params>): Params {
    const message = { ...baseParams } as Params;
    if (object.enable_erc20 !== undefined && object.enable_erc20 !== null) {
      message.enable_erc20 = object.enable_erc20;
    } else {
      message.enable_erc20 = false;
    }
    if (
      object.enable_evm_hook !== undefined &&
      object.enable_evm_hook !== null
    ) {
      message.enable_evm_hook = object.enable_evm_hook;
    } else {
      message.enable_evm_hook = false;
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
