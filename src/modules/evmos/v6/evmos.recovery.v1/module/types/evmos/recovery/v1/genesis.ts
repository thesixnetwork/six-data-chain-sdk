/* eslint-disable */
import { Duration } from "../../../google/protobuf/duration";
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "evmos.recovery.v1";

/** GenesisState defines the recovery module's genesis state. */
export interface GenesisState {
  /** params defines all the paramaters of the module. */
  params: Params | undefined;
}

/** Params holds parameters for the recovery module */
export interface Params {
  /** enable recovery IBC middleware */
  enable_recovery: boolean;
  /** duration added to timeout timestamp for balances recovered via IBC packets */
  packet_timeout_duration: Duration | undefined;
}

const baseGenesisState: object = {};

export const GenesisState = {
  encode(message: GenesisState, writer: Writer = Writer.create()): Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGenesisState } as GenesisState;
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

  fromJSON(object: any): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromJSON(object.params);
    } else {
      message.params = undefined;
    }
    return message;
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    } else {
      message.params = undefined;
    }
    return message;
  },
};

const baseParams: object = { enable_recovery: false };

export const Params = {
  encode(message: Params, writer: Writer = Writer.create()): Writer {
    if (message.enable_recovery === true) {
      writer.uint32(8).bool(message.enable_recovery);
    }
    if (message.packet_timeout_duration !== undefined) {
      Duration.encode(
        message.packet_timeout_duration,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Params {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseParams } as Params;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.enable_recovery = reader.bool();
          break;
        case 2:
          message.packet_timeout_duration = Duration.decode(
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

  fromJSON(object: any): Params {
    const message = { ...baseParams } as Params;
    if (
      object.enable_recovery !== undefined &&
      object.enable_recovery !== null
    ) {
      message.enable_recovery = Boolean(object.enable_recovery);
    } else {
      message.enable_recovery = false;
    }
    if (
      object.packet_timeout_duration !== undefined &&
      object.packet_timeout_duration !== null
    ) {
      message.packet_timeout_duration = Duration.fromJSON(
        object.packet_timeout_duration
      );
    } else {
      message.packet_timeout_duration = undefined;
    }
    return message;
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    message.enable_recovery !== undefined &&
      (obj.enable_recovery = message.enable_recovery);
    message.packet_timeout_duration !== undefined &&
      (obj.packet_timeout_duration = message.packet_timeout_duration
        ? Duration.toJSON(message.packet_timeout_duration)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<Params>): Params {
    const message = { ...baseParams } as Params;
    if (
      object.enable_recovery !== undefined &&
      object.enable_recovery !== null
    ) {
      message.enable_recovery = object.enable_recovery;
    } else {
      message.enable_recovery = false;
    }
    if (
      object.packet_timeout_duration !== undefined &&
      object.packet_timeout_duration !== null
    ) {
      message.packet_timeout_duration = Duration.fromPartial(
        object.packet_timeout_duration
      );
    } else {
      message.packet_timeout_duration = undefined;
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
