// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { StdFee } from "@cosmjs/launchpad";
import { SigningStargateClient, SigningStargateClientOptions} from "@cosmjs/stargate";
import { Registry, OfflineSigner, EncodeObject, DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgBurn } from "./types/tokenmngr/v2/tx";
import { MsgCreateMintperm } from "./types/tokenmngr/v2/tx";
import { MsgCreateOptions } from "./types/tokenmngr/v2/tx";
import { MsgDeleteOptions } from "./types/tokenmngr/v2/tx";
import { MsgDeleteToken } from "./types/tokenmngr/v2/tx";
import { MsgUnwrapToken } from "./types/tokenmngr/v2/tx";
import { MsgUpdateToken } from "./types/tokenmngr/v2/tx";
import { MsgUpdateOptions } from "./types/tokenmngr/v2/tx";
import { MsgSendWrapToken } from "./types/tokenmngr/v2/tx";
import { MsgCreateToken } from "./types/tokenmngr/v2/tx";
import { MsgDeleteMintperm } from "./types/tokenmngr/v2/tx";
import { MsgMint } from "./types/tokenmngr/v2/tx";
import { MsgWrapToken } from "./types/tokenmngr/v2/tx";
import { MsgUpdateMintperm } from "./types/tokenmngr/v2/tx";


const types = [
  ["/thesixnetwork.sixprotocol.tokenmngr.v2.MsgBurn", MsgBurn],
  ["/thesixnetwork.sixprotocol.tokenmngr.v2.MsgCreateMintperm", MsgCreateMintperm],
  ["/thesixnetwork.sixprotocol.tokenmngr.v2.MsgCreateOptions", MsgCreateOptions],
  ["/thesixnetwork.sixprotocol.tokenmngr.v2.MsgDeleteOptions", MsgDeleteOptions],
  ["/thesixnetwork.sixprotocol.tokenmngr.v2.MsgDeleteToken", MsgDeleteToken],
  ["/thesixnetwork.sixprotocol.tokenmngr.v2.MsgUnwrapToken", MsgUnwrapToken],
  ["/thesixnetwork.sixprotocol.tokenmngr.v2.MsgUpdateToken", MsgUpdateToken],
  ["/thesixnetwork.sixprotocol.tokenmngr.v2.MsgUpdateOptions", MsgUpdateOptions],
  ["/thesixnetwork.sixprotocol.tokenmngr.v2.MsgSendWrapToken", MsgSendWrapToken],
  ["/thesixnetwork.sixprotocol.tokenmngr.v2.MsgCreateToken", MsgCreateToken],
  ["/thesixnetwork.sixprotocol.tokenmngr.v2.MsgDeleteMintperm", MsgDeleteMintperm],
  ["/thesixnetwork.sixprotocol.tokenmngr.v2.MsgMint", MsgMint],
  ["/thesixnetwork.sixprotocol.tokenmngr.v2.MsgWrapToken", MsgWrapToken],
  ["/thesixnetwork.sixprotocol.tokenmngr.v2.MsgUpdateMintperm", MsgUpdateMintperm],
  
];
export const MissingWalletError = new Error("wallet is required");

export const registry = new Registry(<any>types);

const defaultFee = {
  amount: [],
  gas: "200000",
};

interface TxClientOptions {
  addr: string
}

export interface SignAndBroadcastOptions {
  fee: StdFee | "auto",
  memo?: string
}

