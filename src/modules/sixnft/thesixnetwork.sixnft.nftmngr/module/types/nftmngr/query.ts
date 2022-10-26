/* eslint-disable */
import { Reader, Writer } from "protobufjs/minimal";
import { Params } from "../nftmngr/params";
import { NFTSchema } from "../nftmngr/nft_schema";
import {
  PageRequest,
  PageResponse,
} from "../cosmos/base/query/v1beta1/pagination";
import { NftData } from "../nftmngr/nft_data";
import { ActionByRefId } from "../nftmngr/action_by_ref_id";
import { Organization } from "../nftmngr/organization";
import { NFTSchemaByContract } from "../nftmngr/nft_schema_by_contract";
import { NFTFeeConfig } from "../nftmngr/nft_fee_config";
import { NFTFeeBalance } from "../nftmngr/nft_fee_balance";
import { MetadataCreator } from "../nftmngr/metadata_creator";

export const protobufPackage = "thesixnetwork.sixnft.nftmngr";

/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}

/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params | undefined;
}

export interface QueryGetNFTSchemaRequest {
  code: string;
}

export interface QueryGetNFTSchemaResponse {
  nFTSchema: NFTSchema | undefined;
}

export interface QueryAllNFTSchemaRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllNFTSchemaResponse {
  nFTSchema: NFTSchema[];
  pagination: PageResponse | undefined;
}

export interface QueryGetNftDataRequest {
  nftSchemaCode: string;
  tokenId: string;
}

export interface QueryGetNftDataResponse {
  nftData: NftData | undefined;
}

export interface QueryAllNftDataRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllNftDataResponse {
  nftData: NftData[];
  pagination: PageResponse | undefined;
}

export interface QueryGetActionByRefIdRequest {
  refId: string;
}

export interface QueryGetActionByRefIdResponse {
  actionByRefId: ActionByRefId | undefined;
}

export interface QueryAllActionByRefIdRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllActionByRefIdResponse {
  actionByRefId: ActionByRefId[];
  pagination: PageResponse | undefined;
}

export interface QueryGetOrganizationRequest {
  name: string;
}

export interface QueryGetOrganizationResponse {
  organization: Organization | undefined;
}

export interface QueryAllOrganizationRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllOrganizationResponse {
  organization: Organization[];
  pagination: PageResponse | undefined;
}

export interface QueryGetNftCollectionRequest {
  nftSchemaCode: string;
  pagination: PageRequest | undefined;
}

export interface QueryGetNftCollectionResponse {
  nftCollection: NftData[];
  pagination: PageResponse | undefined;
}

export interface QueryGetNFTSchemaByContractRequest {
  originContractAddress: string;
}

export interface QueryGetNFTSchemaByContractResponse {
  nFTSchemaByContract: NFTSchemaByContract | undefined;
}

export interface QueryAllNFTSchemaByContractRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllNFTSchemaByContractResponse {
  nFTSchemaByContract: NFTSchemaByContract[];
  pagination: PageResponse | undefined;
}

export interface QueryGetNFTFeeConfigRequest {}

export interface QueryGetNFTFeeConfigResponse {
  NFTFeeConfig: NFTFeeConfig | undefined;
}

export interface QueryGetNFTFeeBalanceRequest {}

export interface QueryGetNFTFeeBalanceResponse {
  NFTFeeBalance: NFTFeeBalance | undefined;
}

export interface QueryGetMetadataCreatorRequest {
  nftSchemaCode: string;
}

export interface QueryGetMetadataCreatorResponse {
  metadataCreator: MetadataCreator | undefined;
}

export interface QueryAllMetadataCreatorRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllMetadataCreatorResponse {
  metadataCreator: MetadataCreator[];
  pagination: PageResponse | undefined;
}

const baseQueryParamsRequest: object = {};

export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
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

  fromJSON(_: any): QueryParamsRequest {
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    return message;
  },

  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest {
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    return message;
  },
};

const baseQueryParamsResponse: object = {};

export const QueryParamsResponse = {
  encode(
    message: QueryParamsResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryParamsResponse {
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromJSON(object.params);
    } else {
      message.params = undefined;
    }
    return message;
  },

  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse {
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    } else {
      message.params = undefined;
    }
    return message;
  },
};

const baseQueryGetNFTSchemaRequest: object = { code: "" };

export const QueryGetNFTSchemaRequest = {
  encode(
    message: QueryGetNFTSchemaRequest,
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
  ): QueryGetNFTSchemaRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetNFTSchemaRequest,
    } as QueryGetNFTSchemaRequest;
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

  fromJSON(object: any): QueryGetNFTSchemaRequest {
    const message = {
      ...baseQueryGetNFTSchemaRequest,
    } as QueryGetNFTSchemaRequest;
    if (object.code !== undefined && object.code !== null) {
      message.code = String(object.code);
    } else {
      message.code = "";
    }
    return message;
  },

  toJSON(message: QueryGetNFTSchemaRequest): unknown {
    const obj: any = {};
    message.code !== undefined && (obj.code = message.code);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetNFTSchemaRequest>
  ): QueryGetNFTSchemaRequest {
    const message = {
      ...baseQueryGetNFTSchemaRequest,
    } as QueryGetNFTSchemaRequest;
    if (object.code !== undefined && object.code !== null) {
      message.code = object.code;
    } else {
      message.code = "";
    }
    return message;
  },
};

const baseQueryGetNFTSchemaResponse: object = {};

