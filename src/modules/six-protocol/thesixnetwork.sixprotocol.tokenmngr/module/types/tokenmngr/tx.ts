/* eslint-disable */
import { Reader, util, configure, Writer } from "protobufjs/minimal";
import * as Long from "long";
import { Coin } from "../cosmos/base/v1beta1/coin";

export const protobufPackage = "thesixnetwork.sixprotocol.tokenmngr";

export interface MsgCreateToken {
  creator: string;
  name: string;
  maxSupply: Coin | undefined;
  denomMetaData: string;
  mintee: string;
}

export interface MsgCreateTokenResponse {}

export interface MsgUpdateToken {
  creator: string;
  name: string;
  maxSupply: Coin | undefined;
  mintee: string;
}

export interface MsgUpdateTokenResponse {}

export interface MsgDeleteToken {
  creator: string;
  name: string;
}

export interface MsgDeleteTokenResponse {}

export interface MsgCreateMintperm {
  creator: string;
  token: string;
  address: string;
}

export interface MsgCreateMintpermResponse {}

export interface MsgUpdateMintperm {
  creator: string;
  token: string;
  address: string;
}

export interface MsgUpdateMintpermResponse {}

export interface MsgDeleteMintperm {
  creator: string;
  token: string;
  address: string;
}

export interface MsgDeleteMintpermResponse {}

export interface MsgMint {
  creator: string;
  amount: Coin | undefined;
}

export interface MsgMintResponse {}

export interface MsgBurn {
  creator: string;
  amount: Coin | undefined;
}

export interface MsgBurnResponse {
  id: number;
}

export interface MsgCreateOptions {
  creator: string;
  defaultMintee: string;
}

export interface MsgCreateOptionsResponse {}

export interface MsgUpdateOptions {
  creator: string;
  defaultMintee: string;
}

export interface MsgUpdateOptionsResponse {}

export interface MsgDeleteOptions {
  creator: string;
}

export interface MsgDeleteOptionsResponse {}

export interface MsgWrapToken {
  creator: string;
  amount: Coin | undefined;
  receiver: string;
}

export interface MsgWrapTokenResponse {
  amount: Coin | undefined;
}

export interface MsgUnwrapToken {
  creator: string;
  amount: Coin | undefined;
  receiver: string;
}

export interface MsgUnwrapTokenResponse {
  amount: Coin | undefined;
}

export interface MsgSetConverterParams {
  creator: string;
  contractAddress: string;
  eventName: string;
  eventTuple: string;
  abi: string;
}

export interface MsgSetConverterParamsResponse {
  contractAddress: string;
  abi: string;
}

export interface MsgEnableContractConverter {
  creator: string;
  enable: boolean;
}

export interface MsgEnableContractConverterResponse {
  contractAddress: string;
  enable: boolean;
}

export interface MsgSendWrapToken {
  creator: string;
  ethAddress: string;
  amount: Coin | undefined;
}

export interface MsgSendWrapTokenResponse {
  receiver: string;
  amount: string;
}

const baseMsgCreateToken: object = {
  creator: "",
  name: "",
  denomMetaData: "",
  mintee: "",
};

export const MsgCreateToken = {
  encode(message: MsgCreateToken, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.maxSupply !== undefined) {
      Coin.encode(message.maxSupply, writer.uint32(26).fork()).ldelim();
    }
    if (message.denomMetaData !== "") {
      writer.uint32(34).string(message.denomMetaData);
    }
    if (message.mintee !== "") {
      writer.uint32(42).string(message.mintee);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateToken {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateToken } as MsgCreateToken;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.maxSupply = Coin.decode(reader, reader.uint32());
          break;
        case 4:
          message.denomMetaData = reader.string();
          break;
        case 5:
          message.mintee = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateToken {
    const message = { ...baseMsgCreateToken } as MsgCreateToken;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    if (object.maxSupply !== undefined && object.maxSupply !== null) {
      message.maxSupply = Coin.fromJSON(object.maxSupply);
    } else {
      message.maxSupply = undefined;
    }
    if (object.denomMetaData !== undefined && object.denomMetaData !== null) {
      message.denomMetaData = String(object.denomMetaData);
    } else {
      message.denomMetaData = "";
    }
    if (object.mintee !== undefined && object.mintee !== null) {
      message.mintee = String(object.mintee);
    } else {
      message.mintee = "";
    }
    return message;
  },

  toJSON(message: MsgCreateToken): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.name !== undefined && (obj.name = message.name);
    message.maxSupply !== undefined &&
      (obj.maxSupply = message.maxSupply
        ? Coin.toJSON(message.maxSupply)
        : undefined);
    message.denomMetaData !== undefined &&
      (obj.denomMetaData = message.denomMetaData);
    message.mintee !== undefined && (obj.mintee = message.mintee);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateToken>): MsgCreateToken {
    const message = { ...baseMsgCreateToken } as MsgCreateToken;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    if (object.maxSupply !== undefined && object.maxSupply !== null) {
      message.maxSupply = Coin.fromPartial(object.maxSupply);
    } else {
      message.maxSupply = undefined;
    }
    if (object.denomMetaData !== undefined && object.denomMetaData !== null) {
      message.denomMetaData = object.denomMetaData;
    } else {
      message.denomMetaData = "";
    }
    if (object.mintee !== undefined && object.mintee !== null) {
      message.mintee = object.mintee;
    } else {
      message.mintee = "";
    }
    return message;
  },
};

const baseMsgCreateTokenResponse: object = {};

