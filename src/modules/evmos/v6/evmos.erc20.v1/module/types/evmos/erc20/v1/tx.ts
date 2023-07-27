/* eslint-disable */
import { Reader, Writer } from "protobufjs/minimal";
import { Coin } from "../../../cosmos/base/v1beta1/coin";

export const protobufPackage = "evmos.erc20.v1";

/** MsgConvertCoin defines a Msg to convert a native Cosmos coin to a ERC20 token */
export interface MsgConvertCoin {
  /**
   * Cosmos coin which denomination is registered in a token pair. The coin
   * amount defines the amount of coins to convert.
   */
  coin: Coin | undefined;
  /** recipient hex address to receive ERC20 token */
  receiver: string;
  /** cosmos bech32 address from the owner of the given Cosmos coins */
  sender: string;
}

/** MsgConvertCoinResponse returns no fields */
export interface MsgConvertCoinResponse {}

/**
 * MsgConvertERC20 defines a Msg to convert a ERC20 token to a native Cosmos
 * coin.
 */
export interface MsgConvertERC20 {
  /** ERC20 token contract address registered in a token pair */
  contract_address: string;
  /** amount of ERC20 tokens to convert */
  amount: string;
  /** bech32 address to receive native Cosmos coins */
  receiver: string;
  /** sender hex address from the owner of the given ERC20 tokens */
  sender: string;
}

/** MsgConvertERC20Response returns no fields */
export interface MsgConvertERC20Response {}

const baseMsgConvertCoin: object = { receiver: "", sender: "" };

export const MsgConvertCoin = {
  encode(message: MsgConvertCoin, writer: Writer = Writer.create()): Writer {
    if (message.coin !== undefined) {
      Coin.encode(message.coin, writer.uint32(10).fork()).ldelim();
    }
    if (message.receiver !== "") {
      writer.uint32(18).string(message.receiver);
    }
    if (message.sender !== "") {
      writer.uint32(26).string(message.sender);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgConvertCoin {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgConvertCoin } as MsgConvertCoin;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.coin = Coin.decode(reader, reader.uint32());
          break;
        case 2:
          message.receiver = reader.string();
          break;
        case 3:
          message.sender = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgConvertCoin {
    const message = { ...baseMsgConvertCoin } as MsgConvertCoin;
    if (object.coin !== undefined && object.coin !== null) {
      message.coin = Coin.fromJSON(object.coin);
    } else {
      message.coin = undefined;
    }
    if (object.receiver !== undefined && object.receiver !== null) {
      message.receiver = String(object.receiver);
    } else {
      message.receiver = "";
    }
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = String(object.sender);
    } else {
      message.sender = "";
    }
    return message;
  },

  toJSON(message: MsgConvertCoin): unknown {
    const obj: any = {};
    message.coin !== undefined &&
      (obj.coin = message.coin ? Coin.toJSON(message.coin) : undefined);
    message.receiver !== undefined && (obj.receiver = message.receiver);
    message.sender !== undefined && (obj.sender = message.sender);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgConvertCoin>): MsgConvertCoin {
    const message = { ...baseMsgConvertCoin } as MsgConvertCoin;
    if (object.coin !== undefined && object.coin !== null) {
      message.coin = Coin.fromPartial(object.coin);
    } else {
      message.coin = undefined;
    }
    if (object.receiver !== undefined && object.receiver !== null) {
      message.receiver = object.receiver;
    } else {
      message.receiver = "";
    }
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    } else {
      message.sender = "";
    }
    return message;
  },
};

const baseMsgConvertCoinResponse: object = {};

export const MsgConvertCoinResponse = {
  encode(_: MsgConvertCoinResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgConvertCoinResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgConvertCoinResponse } as MsgConvertCoinResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgConvertCoinResponse {
    const message = { ...baseMsgConvertCoinResponse } as MsgConvertCoinResponse;
    return message;
  },

  toJSON(_: MsgConvertCoinResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgConvertCoinResponse>): MsgConvertCoinResponse {
    const message = { ...baseMsgConvertCoinResponse } as MsgConvertCoinResponse;
    return message;
  },
};

