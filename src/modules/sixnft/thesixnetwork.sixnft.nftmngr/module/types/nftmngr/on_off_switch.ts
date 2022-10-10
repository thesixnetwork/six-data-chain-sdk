/* eslint-disable */
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "thesixnetwork.sixnft.nftmngr";

export interface OnOffSwitch {
  active: boolean;
}

const baseOnOffSwitch: object = { active: false };

export const OnOffSwitch = {
  encode(message: OnOffSwitch, writer: Writer = Writer.create()): Writer {
    if (message.active === true) {
      writer.uint32(8).bool(message.active);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): OnOffSwitch {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseOnOffSwitch } as OnOffSwitch;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.active = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): OnOffSwitch {
    const message = { ...baseOnOffSwitch } as OnOffSwitch;
    if (object.active !== undefined && object.active !== null) {
      message.active = Boolean(object.active);
    } else {
      message.active = false;
    }
    return message;
  },

  toJSON(message: OnOffSwitch): unknown {
    const obj: any = {};
    message.active !== undefined && (obj.active = message.active);
    return obj;
  },

  fromPartial(object: DeepPartial<OnOffSwitch>): OnOffSwitch {
    const message = { ...baseOnOffSwitch } as OnOffSwitch;
    if (object.active !== undefined && object.active !== null) {
      message.active = object.active;
    } else {
      message.active = false;
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
