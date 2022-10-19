// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { StdFee } from "@cosmjs/launchpad";
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry, OfflineSigner, EncodeObject, DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgSubmitVerifyCollectionOwner } from "./types/nftoracle/tx";
import { MsgCreateVerifyCollectionOwnerRequest } from "./types/nftoracle/tx";
import { MsgSubmitMintResponse } from "./types/nftoracle/tx";
import { MsgSetMinimumConfirmation } from "./types/nftoracle/tx";
import { MsgCreateActionRequest } from "./types/nftoracle/tx";
import { MsgCreateMintRequest } from "./types/nftoracle/tx";
import { MsgSubmitActionResponse } from "./types/nftoracle/tx";


const types = [
  ["/thesixnetwork.sixnft.nftoracle.MsgSubmitVerifyCollectionOwner", MsgSubmitVerifyCollectionOwner],
  ["/thesixnetwork.sixnft.nftoracle.MsgCreateVerifyCollectionOwnerRequest", MsgCreateVerifyCollectionOwnerRequest],
  ["/thesixnetwork.sixnft.nftoracle.MsgSubmitMintResponse", MsgSubmitMintResponse],
  ["/thesixnetwork.sixnft.nftoracle.MsgSetMinimumConfirmation", MsgSetMinimumConfirmation],
  ["/thesixnetwork.sixnft.nftoracle.MsgCreateActionRequest", MsgCreateActionRequest],
  ["/thesixnetwork.sixnft.nftoracle.MsgCreateMintRequest", MsgCreateMintRequest],
  ["/thesixnetwork.sixnft.nftoracle.MsgSubmitActionResponse", MsgSubmitActionResponse],
  
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
    msgSubmitVerifyCollectionOwner: (data: MsgSubmitVerifyCollectionOwner): EncodeObject => ({ typeUrl: "/thesixnetwork.sixnft.nftoracle.MsgSubmitVerifyCollectionOwner", value: MsgSubmitVerifyCollectionOwner.fromPartial( data ) }),
    msgCreateVerifyCollectionOwnerRequest: (data: MsgCreateVerifyCollectionOwnerRequest): EncodeObject => ({ typeUrl: "/thesixnetwork.sixnft.nftoracle.MsgCreateVerifyCollectionOwnerRequest", value: MsgCreateVerifyCollectionOwnerRequest.fromPartial( data ) }),
    msgSubmitMintResponse: (data: MsgSubmitMintResponse): EncodeObject => ({ typeUrl: "/thesixnetwork.sixnft.nftoracle.MsgSubmitMintResponse", value: MsgSubmitMintResponse.fromPartial( data ) }),
    msgSetMinimumConfirmation: (data: MsgSetMinimumConfirmation): EncodeObject => ({ typeUrl: "/thesixnetwork.sixnft.nftoracle.MsgSetMinimumConfirmation", value: MsgSetMinimumConfirmation.fromPartial( data ) }),
    msgCreateActionRequest: (data: MsgCreateActionRequest): EncodeObject => ({ typeUrl: "/thesixnetwork.sixnft.nftoracle.MsgCreateActionRequest", value: MsgCreateActionRequest.fromPartial( data ) }),
    msgCreateMintRequest: (data: MsgCreateMintRequest): EncodeObject => ({ typeUrl: "/thesixnetwork.sixnft.nftoracle.MsgCreateMintRequest", value: MsgCreateMintRequest.fromPartial( data ) }),
    msgSubmitActionResponse: (data: MsgSubmitActionResponse): EncodeObject => ({ typeUrl: "/thesixnetwork.sixnft.nftoracle.MsgSubmitActionResponse", value: MsgSubmitActionResponse.fromPartial( data ) }),
    
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
