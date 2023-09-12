// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { StdFee } from "@cosmjs/launchpad";
import { SigningStargateClient, SigningStargateClientOptions} from "@cosmjs/stargate";
import { Registry, OfflineSigner, EncodeObject, DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgDeleteGroup } from "./types/protocoladmin/tx";
import { MsgAddAdminToGroup } from "./types/protocoladmin/tx";
import { MsgCreateGroup } from "./types/protocoladmin/tx";
import { MsgRemoveAdminFromGroup } from "./types/protocoladmin/tx";
import { MsgUpdateGroup } from "./types/protocoladmin/tx";


const types = [
  ["/thesixnetwork.sixprotocol.protocoladmin.MsgDeleteGroup", MsgDeleteGroup],
  ["/thesixnetwork.sixprotocol.protocoladmin.MsgAddAdminToGroup", MsgAddAdminToGroup],
  ["/thesixnetwork.sixprotocol.protocoladmin.MsgCreateGroup", MsgCreateGroup],
  ["/thesixnetwork.sixprotocol.protocoladmin.MsgRemoveAdminFromGroup", MsgRemoveAdminFromGroup],
  ["/thesixnetwork.sixprotocol.protocoladmin.MsgUpdateGroup", MsgUpdateGroup],
  
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
    msgDeleteGroup: (data: MsgDeleteGroup): EncodeObject => ({ typeUrl: "/thesixnetwork.sixprotocol.protocoladmin.MsgDeleteGroup", value: MsgDeleteGroup.fromPartial( data ) }),
    msgAddAdminToGroup: (data: MsgAddAdminToGroup): EncodeObject => ({ typeUrl: "/thesixnetwork.sixprotocol.protocoladmin.MsgAddAdminToGroup", value: MsgAddAdminToGroup.fromPartial( data ) }),
    msgCreateGroup: (data: MsgCreateGroup): EncodeObject => ({ typeUrl: "/thesixnetwork.sixprotocol.protocoladmin.MsgCreateGroup", value: MsgCreateGroup.fromPartial( data ) }),
    msgRemoveAdminFromGroup: (data: MsgRemoveAdminFromGroup): EncodeObject => ({ typeUrl: "/thesixnetwork.sixprotocol.protocoladmin.MsgRemoveAdminFromGroup", value: MsgRemoveAdminFromGroup.fromPartial( data ) }),
    msgUpdateGroup: (data: MsgUpdateGroup): EncodeObject => ({ typeUrl: "/thesixnetwork.sixprotocol.protocoladmin.MsgUpdateGroup", value: MsgUpdateGroup.fromPartial( data ) }),
    
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
