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
import { ActionExecutor } from "../nftmngr/action_executor";
import { SchemaAttribute } from "../nftmngr/schema_attribute";
import { ActionOfSchema } from "../nftmngr/action_of_schema";
import { ExecutorOfSchema } from "../nftmngr/executor_of_schema";

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
  withGlobal: boolean;
}

export interface QueryGetNftDataResponse {
  nftData: NftData | undefined;
}

export interface QueryAllNftDataRequest {
  withGlobal: boolean;
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

export interface QueryGetActionExecutorRequest {
  nftSchemaCode: string;
  executorAddress: string;
}

export interface QueryGetActionExecutorResponse {
  actionExecutor: ActionExecutor | undefined;
}

export interface QueryAllActionExecutorRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllActionExecutorResponse {
  actionExecutor: ActionExecutor[];
  pagination: PageResponse | undefined;
}

export interface QueryGetSchemaAttributeRequest {
  nftSchemaCode: string;
  name: string;
}

export interface QueryGetSchemaAttributeResponse {
  schemaAttribute: SchemaAttribute | undefined;
}

export interface QueryAllSchemaAttributeRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllSchemaAttributeResponse {
  schemaAttribute: SchemaAttribute[];
  pagination: PageResponse | undefined;
}

export interface QueryListAttributeBySchemaRequest {
  nftSchemaCode: string;
}

export interface QueryListAttributeBySchemaResponse {
  schemaAttribute: SchemaAttribute[];
}

export interface QueryGetActionOfSchemaRequest {
  nftSchemaCode: string;
  name: string;
}

export interface QueryGetActionOfSchemaResponse {
  actionOfSchema: ActionOfSchema | undefined;
}

export interface QueryAllActionOfSchemaRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllActionOfSchemaResponse {
  actionOfSchema: ActionOfSchema[];
  pagination: PageResponse | undefined;
}

export interface QueryGetExecutorOfSchemaRequest {
  nftSchemaCode: string;
}

export interface QueryGetExecutorOfSchemaResponse {
  executorOfSchema: ExecutorOfSchema | undefined;
}

export interface QueryAllExecutorOfSchemaRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllExecutorOfSchemaResponse {
  executorOfSchema: ExecutorOfSchema[];
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

const baseQueryGetNftDataRequest: object = {
  nftSchemaCode: "",
  tokenId: "",
  withGlobal: false,
};

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
    if (message.withGlobal === true) {
      writer.uint32(24).bool(message.withGlobal);
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
        case 3:
          message.withGlobal = reader.bool();
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
    if (object.withGlobal !== undefined && object.withGlobal !== null) {
      message.withGlobal = Boolean(object.withGlobal);
    } else {
      message.withGlobal = false;
    }
    return message;
  },

