// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { StdFee } from "@cosmjs/launchpad";
import { SigningStargateClient, SigningStargateClientOptions} from "@cosmjs/stargate";
import { Registry, OfflineSigner, EncodeObject, DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgCreateMetadata } from "./types/nftmngr/latest/tx";
import { MsgPerformActionByAdmin } from "./types/nftmngr/latest/tx";
import { MsgUpdateActionExecutor } from "./types/nftmngr/latest/tx";
import { MsgSetMetadataFormat } from "./types/nftmngr/latest/tx";
import { MsgSetUriRetrievalMethod } from "./types/nftmngr/latest/tx";
import { MsgUpdateAction } from "./types/nftmngr/latest/tx";
import { MsgDeleteActionExecutor } from "./types/nftmngr/latest/tx";
import { MsgPerformMultiTokenAction } from "./types/nftmngr/latest/tx";
import { MsgChangeSchemaOwner } from "./types/nftmngr/latest/tx";
import { MsgCreateNFTSchema } from "./types/nftmngr/latest/tx";
import { MsgChangeOrgOwner } from "./types/nftmngr/latest/tx";
import { MsgCreateActionExecutor } from "./types/nftmngr/latest/tx";
import { MsgCreateMultiMetadata } from "./types/nftmngr/latest/tx";
import { MsgAddAttribute } from "./types/nftmngr/latest/tx";
import { MsgSetBaseUri } from "./types/nftmngr/latest/tx";
import { MsgSetFeeConfig } from "./types/nftmngr/latest/tx";
import { MsgSetOriginChain } from "./types/nftmngr/latest/tx";
import { MsgAddAction } from "./types/nftmngr/latest/tx";
import { MsgToggleAction } from "./types/nftmngr/latest/tx";
import { MsgSetOriginContract } from "./types/nftmngr/latest/tx";
import { MsgSetAttributeOveriding } from "./types/nftmngr/latest/tx";
import { MsgResyncAttributes } from "./types/nftmngr/latest/tx";
import { MsgSetMintauth } from "./types/nftmngr/latest/tx";
import { MsgUpdateSchemaAttribute } from "./types/nftmngr/latest/tx";
import { MsgShowAttributes } from "./types/nftmngr/latest/tx";


