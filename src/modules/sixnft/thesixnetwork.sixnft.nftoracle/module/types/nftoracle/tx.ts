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

export interface MsgCreateActionSigner {
  creator: string;
  base64EncodedSetSignerAction: string;
}

export interface MsgCreateActionSignerResponse {
  ownerAddress: string;
  signerAddress: string;
  expireAt: string;
}

export interface MsgUpdateActionSigner {
  creator: string;
  base64EncodedSetSignerAction: string;
}

export interface MsgUpdateActionSignerResponse {
  ownerAddress: string;
  signerAddress: string;
  expireAt: string;
}

export interface MsgDeleteActionSigner {
  creator: string;
  base64EncodedSetSignerAction: string;
}

export interface MsgDeleteActionSignerResponse {
  ownerAddress: string;
  signerAddress: string;
}

export interface MsgCreateActionSignerConfig {
  creator: string;
  chain: string;
  rpc_endpoint: string;
  contractAddress: string;
  contractName: string;
  contractOwner: string;
}

export interface MsgCreateActionSignerConfigResponse {
  chain: string;
  rpc_endpoint: string;
  contractAddress: string;
  contractName: string;
  contractOwner: string;
}

export interface MsgUpdateActionSignerConfig {
  creator: string;
  chain: string;
  rpc_endpoint: string;
  contractAddress: string;
  contractName: string;
  contractOwner: string;
}

export interface MsgUpdateActionSignerConfigResponse {
  chain: string;
  rpc_endpoint: string;
  new_rpc_endpoint: string;
  contractAddress: string;
  new_contractAddress: string;
  contractName: string;
  new_contractName: string;
  contractOwner: string;
  new_contractOwner: string;
}

export interface MsgDeleteActionSignerConfig {
  creator: string;
  chain: string;
}

export interface MsgDeleteActionSignerConfigResponse {
  chain: string;
}

export interface MsgCreateSyncActionSigner {
  creator: string;
  chain: string;
  actorAddress: string;
  ownerAddress: string;
  requiredConfirm: number;
}

export interface MsgCreateSyncActionSignerResponse {
  id: number;
  chain: string;
  ownerAddress: string;
  actorAddress: string;
}

export interface MsgSubmitSyncActionSigner {
  creator: string;
  syncId: number;
  chain: string;
  actorAddress: string;
  ownerAddress: string;
  /**
   * usign epoch because the data will came from smart contract
   * and it is easier to make communication between smart contract and cosmos
   */
  expire_epoch: string;
}

