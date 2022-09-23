/* eslint-disable */
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";
import { Params } from "../nftoracle/params";
import { MintRequest } from "../nftoracle/mint_request";
import { ActionRequest } from "../nftoracle/action_request";

export const protobufPackage = "sixnft.nftoracle";

/** GenesisState defines the nftoracle module's genesis state. */
export interface GenesisState {
  params: Params | undefined;
  mintRequestList: MintRequest[];
  mintRequestCount: number;
  actionRequestList: ActionRequest[];
  /** this line is used by starport scaffolding # genesis/proto/state */
  actionRequestCount: number;
}

const baseGenesisState: object = { mintRequestCount: 0, actionRequestCount: 0 };

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
      ActionRequest.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.actionRequestCount !== 0) {
      writer.uint32(40).uint64(message.actionRequestCount);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGenesisState } as GenesisState;
    message.mintRequestList = [];
    message.actionRequestList = [];
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
            ActionRequest.decode(reader, reader.uint32())
          );
          break;
        case 5:
          message.actionRequestCount = longToNumber(reader.uint64() as Long);
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
        message.actionRequestList.push(ActionRequest.fromJSON(e));
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
        e ? ActionRequest.toJSON(e) : undefined
      );
    } else {
      obj.actionRequestList = [];
    }
    message.actionRequestCount !== undefined &&
      (obj.actionRequestCount = message.actionRequestCount);
    return obj;
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
    message.mintRequestList = [];
    message.actionRequestList = [];
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
        message.actionRequestList.push(ActionRequest.fromPartial(e));
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


