/* eslint-disable */
import { Reader, util, configure, Writer } from "protobufjs/minimal";
import * as Long from "long";

export const protobufPackage = "thesixnetwork.sixnft.nftoracle";

export interface MsgCreateMintRequest {
  creator: string;
  nftSchemaCode: string;
  tokenId: string;
  requiredConfirm: number;
}

export interface MsgCreateMintRequestResponse {
  id: number;
  nftSchemaCode: string;
  tokenId: string;
}

export interface MsgSubmitMintResponse {
  creator: string;
  mintRequestID: number;
  base64NftData: string;
}

export interface MsgSubmitMintResponseResponse {
  mintRequestID: string;
}

export interface MsgCreateActionRequest {
  creator: string;
  vm: string;
  base64ActionSignature: string;
  requiredConfirm: number;
}

export interface MsgCreateActionRequestResponse {
  id: number;
}

export interface MsgSubmitActionResponse {
  creator: string;
  actionRequestID: number;
  base64NftData: string;
}

export interface MsgSubmitActionResponseResponse {
  actionRequestID: string;
}

export interface MsgCreateVerifyCollectionOwnerRequest {
  creator: string;
  nftSchemaCode: string;
  base64VerifyRequestorSignature: string;
  requiredConfirm: number;
}

export interface MsgCreateVerifyCollectionOwnerRequestResponse {
  id: number;
  nftSchemaCode: string;
  ownerAddress: string;
}

export interface MsgSubmitVerifyCollectionOwner {
  creator: string;
  verifyRequestID: number;
  nftSchemaCode: string;
  base64OriginContractInfo: string;
}

export interface MsgSubmitVerifyCollectionOwnerResponse {
  verifyRequestID: number;
}

export interface MsgSetMinimumConfirmation {
  creator: string;
  newConfirmation: string;
}

export interface MsgSetMinimumConfirmationResponse {
  newConfirmation: string;
}

const baseMsgCreateMintRequest: object = {
  creator: "",
  nftSchemaCode: "",
  tokenId: "",
  requiredConfirm: 0,
};

export const MsgCreateMintRequest = {
  encode(
    message: MsgCreateMintRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.nftSchemaCode !== "") {
      writer.uint32(18).string(message.nftSchemaCode);
    }
    if (message.tokenId !== "") {
      writer.uint32(26).string(message.tokenId);
    }
    if (message.requiredConfirm !== 0) {
      writer.uint32(32).uint64(message.requiredConfirm);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateMintRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateMintRequest } as MsgCreateMintRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.nftSchemaCode = reader.string();
          break;
        case 3:
          message.tokenId = reader.string();
          break;
        case 4:
          message.requiredConfirm = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateMintRequest {
    const message = { ...baseMsgCreateMintRequest } as MsgCreateMintRequest;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.nftSchemaCode !== undefined && object.nftSchemaCode !== null) {
      message.nftSchemaCode = String(object.nftSchemaCode);
    } else {
      message.nftSchemaCode = "";
    }
    if (object.tokenId !== undefined && object.tokenId !== null) {
      message.tokenId = String(object.tokenId);
    } else {
      message.tokenId = "";
    }
    if (
      object.requiredConfirm !== undefined &&
      object.requiredConfirm !== null
    ) {
      message.requiredConfirm = Number(object.requiredConfirm);
    } else {
      message.requiredConfirm = 0;
    }
    return message;
  },

  toJSON(message: MsgCreateMintRequest): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.nftSchemaCode !== undefined &&
      (obj.nftSchemaCode = message.nftSchemaCode);
    message.tokenId !== undefined && (obj.tokenId = message.tokenId);
    message.requiredConfirm !== undefined &&
      (obj.requiredConfirm = message.requiredConfirm);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateMintRequest>): MsgCreateMintRequest {
    const message = { ...baseMsgCreateMintRequest } as MsgCreateMintRequest;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.nftSchemaCode !== undefined && object.nftSchemaCode !== null) {
      message.nftSchemaCode = object.nftSchemaCode;
    } else {
      message.nftSchemaCode = "";
    }
    if (object.tokenId !== undefined && object.tokenId !== null) {
      message.tokenId = object.tokenId;
    } else {
      message.tokenId = "";
    }
    if (
      object.requiredConfirm !== undefined &&
      object.requiredConfirm !== null
    ) {
      message.requiredConfirm = object.requiredConfirm;
    } else {
      message.requiredConfirm = 0;
    }
    return message;
  },
};