export interface MsgSubmitSyncActionSignerResponse {
  verifyRequestID: number;
  expireAt: string;
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

const baseMsgCreateActionSigner: object = {
  creator: "",
  base64EncodedSetSignerAction: "",
};

export const MsgCreateActionSigner = {
  encode(
    message: MsgCreateActionSigner,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.base64EncodedSetSignerAction !== "") {
      writer.uint32(18).string(message.base64EncodedSetSignerAction);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateActionSigner {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateActionSigner } as MsgCreateActionSigner;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.base64EncodedSetSignerAction = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateActionSigner {
    const message = { ...baseMsgCreateActionSigner } as MsgCreateActionSigner;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (
      object.base64EncodedSetSignerAction !== undefined &&
      object.base64EncodedSetSignerAction !== null
    ) {
      message.base64EncodedSetSignerAction = String(
        object.base64EncodedSetSignerAction
      );
    } else {
      message.base64EncodedSetSignerAction = "";
    }
    return message;
  },

  toJSON(message: MsgCreateActionSigner): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.base64EncodedSetSignerAction !== undefined &&
      (obj.base64EncodedSetSignerAction = message.base64EncodedSetSignerAction);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCreateActionSigner>
  ): MsgCreateActionSigner {
    const message = { ...baseMsgCreateActionSigner } as MsgCreateActionSigner;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (
      object.base64EncodedSetSignerAction !== undefined &&
      object.base64EncodedSetSignerAction !== null
    ) {
      message.base64EncodedSetSignerAction =
        object.base64EncodedSetSignerAction;
    } else {
      message.base64EncodedSetSignerAction = "";
    }
    return message;
  },
};

const baseMsgCreateActionSignerResponse: object = {
  ownerAddress: "",
  signerAddress: "",
  expireAt: "",
};

export const MsgCreateActionSignerResponse = {
  encode(
    message: MsgCreateActionSignerResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.ownerAddress !== "") {
      writer.uint32(10).string(message.ownerAddress);
    }
    if (message.signerAddress !== "") {
      writer.uint32(18).string(message.signerAddress);
    }
    if (message.expireAt !== "") {
      writer.uint32(26).string(message.expireAt);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgCreateActionSignerResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreateActionSignerResponse,
    } as MsgCreateActionSignerResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ownerAddress = reader.string();
          break;
        case 2:
          message.signerAddress = reader.string();
          break;
        case 3:
          message.expireAt = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateActionSignerResponse {
    const message = {
      ...baseMsgCreateActionSignerResponse,
    } as MsgCreateActionSignerResponse;
    if (object.ownerAddress !== undefined && object.ownerAddress !== null) {
      message.ownerAddress = String(object.ownerAddress);
    } else {
      message.ownerAddress = "";
    }
    if (object.signerAddress !== undefined && object.signerAddress !== null) {
      message.signerAddress = String(object.signerAddress);
    } else {
      message.signerAddress = "";
    }
    if (object.expireAt !== undefined && object.expireAt !== null) {
      message.expireAt = String(object.expireAt);
    } else {
      message.expireAt = "";
    }
    return message;
  },

  toJSON(message: MsgCreateActionSignerResponse): unknown {
    const obj: any = {};
    message.ownerAddress !== undefined &&
      (obj.ownerAddress = message.ownerAddress);
    message.signerAddress !== undefined &&
      (obj.signerAddress = message.signerAddress);
    message.expireAt !== undefined && (obj.expireAt = message.expireAt);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCreateActionSignerResponse>
  ): MsgCreateActionSignerResponse {
    const message = {
      ...baseMsgCreateActionSignerResponse,
    } as MsgCreateActionSignerResponse;
    if (object.ownerAddress !== undefined && object.ownerAddress !== null) {
      message.ownerAddress = object.ownerAddress;
    } else {
      message.ownerAddress = "";
    }
    if (object.signerAddress !== undefined && object.signerAddress !== null) {
      message.signerAddress = object.signerAddress;
    } else {
      message.signerAddress = "";
    }
    if (object.expireAt !== undefined && object.expireAt !== null) {
      message.expireAt = object.expireAt;
    } else {
      message.expireAt = "";
    }
    return message;
  },
};

const baseMsgUpdateActionSigner: object = {
  creator: "",
  base64EncodedSetSignerAction: "",
};

export const MsgUpdateActionSigner = {
  encode(
    message: MsgUpdateActionSigner,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.base64EncodedSetSignerAction !== "") {
      writer.uint32(18).string(message.base64EncodedSetSignerAction);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateActionSigner {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateActionSigner } as MsgUpdateActionSigner;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.base64EncodedSetSignerAction = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateActionSigner {
    const message = { ...baseMsgUpdateActionSigner } as MsgUpdateActionSigner;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (
      object.base64EncodedSetSignerAction !== undefined &&
      object.base64EncodedSetSignerAction !== null
    ) {
      message.base64EncodedSetSignerAction = String(
        object.base64EncodedSetSignerAction
      );
    } else {
      message.base64EncodedSetSignerAction = "";
    }
    return message;
  },

  toJSON(message: MsgUpdateActionSigner): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.base64EncodedSetSignerAction !== undefined &&
      (obj.base64EncodedSetSignerAction = message.base64EncodedSetSignerAction);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgUpdateActionSigner>
  ): MsgUpdateActionSigner {
    const message = { ...baseMsgUpdateActionSigner } as MsgUpdateActionSigner;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (
      object.base64EncodedSetSignerAction !== undefined &&
      object.base64EncodedSetSignerAction !== null
    ) {
      message.base64EncodedSetSignerAction =
        object.base64EncodedSetSignerAction;
    } else {
      message.base64EncodedSetSignerAction = "";
    }
    return message;
  },
};

const baseMsgUpdateActionSignerResponse: object = {
  ownerAddress: "",
  signerAddress: "",
  expireAt: "",
};

export const MsgUpdateActionSignerResponse = {
  encode(
    message: MsgUpdateActionSignerResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.ownerAddress !== "") {
      writer.uint32(10).string(message.ownerAddress);
    }
    if (message.signerAddress !== "") {
      writer.uint32(18).string(message.signerAddress);
    }
    if (message.expireAt !== "") {
      writer.uint32(26).string(message.expireAt);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgUpdateActionSignerResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateActionSignerResponse,
    } as MsgUpdateActionSignerResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ownerAddress = reader.string();
          break;
        case 2:
          message.signerAddress = reader.string();
          break;
        case 3:
          message.expireAt = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateActionSignerResponse {
    const message = {
      ...baseMsgUpdateActionSignerResponse,
    } as MsgUpdateActionSignerResponse;
    if (object.ownerAddress !== undefined && object.ownerAddress !== null) {
      message.ownerAddress = String(object.ownerAddress);
    } else {
      message.ownerAddress = "";
    }
    if (object.signerAddress !== undefined && object.signerAddress !== null) {
      message.signerAddress = String(object.signerAddress);
    } else {
      message.signerAddress = "";
    }
    if (object.expireAt !== undefined && object.expireAt !== null) {
      message.expireAt = String(object.expireAt);
    } else {
      message.expireAt = "";
    }
    return message;
  },

  toJSON(message: MsgUpdateActionSignerResponse): unknown {
    const obj: any = {};
    message.ownerAddress !== undefined &&
      (obj.ownerAddress = message.ownerAddress);
    message.signerAddress !== undefined &&
      (obj.signerAddress = message.signerAddress);
    message.expireAt !== undefined && (obj.expireAt = message.expireAt);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgUpdateActionSignerResponse>
  ): MsgUpdateActionSignerResponse {
    const message = {
      ...baseMsgUpdateActionSignerResponse,
    } as MsgUpdateActionSignerResponse;
    if (object.ownerAddress !== undefined && object.ownerAddress !== null) {
      message.ownerAddress = object.ownerAddress;
    } else {
      message.ownerAddress = "";
    }
    if (object.signerAddress !== undefined && object.signerAddress !== null) {
      message.signerAddress = object.signerAddress;
    } else {
      message.signerAddress = "";
    }
    if (object.expireAt !== undefined && object.expireAt !== null) {
      message.expireAt = object.expireAt;
    } else {
      message.expireAt = "";
    }
    return message;
  },
};

const baseMsgDeleteActionSigner: object = {
  creator: "",
  base64EncodedSetSignerAction: "",
};

export const MsgDeleteActionSigner = {
  encode(
    message: MsgDeleteActionSigner,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.base64EncodedSetSignerAction !== "") {
      writer.uint32(18).string(message.base64EncodedSetSignerAction);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteActionSigner {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgDeleteActionSigner } as MsgDeleteActionSigner;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.base64EncodedSetSignerAction = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDeleteActionSigner {
    const message = { ...baseMsgDeleteActionSigner } as MsgDeleteActionSigner;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (
      object.base64EncodedSetSignerAction !== undefined &&
      object.base64EncodedSetSignerAction !== null
    ) {
      message.base64EncodedSetSignerAction = String(
        object.base64EncodedSetSignerAction
      );
    } else {
      message.base64EncodedSetSignerAction = "";
    }
    return message;
  },

  toJSON(message: MsgDeleteActionSigner): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.base64EncodedSetSignerAction !== undefined &&
      (obj.base64EncodedSetSignerAction = message.base64EncodedSetSignerAction);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgDeleteActionSigner>
  ): MsgDeleteActionSigner {
    const message = { ...baseMsgDeleteActionSigner } as MsgDeleteActionSigner;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (
      object.base64EncodedSetSignerAction !== undefined &&
      object.base64EncodedSetSignerAction !== null
    ) {
      message.base64EncodedSetSignerAction =
        object.base64EncodedSetSignerAction;
    } else {
      message.base64EncodedSetSignerAction = "";
    }
    return message;
  },
};

const baseMsgDeleteActionSignerResponse: object = {
  ownerAddress: "",
  signerAddress: "",
};

export const MsgDeleteActionSignerResponse = {
  encode(
    message: MsgDeleteActionSignerResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.ownerAddress !== "") {
      writer.uint32(10).string(message.ownerAddress);
    }
    if (message.signerAddress !== "") {
      writer.uint32(18).string(message.signerAddress);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgDeleteActionSignerResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgDeleteActionSignerResponse,
    } as MsgDeleteActionSignerResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ownerAddress = reader.string();
          break;
        case 2:
          message.signerAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDeleteActionSignerResponse {
    const message = {
      ...baseMsgDeleteActionSignerResponse,
    } as MsgDeleteActionSignerResponse;
    if (object.ownerAddress !== undefined && object.ownerAddress !== null) {
      message.ownerAddress = String(object.ownerAddress);
    } else {
      message.ownerAddress = "";
    }
    if (object.signerAddress !== undefined && object.signerAddress !== null) {
      message.signerAddress = String(object.signerAddress);
    } else {
      message.signerAddress = "";
    }
    return message;
  },

  toJSON(message: MsgDeleteActionSignerResponse): unknown {
    const obj: any = {};
    message.ownerAddress !== undefined &&
      (obj.ownerAddress = message.ownerAddress);
    message.signerAddress !== undefined &&
      (obj.signerAddress = message.signerAddress);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgDeleteActionSignerResponse>
  ): MsgDeleteActionSignerResponse {
    const message = {
      ...baseMsgDeleteActionSignerResponse,
    } as MsgDeleteActionSignerResponse;
    if (object.ownerAddress !== undefined && object.ownerAddress !== null) {
      message.ownerAddress = object.ownerAddress;
    } else {
      message.ownerAddress = "";
    }
    if (object.signerAddress !== undefined && object.signerAddress !== null) {
      message.signerAddress = object.signerAddress;
    } else {
      message.signerAddress = "";
    }
    return message;
  },
};

const baseMsgCreateActionSignerConfig: object = {
  creator: "",
  chain: "",
  rpc_endpoint: "",
  contractAddress: "",
  contractName: "",
  contractOwner: "",
};

export const MsgCreateActionSignerConfig = {
  encode(
    message: MsgCreateActionSignerConfig,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.chain !== "") {
      writer.uint32(18).string(message.chain);
    }
    if (message.rpc_endpoint !== "") {
      writer.uint32(26).string(message.rpc_endpoint);
    }
    if (message.contractAddress !== "") {
      writer.uint32(34).string(message.contractAddress);
    }
    if (message.contractName !== "") {
      writer.uint32(42).string(message.contractName);
    }
    if (message.contractOwner !== "") {
      writer.uint32(50).string(message.contractOwner);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgCreateActionSignerConfig {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreateActionSignerConfig,
    } as MsgCreateActionSignerConfig;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.chain = reader.string();
          break;
        case 3:
          message.rpc_endpoint = reader.string();
          break;
        case 4:
          message.contractAddress = reader.string();
          break;
        case 5:
          message.contractName = reader.string();
          break;
        case 6:
          message.contractOwner = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateActionSignerConfig {
    const message = {
      ...baseMsgCreateActionSignerConfig,
    } as MsgCreateActionSignerConfig;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.chain !== undefined && object.chain !== null) {
      message.chain = String(object.chain);
    } else {
      message.chain = "";
    }
    if (object.rpc_endpoint !== undefined && object.rpc_endpoint !== null) {
      message.rpc_endpoint = String(object.rpc_endpoint);
    } else {
      message.rpc_endpoint = "";
    }
    if (
      object.contractAddress !== undefined &&
      object.contractAddress !== null
    ) {
      message.contractAddress = String(object.contractAddress);
    } else {
      message.contractAddress = "";
    }
    if (object.contractName !== undefined && object.contractName !== null) {
      message.contractName = String(object.contractName);
    } else {
      message.contractName = "";
    }
    if (object.contractOwner !== undefined && object.contractOwner !== null) {
      message.contractOwner = String(object.contractOwner);
    } else {
      message.contractOwner = "";
    }
    return message;
  },

  toJSON(message: MsgCreateActionSignerConfig): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.chain !== undefined && (obj.chain = message.chain);
    message.rpc_endpoint !== undefined &&
      (obj.rpc_endpoint = message.rpc_endpoint);
    message.contractAddress !== undefined &&
      (obj.contractAddress = message.contractAddress);
    message.contractName !== undefined &&
      (obj.contractName = message.contractName);
    message.contractOwner !== undefined &&
      (obj.contractOwner = message.contractOwner);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCreateActionSignerConfig>
  ): MsgCreateActionSignerConfig {
    const message = {
      ...baseMsgCreateActionSignerConfig,
    } as MsgCreateActionSignerConfig;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.chain !== undefined && object.chain !== null) {
      message.chain = object.chain;
    } else {
      message.chain = "";
    }
    if (object.rpc_endpoint !== undefined && object.rpc_endpoint !== null) {
      message.rpc_endpoint = object.rpc_endpoint;
    } else {
      message.rpc_endpoint = "";
    }
    if (
      object.contractAddress !== undefined &&
      object.contractAddress !== null
    ) {
      message.contractAddress = object.contractAddress;
    } else {
      message.contractAddress = "";
    }
    if (object.contractName !== undefined && object.contractName !== null) {
      message.contractName = object.contractName;
    } else {
      message.contractName = "";
    }
    if (object.contractOwner !== undefined && object.contractOwner !== null) {
      message.contractOwner = object.contractOwner;
    } else {
      message.contractOwner = "";
    }
    return message;
  },
};

