/* eslint-disable */
import { Params } from "../nftmngr/params";
import { NFTSchema } from "../nftmngr/nft_schema";
import { NftData } from "../nftmngr/nft_data";
import { ActionByRefId } from "../nftmngr/action_by_ref_id";
import { Organization } from "../nftmngr/organization";
import { NftCollection } from "../nftmngr/nft_collection";
import { NFTSchemaByContract } from "../nftmngr/nft_schema_by_contract";
import { NFTFeeConfig } from "../nftmngr/nft_fee_config";
import { NFTFeeBalance } from "../nftmngr/nft_fee_balance";
import { MetadataCreator } from "../nftmngr/metadata_creator";
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "thesixnetwork.sixnft.nftmngr";

/** GenesisState defines the nftmngr module's genesis state. */
export interface GenesisState {
  params: Params | undefined;
  nFTSchemaList: NFTSchema[];
  nftDataList: NftData[];
  actionByRefIdList: ActionByRefId[];
  organizationList: Organization[];
  nftCollectionList: NftCollection[];
  nFTSchemaByContractList: NFTSchemaByContract[];
  nft_fee_config: NFTFeeConfig | undefined;
  nFTFeeBalance: NFTFeeBalance | undefined;
  /** this line is used by starport scaffolding # genesis/proto/state */
  metadataCreatorList: MetadataCreator[];
}

const baseGenesisState: object = {};