const baseMsgCreateMintRequestResponse: object = {
  id: 0,
  nftSchemaCode: "",
  tokenId: "",
};

export const MsgCreateMintRequestResponse = {
  encode(
    message: MsgCreateMintRequestResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.nftSchemaCode !== "") {
      writer.uint32(18).string(message.nftSchemaCode);
    }
    if (message.tokenId !== "") {
      writer.uint32(26).string(message.tokenId);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgCreateMintRequestResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreateMintRequestResponse,
    } as MsgCreateMintRequestResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.nftSchemaCode = reader.string();
          break;
        case 3:
          message.tokenId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateMintRequestResponse {
    const message = {
      ...baseMsgCreateMintRequestResponse,
    } as MsgCreateMintRequestResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    if (object.nftSchemaCode !== undefined && object.nftSchemaCode !== null) {
      message.nftSchemaCode = String(object.nftSchemaCode);
    } else {
      message.nftSchemaCode = "";
    }
    if (object.tokenId !== undefined && object.tokenId !== null) {
      message.tokenId = String(object.tokenId);
    } else {
      message.tokenId = "";
    }
    return message;
  },

  toJSON(message: MsgCreateMintRequestResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.nftSchemaCode !== undefined &&
      (obj.nftSchemaCode = message.nftSchemaCode);
    message.tokenId !== undefined && (obj.tokenId = message.tokenId);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCreateMintRequestResponse>
  ): MsgCreateMintRequestResponse {
    const message = {
      ...baseMsgCreateMintRequestResponse,
    } as MsgCreateMintRequestResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    if (object.nftSchemaCode !== undefined && object.nftSchemaCode !== null) {
      message.nftSchemaCode = object.nftSchemaCode;
    } else {
      message.nftSchemaCode = "";
    }
    if (object.tokenId !== undefined && object.tokenId !== null) {
      message.tokenId = object.tokenId;
    } else {
      message.tokenId = "";
    }
    return message;
  },
};

const baseMsgSubmitMintResponse: object = {
  creator: "",
  mintRequestID: 0,
  base64NftData: "",
};

export const MsgSubmitMintResponse = {
  encode(
    message: MsgSubmitMintResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.mintRequestID !== 0) {
      writer.uint32(16).uint64(message.mintRequestID);
    }
    if (message.base64NftData !== "") {
      writer.uint32(26).string(message.base64NftData);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgSubmitMintResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgSubmitMintResponse } as MsgSubmitMintResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.mintRequestID = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.base64NftData = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSubmitMintResponse {
    const message = { ...baseMsgSubmitMintResponse } as MsgSubmitMintResponse;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.mintRequestID !== undefined && object.mintRequestID !== null) {
      message.mintRequestID = Number(object.mintRequestID);
    } else {
      message.mintRequestID = 0;
    }
    if (object.base64NftData !== undefined && object.base64NftData !== null) {
      message.base64NftData = String(object.base64NftData);
    } else {
      message.base64NftData = "";
    }
    return message;
  },

  toJSON(message: MsgSubmitMintResponse): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.mintRequestID !== undefined &&
      (obj.mintRequestID = message.mintRequestID);
    message.base64NftData !== undefined &&
      (obj.base64NftData = message.base64NftData);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgSubmitMintResponse>
  ): MsgSubmitMintResponse {
    const message = { ...baseMsgSubmitMintResponse } as MsgSubmitMintResponse;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.mintRequestID !== undefined && object.mintRequestID !== null) {
      message.mintRequestID = object.mintRequestID;
    } else {
      message.mintRequestID = 0;
    }
    if (object.base64NftData !== undefined && object.base64NftData !== null) {
      message.base64NftData = object.base64NftData;
    } else {
      message.base64NftData = "";
    }
    return message;
  },
};

const baseMsgSubmitMintResponseResponse: object = { mintRequestID: "" };

