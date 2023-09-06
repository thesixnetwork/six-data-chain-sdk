/* eslint-disable */
import { Params } from "../tokenmngr/params";
import { Token } from "../tokenmngr/token";
import { Mintperm } from "../tokenmngr/mintperm";
import { Options } from "../tokenmngr/options";
import { TokenBurn } from "../tokenmngr/token_burn";
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "thesixnetwork.sixprotocol.tokenmngr";

/** GenesisState defines the tokenmngr module's genesis state. */
export interface GenesisState {
  params: Params | undefined;
  port_id: string;
  tokenList: Token[];
  mintpermList: Mintperm[];
  options: Options | undefined;
  /** this line is used by starport scaffolding # genesis/proto/state */
  tokenBurnList: TokenBurn[];
}

const baseGenesisState: object = { port_id: "" };

export const GenesisState = {
  encode(message: GenesisState, writer: Writer = Writer.create()): Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    if (message.port_id !== "") {
      writer.uint32(18).string(message.port_id);
    }
    for (const v of message.tokenList) {
      Token.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.mintpermList) {
      Mintperm.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.options !== undefined) {
      Options.encode(message.options, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.tokenBurnList) {
      TokenBurn.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGenesisState } as GenesisState;
    message.tokenList = [];
    message.mintpermList = [];
    message.tokenBurnList = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.port_id = reader.string();
          break;
        case 3:
          message.tokenList.push(Token.decode(reader, reader.uint32()));
          break;
        case 4:
          message.mintpermList.push(Mintperm.decode(reader, reader.uint32()));
          break;
        case 6:
          message.options = Options.decode(reader, reader.uint32());
          break;
        case 7:
          message.tokenBurnList.push(TokenBurn.decode(reader, reader.uint32()));
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
    message.tokenList = [];
    message.mintpermList = [];
    message.tokenBurnList = [];
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromJSON(object.params);
    } else {
      message.params = undefined;
    }
    if (object.port_id !== undefined && object.port_id !== null) {
      message.port_id = String(object.port_id);
    } else {
      message.port_id = "";
    }
    if (object.tokenList !== undefined && object.tokenList !== null) {
      for (const e of object.tokenList) {
        message.tokenList.push(Token.fromJSON(e));
      }
    }
    if (object.mintpermList !== undefined && object.mintpermList !== null) {
      for (const e of object.mintpermList) {
        message.mintpermList.push(Mintperm.fromJSON(e));
      }
    }
    if (object.options !== undefined && object.options !== null) {
      message.options = Options.fromJSON(object.options);
    } else {
      message.options = undefined;
    }
    if (object.tokenBurnList !== undefined && object.tokenBurnList !== null) {
      for (const e of object.tokenBurnList) {
        message.tokenBurnList.push(TokenBurn.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    message.port_id !== undefined && (obj.port_id = message.port_id);
    if (message.tokenList) {
      obj.tokenList = message.tokenList.map((e) =>
        e ? Token.toJSON(e) : undefined
      );
    } else {
      obj.tokenList = [];
    }
    if (message.mintpermList) {
      obj.mintpermList = message.mintpermList.map((e) =>
        e ? Mintperm.toJSON(e) : undefined
      );
    } else {
      obj.mintpermList = [];
    }
    message.options !== undefined &&
      (obj.options = message.options
        ? Options.toJSON(message.options)
        : undefined);
    if (message.tokenBurnList) {
      obj.tokenBurnList = message.tokenBurnList.map((e) =>
        e ? TokenBurn.toJSON(e) : undefined
      );
    } else {
      obj.tokenBurnList = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
    message.tokenList = [];
    message.mintpermList = [];
    message.tokenBurnList = [];
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    } else {
      message.params = undefined;
    }
    if (object.port_id !== undefined && object.port_id !== null) {
      message.port_id = object.port_id;
    } else {
      message.port_id = "";
    }
    if (object.tokenList !== undefined && object.tokenList !== null) {
      for (const e of object.tokenList) {
        message.tokenList.push(Token.fromPartial(e));
      }
    }
    if (object.mintpermList !== undefined && object.mintpermList !== null) {
      for (const e of object.mintpermList) {
        message.mintpermList.push(Mintperm.fromPartial(e));
      }
    }
    if (object.options !== undefined && object.options !== null) {
      message.options = Options.fromPartial(object.options);
    } else {
      message.options = undefined;
    }
    if (object.tokenBurnList !== undefined && object.tokenBurnList !== null) {
      for (const e of object.tokenBurnList) {
        message.tokenBurnList.push(TokenBurn.fromPartial(e));
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