export const MsgCreateTokenResponse = {
  encode(_: MsgCreateTokenResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateTokenResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateTokenResponse } as MsgCreateTokenResponse;
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

  fromJSON(_: any): MsgCreateTokenResponse {
    const message = { ...baseMsgCreateTokenResponse } as MsgCreateTokenResponse;
    return message;
  },

  toJSON(_: MsgCreateTokenResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgCreateTokenResponse>): MsgCreateTokenResponse {
    const message = { ...baseMsgCreateTokenResponse } as MsgCreateTokenResponse;
    return message;
  },
};

const baseMsgUpdateToken: object = { creator: "", name: "", mintee: "" };

export const MsgUpdateToken = {
  encode(message: MsgUpdateToken, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.maxSupply !== undefined) {
      Coin.encode(message.maxSupply, writer.uint32(34).fork()).ldelim();
    }
    if (message.mintee !== "") {
      writer.uint32(42).string(message.mintee);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateToken {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateToken } as MsgUpdateToken;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 4:
          message.maxSupply = Coin.decode(reader, reader.uint32());
          break;
        case 5:
          message.mintee = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateToken {
    const message = { ...baseMsgUpdateToken } as MsgUpdateToken;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    if (object.maxSupply !== undefined && object.maxSupply !== null) {
      message.maxSupply = Coin.fromJSON(object.maxSupply);
    } else {
      message.maxSupply = undefined;
    }
    if (object.mintee !== undefined && object.mintee !== null) {
      message.mintee = String(object.mintee);
    } else {
      message.mintee = "";
    }
    return message;
  },

  toJSON(message: MsgUpdateToken): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.name !== undefined && (obj.name = message.name);
    message.maxSupply !== undefined &&
      (obj.maxSupply = message.maxSupply
        ? Coin.toJSON(message.maxSupply)
        : undefined);
    message.mintee !== undefined && (obj.mintee = message.mintee);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgUpdateToken>): MsgUpdateToken {
    const message = { ...baseMsgUpdateToken } as MsgUpdateToken;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    if (object.maxSupply !== undefined && object.maxSupply !== null) {
      message.maxSupply = Coin.fromPartial(object.maxSupply);
    } else {
      message.maxSupply = undefined;
    }
    if (object.mintee !== undefined && object.mintee !== null) {
      message.mintee = object.mintee;
    } else {
      message.mintee = "";
    }
    return message;
  },
};

const baseMsgUpdateTokenResponse: object = {};

export const MsgUpdateTokenResponse = {
  encode(_: MsgUpdateTokenResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateTokenResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateTokenResponse } as MsgUpdateTokenResponse;
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

  fromJSON(_: any): MsgUpdateTokenResponse {
    const message = { ...baseMsgUpdateTokenResponse } as MsgUpdateTokenResponse;
    return message;
  },

  toJSON(_: MsgUpdateTokenResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgUpdateTokenResponse>): MsgUpdateTokenResponse {
    const message = { ...baseMsgUpdateTokenResponse } as MsgUpdateTokenResponse;
    return message;
  },
};

const baseMsgDeleteToken: object = { creator: "", name: "" };

export const MsgDeleteToken = {
  encode(message: MsgDeleteToken, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteToken {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgDeleteToken } as MsgDeleteToken;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDeleteToken {
    const message = { ...baseMsgDeleteToken } as MsgDeleteToken;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    return message;
  },

  toJSON(message: MsgDeleteToken): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgDeleteToken>): MsgDeleteToken {
    const message = { ...baseMsgDeleteToken } as MsgDeleteToken;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    return message;
  },
};

const baseMsgDeleteTokenResponse: object = {};

export const MsgDeleteTokenResponse = {
  encode(_: MsgDeleteTokenResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteTokenResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgDeleteTokenResponse } as MsgDeleteTokenResponse;
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

  fromJSON(_: any): MsgDeleteTokenResponse {
    const message = { ...baseMsgDeleteTokenResponse } as MsgDeleteTokenResponse;
    return message;
  },

  toJSON(_: MsgDeleteTokenResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgDeleteTokenResponse>): MsgDeleteTokenResponse {
    const message = { ...baseMsgDeleteTokenResponse } as MsgDeleteTokenResponse;
    return message;
  },
};

const baseMsgCreateMintperm: object = { creator: "", token: "", address: "" };

export const MsgCreateMintperm = {
  encode(message: MsgCreateMintperm, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.token !== "") {
      writer.uint32(18).string(message.token);
    }
    if (message.address !== "") {
      writer.uint32(26).string(message.address);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateMintperm {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateMintperm } as MsgCreateMintperm;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.token = reader.string();
          break;
        case 3:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateMintperm {
    const message = { ...baseMsgCreateMintperm } as MsgCreateMintperm;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.token !== undefined && object.token !== null) {
      message.token = String(object.token);
    } else {
      message.token = "";
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = String(object.address);
    } else {
      message.address = "";
    }
    return message;
  },

  toJSON(message: MsgCreateMintperm): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.token !== undefined && (obj.token = message.token);
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateMintperm>): MsgCreateMintperm {
    const message = { ...baseMsgCreateMintperm } as MsgCreateMintperm;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.token !== undefined && object.token !== null) {
      message.token = object.token;
    } else {
      message.token = "";
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    } else {
      message.address = "";
    }
    return message;
  },
};

const baseMsgCreateMintpermResponse: object = {};

export const MsgCreateMintpermResponse = {
  encode(
    _: MsgCreateMintpermResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgCreateMintpermResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreateMintpermResponse,
    } as MsgCreateMintpermResponse;
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

  fromJSON(_: any): MsgCreateMintpermResponse {
    const message = {
      ...baseMsgCreateMintpermResponse,
    } as MsgCreateMintpermResponse;
    return message;
  },

  toJSON(_: MsgCreateMintpermResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgCreateMintpermResponse>
  ): MsgCreateMintpermResponse {
    const message = {
      ...baseMsgCreateMintpermResponse,
    } as MsgCreateMintpermResponse;
    return message;
  },
};

