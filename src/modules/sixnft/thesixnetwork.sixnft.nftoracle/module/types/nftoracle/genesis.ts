/* eslint-disable */
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";
import { Params } from "../nftoracle/params";
import { MintRequest } from "../nftoracle/mint_request";
import { ActionOracleRequest } from "../nftoracle/action_request";
import { CollectionOwnerRequest } from "../nftoracle/collection_owner_request";
import { OracleConfig } from "../nftoracle/oracle_config";
import { ActionSigner } from "../nftoracle/action_signer";
import { BindedSigner } from "../nftoracle/binded_signer";
import { ActionSignerConfig } from "../nftoracle/action_signer_config";
import { SyncActionSigner } from "../nftoracle/sync_action_signer";

export const protobufPackage = "thesixnetwork.sixnft.nftoracle";

/** GenesisState defines the nftoracle module's genesis state. */
export interface GenesisState {
  params: Params | undefined;
  mintRequestList: MintRequest[];
  mintRequestCount: number;
  actionRequestList: ActionOracleRequest[];
  actionRequestCount: number;
  collectionOwnerRequestList: CollectionOwnerRequest[];
  collectionOwnerRequestCount: number;
  oracle_config: OracleConfig | undefined;
  actionSignerList: ActionSigner[];
  bindedSignerList: BindedSigner[];
  actionSignerConfigList: ActionSignerConfig[];
  syncActionSignerList: SyncActionSigner[];
  /** this line is used by starport scaffolding # genesis/proto/state */
  syncActionSignerCount: number;
}

const baseGenesisState: object = {
  mintRequestCount: 0,
  actionRequestCount: 0,
  collectionOwnerRequestCount: 0,
  syncActionSignerCount: 0,
};