export const MsgSubmitMintResponseResponse = {
  encode(
    message: MsgSubmitMintResponseResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.mintRequestID !== "") {
      writer.uint32(10).string(message.mintRequestID);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgSubmitMintResponseResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgSubmitMintResponseResponse,
    } as MsgSubmitMintResponseResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.mintRequestID = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSubmitMintResponseResponse {
    const message = {
      ...baseMsgSubmitMintResponseResponse,
    } as MsgSubmitMintResponseResponse;
    if (object.mintRequestID !== undefined && object.mintRequestID !== null) {
      message.mintRequestID = String(object.mintRequestID);
    } else {
      message.mintRequestID = "";
    }
    return message;
  },

  toJSON(message: MsgSubmitMintResponseResponse): unknown {
    const obj: any = {};
    message.mintRequestID !== undefined &&
      (obj.mintRequestID = message.mintRequestID);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgSubmitMintResponseResponse>
  ): MsgSubmitMintResponseResponse {
    const message = {
      ...baseMsgSubmitMintResponseResponse,
    } as MsgSubmitMintResponseResponse;
    if (object.mintRequestID !== undefined && object.mintRequestID !== null) {
      message.mintRequestID = object.mintRequestID;
    } else {
      message.mintRequestID = "";
    }
    return message;
  },
};

const baseMsgCreateActionRequest: object = {
  creator: "",
  vm: "",
  base64ActionSignature: "",
  requiredConfirm: 0,
};

export const MsgCreateActionRequest = {
  encode(
    message: MsgCreateActionRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.vm !== "") {
      writer.uint32(18).string(message.vm);
    }
    if (message.base64ActionSignature !== "") {
      writer.uint32(26).string(message.base64ActionSignature);
    }
    if (message.requiredConfirm !== 0) {
      writer.uint32(32).uint64(message.requiredConfirm);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateActionRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateActionRequest } as MsgCreateActionRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.vm = reader.string();
          break;
        case 3:
          message.base64ActionSignature = reader.string();
          break;
        case 4:
          message.requiredConfirm = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateActionRequest {
    const message = { ...baseMsgCreateActionRequest } as MsgCreateActionRequest;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.vm !== undefined && object.vm !== null) {
      message.vm = String(object.vm);
    } else {
      message.vm = "";
    }
    if (
      object.base64ActionSignature !== undefined &&
      object.base64ActionSignature !== null
    ) {
      message.base64ActionSignature = String(object.base64ActionSignature);
    } else {
      message.base64ActionSignature = "";
    }
    if (
      object.requiredConfirm !== undefined &&
      object.requiredConfirm !== null
    ) {
      message.requiredConfirm = Number(object.requiredConfirm);
    } else {
      message.requiredConfirm = 0;
    }
    return message;
  },

  toJSON(message: MsgCreateActionRequest): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.vm !== undefined && (obj.vm = message.vm);
    message.base64ActionSignature !== undefined &&
      (obj.base64ActionSignature = message.base64ActionSignature);
    message.requiredConfirm !== undefined &&
      (obj.requiredConfirm = message.requiredConfirm);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCreateActionRequest>
  ): MsgCreateActionRequest {
    const message = { ...baseMsgCreateActionRequest } as MsgCreateActionRequest;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.vm !== undefined && object.vm !== null) {
      message.vm = object.vm;
    } else {
      message.vm = "";
    }
    if (
      object.base64ActionSignature !== undefined &&
      object.base64ActionSignature !== null
    ) {
      message.base64ActionSignature = object.base64ActionSignature;
    } else {
      message.base64ActionSignature = "";
    }
    if (
      object.requiredConfirm !== undefined &&
      object.requiredConfirm !== null
    ) {
      message.requiredConfirm = object.requiredConfirm;
    } else {
      message.requiredConfirm = 0;
    }
    return message;
  },
};

const baseMsgCreateActionRequestResponse: object = { id: 0 };

