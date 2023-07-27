// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { StdFee } from "@cosmjs/launchpad";
import { SigningStargateClient, SigningStargateClientOptions} from "@cosmjs/stargate";
import { Registry, OfflineSigner, EncodeObject, DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgChangeOrgOwner } from "./types/nftmngr/tx";
import { MsgSetMintauth } from "./types/nftmngr/tx";
import { MsgAddAttribute } from "./types/nftmngr/tx";
import { MsgChangeSchemaOwner } from "./types/nftmngr/tx";
import { MsgSetNFTAttribute } from "./types/nftmngr/tx";
import { MsgRemoveSystemActioner } from "./types/nftmngr/tx";
import { MsgCreateMetadata } from "./types/nftmngr/tx";
import { MsgSetFeeConfig } from "./types/nftmngr/tx";
import { MsgToggleAction } from "./types/nftmngr/tx";
import { MsgCreateNFTSchema } from "./types/nftmngr/tx";
import { MsgSetOriginChain } from "./types/nftmngr/tx";
import { MsgSetOriginContract } from "./types/nftmngr/tx";
import { MsgAddAction } from "./types/nftmngr/tx";
import { MsgShowAttributes } from "./types/nftmngr/tx";
import { MsgSetMetadataFormat } from "./types/nftmngr/tx";
import { MsgSetAttributeOveriding } from "./types/nftmngr/tx";
import { MsgPerformActionByAdmin } from "./types/nftmngr/tx";
import { MsgAddSystemActioner } from "./types/nftmngr/tx";
import { MsgCreateMultiMetadata } from "./types/nftmngr/tx";
import { MsgPerformMultiTokenAction } from "./types/nftmngr/tx";
import { MsgResyncAttributes } from "./types/nftmngr/tx";
import { MsgSetUriRetrievalMethod } from "./types/nftmngr/tx";
import { MsgSetBaseUri } from "./types/nftmngr/tx";