const baseMsgConvertERC20: object = {
  contract_address: "",
  amount: "",
  receiver: "",
  sender: "",
};

export const MsgConvertERC20 = {
  encode(message: MsgConvertERC20, writer: Writer = Writer.create()): Writer {
    if (message.contract_address !== "") {
      writer.uint32(10).string(message.contract_address);
    }
    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
    }
    if (message.receiver !== "") {
      writer.uint32(26).string(message.receiver);
    }
    if (message.sender !== "") {
      writer.uint32(34).string(message.sender);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgConvertERC20 {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgConvertERC20 } as MsgConvertERC20;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contract_address = reader.string();
          break;
        case 2:
          message.amount = reader.string();
          break;
        case 3:
          message.receiver = reader.string();
          break;
        case 4:
          message.sender = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgConvertERC20 {
    const message = { ...baseMsgConvertERC20 } as MsgConvertERC20;
    if (
      object.contract_address !== undefined &&
      object.contract_address !== null
    ) {
      message.contract_address = String(object.contract_address);
    } else {
      message.contract_address = "";
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = String(object.amount);
    } else {
      message.amount = "";
    }
    if (object.receiver !== undefined && object.receiver !== null) {
      message.receiver = String(object.receiver);
    } else {
      message.receiver = "";
    }
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = String(object.sender);
    } else {
      message.sender = "";
    }
    return message;
  },

  toJSON(message: MsgConvertERC20): unknown {
    const obj: any = {};
    message.contract_address !== undefined &&
      (obj.contract_address = message.contract_address);
    message.amount !== undefined && (obj.amount = message.amount);
    message.receiver !== undefined && (obj.receiver = message.receiver);
    message.sender !== undefined && (obj.sender = message.sender);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgConvertERC20>): MsgConvertERC20 {
    const message = { ...baseMsgConvertERC20 } as MsgConvertERC20;
    if (
      object.contract_address !== undefined &&
      object.contract_address !== null
    ) {
      message.contract_address = object.contract_address;
    } else {
      message.contract_address = "";
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    } else {
      message.amount = "";
    }
    if (object.receiver !== undefined && object.receiver !== null) {
      message.receiver = object.receiver;
    } else {
      message.receiver = "";
    }
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    } else {
      message.sender = "";
    }
    return message;
  },
};

const baseMsgConvertERC20Response: object = {};

export const MsgConvertERC20Response = {
  encode(_: MsgConvertERC20Response, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgConvertERC20Response {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgConvertERC20Response,
    } as MsgConvertERC20Response;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgConvertERC20Response {
    const message = {
      ...baseMsgConvertERC20Response,
    } as MsgConvertERC20Response;
    return message;
  },

  toJSON(_: MsgConvertERC20Response): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgConvertERC20Response>
  ): MsgConvertERC20Response {
    const message = {
      ...baseMsgConvertERC20Response,
    } as MsgConvertERC20Response;
    return message;
  },
};

/** Msg defines the erc20 Msg service. */
export interface Msg {
  /**
   * ConvertCoin mints a ERC20 representation of the native Cosmos coin denom
   * that is registered on the token mapping.
   */
  ConvertCoin(request: MsgConvertCoin): Promise<MsgConvertCoinResponse>;
  /**
   * ConvertERC20 mints a native Cosmos coin representation of the ERC20 token
   * contract that is registered on the token mapping.
   */
  ConvertERC20(request: MsgConvertERC20): Promise<MsgConvertERC20Response>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  ConvertCoin(request: MsgConvertCoin): Promise<MsgConvertCoinResponse> {
    const data = MsgConvertCoin.encode(request).finish();
    const promise = this.rpc.request("evmos.erc20.v1.Msg", "ConvertCoin", data);
    return promise.then((data) =>
      MsgConvertCoinResponse.decode(new Reader(data))
    );
  }

  ConvertERC20(request: MsgConvertERC20): Promise<MsgConvertERC20Response> {
    const data = MsgConvertERC20.encode(request).finish();
    const promise = this.rpc.request(
      "evmos.erc20.v1.Msg",
      "ConvertERC20",
      data
    );
    return promise.then((data) =>
      MsgConvertERC20Response.decode(new Reader(data))
    );
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
}

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
