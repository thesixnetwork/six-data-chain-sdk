/* eslint-disable */
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "thesixnetwork.sixnft.nftmngr";

export enum AllowedActioner {
  ALLOWED_ACTIONER_ALL = 0,
  ALLOWED_ACTIONER_SYSTEM_ONLY = 1,
  ALLOWED_ACTIONER_USER_ONLY = 2,
  UNRECOGNIZED = -1,
}

export function allowedActionerFromJSON(object: any): AllowedActioner {
  switch (object) {
    case 0:
    case "ALLOWED_ACTIONER_ALL":
      return AllowedActioner.ALLOWED_ACTIONER_ALL;
    case 1:
    case "ALLOWED_ACTIONER_SYSTEM_ONLY":
      return AllowedActioner.ALLOWED_ACTIONER_SYSTEM_ONLY;
    case 2:
    case "ALLOWED_ACTIONER_USER_ONLY":
      return AllowedActioner.ALLOWED_ACTIONER_USER_ONLY;
    case -1:
    case "UNRECOGNIZED":
    default:
      return AllowedActioner.UNRECOGNIZED;
  }
}

export function allowedActionerToJSON(object: AllowedActioner): string {
  switch (object) {
    case AllowedActioner.ALLOWED_ACTIONER_ALL:
      return "ALLOWED_ACTIONER_ALL";
    case AllowedActioner.ALLOWED_ACTIONER_SYSTEM_ONLY:
      return "ALLOWED_ACTIONER_SYSTEM_ONLY";
    case AllowedActioner.ALLOWED_ACTIONER_USER_ONLY:
      return "ALLOWED_ACTIONER_USER_ONLY";
    default:
      return "UNKNOWN";
  }
}

export interface Action {
  name: string;
  desc: string;
  disable: boolean;
  when: string;
  then: string[];
  allowed_actioner: AllowedActioner;
}

const baseAction: object = {
  name: "",
  desc: "",
  disable: false,
  when: "",
  then: "",
  allowed_actioner: 0,
};

export const Action = {
  encode(message: Action, writer: Writer = Writer.create()): Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.desc !== "") {
      writer.uint32(18).string(message.desc);
    }
    if (message.disable === true) {
      writer.uint32(24).bool(message.disable);
    }
    if (message.when !== "") {
      writer.uint32(34).string(message.when);
    }
    for (const v of message.then) {
      writer.uint32(42).string(v!);
    }
    if (message.allowed_actioner !== 0) {
      writer.uint32(48).int32(message.allowed_actioner);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Action {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseAction } as Action;
    message.then = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.desc = reader.string();
          break;
        case 3:
          message.disable = reader.bool();
          break;
        case 4:
          message.when = reader.string();
          break;
        case 5:
          message.then.push(reader.string());
          break;
        case 6:
          message.allowed_actioner = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Action {
    const message = { ...baseAction } as Action;
    message.then = [];
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    if (object.desc !== undefined && object.desc !== null) {
      message.desc = String(object.desc);
    } else {
      message.desc = "";
    }
    if (object.disable !== undefined && object.disable !== null) {
      message.disable = Boolean(object.disable);
    } else {
      message.disable = false;
    }
    if (object.when !== undefined && object.when !== null) {
      message.when = String(object.when);
    } else {
      message.when = "";
    }
    if (object.then !== undefined && object.then !== null) {
      for (const e of object.then) {
        message.then.push(String(e));
      }
    }
    if (
      object.allowed_actioner !== undefined &&
      object.allowed_actioner !== null
    ) {
      message.allowed_actioner = allowedActionerFromJSON(
        object.allowed_actioner
      );
    } else {
      message.allowed_actioner = 0;
    }
    return message;
  },

  toJSON(message: Action): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.desc !== undefined && (obj.desc = message.desc);
    message.disable !== undefined && (obj.disable = message.disable);
    message.when !== undefined && (obj.when = message.when);
    if (message.then) {
      obj.then = message.then.map((e) => e);
    } else {
      obj.then = [];
    }
    message.allowed_actioner !== undefined &&
      (obj.allowed_actioner = allowedActionerToJSON(message.allowed_actioner));
    return obj;
  },

  fromPartial(object: DeepPartial<Action>): Action {
    const message = { ...baseAction } as Action;
    message.then = [];
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    if (object.desc !== undefined && object.desc !== null) {
      message.desc = object.desc;
    } else {
      message.desc = "";
    }
    if (object.disable !== undefined && object.disable !== null) {
      message.disable = object.disable;
    } else {
      message.disable = false;
    }
    if (object.when !== undefined && object.when !== null) {
      message.when = object.when;
    } else {
      message.when = "";
    }
    if (object.then !== undefined && object.then !== null) {
      for (const e of object.then) {
        message.then.push(e);
      }
    }
    if (
      object.allowed_actioner !== undefined &&
      object.allowed_actioner !== null
    ) {
      message.allowed_actioner = object.allowed_actioner;
    } else {
      message.allowed_actioner = 0;
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