  toJSON(message: QueryGetNftDataRequest): unknown {
    const obj: any = {};
    message.nftSchemaCode !== undefined &&
      (obj.nftSchemaCode = message.nftSchemaCode);
    message.tokenId !== undefined && (obj.tokenId = message.tokenId);
    message.withGlobal !== undefined && (obj.withGlobal = message.withGlobal);
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
    if (object.withGlobal !== undefined && object.withGlobal !== null) {
      message.withGlobal = object.withGlobal;
    } else {
      message.withGlobal = false;
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

const baseQueryAllNftDataRequest: object = { withGlobal: false };

export const QueryAllNftDataRequest = {
  encode(
    message: QueryAllNftDataRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.withGlobal === true) {
      writer.uint32(8).bool(message.withGlobal);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
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
          message.withGlobal = reader.bool();
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

  fromJSON(object: any): QueryAllNftDataRequest {
    const message = { ...baseQueryAllNftDataRequest } as QueryAllNftDataRequest;
    if (object.withGlobal !== undefined && object.withGlobal !== null) {
      message.withGlobal = Boolean(object.withGlobal);
    } else {
      message.withGlobal = false;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllNftDataRequest): unknown {
    const obj: any = {};
    message.withGlobal !== undefined && (obj.withGlobal = message.withGlobal);
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
    if (object.withGlobal !== undefined && object.withGlobal !== null) {
      message.withGlobal = object.withGlobal;
    } else {
      message.withGlobal = false;
    }
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

const baseQueryGetActionExecutorRequest: object = {
  nftSchemaCode: "",
  executorAddress: "",
};

export const QueryGetActionExecutorRequest = {
  encode(
    message: QueryGetActionExecutorRequest,
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
  ): QueryGetActionExecutorRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetActionExecutorRequest,
    } as QueryGetActionExecutorRequest;
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

  fromJSON(object: any): QueryGetActionExecutorRequest {
    const message = {
      ...baseQueryGetActionExecutorRequest,
    } as QueryGetActionExecutorRequest;
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

  toJSON(message: QueryGetActionExecutorRequest): unknown {
    const obj: any = {};
    message.nftSchemaCode !== undefined &&
      (obj.nftSchemaCode = message.nftSchemaCode);
    message.executorAddress !== undefined &&
      (obj.executorAddress = message.executorAddress);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetActionExecutorRequest>
  ): QueryGetActionExecutorRequest {
    const message = {
      ...baseQueryGetActionExecutorRequest,
    } as QueryGetActionExecutorRequest;
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

const baseQueryGetActionExecutorResponse: object = {};

export const QueryGetActionExecutorResponse = {
  encode(
    message: QueryGetActionExecutorResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.actionExecutor !== undefined) {
      ActionExecutor.encode(
        message.actionExecutor,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetActionExecutorResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetActionExecutorResponse,
    } as QueryGetActionExecutorResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.actionExecutor = ActionExecutor.decode(
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

  fromJSON(object: any): QueryGetActionExecutorResponse {
    const message = {
      ...baseQueryGetActionExecutorResponse,
    } as QueryGetActionExecutorResponse;
    if (object.actionExecutor !== undefined && object.actionExecutor !== null) {
      message.actionExecutor = ActionExecutor.fromJSON(object.actionExecutor);
    } else {
      message.actionExecutor = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetActionExecutorResponse): unknown {
    const obj: any = {};
    message.actionExecutor !== undefined &&
      (obj.actionExecutor = message.actionExecutor
        ? ActionExecutor.toJSON(message.actionExecutor)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetActionExecutorResponse>
  ): QueryGetActionExecutorResponse {
    const message = {
      ...baseQueryGetActionExecutorResponse,
    } as QueryGetActionExecutorResponse;
    if (object.actionExecutor !== undefined && object.actionExecutor !== null) {
      message.actionExecutor = ActionExecutor.fromPartial(
        object.actionExecutor
      );
    } else {
      message.actionExecutor = undefined;
    }
    return message;
  },
};

const baseQueryAllActionExecutorRequest: object = {};

export const QueryAllActionExecutorRequest = {
  encode(
    message: QueryAllActionExecutorRequest,
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
  ): QueryAllActionExecutorRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllActionExecutorRequest,
    } as QueryAllActionExecutorRequest;
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

  fromJSON(object: any): QueryAllActionExecutorRequest {
    const message = {
      ...baseQueryAllActionExecutorRequest,
    } as QueryAllActionExecutorRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllActionExecutorRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllActionExecutorRequest>
  ): QueryAllActionExecutorRequest {
    const message = {
      ...baseQueryAllActionExecutorRequest,
    } as QueryAllActionExecutorRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllActionExecutorResponse: object = {};

export const QueryAllActionExecutorResponse = {
  encode(
    message: QueryAllActionExecutorResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.actionExecutor) {
      ActionExecutor.encode(v!, writer.uint32(10).fork()).ldelim();
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
  ): QueryAllActionExecutorResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllActionExecutorResponse,
    } as QueryAllActionExecutorResponse;
    message.actionExecutor = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.actionExecutor.push(
            ActionExecutor.decode(reader, reader.uint32())
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

  fromJSON(object: any): QueryAllActionExecutorResponse {
    const message = {
      ...baseQueryAllActionExecutorResponse,
    } as QueryAllActionExecutorResponse;
    message.actionExecutor = [];
    if (object.actionExecutor !== undefined && object.actionExecutor !== null) {
      for (const e of object.actionExecutor) {
        message.actionExecutor.push(ActionExecutor.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllActionExecutorResponse): unknown {
    const obj: any = {};
    if (message.actionExecutor) {
      obj.actionExecutor = message.actionExecutor.map((e) =>
        e ? ActionExecutor.toJSON(e) : undefined
      );
    } else {
      obj.actionExecutor = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllActionExecutorResponse>
  ): QueryAllActionExecutorResponse {
    const message = {
      ...baseQueryAllActionExecutorResponse,
    } as QueryAllActionExecutorResponse;
    message.actionExecutor = [];
    if (object.actionExecutor !== undefined && object.actionExecutor !== null) {
      for (const e of object.actionExecutor) {
        message.actionExecutor.push(ActionExecutor.fromPartial(e));
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

const baseQueryGetSchemaAttributeRequest: object = {
  nftSchemaCode: "",
  name: "",
};

export const QueryGetSchemaAttributeRequest = {
  encode(
    message: QueryGetSchemaAttributeRequest,
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
  ): QueryGetSchemaAttributeRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetSchemaAttributeRequest,
    } as QueryGetSchemaAttributeRequest;
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

  fromJSON(object: any): QueryGetSchemaAttributeRequest {
    const message = {
      ...baseQueryGetSchemaAttributeRequest,
    } as QueryGetSchemaAttributeRequest;
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

  toJSON(message: QueryGetSchemaAttributeRequest): unknown {
    const obj: any = {};
    message.nftSchemaCode !== undefined &&
      (obj.nftSchemaCode = message.nftSchemaCode);
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetSchemaAttributeRequest>
  ): QueryGetSchemaAttributeRequest {
    const message = {
      ...baseQueryGetSchemaAttributeRequest,
    } as QueryGetSchemaAttributeRequest;
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

const baseQueryGetSchemaAttributeResponse: object = {};

export const QueryGetSchemaAttributeResponse = {
  encode(
    message: QueryGetSchemaAttributeResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.schemaAttribute !== undefined) {
      SchemaAttribute.encode(
        message.schemaAttribute,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetSchemaAttributeResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetSchemaAttributeResponse,
    } as QueryGetSchemaAttributeResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.schemaAttribute = SchemaAttribute.decode(
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

  fromJSON(object: any): QueryGetSchemaAttributeResponse {
    const message = {
      ...baseQueryGetSchemaAttributeResponse,
    } as QueryGetSchemaAttributeResponse;
    if (
      object.schemaAttribute !== undefined &&
      object.schemaAttribute !== null
    ) {
      message.schemaAttribute = SchemaAttribute.fromJSON(
        object.schemaAttribute
      );
    } else {
      message.schemaAttribute = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetSchemaAttributeResponse): unknown {
    const obj: any = {};
    message.schemaAttribute !== undefined &&
      (obj.schemaAttribute = message.schemaAttribute
        ? SchemaAttribute.toJSON(message.schemaAttribute)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetSchemaAttributeResponse>
  ): QueryGetSchemaAttributeResponse {
    const message = {
      ...baseQueryGetSchemaAttributeResponse,
    } as QueryGetSchemaAttributeResponse;
    if (
      object.schemaAttribute !== undefined &&
      object.schemaAttribute !== null
    ) {
      message.schemaAttribute = SchemaAttribute.fromPartial(
        object.schemaAttribute
      );
    } else {
      message.schemaAttribute = undefined;
    }
    return message;
  },
};

const baseQueryAllSchemaAttributeRequest: object = {};

export const QueryAllSchemaAttributeRequest = {
  encode(
    message: QueryAllSchemaAttributeRequest,
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
  ): QueryAllSchemaAttributeRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllSchemaAttributeRequest,
    } as QueryAllSchemaAttributeRequest;
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

  fromJSON(object: any): QueryAllSchemaAttributeRequest {
    const message = {
      ...baseQueryAllSchemaAttributeRequest,
    } as QueryAllSchemaAttributeRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllSchemaAttributeRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllSchemaAttributeRequest>
  ): QueryAllSchemaAttributeRequest {
    const message = {
      ...baseQueryAllSchemaAttributeRequest,
    } as QueryAllSchemaAttributeRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllSchemaAttributeResponse: object = {};

export const QueryAllSchemaAttributeResponse = {
  encode(
    message: QueryAllSchemaAttributeResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.schemaAttribute) {
      SchemaAttribute.encode(v!, writer.uint32(10).fork()).ldelim();
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
  ): QueryAllSchemaAttributeResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllSchemaAttributeResponse,
    } as QueryAllSchemaAttributeResponse;
    message.schemaAttribute = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.schemaAttribute.push(
            SchemaAttribute.decode(reader, reader.uint32())
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

  fromJSON(object: any): QueryAllSchemaAttributeResponse {
    const message = {
      ...baseQueryAllSchemaAttributeResponse,
    } as QueryAllSchemaAttributeResponse;
    message.schemaAttribute = [];
    if (
      object.schemaAttribute !== undefined &&
      object.schemaAttribute !== null
    ) {
      for (const e of object.schemaAttribute) {
        message.schemaAttribute.push(SchemaAttribute.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllSchemaAttributeResponse): unknown {
    const obj: any = {};
    if (message.schemaAttribute) {
      obj.schemaAttribute = message.schemaAttribute.map((e) =>
        e ? SchemaAttribute.toJSON(e) : undefined
      );
    } else {
      obj.schemaAttribute = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllSchemaAttributeResponse>
  ): QueryAllSchemaAttributeResponse {
    const message = {
      ...baseQueryAllSchemaAttributeResponse,
    } as QueryAllSchemaAttributeResponse;
    message.schemaAttribute = [];
    if (
      object.schemaAttribute !== undefined &&
      object.schemaAttribute !== null
    ) {
      for (const e of object.schemaAttribute) {
        message.schemaAttribute.push(SchemaAttribute.fromPartial(e));
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

const baseQueryListAttributeBySchemaRequest: object = { nftSchemaCode: "" };

export const QueryListAttributeBySchemaRequest = {
  encode(
    message: QueryListAttributeBySchemaRequest,
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
  ): QueryListAttributeBySchemaRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryListAttributeBySchemaRequest,
    } as QueryListAttributeBySchemaRequest;
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

  fromJSON(object: any): QueryListAttributeBySchemaRequest {
    const message = {
      ...baseQueryListAttributeBySchemaRequest,
    } as QueryListAttributeBySchemaRequest;
    if (object.nftSchemaCode !== undefined && object.nftSchemaCode !== null) {
      message.nftSchemaCode = String(object.nftSchemaCode);
    } else {
      message.nftSchemaCode = "";
    }
    return message;
  },

  toJSON(message: QueryListAttributeBySchemaRequest): unknown {
    const obj: any = {};
    message.nftSchemaCode !== undefined &&
      (obj.nftSchemaCode = message.nftSchemaCode);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryListAttributeBySchemaRequest>
  ): QueryListAttributeBySchemaRequest {
    const message = {
      ...baseQueryListAttributeBySchemaRequest,
    } as QueryListAttributeBySchemaRequest;
    if (object.nftSchemaCode !== undefined && object.nftSchemaCode !== null) {
      message.nftSchemaCode = object.nftSchemaCode;
    } else {
      message.nftSchemaCode = "";
    }
    return message;
  },
};

const baseQueryListAttributeBySchemaResponse: object = {};

export const QueryListAttributeBySchemaResponse = {
  encode(
    message: QueryListAttributeBySchemaResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.schemaAttribute) {
      SchemaAttribute.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryListAttributeBySchemaResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryListAttributeBySchemaResponse,
    } as QueryListAttributeBySchemaResponse;
    message.schemaAttribute = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.schemaAttribute.push(
            SchemaAttribute.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryListAttributeBySchemaResponse {
    const message = {
      ...baseQueryListAttributeBySchemaResponse,
    } as QueryListAttributeBySchemaResponse;
    message.schemaAttribute = [];
    if (
      object.schemaAttribute !== undefined &&
      object.schemaAttribute !== null
    ) {
      for (const e of object.schemaAttribute) {
        message.schemaAttribute.push(SchemaAttribute.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: QueryListAttributeBySchemaResponse): unknown {
    const obj: any = {};
    if (message.schemaAttribute) {
      obj.schemaAttribute = message.schemaAttribute.map((e) =>
        e ? SchemaAttribute.toJSON(e) : undefined
      );
    } else {
      obj.schemaAttribute = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryListAttributeBySchemaResponse>
  ): QueryListAttributeBySchemaResponse {
    const message = {
      ...baseQueryListAttributeBySchemaResponse,
    } as QueryListAttributeBySchemaResponse;
    message.schemaAttribute = [];
    if (
      object.schemaAttribute !== undefined &&
      object.schemaAttribute !== null
    ) {
      for (const e of object.schemaAttribute) {
        message.schemaAttribute.push(SchemaAttribute.fromPartial(e));
      }
    }
    return message;
  },
};

const baseQueryGetActionOfSchemaRequest: object = {
  nftSchemaCode: "",
  name: "",
};

export const QueryGetActionOfSchemaRequest = {
  encode(
    message: QueryGetActionOfSchemaRequest,
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
  ): QueryGetActionOfSchemaRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetActionOfSchemaRequest,
    } as QueryGetActionOfSchemaRequest;
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

  fromJSON(object: any): QueryGetActionOfSchemaRequest {
    const message = {
      ...baseQueryGetActionOfSchemaRequest,
    } as QueryGetActionOfSchemaRequest;
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

  toJSON(message: QueryGetActionOfSchemaRequest): unknown {
    const obj: any = {};
    message.nftSchemaCode !== undefined &&
      (obj.nftSchemaCode = message.nftSchemaCode);
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetActionOfSchemaRequest>
  ): QueryGetActionOfSchemaRequest {
    const message = {
      ...baseQueryGetActionOfSchemaRequest,
    } as QueryGetActionOfSchemaRequest;
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

const baseQueryGetActionOfSchemaResponse: object = {};

export const QueryGetActionOfSchemaResponse = {
  encode(
    message: QueryGetActionOfSchemaResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.actionOfSchema !== undefined) {
      ActionOfSchema.encode(
        message.actionOfSchema,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetActionOfSchemaResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetActionOfSchemaResponse,
    } as QueryGetActionOfSchemaResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.actionOfSchema = ActionOfSchema.decode(
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

  fromJSON(object: any): QueryGetActionOfSchemaResponse {
    const message = {
      ...baseQueryGetActionOfSchemaResponse,
    } as QueryGetActionOfSchemaResponse;
    if (object.actionOfSchema !== undefined && object.actionOfSchema !== null) {
      message.actionOfSchema = ActionOfSchema.fromJSON(object.actionOfSchema);
    } else {
      message.actionOfSchema = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetActionOfSchemaResponse): unknown {
    const obj: any = {};
    message.actionOfSchema !== undefined &&
      (obj.actionOfSchema = message.actionOfSchema
        ? ActionOfSchema.toJSON(message.actionOfSchema)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetActionOfSchemaResponse>
  ): QueryGetActionOfSchemaResponse {
    const message = {
      ...baseQueryGetActionOfSchemaResponse,
    } as QueryGetActionOfSchemaResponse;
    if (object.actionOfSchema !== undefined && object.actionOfSchema !== null) {
      message.actionOfSchema = ActionOfSchema.fromPartial(
        object.actionOfSchema
      );
    } else {
      message.actionOfSchema = undefined;
    }
    return message;
  },
};

const baseQueryAllActionOfSchemaRequest: object = {};

export const QueryAllActionOfSchemaRequest = {
  encode(
    message: QueryAllActionOfSchemaRequest,
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
  ): QueryAllActionOfSchemaRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllActionOfSchemaRequest,
    } as QueryAllActionOfSchemaRequest;
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

  fromJSON(object: any): QueryAllActionOfSchemaRequest {
    const message = {
      ...baseQueryAllActionOfSchemaRequest,
    } as QueryAllActionOfSchemaRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllActionOfSchemaRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllActionOfSchemaRequest>
  ): QueryAllActionOfSchemaRequest {
    const message = {
      ...baseQueryAllActionOfSchemaRequest,
    } as QueryAllActionOfSchemaRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllActionOfSchemaResponse: object = {};

export const QueryAllActionOfSchemaResponse = {
  encode(
    message: QueryAllActionOfSchemaResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.actionOfSchema) {
      ActionOfSchema.encode(v!, writer.uint32(10).fork()).ldelim();
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
  ): QueryAllActionOfSchemaResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllActionOfSchemaResponse,
    } as QueryAllActionOfSchemaResponse;
    message.actionOfSchema = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.actionOfSchema.push(
            ActionOfSchema.decode(reader, reader.uint32())
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

  fromJSON(object: any): QueryAllActionOfSchemaResponse {
    const message = {
      ...baseQueryAllActionOfSchemaResponse,
    } as QueryAllActionOfSchemaResponse;
    message.actionOfSchema = [];
    if (object.actionOfSchema !== undefined && object.actionOfSchema !== null) {
      for (const e of object.actionOfSchema) {
        message.actionOfSchema.push(ActionOfSchema.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllActionOfSchemaResponse): unknown {
    const obj: any = {};
    if (message.actionOfSchema) {
      obj.actionOfSchema = message.actionOfSchema.map((e) =>
        e ? ActionOfSchema.toJSON(e) : undefined
      );
    } else {
      obj.actionOfSchema = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllActionOfSchemaResponse>
  ): QueryAllActionOfSchemaResponse {
    const message = {
      ...baseQueryAllActionOfSchemaResponse,
    } as QueryAllActionOfSchemaResponse;
    message.actionOfSchema = [];
    if (object.actionOfSchema !== undefined && object.actionOfSchema !== null) {
      for (const e of object.actionOfSchema) {
        message.actionOfSchema.push(ActionOfSchema.fromPartial(e));
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

const baseQueryGetExecutorOfSchemaRequest: object = { nftSchemaCode: "" };

export const QueryGetExecutorOfSchemaRequest = {
  encode(
    message: QueryGetExecutorOfSchemaRequest,
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
  ): QueryGetExecutorOfSchemaRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetExecutorOfSchemaRequest,
    } as QueryGetExecutorOfSchemaRequest;
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

  fromJSON(object: any): QueryGetExecutorOfSchemaRequest {
    const message = {
      ...baseQueryGetExecutorOfSchemaRequest,
    } as QueryGetExecutorOfSchemaRequest;
    if (object.nftSchemaCode !== undefined && object.nftSchemaCode !== null) {
      message.nftSchemaCode = String(object.nftSchemaCode);
    } else {
      message.nftSchemaCode = "";
    }
    return message;
  },

  toJSON(message: QueryGetExecutorOfSchemaRequest): unknown {
    const obj: any = {};
    message.nftSchemaCode !== undefined &&
      (obj.nftSchemaCode = message.nftSchemaCode);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetExecutorOfSchemaRequest>
  ): QueryGetExecutorOfSchemaRequest {
    const message = {
      ...baseQueryGetExecutorOfSchemaRequest,
    } as QueryGetExecutorOfSchemaRequest;
    if (object.nftSchemaCode !== undefined && object.nftSchemaCode !== null) {
      message.nftSchemaCode = object.nftSchemaCode;
    } else {
      message.nftSchemaCode = "";
    }
    return message;
  },
};

const baseQueryGetExecutorOfSchemaResponse: object = {};

export const QueryGetExecutorOfSchemaResponse = {
  encode(
    message: QueryGetExecutorOfSchemaResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.executorOfSchema !== undefined) {
      ExecutorOfSchema.encode(
        message.executorOfSchema,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetExecutorOfSchemaResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetExecutorOfSchemaResponse,
    } as QueryGetExecutorOfSchemaResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.executorOfSchema = ExecutorOfSchema.decode(
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

  fromJSON(object: any): QueryGetExecutorOfSchemaResponse {
    const message = {
      ...baseQueryGetExecutorOfSchemaResponse,
    } as QueryGetExecutorOfSchemaResponse;
    if (
      object.executorOfSchema !== undefined &&
      object.executorOfSchema !== null
    ) {
      message.executorOfSchema = ExecutorOfSchema.fromJSON(
        object.executorOfSchema
      );
    } else {
      message.executorOfSchema = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetExecutorOfSchemaResponse): unknown {
    const obj: any = {};
    message.executorOfSchema !== undefined &&
      (obj.executorOfSchema = message.executorOfSchema
        ? ExecutorOfSchema.toJSON(message.executorOfSchema)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetExecutorOfSchemaResponse>
  ): QueryGetExecutorOfSchemaResponse {
    const message = {
      ...baseQueryGetExecutorOfSchemaResponse,
    } as QueryGetExecutorOfSchemaResponse;
    if (
      object.executorOfSchema !== undefined &&
      object.executorOfSchema !== null
    ) {
      message.executorOfSchema = ExecutorOfSchema.fromPartial(
        object.executorOfSchema
      );
    } else {
      message.executorOfSchema = undefined;
    }
    return message;
  },
};

const baseQueryAllExecutorOfSchemaRequest: object = {};

export const QueryAllExecutorOfSchemaRequest = {
  encode(
    message: QueryAllExecutorOfSchemaRequest,
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
  ): QueryAllExecutorOfSchemaRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllExecutorOfSchemaRequest,
    } as QueryAllExecutorOfSchemaRequest;
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

  fromJSON(object: any): QueryAllExecutorOfSchemaRequest {
    const message = {
      ...baseQueryAllExecutorOfSchemaRequest,
    } as QueryAllExecutorOfSchemaRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllExecutorOfSchemaRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllExecutorOfSchemaRequest>
  ): QueryAllExecutorOfSchemaRequest {
    const message = {
      ...baseQueryAllExecutorOfSchemaRequest,
    } as QueryAllExecutorOfSchemaRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllExecutorOfSchemaResponse: object = {};

export const QueryAllExecutorOfSchemaResponse = {
  encode(
    message: QueryAllExecutorOfSchemaResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.executorOfSchema) {
      ExecutorOfSchema.encode(v!, writer.uint32(10).fork()).ldelim();
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
  ): QueryAllExecutorOfSchemaResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllExecutorOfSchemaResponse,
    } as QueryAllExecutorOfSchemaResponse;
    message.executorOfSchema = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.executorOfSchema.push(
            ExecutorOfSchema.decode(reader, reader.uint32())
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

  fromJSON(object: any): QueryAllExecutorOfSchemaResponse {
    const message = {
      ...baseQueryAllExecutorOfSchemaResponse,
    } as QueryAllExecutorOfSchemaResponse;
    message.executorOfSchema = [];
    if (
      object.executorOfSchema !== undefined &&
      object.executorOfSchema !== null
    ) {
      for (const e of object.executorOfSchema) {
        message.executorOfSchema.push(ExecutorOfSchema.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllExecutorOfSchemaResponse): unknown {
    const obj: any = {};
    if (message.executorOfSchema) {
      obj.executorOfSchema = message.executorOfSchema.map((e) =>
        e ? ExecutorOfSchema.toJSON(e) : undefined
      );
    } else {
      obj.executorOfSchema = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllExecutorOfSchemaResponse>
  ): QueryAllExecutorOfSchemaResponse {
    const message = {
      ...baseQueryAllExecutorOfSchemaResponse,
    } as QueryAllExecutorOfSchemaResponse;
    message.executorOfSchema = [];
    if (
      object.executorOfSchema !== undefined &&
      object.executorOfSchema !== null
    ) {
      for (const e of object.executorOfSchema) {
        message.executorOfSchema.push(ExecutorOfSchema.fromPartial(e));
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
  /** Queries a ActionExecutor by index. */
  ActionExecutor(
    request: QueryGetActionExecutorRequest
  ): Promise<QueryGetActionExecutorResponse>;
  /** Queries a list of ActionExecutor items. */
  ActionExecutorAll(
    request: QueryAllActionExecutorRequest
  ): Promise<QueryAllActionExecutorResponse>;
  /** Queries a SchemaAttribute by index. */
  SchemaAttribute(
    request: QueryGetSchemaAttributeRequest
  ): Promise<QueryGetSchemaAttributeResponse>;
  /** Queries a list of SchemaAttribute items. */
  SchemaAttributeAll(
    request: QueryAllSchemaAttributeRequest
  ): Promise<QueryAllSchemaAttributeResponse>;
  /** Queries a list of ListAttributeBySchema items. */
  ListAttributeBySchema(
    request: QueryListAttributeBySchemaRequest
  ): Promise<QueryListAttributeBySchemaResponse>;
  /** Queries a ActionOfSchema by index. */
  ActionOfSchema(
    request: QueryGetActionOfSchemaRequest
  ): Promise<QueryGetActionOfSchemaResponse>;
  /** Queries a list of ActionOfSchema items. */
  ActionOfSchemaAll(
    request: QueryAllActionOfSchemaRequest
  ): Promise<QueryAllActionOfSchemaResponse>;
  /** Queries a ExecutorOfSchema by index. */
  ExecutorOfSchema(
    request: QueryGetExecutorOfSchemaRequest
  ): Promise<QueryGetExecutorOfSchemaResponse>;
  /** Queries a list of ExecutorOfSchema items. */
  ExecutorOfSchemaAll(
    request: QueryAllExecutorOfSchemaRequest
  ): Promise<QueryAllExecutorOfSchemaResponse>;
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

  ActionExecutor(
    request: QueryGetActionExecutorRequest
  ): Promise<QueryGetActionExecutorResponse> {
    const data = QueryGetActionExecutorRequest.encode(request).finish();
    const promise = this.rpc.request(
      "thesixnetwork.sixnft.nftmngr.Query",
      "ActionExecutor",
      data
    );
    return promise.then((data) =>
      QueryGetActionExecutorResponse.decode(new Reader(data))
    );
  }

  ActionExecutorAll(
    request: QueryAllActionExecutorRequest
  ): Promise<QueryAllActionExecutorResponse> {
    const data = QueryAllActionExecutorRequest.encode(request).finish();
    const promise = this.rpc.request(
      "thesixnetwork.sixnft.nftmngr.Query",
      "ActionExecutorAll",
      data
    );
    return promise.then((data) =>
      QueryAllActionExecutorResponse.decode(new Reader(data))
    );
  }

  SchemaAttribute(
    request: QueryGetSchemaAttributeRequest
  ): Promise<QueryGetSchemaAttributeResponse> {
    const data = QueryGetSchemaAttributeRequest.encode(request).finish();
    const promise = this.rpc.request(
      "thesixnetwork.sixnft.nftmngr.Query",
      "SchemaAttribute",
      data
    );
    return promise.then((data) =>
      QueryGetSchemaAttributeResponse.decode(new Reader(data))
    );
  }

  SchemaAttributeAll(
    request: QueryAllSchemaAttributeRequest
  ): Promise<QueryAllSchemaAttributeResponse> {
    const data = QueryAllSchemaAttributeRequest.encode(request).finish();
    const promise = this.rpc.request(
      "thesixnetwork.sixnft.nftmngr.Query",
      "SchemaAttributeAll",
      data
    );
    return promise.then((data) =>
      QueryAllSchemaAttributeResponse.decode(new Reader(data))
    );
  }

  ListAttributeBySchema(
    request: QueryListAttributeBySchemaRequest
  ): Promise<QueryListAttributeBySchemaResponse> {
    const data = QueryListAttributeBySchemaRequest.encode(request).finish();
    const promise = this.rpc.request(
      "thesixnetwork.sixnft.nftmngr.Query",
      "ListAttributeBySchema",
      data
    );
    return promise.then((data) =>
      QueryListAttributeBySchemaResponse.decode(new Reader(data))
    );
  }

  ActionOfSchema(
    request: QueryGetActionOfSchemaRequest
  ): Promise<QueryGetActionOfSchemaResponse> {
    const data = QueryGetActionOfSchemaRequest.encode(request).finish();
    const promise = this.rpc.request(
      "thesixnetwork.sixnft.nftmngr.Query",
      "ActionOfSchema",
      data
    );
    return promise.then((data) =>
      QueryGetActionOfSchemaResponse.decode(new Reader(data))
    );
  }

  ActionOfSchemaAll(
    request: QueryAllActionOfSchemaRequest
  ): Promise<QueryAllActionOfSchemaResponse> {
    const data = QueryAllActionOfSchemaRequest.encode(request).finish();
    const promise = this.rpc.request(
      "thesixnetwork.sixnft.nftmngr.Query",
      "ActionOfSchemaAll",
      data
    );
    return promise.then((data) =>
      QueryAllActionOfSchemaResponse.decode(new Reader(data))
    );
  }

  ExecutorOfSchema(
    request: QueryGetExecutorOfSchemaRequest
  ): Promise<QueryGetExecutorOfSchemaResponse> {
    const data = QueryGetExecutorOfSchemaRequest.encode(request).finish();
    const promise = this.rpc.request(
      "thesixnetwork.sixnft.nftmngr.Query",
      "ExecutorOfSchema",
      data
    );
    return promise.then((data) =>
      QueryGetExecutorOfSchemaResponse.decode(new Reader(data))
    );
  }

  ExecutorOfSchemaAll(
    request: QueryAllExecutorOfSchemaRequest
  ): Promise<QueryAllExecutorOfSchemaResponse> {
    const data = QueryAllExecutorOfSchemaRequest.encode(request).finish();
    const promise = this.rpc.request(
      "thesixnetwork.sixnft.nftmngr.Query",
      "ExecutorOfSchemaAll",
      data
    );
    return promise.then((data) =>
      QueryAllExecutorOfSchemaResponse.decode(new Reader(data))
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