const baseMsgCreateActionSignerConfigResponse: object = {
  chain: "",
  rpc_endpoint: "",
  contractAddress: "",
  contractName: "",
  contractOwner: "",
};

export const MsgCreateActionSignerConfigResponse = {
  encode(
    message: MsgCreateActionSignerConfigResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.chain !== "") {
      writer.uint32(10).string(message.chain);
    }
    if (message.rpc_endpoint !== "") {
      writer.uint32(18).string(message.rpc_endpoint);
    }
    if (message.contractAddress !== "") {
      writer.uint32(26).string(message.contractAddress);
    }
    if (message.contractName !== "") {
      writer.uint32(34).string(message.contractName);
    }
    if (message.contractOwner !== "") {
      writer.uint32(42).string(message.contractOwner);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgCreateActionSignerConfigResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreateActionSignerConfigResponse,
    } as MsgCreateActionSignerConfigResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chain = reader.string();
          break;
        case 2:
          message.rpc_endpoint = reader.string();
          break;
        case 3:
          message.contractAddress = reader.string();
          break;
        case 4:
          message.contractName = reader.string();
          break;
        case 5:
          message.contractOwner = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateActionSignerConfigResponse {
    const message = {
      ...baseMsgCreateActionSignerConfigResponse,
    } as MsgCreateActionSignerConfigResponse;
    if (object.chain !== undefined && object.chain !== null) {
      message.chain = String(object.chain);
    } else {
      message.chain = "";
    }
    if (object.rpc_endpoint !== undefined && object.rpc_endpoint !== null) {
      message.rpc_endpoint = String(object.rpc_endpoint);
    } else {
      message.rpc_endpoint = "";
    }
    if (
      object.contractAddress !== undefined &&
      object.contractAddress !== null
    ) {
      message.contractAddress = String(object.contractAddress);
    } else {
      message.contractAddress = "";
    }
    if (object.contractName !== undefined && object.contractName !== null) {
      message.contractName = String(object.contractName);
    } else {
      message.contractName = "";
    }
    if (object.contractOwner !== undefined && object.contractOwner !== null) {
      message.contractOwner = String(object.contractOwner);
    } else {
      message.contractOwner = "";
    }
    return message;
  },

  toJSON(message: MsgCreateActionSignerConfigResponse): unknown {
    const obj: any = {};
    message.chain !== undefined && (obj.chain = message.chain);
    message.rpc_endpoint !== undefined &&
      (obj.rpc_endpoint = message.rpc_endpoint);
    message.contractAddress !== undefined &&
      (obj.contractAddress = message.contractAddress);
    message.contractName !== undefined &&
      (obj.contractName = message.contractName);
    message.contractOwner !== undefined &&
      (obj.contractOwner = message.contractOwner);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCreateActionSignerConfigResponse>
  ): MsgCreateActionSignerConfigResponse {
    const message = {
      ...baseMsgCreateActionSignerConfigResponse,
    } as MsgCreateActionSignerConfigResponse;
    if (object.chain !== undefined && object.chain !== null) {
      message.chain = object.chain;
    } else {
      message.chain = "";
    }
    if (object.rpc_endpoint !== undefined && object.rpc_endpoint !== null) {
      message.rpc_endpoint = object.rpc_endpoint;
    } else {
      message.rpc_endpoint = "";
    }
    if (
      object.contractAddress !== undefined &&
      object.contractAddress !== null
    ) {
      message.contractAddress = object.contractAddress;
    } else {
      message.contractAddress = "";
    }
    if (object.contractName !== undefined && object.contractName !== null) {
      message.contractName = object.contractName;
    } else {
      message.contractName = "";
    }
    if (object.contractOwner !== undefined && object.contractOwner !== null) {
      message.contractOwner = object.contractOwner;
    } else {
      message.contractOwner = "";
    }
    return message;
  },
};