export const GenesisState = {
  encode(message: GenesisState, writer: Writer = Writer.create()): Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.mintRequestList) {
      MintRequest.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.mintRequestCount !== 0) {
      writer.uint32(24).uint64(message.mintRequestCount);
    }
    for (const v of message.actionRequestList) {
      ActionOracleRequest.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.actionRequestCount !== 0) {
      writer.uint32(40).uint64(message.actionRequestCount);
    }
    for (const v of message.collectionOwnerRequestList) {
      CollectionOwnerRequest.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    if (message.collectionOwnerRequestCount !== 0) {
      writer.uint32(56).uint64(message.collectionOwnerRequestCount);
    }
    if (message.oracle_config !== undefined) {
      OracleConfig.encode(
        message.oracle_config,
        writer.uint32(66).fork()
      ).ldelim();
    }
    for (const v of message.actionSignerList) {
      ActionSigner.encode(v!, writer.uint32(74).fork()).ldelim();
    }
    for (const v of message.bindedSignerList) {
      BindedSigner.encode(v!, writer.uint32(82).fork()).ldelim();
    }
    for (const v of message.actionSignerConfigList) {
      ActionSignerConfig.encode(v!, writer.uint32(106).fork()).ldelim();
    }
    for (const v of message.syncActionSignerList) {
      SyncActionSigner.encode(v!, writer.uint32(114).fork()).ldelim();
    }
    if (message.syncActionSignerCount !== 0) {
      writer.uint32(120).uint64(message.syncActionSignerCount);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGenesisState } as GenesisState;
    message.mintRequestList = [];
    message.actionRequestList = [];
    message.collectionOwnerRequestList = [];
    message.actionSignerList = [];
    message.bindedSignerList = [];
    message.actionSignerConfigList = [];
    message.syncActionSignerList = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.mintRequestList.push(
            MintRequest.decode(reader, reader.uint32())
          );
          break;
        case 3:
          message.mintRequestCount = longToNumber(reader.uint64() as Long);
          break;
        case 4:
          message.actionRequestList.push(
            ActionOracleRequest.decode(reader, reader.uint32())
          );
          break;
        case 5:
          message.actionRequestCount = longToNumber(reader.uint64() as Long);
          break;
        case 6:
          message.collectionOwnerRequestList.push(
            CollectionOwnerRequest.decode(reader, reader.uint32())
          );
          break;
        case 7:
          message.collectionOwnerRequestCount = longToNumber(
            reader.uint64() as Long
          );
          break;
        case 8:
          message.oracle_config = OracleConfig.decode(reader, reader.uint32());
          break;
        case 9:
          message.actionSignerList.push(
            ActionSigner.decode(reader, reader.uint32())
          );
          break;
        case 10:
          message.bindedSignerList.push(
            BindedSigner.decode(reader, reader.uint32())
          );
          break;
        case 13:
          message.actionSignerConfigList.push(
            ActionSignerConfig.decode(reader, reader.uint32())
          );
          break;
        case 14:
          message.syncActionSignerList.push(
            SyncActionSigner.decode(reader, reader.uint32())
          );
          break;
        case 15:
          message.syncActionSignerCount = longToNumber(reader.uint64() as Long);
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
    message.mintRequestList = [];
    message.actionRequestList = [];
    message.collectionOwnerRequestList = [];
    message.actionSignerList = [];
    message.bindedSignerList = [];
    message.actionSignerConfigList = [];
    message.syncActionSignerList = [];
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromJSON(object.params);
    } else {
      message.params = undefined;
    }
    if (
      object.mintRequestList !== undefined &&
      object.mintRequestList !== null
    ) {
      for (const e of object.mintRequestList) {
        message.mintRequestList.push(MintRequest.fromJSON(e));
      }
    }
    if (
      object.mintRequestCount !== undefined &&
      object.mintRequestCount !== null
    ) {
      message.mintRequestCount = Number(object.mintRequestCount);
    } else {
      message.mintRequestCount = 0;
    }
    if (
      object.actionRequestList !== undefined &&
      object.actionRequestList !== null
    ) {
      for (const e of object.actionRequestList) {
        message.actionRequestList.push(ActionOracleRequest.fromJSON(e));
      }
    }
    if (
      object.actionRequestCount !== undefined &&
      object.actionRequestCount !== null
    ) {
      message.actionRequestCount = Number(object.actionRequestCount);
    } else {
      message.actionRequestCount = 0;
    }
    if (
      object.collectionOwnerRequestList !== undefined &&
      object.collectionOwnerRequestList !== null
    ) {
      for (const e of object.collectionOwnerRequestList) {
        message.collectionOwnerRequestList.push(
          CollectionOwnerRequest.fromJSON(e)
        );
      }
    }
    if (
      object.collectionOwnerRequestCount !== undefined &&
      object.collectionOwnerRequestCount !== null
    ) {
      message.collectionOwnerRequestCount = Number(
        object.collectionOwnerRequestCount
      );
    } else {
      message.collectionOwnerRequestCount = 0;
    }
    if (object.oracle_config !== undefined && object.oracle_config !== null) {
      message.oracle_config = OracleConfig.fromJSON(object.oracle_config);
    } else {
      message.oracle_config = undefined;
    }
    if (
      object.actionSignerList !== undefined &&
      object.actionSignerList !== null
    ) {
      for (const e of object.actionSignerList) {
        message.actionSignerList.push(ActionSigner.fromJSON(e));
      }
    }
    if (
      object.bindedSignerList !== undefined &&
      object.bindedSignerList !== null
    ) {
      for (const e of object.bindedSignerList) {
        message.bindedSignerList.push(BindedSigner.fromJSON(e));
      }
    }
    if (
      object.actionSignerConfigList !== undefined &&
      object.actionSignerConfigList !== null
    ) {
      for (const e of object.actionSignerConfigList) {
        message.actionSignerConfigList.push(ActionSignerConfig.fromJSON(e));
      }
    }
    if (
      object.syncActionSignerList !== undefined &&
      object.syncActionSignerList !== null
    ) {
      for (const e of object.syncActionSignerList) {
        message.syncActionSignerList.push(SyncActionSigner.fromJSON(e));
      }
    }
    if (
      object.syncActionSignerCount !== undefined &&
      object.syncActionSignerCount !== null
    ) {
      message.syncActionSignerCount = Number(object.syncActionSignerCount);
    } else {
      message.syncActionSignerCount = 0;
    }
    return message;
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    if (message.mintRequestList) {
      obj.mintRequestList = message.mintRequestList.map((e) =>
        e ? MintRequest.toJSON(e) : undefined
      );
    } else {
      obj.mintRequestList = [];
    }
    message.mintRequestCount !== undefined &&
      (obj.mintRequestCount = message.mintRequestCount);
    if (message.actionRequestList) {
      obj.actionRequestList = message.actionRequestList.map((e) =>
        e ? ActionOracleRequest.toJSON(e) : undefined
      );
    } else {
      obj.actionRequestList = [];
    }
    message.actionRequestCount !== undefined &&
      (obj.actionRequestCount = message.actionRequestCount);
    if (message.collectionOwnerRequestList) {
      obj.collectionOwnerRequestList = message.collectionOwnerRequestList.map(
        (e) => (e ? CollectionOwnerRequest.toJSON(e) : undefined)
      );
    } else {
      obj.collectionOwnerRequestList = [];
    }
    message.collectionOwnerRequestCount !== undefined &&
      (obj.collectionOwnerRequestCount = message.collectionOwnerRequestCount);
    message.oracle_config !== undefined &&
      (obj.oracle_config = message.oracle_config
        ? OracleConfig.toJSON(message.oracle_config)
        : undefined);
    if (message.actionSignerList) {
      obj.actionSignerList = message.actionSignerList.map((e) =>
        e ? ActionSigner.toJSON(e) : undefined
      );
    } else {
      obj.actionSignerList = [];
    }
    if (message.bindedSignerList) {
      obj.bindedSignerList = message.bindedSignerList.map((e) =>
        e ? BindedSigner.toJSON(e) : undefined
      );
    } else {
      obj.bindedSignerList = [];
    }
    if (message.actionSignerConfigList) {
      obj.actionSignerConfigList = message.actionSignerConfigList.map((e) =>
        e ? ActionSignerConfig.toJSON(e) : undefined
      );
    } else {
      obj.actionSignerConfigList = [];
    }
    if (message.syncActionSignerList) {
      obj.syncActionSignerList = message.syncActionSignerList.map((e) =>
        e ? SyncActionSigner.toJSON(e) : undefined
      );
    } else {
      obj.syncActionSignerList = [];
    }
    message.syncActionSignerCount !== undefined &&
      (obj.syncActionSignerCount = message.syncActionSignerCount);
    return obj;
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
    message.mintRequestList = [];
    message.actionRequestList = [];
    message.collectionOwnerRequestList = [];
    message.actionSignerList = [];
    message.bindedSignerList = [];
    message.actionSignerConfigList = [];
    message.syncActionSignerList = [];
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    } else {
      message.params = undefined;
    }
    if (
      object.mintRequestList !== undefined &&
      object.mintRequestList !== null
    ) {
      for (const e of object.mintRequestList) {
        message.mintRequestList.push(MintRequest.fromPartial(e));
      }
    }
    if (
      object.mintRequestCount !== undefined &&
      object.mintRequestCount !== null
    ) {
      message.mintRequestCount = object.mintRequestCount;
    } else {
      message.mintRequestCount = 0;
    }
    if (
      object.actionRequestList !== undefined &&
      object.actionRequestList !== null
    ) {
      for (const e of object.actionRequestList) {
        message.actionRequestList.push(ActionOracleRequest.fromPartial(e));
      }
    }
    if (
      object.actionRequestCount !== undefined &&
      object.actionRequestCount !== null
    ) {
      message.actionRequestCount = object.actionRequestCount;
    } else {
      message.actionRequestCount = 0;
    }
    if (
      object.collectionOwnerRequestList !== undefined &&
      object.collectionOwnerRequestList !== null
    ) {
      for (const e of object.collectionOwnerRequestList) {
        message.collectionOwnerRequestList.push(
          CollectionOwnerRequest.fromPartial(e)
        );
      }
    }
    if (
      object.collectionOwnerRequestCount !== undefined &&
      object.collectionOwnerRequestCount !== null
    ) {
      message.collectionOwnerRequestCount = object.collectionOwnerRequestCount;
    } else {
      message.collectionOwnerRequestCount = 0;
    }
    if (object.oracle_config !== undefined && object.oracle_config !== null) {
      message.oracle_config = OracleConfig.fromPartial(object.oracle_config);
    } else {
      message.oracle_config = undefined;
    }
    if (
      object.actionSignerList !== undefined &&
      object.actionSignerList !== null
    ) {
      for (const e of object.actionSignerList) {
        message.actionSignerList.push(ActionSigner.fromPartial(e));
      }
    }
    if (
      object.bindedSignerList !== undefined &&
      object.bindedSignerList !== null
    ) {
      for (const e of object.bindedSignerList) {
        message.bindedSignerList.push(BindedSigner.fromPartial(e));
      }
    }
    if (
      object.actionSignerConfigList !== undefined &&
      object.actionSignerConfigList !== null
    ) {
      for (const e of object.actionSignerConfigList) {
        message.actionSignerConfigList.push(ActionSignerConfig.fromPartial(e));
      }
    }
    if (
      object.syncActionSignerList !== undefined &&
      object.syncActionSignerList !== null
    ) {
      for (const e of object.syncActionSignerList) {
        message.syncActionSignerList.push(SyncActionSigner.fromPartial(e));
      }
    }
    if (
      object.syncActionSignerCount !== undefined &&
      object.syncActionSignerCount !== null
    ) {
      message.syncActionSignerCount = object.syncActionSignerCount;
    } else {
      message.syncActionSignerCount = 0;
    }
    return message;
  },
};

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


