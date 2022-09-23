// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { StdFee } from "@cosmjs/launchpad";
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry, OfflineSigner, EncodeObject, DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgSubmitMintResponse } from "./types/nftoracle/tx";
import { MsgCreateMintRequest } from "./types/nftoracle/tx";
import { MsgSubmitActionResponse } from "./types/nftoracle/tx";
import { MsgCreateActionRequest } from "./types/nftoracle/tx";


const types = [
  ["/sixnft.nftoracle.MsgSubmitMintResponse", MsgSubmitMintResponse],
  ["/sixnft.nftoracle.MsgCreateMintRequest", MsgCreateMintRequest],
  ["/sixnft.nftoracle.MsgSubmitActionResponse", MsgSubmitActionResponse],
  ["/sixnft.nftoracle.MsgCreateActionRequest", MsgCreateActionRequest],
  
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
  fee: StdFee,
  memo?: string
}

const txClient = async (wallet: OfflineSigner, { addr: addr }: TxClientOptions = { addr: "http://localhost:26657" }) => {
  if (!wallet) throw MissingWalletError;
  let client;
  if (addr) {
    client = await SigningStargateClient.connectWithSigner(addr, wallet, { registry });
  }else{
    client = await SigningStargateClient.offline( wallet, { registry });
  }
  const { address } = (await wallet.getAccounts())[0];

  return {
    signAndBroadcast: (msgs: EncodeObject[], { fee, memo }: SignAndBroadcastOptions = {fee: defaultFee, memo: ""}) => client.signAndBroadcast(address, msgs, fee,memo),
    msgSubmitMintResponse: (data: MsgSubmitMintResponse): EncodeObject => ({ typeUrl: "/sixnft.nftoracle.MsgSubmitMintResponse", value: MsgSubmitMintResponse.fromPartial( data ) }),
    msgCreateMintRequest: (data: MsgCreateMintRequest): EncodeObject => ({ typeUrl: "/sixnft.nftoracle.MsgCreateMintRequest", value: MsgCreateMintRequest.fromPartial( data ) }),
    msgSubmitActionResponse: (data: MsgSubmitActionResponse): EncodeObject => ({ typeUrl: "/sixnft.nftoracle.MsgSubmitActionResponse", value: MsgSubmitActionResponse.fromPartial( data ) }),
    msgCreateActionRequest: (data: MsgCreateActionRequest): EncodeObject => ({ typeUrl: "/sixnft.nftoracle.MsgCreateActionRequest", value: MsgCreateActionRequest.fromPartial( data ) }),
    
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