export const QueryGetNFTSchemaResponse = {
  encode(
    message: QueryGetNFTSchemaResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.nFTSchema !== undefined) {
      NFTSchema.encode(message.nFTSchema, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetNFTSchemaResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetNFTSchemaResponse,
    } as QueryGetNFTSchemaResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nFTSchema = NFTSchema.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetNFTSchemaResponse {
    const message = {
      ...baseQueryGetNFTSchemaResponse,
    } as QueryGetNFTSchemaResponse;
    if (object.nFTSchema !== undefined && object.nFTSchema !== null) {
      message.nFTSchema = NFTSchema.fromJSON(object.nFTSchema);
    } else {
      message.nFTSchema = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetNFTSchemaResponse): unknown {
    const obj: any = {};
    message.nFTSchema !== undefined &&
      (obj.nFTSchema = message.nFTSchema
        ? NFTSchema.toJSON(message.nFTSchema)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetNFTSchemaResponse>
  ): QueryGetNFTSchemaResponse {
    const message = {
      ...baseQueryGetNFTSchemaResponse,
    } as QueryGetNFTSchemaResponse;
    if (object.nFTSchema !== undefined && object.nFTSchema !== null) {
      message.nFTSchema = NFTSchema.fromPartial(object.nFTSchema);
    } else {
      message.nFTSchema = undefined;
    }
    return message;
  },
};

const baseQueryAllNFTSchemaRequest: object = {};

export const QueryAllNFTSchemaRequest = {
  encode(
    message: QueryAllNFTSchemaRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllNFTSchemaRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllNFTSchemaRequest,
    } as QueryAllNFTSchemaRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllNFTSchemaRequest {
    const message = {
      ...baseQueryAllNFTSchemaRequest,
    } as QueryAllNFTSchemaRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllNFTSchemaRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllNFTSchemaRequest>
  ): QueryAllNFTSchemaRequest {
    const message = {
      ...baseQueryAllNFTSchemaRequest,
    } as QueryAllNFTSchemaRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllNFTSchemaResponse: object = {};

export const QueryAllNFTSchemaResponse = {
  encode(
    message: QueryAllNFTSchemaResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.nFTSchema) {
      NFTSchema.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllNFTSchemaResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllNFTSchemaResponse,
    } as QueryAllNFTSchemaResponse;
    message.nFTSchema = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nFTSchema.push(NFTSchema.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllNFTSchemaResponse {
    const message = {
      ...baseQueryAllNFTSchemaResponse,
    } as QueryAllNFTSchemaResponse;
    message.nFTSchema = [];
    if (object.nFTSchema !== undefined && object.nFTSchema !== null) {
      for (const e of object.nFTSchema) {
        message.nFTSchema.push(NFTSchema.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllNFTSchemaResponse): unknown {
    const obj: any = {};
    if (message.nFTSchema) {
      obj.nFTSchema = message.nFTSchema.map((e) =>
        e ? NFTSchema.toJSON(e) : undefined
      );
    } else {
      obj.nFTSchema = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllNFTSchemaResponse>
  ): QueryAllNFTSchemaResponse {
    const message = {
      ...baseQueryAllNFTSchemaResponse,
    } as QueryAllNFTSchemaResponse;
    message.nFTSchema = [];
    if (object.nFTSchema !== undefined && object.nFTSchema !== null) {
      for (const e of object.nFTSchema) {
        message.nFTSchema.push(NFTSchema.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryGetNftDataRequest: object = { nftSchemaCode: "", tokenId: "" };

export const QueryGetNftDataRequest = {
  encode(
    message: QueryGetNftDataRequest,
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

  decode(input: Reader | Uint8Array, length?: number): QueryGetNftDataRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetNftDataRequest } as QueryGetNftDataRequest;
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

  fromJSON(object: any): QueryGetNftDataRequest {
    const message = { ...baseQueryGetNftDataRequest } as QueryGetNftDataRequest;
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

  toJSON(message: QueryGetNftDataRequest): unknown {
    const obj: any = {};
    message.nftSchemaCode !== undefined &&
      (obj.nftSchemaCode = message.nftSchemaCode);
    message.tokenId !== undefined && (obj.tokenId = message.tokenId);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetNftDataRequest>
  ): QueryGetNftDataRequest {
    const message = { ...baseQueryGetNftDataRequest } as QueryGetNftDataRequest;
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

const baseQueryGetNftDataResponse: object = {};

export const QueryGetNftDataResponse = {
  encode(
    message: QueryGetNftDataResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.nftData !== undefined) {
      NftData.encode(message.nftData, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetNftDataResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetNftDataResponse,
    } as QueryGetNftDataResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nftData = NftData.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetNftDataResponse {
    const message = {
      ...baseQueryGetNftDataResponse,
    } as QueryGetNftDataResponse;
    if (object.nftData !== undefined && object.nftData !== null) {
      message.nftData = NftData.fromJSON(object.nftData);
    } else {
      message.nftData = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetNftDataResponse): unknown {
    const obj: any = {};
    message.nftData !== undefined &&
      (obj.nftData = message.nftData
        ? NftData.toJSON(message.nftData)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetNftDataResponse>
  ): QueryGetNftDataResponse {
    const message = {
      ...baseQueryGetNftDataResponse,
    } as QueryGetNftDataResponse;
    if (object.nftData !== undefined && object.nftData !== null) {
      message.nftData = NftData.fromPartial(object.nftData);
    } else {
      message.nftData = undefined;
    }
    return message;
  },
};

const baseQueryAllNftDataRequest: object = {};

export const QueryAllNftDataRequest = {
  encode(
    message: QueryAllNftDataRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllNftDataRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllNftDataRequest } as QueryAllNftDataRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllNftDataRequest {
    const message = { ...baseQueryAllNftDataRequest } as QueryAllNftDataRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllNftDataRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllNftDataRequest>
  ): QueryAllNftDataRequest {
    const message = { ...baseQueryAllNftDataRequest } as QueryAllNftDataRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllNftDataResponse: object = {};

export const QueryAllNftDataResponse = {
  encode(
    message: QueryAllNftDataResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.nftData) {
      NftData.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllNftDataResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllNftDataResponse,
    } as QueryAllNftDataResponse;
    message.nftData = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nftData.push(NftData.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllNftDataResponse {
    const message = {
      ...baseQueryAllNftDataResponse,
    } as QueryAllNftDataResponse;
    message.nftData = [];
    if (object.nftData !== undefined && object.nftData !== null) {
      for (const e of object.nftData) {
        message.nftData.push(NftData.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllNftDataResponse): unknown {
    const obj: any = {};
    if (message.nftData) {
      obj.nftData = message.nftData.map((e) =>
        e ? NftData.toJSON(e) : undefined
      );
    } else {
      obj.nftData = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllNftDataResponse>
  ): QueryAllNftDataResponse {
    const message = {
      ...baseQueryAllNftDataResponse,
    } as QueryAllNftDataResponse;
    message.nftData = [];
    if (object.nftData !== undefined && object.nftData !== null) {
      for (const e of object.nftData) {
        message.nftData.push(NftData.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryGetActionByRefIdRequest: object = { refId: "" };

export const QueryGetActionByRefIdRequest = {
  encode(
    message: QueryGetActionByRefIdRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.refId !== "") {
      writer.uint32(10).string(message.refId);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetActionByRefIdRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetActionByRefIdRequest,
    } as QueryGetActionByRefIdRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.refId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetActionByRefIdRequest {
    const message = {
      ...baseQueryGetActionByRefIdRequest,
    } as QueryGetActionByRefIdRequest;
    if (object.refId !== undefined && object.refId !== null) {
      message.refId = String(object.refId);
    } else {
      message.refId = "";
    }
    return message;
  },

  toJSON(message: QueryGetActionByRefIdRequest): unknown {
    const obj: any = {};
    message.refId !== undefined && (obj.refId = message.refId);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetActionByRefIdRequest>
  ): QueryGetActionByRefIdRequest {
    const message = {
      ...baseQueryGetActionByRefIdRequest,
    } as QueryGetActionByRefIdRequest;
    if (object.refId !== undefined && object.refId !== null) {
      message.refId = object.refId;
    } else {
      message.refId = "";
    }
    return message;
  },
};

const baseQueryGetActionByRefIdResponse: object = {};

export const QueryGetActionByRefIdResponse = {
  encode(
    message: QueryGetActionByRefIdResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.actionByRefId !== undefined) {
      ActionByRefId.encode(
        message.actionByRefId,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetActionByRefIdResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetActionByRefIdResponse,
    } as QueryGetActionByRefIdResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.actionByRefId = ActionByRefId.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetActionByRefIdResponse {
    const message = {
      ...baseQueryGetActionByRefIdResponse,
    } as QueryGetActionByRefIdResponse;
    if (object.actionByRefId !== undefined && object.actionByRefId !== null) {
      message.actionByRefId = ActionByRefId.fromJSON(object.actionByRefId);
    } else {
      message.actionByRefId = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetActionByRefIdResponse): unknown {
    const obj: any = {};
    message.actionByRefId !== undefined &&
      (obj.actionByRefId = message.actionByRefId
        ? ActionByRefId.toJSON(message.actionByRefId)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetActionByRefIdResponse>
  ): QueryGetActionByRefIdResponse {
    const message = {
      ...baseQueryGetActionByRefIdResponse,
    } as QueryGetActionByRefIdResponse;
    if (object.actionByRefId !== undefined && object.actionByRefId !== null) {
      message.actionByRefId = ActionByRefId.fromPartial(object.actionByRefId);
    } else {
      message.actionByRefId = undefined;
    }
    return message;
  },
};

const baseQueryAllActionByRefIdRequest: object = {};

export const QueryAllActionByRefIdRequest = {
  encode(
    message: QueryAllActionByRefIdRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllActionByRefIdRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllActionByRefIdRequest,
    } as QueryAllActionByRefIdRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllActionByRefIdRequest {
    const message = {
      ...baseQueryAllActionByRefIdRequest,
    } as QueryAllActionByRefIdRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllActionByRefIdRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllActionByRefIdRequest>
  ): QueryAllActionByRefIdRequest {
    const message = {
      ...baseQueryAllActionByRefIdRequest,
    } as QueryAllActionByRefIdRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllActionByRefIdResponse: object = {};

export const QueryAllActionByRefIdResponse = {
  encode(
    message: QueryAllActionByRefIdResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.actionByRefId) {
      ActionByRefId.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllActionByRefIdResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllActionByRefIdResponse,
    } as QueryAllActionByRefIdResponse;
    message.actionByRefId = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.actionByRefId.push(
            ActionByRefId.decode(reader, reader.uint32())
          );
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllActionByRefIdResponse {
    const message = {
      ...baseQueryAllActionByRefIdResponse,
    } as QueryAllActionByRefIdResponse;
    message.actionByRefId = [];
    if (object.actionByRefId !== undefined && object.actionByRefId !== null) {
      for (const e of object.actionByRefId) {
        message.actionByRefId.push(ActionByRefId.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllActionByRefIdResponse): unknown {
    const obj: any = {};
    if (message.actionByRefId) {
      obj.actionByRefId = message.actionByRefId.map((e) =>
        e ? ActionByRefId.toJSON(e) : undefined
      );
    } else {
      obj.actionByRefId = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllActionByRefIdResponse>
  ): QueryAllActionByRefIdResponse {
    const message = {
      ...baseQueryAllActionByRefIdResponse,
    } as QueryAllActionByRefIdResponse;
    message.actionByRefId = [];
    if (object.actionByRefId !== undefined && object.actionByRefId !== null) {
      for (const e of object.actionByRefId) {
        message.actionByRefId.push(ActionByRefId.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryGetOrganizationRequest: object = { name: "" };

export const QueryGetOrganizationRequest = {
  encode(
    message: QueryGetOrganizationRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetOrganizationRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetOrganizationRequest,
    } as QueryGetOrganizationRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetOrganizationRequest {
    const message = {
      ...baseQueryGetOrganizationRequest,
    } as QueryGetOrganizationRequest;
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    return message;
  },

  toJSON(message: QueryGetOrganizationRequest): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetOrganizationRequest>
  ): QueryGetOrganizationRequest {
    const message = {
      ...baseQueryGetOrganizationRequest,
    } as QueryGetOrganizationRequest;
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    return message;
  },
};

const baseQueryGetOrganizationResponse: object = {};

export const QueryGetOrganizationResponse = {
  encode(
    message: QueryGetOrganizationResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.organization !== undefined) {
      Organization.encode(
        message.organization,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetOrganizationResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetOrganizationResponse,
    } as QueryGetOrganizationResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.organization = Organization.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetOrganizationResponse {
    const message = {
      ...baseQueryGetOrganizationResponse,
    } as QueryGetOrganizationResponse;
    if (object.organization !== undefined && object.organization !== null) {
      message.organization = Organization.fromJSON(object.organization);
    } else {
      message.organization = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetOrganizationResponse): unknown {
    const obj: any = {};
    message.organization !== undefined &&
      (obj.organization = message.organization
        ? Organization.toJSON(message.organization)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetOrganizationResponse>
  ): QueryGetOrganizationResponse {
    const message = {
      ...baseQueryGetOrganizationResponse,
    } as QueryGetOrganizationResponse;
    if (object.organization !== undefined && object.organization !== null) {
      message.organization = Organization.fromPartial(object.organization);
    } else {
      message.organization = undefined;
    }
    return message;
  },
};

const baseQueryAllOrganizationRequest: object = {};

export const QueryAllOrganizationRequest = {
  encode(
    message: QueryAllOrganizationRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllOrganizationRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllOrganizationRequest,
    } as QueryAllOrganizationRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllOrganizationRequest {
    const message = {
      ...baseQueryAllOrganizationRequest,
    } as QueryAllOrganizationRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllOrganizationRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllOrganizationRequest>
  ): QueryAllOrganizationRequest {
    const message = {
      ...baseQueryAllOrganizationRequest,
    } as QueryAllOrganizationRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllOrganizationResponse: object = {};

export const QueryAllOrganizationResponse = {
  encode(
    message: QueryAllOrganizationResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.organization) {
      Organization.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllOrganizationResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllOrganizationResponse,
    } as QueryAllOrganizationResponse;
    message.organization = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.organization.push(
            Organization.decode(reader, reader.uint32())
          );
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllOrganizationResponse {
    const message = {
      ...baseQueryAllOrganizationResponse,
    } as QueryAllOrganizationResponse;
    message.organization = [];
    if (object.organization !== undefined && object.organization !== null) {
      for (const e of object.organization) {
        message.organization.push(Organization.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllOrganizationResponse): unknown {
    const obj: any = {};
    if (message.organization) {
      obj.organization = message.organization.map((e) =>
        e ? Organization.toJSON(e) : undefined
      );
    } else {
      obj.organization = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllOrganizationResponse>
  ): QueryAllOrganizationResponse {
    const message = {
      ...baseQueryAllOrganizationResponse,
    } as QueryAllOrganizationResponse;
    message.organization = [];
    if (object.organization !== undefined && object.organization !== null) {
      for (const e of object.organization) {
        message.organization.push(Organization.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryGetNftCollectionRequest: object = { nftSchemaCode: "" };

export const QueryGetNftCollectionRequest = {
  encode(
    message: QueryGetNftCollectionRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.nftSchemaCode !== "") {
      writer.uint32(10).string(message.nftSchemaCode);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetNftCollectionRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetNftCollectionRequest,
    } as QueryGetNftCollectionRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nftSchemaCode = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetNftCollectionRequest {
    const message = {
      ...baseQueryGetNftCollectionRequest,
    } as QueryGetNftCollectionRequest;
    if (object.nftSchemaCode !== undefined && object.nftSchemaCode !== null) {
      message.nftSchemaCode = String(object.nftSchemaCode);
    } else {
      message.nftSchemaCode = "";
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetNftCollectionRequest): unknown {
    const obj: any = {};
    message.nftSchemaCode !== undefined &&
      (obj.nftSchemaCode = message.nftSchemaCode);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetNftCollectionRequest>
  ): QueryGetNftCollectionRequest {
    const message = {
      ...baseQueryGetNftCollectionRequest,
    } as QueryGetNftCollectionRequest;
    if (object.nftSchemaCode !== undefined && object.nftSchemaCode !== null) {
      message.nftSchemaCode = object.nftSchemaCode;
    } else {
      message.nftSchemaCode = "";
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryGetNftCollectionResponse: object = {};

export const QueryGetNftCollectionResponse = {
  encode(
    message: QueryGetNftCollectionResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.nftCollection) {
      NftData.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetNftCollectionResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetNftCollectionResponse,
    } as QueryGetNftCollectionResponse;
    message.nftCollection = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nftCollection.push(NftData.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetNftCollectionResponse {
    const message = {
      ...baseQueryGetNftCollectionResponse,
    } as QueryGetNftCollectionResponse;
    message.nftCollection = [];
    if (object.nftCollection !== undefined && object.nftCollection !== null) {
      for (const e of object.nftCollection) {
        message.nftCollection.push(NftData.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetNftCollectionResponse): unknown {
    const obj: any = {};
    if (message.nftCollection) {
      obj.nftCollection = message.nftCollection.map((e) =>
        e ? NftData.toJSON(e) : undefined
      );
    } else {
      obj.nftCollection = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetNftCollectionResponse>
  ): QueryGetNftCollectionResponse {
    const message = {
      ...baseQueryGetNftCollectionResponse,
    } as QueryGetNftCollectionResponse;
    message.nftCollection = [];
    if (object.nftCollection !== undefined && object.nftCollection !== null) {
      for (const e of object.nftCollection) {
        message.nftCollection.push(NftData.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryGetNFTSchemaByContractRequest: object = {
  originContractAddress: "",
};

export const QueryGetNFTSchemaByContractRequest = {
  encode(
    message: QueryGetNFTSchemaByContractRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.originContractAddress !== "") {
      writer.uint32(10).string(message.originContractAddress);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetNFTSchemaByContractRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetNFTSchemaByContractRequest,
    } as QueryGetNFTSchemaByContractRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.originContractAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetNFTSchemaByContractRequest {
    const message = {
      ...baseQueryGetNFTSchemaByContractRequest,
    } as QueryGetNFTSchemaByContractRequest;
    if (
      object.originContractAddress !== undefined &&
      object.originContractAddress !== null
    ) {
      message.originContractAddress = String(object.originContractAddress);
    } else {
      message.originContractAddress = "";
    }
    return message;
  },

  toJSON(message: QueryGetNFTSchemaByContractRequest): unknown {
    const obj: any = {};
    message.originContractAddress !== undefined &&
      (obj.originContractAddress = message.originContractAddress);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetNFTSchemaByContractRequest>
  ): QueryGetNFTSchemaByContractRequest {
    const message = {
      ...baseQueryGetNFTSchemaByContractRequest,
    } as QueryGetNFTSchemaByContractRequest;
    if (
      object.originContractAddress !== undefined &&
      object.originContractAddress !== null
    ) {
      message.originContractAddress = object.originContractAddress;
    } else {
      message.originContractAddress = "";
    }
    return message;
  },
};

const baseQueryGetNFTSchemaByContractResponse: object = {};

export const QueryGetNFTSchemaByContractResponse = {
  encode(
    message: QueryGetNFTSchemaByContractResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.nFTSchemaByContract !== undefined) {
      NFTSchemaByContract.encode(
        message.nFTSchemaByContract,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetNFTSchemaByContractResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetNFTSchemaByContractResponse,
    } as QueryGetNFTSchemaByContractResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nFTSchemaByContract = NFTSchemaByContract.decode(
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

  fromJSON(object: any): QueryGetNFTSchemaByContractResponse {
    const message = {
      ...baseQueryGetNFTSchemaByContractResponse,
    } as QueryGetNFTSchemaByContractResponse;
    if (
      object.nFTSchemaByContract !== undefined &&
      object.nFTSchemaByContract !== null
    ) {
      message.nFTSchemaByContract = NFTSchemaByContract.fromJSON(
        object.nFTSchemaByContract
      );
    } else {
      message.nFTSchemaByContract = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetNFTSchemaByContractResponse): unknown {
    const obj: any = {};
    message.nFTSchemaByContract !== undefined &&
      (obj.nFTSchemaByContract = message.nFTSchemaByContract
        ? NFTSchemaByContract.toJSON(message.nFTSchemaByContract)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetNFTSchemaByContractResponse>
  ): QueryGetNFTSchemaByContractResponse {
    const message = {
      ...baseQueryGetNFTSchemaByContractResponse,
    } as QueryGetNFTSchemaByContractResponse;
    if (
      object.nFTSchemaByContract !== undefined &&
      object.nFTSchemaByContract !== null
    ) {
      message.nFTSchemaByContract = NFTSchemaByContract.fromPartial(
        object.nFTSchemaByContract
      );
    } else {
      message.nFTSchemaByContract = undefined;
    }
    return message;
  },
};

const baseQueryAllNFTSchemaByContractRequest: object = {};

export const QueryAllNFTSchemaByContractRequest = {
  encode(
    message: QueryAllNFTSchemaByContractRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllNFTSchemaByContractRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllNFTSchemaByContractRequest,
    } as QueryAllNFTSchemaByContractRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllNFTSchemaByContractRequest {
    const message = {
      ...baseQueryAllNFTSchemaByContractRequest,
    } as QueryAllNFTSchemaByContractRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllNFTSchemaByContractRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllNFTSchemaByContractRequest>
  ): QueryAllNFTSchemaByContractRequest {
    const message = {
      ...baseQueryAllNFTSchemaByContractRequest,
    } as QueryAllNFTSchemaByContractRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllNFTSchemaByContractResponse: object = {};

export const QueryAllNFTSchemaByContractResponse = {
  encode(
    message: QueryAllNFTSchemaByContractResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.nFTSchemaByContract) {
      NFTSchemaByContract.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllNFTSchemaByContractResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllNFTSchemaByContractResponse,
    } as QueryAllNFTSchemaByContractResponse;
    message.nFTSchemaByContract = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nFTSchemaByContract.push(
            NFTSchemaByContract.decode(reader, reader.uint32())
          );
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllNFTSchemaByContractResponse {
    const message = {
      ...baseQueryAllNFTSchemaByContractResponse,
    } as QueryAllNFTSchemaByContractResponse;
    message.nFTSchemaByContract = [];
    if (
      object.nFTSchemaByContract !== undefined &&
      object.nFTSchemaByContract !== null
    ) {
      for (const e of object.nFTSchemaByContract) {
        message.nFTSchemaByContract.push(NFTSchemaByContract.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllNFTSchemaByContractResponse): unknown {
    const obj: any = {};
    if (message.nFTSchemaByContract) {
      obj.nFTSchemaByContract = message.nFTSchemaByContract.map((e) =>
        e ? NFTSchemaByContract.toJSON(e) : undefined
      );
    } else {
      obj.nFTSchemaByContract = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllNFTSchemaByContractResponse>
  ): QueryAllNFTSchemaByContractResponse {
    const message = {
      ...baseQueryAllNFTSchemaByContractResponse,
    } as QueryAllNFTSchemaByContractResponse;
    message.nFTSchemaByContract = [];
    if (
      object.nFTSchemaByContract !== undefined &&
      object.nFTSchemaByContract !== null
    ) {
      for (const e of object.nFTSchemaByContract) {
        message.nFTSchemaByContract.push(NFTSchemaByContract.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryGetNFTFeeConfigRequest: object = {};

export const QueryGetNFTFeeConfigRequest = {
  encode(
    _: QueryGetNFTFeeConfigRequest,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetNFTFeeConfigRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetNFTFeeConfigRequest,
    } as QueryGetNFTFeeConfigRequest;
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

  fromJSON(_: any): QueryGetNFTFeeConfigRequest {
    const message = {
      ...baseQueryGetNFTFeeConfigRequest,
    } as QueryGetNFTFeeConfigRequest;
    return message;
  },

  toJSON(_: QueryGetNFTFeeConfigRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<QueryGetNFTFeeConfigRequest>
  ): QueryGetNFTFeeConfigRequest {
    const message = {
      ...baseQueryGetNFTFeeConfigRequest,
    } as QueryGetNFTFeeConfigRequest;
    return message;
  },
};

const baseQueryGetNFTFeeConfigResponse: object = {};

export const QueryGetNFTFeeConfigResponse = {
  encode(
    message: QueryGetNFTFeeConfigResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.NFTFeeConfig !== undefined) {
      NFTFeeConfig.encode(
        message.NFTFeeConfig,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetNFTFeeConfigResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetNFTFeeConfigResponse,
    } as QueryGetNFTFeeConfigResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.NFTFeeConfig = NFTFeeConfig.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetNFTFeeConfigResponse {
    const message = {
      ...baseQueryGetNFTFeeConfigResponse,
    } as QueryGetNFTFeeConfigResponse;
    if (object.NFTFeeConfig !== undefined && object.NFTFeeConfig !== null) {
      message.NFTFeeConfig = NFTFeeConfig.fromJSON(object.NFTFeeConfig);
    } else {
      message.NFTFeeConfig = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetNFTFeeConfigResponse): unknown {
    const obj: any = {};
    message.NFTFeeConfig !== undefined &&
      (obj.NFTFeeConfig = message.NFTFeeConfig
        ? NFTFeeConfig.toJSON(message.NFTFeeConfig)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetNFTFeeConfigResponse>
  ): QueryGetNFTFeeConfigResponse {
    const message = {
      ...baseQueryGetNFTFeeConfigResponse,
    } as QueryGetNFTFeeConfigResponse;
    if (object.NFTFeeConfig !== undefined && object.NFTFeeConfig !== null) {
      message.NFTFeeConfig = NFTFeeConfig.fromPartial(object.NFTFeeConfig);
    } else {
      message.NFTFeeConfig = undefined;
    }
    return message;
  },
};

const baseQueryGetNFTFeeBalanceRequest: object = {};

export const QueryGetNFTFeeBalanceRequest = {
  encode(
    _: QueryGetNFTFeeBalanceRequest,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetNFTFeeBalanceRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetNFTFeeBalanceRequest,
    } as QueryGetNFTFeeBalanceRequest;
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

  fromJSON(_: any): QueryGetNFTFeeBalanceRequest {
    const message = {
      ...baseQueryGetNFTFeeBalanceRequest,
    } as QueryGetNFTFeeBalanceRequest;
    return message;
  },

  toJSON(_: QueryGetNFTFeeBalanceRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<QueryGetNFTFeeBalanceRequest>
  ): QueryGetNFTFeeBalanceRequest {
    const message = {
      ...baseQueryGetNFTFeeBalanceRequest,
    } as QueryGetNFTFeeBalanceRequest;
    return message;
  },
};

const baseQueryGetNFTFeeBalanceResponse: object = {};

export const QueryGetNFTFeeBalanceResponse = {
  encode(
    message: QueryGetNFTFeeBalanceResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.NFTFeeBalance !== undefined) {
      NFTFeeBalance.encode(
        message.NFTFeeBalance,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetNFTFeeBalanceResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetNFTFeeBalanceResponse,
    } as QueryGetNFTFeeBalanceResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.NFTFeeBalance = NFTFeeBalance.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetNFTFeeBalanceResponse {
    const message = {
      ...baseQueryGetNFTFeeBalanceResponse,
    } as QueryGetNFTFeeBalanceResponse;
    if (object.NFTFeeBalance !== undefined && object.NFTFeeBalance !== null) {
      message.NFTFeeBalance = NFTFeeBalance.fromJSON(object.NFTFeeBalance);
    } else {
      message.NFTFeeBalance = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetNFTFeeBalanceResponse): unknown {
    const obj: any = {};
    message.NFTFeeBalance !== undefined &&
      (obj.NFTFeeBalance = message.NFTFeeBalance
        ? NFTFeeBalance.toJSON(message.NFTFeeBalance)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetNFTFeeBalanceResponse>
  ): QueryGetNFTFeeBalanceResponse {
    const message = {
      ...baseQueryGetNFTFeeBalanceResponse,
    } as QueryGetNFTFeeBalanceResponse;
    if (object.NFTFeeBalance !== undefined && object.NFTFeeBalance !== null) {
      message.NFTFeeBalance = NFTFeeBalance.fromPartial(object.NFTFeeBalance);
    } else {
      message.NFTFeeBalance = undefined;
    }
    return message;
  },
};

const baseQueryGetMetadataCreatorRequest: object = { nftSchemaCode: "" };

export const QueryGetMetadataCreatorRequest = {
  encode(
    message: QueryGetMetadataCreatorRequest,
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
  ): QueryGetMetadataCreatorRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetMetadataCreatorRequest,
    } as QueryGetMetadataCreatorRequest;
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

  fromJSON(object: any): QueryGetMetadataCreatorRequest {
    const message = {
      ...baseQueryGetMetadataCreatorRequest,
    } as QueryGetMetadataCreatorRequest;
    if (object.nftSchemaCode !== undefined && object.nftSchemaCode !== null) {
      message.nftSchemaCode = String(object.nftSchemaCode);
    } else {
      message.nftSchemaCode = "";
    }
    return message;
  },

  toJSON(message: QueryGetMetadataCreatorRequest): unknown {
    const obj: any = {};
    message.nftSchemaCode !== undefined &&
      (obj.nftSchemaCode = message.nftSchemaCode);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetMetadataCreatorRequest>
  ): QueryGetMetadataCreatorRequest {
    const message = {
      ...baseQueryGetMetadataCreatorRequest,
    } as QueryGetMetadataCreatorRequest;
    if (object.nftSchemaCode !== undefined && object.nftSchemaCode !== null) {
      message.nftSchemaCode = object.nftSchemaCode;
    } else {
      message.nftSchemaCode = "";
    }
    return message;
  },
};

const baseQueryGetMetadataCreatorResponse: object = {};

export const QueryGetMetadataCreatorResponse = {
  encode(
    message: QueryGetMetadataCreatorResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.metadataCreator !== undefined) {
      MetadataCreator.encode(
        message.metadataCreator,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetMetadataCreatorResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetMetadataCreatorResponse,
    } as QueryGetMetadataCreatorResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.metadataCreator = MetadataCreator.decode(
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

  fromJSON(object: any): QueryGetMetadataCreatorResponse {
    const message = {
      ...baseQueryGetMetadataCreatorResponse,
    } as QueryGetMetadataCreatorResponse;
    if (
      object.metadataCreator !== undefined &&
      object.metadataCreator !== null
    ) {
      message.metadataCreator = MetadataCreator.fromJSON(
        object.metadataCreator
      );
    } else {
      message.metadataCreator = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetMetadataCreatorResponse): unknown {
    const obj: any = {};
    message.metadataCreator !== undefined &&
      (obj.metadataCreator = message.metadataCreator
        ? MetadataCreator.toJSON(message.metadataCreator)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetMetadataCreatorResponse>
  ): QueryGetMetadataCreatorResponse {
    const message = {
      ...baseQueryGetMetadataCreatorResponse,
    } as QueryGetMetadataCreatorResponse;
    if (
      object.metadataCreator !== undefined &&
      object.metadataCreator !== null
    ) {
      message.metadataCreator = MetadataCreator.fromPartial(
        object.metadataCreator
      );
    } else {
      message.metadataCreator = undefined;
    }
    return message;
  },
};

const baseQueryAllMetadataCreatorRequest: object = {};

export const QueryAllMetadataCreatorRequest = {
  encode(
    message: QueryAllMetadataCreatorRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllMetadataCreatorRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllMetadataCreatorRequest,
    } as QueryAllMetadataCreatorRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllMetadataCreatorRequest {
    const message = {
      ...baseQueryAllMetadataCreatorRequest,
    } as QueryAllMetadataCreatorRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllMetadataCreatorRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllMetadataCreatorRequest>
  ): QueryAllMetadataCreatorRequest {
    const message = {
      ...baseQueryAllMetadataCreatorRequest,
    } as QueryAllMetadataCreatorRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllMetadataCreatorResponse: object = {};

export const QueryAllMetadataCreatorResponse = {
  encode(
    message: QueryAllMetadataCreatorResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.metadataCreator) {
      MetadataCreator.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllMetadataCreatorResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllMetadataCreatorResponse,
    } as QueryAllMetadataCreatorResponse;
    message.metadataCreator = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.metadataCreator.push(
            MetadataCreator.decode(reader, reader.uint32())
          );
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllMetadataCreatorResponse {
    const message = {
      ...baseQueryAllMetadataCreatorResponse,
    } as QueryAllMetadataCreatorResponse;
    message.metadataCreator = [];
    if (
      object.metadataCreator !== undefined &&
      object.metadataCreator !== null
    ) {
      for (const e of object.metadataCreator) {
        message.metadataCreator.push(MetadataCreator.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllMetadataCreatorResponse): unknown {
    const obj: any = {};
    if (message.metadataCreator) {
      obj.metadataCreator = message.metadataCreator.map((e) =>
        e ? MetadataCreator.toJSON(e) : undefined
      );
    } else {
      obj.metadataCreator = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllMetadataCreatorResponse>
  ): QueryAllMetadataCreatorResponse {
    const message = {
      ...baseQueryAllMetadataCreatorResponse,
    } as QueryAllMetadataCreatorResponse;
    message.metadataCreator = [];
    if (
      object.metadataCreator !== undefined &&
      object.metadataCreator !== null
    ) {
      for (const e of object.metadataCreator) {
        message.metadataCreator.push(MetadataCreator.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Queries a NFTSchema by index. */
  NFTSchema(
    request: QueryGetNFTSchemaRequest
  ): Promise<QueryGetNFTSchemaResponse>;
  /** Queries a list of NFTSchema items. */
  NFTSchemaAll(
    request: QueryAllNFTSchemaRequest
  ): Promise<QueryAllNFTSchemaResponse>;
  /** Queries a NftData by index. */
  NftData(request: QueryGetNftDataRequest): Promise<QueryGetNftDataResponse>;
  /** Queries a list of NftData items. */
  NftDataAll(request: QueryAllNftDataRequest): Promise<QueryAllNftDataResponse>;
  /** Queries a ActionByRefId by index. */
  ActionByRefId(
    request: QueryGetActionByRefIdRequest
  ): Promise<QueryGetActionByRefIdResponse>;
  /** Queries a list of ActionByRefId items. */
  ActionByRefIdAll(
    request: QueryAllActionByRefIdRequest
  ): Promise<QueryAllActionByRefIdResponse>;
  /** Queries a Organization by index. */
  Organization(
    request: QueryGetOrganizationRequest
  ): Promise<QueryGetOrganizationResponse>;
  /** Queries a list of Organization items. */
  OrganizationAll(
    request: QueryAllOrganizationRequest
  ): Promise<QueryAllOrganizationResponse>;
  /** Queries a NftCollection by index. */
  NftCollection(
    request: QueryGetNftCollectionRequest
  ): Promise<QueryGetNftCollectionResponse>;
  /** Queries a NFTSchemaByContract by index. */
  NFTSchemaByContract(
    request: QueryGetNFTSchemaByContractRequest
  ): Promise<QueryGetNFTSchemaByContractResponse>;
  /** Queries a list of NFTSchemaByContract items. */
  NFTSchemaByContractAll(
    request: QueryAllNFTSchemaByContractRequest
  ): Promise<QueryAllNFTSchemaByContractResponse>;
  /** Queries a NFTFeeConfig by index. */
  NFTFeeConfig(
    request: QueryGetNFTFeeConfigRequest
  ): Promise<QueryGetNFTFeeConfigResponse>;
  /** Queries a NFTFeeBalance by index. */
  NFTFeeBalance(
    request: QueryGetNFTFeeBalanceRequest
  ): Promise<QueryGetNFTFeeBalanceResponse>;
  /** Queries a MetadataCreator by index. */
  MetadataCreator(
    request: QueryGetMetadataCreatorRequest
  ): Promise<QueryGetMetadataCreatorResponse>;
  /** Queries a list of MetadataCreator items. */
  MetadataCreatorAll(
    request: QueryAllMetadataCreatorRequest
  ): Promise<QueryAllMetadataCreatorResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "thesixnetwork.sixnft.nftmngr.Query",
      "Params",
      data
    );
    return promise.then((data) => QueryParamsResponse.decode(new Reader(data)));
  }

  NFTSchema(
    request: QueryGetNFTSchemaRequest
  ): Promise<QueryGetNFTSchemaResponse> {
    const data = QueryGetNFTSchemaRequest.encode(request).finish();
    const promise = this.rpc.request(
      "thesixnetwork.sixnft.nftmngr.Query",
      "NFTSchema",
      data
    );
    return promise.then((data) =>
      QueryGetNFTSchemaResponse.decode(new Reader(data))
    );
  }

  NFTSchemaAll(
    request: QueryAllNFTSchemaRequest
  ): Promise<QueryAllNFTSchemaResponse> {
    const data = QueryAllNFTSchemaRequest.encode(request).finish();
    const promise = this.rpc.request(
      "thesixnetwork.sixnft.nftmngr.Query",
      "NFTSchemaAll",
      data
    );
    return promise.then((data) =>
      QueryAllNFTSchemaResponse.decode(new Reader(data))
    );
  }

  NftData(request: QueryGetNftDataRequest): Promise<QueryGetNftDataResponse> {
    const data = QueryGetNftDataRequest.encode(request).finish();
    const promise = this.rpc.request(
      "thesixnetwork.sixnft.nftmngr.Query",
      "NftData",
      data
    );
    return promise.then((data) =>
      QueryGetNftDataResponse.decode(new Reader(data))
    );
  }

  NftDataAll(
    request: QueryAllNftDataRequest
  ): Promise<QueryAllNftDataResponse> {
    const data = QueryAllNftDataRequest.encode(request).finish();
    const promise = this.rpc.request(
      "thesixnetwork.sixnft.nftmngr.Query",
      "NftDataAll",
      data
    );
    return promise.then((data) =>
      QueryAllNftDataResponse.decode(new Reader(data))
    );
  }

  ActionByRefId(
    request: QueryGetActionByRefIdRequest
  ): Promise<QueryGetActionByRefIdResponse> {
    const data = QueryGetActionByRefIdRequest.encode(request).finish();
    const promise = this.rpc.request(
      "thesixnetwork.sixnft.nftmngr.Query",
      "ActionByRefId",
      data
    );
    return promise.then((data) =>
      QueryGetActionByRefIdResponse.decode(new Reader(data))
    );
  }

  ActionByRefIdAll(
    request: QueryAllActionByRefIdRequest
  ): Promise<QueryAllActionByRefIdResponse> {
    const data = QueryAllActionByRefIdRequest.encode(request).finish();
    const promise = this.rpc.request(
      "thesixnetwork.sixnft.nftmngr.Query",
      "ActionByRefIdAll",
      data
    );
    return promise.then((data) =>
      QueryAllActionByRefIdResponse.decode(new Reader(data))
    );
  }

  Organization(
    request: QueryGetOrganizationRequest
  ): Promise<QueryGetOrganizationResponse> {
    const data = QueryGetOrganizationRequest.encode(request).finish();
    const promise = this.rpc.request(
      "thesixnetwork.sixnft.nftmngr.Query",
      "Organization",
      data
    );
    return promise.then((data) =>
      QueryGetOrganizationResponse.decode(new Reader(data))
    );
  }

  OrganizationAll(
    request: QueryAllOrganizationRequest
  ): Promise<QueryAllOrganizationResponse> {
    const data = QueryAllOrganizationRequest.encode(request).finish();
    const promise = this.rpc.request(
      "thesixnetwork.sixnft.nftmngr.Query",
      "OrganizationAll",
      data
    );
    return promise.then((data) =>
      QueryAllOrganizationResponse.decode(new Reader(data))
    );
  }

  NftCollection(
    request: QueryGetNftCollectionRequest
  ): Promise<QueryGetNftCollectionResponse> {
    const data = QueryGetNftCollectionRequest.encode(request).finish();
    const promise = this.rpc.request(
      "thesixnetwork.sixnft.nftmngr.Query",
      "NftCollection",
      data
    );
    return promise.then((data) =>
      QueryGetNftCollectionResponse.decode(new Reader(data))
    );
  }

  NFTSchemaByContract(
    request: QueryGetNFTSchemaByContractRequest
  ): Promise<QueryGetNFTSchemaByContractResponse> {
    const data = QueryGetNFTSchemaByContractRequest.encode(request).finish();
    const promise = this.rpc.request(
      "thesixnetwork.sixnft.nftmngr.Query",
      "NFTSchemaByContract",
      data
    );
    return promise.then((data) =>
      QueryGetNFTSchemaByContractResponse.decode(new Reader(data))
    );
  }

  NFTSchemaByContractAll(
    request: QueryAllNFTSchemaByContractRequest
  ): Promise<QueryAllNFTSchemaByContractResponse> {
    const data = QueryAllNFTSchemaByContractRequest.encode(request).finish();
    const promise = this.rpc.request(
      "thesixnetwork.sixnft.nftmngr.Query",
      "NFTSchemaByContractAll",
      data
    );
    return promise.then((data) =>
      QueryAllNFTSchemaByContractResponse.decode(new Reader(data))
    );
  }

  NFTFeeConfig(
    request: QueryGetNFTFeeConfigRequest
  ): Promise<QueryGetNFTFeeConfigResponse> {
    const data = QueryGetNFTFeeConfigRequest.encode(request).finish();
    const promise = this.rpc.request(
      "thesixnetwork.sixnft.nftmngr.Query",
      "NFTFeeConfig",
      data
    );
    return promise.then((data) =>
      QueryGetNFTFeeConfigResponse.decode(new Reader(data))
    );
  }

  NFTFeeBalance(
    request: QueryGetNFTFeeBalanceRequest
  ): Promise<QueryGetNFTFeeBalanceResponse> {
    const data = QueryGetNFTFeeBalanceRequest.encode(request).finish();
    const promise = this.rpc.request(
      "thesixnetwork.sixnft.nftmngr.Query",
      "NFTFeeBalance",
      data
    );
    return promise.then((data) =>
      QueryGetNFTFeeBalanceResponse.decode(new Reader(data))
    );
  }

  MetadataCreator(
    request: QueryGetMetadataCreatorRequest
  ): Promise<QueryGetMetadataCreatorResponse> {
    const data = QueryGetMetadataCreatorRequest.encode(request).finish();
    const promise = this.rpc.request(
      "thesixnetwork.sixnft.nftmngr.Query",
      "MetadataCreator",
      data
    );
    return promise.then((data) =>
      QueryGetMetadataCreatorResponse.decode(new Reader(data))
    );
  }

  MetadataCreatorAll(
    request: QueryAllMetadataCreatorRequest
  ): Promise<QueryAllMetadataCreatorResponse> {
    const data = QueryAllMetadataCreatorRequest.encode(request).finish();
    const promise = this.rpc.request(
      "thesixnetwork.sixnft.nftmngr.Query",
      "MetadataCreatorAll",
      data
    );
    return promise.then((data) =>
      QueryAllMetadataCreatorResponse.decode(new Reader(data))
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