const baseMsgUpdateActionSignerConfig: object = {
  creator: "",
  chain: "",
  rpc_endpoint: "",
  contractAddress: "",
  contractName: "",
  contractOwner: "",
};

export const MsgUpdateActionSignerConfig = {
  encode(
    message: MsgUpdateActionSignerConfig,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.chain !== "") {
      writer.uint32(18).string(message.chain);
    }
    if (message.rpc_endpoint !== "") {
      writer.uint32(26).string(message.rpc_endpoint);
    }
    if (message.contractAddress !== "") {
      writer.uint32(34).string(message.contractAddress);
    }
    if (message.contractName !== "") {
      writer.uint32(42).string(message.contractName);
    }
    if (message.contractOwner !== "") {
      writer.uint32(50).string(message.contractOwner);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgUpdateActionSignerConfig {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateActionSignerConfig,
    } as MsgUpdateActionSignerConfig;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.chain = reader.string();
          break;
        case 3:
          message.rpc_endpoint = reader.string();
          break;
        case 4:
          message.contractAddress = reader.string();
          break;
        case 5:
          message.contractName = reader.string();
          break;
        case 6:
          message.contractOwner = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateActionSignerConfig {
    const message = {
      ...baseMsgUpdateActionSignerConfig,
    } as MsgUpdateActionSignerConfig;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.chain !== undefined && object.chain !== null) {
      message.chain = String(object.chain);
    } else {
      message.chain = "";
    }
    if (object.rpc_endpoint !== undefined && object.rpc_endpoint !== null) {
      message.rpc_endpoint = String(object.rpc_endpoint);
    } else {
      message.rpc_endpoint = "";
    }
    if (
      object.contractAddress !== undefined &&
      object.contractAddress !== null
    ) {
      message.contractAddress = String(object.contractAddress);
    } else {
      message.contractAddress = "";
    }
    if (object.contractName !== undefined && object.contractName !== null) {
      message.contractName = String(object.contractName);
    } else {
      message.contractName = "";
    }
    if (object.contractOwner !== undefined && object.contractOwner !== null) {
      message.contractOwner = String(object.contractOwner);
    } else {
      message.contractOwner = "";
    }
    return message;
  },

  toJSON(message: MsgUpdateActionSignerConfig): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.chain !== undefined && (obj.chain = message.chain);
    message.rpc_endpoint !== undefined &&
      (obj.rpc_endpoint = message.rpc_endpoint);
    message.contractAddress !== undefined &&
      (obj.contractAddress = message.contractAddress);
    message.contractName !== undefined &&
      (obj.contractName = message.contractName);
    message.contractOwner !== undefined &&
      (obj.contractOwner = message.contractOwner);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgUpdateActionSignerConfig>
  ): MsgUpdateActionSignerConfig {
    const message = {
      ...baseMsgUpdateActionSignerConfig,
    } as MsgUpdateActionSignerConfig;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.chain !== undefined && object.chain !== null) {
      message.chain = object.chain;
    } else {
      message.chain = "";
    }
    if (object.rpc_endpoint !== undefined && object.rpc_endpoint !== null) {
      message.rpc_endpoint = object.rpc_endpoint;
    } else {
      message.rpc_endpoint = "";
    }
    if (
      object.contractAddress !== undefined &&
      object.contractAddress !== null
    ) {
      message.contractAddress = object.contractAddress;
    } else {
      message.contractAddress = "";
    }
    if (object.contractName !== undefined && object.contractName !== null) {
      message.contractName = object.contractName;
    } else {
      message.contractName = "";
    }
    if (object.contractOwner !== undefined && object.contractOwner !== null) {
      message.contractOwner = object.contractOwner;
    } else {
      message.contractOwner = "";
    }
    return message;
  },
};

