/* eslint-disable */
import { Metadata } from "../../../cosmos/bank/v1beta1/bank";
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "evmos.erc20.v1";

/** Owner enumerates the ownership of a ERC20 contract. */
export enum Owner {
  /** OWNER_UNSPECIFIED - OWNER_UNSPECIFIED defines an invalid/undefined owner. */
  OWNER_UNSPECIFIED = 0,
  /** OWNER_MODULE - OWNER_MODULE erc20 is owned by the erc20 module account. */
  OWNER_MODULE = 1,
  /** OWNER_EXTERNAL - EXTERNAL erc20 is owned by an external account. */
  OWNER_EXTERNAL = 2,
  UNRECOGNIZED = -1,
}

export function ownerFromJSON(object: any): Owner {
  switch (object) {
    case 0:
    case "OWNER_UNSPECIFIED":
      return Owner.OWNER_UNSPECIFIED;
    case 1:
    case "OWNER_MODULE":
      return Owner.OWNER_MODULE;
    case 2:
    case "OWNER_EXTERNAL":
      return Owner.OWNER_EXTERNAL;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Owner.UNRECOGNIZED;
  }
}

export function ownerToJSON(object: Owner): string {
  switch (object) {
    case Owner.OWNER_UNSPECIFIED:
      return "OWNER_UNSPECIFIED";
    case Owner.OWNER_MODULE:
      return "OWNER_MODULE";
    case Owner.OWNER_EXTERNAL:
      return "OWNER_EXTERNAL";
    default:
      return "UNKNOWN";
  }
}

/**
 * TokenPair defines an instance that records a pairing consisting of a native
 *  Cosmos Coin and an ERC20 token address.
 */
export interface TokenPair {
  /** address of ERC20 contract token */
  erc20_address: string;
  /** cosmos base denomination to be mapped to */
  denom: string;
  /** shows token mapping enable status */
  enabled: boolean;
  /** ERC20 owner address ENUM (0 invalid, 1 ModuleAccount, 2 external address) */
  contract_owner: Owner;
}

/**
 * RegisterCoinProposal is a gov Content type to register a token pair for a
 * native Cosmos coin.
 */
export interface RegisterCoinProposal {
  /** title of the proposal */
  title: string;
  /** proposal description */
  description: string;
  /** metadata of the native Cosmos coin */
  metadata: Metadata | undefined;
}

/**
 * RegisterERC20Proposal is a gov Content type to register a token pair for an
 * ERC20 token
 */
export interface RegisterERC20Proposal {
  /** title of the proposal */
  title: string;
  /** proposal description */
  description: string;
  /** contract address of ERC20 token */
  erc20address: string;
}

/**
 * ToggleTokenConversionProposal is a gov Content type to toggle the conversion
 * of a token pair.
 */
export interface ToggleTokenConversionProposal {
  /** title of the proposal */
  title: string;
  /** proposal description */
  description: string;
  /**
   * token identifier can be either the hex contract address of the ERC20 or the
   * Cosmos base denomination
   */
  token: string;
}

const baseTokenPair: object = {
  erc20_address: "",
  denom: "",
  enabled: false,
  contract_owner: 0,
};

