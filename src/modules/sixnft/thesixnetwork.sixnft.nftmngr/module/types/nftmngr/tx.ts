/* eslint-disable */
import { Reader, Writer } from "protobufjs/minimal";
import { Any } from "../google/protobuf/any";
import { OnChainData } from "../nftmngr/on_chain_data";
import { SchemaAttribute } from "../nftmngr/schema_attribute";

export const protobufPackage = "thesixnetwork.sixnft.nftmngr";

export enum AttributeLocation {
  NFT_ATTRIBUTE = 0,
  TOKEN_ATTRIBUTE = 1,
  UNRECOGNIZED = -1,
}

export function attributeLocationFromJSON(object: any): AttributeLocation {
  switch (object) {
    case 0:
    case "NFT_ATTRIBUTE":
      return AttributeLocation.NFT_ATTRIBUTE;
    case 1:
    case "TOKEN_ATTRIBUTE":
      return AttributeLocation.TOKEN_ATTRIBUTE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return AttributeLocation.UNRECOGNIZED;
  }
}

export function attributeLocationToJSON(object: AttributeLocation): string {
  switch (object) {
    case AttributeLocation.NFT_ATTRIBUTE:
      return "NFT_ATTRIBUTE";
    case AttributeLocation.TOKEN_ATTRIBUTE:
      return "TOKEN_ATTRIBUTE";
    default:
      return "UNKNOWN";
  }
}

export enum AuthorizeTo {
  SYSTEM = 0,
  ALL = 1,
  UNRECOGNIZED = -1,
}

export function authorizeToFromJSON(object: any): AuthorizeTo {
  switch (object) {
    case 0:
    case "SYSTEM":
      return AuthorizeTo.SYSTEM;
    case 1:
    case "ALL":
      return AuthorizeTo.ALL;
    case -1:
    case "UNRECOGNIZED":
    default:
      return AuthorizeTo.UNRECOGNIZED;
  }
}

export function authorizeToToJSON(object: AuthorizeTo): string {
  switch (object) {
    case AuthorizeTo.SYSTEM:
      return "SYSTEM";
    case AuthorizeTo.ALL:
      return "ALL";
    default:
      return "UNKNOWN";
  }
}

export enum FeeSubject {
  CREATE_NFT_SCHEMA = 0,
  UNRECOGNIZED = -1,
}

export function feeSubjectFromJSON(object: any): FeeSubject {
  switch (object) {
    case 0:
    case "CREATE_NFT_SCHEMA":
      return FeeSubject.CREATE_NFT_SCHEMA;
    case -1:
    case "UNRECOGNIZED":
    default:
      return FeeSubject.UNRECOGNIZED;
  }
}

export function feeSubjectToJSON(object: FeeSubject): string {
  switch (object) {
    case FeeSubject.CREATE_NFT_SCHEMA:
      return "CREATE_NFT_SCHEMA";
    default:
      return "UNKNOWN";
  }
}

export interface MsgCreateNFTSchema {
  creator: string;
  nftSchemaBase64: string;
}

export interface MsgCreateNFTSchemaResponse {
  code: string;
}

export interface MsgCreateMetadata {
  creator: string;
  nftSchemaCode: string;
  tokenId: string;
  base64NFTData: string;
}

export interface MsgCreateMetadataResponse {
  nftSchemaCode: string;
  tokenId: string;
}

export interface MsgCreateMultiMetadata {
  creator: string;
  nftSchemaCode: string;
  tokenId: string[];
  base64NFTData: string;
}

export interface MsgCreateMultiMetadataResponse {
  nftSchemaCode: string;
  tokenId: string[];
}

export interface OpenseaAttribute {
  trait_type: string;
  value: Any | undefined;
}

export interface UpdatedOpenseaAttributes {
  attributes: OpenseaAttribute[];
}

export interface UpdatedOriginData {
  opensea: UpdatedOpenseaAttributes | undefined;
}

/** ActionParameter */
export interface ActionParameter {
  name: string;
  value: string;
}

export interface MsgPerformActionByAdmin {
  creator: string;
  nft_schema_code: string;
  tokenId: string;
  action: string;
  ref_id: string;
  parameters: ActionParameter[];
}

export interface MsgPerformActionByAdminResponse {
  nft_schema_code: string;
  token_id: string;
}

export interface MsgPerformMultiTokenAction {
  creator: string;
  nft_schema_code: string;
  tokenId: string[];
  action: string[];
  ref_id: string;
  parameters: string;
}

export interface MsgPerformMultiTokenActionResponse {
  nftSchemaCode: string;
  tokenId: string[];
  action: string[];
}

export interface MsgPerformMultiTokenOneAction {
  creator: string;
  nftSchemaCode: string;
  tokenId: string[];
  action: string;
  refId: string;
  parameters: ActionParameter[];
}

export interface MsgPerformMultiTokenOneActionResponse {
  nftSchemaCode: string;
  tokenId: string[];
}

export interface MsgPerformMultiTokenMultiAction {
  creator: string;
  nftSchemaCode: string;
  tokenId: string[];
  action: string[];
  refId: string;
  parameters: string[];
}

export interface MsgPerformMultiTokenMultiActionResponse {
  nftSchemaCode: string;
  tokenId: string[];
  action: string[];
}

export interface MsgPerformOneTokenMultiAction {
  creator: string;
  nftSchemaCode: string;
  tokenId: string;
  action: string[];
  refId: string;
  parameters: string[];
}

export interface MsgPerformOneTokenMultiActionResponse {
  nftSchemaCode: string;
  tokenId: string;
  action: string[];
}

export interface MsgAddAttribute {
  creator: string;
  code: string;
  location: AttributeLocation;
  base64NewAttriuteDefenition: string;
}

export interface MsgAddAttributeResponse {
  code: string;
  name: string;
  onchainData: OnChainData | undefined;
}

export interface MsgAddAction {
  creator: string;
  code: string;
  base64NewAction: string;
}

export interface MsgAddActionResponse {
  code: string;
  name: string;
  onchainData: OnChainData | undefined;
}

export interface MsgSetBaseUri {
  creator: string;
  code: string;
  newBaseUri: string;
}

export interface MsgSetBaseUriResponse {
  code: string;
  uri: string;
}

export interface MsgToggleAction {
  creator: string;
  code: string;
  action: string;
  disable: boolean;
}

export interface MsgToggleActionResponse {
  code: string;
  name: string;
  onchainDataAction: OnChainData | undefined;
}

export interface MsgChangeSchemaOwner {
  creator: string;
  nftSchemaCode: string;
  newOwner: string;
}

export interface MsgChangeSchemaOwnerResponse {
  nftSchemaCode: string;
  newOwner: string;
}

export interface MsgResyncAttributesResponse {
  nftSchemaCode: string;
}

export interface MsgShowAttributes {
  creator: string;
  nftSchemaCode: string;
  show: boolean;
  attributeNames: string[];
}

export interface MsgShowAttributesResponse {
  nftSchema: string;
}

export interface MsgResyncAttributes {
  creator: string;
  nftSchemaCode: string;
  tokenId: string;
}

export interface MsgSetFeeConfig {
  creator: string;
  newFeeConfigBase64: string;
  feeSubject: FeeSubject;
}

export interface MsgSetFeeConfigResponse {}

export interface MsgSetMintauth {
  creator: string;
  nftSchemaCode: string;
  authorizeTo: AuthorizeTo;
}

export interface MsgSetMintauthResponse {
  nftSchemaCode: string;
}

export interface MsgChangeOrgOwner {
  creator: string;
  orgName: string;
  toNewOwner: string;
}

export interface MsgChangeOrgOwnerResponse {
  orgName: string;
  oldOwner: string;
  newOwner: string;
}

export interface MsgSetUriRetrievalMethod {
  creator: string;
  schemaCode: string;
  newMethod: number;
}

export interface MsgSetUriRetrievalMethodResponse {
  schemaCode: string;
  newMethod: string;
}

export interface MsgSetOriginChain {
  creator: string;
  schemaCode: string;
  newOriginChain: string;
}

export interface MsgSetOriginChainResponse {
  schemaCode: string;
  newOriginChain: string;
}

export interface MsgSetOriginContract {
  creator: string;
  schemaCode: string;
  newContractAddress: string;
}

export interface MsgSetOriginContractResponse {
  schemaCode: string;
  newContractAddress: string;
}

export interface MsgSetAttributeOveriding {
  creator: string;
  schemaCode: string;
  newOveridingType: number;
}

export interface MsgSetAttributeOveridingResponse {
  schemaCode: string;
  newOveriding: string;
}

export interface MsgSetMetadataFormat {
  creator: string;
  schemaCode: string;
  newFormat: string;
}

export interface MsgSetMetadataFormatResponse {
  schemaCode: string;
  newFormat: string;
}

export interface MsgCreateActionExecutor {
  creator: string;
  nftSchemaCode: string;
  executorAddress: string;
}

export interface MsgCreateActionExecutorResponse {
  nftSchemaCode: string;
  executorAddress: string;
}

export interface MsgUpdateActionExecutor {
  creator: string;
  nftSchemaCode: string;
  executorAddress: string;
}

export interface MsgUpdateActionExecutorResponse {
  nftSchemaCode: string;
  executorAddress: string;
}

export interface MsgDeleteActionExecutor {
  creator: string;
  nftSchemaCode: string;
  executorAddress: string;
}

export interface MsgDeleteActionExecutorResponse {
  nftSchemaCode: string;
  executorAddress: string;
}

export interface MsgUpdateSchemaAttribute {
  creator: string;
  nftSchemaCode: string;
  Base64UpdateAttriuteDefenition: string;
}

export interface MsgUpdateSchemaAttributeResponse {
  nftSchemaCode: string;
  name: string;
  new_attribute: SchemaAttribute | undefined;
}

export interface MsgDeleteSchemaAttribute {
  creator: string;
  nftSchemaCode: string;
  name: string;
}

export interface MsgDeleteSchemaAttributeResponse {
  nftSchemaCode: string;
  name: string;
}

export interface MsgUpdateAction {
  creator: string;
  nftSchemaCode: string;
  base64UpdateAction: string;
}

export interface MsgUpdateActionResponse {
  nftSchemaCode: string;
  name: string;
}

const baseMsgCreateNFTSchema: object = { creator: "", nftSchemaBase64: "" };

export const MsgCreateNFTSchema = {
  encode(
    message: MsgCreateNFTSchema,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.nftSchemaBase64 !== "") {
      writer.uint32(18).string(message.nftSchemaBase64);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateNFTSchema {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateNFTSchema } as MsgCreateNFTSchema;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.nftSchemaBase64 = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateNFTSchema {
    const message = { ...baseMsgCreateNFTSchema } as MsgCreateNFTSchema;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (
      object.nftSchemaBase64 !== undefined &&
      object.nftSchemaBase64 !== null
    ) {
      message.nftSchemaBase64 = String(object.nftSchemaBase64);
    } else {
      message.nftSchemaBase64 = "";
    }
    return message;
  },

  toJSON(message: MsgCreateNFTSchema): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.nftSchemaBase64 !== undefined &&
      (obj.nftSchemaBase64 = message.nftSchemaBase64);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateNFTSchema>): MsgCreateNFTSchema {
    const message = { ...baseMsgCreateNFTSchema } as MsgCreateNFTSchema;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (
      object.nftSchemaBase64 !== undefined &&
      object.nftSchemaBase64 !== null
    ) {
      message.nftSchemaBase64 = object.nftSchemaBase64;
    } else {
      message.nftSchemaBase64 = "";
    }
    return message;
  },
};

const baseMsgCreateNFTSchemaResponse: object = { code: "" };

export const MsgCreateNFTSchemaResponse = {
  encode(
    message: MsgCreateNFTSchemaResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.code !== "") {
      writer.uint32(10).string(message.code);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgCreateNFTSchemaResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreateNFTSchemaResponse,
    } as MsgCreateNFTSchemaResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.code = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateNFTSchemaResponse {
    const message = {
      ...baseMsgCreateNFTSchemaResponse,
    } as MsgCreateNFTSchemaResponse;
    if (object.code !== undefined && object.code !== null) {
      message.code = String(object.code);
    } else {
      message.code = "";
    }
    return message;
  },

  toJSON(message: MsgCreateNFTSchemaResponse): unknown {
    const obj: any = {};
    message.code !== undefined && (obj.code = message.code);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCreateNFTSchemaResponse>
  ): MsgCreateNFTSchemaResponse {
    const message = {
      ...baseMsgCreateNFTSchemaResponse,
    } as MsgCreateNFTSchemaResponse;
    if (object.code !== undefined && object.code !== null) {
      message.code = object.code;
    } else {
      message.code = "";
    }
    return message;
  },
};

const baseMsgCreateMetadata: object = {
  creator: "",
  nftSchemaCode: "",
  tokenId: "",
  base64NFTData: "",
};

export const MsgCreateMetadata = {
  encode(message: MsgCreateMetadata, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.nftSchemaCode !== "") {
      writer.uint32(18).string(message.nftSchemaCode);
    }
    if (message.tokenId !== "") {
      writer.uint32(26).string(message.tokenId);
    }
    if (message.base64NFTData !== "") {
      writer.uint32(34).string(message.base64NFTData);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateMetadata {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateMetadata } as MsgCreateMetadata;
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
          message.base64NFTData = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateMetadata {
    const message = { ...baseMsgCreateMetadata } as MsgCreateMetadata;
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
    if (object.base64NFTData !== undefined && object.base64NFTData !== null) {
      message.base64NFTData = String(object.base64NFTData);
    } else {
      message.base64NFTData = "";
    }
    return message;
  },

  toJSON(message: MsgCreateMetadata): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.nftSchemaCode !== undefined &&
      (obj.nftSchemaCode = message.nftSchemaCode);
    message.tokenId !== undefined && (obj.tokenId = message.tokenId);
    message.base64NFTData !== undefined &&
      (obj.base64NFTData = message.base64NFTData);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateMetadata>): MsgCreateMetadata {
    const message = { ...baseMsgCreateMetadata } as MsgCreateMetadata;
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
    if (object.base64NFTData !== undefined && object.base64NFTData !== null) {
      message.base64NFTData = object.base64NFTData;
    } else {
      message.base64NFTData = "";
    }
    return message;
  },
};

const baseMsgCreateMetadataResponse: object = {
  nftSchemaCode: "",
  tokenId: "",
};