const baseMsgUpdateActionSignerConfigResponse: object = {
  chain: "",
  rpc_endpoint: "",
  new_rpc_endpoint: "",
  contractAddress: "",
  new_contractAddress: "",
  contractName: "",
  new_contractName: "",
  contractOwner: "",
  new_contractOwner: "",
};

export const MsgUpdateActionSignerConfigResponse = {
  encode(
    message: MsgUpdateActionSignerConfigResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.chain !== "") {
      writer.uint32(10).string(message.chain);
    }
    if (message.rpc_endpoint !== "") {
      writer.uint32(18).string(message.rpc_endpoint);
    }
    if (message.new_rpc_endpoint !== "") {
      writer.uint32(26).string(message.new_rpc_endpoint);
    }
    if (message.contractAddress !== "") {
      writer.uint32(34).string(message.contractAddress);
    }
    if (message.new_contractAddress !== "") {
      writer.uint32(42).string(message.new_contractAddress);
    }
    if (message.contractName !== "") {
      writer.uint32(50).string(message.contractName);
    }
    if (message.new_contractName !== "") {
      writer.uint32(58).string(message.new_contractName);
    }
    if (message.contractOwner !== "") {
      writer.uint32(66).string(message.contractOwner);
    }
    if (message.new_contractOwner !== "") {
      writer.uint32(74).string(message.new_contractOwner);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgUpdateActionSignerConfigResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateActionSignerConfigResponse,
    } as MsgUpdateActionSignerConfigResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chain = reader.string();
          break;
        case 2:
          message.rpc_endpoint = reader.string();
          break;
        case 3:
          message.new_rpc_endpoint = reader.string();
          break;
        case 4:
          message.contractAddress = reader.string();
          break;
        case 5:
          message.new_contractAddress = reader.string();
          break;
        case 6:
          message.contractName = reader.string();
          break;
        case 7:
          message.new_contractName = reader.string();
          break;
        case 8:
          message.contractOwner = reader.string();
          break;
        case 9:
          message.new_contractOwner = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateActionSignerConfigResponse {
    const message = {
      ...baseMsgUpdateActionSignerConfigResponse,
    } as MsgUpdateActionSignerConfigResponse;
    if (object.chain !== undefined && object.chain !== null) {
      message.chain = String(object.chain);
    } else {
      message.chain = "";
    }
    if (object.rpc_endpoint !== undefined && object.rpc_endpoint !== null) {
      message.rpc_endpoint = String(object.rpc_endpoint);
    } else {
      message.rpc_endpoint = "";
    }
    if (
      object.new_rpc_endpoint !== undefined &&
      object.new_rpc_endpoint !== null
    ) {
      message.new_rpc_endpoint = String(object.new_rpc_endpoint);
    } else {
      message.new_rpc_endpoint = "";
    }
    if (
      object.contractAddress !== undefined &&
      object.contractAddress !== null
    ) {
      message.contractAddress = String(object.contractAddress);
    } else {
      message.contractAddress = "";
    }
    if (
      object.new_contractAddress !== undefined &&
      object.new_contractAddress !== null
    ) {
      message.new_contractAddress = String(object.new_contractAddress);
    } else {
      message.new_contractAddress = "";
    }
    if (object.contractName !== undefined && object.contractName !== null) {
      message.contractName = String(object.contractName);
    } else {
      message.contractName = "";
    }
    if (
      object.new_contractName !== undefined &&
      object.new_contractName !== null
    ) {
      message.new_contractName = String(object.new_contractName);
    } else {
      message.new_contractName = "";
    }
    if (object.contractOwner !== undefined && object.contractOwner !== null) {
      message.contractOwner = String(object.contractOwner);
    } else {
      message.contractOwner = "";
    }
    if (
      object.new_contractOwner !== undefined &&
      object.new_contractOwner !== null
    ) {
      message.new_contractOwner = String(object.new_contractOwner);
    } else {
      message.new_contractOwner = "";
    }
    return message;
  },

  toJSON(message: MsgUpdateActionSignerConfigResponse): unknown {
    const obj: any = {};
    message.chain !== undefined && (obj.chain = message.chain);
    message.rpc_endpoint !== undefined &&
      (obj.rpc_endpoint = message.rpc_endpoint);
    message.new_rpc_endpoint !== undefined &&
      (obj.new_rpc_endpoint = message.new_rpc_endpoint);
    message.contractAddress !== undefined &&
      (obj.contractAddress = message.contractAddress);
    message.new_contractAddress !== undefined &&
      (obj.new_contractAddress = message.new_contractAddress);
    message.contractName !== undefined &&
      (obj.contractName = message.contractName);
    message.new_contractName !== undefined &&
      (obj.new_contractName = message.new_contractName);
    message.contractOwner !== undefined &&
      (obj.contractOwner = message.contractOwner);
    message.new_contractOwner !== undefined &&
      (obj.new_contractOwner = message.new_contractOwner);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgUpdateActionSignerConfigResponse>
  ): MsgUpdateActionSignerConfigResponse {
    const message = {
      ...baseMsgUpdateActionSignerConfigResponse,
    } as MsgUpdateActionSignerConfigResponse;
    if (object.chain !== undefined && object.chain !== null) {
      message.chain = object.chain;
    } else {
      message.chain = "";
    }
    if (object.rpc_endpoint !== undefined && object.rpc_endpoint !== null) {
      message.rpc_endpoint = object.rpc_endpoint;
    } else {
      message.rpc_endpoint = "";
    }
    if (
      object.new_rpc_endpoint !== undefined &&
      object.new_rpc_endpoint !== null
    ) {
      message.new_rpc_endpoint = object.new_rpc_endpoint;
    } else {
      message.new_rpc_endpoint = "";
    }
    if (
      object.contractAddress !== undefined &&
      object.contractAddress !== null
    ) {
      message.contractAddress = object.contractAddress;
    } else {
      message.contractAddress = "";
    }
    if (
      object.new_contractAddress !== undefined &&
      object.new_contractAddress !== null
    ) {
      message.new_contractAddress = object.new_contractAddress;
    } else {
      message.new_contractAddress = "";
    }
    if (object.contractName !== undefined && object.contractName !== null) {
      message.contractName = object.contractName;
    } else {
      message.contractName = "";
    }
    if (
      object.new_contractName !== undefined &&
      object.new_contractName !== null
    ) {
      message.new_contractName = object.new_contractName;
    } else {
      message.new_contractName = "";
    }
    if (object.contractOwner !== undefined && object.contractOwner !== null) {
      message.contractOwner = object.contractOwner;
    } else {
      message.contractOwner = "";
    }
    if (
      object.new_contractOwner !== undefined &&
      object.new_contractOwner !== null
    ) {
      message.new_contractOwner = object.new_contractOwner;
    } else {
      message.new_contractOwner = "";
    }
    return message;
  },
};