const types = [
  ["/thesixnetwork.sixnft.nftmngr.MsgChangeOrgOwner", MsgChangeOrgOwner],
  ["/thesixnetwork.sixnft.nftmngr.MsgSetMintauth", MsgSetMintauth],
  ["/thesixnetwork.sixnft.nftmngr.MsgAddAttribute", MsgAddAttribute],
  ["/thesixnetwork.sixnft.nftmngr.MsgChangeSchemaOwner", MsgChangeSchemaOwner],
  ["/thesixnetwork.sixnft.nftmngr.MsgSetNFTAttribute", MsgSetNFTAttribute],
  ["/thesixnetwork.sixnft.nftmngr.MsgRemoveSystemActioner", MsgRemoveSystemActioner],
  ["/thesixnetwork.sixnft.nftmngr.MsgCreateMetadata", MsgCreateMetadata],
  ["/thesixnetwork.sixnft.nftmngr.MsgSetFeeConfig", MsgSetFeeConfig],
  ["/thesixnetwork.sixnft.nftmngr.MsgToggleAction", MsgToggleAction],
  ["/thesixnetwork.sixnft.nftmngr.MsgCreateNFTSchema", MsgCreateNFTSchema],
  ["/thesixnetwork.sixnft.nftmngr.MsgSetOriginChain", MsgSetOriginChain],
  ["/thesixnetwork.sixnft.nftmngr.MsgSetOriginContract", MsgSetOriginContract],
  ["/thesixnetwork.sixnft.nftmngr.MsgAddAction", MsgAddAction],
  ["/thesixnetwork.sixnft.nftmngr.MsgShowAttributes", MsgShowAttributes],
  ["/thesixnetwork.sixnft.nftmngr.MsgSetMetadataFormat", MsgSetMetadataFormat],
  ["/thesixnetwork.sixnft.nftmngr.MsgSetAttributeOveriding", MsgSetAttributeOveriding],
  ["/thesixnetwork.sixnft.nftmngr.MsgPerformActionByAdmin", MsgPerformActionByAdmin],
  ["/thesixnetwork.sixnft.nftmngr.MsgAddSystemActioner", MsgAddSystemActioner],
  ["/thesixnetwork.sixnft.nftmngr.MsgCreateMultiMetadata", MsgCreateMultiMetadata],
  ["/thesixnetwork.sixnft.nftmngr.MsgPerformMultiTokenAction", MsgPerformMultiTokenAction],
  ["/thesixnetwork.sixnft.nftmngr.MsgResyncAttributes", MsgResyncAttributes],
  ["/thesixnetwork.sixnft.nftmngr.MsgSetUriRetrievalMethod", MsgSetUriRetrievalMethod],
  ["/thesixnetwork.sixnft.nftmngr.MsgSetBaseUri", MsgSetBaseUri],
  
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
    msgChangeOrgOwner: (data: MsgChangeOrgOwner): EncodeObject => ({ typeUrl: "/thesixnetwork.sixnft.nftmngr.MsgChangeOrgOwner", value: MsgChangeOrgOwner.fromPartial( data ) }),
    msgSetMintauth: (data: MsgSetMintauth): EncodeObject => ({ typeUrl: "/thesixnetwork.sixnft.nftmngr.MsgSetMintauth", value: MsgSetMintauth.fromPartial( data ) }),
    msgAddAttribute: (data: MsgAddAttribute): EncodeObject => ({ typeUrl: "/thesixnetwork.sixnft.nftmngr.MsgAddAttribute", value: MsgAddAttribute.fromPartial( data ) }),
    msgChangeSchemaOwner: (data: MsgChangeSchemaOwner): EncodeObject => ({ typeUrl: "/thesixnetwork.sixnft.nftmngr.MsgChangeSchemaOwner", value: MsgChangeSchemaOwner.fromPartial( data ) }),
    msgSetNFTAttribute: (data: MsgSetNFTAttribute): EncodeObject => ({ typeUrl: "/thesixnetwork.sixnft.nftmngr.MsgSetNFTAttribute", value: MsgSetNFTAttribute.fromPartial( data ) }),
    msgRemoveSystemActioner: (data: MsgRemoveSystemActioner): EncodeObject => ({ typeUrl: "/thesixnetwork.sixnft.nftmngr.MsgRemoveSystemActioner", value: MsgRemoveSystemActioner.fromPartial( data ) }),
    msgCreateMetadata: (data: MsgCreateMetadata): EncodeObject => ({ typeUrl: "/thesixnetwork.sixnft.nftmngr.MsgCreateMetadata", value: MsgCreateMetadata.fromPartial( data ) }),
    msgSetFeeConfig: (data: MsgSetFeeConfig): EncodeObject => ({ typeUrl: "/thesixnetwork.sixnft.nftmngr.MsgSetFeeConfig", value: MsgSetFeeConfig.fromPartial( data ) }),
    msgToggleAction: (data: MsgToggleAction): EncodeObject => ({ typeUrl: "/thesixnetwork.sixnft.nftmngr.MsgToggleAction", value: MsgToggleAction.fromPartial( data ) }),
    msgCreateNFTSchema: (data: MsgCreateNFTSchema): EncodeObject => ({ typeUrl: "/thesixnetwork.sixnft.nftmngr.MsgCreateNFTSchema", value: MsgCreateNFTSchema.fromPartial( data ) }),
    msgSetOriginChain: (data: MsgSetOriginChain): EncodeObject => ({ typeUrl: "/thesixnetwork.sixnft.nftmngr.MsgSetOriginChain", value: MsgSetOriginChain.fromPartial( data ) }),
    msgSetOriginContract: (data: MsgSetOriginContract): EncodeObject => ({ typeUrl: "/thesixnetwork.sixnft.nftmngr.MsgSetOriginContract", value: MsgSetOriginContract.fromPartial( data ) }),
    msgAddAction: (data: MsgAddAction): EncodeObject => ({ typeUrl: "/thesixnetwork.sixnft.nftmngr.MsgAddAction", value: MsgAddAction.fromPartial( data ) }),
    msgShowAttributes: (data: MsgShowAttributes): EncodeObject => ({ typeUrl: "/thesixnetwork.sixnft.nftmngr.MsgShowAttributes", value: MsgShowAttributes.fromPartial( data ) }),
    msgSetMetadataFormat: (data: MsgSetMetadataFormat): EncodeObject => ({ typeUrl: "/thesixnetwork.sixnft.nftmngr.MsgSetMetadataFormat", value: MsgSetMetadataFormat.fromPartial( data ) }),
    msgSetAttributeOveriding: (data: MsgSetAttributeOveriding): EncodeObject => ({ typeUrl: "/thesixnetwork.sixnft.nftmngr.MsgSetAttributeOveriding", value: MsgSetAttributeOveriding.fromPartial( data ) }),
    msgPerformActionByAdmin: (data: MsgPerformActionByAdmin): EncodeObject => ({ typeUrl: "/thesixnetwork.sixnft.nftmngr.MsgPerformActionByAdmin", value: MsgPerformActionByAdmin.fromPartial( data ) }),
    msgAddSystemActioner: (data: MsgAddSystemActioner): EncodeObject => ({ typeUrl: "/thesixnetwork.sixnft.nftmngr.MsgAddSystemActioner", value: MsgAddSystemActioner.fromPartial( data ) }),
    msgCreateMultiMetadata: (data: MsgCreateMultiMetadata): EncodeObject => ({ typeUrl: "/thesixnetwork.sixnft.nftmngr.MsgCreateMultiMetadata", value: MsgCreateMultiMetadata.fromPartial( data ) }),
    msgPerformMultiTokenAction: (data: MsgPerformMultiTokenAction): EncodeObject => ({ typeUrl: "/thesixnetwork.sixnft.nftmngr.MsgPerformMultiTokenAction", value: MsgPerformMultiTokenAction.fromPartial( data ) }),
    msgResyncAttributes: (data: MsgResyncAttributes): EncodeObject => ({ typeUrl: "/thesixnetwork.sixnft.nftmngr.MsgResyncAttributes", value: MsgResyncAttributes.fromPartial( data ) }),
    msgSetUriRetrievalMethod: (data: MsgSetUriRetrievalMethod): EncodeObject => ({ typeUrl: "/thesixnetwork.sixnft.nftmngr.MsgSetUriRetrievalMethod", value: MsgSetUriRetrievalMethod.fromPartial( data ) }),
    msgSetBaseUri: (data: MsgSetBaseUri): EncodeObject => ({ typeUrl: "/thesixnetwork.sixnft.nftmngr.MsgSetBaseUri", value: MsgSetBaseUri.fromPartial( data ) }),
    
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