const txClient = async (wallet: OfflineSigner, { addr: addr }: TxClientOptions = { addr: "http://localhost:26657" }, options?: SigningStargateClientOptions) => {
  if (!wallet) throw MissingWalletError;
  let client;
  if (addr) {
    client = await SigningStargateClient.connectWithSigner(addr, wallet, { registry, ...options});
  }else{
    client = await SigningStargateClient.offline( wallet, { registry });
  }
  const { address } = (await wallet.getAccounts())[0];

  return {
    signAndBroadcast: (msgs: EncodeObject[], { fee, memo }: SignAndBroadcastOptions = {fee: defaultFee, memo: ""}) => client.signAndBroadcast(address, msgs, fee,memo),
    msgBurn: (data: MsgBurn): EncodeObject => ({ typeUrl: "/thesixnetwork.sixprotocol.tokenmngr.v2.MsgBurn", value: MsgBurn.fromPartial( data ) }),
    msgCreateMintperm: (data: MsgCreateMintperm): EncodeObject => ({ typeUrl: "/thesixnetwork.sixprotocol.tokenmngr.v2.MsgCreateMintperm", value: MsgCreateMintperm.fromPartial( data ) }),
    msgCreateOptions: (data: MsgCreateOptions): EncodeObject => ({ typeUrl: "/thesixnetwork.sixprotocol.tokenmngr.v2.MsgCreateOptions", value: MsgCreateOptions.fromPartial( data ) }),
    msgDeleteOptions: (data: MsgDeleteOptions): EncodeObject => ({ typeUrl: "/thesixnetwork.sixprotocol.tokenmngr.v2.MsgDeleteOptions", value: MsgDeleteOptions.fromPartial( data ) }),
    msgDeleteToken: (data: MsgDeleteToken): EncodeObject => ({ typeUrl: "/thesixnetwork.sixprotocol.tokenmngr.v2.MsgDeleteToken", value: MsgDeleteToken.fromPartial( data ) }),
    msgUnwrapToken: (data: MsgUnwrapToken): EncodeObject => ({ typeUrl: "/thesixnetwork.sixprotocol.tokenmngr.v2.MsgUnwrapToken", value: MsgUnwrapToken.fromPartial( data ) }),
    msgUpdateToken: (data: MsgUpdateToken): EncodeObject => ({ typeUrl: "/thesixnetwork.sixprotocol.tokenmngr.v2.MsgUpdateToken", value: MsgUpdateToken.fromPartial( data ) }),
    msgUpdateOptions: (data: MsgUpdateOptions): EncodeObject => ({ typeUrl: "/thesixnetwork.sixprotocol.tokenmngr.v2.MsgUpdateOptions", value: MsgUpdateOptions.fromPartial( data ) }),
    msgSendWrapToken: (data: MsgSendWrapToken): EncodeObject => ({ typeUrl: "/thesixnetwork.sixprotocol.tokenmngr.v2.MsgSendWrapToken", value: MsgSendWrapToken.fromPartial( data ) }),
    msgCreateToken: (data: MsgCreateToken): EncodeObject => ({ typeUrl: "/thesixnetwork.sixprotocol.tokenmngr.v2.MsgCreateToken", value: MsgCreateToken.fromPartial( data ) }),
    msgDeleteMintperm: (data: MsgDeleteMintperm): EncodeObject => ({ typeUrl: "/thesixnetwork.sixprotocol.tokenmngr.v2.MsgDeleteMintperm", value: MsgDeleteMintperm.fromPartial( data ) }),
    msgMint: (data: MsgMint): EncodeObject => ({ typeUrl: "/thesixnetwork.sixprotocol.tokenmngr.v2.MsgMint", value: MsgMint.fromPartial( data ) }),
    msgWrapToken: (data: MsgWrapToken): EncodeObject => ({ typeUrl: "/thesixnetwork.sixprotocol.tokenmngr.v2.MsgWrapToken", value: MsgWrapToken.fromPartial( data ) }),
    msgUpdateMintperm: (data: MsgUpdateMintperm): EncodeObject => ({ typeUrl: "/thesixnetwork.sixprotocol.tokenmngr.v2.MsgUpdateMintperm", value: MsgUpdateMintperm.fromPartial( data ) }),
    
  };
};

interface QueryClientOptions {
  addr: string
}

const queryClient = async ({ addr: addr }: QueryClientOptions = { addr: "http://localhost:1317" }) => {
  return new Api({ baseUrl: addr });
};

export {
  txClient,
  queryClient,
};
