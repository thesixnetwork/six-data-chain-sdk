/* eslint-disable */
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "thesixnetwork.sixnft.nftadmin";

export interface AddressList {
  addresses: string[];
}

export interface Permissions {
  map_name: { [key: string]: AddressList };
}

export interface Permissions_MapNameEntry {
  key: string;
  value: AddressList | undefined;
}

const baseAddressList: object = { addresses: "" };

export const AddressList = {
  encode(message: AddressList, writer: Writer = Writer.create()): Writer {
    for (const v of message.addresses) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): AddressList {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseAddressList } as AddressList;
    message.addresses = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.addresses.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AddressList {
    const message = { ...baseAddressList } as AddressList;
    message.addresses = [];
    if (object.addresses !== undefined && object.addresses !== null) {
      for (const e of object.addresses) {
        message.addresses.push(String(e));
      }
    }
    return message;
  },

  toJSON(message: AddressList): unknown {
    const obj: any = {};
    if (message.addresses) {
      obj.addresses = message.addresses.map((e) => e);
    } else {
      obj.addresses = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<AddressList>): AddressList {
    const message = { ...baseAddressList } as AddressList;
    message.addresses = [];
    if (object.addresses !== undefined && object.addresses !== null) {
      for (const e of object.addresses) {
        message.addresses.push(e);
      }
    }
    return message;
  },
};

const basePermissions: object = {};

export const Permissions = {
  encode(message: Permissions, writer: Writer = Writer.create()): Writer {
    Object.entries(message.map_name).forEach(([key, value]) => {
      Permissions_MapNameEntry.encode(
        { key: key as any, value },
        writer.uint32(10).fork()
      ).ldelim();
    });
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Permissions {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basePermissions } as Permissions;
    message.map_name = {};
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          const entry1 = Permissions_MapNameEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry1.value !== undefined) {
            message.map_name[entry1.key] = entry1.value;
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Permissions {
    const message = { ...basePermissions } as Permissions;
    message.map_name = {};
    if (object.map_name !== undefined && object.map_name !== null) {
      Object.entries(object.map_name).forEach(([key, value]) => {
        message.map_name[key] = AddressList.fromJSON(value);
      });
    }
    return message;
  },

  toJSON(message: Permissions): unknown {
    const obj: any = {};
    obj.map_name = {};
    if (message.map_name) {
      Object.entries(message.map_name).forEach(([k, v]) => {
        obj.map_name[k] = AddressList.toJSON(v);
      });
    }
    return obj;
  },

  fromPartial(object: DeepPartial<Permissions>): Permissions {
    const message = { ...basePermissions } as Permissions;
    message.map_name = {};
    if (object.map_name !== undefined && object.map_name !== null) {
      Object.entries(object.map_name).forEach(([key, value]) => {
        if (value !== undefined) {
          message.map_name[key] = AddressList.fromPartial(value);
        }
      });
    }
    return message;
  },
};

const basePermissions_MapNameEntry: object = { key: "" };

export const Permissions_MapNameEntry = {
  encode(
    message: Permissions_MapNameEntry,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      AddressList.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): Permissions_MapNameEntry {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...basePermissions_MapNameEntry,
    } as Permissions_MapNameEntry;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = AddressList.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Permissions_MapNameEntry {
    const message = {
      ...basePermissions_MapNameEntry,
    } as Permissions_MapNameEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = String(object.key);
    } else {
      message.key = "";
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = AddressList.fromJSON(object.value);
    } else {
      message.value = undefined;
    }
    return message;
  },

  toJSON(message: Permissions_MapNameEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined &&
      (obj.value = message.value
        ? AddressList.toJSON(message.value)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<Permissions_MapNameEntry>
  ): Permissions_MapNameEntry {
    const message = {
      ...basePermissions_MapNameEntry,
    } as Permissions_MapNameEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    } else {
      message.key = "";
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = AddressList.fromPartial(object.value);
    } else {
      message.value = undefined;
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
