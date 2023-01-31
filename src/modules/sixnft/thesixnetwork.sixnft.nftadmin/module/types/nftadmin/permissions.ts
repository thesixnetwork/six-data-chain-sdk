/* eslint-disable */
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "thesixnetwork.sixnft.nftadmin";

export interface AddressList {
  addresses: string[];
}

export interface Permission {
  name: string;
  addresses: AddressList | undefined;
}

export interface Permissions {
  permissions: Permission[];
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

const basePermission: object = { name: "" };

export const Permission = {
  encode(message: Permission, writer: Writer = Writer.create()): Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.addresses !== undefined) {
      AddressList.encode(message.addresses, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Permission {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basePermission } as Permission;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.addresses = AddressList.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Permission {
    const message = { ...basePermission } as Permission;
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    if (object.addresses !== undefined && object.addresses !== null) {
      message.addresses = AddressList.fromJSON(object.addresses);
    } else {
      message.addresses = undefined;
    }
    return message;
  },

  toJSON(message: Permission): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.addresses !== undefined &&
      (obj.addresses = message.addresses
        ? AddressList.toJSON(message.addresses)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<Permission>): Permission {
    const message = { ...basePermission } as Permission;
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    if (object.addresses !== undefined && object.addresses !== null) {
      message.addresses = AddressList.fromPartial(object.addresses);
    } else {
      message.addresses = undefined;
    }
    return message;
  },
};

const basePermissions: object = {};

export const Permissions = {
  encode(message: Permissions, writer: Writer = Writer.create()): Writer {
    for (const v of message.permissions) {
      Permission.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Permissions {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basePermissions } as Permissions;
    message.permissions = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.permissions.push(Permission.decode(reader, reader.uint32()));
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
    message.permissions = [];
    if (object.permissions !== undefined && object.permissions !== null) {
      for (const e of object.permissions) {
        message.permissions.push(Permission.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: Permissions): unknown {
    const obj: any = {};
    if (message.permissions) {
      obj.permissions = message.permissions.map((e) =>
        e ? Permission.toJSON(e) : undefined
      );
    } else {
      obj.permissions = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<Permissions>): Permissions {
    const message = { ...basePermissions } as Permissions;
    message.permissions = [];
    if (object.permissions !== undefined && object.permissions !== null) {
      for (const e of object.permissions) {
        message.permissions.push(Permission.fromPartial(e));
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
