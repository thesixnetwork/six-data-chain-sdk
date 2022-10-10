/* eslint-disable */
import { Reader, Writer } from "protobufjs/minimal";

export const protobufPackage = "thesixnetwork.sixnft.evmsupport";

export interface MsgBindAddress {
  creator: string;
  ethAddress: string;
  signature: string;
  signedMessage: string;
}

export interface MsgBindAddressResponse {
  ethAddress: string;
  nativeAddress: string;
}

export interface MsgRemoveBinding {
  creator: string;
  ethAddress: string;
  signature: string;
  signedMessage: string;
}

export interface MsgRemoveBindingResponse {
  ethAddress: string;
  nativeAddress: string;
}

const baseMsgBindAddress: object = {
  creator: "",
  ethAddress: "",
  signature: "",
  signedMessage: "",
};

export const MsgBindAddress = {
  encode(message: MsgBindAddress, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.ethAddress !== "") {
      writer.uint32(18).string(message.ethAddress);
    }
    if (message.signature !== "") {
      writer.uint32(26).string(message.signature);
    }
    if (message.signedMessage !== "") {
      writer.uint32(34).string(message.signedMessage);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgBindAddress {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgBindAddress } as MsgBindAddress;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.ethAddress = reader.string();
          break;
        case 3:
          message.signature = reader.string();
          break;
        case 4:
          message.signedMessage = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgBindAddress {
    const message = { ...baseMsgBindAddress } as MsgBindAddress;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.ethAddress !== undefined && object.ethAddress !== null) {
      message.ethAddress = String(object.ethAddress);
    } else {
      message.ethAddress = "";
    }
    if (object.signature !== undefined && object.signature !== null) {
      message.signature = String(object.signature);
    } else {
      message.signature = "";
    }
    if (object.signedMessage !== undefined && object.signedMessage !== null) {
      message.signedMessage = String(object.signedMessage);
    } else {
      message.signedMessage = "";
    }
    return message;
  },

  toJSON(message: MsgBindAddress): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.ethAddress !== undefined && (obj.ethAddress = message.ethAddress);
    message.signature !== undefined && (obj.signature = message.signature);
    message.signedMessage !== undefined &&
      (obj.signedMessage = message.signedMessage);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgBindAddress>): MsgBindAddress {
    const message = { ...baseMsgBindAddress } as MsgBindAddress;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.ethAddress !== undefined && object.ethAddress !== null) {
      message.ethAddress = object.ethAddress;
    } else {
      message.ethAddress = "";
    }
    if (object.signature !== undefined && object.signature !== null) {
      message.signature = object.signature;
    } else {
      message.signature = "";
    }
    if (object.signedMessage !== undefined && object.signedMessage !== null) {
      message.signedMessage = object.signedMessage;
    } else {
      message.signedMessage = "";
    }
    return message;
  },
};

const baseMsgBindAddressResponse: object = {
  ethAddress: "",
  nativeAddress: "",
};