const types = [
  ["/thesixnetwork.sixnft.nftmngr.MsgCreateMetadata", MsgCreateMetadata],
  ["/thesixnetwork.sixnft.nftmngr.MsgPerformActionByAdmin", MsgPerformActionByAdmin],
  ["/thesixnetwork.sixnft.nftmngr.MsgUpdateActionExecutor", MsgUpdateActionExecutor],
  ["/thesixnetwork.sixnft.nftmngr.MsgSetMetadataFormat", MsgSetMetadataFormat],
  ["/thesixnetwork.sixnft.nftmngr.MsgSetUriRetrievalMethod", MsgSetUriRetrievalMethod],
  ["/thesixnetwork.sixnft.nftmngr.MsgUpdateAction", MsgUpdateAction],
  ["/thesixnetwork.sixnft.nftmngr.MsgDeleteActionExecutor", MsgDeleteActionExecutor],
  ["/thesixnetwork.sixnft.nftmngr.MsgPerformMultiTokenAction", MsgPerformMultiTokenAction],
  ["/thesixnetwork.sixnft.nftmngr.MsgChangeSchemaOwner", MsgChangeSchemaOwner],
  ["/thesixnetwork.sixnft.nftmngr.MsgCreateNFTSchema", MsgCreateNFTSchema],
  ["/thesixnetwork.sixnft.nftmngr.MsgChangeOrgOwner", MsgChangeOrgOwner],
  ["/thesixnetwork.sixnft.nftmngr.MsgCreateActionExecutor", MsgCreateActionExecutor],
  ["/thesixnetwork.sixnft.nftmngr.MsgCreateMultiMetadata", MsgCreateMultiMetadata],
  ["/thesixnetwork.sixnft.nftmngr.MsgAddAttribute", MsgAddAttribute],
  ["/thesixnetwork.sixnft.nftmngr.MsgSetBaseUri", MsgSetBaseUri],
  ["/thesixnetwork.sixnft.nftmngr.MsgSetFeeConfig", MsgSetFeeConfig],
  ["/thesixnetwork.sixnft.nftmngr.MsgSetOriginChain", MsgSetOriginChain],
  ["/thesixnetwork.sixnft.nftmngr.MsgAddAction", MsgAddAction],
  ["/thesixnetwork.sixnft.nftmngr.MsgToggleAction", MsgToggleAction],
  ["/thesixnetwork.sixnft.nftmngr.MsgSetOriginContract", MsgSetOriginContract],
  ["/thesixnetwork.sixnft.nftmngr.MsgSetAttributeOveriding", MsgSetAttributeOveriding],
  ["/thesixnetwork.sixnft.nftmngr.MsgResyncAttributes", MsgResyncAttributes],
  ["/thesixnetwork.sixnft.nftmngr.MsgSetMintauth", MsgSetMintauth],
  ["/thesixnetwork.sixnft.nftmngr.MsgUpdateSchemaAttribute", MsgUpdateSchemaAttribute],
  ["/thesixnetwork.sixnft.nftmngr.MsgShowAttributes", MsgShowAttributes],
  
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
    msgCreateMetadata: (data: MsgCreateMetadata): EncodeObject => ({ typeUrl: "/thesixnetwork.sixnft.nftmngr.MsgCreateMetadata", value: MsgCreateMetadata.fromPartial( data ) }),
    msgPerformActionByAdmin: (data: MsgPerformActionByAdmin): EncodeObject => ({ typeUrl: "/thesixnetwork.sixnft.nftmngr.MsgPerformActionByAdmin", value: MsgPerformActionByAdmin.fromPartial( data ) }),
    msgUpdateActionExecutor: (data: MsgUpdateActionExecutor): EncodeObject => ({ typeUrl: "/thesixnetwork.sixnft.nftmngr.MsgUpdateActionExecutor", value: MsgUpdateActionExecutor.fromPartial( data ) }),
    msgSetMetadataFormat: (data: MsgSetMetadataFormat): EncodeObject => ({ typeUrl: "/thesixnetwork.sixnft.nftmngr.MsgSetMetadataFormat", value: MsgSetMetadataFormat.fromPartial( data ) }),
    msgSetUriRetrievalMethod: (data: MsgSetUriRetrievalMethod): EncodeObject => ({ typeUrl: "/thesixnetwork.sixnft.nftmngr.MsgSetUriRetrievalMethod", value: MsgSetUriRetrievalMethod.fromPartial( data ) }),
    msgUpdateAction: (data: MsgUpdateAction): EncodeObject => ({ typeUrl: "/thesixnetwork.sixnft.nftmngr.MsgUpdateAction", value: MsgUpdateAction.fromPartial( data ) }),
    msgDeleteActionExecutor: (data: MsgDeleteActionExecutor): EncodeObject => ({ typeUrl: "/thesixnetwork.sixnft.nftmngr.MsgDeleteActionExecutor", value: MsgDeleteActionExecutor.fromPartial( data ) }),
    msgPerformMultiTokenAction: (data: MsgPerformMultiTokenAction): EncodeObject => ({ typeUrl: "/thesixnetwork.sixnft.nftmngr.MsgPerformMultiTokenAction", value: MsgPerformMultiTokenAction.fromPartial( data ) }),
    msgChangeSchemaOwner: (data: MsgChangeSchemaOwner): EncodeObject => ({ typeUrl: "/thesixnetwork.sixnft.nftmngr.MsgChangeSchemaOwner", value: MsgChangeSchemaOwner.fromPartial( data ) }),
    msgCreateNFTSchema: (data: MsgCreateNFTSchema): EncodeObject => ({ typeUrl: "/thesixnetwork.sixnft.nftmngr.MsgCreateNFTSchema", value: MsgCreateNFTSchema.fromPartial( data ) }),
    msgChangeOrgOwner: (data: MsgChangeOrgOwner): EncodeObject => ({ typeUrl: "/thesixnetwork.sixnft.nftmngr.MsgChangeOrgOwner", value: MsgChangeOrgOwner.fromPartial( data ) }),
    msgCreateActionExecutor: (data: MsgCreateActionExecutor): EncodeObject => ({ typeUrl: "/thesixnetwork.sixnft.nftmngr.MsgCreateActionExecutor", value: MsgCreateActionExecutor.fromPartial( data ) }),
    msgCreateMultiMetadata: (data: MsgCreateMultiMetadata): EncodeObject => ({ typeUrl: "/thesixnetwork.sixnft.nftmngr.MsgCreateMultiMetadata", value: MsgCreateMultiMetadata.fromPartial( data ) }),
    msgAddAttribute: (data: MsgAddAttribute): EncodeObject => ({ typeUrl: "/thesixnetwork.sixnft.nftmngr.MsgAddAttribute", value: MsgAddAttribute.fromPartial( data ) }),
    msgSetBaseUri: (data: MsgSetBaseUri): EncodeObject => ({ typeUrl: "/thesixnetwork.sixnft.nftmngr.MsgSetBaseUri", value: MsgSetBaseUri.fromPartial( data ) }),
    msgSetFeeConfig: (data: MsgSetFeeConfig): EncodeObject => ({ typeUrl: "/thesixnetwork.sixnft.nftmngr.MsgSetFeeConfig", value: MsgSetFeeConfig.fromPartial( data ) }),
    msgSetOriginChain: (data: MsgSetOriginChain): EncodeObject => ({ typeUrl: "/thesixnetwork.sixnft.nftmngr.MsgSetOriginChain", value: MsgSetOriginChain.fromPartial( data ) }),
    msgAddAction: (data: MsgAddAction): EncodeObject => ({ typeUrl: "/thesixnetwork.sixnft.nftmngr.MsgAddAction", value: MsgAddAction.fromPartial( data ) }),
    msgToggleAction: (data: MsgToggleAction): EncodeObject => ({ typeUrl: "/thesixnetwork.sixnft.nftmngr.MsgToggleAction", value: MsgToggleAction.fromPartial( data ) }),
    msgSetOriginContract: (data: MsgSetOriginContract): EncodeObject => ({ typeUrl: "/thesixnetwork.sixnft.nftmngr.MsgSetOriginContract", value: MsgSetOriginContract.fromPartial( data ) }),
    msgSetAttributeOveriding: (data: MsgSetAttributeOveriding): EncodeObject => ({ typeUrl: "/thesixnetwork.sixnft.nftmngr.MsgSetAttributeOveriding", value: MsgSetAttributeOveriding.fromPartial( data ) }),
    msgResyncAttributes: (data: MsgResyncAttributes): EncodeObject => ({ typeUrl: "/thesixnetwork.sixnft.nftmngr.MsgResyncAttributes", value: MsgResyncAttributes.fromPartial( data ) }),
    msgSetMintauth: (data: MsgSetMintauth): EncodeObject => ({ typeUrl: "/thesixnetwork.sixnft.nftmngr.MsgSetMintauth", value: MsgSetMintauth.fromPartial( data ) }),
    msgUpdateSchemaAttribute: (data: MsgUpdateSchemaAttribute): EncodeObject => ({ typeUrl: "/thesixnetwork.sixnft.nftmngr.MsgUpdateSchemaAttribute", value: MsgUpdateSchemaAttribute.fromPartial( data ) }),
    msgShowAttributes: (data: MsgShowAttributes): EncodeObject => ({ typeUrl: "/thesixnetwork.sixnft.nftmngr.MsgShowAttributes", value: MsgShowAttributes.fromPartial( data ) }),
    
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