const baseMsgUpdateMintperm: object = { creator: "", token: "", address: "" };

export const MsgUpdateMintperm = {
  encode(message: MsgUpdateMintperm, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.token !== "") {
      writer.uint32(18).string(message.token);
    }
    if (message.address !== "") {
      writer.uint32(26).string(message.address);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateMintperm {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateMintperm } as MsgUpdateMintperm;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.token = reader.string();
          break;
        case 3:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateMintperm {
    const message = { ...baseMsgUpdateMintperm } as MsgUpdateMintperm;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.token !== undefined && object.token !== null) {
      message.token = String(object.token);
    } else {
      message.token = "";
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = String(object.address);
    } else {
      message.address = "";
    }
    return message;
  },

  toJSON(message: MsgUpdateMintperm): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.token !== undefined && (obj.token = message.token);
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgUpdateMintperm>): MsgUpdateMintperm {
    const message = { ...baseMsgUpdateMintperm } as MsgUpdateMintperm;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.token !== undefined && object.token !== null) {
      message.token = object.token;
    } else {
      message.token = "";
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    } else {
      message.address = "";
    }
    return message;
  },
};

const baseMsgUpdateMintpermResponse: object = {};

export const MsgUpdateMintpermResponse = {
  encode(
    _: MsgUpdateMintpermResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgUpdateMintpermResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateMintpermResponse,
    } as MsgUpdateMintpermResponse;
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

  fromJSON(_: any): MsgUpdateMintpermResponse {
    const message = {
      ...baseMsgUpdateMintpermResponse,
    } as MsgUpdateMintpermResponse;
    return message;
  },

  toJSON(_: MsgUpdateMintpermResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgUpdateMintpermResponse>
  ): MsgUpdateMintpermResponse {
    const message = {
      ...baseMsgUpdateMintpermResponse,
    } as MsgUpdateMintpermResponse;
    return message;
  },
};

const baseMsgDeleteMintperm: object = { creator: "", token: "", address: "" };

export const MsgDeleteMintperm = {
  encode(message: MsgDeleteMintperm, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.token !== "") {
      writer.uint32(18).string(message.token);
    }
    if (message.address !== "") {
      writer.uint32(26).string(message.address);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteMintperm {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgDeleteMintperm } as MsgDeleteMintperm;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.token = reader.string();
          break;
        case 3:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDeleteMintperm {
    const message = { ...baseMsgDeleteMintperm } as MsgDeleteMintperm;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.token !== undefined && object.token !== null) {
      message.token = String(object.token);
    } else {
      message.token = "";
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = String(object.address);
    } else {
      message.address = "";
    }
    return message;
  },

  toJSON(message: MsgDeleteMintperm): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.token !== undefined && (obj.token = message.token);
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgDeleteMintperm>): MsgDeleteMintperm {
    const message = { ...baseMsgDeleteMintperm } as MsgDeleteMintperm;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.token !== undefined && object.token !== null) {
      message.token = object.token;
    } else {
      message.token = "";
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    } else {
      message.address = "";
    }
    return message;
  },
};

const baseMsgDeleteMintpermResponse: object = {};

export const MsgDeleteMintpermResponse = {
  encode(
    _: MsgDeleteMintpermResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgDeleteMintpermResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgDeleteMintpermResponse,
    } as MsgDeleteMintpermResponse;
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

  fromJSON(_: any): MsgDeleteMintpermResponse {
    const message = {
      ...baseMsgDeleteMintpermResponse,
    } as MsgDeleteMintpermResponse;
    return message;
  },

  toJSON(_: MsgDeleteMintpermResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgDeleteMintpermResponse>
  ): MsgDeleteMintpermResponse {
    const message = {
      ...baseMsgDeleteMintpermResponse,
    } as MsgDeleteMintpermResponse;
    return message;
  },
};

const baseMsgMint: object = { creator: "" };

export const MsgMint = {
  encode(message: MsgMint, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgMint {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgMint } as MsgMint;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.amount = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgMint {
    const message = { ...baseMsgMint } as MsgMint;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromJSON(object.amount);
    } else {
      message.amount = undefined;
    }
    return message;
  },

  toJSON(message: MsgMint): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.amount !== undefined &&
      (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgMint>): MsgMint {
    const message = { ...baseMsgMint } as MsgMint;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromPartial(object.amount);
    } else {
      message.amount = undefined;
    }
    return message;
  },
};

const baseMsgMintResponse: object = {};

export const MsgMintResponse = {
  encode(_: MsgMintResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgMintResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgMintResponse } as MsgMintResponse;
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

  fromJSON(_: any): MsgMintResponse {
    const message = { ...baseMsgMintResponse } as MsgMintResponse;
    return message;
  },

  toJSON(_: MsgMintResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgMintResponse>): MsgMintResponse {
    const message = { ...baseMsgMintResponse } as MsgMintResponse;
    return message;
  },
};

const baseMsgBurn: object = { creator: "" };

export const MsgBurn = {
  encode(message: MsgBurn, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgBurn {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgBurn } as MsgBurn;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.amount = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgBurn {
    const message = { ...baseMsgBurn } as MsgBurn;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromJSON(object.amount);
    } else {
      message.amount = undefined;
    }
    return message;
  },

  toJSON(message: MsgBurn): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.amount !== undefined &&
      (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgBurn>): MsgBurn {
    const message = { ...baseMsgBurn } as MsgBurn;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromPartial(object.amount);
    } else {
      message.amount = undefined;
    }
    return message;
  },
};