export const MsgCreateActionRequestResponse = {
  encode(
    message: MsgCreateActionRequestResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgCreateActionRequestResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreateActionRequestResponse,
    } as MsgCreateActionRequestResponse;
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

  fromJSON(object: any): MsgCreateActionRequestResponse {
    const message = {
      ...baseMsgCreateActionRequestResponse,
    } as MsgCreateActionRequestResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: MsgCreateActionRequestResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCreateActionRequestResponse>
  ): MsgCreateActionRequestResponse {
    const message = {
      ...baseMsgCreateActionRequestResponse,
    } as MsgCreateActionRequestResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseMsgSubmitActionResponse: object = {
  creator: "",
  actionRequestID: 0,
  base64NftData: "",
};

export const MsgSubmitActionResponse = {
  encode(
    message: MsgSubmitActionResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.actionRequestID !== 0) {
      writer.uint32(16).uint64(message.actionRequestID);
    }
    if (message.base64NftData !== "") {
      writer.uint32(26).string(message.base64NftData);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgSubmitActionResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgSubmitActionResponse,
    } as MsgSubmitActionResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.actionRequestID = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.base64NftData = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSubmitActionResponse {
    const message = {
      ...baseMsgSubmitActionResponse,
    } as MsgSubmitActionResponse;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (
      object.actionRequestID !== undefined &&
      object.actionRequestID !== null
    ) {
      message.actionRequestID = Number(object.actionRequestID);
    } else {
      message.actionRequestID = 0;
    }
    if (object.base64NftData !== undefined && object.base64NftData !== null) {
      message.base64NftData = String(object.base64NftData);
    } else {
      message.base64NftData = "";
    }
    return message;
  },

  toJSON(message: MsgSubmitActionResponse): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.actionRequestID !== undefined &&
      (obj.actionRequestID = message.actionRequestID);
    message.base64NftData !== undefined &&
      (obj.base64NftData = message.base64NftData);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgSubmitActionResponse>
  ): MsgSubmitActionResponse {
    const message = {
      ...baseMsgSubmitActionResponse,
    } as MsgSubmitActionResponse;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (
      object.actionRequestID !== undefined &&
      object.actionRequestID !== null
    ) {
      message.actionRequestID = object.actionRequestID;
    } else {
      message.actionRequestID = 0;
    }
    if (object.base64NftData !== undefined && object.base64NftData !== null) {
      message.base64NftData = object.base64NftData;
    } else {
      message.base64NftData = "";
    }
    return message;
  },
};

const baseMsgSubmitActionResponseResponse: object = { actionRequestID: "" };

export const MsgSubmitActionResponseResponse = {
  encode(
    message: MsgSubmitActionResponseResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.actionRequestID !== "") {
      writer.uint32(10).string(message.actionRequestID);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgSubmitActionResponseResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgSubmitActionResponseResponse,
    } as MsgSubmitActionResponseResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.actionRequestID = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSubmitActionResponseResponse {
    const message = {
      ...baseMsgSubmitActionResponseResponse,
    } as MsgSubmitActionResponseResponse;
    if (
      object.actionRequestID !== undefined &&
      object.actionRequestID !== null
    ) {
      message.actionRequestID = String(object.actionRequestID);
    } else {
      message.actionRequestID = "";
    }
    return message;
  },

  toJSON(message: MsgSubmitActionResponseResponse): unknown {
    const obj: any = {};
    message.actionRequestID !== undefined &&
      (obj.actionRequestID = message.actionRequestID);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgSubmitActionResponseResponse>
  ): MsgSubmitActionResponseResponse {
    const message = {
      ...baseMsgSubmitActionResponseResponse,
    } as MsgSubmitActionResponseResponse;
    if (
      object.actionRequestID !== undefined &&
      object.actionRequestID !== null
    ) {
      message.actionRequestID = object.actionRequestID;
    } else {
      message.actionRequestID = "";
    }
    return message;
  },
};

const baseMsgCreateVerifyCollectionOwnerRequest: object = {
  creator: "",
  nftSchemaCode: "",
  base64VerifyRequestorSignature: "",
  requiredConfirm: 0,
};

export const MsgCreateVerifyCollectionOwnerRequest = {
  encode(
    message: MsgCreateVerifyCollectionOwnerRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.nftSchemaCode !== "") {
      writer.uint32(18).string(message.nftSchemaCode);
    }
    if (message.base64VerifyRequestorSignature !== "") {
      writer.uint32(26).string(message.base64VerifyRequestorSignature);
    }
    if (message.requiredConfirm !== 0) {
      writer.uint32(32).uint64(message.requiredConfirm);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgCreateVerifyCollectionOwnerRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreateVerifyCollectionOwnerRequest,
    } as MsgCreateVerifyCollectionOwnerRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.nftSchemaCode = reader.string();
          break;
        case 3:
          message.base64VerifyRequestorSignature = reader.string();
          break;
        case 4:
          message.requiredConfirm = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateVerifyCollectionOwnerRequest {
    const message = {
      ...baseMsgCreateVerifyCollectionOwnerRequest,
    } as MsgCreateVerifyCollectionOwnerRequest;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.nftSchemaCode !== undefined && object.nftSchemaCode !== null) {
      message.nftSchemaCode = String(object.nftSchemaCode);
    } else {
      message.nftSchemaCode = "";
    }
    if (
      object.base64VerifyRequestorSignature !== undefined &&
      object.base64VerifyRequestorSignature !== null
    ) {
      message.base64VerifyRequestorSignature = String(
        object.base64VerifyRequestorSignature
      );
    } else {
      message.base64VerifyRequestorSignature = "";
    }
    if (
      object.requiredConfirm !== undefined &&
      object.requiredConfirm !== null
    ) {
      message.requiredConfirm = Number(object.requiredConfirm);
    } else {
      message.requiredConfirm = 0;
    }
    return message;
  },

  toJSON(message: MsgCreateVerifyCollectionOwnerRequest): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.nftSchemaCode !== undefined &&
      (obj.nftSchemaCode = message.nftSchemaCode);
    message.base64VerifyRequestorSignature !== undefined &&
      (obj.base64VerifyRequestorSignature =
        message.base64VerifyRequestorSignature);
    message.requiredConfirm !== undefined &&
      (obj.requiredConfirm = message.requiredConfirm);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCreateVerifyCollectionOwnerRequest>
  ): MsgCreateVerifyCollectionOwnerRequest {
    const message = {
      ...baseMsgCreateVerifyCollectionOwnerRequest,
    } as MsgCreateVerifyCollectionOwnerRequest;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.nftSchemaCode !== undefined && object.nftSchemaCode !== null) {
      message.nftSchemaCode = object.nftSchemaCode;
    } else {
      message.nftSchemaCode = "";
    }
    if (
      object.base64VerifyRequestorSignature !== undefined &&
      object.base64VerifyRequestorSignature !== null
    ) {
      message.base64VerifyRequestorSignature =
        object.base64VerifyRequestorSignature;
    } else {
      message.base64VerifyRequestorSignature = "";
    }
    if (
      object.requiredConfirm !== undefined &&
      object.requiredConfirm !== null
    ) {
      message.requiredConfirm = object.requiredConfirm;
    } else {
      message.requiredConfirm = 0;
    }
    return message;
  },
};

