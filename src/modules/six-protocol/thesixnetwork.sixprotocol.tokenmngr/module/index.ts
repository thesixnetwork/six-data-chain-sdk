// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { StdFee } from "@cosmjs/launchpad";
import { SigningStargateClient, SigningStargateClientOptions} from "@cosmjs/stargate";
import { Registry, OfflineSigner, EncodeObject, DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgDeleteOptions } from "./types/tokenmngr/tx";
import { MsgUpdateOptions } from "./types/tokenmngr/tx";
import { MsgUnwrapToken } from "./types/tokenmngr/tx";
import { MsgEnableContractConverter } from "./types/tokenmngr/tx";
import { MsgDeleteMintperm } from "./types/tokenmngr/tx";
import { MsgMint } from "./types/tokenmngr/tx";
import { MsgSendWrapToken } from "./types/tokenmngr/tx";
import { MsgBurn } from "./types/tokenmngr/tx";
import { MsgWrapToken } from "./types/tokenmngr/tx";
import { MsgCreateMintperm } from "./types/tokenmngr/tx";
import { MsgCreateToken } from "./types/tokenmngr/tx";
import { MsgCreateOptions } from "./types/tokenmngr/tx";
import { MsgUpdateMintperm } from "./types/tokenmngr/tx";
import { MsgSetConverterParams } from "./types/tokenmngr/tx";
import { MsgUpdateToken } from "./types/tokenmngr/tx";
import { MsgDeleteToken } from "./types/tokenmngr/tx";


const types = [
  ["/thesixnetwork.sixprotocol.tokenmngr.MsgDeleteOptions", MsgDeleteOptions],
  ["/thesixnetwork.sixprotocol.tokenmngr.MsgUpdateOptions", MsgUpdateOptions],
  ["/thesixnetwork.sixprotocol.tokenmngr.MsgUnwrapToken", MsgUnwrapToken],
  ["/thesixnetwork.sixprotocol.tokenmngr.MsgEnableContractConverter", MsgEnableContractConverter],
  ["/thesixnetwork.sixprotocol.tokenmngr.MsgDeleteMintperm", MsgDeleteMintperm],
  ["/thesixnetwork.sixprotocol.tokenmngr.MsgMint", MsgMint],
  ["/thesixnetwork.sixprotocol.tokenmngr.MsgSendWrapToken", MsgSendWrapToken],
  ["/thesixnetwork.sixprotocol.tokenmngr.MsgBurn", MsgBurn],
  ["/thesixnetwork.sixprotocol.tokenmngr.MsgWrapToken", MsgWrapToken],
  ["/thesixnetwork.sixprotocol.tokenmngr.MsgCreateMintperm", MsgCreateMintperm],
  ["/thesixnetwork.sixprotocol.tokenmngr.MsgCreateToken", MsgCreateToken],
  ["/thesixnetwork.sixprotocol.tokenmngr.MsgCreateOptions", MsgCreateOptions],
  ["/thesixnetwork.sixprotocol.tokenmngr.MsgUpdateMintperm", MsgUpdateMintperm],
  ["/thesixnetwork.sixprotocol.tokenmngr.MsgSetConverterParams", MsgSetConverterParams],
  ["/thesixnetwork.sixprotocol.tokenmngr.MsgUpdateToken", MsgUpdateToken],
  ["/thesixnetwork.sixprotocol.tokenmngr.MsgDeleteToken", MsgDeleteToken],
  
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
    msgDeleteOptions: (data: MsgDeleteOptions): EncodeObject => ({ typeUrl: "/thesixnetwork.sixprotocol.tokenmngr.MsgDeleteOptions", value: MsgDeleteOptions.fromPartial( data ) }),
    msgUpdateOptions: (data: MsgUpdateOptions): EncodeObject => ({ typeUrl: "/thesixnetwork.sixprotocol.tokenmngr.MsgUpdateOptions", value: MsgUpdateOptions.fromPartial( data ) }),
    msgUnwrapToken: (data: MsgUnwrapToken): EncodeObject => ({ typeUrl: "/thesixnetwork.sixprotocol.tokenmngr.MsgUnwrapToken", value: MsgUnwrapToken.fromPartial( data ) }),
    msgEnableContractConverter: (data: MsgEnableContractConverter): EncodeObject => ({ typeUrl: "/thesixnetwork.sixprotocol.tokenmngr.MsgEnableContractConverter", value: MsgEnableContractConverter.fromPartial( data ) }),
    msgDeleteMintperm: (data: MsgDeleteMintperm): EncodeObject => ({ typeUrl: "/thesixnetwork.sixprotocol.tokenmngr.MsgDeleteMintperm", value: MsgDeleteMintperm.fromPartial( data ) }),
    msgMint: (data: MsgMint): EncodeObject => ({ typeUrl: "/thesixnetwork.sixprotocol.tokenmngr.MsgMint", value: MsgMint.fromPartial( data ) }),
    msgSendWrapToken: (data: MsgSendWrapToken): EncodeObject => ({ typeUrl: "/thesixnetwork.sixprotocol.tokenmngr.MsgSendWrapToken", value: MsgSendWrapToken.fromPartial( data ) }),
    msgBurn: (data: MsgBurn): EncodeObject => ({ typeUrl: "/thesixnetwork.sixprotocol.tokenmngr.MsgBurn", value: MsgBurn.fromPartial( data ) }),
    msgWrapToken: (data: MsgWrapToken): EncodeObject => ({ typeUrl: "/thesixnetwork.sixprotocol.tokenmngr.MsgWrapToken", value: MsgWrapToken.fromPartial( data ) }),
    msgCreateMintperm: (data: MsgCreateMintperm): EncodeObject => ({ typeUrl: "/thesixnetwork.sixprotocol.tokenmngr.MsgCreateMintperm", value: MsgCreateMintperm.fromPartial( data ) }),
    msgCreateToken: (data: MsgCreateToken): EncodeObject => ({ typeUrl: "/thesixnetwork.sixprotocol.tokenmngr.MsgCreateToken", value: MsgCreateToken.fromPartial( data ) }),
    msgCreateOptions: (data: MsgCreateOptions): EncodeObject => ({ typeUrl: "/thesixnetwork.sixprotocol.tokenmngr.MsgCreateOptions", value: MsgCreateOptions.fromPartial( data ) }),
    msgUpdateMintperm: (data: MsgUpdateMintperm): EncodeObject => ({ typeUrl: "/thesixnetwork.sixprotocol.tokenmngr.MsgUpdateMintperm", value: MsgUpdateMintperm.fromPartial( data ) }),
    msgSetConverterParams: (data: MsgSetConverterParams): EncodeObject => ({ typeUrl: "/thesixnetwork.sixprotocol.tokenmngr.MsgSetConverterParams", value: MsgSetConverterParams.fromPartial( data ) }),
    msgUpdateToken: (data: MsgUpdateToken): EncodeObject => ({ typeUrl: "/thesixnetwork.sixprotocol.tokenmngr.MsgUpdateToken", value: MsgUpdateToken.fromPartial( data ) }),
    msgDeleteToken: (data: MsgDeleteToken): EncodeObject => ({ typeUrl: "/thesixnetwork.sixprotocol.tokenmngr.MsgDeleteToken", value: MsgDeleteToken.fromPartial( data ) }),
    
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