const baseMsgBurnResponse: object = { id: 0 };

export const MsgBurnResponse = {
  encode(message: MsgBurnResponse, writer: Writer = Writer.create()): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgBurnResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgBurnResponse } as MsgBurnResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgBurnResponse {
    const message = { ...baseMsgBurnResponse } as MsgBurnResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: MsgBurnResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgBurnResponse>): MsgBurnResponse {
    const message = { ...baseMsgBurnResponse } as MsgBurnResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseMsgCreateOptions: object = { creator: "", defaultMintee: "" };

export const MsgCreateOptions = {
  encode(message: MsgCreateOptions, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.defaultMintee !== "") {
      writer.uint32(18).string(message.defaultMintee);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateOptions {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateOptions } as MsgCreateOptions;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.defaultMintee = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateOptions {
    const message = { ...baseMsgCreateOptions } as MsgCreateOptions;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.defaultMintee !== undefined && object.defaultMintee !== null) {
      message.defaultMintee = String(object.defaultMintee);
    } else {
      message.defaultMintee = "";
    }
    return message;
  },

  toJSON(message: MsgCreateOptions): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.defaultMintee !== undefined &&
      (obj.defaultMintee = message.defaultMintee);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateOptions>): MsgCreateOptions {
    const message = { ...baseMsgCreateOptions } as MsgCreateOptions;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.defaultMintee !== undefined && object.defaultMintee !== null) {
      message.defaultMintee = object.defaultMintee;
    } else {
      message.defaultMintee = "";
    }
    return message;
  },
};

const baseMsgCreateOptionsResponse: object = {};

export const MsgCreateOptionsResponse = {
  encode(
    _: MsgCreateOptionsResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgCreateOptionsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreateOptionsResponse,
    } as MsgCreateOptionsResponse;
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

  fromJSON(_: any): MsgCreateOptionsResponse {
    const message = {
      ...baseMsgCreateOptionsResponse,
    } as MsgCreateOptionsResponse;
    return message;
  },

  toJSON(_: MsgCreateOptionsResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgCreateOptionsResponse>
  ): MsgCreateOptionsResponse {
    const message = {
      ...baseMsgCreateOptionsResponse,
    } as MsgCreateOptionsResponse;
    return message;
  },
};

const baseMsgUpdateOptions: object = { creator: "", defaultMintee: "" };

export const MsgUpdateOptions = {
  encode(message: MsgUpdateOptions, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.defaultMintee !== "") {
      writer.uint32(18).string(message.defaultMintee);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateOptions {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateOptions } as MsgUpdateOptions;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.defaultMintee = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateOptions {
    const message = { ...baseMsgUpdateOptions } as MsgUpdateOptions;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.defaultMintee !== undefined && object.defaultMintee !== null) {
      message.defaultMintee = String(object.defaultMintee);
    } else {
      message.defaultMintee = "";
    }
    return message;
  },

  toJSON(message: MsgUpdateOptions): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.defaultMintee !== undefined &&
      (obj.defaultMintee = message.defaultMintee);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgUpdateOptions>): MsgUpdateOptions {
    const message = { ...baseMsgUpdateOptions } as MsgUpdateOptions;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.defaultMintee !== undefined && object.defaultMintee !== null) {
      message.defaultMintee = object.defaultMintee;
    } else {
      message.defaultMintee = "";
    }
    return message;
  },
};

const baseMsgUpdateOptionsResponse: object = {};

export const MsgUpdateOptionsResponse = {
  encode(
    _: MsgUpdateOptionsResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgUpdateOptionsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateOptionsResponse,
    } as MsgUpdateOptionsResponse;
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

  fromJSON(_: any): MsgUpdateOptionsResponse {
    const message = {
      ...baseMsgUpdateOptionsResponse,
    } as MsgUpdateOptionsResponse;
    return message;
  },

  toJSON(_: MsgUpdateOptionsResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgUpdateOptionsResponse>
  ): MsgUpdateOptionsResponse {
    const message = {
      ...baseMsgUpdateOptionsResponse,
    } as MsgUpdateOptionsResponse;
    return message;
  },
};

const baseMsgDeleteOptions: object = { creator: "" };

export const MsgDeleteOptions = {
  encode(message: MsgDeleteOptions, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteOptions {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgDeleteOptions } as MsgDeleteOptions;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDeleteOptions {
    const message = { ...baseMsgDeleteOptions } as MsgDeleteOptions;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    return message;
  },

  toJSON(message: MsgDeleteOptions): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgDeleteOptions>): MsgDeleteOptions {
    const message = { ...baseMsgDeleteOptions } as MsgDeleteOptions;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    return message;
  },
};

const baseMsgDeleteOptionsResponse: object = {};

export const MsgDeleteOptionsResponse = {
  encode(
    _: MsgDeleteOptionsResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgDeleteOptionsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgDeleteOptionsResponse,
    } as MsgDeleteOptionsResponse;
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

  fromJSON(_: any): MsgDeleteOptionsResponse {
    const message = {
      ...baseMsgDeleteOptionsResponse,
    } as MsgDeleteOptionsResponse;
    return message;
  },

  toJSON(_: MsgDeleteOptionsResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgDeleteOptionsResponse>
  ): MsgDeleteOptionsResponse {
    const message = {
      ...baseMsgDeleteOptionsResponse,
    } as MsgDeleteOptionsResponse;
    return message;
  },
};

const baseMsgWrapToken: object = { creator: "", receiver: "" };