const baseMsgCreateVerifyCollectionOwnerRequestResponse: object = {
  id: 0,
  nftSchemaCode: "",
  ownerAddress: "",
};

export const MsgCreateVerifyCollectionOwnerRequestResponse = {
  encode(
    message: MsgCreateVerifyCollectionOwnerRequestResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.nftSchemaCode !== "") {
      writer.uint32(18).string(message.nftSchemaCode);
    }
    if (message.ownerAddress !== "") {
      writer.uint32(26).string(message.ownerAddress);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgCreateVerifyCollectionOwnerRequestResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreateVerifyCollectionOwnerRequestResponse,
    } as MsgCreateVerifyCollectionOwnerRequestResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.nftSchemaCode = reader.string();
          break;
        case 3:
          message.ownerAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateVerifyCollectionOwnerRequestResponse {
    const message = {
      ...baseMsgCreateVerifyCollectionOwnerRequestResponse,
    } as MsgCreateVerifyCollectionOwnerRequestResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    if (object.nftSchemaCode !== undefined && object.nftSchemaCode !== null) {
      message.nftSchemaCode = String(object.nftSchemaCode);
    } else {
      message.nftSchemaCode = "";
    }
    if (object.ownerAddress !== undefined && object.ownerAddress !== null) {
      message.ownerAddress = String(object.ownerAddress);
    } else {
      message.ownerAddress = "";
    }
    return message;
  },

  toJSON(message: MsgCreateVerifyCollectionOwnerRequestResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.nftSchemaCode !== undefined &&
      (obj.nftSchemaCode = message.nftSchemaCode);
    message.ownerAddress !== undefined &&
      (obj.ownerAddress = message.ownerAddress);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCreateVerifyCollectionOwnerRequestResponse>
  ): MsgCreateVerifyCollectionOwnerRequestResponse {
    const message = {
      ...baseMsgCreateVerifyCollectionOwnerRequestResponse,
    } as MsgCreateVerifyCollectionOwnerRequestResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    if (object.nftSchemaCode !== undefined && object.nftSchemaCode !== null) {
      message.nftSchemaCode = object.nftSchemaCode;
    } else {
      message.nftSchemaCode = "";
    }
    if (object.ownerAddress !== undefined && object.ownerAddress !== null) {
      message.ownerAddress = object.ownerAddress;
    } else {
      message.ownerAddress = "";
    }
    return message;
  },
};

