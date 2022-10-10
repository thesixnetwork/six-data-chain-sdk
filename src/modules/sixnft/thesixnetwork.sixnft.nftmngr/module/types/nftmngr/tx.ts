/* eslint-disable */
import { Reader, Writer } from "protobufjs/minimal";
import { Any } from "../google/protobuf/any";
import { OnChainData } from "../nftmngr/on_chain_data";

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

export interface MsgPerformActionByAdmin {
  creator: string;
  nft_schema_code: string;
  tokenId: string;
  action: string;
  ref_id: string;
}

export interface MsgPerformActionByAdminResponse {
  nft_schema_code: string;
  token_id: string;
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

export interface MsgSetNFTAttribute {
  creator: string;
  nft_schema_code: string;
  base64_nft_attribute_value: string;
}

export interface MsgSetNFTAttributeResponse {
  nft_schema_code: string;
  attribute_name: string;
  nft_attribute_value: string;
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

export interface MsgAddSystemActioner {
  creator: string;
  nftSchemaCode: string;
  actioner: string;
}

export interface MsgAddSystemActionerResponse {
  nftSchemaCode: string;
  actioner: string;
}

export interface MsgRemoveSystemActioner {
  creator: string;
  nftSchemaCode: string;
  actioner: string;
}

export interface MsgRemoveSystemActionerResponse {
  nftSchemaCode: string;
  actioner: string;
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
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgPerformActionByAdmin {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgPerformActionByAdmin,
    } as MsgPerformActionByAdmin;
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
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgPerformActionByAdmin>
  ): MsgPerformActionByAdmin {
    const message = {
      ...baseMsgPerformActionByAdmin,
    } as MsgPerformActionByAdmin;
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

const baseMsgSetNFTAttribute: object = {
  creator: "",
  nft_schema_code: "",
  base64_nft_attribute_value: "",
};

export const MsgSetNFTAttribute = {
  encode(
    message: MsgSetNFTAttribute,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.nft_schema_code !== "") {
      writer.uint32(18).string(message.nft_schema_code);
    }
    if (message.base64_nft_attribute_value !== "") {
      writer.uint32(26).string(message.base64_nft_attribute_value);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgSetNFTAttribute {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgSetNFTAttribute } as MsgSetNFTAttribute;
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
          message.base64_nft_attribute_value = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSetNFTAttribute {
    const message = { ...baseMsgSetNFTAttribute } as MsgSetNFTAttribute;
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
    if (
      object.base64_nft_attribute_value !== undefined &&
      object.base64_nft_attribute_value !== null
    ) {
      message.base64_nft_attribute_value = String(
        object.base64_nft_attribute_value
      );
    } else {
      message.base64_nft_attribute_value = "";
    }
    return message;
  },

  toJSON(message: MsgSetNFTAttribute): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.nft_schema_code !== undefined &&
      (obj.nft_schema_code = message.nft_schema_code);
    message.base64_nft_attribute_value !== undefined &&
      (obj.base64_nft_attribute_value = message.base64_nft_attribute_value);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgSetNFTAttribute>): MsgSetNFTAttribute {
    const message = { ...baseMsgSetNFTAttribute } as MsgSetNFTAttribute;
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
    if (
      object.base64_nft_attribute_value !== undefined &&
      object.base64_nft_attribute_value !== null
    ) {
      message.base64_nft_attribute_value = object.base64_nft_attribute_value;
    } else {
      message.base64_nft_attribute_value = "";
    }
    return message;
  },
};

const baseMsgSetNFTAttributeResponse: object = {
  nft_schema_code: "",
  attribute_name: "",
  nft_attribute_value: "",
};

export const MsgSetNFTAttributeResponse = {
  encode(
    message: MsgSetNFTAttributeResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.nft_schema_code !== "") {
      writer.uint32(10).string(message.nft_schema_code);
    }
    if (message.attribute_name !== "") {
      writer.uint32(18).string(message.attribute_name);
    }
    if (message.nft_attribute_value !== "") {
      writer.uint32(26).string(message.nft_attribute_value);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgSetNFTAttributeResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgSetNFTAttributeResponse,
    } as MsgSetNFTAttributeResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nft_schema_code = reader.string();
          break;
        case 2:
          message.attribute_name = reader.string();
          break;
        case 3:
          message.nft_attribute_value = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSetNFTAttributeResponse {
    const message = {
      ...baseMsgSetNFTAttributeResponse,
    } as MsgSetNFTAttributeResponse;
    if (
      object.nft_schema_code !== undefined &&
      object.nft_schema_code !== null
    ) {
      message.nft_schema_code = String(object.nft_schema_code);
    } else {
      message.nft_schema_code = "";
    }
    if (object.attribute_name !== undefined && object.attribute_name !== null) {
      message.attribute_name = String(object.attribute_name);
    } else {
      message.attribute_name = "";
    }
    if (
      object.nft_attribute_value !== undefined &&
      object.nft_attribute_value !== null
    ) {
      message.nft_attribute_value = String(object.nft_attribute_value);
    } else {
      message.nft_attribute_value = "";
    }
    return message;
  },

  toJSON(message: MsgSetNFTAttributeResponse): unknown {
    const obj: any = {};
    message.nft_schema_code !== undefined &&
      (obj.nft_schema_code = message.nft_schema_code);
    message.attribute_name !== undefined &&
      (obj.attribute_name = message.attribute_name);
    message.nft_attribute_value !== undefined &&
      (obj.nft_attribute_value = message.nft_attribute_value);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgSetNFTAttributeResponse>
  ): MsgSetNFTAttributeResponse {
    const message = {
      ...baseMsgSetNFTAttributeResponse,
    } as MsgSetNFTAttributeResponse;
    if (
      object.nft_schema_code !== undefined &&
      object.nft_schema_code !== null
    ) {
      message.nft_schema_code = object.nft_schema_code;
    } else {
      message.nft_schema_code = "";
    }
    if (object.attribute_name !== undefined && object.attribute_name !== null) {
      message.attribute_name = object.attribute_name;
    } else {
      message.attribute_name = "";
    }
    if (
      object.nft_attribute_value !== undefined &&
      object.nft_attribute_value !== null
    ) {
      message.nft_attribute_value = object.nft_attribute_value;
    } else {
      message.nft_attribute_value = "";
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

const baseMsgToggleAction: object = { creator: "", code: "", action: "" };

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
    return message;
  },

  toJSON(message: MsgToggleAction): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.code !== undefined && (obj.code = message.code);
    message.action !== undefined && (obj.action = message.action);
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

const baseMsgAddSystemActioner: object = {
  creator: "",
  nftSchemaCode: "",
  actioner: "",
};

export const MsgAddSystemActioner = {
  encode(
    message: MsgAddSystemActioner,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.nftSchemaCode !== "") {
      writer.uint32(18).string(message.nftSchemaCode);
    }
    if (message.actioner !== "") {
      writer.uint32(26).string(message.actioner);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgAddSystemActioner {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgAddSystemActioner } as MsgAddSystemActioner;
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
          message.actioner = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgAddSystemActioner {
    const message = { ...baseMsgAddSystemActioner } as MsgAddSystemActioner;
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
    if (object.actioner !== undefined && object.actioner !== null) {
      message.actioner = String(object.actioner);
    } else {
      message.actioner = "";
    }
    return message;
  },

  toJSON(message: MsgAddSystemActioner): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.nftSchemaCode !== undefined &&
      (obj.nftSchemaCode = message.nftSchemaCode);
    message.actioner !== undefined && (obj.actioner = message.actioner);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgAddSystemActioner>): MsgAddSystemActioner {
    const message = { ...baseMsgAddSystemActioner } as MsgAddSystemActioner;
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
    if (object.actioner !== undefined && object.actioner !== null) {
      message.actioner = object.actioner;
    } else {
      message.actioner = "";
    }
    return message;
  },
};

const baseMsgAddSystemActionerResponse: object = {
  nftSchemaCode: "",
  actioner: "",
};

export const MsgAddSystemActionerResponse = {
  encode(
    message: MsgAddSystemActionerResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.nftSchemaCode !== "") {
      writer.uint32(10).string(message.nftSchemaCode);
    }
    if (message.actioner !== "") {
      writer.uint32(18).string(message.actioner);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgAddSystemActionerResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgAddSystemActionerResponse,
    } as MsgAddSystemActionerResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nftSchemaCode = reader.string();
          break;
        case 2:
          message.actioner = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgAddSystemActionerResponse {
    const message = {
      ...baseMsgAddSystemActionerResponse,
    } as MsgAddSystemActionerResponse;
    if (object.nftSchemaCode !== undefined && object.nftSchemaCode !== null) {
      message.nftSchemaCode = String(object.nftSchemaCode);
    } else {
      message.nftSchemaCode = "";
    }
    if (object.actioner !== undefined && object.actioner !== null) {
      message.actioner = String(object.actioner);
    } else {
      message.actioner = "";
    }
    return message;
  },

  toJSON(message: MsgAddSystemActionerResponse): unknown {
    const obj: any = {};
    message.nftSchemaCode !== undefined &&
      (obj.nftSchemaCode = message.nftSchemaCode);
    message.actioner !== undefined && (obj.actioner = message.actioner);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgAddSystemActionerResponse>
  ): MsgAddSystemActionerResponse {
    const message = {
      ...baseMsgAddSystemActionerResponse,
    } as MsgAddSystemActionerResponse;
    if (object.nftSchemaCode !== undefined && object.nftSchemaCode !== null) {
      message.nftSchemaCode = object.nftSchemaCode;
    } else {
      message.nftSchemaCode = "";
    }
    if (object.actioner !== undefined && object.actioner !== null) {
      message.actioner = object.actioner;
    } else {
      message.actioner = "";
    }
    return message;
  },
};

const baseMsgRemoveSystemActioner: object = {
  creator: "",
  nftSchemaCode: "",
  actioner: "",
};

export const MsgRemoveSystemActioner = {
  encode(
    message: MsgRemoveSystemActioner,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.nftSchemaCode !== "") {
      writer.uint32(18).string(message.nftSchemaCode);
    }
    if (message.actioner !== "") {
      writer.uint32(26).string(message.actioner);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgRemoveSystemActioner {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgRemoveSystemActioner,
    } as MsgRemoveSystemActioner;
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
          message.actioner = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgRemoveSystemActioner {
    const message = {
      ...baseMsgRemoveSystemActioner,
    } as MsgRemoveSystemActioner;
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
    if (object.actioner !== undefined && object.actioner !== null) {
      message.actioner = String(object.actioner);
    } else {
      message.actioner = "";
    }
    return message;
  },

  toJSON(message: MsgRemoveSystemActioner): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.nftSchemaCode !== undefined &&
      (obj.nftSchemaCode = message.nftSchemaCode);
    message.actioner !== undefined && (obj.actioner = message.actioner);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgRemoveSystemActioner>
  ): MsgRemoveSystemActioner {
    const message = {
      ...baseMsgRemoveSystemActioner,
    } as MsgRemoveSystemActioner;
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
    if (object.actioner !== undefined && object.actioner !== null) {
      message.actioner = object.actioner;
    } else {
      message.actioner = "";
    }
    return message;
  },
};

const baseMsgRemoveSystemActionerResponse: object = {
  nftSchemaCode: "",
  actioner: "",
};

export const MsgRemoveSystemActionerResponse = {
  encode(
    message: MsgRemoveSystemActionerResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.nftSchemaCode !== "") {
      writer.uint32(10).string(message.nftSchemaCode);
    }
    if (message.actioner !== "") {
      writer.uint32(18).string(message.actioner);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgRemoveSystemActionerResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgRemoveSystemActionerResponse,
    } as MsgRemoveSystemActionerResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nftSchemaCode = reader.string();
          break;
        case 2:
          message.actioner = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgRemoveSystemActionerResponse {
    const message = {
      ...baseMsgRemoveSystemActionerResponse,
    } as MsgRemoveSystemActionerResponse;
    if (object.nftSchemaCode !== undefined && object.nftSchemaCode !== null) {
      message.nftSchemaCode = String(object.nftSchemaCode);
    } else {
      message.nftSchemaCode = "";
    }
    if (object.actioner !== undefined && object.actioner !== null) {
      message.actioner = String(object.actioner);
    } else {
      message.actioner = "";
    }
    return message;
  },

  toJSON(message: MsgRemoveSystemActionerResponse): unknown {
    const obj: any = {};
    message.nftSchemaCode !== undefined &&
      (obj.nftSchemaCode = message.nftSchemaCode);
    message.actioner !== undefined && (obj.actioner = message.actioner);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgRemoveSystemActionerResponse>
  ): MsgRemoveSystemActionerResponse {
    const message = {
      ...baseMsgRemoveSystemActionerResponse,
    } as MsgRemoveSystemActionerResponse;
    if (object.nftSchemaCode !== undefined && object.nftSchemaCode !== null) {
      message.nftSchemaCode = object.nftSchemaCode;
    } else {
      message.nftSchemaCode = "";
    }
    if (object.actioner !== undefined && object.actioner !== null) {
      message.actioner = object.actioner;
    } else {
      message.actioner = "";
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
  SetNFTAttribute(
    request: MsgSetNFTAttribute
  ): Promise<MsgSetNFTAttributeResponse>;
  SetBaseUri(request: MsgSetBaseUri): Promise<MsgSetBaseUriResponse>;
  ToggleAction(request: MsgToggleAction): Promise<MsgToggleActionResponse>;
  ChangeSchemaOwner(
    request: MsgChangeSchemaOwner
  ): Promise<MsgChangeSchemaOwnerResponse>;
  AddSystemActioner(
    request: MsgAddSystemActioner
  ): Promise<MsgAddSystemActionerResponse>;
  RemoveSystemActioner(
    request: MsgRemoveSystemActioner
  ): Promise<MsgRemoveSystemActionerResponse>;
  ResyncAttributes(
    request: MsgResyncAttributes
  ): Promise<MsgResyncAttributesResponse>;
  /** this line is used by starport scaffolding # proto/tx/rpc */
  ShowAttributes(
    request: MsgShowAttributes
  ): Promise<MsgShowAttributesResponse>;
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

  SetNFTAttribute(
    request: MsgSetNFTAttribute
  ): Promise<MsgSetNFTAttributeResponse> {
    const data = MsgSetNFTAttribute.encode(request).finish();
    const promise = this.rpc.request(
      "thesixnetwork.sixnft.nftmngr.Msg",
      "SetNFTAttribute",
      data
    );
    return promise.then((data) =>
      MsgSetNFTAttributeResponse.decode(new Reader(data))
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

  AddSystemActioner(
    request: MsgAddSystemActioner
  ): Promise<MsgAddSystemActionerResponse> {
    const data = MsgAddSystemActioner.encode(request).finish();
    const promise = this.rpc.request(
      "thesixnetwork.sixnft.nftmngr.Msg",
      "AddSystemActioner",
      data
    );
    return promise.then((data) =>
      MsgAddSystemActionerResponse.decode(new Reader(data))
    );
  }

  RemoveSystemActioner(
    request: MsgRemoveSystemActioner
  ): Promise<MsgRemoveSystemActionerResponse> {
    const data = MsgRemoveSystemActioner.encode(request).finish();
    const promise = this.rpc.request(
      "thesixnetwork.sixnft.nftmngr.Msg",
      "RemoveSystemActioner",
      data
    );
    return promise.then((data) =>
      MsgRemoveSystemActionerResponse.decode(new Reader(data))
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