export const MsgWrapToken = {
  encode(message: MsgWrapToken, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(18).fork()).ldelim();
    }
    if (message.receiver !== "") {
      writer.uint32(26).string(message.receiver);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgWrapToken {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgWrapToken } as MsgWrapToken;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.amount = Coin.decode(reader, reader.uint32());
          break;
        case 3:
          message.receiver = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgWrapToken {
    const message = { ...baseMsgWrapToken } as MsgWrapToken;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromJSON(object.amount);
    } else {
      message.amount = undefined;
    }
    if (object.receiver !== undefined && object.receiver !== null) {
      message.receiver = String(object.receiver);
    } else {
      message.receiver = "";
    }
    return message;
  },

  toJSON(message: MsgWrapToken): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.amount !== undefined &&
      (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    message.receiver !== undefined && (obj.receiver = message.receiver);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgWrapToken>): MsgWrapToken {
    const message = { ...baseMsgWrapToken } as MsgWrapToken;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromPartial(object.amount);
    } else {
      message.amount = undefined;
    }
    if (object.receiver !== undefined && object.receiver !== null) {
      message.receiver = object.receiver;
    } else {
      message.receiver = "";
    }
    return message;
  },
};

const baseMsgWrapTokenResponse: object = {};

export const MsgWrapTokenResponse = {
  encode(
    message: MsgWrapTokenResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgWrapTokenResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgWrapTokenResponse } as MsgWrapTokenResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amount = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgWrapTokenResponse {
    const message = { ...baseMsgWrapTokenResponse } as MsgWrapTokenResponse;
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromJSON(object.amount);
    } else {
      message.amount = undefined;
    }
    return message;
  },

  toJSON(message: MsgWrapTokenResponse): unknown {
    const obj: any = {};
    message.amount !== undefined &&
      (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgWrapTokenResponse>): MsgWrapTokenResponse {
    const message = { ...baseMsgWrapTokenResponse } as MsgWrapTokenResponse;
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromPartial(object.amount);
    } else {
      message.amount = undefined;
    }
    return message;
  },
};

const baseMsgUnwrapToken: object = { creator: "", receiver: "" };

export const MsgUnwrapToken = {
  encode(message: MsgUnwrapToken, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(18).fork()).ldelim();
    }
    if (message.receiver !== "") {
      writer.uint32(26).string(message.receiver);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUnwrapToken {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUnwrapToken } as MsgUnwrapToken;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.amount = Coin.decode(reader, reader.uint32());
          break;
        case 3:
          message.receiver = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUnwrapToken {
    const message = { ...baseMsgUnwrapToken } as MsgUnwrapToken;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromJSON(object.amount);
    } else {
      message.amount = undefined;
    }
    if (object.receiver !== undefined && object.receiver !== null) {
      message.receiver = String(object.receiver);
    } else {
      message.receiver = "";
    }
    return message;
  },

  toJSON(message: MsgUnwrapToken): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.amount !== undefined &&
      (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    message.receiver !== undefined && (obj.receiver = message.receiver);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgUnwrapToken>): MsgUnwrapToken {
    const message = { ...baseMsgUnwrapToken } as MsgUnwrapToken;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromPartial(object.amount);
    } else {
      message.amount = undefined;
    }
    if (object.receiver !== undefined && object.receiver !== null) {
      message.receiver = object.receiver;
    } else {
      message.receiver = "";
    }
    return message;
  },
};

const baseMsgUnwrapTokenResponse: object = {};

export const MsgUnwrapTokenResponse = {
  encode(
    message: MsgUnwrapTokenResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUnwrapTokenResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUnwrapTokenResponse } as MsgUnwrapTokenResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amount = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUnwrapTokenResponse {
    const message = { ...baseMsgUnwrapTokenResponse } as MsgUnwrapTokenResponse;
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromJSON(object.amount);
    } else {
      message.amount = undefined;
    }
    return message;
  },

  toJSON(message: MsgUnwrapTokenResponse): unknown {
    const obj: any = {};
    message.amount !== undefined &&
      (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgUnwrapTokenResponse>
  ): MsgUnwrapTokenResponse {
    const message = { ...baseMsgUnwrapTokenResponse } as MsgUnwrapTokenResponse;
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromPartial(object.amount);
    } else {
      message.amount = undefined;
    }
    return message;
  },
};

const baseMsgSetConverterParams: object = {
  creator: "",
  contractAddress: "",
  eventName: "",
  eventTuple: "",
  abi: "",
};

export const MsgSetConverterParams = {
  encode(
    message: MsgSetConverterParams,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.contractAddress !== "") {
      writer.uint32(18).string(message.contractAddress);
    }
    if (message.eventName !== "") {
      writer.uint32(26).string(message.eventName);
    }
    if (message.eventTuple !== "") {
      writer.uint32(34).string(message.eventTuple);
    }
    if (message.abi !== "") {
      writer.uint32(42).string(message.abi);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgSetConverterParams {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgSetConverterParams } as MsgSetConverterParams;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.contractAddress = reader.string();
          break;
        case 3:
          message.eventName = reader.string();
          break;
        case 4:
          message.eventTuple = reader.string();
          break;
        case 5:
          message.abi = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSetConverterParams {
    const message = { ...baseMsgSetConverterParams } as MsgSetConverterParams;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (
      object.contractAddress !== undefined &&
      object.contractAddress !== null
    ) {
      message.contractAddress = String(object.contractAddress);
    } else {
      message.contractAddress = "";
    }
    if (object.eventName !== undefined && object.eventName !== null) {
      message.eventName = String(object.eventName);
    } else {
      message.eventName = "";
    }
    if (object.eventTuple !== undefined && object.eventTuple !== null) {
      message.eventTuple = String(object.eventTuple);
    } else {
      message.eventTuple = "";
    }
    if (object.abi !== undefined && object.abi !== null) {
      message.abi = String(object.abi);
    } else {
      message.abi = "";
    }
    return message;
  },

  toJSON(message: MsgSetConverterParams): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.contractAddress !== undefined &&
      (obj.contractAddress = message.contractAddress);
    message.eventName !== undefined && (obj.eventName = message.eventName);
    message.eventTuple !== undefined && (obj.eventTuple = message.eventTuple);
    message.abi !== undefined && (obj.abi = message.abi);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgSetConverterParams>
  ): MsgSetConverterParams {
    const message = { ...baseMsgSetConverterParams } as MsgSetConverterParams;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (
      object.contractAddress !== undefined &&
      object.contractAddress !== null
    ) {
      message.contractAddress = object.contractAddress;
    } else {
      message.contractAddress = "";
    }
    if (object.eventName !== undefined && object.eventName !== null) {
      message.eventName = object.eventName;
    } else {
      message.eventName = "";
    }
    if (object.eventTuple !== undefined && object.eventTuple !== null) {
      message.eventTuple = object.eventTuple;
    } else {
      message.eventTuple = "";
    }
    if (object.abi !== undefined && object.abi !== null) {
      message.abi = object.abi;
    } else {
      message.abi = "";
    }
    return message;
  },
};