export const MsgCreateMetadataResponse = {
  encode(
    message: MsgCreateMetadataResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.nftSchemaCode !== "") {
      writer.uint32(10).string(message.nftSchemaCode);
    }
    if (message.tokenId !== "") {
      writer.uint32(18).string(message.tokenId);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgCreateMetadataResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreateMetadataResponse,
    } as MsgCreateMetadataResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nftSchemaCode = reader.string();
          break;
        case 2:
          message.tokenId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateMetadataResponse {
    const message = {
      ...baseMsgCreateMetadataResponse,
    } as MsgCreateMetadataResponse;
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

  toJSON(message: MsgCreateMetadataResponse): unknown {
    const obj: any = {};
    message.nftSchemaCode !== undefined &&
      (obj.nftSchemaCode = message.nftSchemaCode);
    message.tokenId !== undefined && (obj.tokenId = message.tokenId);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCreateMetadataResponse>
  ): MsgCreateMetadataResponse {
    const message = {
      ...baseMsgCreateMetadataResponse,
    } as MsgCreateMetadataResponse;
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

const baseMsgCreateMultiMetadata: object = {
  creator: "",
  nftSchemaCode: "",
  tokenId: "",
  base64NFTData: "",
};

export const MsgCreateMultiMetadata = {
  encode(
    message: MsgCreateMultiMetadata,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.nftSchemaCode !== "") {
      writer.uint32(18).string(message.nftSchemaCode);
    }
    for (const v of message.tokenId) {
      writer.uint32(26).string(v!);
    }
    if (message.base64NFTData !== "") {
      writer.uint32(34).string(message.base64NFTData);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateMultiMetadata {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateMultiMetadata } as MsgCreateMultiMetadata;
    message.tokenId = [];
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
          message.tokenId.push(reader.string());
          break;
        case 4:
          message.base64NFTData = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateMultiMetadata {
    const message = { ...baseMsgCreateMultiMetadata } as MsgCreateMultiMetadata;
    message.tokenId = [];
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
      for (const e of object.tokenId) {
        message.tokenId.push(String(e));
      }
    }
    if (object.base64NFTData !== undefined && object.base64NFTData !== null) {
      message.base64NFTData = String(object.base64NFTData);
    } else {
      message.base64NFTData = "";
    }
    return message;
  },

  toJSON(message: MsgCreateMultiMetadata): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.nftSchemaCode !== undefined &&
      (obj.nftSchemaCode = message.nftSchemaCode);
    if (message.tokenId) {
      obj.tokenId = message.tokenId.map((e) => e);
    } else {
      obj.tokenId = [];
    }
    message.base64NFTData !== undefined &&
      (obj.base64NFTData = message.base64NFTData);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCreateMultiMetadata>
  ): MsgCreateMultiMetadata {
    const message = { ...baseMsgCreateMultiMetadata } as MsgCreateMultiMetadata;
    message.tokenId = [];
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
      for (const e of object.tokenId) {
        message.tokenId.push(e);
      }
    }
    if (object.base64NFTData !== undefined && object.base64NFTData !== null) {
      message.base64NFTData = object.base64NFTData;
    } else {
      message.base64NFTData = "";
    }
    return message;
  },
};

const baseMsgCreateMultiMetadataResponse: object = {
  nftSchemaCode: "",
  tokenId: "",
};

export const MsgCreateMultiMetadataResponse = {
  encode(
    message: MsgCreateMultiMetadataResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.nftSchemaCode !== "") {
      writer.uint32(10).string(message.nftSchemaCode);
    }
    for (const v of message.tokenId) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgCreateMultiMetadataResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreateMultiMetadataResponse,
    } as MsgCreateMultiMetadataResponse;
    message.tokenId = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nftSchemaCode = reader.string();
          break;
        case 2:
          message.tokenId.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateMultiMetadataResponse {
    const message = {
      ...baseMsgCreateMultiMetadataResponse,
    } as MsgCreateMultiMetadataResponse;
    message.tokenId = [];
    if (object.nftSchemaCode !== undefined && object.nftSchemaCode !== null) {
      message.nftSchemaCode = String(object.nftSchemaCode);
    } else {
      message.nftSchemaCode = "";
    }
    if (object.tokenId !== undefined && object.tokenId !== null) {
      for (const e of object.tokenId) {
        message.tokenId.push(String(e));
      }
    }
    return message;
  },

  toJSON(message: MsgCreateMultiMetadataResponse): unknown {
    const obj: any = {};
    message.nftSchemaCode !== undefined &&
      (obj.nftSchemaCode = message.nftSchemaCode);
    if (message.tokenId) {
      obj.tokenId = message.tokenId.map((e) => e);
    } else {
      obj.tokenId = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCreateMultiMetadataResponse>
  ): MsgCreateMultiMetadataResponse {
    const message = {
      ...baseMsgCreateMultiMetadataResponse,
    } as MsgCreateMultiMetadataResponse;
    message.tokenId = [];
    if (object.nftSchemaCode !== undefined && object.nftSchemaCode !== null) {
      message.nftSchemaCode = object.nftSchemaCode;
    } else {
      message.nftSchemaCode = "";
    }
    if (object.tokenId !== undefined && object.tokenId !== null) {
      for (const e of object.tokenId) {
        message.tokenId.push(e);
      }
    }
    return message;
  },
};

const baseOpenseaAttribute: object = { trait_type: "" };

export const OpenseaAttribute = {
  encode(message: OpenseaAttribute, writer: Writer = Writer.create()): Writer {
    if (message.trait_type !== "") {
      writer.uint32(10).string(message.trait_type);
    }
    if (message.value !== undefined) {
      Any.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): OpenseaAttribute {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseOpenseaAttribute } as OpenseaAttribute;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.trait_type = reader.string();
          break;
        case 2:
          message.value = Any.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): OpenseaAttribute {
    const message = { ...baseOpenseaAttribute } as OpenseaAttribute;
    if (object.trait_type !== undefined && object.trait_type !== null) {
      message.trait_type = String(object.trait_type);
    } else {
      message.trait_type = "";
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = Any.fromJSON(object.value);
    } else {
      message.value = undefined;
    }
    return message;
  },

  toJSON(message: OpenseaAttribute): unknown {
    const obj: any = {};
    message.trait_type !== undefined && (obj.trait_type = message.trait_type);
    message.value !== undefined &&
      (obj.value = message.value ? Any.toJSON(message.value) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<OpenseaAttribute>): OpenseaAttribute {
    const message = { ...baseOpenseaAttribute } as OpenseaAttribute;
    if (object.trait_type !== undefined && object.trait_type !== null) {
      message.trait_type = object.trait_type;
    } else {
      message.trait_type = "";
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = Any.fromPartial(object.value);
    } else {
      message.value = undefined;
    }
    return message;
  },
};

const baseUpdatedOpenseaAttributes: object = {};

export const UpdatedOpenseaAttributes = {
  encode(
    message: UpdatedOpenseaAttributes,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.attributes) {
      OpenseaAttribute.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): UpdatedOpenseaAttributes {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseUpdatedOpenseaAttributes,
    } as UpdatedOpenseaAttributes;
    message.attributes = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.attributes.push(
            OpenseaAttribute.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdatedOpenseaAttributes {
    const message = {
      ...baseUpdatedOpenseaAttributes,
    } as UpdatedOpenseaAttributes;
    message.attributes = [];
    if (object.attributes !== undefined && object.attributes !== null) {
      for (const e of object.attributes) {
        message.attributes.push(OpenseaAttribute.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: UpdatedOpenseaAttributes): unknown {
    const obj: any = {};
    if (message.attributes) {
      obj.attributes = message.attributes.map((e) =>
        e ? OpenseaAttribute.toJSON(e) : undefined
      );
    } else {
      obj.attributes = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<UpdatedOpenseaAttributes>
  ): UpdatedOpenseaAttributes {
    const message = {
      ...baseUpdatedOpenseaAttributes,
    } as UpdatedOpenseaAttributes;
    message.attributes = [];
    if (object.attributes !== undefined && object.attributes !== null) {
      for (const e of object.attributes) {
        message.attributes.push(OpenseaAttribute.fromPartial(e));
      }
    }
    return message;
  },
};

const baseUpdatedOriginData: object = {};

export const UpdatedOriginData = {
  encode(message: UpdatedOriginData, writer: Writer = Writer.create()): Writer {
    if (message.opensea !== undefined) {
      UpdatedOpenseaAttributes.encode(
        message.opensea,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): UpdatedOriginData {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseUpdatedOriginData } as UpdatedOriginData;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.opensea = UpdatedOpenseaAttributes.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdatedOriginData {
    const message = { ...baseUpdatedOriginData } as UpdatedOriginData;
    if (object.opensea !== undefined && object.opensea !== null) {
      message.opensea = UpdatedOpenseaAttributes.fromJSON(object.opensea);
    } else {
      message.opensea = undefined;
    }
    return message;
  },

  toJSON(message: UpdatedOriginData): unknown {
    const obj: any = {};
    message.opensea !== undefined &&
      (obj.opensea = message.opensea
        ? UpdatedOpenseaAttributes.toJSON(message.opensea)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<UpdatedOriginData>): UpdatedOriginData {
    const message = { ...baseUpdatedOriginData } as UpdatedOriginData;
    if (object.opensea !== undefined && object.opensea !== null) {
      message.opensea = UpdatedOpenseaAttributes.fromPartial(object.opensea);
    } else {
      message.opensea = undefined;
    }
    return message;
  },
};

const baseActionParameter: object = { name: "", value: "" };

export const ActionParameter = {
  encode(message: ActionParameter, writer: Writer = Writer.create()): Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): ActionParameter {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseActionParameter } as ActionParameter;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
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

  fromJSON(object: any): ActionParameter {
    const message = { ...baseActionParameter } as ActionParameter;
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = String(object.value);
    } else {
      message.value = "";
    }
    return message;
  },

  toJSON(message: ActionParameter): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial(object: DeepPartial<ActionParameter>): ActionParameter {
    const message = { ...baseActionParameter } as ActionParameter;
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    } else {
      message.value = "";
    }
    return message;
  },
};

const baseMsgPerformActionByAdmin: object = {
  creator: "",
  nft_schema_code: "",
  tokenId: "",
  action: "",
  ref_id: "",
};

export const MsgPerformActionByAdmin = {
  encode(
    message: MsgPerformActionByAdmin,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.nft_schema_code !== "") {
      writer.uint32(18).string(message.nft_schema_code);
    }
    if (message.tokenId !== "") {
      writer.uint32(26).string(message.tokenId);
    }
    if (message.action !== "") {
      writer.uint32(34).string(message.action);
    }
    if (message.ref_id !== "") {
      writer.uint32(42).string(message.ref_id);
    }
    for (const v of message.parameters) {
      ActionParameter.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgPerformActionByAdmin {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgPerformActionByAdmin,
    } as MsgPerformActionByAdmin;
    message.parameters = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.nft_schema_code = reader.string();
          break;
        case 3:
          message.tokenId = reader.string();
          break;
        case 4:
          message.action = reader.string();
          break;
        case 5:
          message.ref_id = reader.string();
          break;
        case 6:
          message.parameters.push(
            ActionParameter.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgPerformActionByAdmin {
    const message = {
      ...baseMsgPerformActionByAdmin,
    } as MsgPerformActionByAdmin;
    message.parameters = [];
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (
      object.nft_schema_code !== undefined &&
      object.nft_schema_code !== null
    ) {
      message.nft_schema_code = String(object.nft_schema_code);
    } else {
      message.nft_schema_code = "";
    }
    if (object.tokenId !== undefined && object.tokenId !== null) {
      message.tokenId = String(object.tokenId);
    } else {
      message.tokenId = "";
    }
    if (object.action !== undefined && object.action !== null) {
      message.action = String(object.action);
    } else {
      message.action = "";
    }
    if (object.ref_id !== undefined && object.ref_id !== null) {
      message.ref_id = String(object.ref_id);
    } else {
      message.ref_id = "";
    }
    if (object.parameters !== undefined && object.parameters !== null) {
      for (const e of object.parameters) {
        message.parameters.push(ActionParameter.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: MsgPerformActionByAdmin): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.nft_schema_code !== undefined &&
      (obj.nft_schema_code = message.nft_schema_code);
    message.tokenId !== undefined && (obj.tokenId = message.tokenId);
    message.action !== undefined && (obj.action = message.action);
    message.ref_id !== undefined && (obj.ref_id = message.ref_id);
    if (message.parameters) {
      obj.parameters = message.parameters.map((e) =>
        e ? ActionParameter.toJSON(e) : undefined
      );
    } else {
      obj.parameters = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgPerformActionByAdmin>
  ): MsgPerformActionByAdmin {
    const message = {
      ...baseMsgPerformActionByAdmin,
    } as MsgPerformActionByAdmin;
    message.parameters = [];
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (
      object.nft_schema_code !== undefined &&
      object.nft_schema_code !== null
    ) {
      message.nft_schema_code = object.nft_schema_code;
    } else {
      message.nft_schema_code = "";
    }
    if (object.tokenId !== undefined && object.tokenId !== null) {
      message.tokenId = object.tokenId;
    } else {
      message.tokenId = "";
    }
    if (object.action !== undefined && object.action !== null) {
      message.action = object.action;
    } else {
      message.action = "";
    }
    if (object.ref_id !== undefined && object.ref_id !== null) {
      message.ref_id = object.ref_id;
    } else {
      message.ref_id = "";
    }
    if (object.parameters !== undefined && object.parameters !== null) {
      for (const e of object.parameters) {
        message.parameters.push(ActionParameter.fromPartial(e));
      }
    }
    return message;
  },
};

const baseMsgPerformActionByAdminResponse: object = {
  nft_schema_code: "",
  token_id: "",
};

export const MsgPerformActionByAdminResponse = {
  encode(
    message: MsgPerformActionByAdminResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.nft_schema_code !== "") {
      writer.uint32(10).string(message.nft_schema_code);
    }
    if (message.token_id !== "") {
      writer.uint32(18).string(message.token_id);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgPerformActionByAdminResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgPerformActionByAdminResponse,
    } as MsgPerformActionByAdminResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nft_schema_code = reader.string();
          break;
        case 2:
          message.token_id = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgPerformActionByAdminResponse {
    const message = {
      ...baseMsgPerformActionByAdminResponse,
    } as MsgPerformActionByAdminResponse;
    if (
      object.nft_schema_code !== undefined &&
      object.nft_schema_code !== null
    ) {
      message.nft_schema_code = String(object.nft_schema_code);
    } else {
      message.nft_schema_code = "";
    }
    if (object.token_id !== undefined && object.token_id !== null) {
      message.token_id = String(object.token_id);
    } else {
      message.token_id = "";
    }
    return message;
  },

  toJSON(message: MsgPerformActionByAdminResponse): unknown {
    const obj: any = {};
    message.nft_schema_code !== undefined &&
      (obj.nft_schema_code = message.nft_schema_code);
    message.token_id !== undefined && (obj.token_id = message.token_id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgPerformActionByAdminResponse>
  ): MsgPerformActionByAdminResponse {
    const message = {
      ...baseMsgPerformActionByAdminResponse,
    } as MsgPerformActionByAdminResponse;
    if (
      object.nft_schema_code !== undefined &&
      object.nft_schema_code !== null
    ) {
      message.nft_schema_code = object.nft_schema_code;
    } else {
      message.nft_schema_code = "";
    }
    if (object.token_id !== undefined && object.token_id !== null) {
      message.token_id = object.token_id;
    } else {
      message.token_id = "";
    }
    return message;
  },
};

const baseMsgPerformMultiTokenAction: object = {
  creator: "",
  nft_schema_code: "",
  tokenId: "",
  action: "",
  ref_id: "",
  parameters: "",
};

export const MsgPerformMultiTokenAction = {
  encode(
    message: MsgPerformMultiTokenAction,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.nft_schema_code !== "") {
      writer.uint32(18).string(message.nft_schema_code);
    }
    for (const v of message.tokenId) {
      writer.uint32(26).string(v!);
    }
    for (const v of message.action) {
      writer.uint32(34).string(v!);
    }
    if (message.ref_id !== "") {
      writer.uint32(42).string(message.ref_id);
    }
    if (message.parameters !== "") {
      writer.uint32(50).string(message.parameters);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgPerformMultiTokenAction {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgPerformMultiTokenAction,
    } as MsgPerformMultiTokenAction;
    message.tokenId = [];
    message.action = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.nft_schema_code = reader.string();
          break;
        case 3:
          message.tokenId.push(reader.string());
          break;
        case 4:
          message.action.push(reader.string());
          break;
        case 5:
          message.ref_id = reader.string();
          break;
        case 6:
          message.parameters = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgPerformMultiTokenAction {
    const message = {
      ...baseMsgPerformMultiTokenAction,
    } as MsgPerformMultiTokenAction;
    message.tokenId = [];
    message.action = [];
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (
      object.nft_schema_code !== undefined &&
      object.nft_schema_code !== null
    ) {
      message.nft_schema_code = String(object.nft_schema_code);
    } else {
      message.nft_schema_code = "";
    }
    if (object.tokenId !== undefined && object.tokenId !== null) {
      for (const e of object.tokenId) {
        message.tokenId.push(String(e));
      }
    }
    if (object.action !== undefined && object.action !== null) {
      for (const e of object.action) {
        message.action.push(String(e));
      }
    }
    if (object.ref_id !== undefined && object.ref_id !== null) {
      message.ref_id = String(object.ref_id);
    } else {
      message.ref_id = "";
    }
    if (object.parameters !== undefined && object.parameters !== null) {
      message.parameters = String(object.parameters);
    } else {
      message.parameters = "";
    }
    return message;
  },

  toJSON(message: MsgPerformMultiTokenAction): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.nft_schema_code !== undefined &&
      (obj.nft_schema_code = message.nft_schema_code);
    if (message.tokenId) {
      obj.tokenId = message.tokenId.map((e) => e);
    } else {
      obj.tokenId = [];
    }
    if (message.action) {
      obj.action = message.action.map((e) => e);
    } else {
      obj.action = [];
    }
    message.ref_id !== undefined && (obj.ref_id = message.ref_id);
    message.parameters !== undefined && (obj.parameters = message.parameters);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgPerformMultiTokenAction>
  ): MsgPerformMultiTokenAction {
    const message = {
      ...baseMsgPerformMultiTokenAction,
    } as MsgPerformMultiTokenAction;
    message.tokenId = [];
    message.action = [];
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (
      object.nft_schema_code !== undefined &&
      object.nft_schema_code !== null
    ) {
      message.nft_schema_code = object.nft_schema_code;
    } else {
      message.nft_schema_code = "";
    }
    if (object.tokenId !== undefined && object.tokenId !== null) {
      for (const e of object.tokenId) {
        message.tokenId.push(e);
      }
    }
    if (object.action !== undefined && object.action !== null) {
      for (const e of object.action) {
        message.action.push(e);
      }
    }
    if (object.ref_id !== undefined && object.ref_id !== null) {
      message.ref_id = object.ref_id;
    } else {
      message.ref_id = "";
    }
    if (object.parameters !== undefined && object.parameters !== null) {
      message.parameters = object.parameters;
    } else {
      message.parameters = "";
    }
    return message;
  },
};

const baseMsgPerformMultiTokenActionResponse: object = {
  nftSchemaCode: "",
  tokenId: "",
  action: "",
};

export const MsgPerformMultiTokenActionResponse = {
  encode(
    message: MsgPerformMultiTokenActionResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.nftSchemaCode !== "") {
      writer.uint32(10).string(message.nftSchemaCode);
    }
    for (const v of message.tokenId) {
      writer.uint32(18).string(v!);
    }
    for (const v of message.action) {
      writer.uint32(26).string(v!);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgPerformMultiTokenActionResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgPerformMultiTokenActionResponse,
    } as MsgPerformMultiTokenActionResponse;
    message.tokenId = [];
    message.action = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nftSchemaCode = reader.string();
          break;
        case 2:
          message.tokenId.push(reader.string());
          break;
        case 3:
          message.action.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgPerformMultiTokenActionResponse {
    const message = {
      ...baseMsgPerformMultiTokenActionResponse,
    } as MsgPerformMultiTokenActionResponse;
    message.tokenId = [];
    message.action = [];
    if (object.nftSchemaCode !== undefined && object.nftSchemaCode !== null) {
      message.nftSchemaCode = String(object.nftSchemaCode);
    } else {
      message.nftSchemaCode = "";
    }
    if (object.tokenId !== undefined && object.tokenId !== null) {
      for (const e of object.tokenId) {
        message.tokenId.push(String(e));
      }
    }
    if (object.action !== undefined && object.action !== null) {
      for (const e of object.action) {
        message.action.push(String(e));
      }
    }
    return message;
  },

  toJSON(message: MsgPerformMultiTokenActionResponse): unknown {
    const obj: any = {};
    message.nftSchemaCode !== undefined &&
      (obj.nftSchemaCode = message.nftSchemaCode);
    if (message.tokenId) {
      obj.tokenId = message.tokenId.map((e) => e);
    } else {
      obj.tokenId = [];
    }
    if (message.action) {
      obj.action = message.action.map((e) => e);
    } else {
      obj.action = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgPerformMultiTokenActionResponse>
  ): MsgPerformMultiTokenActionResponse {
    const message = {
      ...baseMsgPerformMultiTokenActionResponse,
    } as MsgPerformMultiTokenActionResponse;
    message.tokenId = [];
    message.action = [];
    if (object.nftSchemaCode !== undefined && object.nftSchemaCode !== null) {
      message.nftSchemaCode = object.nftSchemaCode;
    } else {
      message.nftSchemaCode = "";
    }
    if (object.tokenId !== undefined && object.tokenId !== null) {
      for (const e of object.tokenId) {
        message.tokenId.push(e);
      }
    }
    if (object.action !== undefined && object.action !== null) {
      for (const e of object.action) {
        message.action.push(e);
      }
    }
    return message;
  },
};

const baseMsgPerformMultiTokenOneAction: object = {
  creator: "",
  nftSchemaCode: "",
  tokenId: "",
  action: "",
  refId: "",
};

export const MsgPerformMultiTokenOneAction = {
  encode(
    message: MsgPerformMultiTokenOneAction,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.nftSchemaCode !== "") {
      writer.uint32(18).string(message.nftSchemaCode);
    }
    for (const v of message.tokenId) {
      writer.uint32(26).string(v!);
    }
    if (message.action !== "") {
      writer.uint32(34).string(message.action);
    }
    if (message.refId !== "") {
      writer.uint32(42).string(message.refId);
    }
    for (const v of message.parameters) {
      ActionParameter.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgPerformMultiTokenOneAction {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgPerformMultiTokenOneAction,
    } as MsgPerformMultiTokenOneAction;
    message.tokenId = [];
    message.parameters = [];
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
          message.tokenId.push(reader.string());
          break;
        case 4:
          message.action = reader.string();
          break;
        case 5:
          message.refId = reader.string();
          break;
        case 6:
          message.parameters.push(
            ActionParameter.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgPerformMultiTokenOneAction {
    const message = {
      ...baseMsgPerformMultiTokenOneAction,
    } as MsgPerformMultiTokenOneAction;
    message.tokenId = [];
    message.parameters = [];
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
      for (const e of object.tokenId) {
        message.tokenId.push(String(e));
      }
    }
    if (object.action !== undefined && object.action !== null) {
      message.action = String(object.action);
    } else {
      message.action = "";
    }
    if (object.refId !== undefined && object.refId !== null) {
      message.refId = String(object.refId);
    } else {
      message.refId = "";
    }
    if (object.parameters !== undefined && object.parameters !== null) {
      for (const e of object.parameters) {
        message.parameters.push(ActionParameter.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: MsgPerformMultiTokenOneAction): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.nftSchemaCode !== undefined &&
      (obj.nftSchemaCode = message.nftSchemaCode);
    if (message.tokenId) {
      obj.tokenId = message.tokenId.map((e) => e);
    } else {
      obj.tokenId = [];
    }
    message.action !== undefined && (obj.action = message.action);
    message.refId !== undefined && (obj.refId = message.refId);
    if (message.parameters) {
      obj.parameters = message.parameters.map((e) =>
        e ? ActionParameter.toJSON(e) : undefined
      );
    } else {
      obj.parameters = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgPerformMultiTokenOneAction>
  ): MsgPerformMultiTokenOneAction {
    const message = {
      ...baseMsgPerformMultiTokenOneAction,
    } as MsgPerformMultiTokenOneAction;
    message.tokenId = [];
    message.parameters = [];
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
      for (const e of object.tokenId) {
        message.tokenId.push(e);
      }
    }
    if (object.action !== undefined && object.action !== null) {
      message.action = object.action;
    } else {
      message.action = "";
    }
    if (object.refId !== undefined && object.refId !== null) {
      message.refId = object.refId;
    } else {
      message.refId = "";
    }
    if (object.parameters !== undefined && object.parameters !== null) {
      for (const e of object.parameters) {
        message.parameters.push(ActionParameter.fromPartial(e));
      }
    }
    return message;
  },
};

const baseMsgPerformMultiTokenOneActionResponse: object = {
  nftSchemaCode: "",
  tokenId: "",
};

export const MsgPerformMultiTokenOneActionResponse = {
  encode(
    message: MsgPerformMultiTokenOneActionResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.nftSchemaCode !== "") {
      writer.uint32(10).string(message.nftSchemaCode);
    }
    for (const v of message.tokenId) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgPerformMultiTokenOneActionResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgPerformMultiTokenOneActionResponse,
    } as MsgPerformMultiTokenOneActionResponse;
    message.tokenId = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nftSchemaCode = reader.string();
          break;
        case 2:
          message.tokenId.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgPerformMultiTokenOneActionResponse {
    const message = {
      ...baseMsgPerformMultiTokenOneActionResponse,
    } as MsgPerformMultiTokenOneActionResponse;
    message.tokenId = [];
    if (object.nftSchemaCode !== undefined && object.nftSchemaCode !== null) {
      message.nftSchemaCode = String(object.nftSchemaCode);
    } else {
      message.nftSchemaCode = "";
    }
    if (object.tokenId !== undefined && object.tokenId !== null) {
      for (const e of object.tokenId) {
        message.tokenId.push(String(e));
      }
    }
    return message;
  },

  toJSON(message: MsgPerformMultiTokenOneActionResponse): unknown {
    const obj: any = {};
    message.nftSchemaCode !== undefined &&
      (obj.nftSchemaCode = message.nftSchemaCode);
    if (message.tokenId) {
      obj.tokenId = message.tokenId.map((e) => e);
    } else {
      obj.tokenId = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgPerformMultiTokenOneActionResponse>
  ): MsgPerformMultiTokenOneActionResponse {
    const message = {
      ...baseMsgPerformMultiTokenOneActionResponse,
    } as MsgPerformMultiTokenOneActionResponse;
    message.tokenId = [];
    if (object.nftSchemaCode !== undefined && object.nftSchemaCode !== null) {
      message.nftSchemaCode = object.nftSchemaCode;
    } else {
      message.nftSchemaCode = "";
    }
    if (object.tokenId !== undefined && object.tokenId !== null) {
      for (const e of object.tokenId) {
        message.tokenId.push(e);
      }
    }
    return message;
  },
};

const baseMsgPerformMultiTokenMultiAction: object = {
  creator: "",
  nftSchemaCode: "",
  tokenId: "",
  action: "",
  refId: "",
  parameters: "",
};

export const MsgPerformMultiTokenMultiAction = {
  encode(
    message: MsgPerformMultiTokenMultiAction,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.nftSchemaCode !== "") {
      writer.uint32(18).string(message.nftSchemaCode);
    }
    for (const v of message.tokenId) {
      writer.uint32(26).string(v!);
    }
    for (const v of message.action) {
      writer.uint32(34).string(v!);
    }
    if (message.refId !== "") {
      writer.uint32(42).string(message.refId);
    }
    for (const v of message.parameters) {
      writer.uint32(50).string(v!);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgPerformMultiTokenMultiAction {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgPerformMultiTokenMultiAction,
    } as MsgPerformMultiTokenMultiAction;
    message.tokenId = [];
    message.action = [];
    message.parameters = [];
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
          message.tokenId.push(reader.string());
          break;
        case 4:
          message.action.push(reader.string());
          break;
        case 5:
          message.refId = reader.string();
          break;
        case 6:
          message.parameters.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgPerformMultiTokenMultiAction {
    const message = {
      ...baseMsgPerformMultiTokenMultiAction,
    } as MsgPerformMultiTokenMultiAction;
    message.tokenId = [];
    message.action = [];
    message.parameters = [];
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
      for (const e of object.tokenId) {
        message.tokenId.push(String(e));
      }
    }
    if (object.action !== undefined && object.action !== null) {
      for (const e of object.action) {
        message.action.push(String(e));
      }
    }
    if (object.refId !== undefined && object.refId !== null) {
      message.refId = String(object.refId);
    } else {
      message.refId = "";
    }
    if (object.parameters !== undefined && object.parameters !== null) {
      for (const e of object.parameters) {
        message.parameters.push(String(e));
      }
    }
    return message;
  },

  toJSON(message: MsgPerformMultiTokenMultiAction): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.nftSchemaCode !== undefined &&
      (obj.nftSchemaCode = message.nftSchemaCode);
    if (message.tokenId) {
      obj.tokenId = message.tokenId.map((e) => e);
    } else {
      obj.tokenId = [];
    }
    if (message.action) {
      obj.action = message.action.map((e) => e);
    } else {
      obj.action = [];
    }
    message.refId !== undefined && (obj.refId = message.refId);
    if (message.parameters) {
      obj.parameters = message.parameters.map((e) => e);
    } else {
      obj.parameters = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgPerformMultiTokenMultiAction>
  ): MsgPerformMultiTokenMultiAction {
    const message = {
      ...baseMsgPerformMultiTokenMultiAction,
    } as MsgPerformMultiTokenMultiAction;
    message.tokenId = [];
    message.action = [];
    message.parameters = [];
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
      for (const e of object.tokenId) {
        message.tokenId.push(e);
      }
    }
    if (object.action !== undefined && object.action !== null) {
      for (const e of object.action) {
        message.action.push(e);
      }
    }
    if (object.refId !== undefined && object.refId !== null) {
      message.refId = object.refId;
    } else {
      message.refId = "";
    }
    if (object.parameters !== undefined && object.parameters !== null) {
      for (const e of object.parameters) {
        message.parameters.push(e);
      }
    }
    return message;
  },
};

const baseMsgPerformMultiTokenMultiActionResponse: object = {
  nftSchemaCode: "",
  tokenId: "",
  action: "",
};

export const MsgPerformMultiTokenMultiActionResponse = {
  encode(
    message: MsgPerformMultiTokenMultiActionResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.nftSchemaCode !== "") {
      writer.uint32(10).string(message.nftSchemaCode);
    }
    for (const v of message.tokenId) {
      writer.uint32(18).string(v!);
    }
    for (const v of message.action) {
      writer.uint32(26).string(v!);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgPerformMultiTokenMultiActionResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgPerformMultiTokenMultiActionResponse,
    } as MsgPerformMultiTokenMultiActionResponse;
    message.tokenId = [];
    message.action = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nftSchemaCode = reader.string();
          break;
        case 2:
          message.tokenId.push(reader.string());
          break;
        case 3:
          message.action.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgPerformMultiTokenMultiActionResponse {
    const message = {
      ...baseMsgPerformMultiTokenMultiActionResponse,
    } as MsgPerformMultiTokenMultiActionResponse;
    message.tokenId = [];
    message.action = [];
    if (object.nftSchemaCode !== undefined && object.nftSchemaCode !== null) {
      message.nftSchemaCode = String(object.nftSchemaCode);
    } else {
      message.nftSchemaCode = "";
    }
    if (object.tokenId !== undefined && object.tokenId !== null) {
      for (const e of object.tokenId) {
        message.tokenId.push(String(e));
      }
    }
    if (object.action !== undefined && object.action !== null) {
      for (const e of object.action) {
        message.action.push(String(e));
      }
    }
    return message;
  },

  toJSON(message: MsgPerformMultiTokenMultiActionResponse): unknown {
    const obj: any = {};
    message.nftSchemaCode !== undefined &&
      (obj.nftSchemaCode = message.nftSchemaCode);
    if (message.tokenId) {
      obj.tokenId = message.tokenId.map((e) => e);
    } else {
      obj.tokenId = [];
    }
    if (message.action) {
      obj.action = message.action.map((e) => e);
    } else {
      obj.action = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgPerformMultiTokenMultiActionResponse>
  ): MsgPerformMultiTokenMultiActionResponse {
    const message = {
      ...baseMsgPerformMultiTokenMultiActionResponse,
    } as MsgPerformMultiTokenMultiActionResponse;
    message.tokenId = [];
    message.action = [];
    if (object.nftSchemaCode !== undefined && object.nftSchemaCode !== null) {
      message.nftSchemaCode = object.nftSchemaCode;
    } else {
      message.nftSchemaCode = "";
    }
    if (object.tokenId !== undefined && object.tokenId !== null) {
      for (const e of object.tokenId) {
        message.tokenId.push(e);
      }
    }
    if (object.action !== undefined && object.action !== null) {
      for (const e of object.action) {
        message.action.push(e);
      }
    }
    return message;
  },
};

const baseMsgPerformOneTokenMultiAction: object = {
  creator: "",
  nftSchemaCode: "",
  tokenId: "",
  action: "",
  refId: "",
  parameters: "",
};

export const MsgPerformOneTokenMultiAction = {
  encode(
    message: MsgPerformOneTokenMultiAction,
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
    for (const v of message.action) {
      writer.uint32(34).string(v!);
    }
    if (message.refId !== "") {
      writer.uint32(42).string(message.refId);
    }
    for (const v of message.parameters) {
      writer.uint32(50).string(v!);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgPerformOneTokenMultiAction {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgPerformOneTokenMultiAction,
    } as MsgPerformOneTokenMultiAction;
    message.action = [];
    message.parameters = [];
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
          message.action.push(reader.string());
          break;
        case 5:
          message.refId = reader.string();
          break;
        case 6:
          message.parameters.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgPerformOneTokenMultiAction {
    const message = {
      ...baseMsgPerformOneTokenMultiAction,
    } as MsgPerformOneTokenMultiAction;
    message.action = [];
    message.parameters = [];
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
    if (object.action !== undefined && object.action !== null) {
      for (const e of object.action) {
        message.action.push(String(e));
      }
    }
    if (object.refId !== undefined && object.refId !== null) {
      message.refId = String(object.refId);
    } else {
      message.refId = "";
    }
    if (object.parameters !== undefined && object.parameters !== null) {
      for (const e of object.parameters) {
        message.parameters.push(String(e));
      }
    }
    return message;
  },

  toJSON(message: MsgPerformOneTokenMultiAction): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.nftSchemaCode !== undefined &&
      (obj.nftSchemaCode = message.nftSchemaCode);
    message.tokenId !== undefined && (obj.tokenId = message.tokenId);
    if (message.action) {
      obj.action = message.action.map((e) => e);
    } else {
      obj.action = [];
    }
    message.refId !== undefined && (obj.refId = message.refId);
    if (message.parameters) {
      obj.parameters = message.parameters.map((e) => e);
    } else {
      obj.parameters = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgPerformOneTokenMultiAction>
  ): MsgPerformOneTokenMultiAction {
    const message = {
      ...baseMsgPerformOneTokenMultiAction,
    } as MsgPerformOneTokenMultiAction;
    message.action = [];
    message.parameters = [];
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
    if (object.action !== undefined && object.action !== null) {
      for (const e of object.action) {
        message.action.push(e);
      }
    }
    if (object.refId !== undefined && object.refId !== null) {
      message.refId = object.refId;
    } else {
      message.refId = "";
    }
    if (object.parameters !== undefined && object.parameters !== null) {
      for (const e of object.parameters) {
        message.parameters.push(e);
      }
    }
    return message;
  },
};

const baseMsgPerformOneTokenMultiActionResponse: object = {
  nftSchemaCode: "",
  tokenId: "",
  action: "",
};

export const MsgPerformOneTokenMultiActionResponse = {
  encode(
    message: MsgPerformOneTokenMultiActionResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.nftSchemaCode !== "") {
      writer.uint32(10).string(message.nftSchemaCode);
    }
    if (message.tokenId !== "") {
      writer.uint32(18).string(message.tokenId);
    }
    for (const v of message.action) {
      writer.uint32(26).string(v!);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgPerformOneTokenMultiActionResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgPerformOneTokenMultiActionResponse,
    } as MsgPerformOneTokenMultiActionResponse;
    message.action = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nftSchemaCode = reader.string();
          break;
        case 2:
          message.tokenId = reader.string();
          break;
        case 3:
          message.action.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgPerformOneTokenMultiActionResponse {
    const message = {
      ...baseMsgPerformOneTokenMultiActionResponse,
    } as MsgPerformOneTokenMultiActionResponse;
    message.action = [];
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
    if (object.action !== undefined && object.action !== null) {
      for (const e of object.action) {
        message.action.push(String(e));
      }
    }
    return message;
  },

  toJSON(message: MsgPerformOneTokenMultiActionResponse): unknown {
    const obj: any = {};
    message.nftSchemaCode !== undefined &&
      (obj.nftSchemaCode = message.nftSchemaCode);
    message.tokenId !== undefined && (obj.tokenId = message.tokenId);
    if (message.action) {
      obj.action = message.action.map((e) => e);
    } else {
      obj.action = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgPerformOneTokenMultiActionResponse>
  ): MsgPerformOneTokenMultiActionResponse {
    const message = {
      ...baseMsgPerformOneTokenMultiActionResponse,
    } as MsgPerformOneTokenMultiActionResponse;
    message.action = [];
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
    if (object.action !== undefined && object.action !== null) {
      for (const e of object.action) {
        message.action.push(e);
      }
    }
    return message;
  },
};

const baseMsgAddAttribute: object = {
  creator: "",
  code: "",
  location: 0,
  base64NewAttriuteDefenition: "",
};

export const MsgAddAttribute = {
  encode(message: MsgAddAttribute, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.code !== "") {
      writer.uint32(18).string(message.code);
    }
    if (message.location !== 0) {
      writer.uint32(24).int32(message.location);
    }
    if (message.base64NewAttriuteDefenition !== "") {
      writer.uint32(34).string(message.base64NewAttriuteDefenition);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgAddAttribute {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgAddAttribute } as MsgAddAttribute;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.code = reader.string();
          break;
        case 3:
          message.location = reader.int32() as any;
          break;
        case 4:
          message.base64NewAttriuteDefenition = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgAddAttribute {
    const message = { ...baseMsgAddAttribute } as MsgAddAttribute;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.code !== undefined && object.code !== null) {
      message.code = String(object.code);
    } else {
      message.code = "";
    }
    if (object.location !== undefined && object.location !== null) {
      message.location = attributeLocationFromJSON(object.location);
    } else {
      message.location = 0;
    }
    if (
      object.base64NewAttriuteDefenition !== undefined &&
      object.base64NewAttriuteDefenition !== null
    ) {
      message.base64NewAttriuteDefenition = String(
        object.base64NewAttriuteDefenition
      );
    } else {
      message.base64NewAttriuteDefenition = "";
    }
    return message;
  },

  toJSON(message: MsgAddAttribute): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.code !== undefined && (obj.code = message.code);
    message.location !== undefined &&
      (obj.location = attributeLocationToJSON(message.location));
    message.base64NewAttriuteDefenition !== undefined &&
      (obj.base64NewAttriuteDefenition = message.base64NewAttriuteDefenition);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgAddAttribute>): MsgAddAttribute {
    const message = { ...baseMsgAddAttribute } as MsgAddAttribute;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.code !== undefined && object.code !== null) {
      message.code = object.code;
    } else {
      message.code = "";
    }
    if (object.location !== undefined && object.location !== null) {
      message.location = object.location;
    } else {
      message.location = 0;
    }
    if (
      object.base64NewAttriuteDefenition !== undefined &&
      object.base64NewAttriuteDefenition !== null
    ) {
      message.base64NewAttriuteDefenition = object.base64NewAttriuteDefenition;
    } else {
      message.base64NewAttriuteDefenition = "";
    }
    return message;
  },
};

const baseMsgAddAttributeResponse: object = { code: "", name: "" };

export const MsgAddAttributeResponse = {
  encode(
    message: MsgAddAttributeResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.code !== "") {
      writer.uint32(10).string(message.code);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.onchainData !== undefined) {
      OnChainData.encode(
        message.onchainData,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgAddAttributeResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgAddAttributeResponse,
    } as MsgAddAttributeResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.code = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.onchainData = OnChainData.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgAddAttributeResponse {
    const message = {
      ...baseMsgAddAttributeResponse,
    } as MsgAddAttributeResponse;
    if (object.code !== undefined && object.code !== null) {
      message.code = String(object.code);
    } else {
      message.code = "";
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    if (object.onchainData !== undefined && object.onchainData !== null) {
      message.onchainData = OnChainData.fromJSON(object.onchainData);
    } else {
      message.onchainData = undefined;
    }
    return message;
  },

  toJSON(message: MsgAddAttributeResponse): unknown {
    const obj: any = {};
    message.code !== undefined && (obj.code = message.code);
    message.name !== undefined && (obj.name = message.name);
    message.onchainData !== undefined &&
      (obj.onchainData = message.onchainData
        ? OnChainData.toJSON(message.onchainData)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgAddAttributeResponse>
  ): MsgAddAttributeResponse {
    const message = {
      ...baseMsgAddAttributeResponse,
    } as MsgAddAttributeResponse;
    if (object.code !== undefined && object.code !== null) {
      message.code = object.code;
    } else {
      message.code = "";
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    if (object.onchainData !== undefined && object.onchainData !== null) {
      message.onchainData = OnChainData.fromPartial(object.onchainData);
    } else {
      message.onchainData = undefined;
    }
    return message;
  },
};

const baseMsgAddAction: object = { creator: "", code: "", base64NewAction: "" };

export const MsgAddAction = {
  encode(message: MsgAddAction, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.code !== "") {
      writer.uint32(18).string(message.code);
    }
    if (message.base64NewAction !== "") {
      writer.uint32(26).string(message.base64NewAction);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgAddAction {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgAddAction } as MsgAddAction;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.code = reader.string();
          break;
        case 3:
          message.base64NewAction = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgAddAction {
    const message = { ...baseMsgAddAction } as MsgAddAction;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.code !== undefined && object.code !== null) {
      message.code = String(object.code);
    } else {
      message.code = "";
    }
    if (
      object.base64NewAction !== undefined &&
      object.base64NewAction !== null
    ) {
      message.base64NewAction = String(object.base64NewAction);
    } else {
      message.base64NewAction = "";
    }
    return message;
  },

  toJSON(message: MsgAddAction): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.code !== undefined && (obj.code = message.code);
    message.base64NewAction !== undefined &&
      (obj.base64NewAction = message.base64NewAction);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgAddAction>): MsgAddAction {
    const message = { ...baseMsgAddAction } as MsgAddAction;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.code !== undefined && object.code !== null) {
      message.code = object.code;
    } else {
      message.code = "";
    }
    if (
      object.base64NewAction !== undefined &&
      object.base64NewAction !== null
    ) {
      message.base64NewAction = object.base64NewAction;
    } else {
      message.base64NewAction = "";
    }
    return message;
  },
};

const baseMsgAddActionResponse: object = { code: "", name: "" };

export const MsgAddActionResponse = {
  encode(
    message: MsgAddActionResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.code !== "") {
      writer.uint32(10).string(message.code);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.onchainData !== undefined) {
      OnChainData.encode(
        message.onchainData,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgAddActionResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgAddActionResponse } as MsgAddActionResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.code = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.onchainData = OnChainData.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgAddActionResponse {
    const message = { ...baseMsgAddActionResponse } as MsgAddActionResponse;
    if (object.code !== undefined && object.code !== null) {
      message.code = String(object.code);
    } else {
      message.code = "";
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    if (object.onchainData !== undefined && object.onchainData !== null) {
      message.onchainData = OnChainData.fromJSON(object.onchainData);
    } else {
      message.onchainData = undefined;
    }
    return message;
  },

  toJSON(message: MsgAddActionResponse): unknown {
    const obj: any = {};
    message.code !== undefined && (obj.code = message.code);
    message.name !== undefined && (obj.name = message.name);
    message.onchainData !== undefined &&
      (obj.onchainData = message.onchainData
        ? OnChainData.toJSON(message.onchainData)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgAddActionResponse>): MsgAddActionResponse {
    const message = { ...baseMsgAddActionResponse } as MsgAddActionResponse;
    if (object.code !== undefined && object.code !== null) {
      message.code = object.code;
    } else {
      message.code = "";
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    if (object.onchainData !== undefined && object.onchainData !== null) {
      message.onchainData = OnChainData.fromPartial(object.onchainData);
    } else {
      message.onchainData = undefined;
    }
    return message;
  },
};

const baseMsgSetBaseUri: object = { creator: "", code: "", newBaseUri: "" };

export const MsgSetBaseUri = {
  encode(message: MsgSetBaseUri, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.code !== "") {
      writer.uint32(18).string(message.code);
    }
    if (message.newBaseUri !== "") {
      writer.uint32(26).string(message.newBaseUri);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgSetBaseUri {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgSetBaseUri } as MsgSetBaseUri;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.code = reader.string();
          break;
        case 3:
          message.newBaseUri = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSetBaseUri {
    const message = { ...baseMsgSetBaseUri } as MsgSetBaseUri;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.code !== undefined && object.code !== null) {
      message.code = String(object.code);
    } else {
      message.code = "";
    }
    if (object.newBaseUri !== undefined && object.newBaseUri !== null) {
      message.newBaseUri = String(object.newBaseUri);
    } else {
      message.newBaseUri = "";
    }
    return message;
  },

  toJSON(message: MsgSetBaseUri): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.code !== undefined && (obj.code = message.code);
    message.newBaseUri !== undefined && (obj.newBaseUri = message.newBaseUri);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgSetBaseUri>): MsgSetBaseUri {
    const message = { ...baseMsgSetBaseUri } as MsgSetBaseUri;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.code !== undefined && object.code !== null) {
      message.code = object.code;
    } else {
      message.code = "";
    }
    if (object.newBaseUri !== undefined && object.newBaseUri !== null) {
      message.newBaseUri = object.newBaseUri;
    } else {
      message.newBaseUri = "";
    }
    return message;
  },
};

const baseMsgSetBaseUriResponse: object = { code: "", uri: "" };

export const MsgSetBaseUriResponse = {
  encode(
    message: MsgSetBaseUriResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.code !== "") {
      writer.uint32(10).string(message.code);
    }
    if (message.uri !== "") {
      writer.uint32(18).string(message.uri);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgSetBaseUriResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgSetBaseUriResponse } as MsgSetBaseUriResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.code = reader.string();
          break;
        case 2:
          message.uri = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSetBaseUriResponse {
    const message = { ...baseMsgSetBaseUriResponse } as MsgSetBaseUriResponse;
    if (object.code !== undefined && object.code !== null) {
      message.code = String(object.code);
    } else {
      message.code = "";
    }
    if (object.uri !== undefined && object.uri !== null) {
      message.uri = String(object.uri);
    } else {
      message.uri = "";
    }
    return message;
  },

  toJSON(message: MsgSetBaseUriResponse): unknown {
    const obj: any = {};
    message.code !== undefined && (obj.code = message.code);
    message.uri !== undefined && (obj.uri = message.uri);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgSetBaseUriResponse>
  ): MsgSetBaseUriResponse {
    const message = { ...baseMsgSetBaseUriResponse } as MsgSetBaseUriResponse;
    if (object.code !== undefined && object.code !== null) {
      message.code = object.code;
    } else {
      message.code = "";
    }
    if (object.uri !== undefined && object.uri !== null) {
      message.uri = object.uri;
    } else {
      message.uri = "";
    }
    return message;
  },
};

const baseMsgToggleAction: object = {
  creator: "",
  code: "",
  action: "",
  disable: false,
};

export const MsgToggleAction = {
  encode(message: MsgToggleAction, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.code !== "") {
      writer.uint32(18).string(message.code);
    }
    if (message.action !== "") {
      writer.uint32(26).string(message.action);
    }
    if (message.disable === true) {
      writer.uint32(32).bool(message.disable);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgToggleAction {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgToggleAction } as MsgToggleAction;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.code = reader.string();
          break;
        case 3:
          message.action = reader.string();
          break;
        case 4:
          message.disable = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgToggleAction {
    const message = { ...baseMsgToggleAction } as MsgToggleAction;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.code !== undefined && object.code !== null) {
      message.code = String(object.code);
    } else {
      message.code = "";
    }
    if (object.action !== undefined && object.action !== null) {
      message.action = String(object.action);
    } else {
      message.action = "";
    }
    if (object.disable !== undefined && object.disable !== null) {
      message.disable = Boolean(object.disable);
    } else {
      message.disable = false;
    }
    return message;
  },

  toJSON(message: MsgToggleAction): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.code !== undefined && (obj.code = message.code);
    message.action !== undefined && (obj.action = message.action);
    message.disable !== undefined && (obj.disable = message.disable);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgToggleAction>): MsgToggleAction {
    const message = { ...baseMsgToggleAction } as MsgToggleAction;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.code !== undefined && object.code !== null) {
      message.code = object.code;
    } else {
      message.code = "";
    }
    if (object.action !== undefined && object.action !== null) {
      message.action = object.action;
    } else {
      message.action = "";
    }
    if (object.disable !== undefined && object.disable !== null) {
      message.disable = object.disable;
    } else {
      message.disable = false;
    }
    return message;
  },
};

const baseMsgToggleActionResponse: object = { code: "", name: "" };

export const MsgToggleActionResponse = {
  encode(
    message: MsgToggleActionResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.code !== "") {
      writer.uint32(10).string(message.code);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.onchainDataAction !== undefined) {
      OnChainData.encode(
        message.onchainDataAction,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgToggleActionResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgToggleActionResponse,
    } as MsgToggleActionResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.code = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.onchainDataAction = OnChainData.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgToggleActionResponse {
    const message = {
      ...baseMsgToggleActionResponse,
    } as MsgToggleActionResponse;
    if (object.code !== undefined && object.code !== null) {
      message.code = String(object.code);
    } else {
      message.code = "";
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    if (
      object.onchainDataAction !== undefined &&
      object.onchainDataAction !== null
    ) {
      message.onchainDataAction = OnChainData.fromJSON(
        object.onchainDataAction
      );
    } else {
      message.onchainDataAction = undefined;
    }
    return message;
  },

  toJSON(message: MsgToggleActionResponse): unknown {
    const obj: any = {};
    message.code !== undefined && (obj.code = message.code);
    message.name !== undefined && (obj.name = message.name);
    message.onchainDataAction !== undefined &&
      (obj.onchainDataAction = message.onchainDataAction
        ? OnChainData.toJSON(message.onchainDataAction)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgToggleActionResponse>
  ): MsgToggleActionResponse {
    const message = {
      ...baseMsgToggleActionResponse,
    } as MsgToggleActionResponse;
    if (object.code !== undefined && object.code !== null) {
      message.code = object.code;
    } else {
      message.code = "";
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    if (
      object.onchainDataAction !== undefined &&
      object.onchainDataAction !== null
    ) {
      message.onchainDataAction = OnChainData.fromPartial(
        object.onchainDataAction
      );
    } else {
      message.onchainDataAction = undefined;
    }
    return message;
  },
};

const baseMsgChangeSchemaOwner: object = {
  creator: "",
  nftSchemaCode: "",
  newOwner: "",
};

export const MsgChangeSchemaOwner = {
  encode(
    message: MsgChangeSchemaOwner,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.nftSchemaCode !== "") {
      writer.uint32(18).string(message.nftSchemaCode);
    }
    if (message.newOwner !== "") {
      writer.uint32(26).string(message.newOwner);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgChangeSchemaOwner {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgChangeSchemaOwner } as MsgChangeSchemaOwner;
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
          message.newOwner = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgChangeSchemaOwner {
    const message = { ...baseMsgChangeSchemaOwner } as MsgChangeSchemaOwner;
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
    if (object.newOwner !== undefined && object.newOwner !== null) {
      message.newOwner = String(object.newOwner);
    } else {
      message.newOwner = "";
    }
    return message;
  },

  toJSON(message: MsgChangeSchemaOwner): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.nftSchemaCode !== undefined &&
      (obj.nftSchemaCode = message.nftSchemaCode);
    message.newOwner !== undefined && (obj.newOwner = message.newOwner);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgChangeSchemaOwner>): MsgChangeSchemaOwner {
    const message = { ...baseMsgChangeSchemaOwner } as MsgChangeSchemaOwner;
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
    if (object.newOwner !== undefined && object.newOwner !== null) {
      message.newOwner = object.newOwner;
    } else {
      message.newOwner = "";
    }
    return message;
  },
};

const baseMsgChangeSchemaOwnerResponse: object = {
  nftSchemaCode: "",
  newOwner: "",
};

export const MsgChangeSchemaOwnerResponse = {
  encode(
    message: MsgChangeSchemaOwnerResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.nftSchemaCode !== "") {
      writer.uint32(10).string(message.nftSchemaCode);
    }
    if (message.newOwner !== "") {
      writer.uint32(18).string(message.newOwner);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgChangeSchemaOwnerResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgChangeSchemaOwnerResponse,
    } as MsgChangeSchemaOwnerResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nftSchemaCode = reader.string();
          break;
        case 2:
          message.newOwner = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgChangeSchemaOwnerResponse {
    const message = {
      ...baseMsgChangeSchemaOwnerResponse,
    } as MsgChangeSchemaOwnerResponse;
    if (object.nftSchemaCode !== undefined && object.nftSchemaCode !== null) {
      message.nftSchemaCode = String(object.nftSchemaCode);
    } else {
      message.nftSchemaCode = "";
    }
    if (object.newOwner !== undefined && object.newOwner !== null) {
      message.newOwner = String(object.newOwner);
    } else {
      message.newOwner = "";
    }
    return message;
  },

  toJSON(message: MsgChangeSchemaOwnerResponse): unknown {
    const obj: any = {};
    message.nftSchemaCode !== undefined &&
      (obj.nftSchemaCode = message.nftSchemaCode);
    message.newOwner !== undefined && (obj.newOwner = message.newOwner);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgChangeSchemaOwnerResponse>
  ): MsgChangeSchemaOwnerResponse {
    const message = {
      ...baseMsgChangeSchemaOwnerResponse,
    } as MsgChangeSchemaOwnerResponse;
    if (object.nftSchemaCode !== undefined && object.nftSchemaCode !== null) {
      message.nftSchemaCode = object.nftSchemaCode;
    } else {
      message.nftSchemaCode = "";
    }
    if (object.newOwner !== undefined && object.newOwner !== null) {
      message.newOwner = object.newOwner;
    } else {
      message.newOwner = "";
    }
    return message;
  },
};

const baseMsgResyncAttributesResponse: object = { nftSchemaCode: "" };

export const MsgResyncAttributesResponse = {
  encode(
    message: MsgResyncAttributesResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.nftSchemaCode !== "") {
      writer.uint32(10).string(message.nftSchemaCode);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgResyncAttributesResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgResyncAttributesResponse,
    } as MsgResyncAttributesResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nftSchemaCode = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgResyncAttributesResponse {
    const message = {
      ...baseMsgResyncAttributesResponse,
    } as MsgResyncAttributesResponse;
    if (object.nftSchemaCode !== undefined && object.nftSchemaCode !== null) {
      message.nftSchemaCode = String(object.nftSchemaCode);
    } else {
      message.nftSchemaCode = "";
    }
    return message;
  },

  toJSON(message: MsgResyncAttributesResponse): unknown {
    const obj: any = {};
    message.nftSchemaCode !== undefined &&
      (obj.nftSchemaCode = message.nftSchemaCode);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgResyncAttributesResponse>
  ): MsgResyncAttributesResponse {
    const message = {
      ...baseMsgResyncAttributesResponse,
    } as MsgResyncAttributesResponse;
    if (object.nftSchemaCode !== undefined && object.nftSchemaCode !== null) {
      message.nftSchemaCode = object.nftSchemaCode;
    } else {
      message.nftSchemaCode = "";
    }
    return message;
  },
};

const baseMsgShowAttributes: object = {
  creator: "",
  nftSchemaCode: "",
  show: false,
  attributeNames: "",
};

export const MsgShowAttributes = {
  encode(message: MsgShowAttributes, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.nftSchemaCode !== "") {
      writer.uint32(18).string(message.nftSchemaCode);
    }
    if (message.show === true) {
      writer.uint32(24).bool(message.show);
    }
    for (const v of message.attributeNames) {
      writer.uint32(34).string(v!);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgShowAttributes {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgShowAttributes } as MsgShowAttributes;
    message.attributeNames = [];
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
          message.show = reader.bool();
          break;
        case 4:
          message.attributeNames.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgShowAttributes {
    const message = { ...baseMsgShowAttributes } as MsgShowAttributes;
    message.attributeNames = [];
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
    if (object.show !== undefined && object.show !== null) {
      message.show = Boolean(object.show);
    } else {
      message.show = false;
    }
    if (object.attributeNames !== undefined && object.attributeNames !== null) {
      for (const e of object.attributeNames) {
        message.attributeNames.push(String(e));
      }
    }
    return message;
  },

  toJSON(message: MsgShowAttributes): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.nftSchemaCode !== undefined &&
      (obj.nftSchemaCode = message.nftSchemaCode);
    message.show !== undefined && (obj.show = message.show);
    if (message.attributeNames) {
      obj.attributeNames = message.attributeNames.map((e) => e);
    } else {
      obj.attributeNames = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<MsgShowAttributes>): MsgShowAttributes {
    const message = { ...baseMsgShowAttributes } as MsgShowAttributes;
    message.attributeNames = [];
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
    if (object.show !== undefined && object.show !== null) {
      message.show = object.show;
    } else {
      message.show = false;
    }
    if (object.attributeNames !== undefined && object.attributeNames !== null) {
      for (const e of object.attributeNames) {
        message.attributeNames.push(e);
      }
    }
    return message;
  },
};

const baseMsgShowAttributesResponse: object = { nftSchema: "" };

export const MsgShowAttributesResponse = {
  encode(
    message: MsgShowAttributesResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.nftSchema !== "") {
      writer.uint32(10).string(message.nftSchema);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgShowAttributesResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgShowAttributesResponse,
    } as MsgShowAttributesResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nftSchema = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgShowAttributesResponse {
    const message = {
      ...baseMsgShowAttributesResponse,
    } as MsgShowAttributesResponse;
    if (object.nftSchema !== undefined && object.nftSchema !== null) {
      message.nftSchema = String(object.nftSchema);
    } else {
      message.nftSchema = "";
    }
    return message;
  },

  toJSON(message: MsgShowAttributesResponse): unknown {
    const obj: any = {};
    message.nftSchema !== undefined && (obj.nftSchema = message.nftSchema);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgShowAttributesResponse>
  ): MsgShowAttributesResponse {
    const message = {
      ...baseMsgShowAttributesResponse,
    } as MsgShowAttributesResponse;
    if (object.nftSchema !== undefined && object.nftSchema !== null) {
      message.nftSchema = object.nftSchema;
    } else {
      message.nftSchema = "";
    }
    return message;
  },
};

const baseMsgResyncAttributes: object = {
  creator: "",
  nftSchemaCode: "",
  tokenId: "",
};

export const MsgResyncAttributes = {
  encode(
    message: MsgResyncAttributes,
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
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgResyncAttributes {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgResyncAttributes } as MsgResyncAttributes;
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
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgResyncAttributes {
    const message = { ...baseMsgResyncAttributes } as MsgResyncAttributes;
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
    return message;
  },

  toJSON(message: MsgResyncAttributes): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.nftSchemaCode !== undefined &&
      (obj.nftSchemaCode = message.nftSchemaCode);
    message.tokenId !== undefined && (obj.tokenId = message.tokenId);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgResyncAttributes>): MsgResyncAttributes {
    const message = { ...baseMsgResyncAttributes } as MsgResyncAttributes;
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
    return message;
  },
};

const baseMsgSetFeeConfig: object = {
  creator: "",
  newFeeConfigBase64: "",
  feeSubject: 0,
};

export const MsgSetFeeConfig = {
  encode(message: MsgSetFeeConfig, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.newFeeConfigBase64 !== "") {
      writer.uint32(18).string(message.newFeeConfigBase64);
    }
    if (message.feeSubject !== 0) {
      writer.uint32(24).int32(message.feeSubject);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgSetFeeConfig {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgSetFeeConfig } as MsgSetFeeConfig;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.newFeeConfigBase64 = reader.string();
          break;
        case 3:
          message.feeSubject = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSetFeeConfig {
    const message = { ...baseMsgSetFeeConfig } as MsgSetFeeConfig;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (
      object.newFeeConfigBase64 !== undefined &&
      object.newFeeConfigBase64 !== null
    ) {
      message.newFeeConfigBase64 = String(object.newFeeConfigBase64);
    } else {
      message.newFeeConfigBase64 = "";
    }
    if (object.feeSubject !== undefined && object.feeSubject !== null) {
      message.feeSubject = feeSubjectFromJSON(object.feeSubject);
    } else {
      message.feeSubject = 0;
    }
    return message;
  },

  toJSON(message: MsgSetFeeConfig): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.newFeeConfigBase64 !== undefined &&
      (obj.newFeeConfigBase64 = message.newFeeConfigBase64);
    message.feeSubject !== undefined &&
      (obj.feeSubject = feeSubjectToJSON(message.feeSubject));
    return obj;
  },

  fromPartial(object: DeepPartial<MsgSetFeeConfig>): MsgSetFeeConfig {
    const message = { ...baseMsgSetFeeConfig } as MsgSetFeeConfig;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (
      object.newFeeConfigBase64 !== undefined &&
      object.newFeeConfigBase64 !== null
    ) {
      message.newFeeConfigBase64 = object.newFeeConfigBase64;
    } else {
      message.newFeeConfigBase64 = "";
    }
    if (object.feeSubject !== undefined && object.feeSubject !== null) {
      message.feeSubject = object.feeSubject;
    } else {
      message.feeSubject = 0;
    }
    return message;
  },
};

const baseMsgSetFeeConfigResponse: object = {};

export const MsgSetFeeConfigResponse = {
  encode(_: MsgSetFeeConfigResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgSetFeeConfigResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgSetFeeConfigResponse,
    } as MsgSetFeeConfigResponse;
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

  fromJSON(_: any): MsgSetFeeConfigResponse {
    const message = {
      ...baseMsgSetFeeConfigResponse,
    } as MsgSetFeeConfigResponse;
    return message;
  },

  toJSON(_: MsgSetFeeConfigResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgSetFeeConfigResponse>
  ): MsgSetFeeConfigResponse {
    const message = {
      ...baseMsgSetFeeConfigResponse,
    } as MsgSetFeeConfigResponse;
    return message;
  },
};

const baseMsgSetMintauth: object = {
  creator: "",
  nftSchemaCode: "",
  authorizeTo: 0,
};

export const MsgSetMintauth = {
  encode(message: MsgSetMintauth, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.nftSchemaCode !== "") {
      writer.uint32(18).string(message.nftSchemaCode);
    }
    if (message.authorizeTo !== 0) {
      writer.uint32(24).int32(message.authorizeTo);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgSetMintauth {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgSetMintauth } as MsgSetMintauth;
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
          message.authorizeTo = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSetMintauth {
    const message = { ...baseMsgSetMintauth } as MsgSetMintauth;
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
    if (object.authorizeTo !== undefined && object.authorizeTo !== null) {
      message.authorizeTo = authorizeToFromJSON(object.authorizeTo);
    } else {
      message.authorizeTo = 0;
    }
    return message;
  },

  toJSON(message: MsgSetMintauth): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.nftSchemaCode !== undefined &&
      (obj.nftSchemaCode = message.nftSchemaCode);
    message.authorizeTo !== undefined &&
      (obj.authorizeTo = authorizeToToJSON(message.authorizeTo));
    return obj;
  },

  fromPartial(object: DeepPartial<MsgSetMintauth>): MsgSetMintauth {
    const message = { ...baseMsgSetMintauth } as MsgSetMintauth;
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
    if (object.authorizeTo !== undefined && object.authorizeTo !== null) {
      message.authorizeTo = object.authorizeTo;
    } else {
      message.authorizeTo = 0;
    }
    return message;
  },
};

const baseMsgSetMintauthResponse: object = { nftSchemaCode: "" };

export const MsgSetMintauthResponse = {
  encode(
    message: MsgSetMintauthResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.nftSchemaCode !== "") {
      writer.uint32(10).string(message.nftSchemaCode);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgSetMintauthResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgSetMintauthResponse } as MsgSetMintauthResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nftSchemaCode = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSetMintauthResponse {
    const message = { ...baseMsgSetMintauthResponse } as MsgSetMintauthResponse;
    if (object.nftSchemaCode !== undefined && object.nftSchemaCode !== null) {
      message.nftSchemaCode = String(object.nftSchemaCode);
    } else {
      message.nftSchemaCode = "";
    }
    return message;
  },

  toJSON(message: MsgSetMintauthResponse): unknown {
    const obj: any = {};
    message.nftSchemaCode !== undefined &&
      (obj.nftSchemaCode = message.nftSchemaCode);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgSetMintauthResponse>
  ): MsgSetMintauthResponse {
    const message = { ...baseMsgSetMintauthResponse } as MsgSetMintauthResponse;
    if (object.nftSchemaCode !== undefined && object.nftSchemaCode !== null) {
      message.nftSchemaCode = object.nftSchemaCode;
    } else {
      message.nftSchemaCode = "";
    }
    return message;
  },
};

const baseMsgChangeOrgOwner: object = {
  creator: "",
  orgName: "",
  toNewOwner: "",
};

export const MsgChangeOrgOwner = {
  encode(message: MsgChangeOrgOwner, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.orgName !== "") {
      writer.uint32(18).string(message.orgName);
    }
    if (message.toNewOwner !== "") {
      writer.uint32(26).string(message.toNewOwner);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgChangeOrgOwner {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgChangeOrgOwner } as MsgChangeOrgOwner;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.orgName = reader.string();
          break;
        case 3:
          message.toNewOwner = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgChangeOrgOwner {
    const message = { ...baseMsgChangeOrgOwner } as MsgChangeOrgOwner;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.orgName !== undefined && object.orgName !== null) {
      message.orgName = String(object.orgName);
    } else {
      message.orgName = "";
    }
    if (object.toNewOwner !== undefined && object.toNewOwner !== null) {
      message.toNewOwner = String(object.toNewOwner);
    } else {
      message.toNewOwner = "";
    }
    return message;
  },

  toJSON(message: MsgChangeOrgOwner): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.orgName !== undefined && (obj.orgName = message.orgName);
    message.toNewOwner !== undefined && (obj.toNewOwner = message.toNewOwner);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgChangeOrgOwner>): MsgChangeOrgOwner {
    const message = { ...baseMsgChangeOrgOwner } as MsgChangeOrgOwner;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.orgName !== undefined && object.orgName !== null) {
      message.orgName = object.orgName;
    } else {
      message.orgName = "";
    }
    if (object.toNewOwner !== undefined && object.toNewOwner !== null) {
      message.toNewOwner = object.toNewOwner;
    } else {
      message.toNewOwner = "";
    }
    return message;
  },
};

const baseMsgChangeOrgOwnerResponse: object = {
  orgName: "",
  oldOwner: "",
  newOwner: "",
};

export const MsgChangeOrgOwnerResponse = {
  encode(
    message: MsgChangeOrgOwnerResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.orgName !== "") {
      writer.uint32(10).string(message.orgName);
    }
    if (message.oldOwner !== "") {
      writer.uint32(18).string(message.oldOwner);
    }
    if (message.newOwner !== "") {
      writer.uint32(26).string(message.newOwner);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgChangeOrgOwnerResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgChangeOrgOwnerResponse,
    } as MsgChangeOrgOwnerResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.orgName = reader.string();
          break;
        case 2:
          message.oldOwner = reader.string();
          break;
        case 3:
          message.newOwner = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgChangeOrgOwnerResponse {
    const message = {
      ...baseMsgChangeOrgOwnerResponse,
    } as MsgChangeOrgOwnerResponse;
    if (object.orgName !== undefined && object.orgName !== null) {
      message.orgName = String(object.orgName);
    } else {
      message.orgName = "";
    }
    if (object.oldOwner !== undefined && object.oldOwner !== null) {
      message.oldOwner = String(object.oldOwner);
    } else {
      message.oldOwner = "";
    }
    if (object.newOwner !== undefined && object.newOwner !== null) {
      message.newOwner = String(object.newOwner);
    } else {
      message.newOwner = "";
    }
    return message;
  },

  toJSON(message: MsgChangeOrgOwnerResponse): unknown {
    const obj: any = {};
    message.orgName !== undefined && (obj.orgName = message.orgName);
    message.oldOwner !== undefined && (obj.oldOwner = message.oldOwner);
    message.newOwner !== undefined && (obj.newOwner = message.newOwner);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgChangeOrgOwnerResponse>
  ): MsgChangeOrgOwnerResponse {
    const message = {
      ...baseMsgChangeOrgOwnerResponse,
    } as MsgChangeOrgOwnerResponse;
    if (object.orgName !== undefined && object.orgName !== null) {
      message.orgName = object.orgName;
    } else {
      message.orgName = "";
    }
    if (object.oldOwner !== undefined && object.oldOwner !== null) {
      message.oldOwner = object.oldOwner;
    } else {
      message.oldOwner = "";
    }
    if (object.newOwner !== undefined && object.newOwner !== null) {
      message.newOwner = object.newOwner;
    } else {
      message.newOwner = "";
    }
    return message;
  },
};

const baseMsgSetUriRetrievalMethod: object = {
  creator: "",
  schemaCode: "",
  newMethod: 0,
};

export const MsgSetUriRetrievalMethod = {
  encode(
    message: MsgSetUriRetrievalMethod,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.schemaCode !== "") {
      writer.uint32(18).string(message.schemaCode);
    }
    if (message.newMethod !== 0) {
      writer.uint32(24).int32(message.newMethod);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgSetUriRetrievalMethod {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgSetUriRetrievalMethod,
    } as MsgSetUriRetrievalMethod;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.schemaCode = reader.string();
          break;
        case 3:
          message.newMethod = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSetUriRetrievalMethod {
    const message = {
      ...baseMsgSetUriRetrievalMethod,
    } as MsgSetUriRetrievalMethod;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.schemaCode !== undefined && object.schemaCode !== null) {
      message.schemaCode = String(object.schemaCode);
    } else {
      message.schemaCode = "";
    }
    if (object.newMethod !== undefined && object.newMethod !== null) {
      message.newMethod = Number(object.newMethod);
    } else {
      message.newMethod = 0;
    }
    return message;
  },

  toJSON(message: MsgSetUriRetrievalMethod): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.schemaCode !== undefined && (obj.schemaCode = message.schemaCode);
    message.newMethod !== undefined && (obj.newMethod = message.newMethod);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgSetUriRetrievalMethod>
  ): MsgSetUriRetrievalMethod {
    const message = {
      ...baseMsgSetUriRetrievalMethod,
    } as MsgSetUriRetrievalMethod;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.schemaCode !== undefined && object.schemaCode !== null) {
      message.schemaCode = object.schemaCode;
    } else {
      message.schemaCode = "";
    }
    if (object.newMethod !== undefined && object.newMethod !== null) {
      message.newMethod = object.newMethod;
    } else {
      message.newMethod = 0;
    }
    return message;
  },
};

const baseMsgSetUriRetrievalMethodResponse: object = {
  schemaCode: "",
  newMethod: "",
};

export const MsgSetUriRetrievalMethodResponse = {
  encode(
    message: MsgSetUriRetrievalMethodResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.schemaCode !== "") {
      writer.uint32(10).string(message.schemaCode);
    }
    if (message.newMethod !== "") {
      writer.uint32(18).string(message.newMethod);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgSetUriRetrievalMethodResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgSetUriRetrievalMethodResponse,
    } as MsgSetUriRetrievalMethodResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.schemaCode = reader.string();
          break;
        case 2:
          message.newMethod = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSetUriRetrievalMethodResponse {
    const message = {
      ...baseMsgSetUriRetrievalMethodResponse,
    } as MsgSetUriRetrievalMethodResponse;
    if (object.schemaCode !== undefined && object.schemaCode !== null) {
      message.schemaCode = String(object.schemaCode);
    } else {
      message.schemaCode = "";
    }
    if (object.newMethod !== undefined && object.newMethod !== null) {
      message.newMethod = String(object.newMethod);
    } else {
      message.newMethod = "";
    }
    return message;
  },

  toJSON(message: MsgSetUriRetrievalMethodResponse): unknown {
    const obj: any = {};
    message.schemaCode !== undefined && (obj.schemaCode = message.schemaCode);
    message.newMethod !== undefined && (obj.newMethod = message.newMethod);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgSetUriRetrievalMethodResponse>
  ): MsgSetUriRetrievalMethodResponse {
    const message = {
      ...baseMsgSetUriRetrievalMethodResponse,
    } as MsgSetUriRetrievalMethodResponse;
    if (object.schemaCode !== undefined && object.schemaCode !== null) {
      message.schemaCode = object.schemaCode;
    } else {
      message.schemaCode = "";
    }
    if (object.newMethod !== undefined && object.newMethod !== null) {
      message.newMethod = object.newMethod;
    } else {
      message.newMethod = "";
    }
    return message;
  },
};

const baseMsgSetOriginChain: object = {
  creator: "",
  schemaCode: "",
  newOriginChain: "",
};

export const MsgSetOriginChain = {
  encode(message: MsgSetOriginChain, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.schemaCode !== "") {
      writer.uint32(18).string(message.schemaCode);
    }
    if (message.newOriginChain !== "") {
      writer.uint32(26).string(message.newOriginChain);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgSetOriginChain {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgSetOriginChain } as MsgSetOriginChain;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.schemaCode = reader.string();
          break;
        case 3:
          message.newOriginChain = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSetOriginChain {
    const message = { ...baseMsgSetOriginChain } as MsgSetOriginChain;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.schemaCode !== undefined && object.schemaCode !== null) {
      message.schemaCode = String(object.schemaCode);
    } else {
      message.schemaCode = "";
    }
    if (object.newOriginChain !== undefined && object.newOriginChain !== null) {
      message.newOriginChain = String(object.newOriginChain);
    } else {
      message.newOriginChain = "";
    }
    return message;
  },

  toJSON(message: MsgSetOriginChain): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.schemaCode !== undefined && (obj.schemaCode = message.schemaCode);
    message.newOriginChain !== undefined &&
      (obj.newOriginChain = message.newOriginChain);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgSetOriginChain>): MsgSetOriginChain {
    const message = { ...baseMsgSetOriginChain } as MsgSetOriginChain;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.schemaCode !== undefined && object.schemaCode !== null) {
      message.schemaCode = object.schemaCode;
    } else {
      message.schemaCode = "";
    }
    if (object.newOriginChain !== undefined && object.newOriginChain !== null) {
      message.newOriginChain = object.newOriginChain;
    } else {
      message.newOriginChain = "";
    }
    return message;
  },
};

const baseMsgSetOriginChainResponse: object = {
  schemaCode: "",
  newOriginChain: "",
};

export const MsgSetOriginChainResponse = {
  encode(
    message: MsgSetOriginChainResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.schemaCode !== "") {
      writer.uint32(10).string(message.schemaCode);
    }
    if (message.newOriginChain !== "") {
      writer.uint32(18).string(message.newOriginChain);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgSetOriginChainResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgSetOriginChainResponse,
    } as MsgSetOriginChainResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.schemaCode = reader.string();
          break;
        case 2:
          message.newOriginChain = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSetOriginChainResponse {
    const message = {
      ...baseMsgSetOriginChainResponse,
    } as MsgSetOriginChainResponse;
    if (object.schemaCode !== undefined && object.schemaCode !== null) {
      message.schemaCode = String(object.schemaCode);
    } else {
      message.schemaCode = "";
    }
    if (object.newOriginChain !== undefined && object.newOriginChain !== null) {
      message.newOriginChain = String(object.newOriginChain);
    } else {
      message.newOriginChain = "";
    }
    return message;
  },

  toJSON(message: MsgSetOriginChainResponse): unknown {
    const obj: any = {};
    message.schemaCode !== undefined && (obj.schemaCode = message.schemaCode);
    message.newOriginChain !== undefined &&
      (obj.newOriginChain = message.newOriginChain);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgSetOriginChainResponse>
  ): MsgSetOriginChainResponse {
    const message = {
      ...baseMsgSetOriginChainResponse,
    } as MsgSetOriginChainResponse;
    if (object.schemaCode !== undefined && object.schemaCode !== null) {
      message.schemaCode = object.schemaCode;
    } else {
      message.schemaCode = "";
    }
    if (object.newOriginChain !== undefined && object.newOriginChain !== null) {
      message.newOriginChain = object.newOriginChain;
    } else {
      message.newOriginChain = "";
    }
    return message;
  },
};

const baseMsgSetOriginContract: object = {
  creator: "",
  schemaCode: "",
  newContractAddress: "",
};

export const MsgSetOriginContract = {
  encode(
    message: MsgSetOriginContract,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.schemaCode !== "") {
      writer.uint32(18).string(message.schemaCode);
    }
    if (message.newContractAddress !== "") {
      writer.uint32(26).string(message.newContractAddress);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgSetOriginContract {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgSetOriginContract } as MsgSetOriginContract;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.schemaCode = reader.string();
          break;
        case 3:
          message.newContractAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSetOriginContract {
    const message = { ...baseMsgSetOriginContract } as MsgSetOriginContract;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.schemaCode !== undefined && object.schemaCode !== null) {
      message.schemaCode = String(object.schemaCode);
    } else {
      message.schemaCode = "";
    }
    if (
      object.newContractAddress !== undefined &&
      object.newContractAddress !== null
    ) {
      message.newContractAddress = String(object.newContractAddress);
    } else {
      message.newContractAddress = "";
    }
    return message;
  },

  toJSON(message: MsgSetOriginContract): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.schemaCode !== undefined && (obj.schemaCode = message.schemaCode);
    message.newContractAddress !== undefined &&
      (obj.newContractAddress = message.newContractAddress);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgSetOriginContract>): MsgSetOriginContract {
    const message = { ...baseMsgSetOriginContract } as MsgSetOriginContract;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.schemaCode !== undefined && object.schemaCode !== null) {
      message.schemaCode = object.schemaCode;
    } else {
      message.schemaCode = "";
    }
    if (
      object.newContractAddress !== undefined &&
      object.newContractAddress !== null
    ) {
      message.newContractAddress = object.newContractAddress;
    } else {
      message.newContractAddress = "";
    }
    return message;
  },
};

const baseMsgSetOriginContractResponse: object = {
  schemaCode: "",
  newContractAddress: "",
};

export const MsgSetOriginContractResponse = {
  encode(
    message: MsgSetOriginContractResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.schemaCode !== "") {
      writer.uint32(10).string(message.schemaCode);
    }
    if (message.newContractAddress !== "") {
      writer.uint32(18).string(message.newContractAddress);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgSetOriginContractResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgSetOriginContractResponse,
    } as MsgSetOriginContractResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.schemaCode = reader.string();
          break;
        case 2:
          message.newContractAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSetOriginContractResponse {
    const message = {
      ...baseMsgSetOriginContractResponse,
    } as MsgSetOriginContractResponse;
    if (object.schemaCode !== undefined && object.schemaCode !== null) {
      message.schemaCode = String(object.schemaCode);
    } else {
      message.schemaCode = "";
    }
    if (
      object.newContractAddress !== undefined &&
      object.newContractAddress !== null
    ) {
      message.newContractAddress = String(object.newContractAddress);
    } else {
      message.newContractAddress = "";
    }
    return message;
  },

  toJSON(message: MsgSetOriginContractResponse): unknown {
    const obj: any = {};
    message.schemaCode !== undefined && (obj.schemaCode = message.schemaCode);
    message.newContractAddress !== undefined &&
      (obj.newContractAddress = message.newContractAddress);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgSetOriginContractResponse>
  ): MsgSetOriginContractResponse {
    const message = {
      ...baseMsgSetOriginContractResponse,
    } as MsgSetOriginContractResponse;
    if (object.schemaCode !== undefined && object.schemaCode !== null) {
      message.schemaCode = object.schemaCode;
    } else {
      message.schemaCode = "";
    }
    if (
      object.newContractAddress !== undefined &&
      object.newContractAddress !== null
    ) {
      message.newContractAddress = object.newContractAddress;
    } else {
      message.newContractAddress = "";
    }
    return message;
  },
};

const baseMsgSetAttributeOveriding: object = {
  creator: "",
  schemaCode: "",
  newOveridingType: 0,
};

export const MsgSetAttributeOveriding = {
  encode(
    message: MsgSetAttributeOveriding,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.schemaCode !== "") {
      writer.uint32(18).string(message.schemaCode);
    }
    if (message.newOveridingType !== 0) {
      writer.uint32(24).int32(message.newOveridingType);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgSetAttributeOveriding {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgSetAttributeOveriding,
    } as MsgSetAttributeOveriding;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.schemaCode = reader.string();
          break;
        case 3:
          message.newOveridingType = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSetAttributeOveriding {
    const message = {
      ...baseMsgSetAttributeOveriding,
    } as MsgSetAttributeOveriding;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.schemaCode !== undefined && object.schemaCode !== null) {
      message.schemaCode = String(object.schemaCode);
    } else {
      message.schemaCode = "";
    }
    if (
      object.newOveridingType !== undefined &&
      object.newOveridingType !== null
    ) {
      message.newOveridingType = Number(object.newOveridingType);
    } else {
      message.newOveridingType = 0;
    }
    return message;
  },

  toJSON(message: MsgSetAttributeOveriding): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.schemaCode !== undefined && (obj.schemaCode = message.schemaCode);
    message.newOveridingType !== undefined &&
      (obj.newOveridingType = message.newOveridingType);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgSetAttributeOveriding>
  ): MsgSetAttributeOveriding {
    const message = {
      ...baseMsgSetAttributeOveriding,
    } as MsgSetAttributeOveriding;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.schemaCode !== undefined && object.schemaCode !== null) {
      message.schemaCode = object.schemaCode;
    } else {
      message.schemaCode = "";
    }
    if (
      object.newOveridingType !== undefined &&
      object.newOveridingType !== null
    ) {
      message.newOveridingType = object.newOveridingType;
    } else {
      message.newOveridingType = 0;
    }
    return message;
  },
};

const baseMsgSetAttributeOveridingResponse: object = {
  schemaCode: "",
  newOveriding: "",
};

export const MsgSetAttributeOveridingResponse = {
  encode(
    message: MsgSetAttributeOveridingResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.schemaCode !== "") {
      writer.uint32(10).string(message.schemaCode);
    }
    if (message.newOveriding !== "") {
      writer.uint32(18).string(message.newOveriding);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgSetAttributeOveridingResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgSetAttributeOveridingResponse,
    } as MsgSetAttributeOveridingResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.schemaCode = reader.string();
          break;
        case 2:
          message.newOveriding = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSetAttributeOveridingResponse {
    const message = {
      ...baseMsgSetAttributeOveridingResponse,
    } as MsgSetAttributeOveridingResponse;
    if (object.schemaCode !== undefined && object.schemaCode !== null) {
      message.schemaCode = String(object.schemaCode);
    } else {
      message.schemaCode = "";
    }
    if (object.newOveriding !== undefined && object.newOveriding !== null) {
      message.newOveriding = String(object.newOveriding);
    } else {
      message.newOveriding = "";
    }
    return message;
  },

  toJSON(message: MsgSetAttributeOveridingResponse): unknown {
    const obj: any = {};
    message.schemaCode !== undefined && (obj.schemaCode = message.schemaCode);
    message.newOveriding !== undefined &&
      (obj.newOveriding = message.newOveriding);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgSetAttributeOveridingResponse>
  ): MsgSetAttributeOveridingResponse {
    const message = {
      ...baseMsgSetAttributeOveridingResponse,
    } as MsgSetAttributeOveridingResponse;
    if (object.schemaCode !== undefined && object.schemaCode !== null) {
      message.schemaCode = object.schemaCode;
    } else {
      message.schemaCode = "";
    }
    if (object.newOveriding !== undefined && object.newOveriding !== null) {
      message.newOveriding = object.newOveriding;
    } else {
      message.newOveriding = "";
    }
    return message;
  },
};

const baseMsgSetMetadataFormat: object = {
  creator: "",
  schemaCode: "",
  newFormat: "",
};

export const MsgSetMetadataFormat = {
  encode(
    message: MsgSetMetadataFormat,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.schemaCode !== "") {
      writer.uint32(18).string(message.schemaCode);
    }
    if (message.newFormat !== "") {
      writer.uint32(26).string(message.newFormat);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgSetMetadataFormat {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgSetMetadataFormat } as MsgSetMetadataFormat;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.schemaCode = reader.string();
          break;
        case 3:
          message.newFormat = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSetMetadataFormat {
    const message = { ...baseMsgSetMetadataFormat } as MsgSetMetadataFormat;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.schemaCode !== undefined && object.schemaCode !== null) {
      message.schemaCode = String(object.schemaCode);
    } else {
      message.schemaCode = "";
    }
    if (object.newFormat !== undefined && object.newFormat !== null) {
      message.newFormat = String(object.newFormat);
    } else {
      message.newFormat = "";
    }
    return message;
  },

  toJSON(message: MsgSetMetadataFormat): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.schemaCode !== undefined && (obj.schemaCode = message.schemaCode);
    message.newFormat !== undefined && (obj.newFormat = message.newFormat);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgSetMetadataFormat>): MsgSetMetadataFormat {
    const message = { ...baseMsgSetMetadataFormat } as MsgSetMetadataFormat;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.schemaCode !== undefined && object.schemaCode !== null) {
      message.schemaCode = object.schemaCode;
    } else {
      message.schemaCode = "";
    }
    if (object.newFormat !== undefined && object.newFormat !== null) {
      message.newFormat = object.newFormat;
    } else {
      message.newFormat = "";
    }
    return message;
  },
};

const baseMsgSetMetadataFormatResponse: object = {
  schemaCode: "",
  newFormat: "",
};

export const MsgSetMetadataFormatResponse = {
  encode(
    message: MsgSetMetadataFormatResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.schemaCode !== "") {
      writer.uint32(10).string(message.schemaCode);
    }
    if (message.newFormat !== "") {
      writer.uint32(18).string(message.newFormat);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgSetMetadataFormatResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgSetMetadataFormatResponse,
    } as MsgSetMetadataFormatResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.schemaCode = reader.string();
          break;
        case 2:
          message.newFormat = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSetMetadataFormatResponse {
    const message = {
      ...baseMsgSetMetadataFormatResponse,
    } as MsgSetMetadataFormatResponse;
    if (object.schemaCode !== undefined && object.schemaCode !== null) {
      message.schemaCode = String(object.schemaCode);
    } else {
      message.schemaCode = "";
    }
    if (object.newFormat !== undefined && object.newFormat !== null) {
      message.newFormat = String(object.newFormat);
    } else {
      message.newFormat = "";
    }
    return message;
  },

  toJSON(message: MsgSetMetadataFormatResponse): unknown {
    const obj: any = {};
    message.schemaCode !== undefined && (obj.schemaCode = message.schemaCode);
    message.newFormat !== undefined && (obj.newFormat = message.newFormat);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgSetMetadataFormatResponse>
  ): MsgSetMetadataFormatResponse {
    const message = {
      ...baseMsgSetMetadataFormatResponse,
    } as MsgSetMetadataFormatResponse;
    if (object.schemaCode !== undefined && object.schemaCode !== null) {
      message.schemaCode = object.schemaCode;
    } else {
      message.schemaCode = "";
    }
    if (object.newFormat !== undefined && object.newFormat !== null) {
      message.newFormat = object.newFormat;
    } else {
      message.newFormat = "";
    }
    return message;
  },
};

const baseMsgCreateActionExecutor: object = {
  creator: "",
  nftSchemaCode: "",
  executorAddress: "",
};

export const MsgCreateActionExecutor = {
  encode(
    message: MsgCreateActionExecutor,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.nftSchemaCode !== "") {
      writer.uint32(18).string(message.nftSchemaCode);
    }
    if (message.executorAddress !== "") {
      writer.uint32(26).string(message.executorAddress);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateActionExecutor {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreateActionExecutor,
    } as MsgCreateActionExecutor;
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
          message.executorAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateActionExecutor {
    const message = {
      ...baseMsgCreateActionExecutor,
    } as MsgCreateActionExecutor;
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
      object.executorAddress !== undefined &&
      object.executorAddress !== null
    ) {
      message.executorAddress = String(object.executorAddress);
    } else {
      message.executorAddress = "";
    }
    return message;
  },

  toJSON(message: MsgCreateActionExecutor): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.nftSchemaCode !== undefined &&
      (obj.nftSchemaCode = message.nftSchemaCode);
    message.executorAddress !== undefined &&
      (obj.executorAddress = message.executorAddress);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCreateActionExecutor>
  ): MsgCreateActionExecutor {
    const message = {
      ...baseMsgCreateActionExecutor,
    } as MsgCreateActionExecutor;
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
      object.executorAddress !== undefined &&
      object.executorAddress !== null
    ) {
      message.executorAddress = object.executorAddress;
    } else {
      message.executorAddress = "";
    }
    return message;
  },
};

const baseMsgCreateActionExecutorResponse: object = {
  nftSchemaCode: "",
  executorAddress: "",
};

export const MsgCreateActionExecutorResponse = {
  encode(
    message: MsgCreateActionExecutorResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.nftSchemaCode !== "") {
      writer.uint32(10).string(message.nftSchemaCode);
    }
    if (message.executorAddress !== "") {
      writer.uint32(18).string(message.executorAddress);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgCreateActionExecutorResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreateActionExecutorResponse,
    } as MsgCreateActionExecutorResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nftSchemaCode = reader.string();
          break;
        case 2:
          message.executorAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateActionExecutorResponse {
    const message = {
      ...baseMsgCreateActionExecutorResponse,
    } as MsgCreateActionExecutorResponse;
    if (object.nftSchemaCode !== undefined && object.nftSchemaCode !== null) {
      message.nftSchemaCode = String(object.nftSchemaCode);
    } else {
      message.nftSchemaCode = "";
    }
    if (
      object.executorAddress !== undefined &&
      object.executorAddress !== null
    ) {
      message.executorAddress = String(object.executorAddress);
    } else {
      message.executorAddress = "";
    }
    return message;
  },

  toJSON(message: MsgCreateActionExecutorResponse): unknown {
    const obj: any = {};
    message.nftSchemaCode !== undefined &&
      (obj.nftSchemaCode = message.nftSchemaCode);
    message.executorAddress !== undefined &&
      (obj.executorAddress = message.executorAddress);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCreateActionExecutorResponse>
  ): MsgCreateActionExecutorResponse {
    const message = {
      ...baseMsgCreateActionExecutorResponse,
    } as MsgCreateActionExecutorResponse;
    if (object.nftSchemaCode !== undefined && object.nftSchemaCode !== null) {
      message.nftSchemaCode = object.nftSchemaCode;
    } else {
      message.nftSchemaCode = "";
    }
    if (
      object.executorAddress !== undefined &&
      object.executorAddress !== null
    ) {
      message.executorAddress = object.executorAddress;
    } else {
      message.executorAddress = "";
    }
    return message;
  },
};

const baseMsgUpdateActionExecutor: object = {
  creator: "",
  nftSchemaCode: "",
  executorAddress: "",
};

export const MsgUpdateActionExecutor = {
  encode(
    message: MsgUpdateActionExecutor,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.nftSchemaCode !== "") {
      writer.uint32(18).string(message.nftSchemaCode);
    }
    if (message.executorAddress !== "") {
      writer.uint32(26).string(message.executorAddress);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateActionExecutor {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateActionExecutor,
    } as MsgUpdateActionExecutor;
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
          message.executorAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateActionExecutor {
    const message = {
      ...baseMsgUpdateActionExecutor,
    } as MsgUpdateActionExecutor;
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
      object.executorAddress !== undefined &&
      object.executorAddress !== null
    ) {
      message.executorAddress = String(object.executorAddress);
    } else {
      message.executorAddress = "";
    }
    return message;
  },

  toJSON(message: MsgUpdateActionExecutor): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.nftSchemaCode !== undefined &&
      (obj.nftSchemaCode = message.nftSchemaCode);
    message.executorAddress !== undefined &&
      (obj.executorAddress = message.executorAddress);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgUpdateActionExecutor>
  ): MsgUpdateActionExecutor {
    const message = {
      ...baseMsgUpdateActionExecutor,
    } as MsgUpdateActionExecutor;
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
      object.executorAddress !== undefined &&
      object.executorAddress !== null
    ) {
      message.executorAddress = object.executorAddress;
    } else {
      message.executorAddress = "";
    }
    return message;
  },
};

const baseMsgUpdateActionExecutorResponse: object = {
  nftSchemaCode: "",
  executorAddress: "",
};

export const MsgUpdateActionExecutorResponse = {
  encode(
    message: MsgUpdateActionExecutorResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.nftSchemaCode !== "") {
      writer.uint32(10).string(message.nftSchemaCode);
    }
    if (message.executorAddress !== "") {
      writer.uint32(18).string(message.executorAddress);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgUpdateActionExecutorResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateActionExecutorResponse,
    } as MsgUpdateActionExecutorResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nftSchemaCode = reader.string();
          break;
        case 2:
          message.executorAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateActionExecutorResponse {
    const message = {
      ...baseMsgUpdateActionExecutorResponse,
    } as MsgUpdateActionExecutorResponse;
    if (object.nftSchemaCode !== undefined && object.nftSchemaCode !== null) {
      message.nftSchemaCode = String(object.nftSchemaCode);
    } else {
      message.nftSchemaCode = "";
    }
    if (
      object.executorAddress !== undefined &&
      object.executorAddress !== null
    ) {
      message.executorAddress = String(object.executorAddress);
    } else {
      message.executorAddress = "";
    }
    return message;
  },

  toJSON(message: MsgUpdateActionExecutorResponse): unknown {
    const obj: any = {};
    message.nftSchemaCode !== undefined &&
      (obj.nftSchemaCode = message.nftSchemaCode);
    message.executorAddress !== undefined &&
      (obj.executorAddress = message.executorAddress);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgUpdateActionExecutorResponse>
  ): MsgUpdateActionExecutorResponse {
    const message = {
      ...baseMsgUpdateActionExecutorResponse,
    } as MsgUpdateActionExecutorResponse;
    if (object.nftSchemaCode !== undefined && object.nftSchemaCode !== null) {
      message.nftSchemaCode = object.nftSchemaCode;
    } else {
      message.nftSchemaCode = "";
    }
    if (
      object.executorAddress !== undefined &&
      object.executorAddress !== null
    ) {
      message.executorAddress = object.executorAddress;
    } else {
      message.executorAddress = "";
    }
    return message;
  },
};

const baseMsgDeleteActionExecutor: object = {
  creator: "",
  nftSchemaCode: "",
  executorAddress: "",
};

export const MsgDeleteActionExecutor = {
  encode(
    message: MsgDeleteActionExecutor,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.nftSchemaCode !== "") {
      writer.uint32(18).string(message.nftSchemaCode);
    }
    if (message.executorAddress !== "") {
      writer.uint32(26).string(message.executorAddress);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteActionExecutor {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgDeleteActionExecutor,
    } as MsgDeleteActionExecutor;
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
          message.executorAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDeleteActionExecutor {
    const message = {
      ...baseMsgDeleteActionExecutor,
    } as MsgDeleteActionExecutor;
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
      object.executorAddress !== undefined &&
      object.executorAddress !== null
    ) {
      message.executorAddress = String(object.executorAddress);
    } else {
      message.executorAddress = "";
    }
    return message;
  },

  toJSON(message: MsgDeleteActionExecutor): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.nftSchemaCode !== undefined &&
      (obj.nftSchemaCode = message.nftSchemaCode);
    message.executorAddress !== undefined &&
      (obj.executorAddress = message.executorAddress);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgDeleteActionExecutor>
  ): MsgDeleteActionExecutor {
    const message = {
      ...baseMsgDeleteActionExecutor,
    } as MsgDeleteActionExecutor;
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
      object.executorAddress !== undefined &&
      object.executorAddress !== null
    ) {
      message.executorAddress = object.executorAddress;
    } else {
      message.executorAddress = "";
    }
    return message;
  },
};

const baseMsgDeleteActionExecutorResponse: object = {
  nftSchemaCode: "",
  executorAddress: "",
};

export const MsgDeleteActionExecutorResponse = {
  encode(
    message: MsgDeleteActionExecutorResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.nftSchemaCode !== "") {
      writer.uint32(10).string(message.nftSchemaCode);
    }
    if (message.executorAddress !== "") {
      writer.uint32(18).string(message.executorAddress);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgDeleteActionExecutorResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgDeleteActionExecutorResponse,
    } as MsgDeleteActionExecutorResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nftSchemaCode = reader.string();
          break;
        case 2:
          message.executorAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDeleteActionExecutorResponse {
    const message = {
      ...baseMsgDeleteActionExecutorResponse,
    } as MsgDeleteActionExecutorResponse;
    if (object.nftSchemaCode !== undefined && object.nftSchemaCode !== null) {
      message.nftSchemaCode = String(object.nftSchemaCode);
    } else {
      message.nftSchemaCode = "";
    }
    if (
      object.executorAddress !== undefined &&
      object.executorAddress !== null
    ) {
      message.executorAddress = String(object.executorAddress);
    } else {
      message.executorAddress = "";
    }
    return message;
  },

  toJSON(message: MsgDeleteActionExecutorResponse): unknown {
    const obj: any = {};
    message.nftSchemaCode !== undefined &&
      (obj.nftSchemaCode = message.nftSchemaCode);
    message.executorAddress !== undefined &&
      (obj.executorAddress = message.executorAddress);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgDeleteActionExecutorResponse>
  ): MsgDeleteActionExecutorResponse {
    const message = {
      ...baseMsgDeleteActionExecutorResponse,
    } as MsgDeleteActionExecutorResponse;
    if (object.nftSchemaCode !== undefined && object.nftSchemaCode !== null) {
      message.nftSchemaCode = object.nftSchemaCode;
    } else {
      message.nftSchemaCode = "";
    }
    if (
      object.executorAddress !== undefined &&
      object.executorAddress !== null
    ) {
      message.executorAddress = object.executorAddress;
    } else {
      message.executorAddress = "";
    }
    return message;
  },
};

const baseMsgUpdateSchemaAttribute: object = {
  creator: "",
  nftSchemaCode: "",
  Base64UpdateAttriuteDefenition: "",
};

export const MsgUpdateSchemaAttribute = {
  encode(
    message: MsgUpdateSchemaAttribute,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.nftSchemaCode !== "") {
      writer.uint32(18).string(message.nftSchemaCode);
    }
    if (message.Base64UpdateAttriuteDefenition !== "") {
      writer.uint32(26).string(message.Base64UpdateAttriuteDefenition);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgUpdateSchemaAttribute {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateSchemaAttribute,
    } as MsgUpdateSchemaAttribute;
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
          message.Base64UpdateAttriuteDefenition = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateSchemaAttribute {
    const message = {
      ...baseMsgUpdateSchemaAttribute,
    } as MsgUpdateSchemaAttribute;
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
      object.Base64UpdateAttriuteDefenition !== undefined &&
      object.Base64UpdateAttriuteDefenition !== null
    ) {
      message.Base64UpdateAttriuteDefenition = String(
        object.Base64UpdateAttriuteDefenition
      );
    } else {
      message.Base64UpdateAttriuteDefenition = "";
    }
    return message;
  },

  toJSON(message: MsgUpdateSchemaAttribute): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.nftSchemaCode !== undefined &&
      (obj.nftSchemaCode = message.nftSchemaCode);
    message.Base64UpdateAttriuteDefenition !== undefined &&
      (obj.Base64UpdateAttriuteDefenition =
        message.Base64UpdateAttriuteDefenition);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgUpdateSchemaAttribute>
  ): MsgUpdateSchemaAttribute {
    const message = {
      ...baseMsgUpdateSchemaAttribute,
    } as MsgUpdateSchemaAttribute;
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
      object.Base64UpdateAttriuteDefenition !== undefined &&
      object.Base64UpdateAttriuteDefenition !== null
    ) {
      message.Base64UpdateAttriuteDefenition =
        object.Base64UpdateAttriuteDefenition;
    } else {
      message.Base64UpdateAttriuteDefenition = "";
    }
    return message;
  },
};

const baseMsgUpdateSchemaAttributeResponse: object = {
  nftSchemaCode: "",
  name: "",
};

export const MsgUpdateSchemaAttributeResponse = {
  encode(
    message: MsgUpdateSchemaAttributeResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.nftSchemaCode !== "") {
      writer.uint32(10).string(message.nftSchemaCode);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.new_attribute !== undefined) {
      SchemaAttribute.encode(
        message.new_attribute,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgUpdateSchemaAttributeResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateSchemaAttributeResponse,
    } as MsgUpdateSchemaAttributeResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nftSchemaCode = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.new_attribute = SchemaAttribute.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateSchemaAttributeResponse {
    const message = {
      ...baseMsgUpdateSchemaAttributeResponse,
    } as MsgUpdateSchemaAttributeResponse;
    if (object.nftSchemaCode !== undefined && object.nftSchemaCode !== null) {
      message.nftSchemaCode = String(object.nftSchemaCode);
    } else {
      message.nftSchemaCode = "";
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    if (object.new_attribute !== undefined && object.new_attribute !== null) {
      message.new_attribute = SchemaAttribute.fromJSON(object.new_attribute);
    } else {
      message.new_attribute = undefined;
    }
    return message;
  },

  toJSON(message: MsgUpdateSchemaAttributeResponse): unknown {
    const obj: any = {};
    message.nftSchemaCode !== undefined &&
      (obj.nftSchemaCode = message.nftSchemaCode);
    message.name !== undefined && (obj.name = message.name);
    message.new_attribute !== undefined &&
      (obj.new_attribute = message.new_attribute
        ? SchemaAttribute.toJSON(message.new_attribute)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgUpdateSchemaAttributeResponse>
  ): MsgUpdateSchemaAttributeResponse {
    const message = {
      ...baseMsgUpdateSchemaAttributeResponse,
    } as MsgUpdateSchemaAttributeResponse;
    if (object.nftSchemaCode !== undefined && object.nftSchemaCode !== null) {
      message.nftSchemaCode = object.nftSchemaCode;
    } else {
      message.nftSchemaCode = "";
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    if (object.new_attribute !== undefined && object.new_attribute !== null) {
      message.new_attribute = SchemaAttribute.fromPartial(object.new_attribute);
    } else {
      message.new_attribute = undefined;
    }
    return message;
  },
};

const baseMsgDeleteSchemaAttribute: object = {
  creator: "",
  nftSchemaCode: "",
  name: "",
};

export const MsgDeleteSchemaAttribute = {
  encode(
    message: MsgDeleteSchemaAttribute,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.nftSchemaCode !== "") {
      writer.uint32(18).string(message.nftSchemaCode);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgDeleteSchemaAttribute {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgDeleteSchemaAttribute,
    } as MsgDeleteSchemaAttribute;
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
          message.name = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDeleteSchemaAttribute {
    const message = {
      ...baseMsgDeleteSchemaAttribute,
    } as MsgDeleteSchemaAttribute;
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
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    return message;
  },

  toJSON(message: MsgDeleteSchemaAttribute): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.nftSchemaCode !== undefined &&
      (obj.nftSchemaCode = message.nftSchemaCode);
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgDeleteSchemaAttribute>
  ): MsgDeleteSchemaAttribute {
    const message = {
      ...baseMsgDeleteSchemaAttribute,
    } as MsgDeleteSchemaAttribute;
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
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    return message;
  },
};

const baseMsgDeleteSchemaAttributeResponse: object = {
  nftSchemaCode: "",
  name: "",
};

export const MsgDeleteSchemaAttributeResponse = {
  encode(
    message: MsgDeleteSchemaAttributeResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.nftSchemaCode !== "") {
      writer.uint32(10).string(message.nftSchemaCode);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgDeleteSchemaAttributeResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgDeleteSchemaAttributeResponse,
    } as MsgDeleteSchemaAttributeResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nftSchemaCode = reader.string();
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

  fromJSON(object: any): MsgDeleteSchemaAttributeResponse {
    const message = {
      ...baseMsgDeleteSchemaAttributeResponse,
    } as MsgDeleteSchemaAttributeResponse;
    if (object.nftSchemaCode !== undefined && object.nftSchemaCode !== null) {
      message.nftSchemaCode = String(object.nftSchemaCode);
    } else {
      message.nftSchemaCode = "";
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    return message;
  },

  toJSON(message: MsgDeleteSchemaAttributeResponse): unknown {
    const obj: any = {};
    message.nftSchemaCode !== undefined &&
      (obj.nftSchemaCode = message.nftSchemaCode);
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgDeleteSchemaAttributeResponse>
  ): MsgDeleteSchemaAttributeResponse {
    const message = {
      ...baseMsgDeleteSchemaAttributeResponse,
    } as MsgDeleteSchemaAttributeResponse;
    if (object.nftSchemaCode !== undefined && object.nftSchemaCode !== null) {
      message.nftSchemaCode = object.nftSchemaCode;
    } else {
      message.nftSchemaCode = "";
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    return message;
  },
};

const baseMsgUpdateAction: object = {
  creator: "",
  nftSchemaCode: "",
  base64UpdateAction: "",
};

export const MsgUpdateAction = {
  encode(message: MsgUpdateAction, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.nftSchemaCode !== "") {
      writer.uint32(18).string(message.nftSchemaCode);
    }
    if (message.base64UpdateAction !== "") {
      writer.uint32(26).string(message.base64UpdateAction);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateAction {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateAction } as MsgUpdateAction;
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
          message.base64UpdateAction = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateAction {
    const message = { ...baseMsgUpdateAction } as MsgUpdateAction;
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
      object.base64UpdateAction !== undefined &&
      object.base64UpdateAction !== null
    ) {
      message.base64UpdateAction = String(object.base64UpdateAction);
    } else {
      message.base64UpdateAction = "";
    }
    return message;
  },

  toJSON(message: MsgUpdateAction): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.nftSchemaCode !== undefined &&
      (obj.nftSchemaCode = message.nftSchemaCode);
    message.base64UpdateAction !== undefined &&
      (obj.base64UpdateAction = message.base64UpdateAction);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgUpdateAction>): MsgUpdateAction {
    const message = { ...baseMsgUpdateAction } as MsgUpdateAction;
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
      object.base64UpdateAction !== undefined &&
      object.base64UpdateAction !== null
    ) {
      message.base64UpdateAction = object.base64UpdateAction;
    } else {
      message.base64UpdateAction = "";
    }
    return message;
  },
};

const baseMsgUpdateActionResponse: object = { nftSchemaCode: "", name: "" };

export const MsgUpdateActionResponse = {
  encode(
    message: MsgUpdateActionResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.nftSchemaCode !== "") {
      writer.uint32(10).string(message.nftSchemaCode);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateActionResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateActionResponse,
    } as MsgUpdateActionResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nftSchemaCode = reader.string();
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

  fromJSON(object: any): MsgUpdateActionResponse {
    const message = {
      ...baseMsgUpdateActionResponse,
    } as MsgUpdateActionResponse;
    if (object.nftSchemaCode !== undefined && object.nftSchemaCode !== null) {
      message.nftSchemaCode = String(object.nftSchemaCode);
    } else {
      message.nftSchemaCode = "";
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    return message;
  },

  toJSON(message: MsgUpdateActionResponse): unknown {
    const obj: any = {};
    message.nftSchemaCode !== undefined &&
      (obj.nftSchemaCode = message.nftSchemaCode);
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgUpdateActionResponse>
  ): MsgUpdateActionResponse {
    const message = {
      ...baseMsgUpdateActionResponse,
    } as MsgUpdateActionResponse;
    if (object.nftSchemaCode !== undefined && object.nftSchemaCode !== null) {
      message.nftSchemaCode = object.nftSchemaCode;
    } else {
      message.nftSchemaCode = "";
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  CreateNFTSchema(
    request: MsgCreateNFTSchema
  ): Promise<MsgCreateNFTSchemaResponse>;
  CreateMetadata(
    request: MsgCreateMetadata
  ): Promise<MsgCreateMetadataResponse>;
  PerformActionByAdmin(
    request: MsgPerformActionByAdmin
  ): Promise<MsgPerformActionByAdminResponse>;
  AddAttribute(request: MsgAddAttribute): Promise<MsgAddAttributeResponse>;
  AddAction(request: MsgAddAction): Promise<MsgAddActionResponse>;
  SetBaseUri(request: MsgSetBaseUri): Promise<MsgSetBaseUriResponse>;
  ToggleAction(request: MsgToggleAction): Promise<MsgToggleActionResponse>;
  ChangeSchemaOwner(
    request: MsgChangeSchemaOwner
  ): Promise<MsgChangeSchemaOwnerResponse>;
  ResyncAttributes(
    request: MsgResyncAttributes
  ): Promise<MsgResyncAttributesResponse>;
  ShowAttributes(
    request: MsgShowAttributes
  ): Promise<MsgShowAttributesResponse>;
  SetFeeConfig(request: MsgSetFeeConfig): Promise<MsgSetFeeConfigResponse>;
  SetMintauth(request: MsgSetMintauth): Promise<MsgSetMintauthResponse>;
  ChangeOrgOwner(
    request: MsgChangeOrgOwner
  ): Promise<MsgChangeOrgOwnerResponse>;
  CreateMultiMetadata(
    request: MsgCreateMultiMetadata
  ): Promise<MsgCreateMultiMetadataResponse>;
  PerformMultiTokenAction(
    request: MsgPerformMultiTokenAction
  ): Promise<MsgPerformMultiTokenActionResponse>;
  SetUriRetrievalMethod(
    request: MsgSetUriRetrievalMethod
  ): Promise<MsgSetUriRetrievalMethodResponse>;
  SetOriginChain(
    request: MsgSetOriginChain
  ): Promise<MsgSetOriginChainResponse>;
  SetOriginContract(
    request: MsgSetOriginContract
  ): Promise<MsgSetOriginContractResponse>;
  SetAttributeOveriding(
    request: MsgSetAttributeOveriding
  ): Promise<MsgSetAttributeOveridingResponse>;
  SetMetadataFormat(
    request: MsgSetMetadataFormat
  ): Promise<MsgSetMetadataFormatResponse>;
  CreateActionExecutor(
    request: MsgCreateActionExecutor
  ): Promise<MsgCreateActionExecutorResponse>;
  UpdateActionExecutor(
    request: MsgUpdateActionExecutor
  ): Promise<MsgUpdateActionExecutorResponse>;
  DeleteActionExecutor(
    request: MsgDeleteActionExecutor
  ): Promise<MsgDeleteActionExecutorResponse>;
  UpdateSchemaAttribute(
    request: MsgUpdateSchemaAttribute
  ): Promise<MsgUpdateSchemaAttributeResponse>;
  DeleteSchemaAttribute(
    request: MsgDeleteSchemaAttribute
  ): Promise<MsgDeleteSchemaAttributeResponse>;
  /** this line is used by starport scaffolding # proto/tx/rpc */
  UpdateAction(request: MsgUpdateAction): Promise<MsgUpdateActionResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  CreateNFTSchema(
    request: MsgCreateNFTSchema
  ): Promise<MsgCreateNFTSchemaResponse> {
    const data = MsgCreateNFTSchema.encode(request).finish();
    const promise = this.rpc.request(
      "thesixnetwork.sixnft.nftmngr.Msg",
      "CreateNFTSchema",
      data
    );
    return promise.then((data) =>
      MsgCreateNFTSchemaResponse.decode(new Reader(data))
    );
  }

  CreateMetadata(
    request: MsgCreateMetadata
  ): Promise<MsgCreateMetadataResponse> {
    const data = MsgCreateMetadata.encode(request).finish();
    const promise = this.rpc.request(
      "thesixnetwork.sixnft.nftmngr.Msg",
      "CreateMetadata",
      data
    );
    return promise.then((data) =>
      MsgCreateMetadataResponse.decode(new Reader(data))
    );
  }

  PerformActionByAdmin(
    request: MsgPerformActionByAdmin
  ): Promise<MsgPerformActionByAdminResponse> {
    const data = MsgPerformActionByAdmin.encode(request).finish();
    const promise = this.rpc.request(
      "thesixnetwork.sixnft.nftmngr.Msg",
      "PerformActionByAdmin",
      data
    );
    return promise.then((data) =>
      MsgPerformActionByAdminResponse.decode(new Reader(data))
    );
  }

  AddAttribute(request: MsgAddAttribute): Promise<MsgAddAttributeResponse> {
    const data = MsgAddAttribute.encode(request).finish();
    const promise = this.rpc.request(
      "thesixnetwork.sixnft.nftmngr.Msg",
      "AddAttribute",
      data
    );
    return promise.then((data) =>
      MsgAddAttributeResponse.decode(new Reader(data))
    );
  }

  AddAction(request: MsgAddAction): Promise<MsgAddActionResponse> {
    const data = MsgAddAction.encode(request).finish();
    const promise = this.rpc.request(
      "thesixnetwork.sixnft.nftmngr.Msg",
      "AddAction",
      data
    );
    return promise.then((data) =>
      MsgAddActionResponse.decode(new Reader(data))
    );
  }

  SetBaseUri(request: MsgSetBaseUri): Promise<MsgSetBaseUriResponse> {
    const data = MsgSetBaseUri.encode(request).finish();
    const promise = this.rpc.request(
      "thesixnetwork.sixnft.nftmngr.Msg",
      "SetBaseUri",
      data
    );
    return promise.then((data) =>
      MsgSetBaseUriResponse.decode(new Reader(data))
    );
  }

  ToggleAction(request: MsgToggleAction): Promise<MsgToggleActionResponse> {
    const data = MsgToggleAction.encode(request).finish();
    const promise = this.rpc.request(
      "thesixnetwork.sixnft.nftmngr.Msg",
      "ToggleAction",
      data
    );
    return promise.then((data) =>
      MsgToggleActionResponse.decode(new Reader(data))
    );
  }

  ChangeSchemaOwner(
    request: MsgChangeSchemaOwner
  ): Promise<MsgChangeSchemaOwnerResponse> {
    const data = MsgChangeSchemaOwner.encode(request).finish();
    const promise = this.rpc.request(
      "thesixnetwork.sixnft.nftmngr.Msg",
      "ChangeSchemaOwner",
      data
    );
    return promise.then((data) =>
      MsgChangeSchemaOwnerResponse.decode(new Reader(data))
    );
  }

  ResyncAttributes(
    request: MsgResyncAttributes
  ): Promise<MsgResyncAttributesResponse> {
    const data = MsgResyncAttributes.encode(request).finish();
    const promise = this.rpc.request(
      "thesixnetwork.sixnft.nftmngr.Msg",
      "ResyncAttributes",
      data
    );
    return promise.then((data) =>
      MsgResyncAttributesResponse.decode(new Reader(data))
    );
  }

  ShowAttributes(
    request: MsgShowAttributes
  ): Promise<MsgShowAttributesResponse> {
    const data = MsgShowAttributes.encode(request).finish();
    const promise = this.rpc.request(
      "thesixnetwork.sixnft.nftmngr.Msg",
      "ShowAttributes",
      data
    );
    return promise.then((data) =>
      MsgShowAttributesResponse.decode(new Reader(data))
    );
  }

  SetFeeConfig(request: MsgSetFeeConfig): Promise<MsgSetFeeConfigResponse> {
    const data = MsgSetFeeConfig.encode(request).finish();
    const promise = this.rpc.request(
      "thesixnetwork.sixnft.nftmngr.Msg",
      "SetFeeConfig",
      data
    );
    return promise.then((data) =>
      MsgSetFeeConfigResponse.decode(new Reader(data))
    );
  }

  SetMintauth(request: MsgSetMintauth): Promise<MsgSetMintauthResponse> {
    const data = MsgSetMintauth.encode(request).finish();
    const promise = this.rpc.request(
      "thesixnetwork.sixnft.nftmngr.Msg",
      "SetMintauth",
      data
    );
    return promise.then((data) =>
      MsgSetMintauthResponse.decode(new Reader(data))
    );
  }

  ChangeOrgOwner(
    request: MsgChangeOrgOwner
  ): Promise<MsgChangeOrgOwnerResponse> {
    const data = MsgChangeOrgOwner.encode(request).finish();
    const promise = this.rpc.request(
      "thesixnetwork.sixnft.nftmngr.Msg",
      "ChangeOrgOwner",
      data
    );
    return promise.then((data) =>
      MsgChangeOrgOwnerResponse.decode(new Reader(data))
    );
  }

  CreateMultiMetadata(
    request: MsgCreateMultiMetadata
  ): Promise<MsgCreateMultiMetadataResponse> {
    const data = MsgCreateMultiMetadata.encode(request).finish();
    const promise = this.rpc.request(
      "thesixnetwork.sixnft.nftmngr.Msg",
      "CreateMultiMetadata",
      data
    );
    return promise.then((data) =>
      MsgCreateMultiMetadataResponse.decode(new Reader(data))
    );
  }

  PerformMultiTokenAction(
    request: MsgPerformMultiTokenAction
  ): Promise<MsgPerformMultiTokenActionResponse> {
    const data = MsgPerformMultiTokenAction.encode(request).finish();
    const promise = this.rpc.request(
      "thesixnetwork.sixnft.nftmngr.Msg",
      "PerformMultiTokenAction",
      data
    );
    return promise.then((data) =>
      MsgPerformMultiTokenActionResponse.decode(new Reader(data))
    );
  }

  SetUriRetrievalMethod(
    request: MsgSetUriRetrievalMethod
  ): Promise<MsgSetUriRetrievalMethodResponse> {
    const data = MsgSetUriRetrievalMethod.encode(request).finish();
    const promise = this.rpc.request(
      "thesixnetwork.sixnft.nftmngr.Msg",
      "SetUriRetrievalMethod",
      data
    );
    return promise.then((data) =>
      MsgSetUriRetrievalMethodResponse.decode(new Reader(data))
    );
  }

  SetOriginChain(
    request: MsgSetOriginChain
  ): Promise<MsgSetOriginChainResponse> {
    const data = MsgSetOriginChain.encode(request).finish();
    const promise = this.rpc.request(
      "thesixnetwork.sixnft.nftmngr.Msg",
      "SetOriginChain",
      data
    );
    return promise.then((data) =>
      MsgSetOriginChainResponse.decode(new Reader(data))
    );
  }

  SetOriginContract(
    request: MsgSetOriginContract
  ): Promise<MsgSetOriginContractResponse> {
    const data = MsgSetOriginContract.encode(request).finish();
    const promise = this.rpc.request(
      "thesixnetwork.sixnft.nftmngr.Msg",
      "SetOriginContract",
      data
    );
    return promise.then((data) =>
      MsgSetOriginContractResponse.decode(new Reader(data))
    );
  }

  SetAttributeOveriding(
    request: MsgSetAttributeOveriding
  ): Promise<MsgSetAttributeOveridingResponse> {
    const data = MsgSetAttributeOveriding.encode(request).finish();
    const promise = this.rpc.request(
      "thesixnetwork.sixnft.nftmngr.Msg",
      "SetAttributeOveriding",
      data
    );
    return promise.then((data) =>
      MsgSetAttributeOveridingResponse.decode(new Reader(data))
    );
  }

  SetMetadataFormat(
    request: MsgSetMetadataFormat
  ): Promise<MsgSetMetadataFormatResponse> {
    const data = MsgSetMetadataFormat.encode(request).finish();
    const promise = this.rpc.request(
      "thesixnetwork.sixnft.nftmngr.Msg",
      "SetMetadataFormat",
      data
    );
    return promise.then((data) =>
      MsgSetMetadataFormatResponse.decode(new Reader(data))
    );
  }

  CreateActionExecutor(
    request: MsgCreateActionExecutor
  ): Promise<MsgCreateActionExecutorResponse> {
    const data = MsgCreateActionExecutor.encode(request).finish();
    const promise = this.rpc.request(
      "thesixnetwork.sixnft.nftmngr.Msg",
      "CreateActionExecutor",
      data
    );
    return promise.then((data) =>
      MsgCreateActionExecutorResponse.decode(new Reader(data))
    );
  }

  UpdateActionExecutor(
    request: MsgUpdateActionExecutor
  ): Promise<MsgUpdateActionExecutorResponse> {
    const data = MsgUpdateActionExecutor.encode(request).finish();
    const promise = this.rpc.request(
      "thesixnetwork.sixnft.nftmngr.Msg",
      "UpdateActionExecutor",
      data
    );
    return promise.then((data) =>
      MsgUpdateActionExecutorResponse.decode(new Reader(data))
    );
  }

  DeleteActionExecutor(
    request: MsgDeleteActionExecutor
  ): Promise<MsgDeleteActionExecutorResponse> {
    const data = MsgDeleteActionExecutor.encode(request).finish();
    const promise = this.rpc.request(
      "thesixnetwork.sixnft.nftmngr.Msg",
      "DeleteActionExecutor",
      data
    );
    return promise.then((data) =>
      MsgDeleteActionExecutorResponse.decode(new Reader(data))
    );
  }

  UpdateSchemaAttribute(
    request: MsgUpdateSchemaAttribute
  ): Promise<MsgUpdateSchemaAttributeResponse> {
    const data = MsgUpdateSchemaAttribute.encode(request).finish();
    const promise = this.rpc.request(
      "thesixnetwork.sixnft.nftmngr.Msg",
      "UpdateSchemaAttribute",
      data
    );
    return promise.then((data) =>
      MsgUpdateSchemaAttributeResponse.decode(new Reader(data))
    );
  }

  DeleteSchemaAttribute(
    request: MsgDeleteSchemaAttribute
  ): Promise<MsgDeleteSchemaAttributeResponse> {
    const data = MsgDeleteSchemaAttribute.encode(request).finish();
    const promise = this.rpc.request(
      "thesixnetwork.sixnft.nftmngr.Msg",
      "DeleteSchemaAttribute",
      data
    );
    return promise.then((data) =>
      MsgDeleteSchemaAttributeResponse.decode(new Reader(data))
    );
  }

  UpdateAction(request: MsgUpdateAction): Promise<MsgUpdateActionResponse> {
    const data = MsgUpdateAction.encode(request).finish();
    const promise = this.rpc.request(
      "thesixnetwork.sixnft.nftmngr.Msg",
      "UpdateAction",
      data
    );
    return promise.then((data) =>
      MsgUpdateActionResponse.decode(new Reader(data))
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