const baseMsgSubmitVerifyCollectionOwner: object = {
  creator: "",
  verifyRequestID: 0,
  nftSchemaCode: "",
  base64OriginContractInfo: "",
};

export const MsgSubmitVerifyCollectionOwner = {
  encode(
    message: MsgSubmitVerifyCollectionOwner,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.verifyRequestID !== 0) {
      writer.uint32(16).uint64(message.verifyRequestID);
    }
    if (message.nftSchemaCode !== "") {
      writer.uint32(26).string(message.nftSchemaCode);
    }
    if (message.base64OriginContractInfo !== "") {
      writer.uint32(34).string(message.base64OriginContractInfo);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgSubmitVerifyCollectionOwner {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgSubmitVerifyCollectionOwner,
    } as MsgSubmitVerifyCollectionOwner;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.verifyRequestID = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.nftSchemaCode = reader.string();
          break;
        case 4:
          message.base64OriginContractInfo = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSubmitVerifyCollectionOwner {
    const message = {
      ...baseMsgSubmitVerifyCollectionOwner,
    } as MsgSubmitVerifyCollectionOwner;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (
      object.verifyRequestID !== undefined &&
      object.verifyRequestID !== null
    ) {
      message.verifyRequestID = Number(object.verifyRequestID);
    } else {
      message.verifyRequestID = 0;
    }
    if (object.nftSchemaCode !== undefined && object.nftSchemaCode !== null) {
      message.nftSchemaCode = String(object.nftSchemaCode);
    } else {
      message.nftSchemaCode = "";
    }
    if (
      object.base64OriginContractInfo !== undefined &&
      object.base64OriginContractInfo !== null
    ) {
      message.base64OriginContractInfo = String(
        object.base64OriginContractInfo
      );
    } else {
      message.base64OriginContractInfo = "";
    }
    return message;
  },

  toJSON(message: MsgSubmitVerifyCollectionOwner): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.verifyRequestID !== undefined &&
      (obj.verifyRequestID = message.verifyRequestID);
    message.nftSchemaCode !== undefined &&
      (obj.nftSchemaCode = message.nftSchemaCode);
    message.base64OriginContractInfo !== undefined &&
      (obj.base64OriginContractInfo = message.base64OriginContractInfo);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgSubmitVerifyCollectionOwner>
  ): MsgSubmitVerifyCollectionOwner {
    const message = {
      ...baseMsgSubmitVerifyCollectionOwner,
    } as MsgSubmitVerifyCollectionOwner;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (
      object.verifyRequestID !== undefined &&
      object.verifyRequestID !== null
    ) {
      message.verifyRequestID = object.verifyRequestID;
    } else {
      message.verifyRequestID = 0;
    }
    if (object.nftSchemaCode !== undefined && object.nftSchemaCode !== null) {
      message.nftSchemaCode = object.nftSchemaCode;
    } else {
      message.nftSchemaCode = "";
    }
    if (
      object.base64OriginContractInfo !== undefined &&
      object.base64OriginContractInfo !== null
    ) {
      message.base64OriginContractInfo = object.base64OriginContractInfo;
    } else {
      message.base64OriginContractInfo = "";
    }
    return message;
  },
};

const baseMsgSubmitVerifyCollectionOwnerResponse: object = {
  verifyRequestID: 0,
};