const baseMsgSetConverterParamsResponse: object = {
  contractAddress: "",
  abi: "",
};

export const MsgSetConverterParamsResponse = {
  encode(
    message: MsgSetConverterParamsResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.contractAddress !== "") {
      writer.uint32(10).string(message.contractAddress);
    }
    if (message.abi !== "") {
      writer.uint32(18).string(message.abi);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgSetConverterParamsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgSetConverterParamsResponse,
    } as MsgSetConverterParamsResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contractAddress = reader.string();
          break;
        case 2:
          message.abi = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSetConverterParamsResponse {
    const message = {
      ...baseMsgSetConverterParamsResponse,
    } as MsgSetConverterParamsResponse;
    if (
      object.contractAddress !== undefined &&
      object.contractAddress !== null
    ) {
      message.contractAddress = String(object.contractAddress);
    } else {
      message.contractAddress = "";
    }
    if (object.abi !== undefined && object.abi !== null) {
      message.abi = String(object.abi);
    } else {
      message.abi = "";
    }
    return message;
  },

  toJSON(message: MsgSetConverterParamsResponse): unknown {
    const obj: any = {};
    message.contractAddress !== undefined &&
      (obj.contractAddress = message.contractAddress);
    message.abi !== undefined && (obj.abi = message.abi);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgSetConverterParamsResponse>
  ): MsgSetConverterParamsResponse {
    const message = {
      ...baseMsgSetConverterParamsResponse,
    } as MsgSetConverterParamsResponse;
    if (
      object.contractAddress !== undefined &&
      object.contractAddress !== null
    ) {
      message.contractAddress = object.contractAddress;
    } else {
      message.contractAddress = "";
    }
    if (object.abi !== undefined && object.abi !== null) {
      message.abi = object.abi;
    } else {
      message.abi = "";
    }
    return message;
  },
};

const baseMsgEnableContractConverter: object = { creator: "", enable: false };

export const MsgEnableContractConverter = {
  encode(
    message: MsgEnableContractConverter,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.enable === true) {
      writer.uint32(16).bool(message.enable);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgEnableContractConverter {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgEnableContractConverter,
    } as MsgEnableContractConverter;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.enable = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgEnableContractConverter {
    const message = {
      ...baseMsgEnableContractConverter,
    } as MsgEnableContractConverter;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.enable !== undefined && object.enable !== null) {
      message.enable = Boolean(object.enable);
    } else {
      message.enable = false;
    }
    return message;
  },

  toJSON(message: MsgEnableContractConverter): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.enable !== undefined && (obj.enable = message.enable);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgEnableContractConverter>
  ): MsgEnableContractConverter {
    const message = {
      ...baseMsgEnableContractConverter,
    } as MsgEnableContractConverter;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.enable !== undefined && object.enable !== null) {
      message.enable = object.enable;
    } else {
      message.enable = false;
    }
    return message;
  },
};

const baseMsgEnableContractConverterResponse: object = {
  contractAddress: "",
  enable: false,
};

export const MsgEnableContractConverterResponse = {
  encode(
    message: MsgEnableContractConverterResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.contractAddress !== "") {
      writer.uint32(10).string(message.contractAddress);
    }
    if (message.enable === true) {
      writer.uint32(16).bool(message.enable);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgEnableContractConverterResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgEnableContractConverterResponse,
    } as MsgEnableContractConverterResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contractAddress = reader.string();
          break;
        case 2:
          message.enable = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgEnableContractConverterResponse {
    const message = {
      ...baseMsgEnableContractConverterResponse,
    } as MsgEnableContractConverterResponse;
    if (
      object.contractAddress !== undefined &&
      object.contractAddress !== null
    ) {
      message.contractAddress = String(object.contractAddress);
    } else {
      message.contractAddress = "";
    }
    if (object.enable !== undefined && object.enable !== null) {
      message.enable = Boolean(object.enable);
    } else {
      message.enable = false;
    }
    return message;
  },

  toJSON(message: MsgEnableContractConverterResponse): unknown {
    const obj: any = {};
    message.contractAddress !== undefined &&
      (obj.contractAddress = message.contractAddress);
    message.enable !== undefined && (obj.enable = message.enable);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgEnableContractConverterResponse>
  ): MsgEnableContractConverterResponse {
    const message = {
      ...baseMsgEnableContractConverterResponse,
    } as MsgEnableContractConverterResponse;
    if (
      object.contractAddress !== undefined &&
      object.contractAddress !== null
    ) {
      message.contractAddress = object.contractAddress;
    } else {
      message.contractAddress = "";
    }
    if (object.enable !== undefined && object.enable !== null) {
      message.enable = object.enable;
    } else {
      message.enable = false;
    }
    return message;
  },
};