const baseMsgDeleteActionSignerConfig: object = { creator: "", chain: "" };

export const MsgDeleteActionSignerConfig = {
  encode(
    message: MsgDeleteActionSignerConfig,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.chain !== "") {
      writer.uint32(18).string(message.chain);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgDeleteActionSignerConfig {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgDeleteActionSignerConfig,
    } as MsgDeleteActionSignerConfig;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.chain = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDeleteActionSignerConfig {
    const message = {
      ...baseMsgDeleteActionSignerConfig,
    } as MsgDeleteActionSignerConfig;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.chain !== undefined && object.chain !== null) {
      message.chain = String(object.chain);
    } else {
      message.chain = "";
    }
    return message;
  },

  toJSON(message: MsgDeleteActionSignerConfig): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.chain !== undefined && (obj.chain = message.chain);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgDeleteActionSignerConfig>
  ): MsgDeleteActionSignerConfig {
    const message = {
      ...baseMsgDeleteActionSignerConfig,
    } as MsgDeleteActionSignerConfig;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.chain !== undefined && object.chain !== null) {
      message.chain = object.chain;
    } else {
      message.chain = "";
    }
    return message;
  },
};

const baseMsgDeleteActionSignerConfigResponse: object = { chain: "" };

export const MsgDeleteActionSignerConfigResponse = {
  encode(
    message: MsgDeleteActionSignerConfigResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.chain !== "") {
      writer.uint32(10).string(message.chain);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgDeleteActionSignerConfigResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgDeleteActionSignerConfigResponse,
    } as MsgDeleteActionSignerConfigResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chain = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDeleteActionSignerConfigResponse {
    const message = {
      ...baseMsgDeleteActionSignerConfigResponse,
    } as MsgDeleteActionSignerConfigResponse;
    if (object.chain !== undefined && object.chain !== null) {
      message.chain = String(object.chain);
    } else {
      message.chain = "";
    }
    return message;
  },

  toJSON(message: MsgDeleteActionSignerConfigResponse): unknown {
    const obj: any = {};
    message.chain !== undefined && (obj.chain = message.chain);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgDeleteActionSignerConfigResponse>
  ): MsgDeleteActionSignerConfigResponse {
    const message = {
      ...baseMsgDeleteActionSignerConfigResponse,
    } as MsgDeleteActionSignerConfigResponse;
    if (object.chain !== undefined && object.chain !== null) {
      message.chain = object.chain;
    } else {
      message.chain = "";
    }
    return message;
  },
};

const baseMsgCreateSyncActionSigner: object = {
  creator: "",
  chain: "",
  actorAddress: "",
  ownerAddress: "",
  requiredConfirm: 0,
};