export const MsgSubmitVerifyCollectionOwnerResponse = {
  encode(
    message: MsgSubmitVerifyCollectionOwnerResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.verifyRequestID !== 0) {
      writer.uint32(8).uint64(message.verifyRequestID);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgSubmitVerifyCollectionOwnerResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgSubmitVerifyCollectionOwnerResponse,
    } as MsgSubmitVerifyCollectionOwnerResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.verifyRequestID = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSubmitVerifyCollectionOwnerResponse {
    const message = {
      ...baseMsgSubmitVerifyCollectionOwnerResponse,
    } as MsgSubmitVerifyCollectionOwnerResponse;
    if (
      object.verifyRequestID !== undefined &&
      object.verifyRequestID !== null
    ) {
      message.verifyRequestID = Number(object.verifyRequestID);
    } else {
      message.verifyRequestID = 0;
    }
    return message;
  },

  toJSON(message: MsgSubmitVerifyCollectionOwnerResponse): unknown {
    const obj: any = {};
    message.verifyRequestID !== undefined &&
      (obj.verifyRequestID = message.verifyRequestID);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgSubmitVerifyCollectionOwnerResponse>
  ): MsgSubmitVerifyCollectionOwnerResponse {
    const message = {
      ...baseMsgSubmitVerifyCollectionOwnerResponse,
    } as MsgSubmitVerifyCollectionOwnerResponse;
    if (
      object.verifyRequestID !== undefined &&
      object.verifyRequestID !== null
    ) {
      message.verifyRequestID = object.verifyRequestID;
    } else {
      message.verifyRequestID = 0;
    }
    return message;
  },
};

const baseMsgSetMinimumConfirmation: object = {
  creator: "",
  newConfirmation: "",
};

export const MsgSetMinimumConfirmation = {
  encode(
    message: MsgSetMinimumConfirmation,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.newConfirmation !== "") {
      writer.uint32(18).string(message.newConfirmation);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgSetMinimumConfirmation {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgSetMinimumConfirmation,
    } as MsgSetMinimumConfirmation;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.newConfirmation = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSetMinimumConfirmation {
    const message = {
      ...baseMsgSetMinimumConfirmation,
    } as MsgSetMinimumConfirmation;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (
      object.newConfirmation !== undefined &&
      object.newConfirmation !== null
    ) {
      message.newConfirmation = String(object.newConfirmation);
    } else {
      message.newConfirmation = "";
    }
    return message;
  },

  toJSON(message: MsgSetMinimumConfirmation): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.newConfirmation !== undefined &&
      (obj.newConfirmation = message.newConfirmation);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgSetMinimumConfirmation>
  ): MsgSetMinimumConfirmation {
    const message = {
      ...baseMsgSetMinimumConfirmation,
    } as MsgSetMinimumConfirmation;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (
      object.newConfirmation !== undefined &&
      object.newConfirmation !== null
    ) {
      message.newConfirmation = object.newConfirmation;
    } else {
      message.newConfirmation = "";
    }
    return message;
  },
};

const baseMsgSetMinimumConfirmationResponse: object = { newConfirmation: "" };

