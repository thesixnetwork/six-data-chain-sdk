// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { StdFee } from "@cosmjs/launchpad";
import { SigningStargateClient, SigningStargateClientOptions} from "@cosmjs/stargate";
import { Registry, OfflineSigner, EncodeObject, DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgCreateMintRequest } from "./types/nftoracle/tx";
import { MsgCreateActionSigner } from "./types/nftoracle/tx";
import { MsgDeleteActionSigner } from "./types/nftoracle/tx";
import { MsgCreateVerifyCollectionOwnerRequest } from "./types/nftoracle/tx";
import { MsgUpdateActionSignerConfig } from "./types/nftoracle/tx";
import { MsgSetMinimumConfirmation } from "./types/nftoracle/tx";
import { MsgCreateActionRequest } from "./types/nftoracle/tx";
import { MsgCreateActionSignerConfig } from "./types/nftoracle/tx";
import { MsgCreateSyncActionSigner } from "./types/nftoracle/tx";
import { MsgSubmitMintResponse } from "./types/nftoracle/tx";
import { MsgSubmitVerifyCollectionOwner } from "./types/nftoracle/tx";
import { MsgSubmitSyncActionSigner } from "./types/nftoracle/tx";
import { MsgUpdateActionSigner } from "./types/nftoracle/tx";
import { MsgDeleteActionSignerConfig } from "./types/nftoracle/tx";
import { MsgSubmitActionResponse } from "./types/nftoracle/tx";


const types = [
  ["/thesixnetwork.sixnft.nftoracle.MsgCreateMintRequest", MsgCreateMintRequest],
  ["/thesixnetwork.sixnft.nftoracle.MsgCreateActionSigner", MsgCreateActionSigner],
  ["/thesixnetwork.sixnft.nftoracle.MsgDeleteActionSigner", MsgDeleteActionSigner],
  ["/thesixnetwork.sixnft.nftoracle.MsgCreateVerifyCollectionOwnerRequest", MsgCreateVerifyCollectionOwnerRequest],
  ["/thesixnetwork.sixnft.nftoracle.MsgUpdateActionSignerConfig", MsgUpdateActionSignerConfig],
  ["/thesixnetwork.sixnft.nftoracle.MsgSetMinimumConfirmation", MsgSetMinimumConfirmation],
  ["/thesixnetwork.sixnft.nftoracle.MsgCreateActionRequest", MsgCreateActionRequest],
  ["/thesixnetwork.sixnft.nftoracle.MsgCreateActionSignerConfig", MsgCreateActionSignerConfig],
  ["/thesixnetwork.sixnft.nftoracle.MsgCreateSyncActionSigner", MsgCreateSyncActionSigner],
  ["/thesixnetwork.sixnft.nftoracle.MsgSubmitMintResponse", MsgSubmitMintResponse],
  ["/thesixnetwork.sixnft.nftoracle.MsgSubmitVerifyCollectionOwner", MsgSubmitVerifyCollectionOwner],
  ["/thesixnetwork.sixnft.nftoracle.MsgSubmitSyncActionSigner", MsgSubmitSyncActionSigner],
  ["/thesixnetwork.sixnft.nftoracle.MsgUpdateActionSigner", MsgUpdateActionSigner],
  ["/thesixnetwork.sixnft.nftoracle.MsgDeleteActionSignerConfig", MsgDeleteActionSignerConfig],
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
    msgCreateMintRequest: (data: MsgCreateMintRequest): EncodeObject => ({ typeUrl: "/thesixnetwork.sixnft.nftoracle.MsgCreateMintRequest", value: MsgCreateMintRequest.fromPartial( data ) }),
    msgCreateActionSigner: (data: MsgCreateActionSigner): EncodeObject => ({ typeUrl: "/thesixnetwork.sixnft.nftoracle.MsgCreateActionSigner", value: MsgCreateActionSigner.fromPartial( data ) }),
    msgDeleteActionSigner: (data: MsgDeleteActionSigner): EncodeObject => ({ typeUrl: "/thesixnetwork.sixnft.nftoracle.MsgDeleteActionSigner", value: MsgDeleteActionSigner.fromPartial( data ) }),
    msgCreateVerifyCollectionOwnerRequest: (data: MsgCreateVerifyCollectionOwnerRequest): EncodeObject => ({ typeUrl: "/thesixnetwork.sixnft.nftoracle.MsgCreateVerifyCollectionOwnerRequest", value: MsgCreateVerifyCollectionOwnerRequest.fromPartial( data ) }),
    msgUpdateActionSignerConfig: (data: MsgUpdateActionSignerConfig): EncodeObject => ({ typeUrl: "/thesixnetwork.sixnft.nftoracle.MsgUpdateActionSignerConfig", value: MsgUpdateActionSignerConfig.fromPartial( data ) }),
    msgSetMinimumConfirmation: (data: MsgSetMinimumConfirmation): EncodeObject => ({ typeUrl: "/thesixnetwork.sixnft.nftoracle.MsgSetMinimumConfirmation", value: MsgSetMinimumConfirmation.fromPartial( data ) }),
    msgCreateActionRequest: (data: MsgCreateActionRequest): EncodeObject => ({ typeUrl: "/thesixnetwork.sixnft.nftoracle.MsgCreateActionRequest", value: MsgCreateActionRequest.fromPartial( data ) }),
    msgCreateActionSignerConfig: (data: MsgCreateActionSignerConfig): EncodeObject => ({ typeUrl: "/thesixnetwork.sixnft.nftoracle.MsgCreateActionSignerConfig", value: MsgCreateActionSignerConfig.fromPartial( data ) }),
    msgCreateSyncActionSigner: (data: MsgCreateSyncActionSigner): EncodeObject => ({ typeUrl: "/thesixnetwork.sixnft.nftoracle.MsgCreateSyncActionSigner", value: MsgCreateSyncActionSigner.fromPartial( data ) }),
    msgSubmitMintResponse: (data: MsgSubmitMintResponse): EncodeObject => ({ typeUrl: "/thesixnetwork.sixnft.nftoracle.MsgSubmitMintResponse", value: MsgSubmitMintResponse.fromPartial( data ) }),
    msgSubmitVerifyCollectionOwner: (data: MsgSubmitVerifyCollectionOwner): EncodeObject => ({ typeUrl: "/thesixnetwork.sixnft.nftoracle.MsgSubmitVerifyCollectionOwner", value: MsgSubmitVerifyCollectionOwner.fromPartial( data ) }),
    msgSubmitSyncActionSigner: (data: MsgSubmitSyncActionSigner): EncodeObject => ({ typeUrl: "/thesixnetwork.sixnft.nftoracle.MsgSubmitSyncActionSigner", value: MsgSubmitSyncActionSigner.fromPartial( data ) }),
    msgUpdateActionSigner: (data: MsgUpdateActionSigner): EncodeObject => ({ typeUrl: "/thesixnetwork.sixnft.nftoracle.MsgUpdateActionSigner", value: MsgUpdateActionSigner.fromPartial( data ) }),
    msgDeleteActionSignerConfig: (data: MsgDeleteActionSignerConfig): EncodeObject => ({ typeUrl: "/thesixnetwork.sixnft.nftoracle.MsgDeleteActionSignerConfig", value: MsgDeleteActionSignerConfig.fromPartial( data ) }),
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
