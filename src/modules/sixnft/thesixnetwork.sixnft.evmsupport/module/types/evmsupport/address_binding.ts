/* eslint-disable */
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "thesixnetwork.sixnft.evmsupport";

export interface AddressBinding {
  ethAddress: string;
  nativeAddress: string;
}

const baseAddressBinding: object = { ethAddress: "", nativeAddress: "" };

export const AddressBinding = {
  encode(message: AddressBinding, writer: Writer = Writer.create()): Writer {
    if (message.ethAddress !== "") {
      writer.uint32(10).string(message.ethAddress);
    }
    if (message.nativeAddress !== "") {
      writer.uint32(18).string(message.nativeAddress);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): AddressBinding {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseAddressBinding } as AddressBinding;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ethAddress = reader.string();
          break;
        case 2:
          message.nativeAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AddressBinding {
    const message = { ...baseAddressBinding } as AddressBinding;
    if (object.ethAddress !== undefined && object.ethAddress !== null) {
      message.ethAddress = String(object.ethAddress);
    } else {
      message.ethAddress = "";
    }
    if (object.nativeAddress !== undefined && object.nativeAddress !== null) {
      message.nativeAddress = String(object.nativeAddress);
    } else {
      message.nativeAddress = "";
    }
    return message;
  },

  toJSON(message: AddressBinding): unknown {
    const obj: any = {};
    message.ethAddress !== undefined && (obj.ethAddress = message.ethAddress);
    message.nativeAddress !== undefined &&
      (obj.nativeAddress = message.nativeAddress);
    return obj;
  },

  fromPartial(object: DeepPartial<AddressBinding>): AddressBinding {
    const message = { ...baseAddressBinding } as AddressBinding;
    if (object.ethAddress !== undefined && object.ethAddress !== null) {
      message.ethAddress = object.ethAddress;
    } else {
      message.ethAddress = "";
    }
    if (object.nativeAddress !== undefined && object.nativeAddress !== null) {
      message.nativeAddress = object.nativeAddress;
    } else {
      message.nativeAddress = "";
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