export const TokenPair = {
  encode(message: TokenPair, writer: Writer = Writer.create()): Writer {
    if (message.erc20_address !== "") {
      writer.uint32(10).string(message.erc20_address);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    if (message.enabled === true) {
      writer.uint32(24).bool(message.enabled);
    }
    if (message.contract_owner !== 0) {
      writer.uint32(32).int32(message.contract_owner);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): TokenPair {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseTokenPair } as TokenPair;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.erc20_address = reader.string();
          break;
        case 2:
          message.denom = reader.string();
          break;
        case 3:
          message.enabled = reader.bool();
          break;
        case 4:
          message.contract_owner = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TokenPair {
    const message = { ...baseTokenPair } as TokenPair;
    if (object.erc20_address !== undefined && object.erc20_address !== null) {
      message.erc20_address = String(object.erc20_address);
    } else {
      message.erc20_address = "";
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = String(object.denom);
    } else {
      message.denom = "";
    }
    if (object.enabled !== undefined && object.enabled !== null) {
      message.enabled = Boolean(object.enabled);
    } else {
      message.enabled = false;
    }
    if (object.contract_owner !== undefined && object.contract_owner !== null) {
      message.contract_owner = ownerFromJSON(object.contract_owner);
    } else {
      message.contract_owner = 0;
    }
    return message;
  },

  toJSON(message: TokenPair): unknown {
    const obj: any = {};
    message.erc20_address !== undefined &&
      (obj.erc20_address = message.erc20_address);
    message.denom !== undefined && (obj.denom = message.denom);
    message.enabled !== undefined && (obj.enabled = message.enabled);
    message.contract_owner !== undefined &&
      (obj.contract_owner = ownerToJSON(message.contract_owner));
    return obj;
  },

  fromPartial(object: DeepPartial<TokenPair>): TokenPair {
    const message = { ...baseTokenPair } as TokenPair;
    if (object.erc20_address !== undefined && object.erc20_address !== null) {
      message.erc20_address = object.erc20_address;
    } else {
      message.erc20_address = "";
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    } else {
      message.denom = "";
    }
    if (object.enabled !== undefined && object.enabled !== null) {
      message.enabled = object.enabled;
    } else {
      message.enabled = false;
    }
    if (object.contract_owner !== undefined && object.contract_owner !== null) {
      message.contract_owner = object.contract_owner;
    } else {
      message.contract_owner = 0;
    }
    return message;
  },
};

const baseRegisterCoinProposal: object = { title: "", description: "" };

export const RegisterCoinProposal = {
  encode(
    message: RegisterCoinProposal,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.metadata !== undefined) {
      Metadata.encode(message.metadata, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): RegisterCoinProposal {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseRegisterCoinProposal } as RegisterCoinProposal;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.metadata = Metadata.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RegisterCoinProposal {
    const message = { ...baseRegisterCoinProposal } as RegisterCoinProposal;
    if (object.title !== undefined && object.title !== null) {
      message.title = String(object.title);
    } else {
      message.title = "";
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = String(object.description);
    } else {
      message.description = "";
    }
    if (object.metadata !== undefined && object.metadata !== null) {
      message.metadata = Metadata.fromJSON(object.metadata);
    } else {
      message.metadata = undefined;
    }
    return message;
  },

  toJSON(message: RegisterCoinProposal): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined &&
      (obj.description = message.description);
    message.metadata !== undefined &&
      (obj.metadata = message.metadata
        ? Metadata.toJSON(message.metadata)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<RegisterCoinProposal>): RegisterCoinProposal {
    const message = { ...baseRegisterCoinProposal } as RegisterCoinProposal;
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    } else {
      message.title = "";
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    } else {
      message.description = "";
    }
    if (object.metadata !== undefined && object.metadata !== null) {
      message.metadata = Metadata.fromPartial(object.metadata);
    } else {
      message.metadata = undefined;
    }
    return message;
  },
};

const baseRegisterERC20Proposal: object = {
  title: "",
  description: "",
  erc20address: "",
};

export const RegisterERC20Proposal = {
  encode(
    message: RegisterERC20Proposal,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.erc20address !== "") {
      writer.uint32(26).string(message.erc20address);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): RegisterERC20Proposal {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseRegisterERC20Proposal } as RegisterERC20Proposal;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.erc20address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RegisterERC20Proposal {
    const message = { ...baseRegisterERC20Proposal } as RegisterERC20Proposal;
    if (object.title !== undefined && object.title !== null) {
      message.title = String(object.title);
    } else {
      message.title = "";
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = String(object.description);
    } else {
      message.description = "";
    }
    if (object.erc20address !== undefined && object.erc20address !== null) {
      message.erc20address = String(object.erc20address);
    } else {
      message.erc20address = "";
    }
    return message;
  },

  toJSON(message: RegisterERC20Proposal): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined &&
      (obj.description = message.description);
    message.erc20address !== undefined &&
      (obj.erc20address = message.erc20address);
    return obj;
  },

  fromPartial(
    object: DeepPartial<RegisterERC20Proposal>
  ): RegisterERC20Proposal {
    const message = { ...baseRegisterERC20Proposal } as RegisterERC20Proposal;
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    } else {
      message.title = "";
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    } else {
      message.description = "";
    }
    if (object.erc20address !== undefined && object.erc20address !== null) {
      message.erc20address = object.erc20address;
    } else {
      message.erc20address = "";
    }
    return message;
  },
};

const baseToggleTokenConversionProposal: object = {
  title: "",
  description: "",
  token: "",
};

export const ToggleTokenConversionProposal = {
  encode(
    message: ToggleTokenConversionProposal,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.token !== "") {
      writer.uint32(26).string(message.token);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): ToggleTokenConversionProposal {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseToggleTokenConversionProposal,
    } as ToggleTokenConversionProposal;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.token = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ToggleTokenConversionProposal {
    const message = {
      ...baseToggleTokenConversionProposal,
    } as ToggleTokenConversionProposal;
    if (object.title !== undefined && object.title !== null) {
      message.title = String(object.title);
    } else {
      message.title = "";
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = String(object.description);
    } else {
      message.description = "";
    }
    if (object.token !== undefined && object.token !== null) {
      message.token = String(object.token);
    } else {
      message.token = "";
    }
    return message;
  },

  toJSON(message: ToggleTokenConversionProposal): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined &&
      (obj.description = message.description);
    message.token !== undefined && (obj.token = message.token);
    return obj;
  },

  fromPartial(
    object: DeepPartial<ToggleTokenConversionProposal>
  ): ToggleTokenConversionProposal {
    const message = {
      ...baseToggleTokenConversionProposal,
    } as ToggleTokenConversionProposal;
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    } else {
      message.title = "";
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    } else {
      message.description = "";
    }
    if (object.token !== undefined && object.token !== null) {
      message.token = object.token;
    } else {
      message.token = "";
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