export const MsgSetMinimumConfirmationResponse = {
  encode(
    message: MsgSetMinimumConfirmationResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.newConfirmation !== "") {
      writer.uint32(10).string(message.newConfirmation);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgSetMinimumConfirmationResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgSetMinimumConfirmationResponse,
    } as MsgSetMinimumConfirmationResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.newConfirmation = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSetMinimumConfirmationResponse {
    const message = {
      ...baseMsgSetMinimumConfirmationResponse,
    } as MsgSetMinimumConfirmationResponse;
    if (
      object.newConfirmation !== undefined &&
      object.newConfirmation !== null
    ) {
      message.newConfirmation = String(object.newConfirmation);
    } else {
      message.newConfirmation = "";
    }
    return message;
  },

  toJSON(message: MsgSetMinimumConfirmationResponse): unknown {
    const obj: any = {};
    message.newConfirmation !== undefined &&
      (obj.newConfirmation = message.newConfirmation);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgSetMinimumConfirmationResponse>
  ): MsgSetMinimumConfirmationResponse {
    const message = {
      ...baseMsgSetMinimumConfirmationResponse,
    } as MsgSetMinimumConfirmationResponse;
    if (
      object.newConfirmation !== undefined &&
      object.newConfirmation !== null
    ) {
      message.newConfirmation = object.newConfirmation;
    } else {
      message.newConfirmation = "";
    }
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  CreateMintRequest(
    request: MsgCreateMintRequest
  ): Promise<MsgCreateMintRequestResponse>;
  SubmitMintResponse(
    request: MsgSubmitMintResponse
  ): Promise<MsgSubmitMintResponseResponse>;
  CreateActionRequest(
    request: MsgCreateActionRequest
  ): Promise<MsgCreateActionRequestResponse>;
  SubmitActionResponse(
    request: MsgSubmitActionResponse
  ): Promise<MsgSubmitActionResponseResponse>;
  CreateVerifyCollectionOwnerRequest(
    request: MsgCreateVerifyCollectionOwnerRequest
  ): Promise<MsgCreateVerifyCollectionOwnerRequestResponse>;
  SubmitVerifyCollectionOwner(
    request: MsgSubmitVerifyCollectionOwner
  ): Promise<MsgSubmitVerifyCollectionOwnerResponse>;
  /** this line is used by starport scaffolding # proto/tx/rpc */
  SetMinimumConfirmation(
    request: MsgSetMinimumConfirmation
  ): Promise<MsgSetMinimumConfirmationResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  CreateMintRequest(
    request: MsgCreateMintRequest
  ): Promise<MsgCreateMintRequestResponse> {
    const data = MsgCreateMintRequest.encode(request).finish();
    const promise = this.rpc.request(
      "thesixnetwork.sixnft.nftoracle.Msg",
      "CreateMintRequest",
      data
    );
    return promise.then((data) =>
      MsgCreateMintRequestResponse.decode(new Reader(data))
    );
  }

  SubmitMintResponse(
    request: MsgSubmitMintResponse
  ): Promise<MsgSubmitMintResponseResponse> {
    const data = MsgSubmitMintResponse.encode(request).finish();
    const promise = this.rpc.request(
      "thesixnetwork.sixnft.nftoracle.Msg",
      "SubmitMintResponse",
      data
    );
    return promise.then((data) =>
      MsgSubmitMintResponseResponse.decode(new Reader(data))
    );
  }

  CreateActionRequest(
    request: MsgCreateActionRequest
  ): Promise<MsgCreateActionRequestResponse> {
    const data = MsgCreateActionRequest.encode(request).finish();
    const promise = this.rpc.request(
      "thesixnetwork.sixnft.nftoracle.Msg",
      "CreateActionRequest",
      data
    );
    return promise.then((data) =>
      MsgCreateActionRequestResponse.decode(new Reader(data))
    );
  }

  SubmitActionResponse(
    request: MsgSubmitActionResponse
  ): Promise<MsgSubmitActionResponseResponse> {
    const data = MsgSubmitActionResponse.encode(request).finish();
    const promise = this.rpc.request(
      "thesixnetwork.sixnft.nftoracle.Msg",
      "SubmitActionResponse",
      data
    );
    return promise.then((data) =>
      MsgSubmitActionResponseResponse.decode(new Reader(data))
    );
  }

  CreateVerifyCollectionOwnerRequest(
    request: MsgCreateVerifyCollectionOwnerRequest
  ): Promise<MsgCreateVerifyCollectionOwnerRequestResponse> {
    const data = MsgCreateVerifyCollectionOwnerRequest.encode(request).finish();
    const promise = this.rpc.request(
      "thesixnetwork.sixnft.nftoracle.Msg",
      "CreateVerifyCollectionOwnerRequest",
      data
    );
    return promise.then((data) =>
      MsgCreateVerifyCollectionOwnerRequestResponse.decode(new Reader(data))
    );
  }

  SubmitVerifyCollectionOwner(
    request: MsgSubmitVerifyCollectionOwner
  ): Promise<MsgSubmitVerifyCollectionOwnerResponse> {
    const data = MsgSubmitVerifyCollectionOwner.encode(request).finish();
    const promise = this.rpc.request(
      "thesixnetwork.sixnft.nftoracle.Msg",
      "SubmitVerifyCollectionOwner",
      data
    );
    return promise.then((data) =>
      MsgSubmitVerifyCollectionOwnerResponse.decode(new Reader(data))
    );
  }

  SetMinimumConfirmation(
    request: MsgSetMinimumConfirmation
  ): Promise<MsgSetMinimumConfirmationResponse> {
    const data = MsgSetMinimumConfirmation.encode(request).finish();
    const promise = this.rpc.request(
      "thesixnetwork.sixnft.nftoracle.Msg",
      "SetMinimumConfirmation",
      data
    );
    return promise.then((data) =>
      MsgSetMinimumConfirmationResponse.decode(new Reader(data))
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

if (util.Long !== Long) {
  util.Long = Long as any;
  configure();
}