export const MsgBindAddressResponse = {
  encode(
    message: MsgBindAddressResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.ethAddress !== "") {
      writer.uint32(10).string(message.ethAddress);
    }
    if (message.nativeAddress !== "") {
      writer.uint32(18).string(message.nativeAddress);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgBindAddressResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgBindAddressResponse } as MsgBindAddressResponse;
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

  fromJSON(object: any): MsgBindAddressResponse {
    const message = { ...baseMsgBindAddressResponse } as MsgBindAddressResponse;
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

  toJSON(message: MsgBindAddressResponse): unknown {
    const obj: any = {};
    message.ethAddress !== undefined && (obj.ethAddress = message.ethAddress);
    message.nativeAddress !== undefined &&
      (obj.nativeAddress = message.nativeAddress);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgBindAddressResponse>
  ): MsgBindAddressResponse {
    const message = { ...baseMsgBindAddressResponse } as MsgBindAddressResponse;
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

const baseMsgRemoveBinding: object = {
  creator: "",
  ethAddress: "",
  signature: "",
  signedMessage: "",
};

export const MsgRemoveBinding = {
  encode(message: MsgRemoveBinding, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.ethAddress !== "") {
      writer.uint32(18).string(message.ethAddress);
    }
    if (message.signature !== "") {
      writer.uint32(26).string(message.signature);
    }
    if (message.signedMessage !== "") {
      writer.uint32(34).string(message.signedMessage);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgRemoveBinding {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgRemoveBinding } as MsgRemoveBinding;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.ethAddress = reader.string();
          break;
        case 3:
          message.signature = reader.string();
          break;
        case 4:
          message.signedMessage = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgRemoveBinding {
    const message = { ...baseMsgRemoveBinding } as MsgRemoveBinding;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.ethAddress !== undefined && object.ethAddress !== null) {
      message.ethAddress = String(object.ethAddress);
    } else {
      message.ethAddress = "";
    }
    if (object.signature !== undefined && object.signature !== null) {
      message.signature = String(object.signature);
    } else {
      message.signature = "";
    }
    if (object.signedMessage !== undefined && object.signedMessage !== null) {
      message.signedMessage = String(object.signedMessage);
    } else {
      message.signedMessage = "";
    }
    return message;
  },

  toJSON(message: MsgRemoveBinding): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.ethAddress !== undefined && (obj.ethAddress = message.ethAddress);
    message.signature !== undefined && (obj.signature = message.signature);
    message.signedMessage !== undefined &&
      (obj.signedMessage = message.signedMessage);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgRemoveBinding>): MsgRemoveBinding {
    const message = { ...baseMsgRemoveBinding } as MsgRemoveBinding;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.ethAddress !== undefined && object.ethAddress !== null) {
      message.ethAddress = object.ethAddress;
    } else {
      message.ethAddress = "";
    }
    if (object.signature !== undefined && object.signature !== null) {
      message.signature = object.signature;
    } else {
      message.signature = "";
    }
    if (object.signedMessage !== undefined && object.signedMessage !== null) {
      message.signedMessage = object.signedMessage;
    } else {
      message.signedMessage = "";
    }
    return message;
  },
};

const baseMsgRemoveBindingResponse: object = {
  ethAddress: "",
  nativeAddress: "",
};

export const MsgRemoveBindingResponse = {
  encode(
    message: MsgRemoveBindingResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.ethAddress !== "") {
      writer.uint32(10).string(message.ethAddress);
    }
    if (message.nativeAddress !== "") {
      writer.uint32(18).string(message.nativeAddress);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgRemoveBindingResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgRemoveBindingResponse,
    } as MsgRemoveBindingResponse;
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

  fromJSON(object: any): MsgRemoveBindingResponse {
    const message = {
      ...baseMsgRemoveBindingResponse,
    } as MsgRemoveBindingResponse;
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

  toJSON(message: MsgRemoveBindingResponse): unknown {
    const obj: any = {};
    message.ethAddress !== undefined && (obj.ethAddress = message.ethAddress);
    message.nativeAddress !== undefined &&
      (obj.nativeAddress = message.nativeAddress);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgRemoveBindingResponse>
  ): MsgRemoveBindingResponse {
    const message = {
      ...baseMsgRemoveBindingResponse,
    } as MsgRemoveBindingResponse;
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

/** Msg defines the Msg service. */
export interface Msg {
  BindAddress(request: MsgBindAddress): Promise<MsgBindAddressResponse>;
  /** this line is used by starport scaffolding # proto/tx/rpc */
  RemoveBinding(request: MsgRemoveBinding): Promise<MsgRemoveBindingResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  BindAddress(request: MsgBindAddress): Promise<MsgBindAddressResponse> {
    const data = MsgBindAddress.encode(request).finish();
    const promise = this.rpc.request(
      "thesixnetwork.sixnft.evmsupport.Msg",
      "BindAddress",
      data
    );
    return promise.then((data) =>
      MsgBindAddressResponse.decode(new Reader(data))
    );
  }

  RemoveBinding(request: MsgRemoveBinding): Promise<MsgRemoveBindingResponse> {
    const data = MsgRemoveBinding.encode(request).finish();
    const promise = this.rpc.request(
      "thesixnetwork.sixnft.evmsupport.Msg",
      "RemoveBinding",
      data
    );
    return promise.then((data) =>
      MsgRemoveBindingResponse.decode(new Reader(data))
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