export const GenesisState = {
  encode(message: GenesisState, writer: Writer = Writer.create()): Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.nFTSchemaList) {
      NFTSchema.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.nftDataList) {
      NftData.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.actionByRefIdList) {
      ActionByRefId.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.organizationList) {
      Organization.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.nftCollectionList) {
      NftCollection.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.nFTSchemaByContractList) {
      NFTSchemaByContract.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    if (message.nft_fee_config !== undefined) {
      NFTFeeConfig.encode(
        message.nft_fee_config,
        writer.uint32(66).fork()
      ).ldelim();
    }
    if (message.nFTFeeBalance !== undefined) {
      NFTFeeBalance.encode(
        message.nFTFeeBalance,
        writer.uint32(74).fork()
      ).ldelim();
    }
    for (const v of message.metadataCreatorList) {
      MetadataCreator.encode(v!, writer.uint32(82).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGenesisState } as GenesisState;
    message.nFTSchemaList = [];
    message.nftDataList = [];
    message.actionByRefIdList = [];
    message.organizationList = [];
    message.nftCollectionList = [];
    message.nFTSchemaByContractList = [];
    message.metadataCreatorList = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.nFTSchemaList.push(NFTSchema.decode(reader, reader.uint32()));
          break;
        case 3:
          message.nftDataList.push(NftData.decode(reader, reader.uint32()));
          break;
        case 4:
          message.actionByRefIdList.push(
            ActionByRefId.decode(reader, reader.uint32())
          );
          break;
        case 5:
          message.organizationList.push(
            Organization.decode(reader, reader.uint32())
          );
          break;
        case 6:
          message.nftCollectionList.push(
            NftCollection.decode(reader, reader.uint32())
          );
          break;
        case 7:
          message.nFTSchemaByContractList.push(
            NFTSchemaByContract.decode(reader, reader.uint32())
          );
          break;
        case 8:
          message.nft_fee_config = NFTFeeConfig.decode(reader, reader.uint32());
          break;
        case 9:
          message.nFTFeeBalance = NFTFeeBalance.decode(reader, reader.uint32());
          break;
        case 10:
          message.metadataCreatorList.push(
            MetadataCreator.decode(reader, reader.uint32())
          );
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
    message.nFTSchemaList = [];
    message.nftDataList = [];
    message.actionByRefIdList = [];
    message.organizationList = [];
    message.nftCollectionList = [];
    message.nFTSchemaByContractList = [];
    message.metadataCreatorList = [];
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromJSON(object.params);
    } else {
      message.params = undefined;
    }
    if (object.nFTSchemaList !== undefined && object.nFTSchemaList !== null) {
      for (const e of object.nFTSchemaList) {
        message.nFTSchemaList.push(NFTSchema.fromJSON(e));
      }
    }
    if (object.nftDataList !== undefined && object.nftDataList !== null) {
      for (const e of object.nftDataList) {
        message.nftDataList.push(NftData.fromJSON(e));
      }
    }
    if (
      object.actionByRefIdList !== undefined &&
      object.actionByRefIdList !== null
    ) {
      for (const e of object.actionByRefIdList) {
        message.actionByRefIdList.push(ActionByRefId.fromJSON(e));
      }
    }
    if (
      object.organizationList !== undefined &&
      object.organizationList !== null
    ) {
      for (const e of object.organizationList) {
        message.organizationList.push(Organization.fromJSON(e));
      }
    }
    if (
      object.nftCollectionList !== undefined &&
      object.nftCollectionList !== null
    ) {
      for (const e of object.nftCollectionList) {
        message.nftCollectionList.push(NftCollection.fromJSON(e));
      }
    }
    if (
      object.nFTSchemaByContractList !== undefined &&
      object.nFTSchemaByContractList !== null
    ) {
      for (const e of object.nFTSchemaByContractList) {
        message.nFTSchemaByContractList.push(NFTSchemaByContract.fromJSON(e));
      }
    }
    if (object.nft_fee_config !== undefined && object.nft_fee_config !== null) {
      message.nft_fee_config = NFTFeeConfig.fromJSON(object.nft_fee_config);
    } else {
      message.nft_fee_config = undefined;
    }
    if (object.nFTFeeBalance !== undefined && object.nFTFeeBalance !== null) {
      message.nFTFeeBalance = NFTFeeBalance.fromJSON(object.nFTFeeBalance);
    } else {
      message.nFTFeeBalance = undefined;
    }
    if (
      object.metadataCreatorList !== undefined &&
      object.metadataCreatorList !== null
    ) {
      for (const e of object.metadataCreatorList) {
        message.metadataCreatorList.push(MetadataCreator.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    if (message.nFTSchemaList) {
      obj.nFTSchemaList = message.nFTSchemaList.map((e) =>
        e ? NFTSchema.toJSON(e) : undefined
      );
    } else {
      obj.nFTSchemaList = [];
    }
    if (message.nftDataList) {
      obj.nftDataList = message.nftDataList.map((e) =>
        e ? NftData.toJSON(e) : undefined
      );
    } else {
      obj.nftDataList = [];
    }
    if (message.actionByRefIdList) {
      obj.actionByRefIdList = message.actionByRefIdList.map((e) =>
        e ? ActionByRefId.toJSON(e) : undefined
      );
    } else {
      obj.actionByRefIdList = [];
    }
    if (message.organizationList) {
      obj.organizationList = message.organizationList.map((e) =>
        e ? Organization.toJSON(e) : undefined
      );
    } else {
      obj.organizationList = [];
    }
    if (message.nftCollectionList) {
      obj.nftCollectionList = message.nftCollectionList.map((e) =>
        e ? NftCollection.toJSON(e) : undefined
      );
    } else {
      obj.nftCollectionList = [];
    }
    if (message.nFTSchemaByContractList) {
      obj.nFTSchemaByContractList = message.nFTSchemaByContractList.map((e) =>
        e ? NFTSchemaByContract.toJSON(e) : undefined
      );
    } else {
      obj.nFTSchemaByContractList = [];
    }
    message.nft_fee_config !== undefined &&
      (obj.nft_fee_config = message.nft_fee_config
        ? NFTFeeConfig.toJSON(message.nft_fee_config)
        : undefined);
    message.nFTFeeBalance !== undefined &&
      (obj.nFTFeeBalance = message.nFTFeeBalance
        ? NFTFeeBalance.toJSON(message.nFTFeeBalance)
        : undefined);
    if (message.metadataCreatorList) {
      obj.metadataCreatorList = message.metadataCreatorList.map((e) =>
        e ? MetadataCreator.toJSON(e) : undefined
      );
    } else {
      obj.metadataCreatorList = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
    message.nFTSchemaList = [];
    message.nftDataList = [];
    message.actionByRefIdList = [];
    message.organizationList = [];
    message.nftCollectionList = [];
    message.nFTSchemaByContractList = [];
    message.metadataCreatorList = [];
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    } else {
      message.params = undefined;
    }
    if (object.nFTSchemaList !== undefined && object.nFTSchemaList !== null) {
      for (const e of object.nFTSchemaList) {
        message.nFTSchemaList.push(NFTSchema.fromPartial(e));
      }
    }
    if (object.nftDataList !== undefined && object.nftDataList !== null) {
      for (const e of object.nftDataList) {
        message.nftDataList.push(NftData.fromPartial(e));
      }
    }
    if (
      object.actionByRefIdList !== undefined &&
      object.actionByRefIdList !== null
    ) {
      for (const e of object.actionByRefIdList) {
        message.actionByRefIdList.push(ActionByRefId.fromPartial(e));
      }
    }
    if (
      object.organizationList !== undefined &&
      object.organizationList !== null
    ) {
      for (const e of object.organizationList) {
        message.organizationList.push(Organization.fromPartial(e));
      }
    }
    if (
      object.nftCollectionList !== undefined &&
      object.nftCollectionList !== null
    ) {
      for (const e of object.nftCollectionList) {
        message.nftCollectionList.push(NftCollection.fromPartial(e));
      }
    }
    if (
      object.nFTSchemaByContractList !== undefined &&
      object.nFTSchemaByContractList !== null
    ) {
      for (const e of object.nFTSchemaByContractList) {
        message.nFTSchemaByContractList.push(
          NFTSchemaByContract.fromPartial(e)
        );
      }
    }
    if (object.nft_fee_config !== undefined && object.nft_fee_config !== null) {
      message.nft_fee_config = NFTFeeConfig.fromPartial(object.nft_fee_config);
    } else {
      message.nft_fee_config = undefined;
    }
    if (object.nFTFeeBalance !== undefined && object.nFTFeeBalance !== null) {
      message.nFTFeeBalance = NFTFeeBalance.fromPartial(object.nFTFeeBalance);
    } else {
      message.nFTFeeBalance = undefined;
    }
    if (
      object.metadataCreatorList !== undefined &&
      object.metadataCreatorList !== null
    ) {
      for (const e of object.metadataCreatorList) {
        message.metadataCreatorList.push(MetadataCreator.fromPartial(e));
      }
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