const baseMsgSendWrapToken: object = { creator: "", ethAddress: "" };

export const MsgSendWrapToken = {
  encode(message: MsgSendWrapToken, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.ethAddress !== "") {
      writer.uint32(18).string(message.ethAddress);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgSendWrapToken {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgSendWrapToken } as MsgSendWrapToken;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.ethAddress = reader.string();
          break;
        case 3:
          message.amount = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSendWrapToken {
    const message = { ...baseMsgSendWrapToken } as MsgSendWrapToken;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.ethAddress !== undefined && object.ethAddress !== null) {
      message.ethAddress = String(object.ethAddress);
    } else {
      message.ethAddress = "";
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromJSON(object.amount);
    } else {
      message.amount = undefined;
    }
    return message;
  },

  toJSON(message: MsgSendWrapToken): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.ethAddress !== undefined && (obj.ethAddress = message.ethAddress);
    message.amount !== undefined &&
      (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgSendWrapToken>): MsgSendWrapToken {
    const message = { ...baseMsgSendWrapToken } as MsgSendWrapToken;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.ethAddress !== undefined && object.ethAddress !== null) {
      message.ethAddress = object.ethAddress;
    } else {
      message.ethAddress = "";
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromPartial(object.amount);
    } else {
      message.amount = undefined;
    }
    return message;
  },
};

const baseMsgSendWrapTokenResponse: object = { receiver: "", amount: "" };

