// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { StdFee } from "@cosmjs/launchpad";
import { SigningStargateClient, SigningStargateClientOptions} from "@cosmjs/stargate";
import { Registry, OfflineSigner, EncodeObject, DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgGrantPermission } from "./types/nftadmin/tx";
import { MsgMint } from "./types/nftadmin/tx";
import { MsgRevokePermission } from "./types/nftadmin/tx";
import { MsgBurn } from "./types/nftadmin/tx";


const types = [
  ["/thesixnetwork.sixnft.nftadmin.MsgGrantPermission", MsgGrantPermission],
  ["/thesixnetwork.sixnft.nftadmin.MsgMint", MsgMint],
  ["/thesixnetwork.sixnft.nftadmin.MsgRevokePermission", MsgRevokePermission],
  ["/thesixnetwork.sixnft.nftadmin.MsgBurn", MsgBurn],
  
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
    msgGrantPermission: (data: MsgGrantPermission): EncodeObject => ({ typeUrl: "/thesixnetwork.sixnft.nftadmin.MsgGrantPermission", value: MsgGrantPermission.fromPartial( data ) }),
    msgMint: (data: MsgMint): EncodeObject => ({ typeUrl: "/thesixnetwork.sixnft.nftadmin.MsgMint", value: MsgMint.fromPartial( data ) }),
    msgRevokePermission: (data: MsgRevokePermission): EncodeObject => ({ typeUrl: "/thesixnetwork.sixnft.nftadmin.MsgRevokePermission", value: MsgRevokePermission.fromPartial( data ) }),
    msgBurn: (data: MsgBurn): EncodeObject => ({ typeUrl: "/thesixnetwork.sixnft.nftadmin.MsgBurn", value: MsgBurn.fromPartial( data ) }),
    
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