export const MsgCreateSyncActionSigner = {
  encode(
    message: MsgCreateSyncActionSigner,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.chain !== "") {
      writer.uint32(18).string(message.chain);
    }
    if (message.actorAddress !== "") {
      writer.uint32(26).string(message.actorAddress);
    }
    if (message.ownerAddress !== "") {
      writer.uint32(34).string(message.ownerAddress);
    }
    if (message.requiredConfirm !== 0) {
      writer.uint32(40).uint64(message.requiredConfirm);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgCreateSyncActionSigner {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreateSyncActionSigner,
    } as MsgCreateSyncActionSigner;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.chain = reader.string();
          break;
        case 3:
          message.actorAddress = reader.string();
          break;
        case 4:
          message.ownerAddress = reader.string();
          break;
        case 5:
          message.requiredConfirm = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateSyncActionSigner {
    const message = {
      ...baseMsgCreateSyncActionSigner,
    } as MsgCreateSyncActionSigner;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.chain !== undefined && object.chain !== null) {
      message.chain = String(object.chain);
    } else {
      message.chain = "";
    }
    if (object.actorAddress !== undefined && object.actorAddress !== null) {
      message.actorAddress = String(object.actorAddress);
    } else {
      message.actorAddress = "";
    }
    if (object.ownerAddress !== undefined && object.ownerAddress !== null) {
      message.ownerAddress = String(object.ownerAddress);
    } else {
      message.ownerAddress = "";
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

  toJSON(message: MsgCreateSyncActionSigner): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.chain !== undefined && (obj.chain = message.chain);
    message.actorAddress !== undefined &&
      (obj.actorAddress = message.actorAddress);
    message.ownerAddress !== undefined &&
      (obj.ownerAddress = message.ownerAddress);
    message.requiredConfirm !== undefined &&
      (obj.requiredConfirm = message.requiredConfirm);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCreateSyncActionSigner>
  ): MsgCreateSyncActionSigner {
    const message = {
      ...baseMsgCreateSyncActionSigner,
    } as MsgCreateSyncActionSigner;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.chain !== undefined && object.chain !== null) {
      message.chain = object.chain;
    } else {
      message.chain = "";
    }
    if (object.actorAddress !== undefined && object.actorAddress !== null) {
      message.actorAddress = object.actorAddress;
    } else {
      message.actorAddress = "";
    }
    if (object.ownerAddress !== undefined && object.ownerAddress !== null) {
      message.ownerAddress = object.ownerAddress;
    } else {
      message.ownerAddress = "";
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

const baseMsgCreateSyncActionSignerResponse: object = {
  id: 0,
  chain: "",
  ownerAddress: "",
  actorAddress: "",
};

export const MsgCreateSyncActionSignerResponse = {
  encode(
    message: MsgCreateSyncActionSignerResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.chain !== "") {
      writer.uint32(18).string(message.chain);
    }
    if (message.ownerAddress !== "") {
      writer.uint32(26).string(message.ownerAddress);
    }
    if (message.actorAddress !== "") {
      writer.uint32(34).string(message.actorAddress);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgCreateSyncActionSignerResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreateSyncActionSignerResponse,
    } as MsgCreateSyncActionSignerResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.chain = reader.string();
          break;
        case 3:
          message.ownerAddress = reader.string();
          break;
        case 4:
          message.actorAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateSyncActionSignerResponse {
    const message = {
      ...baseMsgCreateSyncActionSignerResponse,
    } as MsgCreateSyncActionSignerResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    if (object.chain !== undefined && object.chain !== null) {
      message.chain = String(object.chain);
    } else {
      message.chain = "";
    }
    if (object.ownerAddress !== undefined && object.ownerAddress !== null) {
      message.ownerAddress = String(object.ownerAddress);
    } else {
      message.ownerAddress = "";
    }
    if (object.actorAddress !== undefined && object.actorAddress !== null) {
      message.actorAddress = String(object.actorAddress);
    } else {
      message.actorAddress = "";
    }
    return message;
  },

  toJSON(message: MsgCreateSyncActionSignerResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.chain !== undefined && (obj.chain = message.chain);
    message.ownerAddress !== undefined &&
      (obj.ownerAddress = message.ownerAddress);
    message.actorAddress !== undefined &&
      (obj.actorAddress = message.actorAddress);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCreateSyncActionSignerResponse>
  ): MsgCreateSyncActionSignerResponse {
    const message = {
      ...baseMsgCreateSyncActionSignerResponse,
    } as MsgCreateSyncActionSignerResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    if (object.chain !== undefined && object.chain !== null) {
      message.chain = object.chain;
    } else {
      message.chain = "";
    }
    if (object.ownerAddress !== undefined && object.ownerAddress !== null) {
      message.ownerAddress = object.ownerAddress;
    } else {
      message.ownerAddress = "";
    }
    if (object.actorAddress !== undefined && object.actorAddress !== null) {
      message.actorAddress = object.actorAddress;
    } else {
      message.actorAddress = "";
    }
    return message;
  },
};

const baseMsgSubmitSyncActionSigner: object = {
  creator: "",
  syncId: 0,
  chain: "",
  actorAddress: "",
  ownerAddress: "",
  expire_epoch: "",
};

export const MsgSubmitSyncActionSigner = {
  encode(
    message: MsgSubmitSyncActionSigner,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.syncId !== 0) {
      writer.uint32(16).uint64(message.syncId);
    }
    if (message.chain !== "") {
      writer.uint32(26).string(message.chain);
    }
    if (message.actorAddress !== "") {
      writer.uint32(34).string(message.actorAddress);
    }
    if (message.ownerAddress !== "") {
      writer.uint32(42).string(message.ownerAddress);
    }
    if (message.expire_epoch !== "") {
      writer.uint32(50).string(message.expire_epoch);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgSubmitSyncActionSigner {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgSubmitSyncActionSigner,
    } as MsgSubmitSyncActionSigner;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.syncId = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.chain = reader.string();
          break;
        case 4:
          message.actorAddress = reader.string();
          break;
        case 5:
          message.ownerAddress = reader.string();
          break;
        case 6:
          message.expire_epoch = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSubmitSyncActionSigner {
    const message = {
      ...baseMsgSubmitSyncActionSigner,
    } as MsgSubmitSyncActionSigner;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.syncId !== undefined && object.syncId !== null) {
      message.syncId = Number(object.syncId);
    } else {
      message.syncId = 0;
    }
    if (object.chain !== undefined && object.chain !== null) {
      message.chain = String(object.chain);
    } else {
      message.chain = "";
    }
    if (object.actorAddress !== undefined && object.actorAddress !== null) {
      message.actorAddress = String(object.actorAddress);
    } else {
      message.actorAddress = "";
    }
    if (object.ownerAddress !== undefined && object.ownerAddress !== null) {
      message.ownerAddress = String(object.ownerAddress);
    } else {
      message.ownerAddress = "";
    }
    if (object.expire_epoch !== undefined && object.expire_epoch !== null) {
      message.expire_epoch = String(object.expire_epoch);
    } else {
      message.expire_epoch = "";
    }
    return message;
  },

  toJSON(message: MsgSubmitSyncActionSigner): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.syncId !== undefined && (obj.syncId = message.syncId);
    message.chain !== undefined && (obj.chain = message.chain);
    message.actorAddress !== undefined &&
      (obj.actorAddress = message.actorAddress);
    message.ownerAddress !== undefined &&
      (obj.ownerAddress = message.ownerAddress);
    message.expire_epoch !== undefined &&
      (obj.expire_epoch = message.expire_epoch);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgSubmitSyncActionSigner>
  ): MsgSubmitSyncActionSigner {
    const message = {
      ...baseMsgSubmitSyncActionSigner,
    } as MsgSubmitSyncActionSigner;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.syncId !== undefined && object.syncId !== null) {
      message.syncId = object.syncId;
    } else {
      message.syncId = 0;
    }
    if (object.chain !== undefined && object.chain !== null) {
      message.chain = object.chain;
    } else {
      message.chain = "";
    }
    if (object.actorAddress !== undefined && object.actorAddress !== null) {
      message.actorAddress = object.actorAddress;
    } else {
      message.actorAddress = "";
    }
    if (object.ownerAddress !== undefined && object.ownerAddress !== null) {
      message.ownerAddress = object.ownerAddress;
    } else {
      message.ownerAddress = "";
    }
    if (object.expire_epoch !== undefined && object.expire_epoch !== null) {
      message.expire_epoch = object.expire_epoch;
    } else {
      message.expire_epoch = "";
    }
    return message;
  },
};

const baseMsgSubmitSyncActionSignerResponse: object = {
  verifyRequestID: 0,
  expireAt: "",
};

export const MsgSubmitSyncActionSignerResponse = {
  encode(
    message: MsgSubmitSyncActionSignerResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.verifyRequestID !== 0) {
      writer.uint32(8).uint64(message.verifyRequestID);
    }
    if (message.expireAt !== "") {
      writer.uint32(18).string(message.expireAt);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgSubmitSyncActionSignerResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgSubmitSyncActionSignerResponse,
    } as MsgSubmitSyncActionSignerResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.verifyRequestID = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.expireAt = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSubmitSyncActionSignerResponse {
    const message = {
      ...baseMsgSubmitSyncActionSignerResponse,
    } as MsgSubmitSyncActionSignerResponse;
    if (
      object.verifyRequestID !== undefined &&
      object.verifyRequestID !== null
    ) {
      message.verifyRequestID = Number(object.verifyRequestID);
    } else {
      message.verifyRequestID = 0;
    }
    if (object.expireAt !== undefined && object.expireAt !== null) {
      message.expireAt = String(object.expireAt);
    } else {
      message.expireAt = "";
    }
    return message;
  },

  toJSON(message: MsgSubmitSyncActionSignerResponse): unknown {
    const obj: any = {};
    message.verifyRequestID !== undefined &&
      (obj.verifyRequestID = message.verifyRequestID);
    message.expireAt !== undefined && (obj.expireAt = message.expireAt);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgSubmitSyncActionSignerResponse>
  ): MsgSubmitSyncActionSignerResponse {
    const message = {
      ...baseMsgSubmitSyncActionSignerResponse,
    } as MsgSubmitSyncActionSignerResponse;
    if (
      object.verifyRequestID !== undefined &&
      object.verifyRequestID !== null
    ) {
      message.verifyRequestID = object.verifyRequestID;
    } else {
      message.verifyRequestID = 0;
    }
    if (object.expireAt !== undefined && object.expireAt !== null) {
      message.expireAt = object.expireAt;
    } else {
      message.expireAt = "";
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
  SetMinimumConfirmation(
    request: MsgSetMinimumConfirmation
  ): Promise<MsgSetMinimumConfirmationResponse>;
  CreateActionSigner(
    request: MsgCreateActionSigner
  ): Promise<MsgCreateActionSignerResponse>;
  UpdateActionSigner(
    request: MsgUpdateActionSigner
  ): Promise<MsgUpdateActionSignerResponse>;
  DeleteActionSigner(
    request: MsgDeleteActionSigner
  ): Promise<MsgDeleteActionSignerResponse>;
  CreateActionSignerConfig(
    request: MsgCreateActionSignerConfig
  ): Promise<MsgCreateActionSignerConfigResponse>;
  UpdateActionSignerConfig(
    request: MsgUpdateActionSignerConfig
  ): Promise<MsgUpdateActionSignerConfigResponse>;
  DeleteActionSignerConfig(
    request: MsgDeleteActionSignerConfig
  ): Promise<MsgDeleteActionSignerConfigResponse>;
  CreateSyncActionSigner(
    request: MsgCreateSyncActionSigner
  ): Promise<MsgCreateSyncActionSignerResponse>;
  /** this line is used by starport scaffolding # proto/tx/rpc */
  SubmitSyncActionSigner(
    request: MsgSubmitSyncActionSigner
  ): Promise<MsgSubmitSyncActionSignerResponse>;
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

  CreateActionSigner(
    request: MsgCreateActionSigner
  ): Promise<MsgCreateActionSignerResponse> {
    const data = MsgCreateActionSigner.encode(request).finish();
    const promise = this.rpc.request(
      "thesixnetwork.sixnft.nftoracle.Msg",
      "CreateActionSigner",
      data
    );
    return promise.then((data) =>
      MsgCreateActionSignerResponse.decode(new Reader(data))
    );
  }

  UpdateActionSigner(
    request: MsgUpdateActionSigner
  ): Promise<MsgUpdateActionSignerResponse> {
    const data = MsgUpdateActionSigner.encode(request).finish();
    const promise = this.rpc.request(
      "thesixnetwork.sixnft.nftoracle.Msg",
      "UpdateActionSigner",
      data
    );
    return promise.then((data) =>
      MsgUpdateActionSignerResponse.decode(new Reader(data))
    );
  }

  DeleteActionSigner(
    request: MsgDeleteActionSigner
  ): Promise<MsgDeleteActionSignerResponse> {
    const data = MsgDeleteActionSigner.encode(request).finish();
    const promise = this.rpc.request(
      "thesixnetwork.sixnft.nftoracle.Msg",
      "DeleteActionSigner",
      data
    );
    return promise.then((data) =>
      MsgDeleteActionSignerResponse.decode(new Reader(data))
    );
  }

  CreateActionSignerConfig(
    request: MsgCreateActionSignerConfig
  ): Promise<MsgCreateActionSignerConfigResponse> {
    const data = MsgCreateActionSignerConfig.encode(request).finish();
    const promise = this.rpc.request(
      "thesixnetwork.sixnft.nftoracle.Msg",
      "CreateActionSignerConfig",
      data
    );
    return promise.then((data) =>
      MsgCreateActionSignerConfigResponse.decode(new Reader(data))
    );
  }

  UpdateActionSignerConfig(
    request: MsgUpdateActionSignerConfig
  ): Promise<MsgUpdateActionSignerConfigResponse> {
    const data = MsgUpdateActionSignerConfig.encode(request).finish();
    const promise = this.rpc.request(
      "thesixnetwork.sixnft.nftoracle.Msg",
      "UpdateActionSignerConfig",
      data
    );
    return promise.then((data) =>
      MsgUpdateActionSignerConfigResponse.decode(new Reader(data))
    );
  }

  DeleteActionSignerConfig(
    request: MsgDeleteActionSignerConfig
  ): Promise<MsgDeleteActionSignerConfigResponse> {
    const data = MsgDeleteActionSignerConfig.encode(request).finish();
    const promise = this.rpc.request(
      "thesixnetwork.sixnft.nftoracle.Msg",
      "DeleteActionSignerConfig",
      data
    );
    return promise.then((data) =>
      MsgDeleteActionSignerConfigResponse.decode(new Reader(data))
    );
  }

  CreateSyncActionSigner(
    request: MsgCreateSyncActionSigner
  ): Promise<MsgCreateSyncActionSignerResponse> {
    const data = MsgCreateSyncActionSigner.encode(request).finish();
    const promise = this.rpc.request(
      "thesixnetwork.sixnft.nftoracle.Msg",
      "CreateSyncActionSigner",
      data
    );
    return promise.then((data) =>
      MsgCreateSyncActionSignerResponse.decode(new Reader(data))
    );
  }

  SubmitSyncActionSigner(
    request: MsgSubmitSyncActionSigner
  ): Promise<MsgSubmitSyncActionSignerResponse> {
    const data = MsgSubmitSyncActionSigner.encode(request).finish();
    const promise = this.rpc.request(
      "thesixnetwork.sixnft.nftoracle.Msg",
      "SubmitSyncActionSigner",
      data
    );
    return promise.then((data) =>
      MsgSubmitSyncActionSignerResponse.decode(new Reader(data))
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