export const MsgSendWrapTokenResponse = {
  encode(
    message: MsgSendWrapTokenResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.receiver !== "") {
      writer.uint32(10).string(message.receiver);
    }
    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgSendWrapTokenResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgSendWrapTokenResponse,
    } as MsgSendWrapTokenResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.receiver = reader.string();
          break;
        case 2:
          message.amount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSendWrapTokenResponse {
    const message = {
      ...baseMsgSendWrapTokenResponse,
    } as MsgSendWrapTokenResponse;
    if (object.receiver !== undefined && object.receiver !== null) {
      message.receiver = String(object.receiver);
    } else {
      message.receiver = "";
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = String(object.amount);
    } else {
      message.amount = "";
    }
    return message;
  },

  toJSON(message: MsgSendWrapTokenResponse): unknown {
    const obj: any = {};
    message.receiver !== undefined && (obj.receiver = message.receiver);
    message.amount !== undefined && (obj.amount = message.amount);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgSendWrapTokenResponse>
  ): MsgSendWrapTokenResponse {
    const message = {
      ...baseMsgSendWrapTokenResponse,
    } as MsgSendWrapTokenResponse;
    if (object.receiver !== undefined && object.receiver !== null) {
      message.receiver = object.receiver;
    } else {
      message.receiver = "";
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    } else {
      message.amount = "";
    }
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  CreateToken(request: MsgCreateToken): Promise<MsgCreateTokenResponse>;
  UpdateToken(request: MsgUpdateToken): Promise<MsgUpdateTokenResponse>;
  DeleteToken(request: MsgDeleteToken): Promise<MsgDeleteTokenResponse>;
  CreateMintperm(
    request: MsgCreateMintperm
  ): Promise<MsgCreateMintpermResponse>;
  UpdateMintperm(
    request: MsgUpdateMintperm
  ): Promise<MsgUpdateMintpermResponse>;
  DeleteMintperm(
    request: MsgDeleteMintperm
  ): Promise<MsgDeleteMintpermResponse>;
  Mint(request: MsgMint): Promise<MsgMintResponse>;
  CreateOptions(request: MsgCreateOptions): Promise<MsgCreateOptionsResponse>;
  UpdateOptions(request: MsgUpdateOptions): Promise<MsgUpdateOptionsResponse>;
  DeleteOptions(request: MsgDeleteOptions): Promise<MsgDeleteOptionsResponse>;
  Burn(request: MsgBurn): Promise<MsgBurnResponse>;
  WrapToken(request: MsgWrapToken): Promise<MsgWrapTokenResponse>;
  UnwrapToken(request: MsgUnwrapToken): Promise<MsgUnwrapTokenResponse>;
  SetConverterParams(
    request: MsgSetConverterParams
  ): Promise<MsgSetConverterParamsResponse>;
  EnableContractConverter(
    request: MsgEnableContractConverter
  ): Promise<MsgEnableContractConverterResponse>;
  /** this line is used by starport scaffolding # proto/tx/rpc */
  SendWrapToken(request: MsgSendWrapToken): Promise<MsgSendWrapTokenResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  CreateToken(request: MsgCreateToken): Promise<MsgCreateTokenResponse> {
    const data = MsgCreateToken.encode(request).finish();
    const promise = this.rpc.request(
      "thesixnetwork.sixprotocol.tokenmngr.Msg",
      "CreateToken",
      data
    );
    return promise.then((data) =>
      MsgCreateTokenResponse.decode(new Reader(data))
    );
  }

  UpdateToken(request: MsgUpdateToken): Promise<MsgUpdateTokenResponse> {
    const data = MsgUpdateToken.encode(request).finish();
    const promise = this.rpc.request(
      "thesixnetwork.sixprotocol.tokenmngr.Msg",
      "UpdateToken",
      data
    );
    return promise.then((data) =>
      MsgUpdateTokenResponse.decode(new Reader(data))
    );
  }

  DeleteToken(request: MsgDeleteToken): Promise<MsgDeleteTokenResponse> {
    const data = MsgDeleteToken.encode(request).finish();
    const promise = this.rpc.request(
      "thesixnetwork.sixprotocol.tokenmngr.Msg",
      "DeleteToken",
      data
    );
    return promise.then((data) =>
      MsgDeleteTokenResponse.decode(new Reader(data))
    );
  }

  CreateMintperm(
    request: MsgCreateMintperm
  ): Promise<MsgCreateMintpermResponse> {
    const data = MsgCreateMintperm.encode(request).finish();
    const promise = this.rpc.request(
      "thesixnetwork.sixprotocol.tokenmngr.Msg",
      "CreateMintperm",
      data
    );
    return promise.then((data) =>
      MsgCreateMintpermResponse.decode(new Reader(data))
    );
  }

  UpdateMintperm(
    request: MsgUpdateMintperm
  ): Promise<MsgUpdateMintpermResponse> {
    const data = MsgUpdateMintperm.encode(request).finish();
    const promise = this.rpc.request(
      "thesixnetwork.sixprotocol.tokenmngr.Msg",
      "UpdateMintperm",
      data
    );
    return promise.then((data) =>
      MsgUpdateMintpermResponse.decode(new Reader(data))
    );
  }

  DeleteMintperm(
    request: MsgDeleteMintperm
  ): Promise<MsgDeleteMintpermResponse> {
    const data = MsgDeleteMintperm.encode(request).finish();
    const promise = this.rpc.request(
      "thesixnetwork.sixprotocol.tokenmngr.Msg",
      "DeleteMintperm",
      data
    );
    return promise.then((data) =>
      MsgDeleteMintpermResponse.decode(new Reader(data))
    );
  }

  Mint(request: MsgMint): Promise<MsgMintResponse> {
    const data = MsgMint.encode(request).finish();
    const promise = this.rpc.request(
      "thesixnetwork.sixprotocol.tokenmngr.Msg",
      "Mint",
      data
    );
    return promise.then((data) => MsgMintResponse.decode(new Reader(data)));
  }

  CreateOptions(request: MsgCreateOptions): Promise<MsgCreateOptionsResponse> {
    const data = MsgCreateOptions.encode(request).finish();
    const promise = this.rpc.request(
      "thesixnetwork.sixprotocol.tokenmngr.Msg",
      "CreateOptions",
      data
    );
    return promise.then((data) =>
      MsgCreateOptionsResponse.decode(new Reader(data))
    );
  }

  UpdateOptions(request: MsgUpdateOptions): Promise<MsgUpdateOptionsResponse> {
    const data = MsgUpdateOptions.encode(request).finish();
    const promise = this.rpc.request(
      "thesixnetwork.sixprotocol.tokenmngr.Msg",
      "UpdateOptions",
      data
    );
    return promise.then((data) =>
      MsgUpdateOptionsResponse.decode(new Reader(data))
    );
  }

  DeleteOptions(request: MsgDeleteOptions): Promise<MsgDeleteOptionsResponse> {
    const data = MsgDeleteOptions.encode(request).finish();
    const promise = this.rpc.request(
      "thesixnetwork.sixprotocol.tokenmngr.Msg",
      "DeleteOptions",
      data
    );
    return promise.then((data) =>
      MsgDeleteOptionsResponse.decode(new Reader(data))
    );
  }

  Burn(request: MsgBurn): Promise<MsgBurnResponse> {
    const data = MsgBurn.encode(request).finish();
    const promise = this.rpc.request(
      "thesixnetwork.sixprotocol.tokenmngr.Msg",
      "Burn",
      data
    );
    return promise.then((data) => MsgBurnResponse.decode(new Reader(data)));
  }

  WrapToken(request: MsgWrapToken): Promise<MsgWrapTokenResponse> {
    const data = MsgWrapToken.encode(request).finish();
    const promise = this.rpc.request(
      "thesixnetwork.sixprotocol.tokenmngr.Msg",
      "WrapToken",
      data
    );
    return promise.then((data) =>
      MsgWrapTokenResponse.decode(new Reader(data))
    );
  }

  UnwrapToken(request: MsgUnwrapToken): Promise<MsgUnwrapTokenResponse> {
    const data = MsgUnwrapToken.encode(request).finish();
    const promise = this.rpc.request(
      "thesixnetwork.sixprotocol.tokenmngr.Msg",
      "UnwrapToken",
      data
    );
    return promise.then((data) =>
      MsgUnwrapTokenResponse.decode(new Reader(data))
    );
  }

  SetConverterParams(
    request: MsgSetConverterParams
  ): Promise<MsgSetConverterParamsResponse> {
    const data = MsgSetConverterParams.encode(request).finish();
    const promise = this.rpc.request(
      "thesixnetwork.sixprotocol.tokenmngr.Msg",
      "SetConverterParams",
      data
    );
    return promise.then((data) =>
      MsgSetConverterParamsResponse.decode(new Reader(data))
    );
  }

  EnableContractConverter(
    request: MsgEnableContractConverter
  ): Promise<MsgEnableContractConverterResponse> {
    const data = MsgEnableContractConverter.encode(request).finish();
    const promise = this.rpc.request(
      "thesixnetwork.sixprotocol.tokenmngr.Msg",
      "EnableContractConverter",
      data
    );
    return promise.then((data) =>
      MsgEnableContractConverterResponse.decode(new Reader(data))
    );
  }

  SendWrapToken(request: MsgSendWrapToken): Promise<MsgSendWrapTokenResponse> {
    const data = MsgSendWrapToken.encode(request).finish();
    const promise = this.rpc.request(
      "thesixnetwork.sixprotocol.tokenmngr.Msg",
      "SendWrapToken",
      data
    );
    return promise.then((data) =>
      MsgSendWrapTokenResponse.decode(new Reader(data))
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

declare var self: any | undefined;
declare var window: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

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

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}


