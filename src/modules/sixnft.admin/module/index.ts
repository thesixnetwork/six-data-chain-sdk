// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { StdFee } from "@cosmjs/launchpad";
import { DeliverTxResponse, SigningStargateClient } from "@cosmjs/stargate";
import { Registry, OfflineSigner, EncodeObject, DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgGrantPermission } from "./types/admin/tx";
import { MsgRevokePermission } from "./types/admin/tx";
import { MsgMint } from "./types/admin/tx";
import { MsgBurn } from "./types/admin/tx";


const types = [
  ["/sixnft.admin.MsgGrantPermission", MsgGrantPermission],
  ["/sixnft.admin.MsgRevokePermission", MsgRevokePermission],
  ["/sixnft.admin.MsgMint", MsgMint],
  ["/sixnft.admin.MsgBurn", MsgBurn],

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

interface SignAndBroadcastOptions {
  fee: StdFee,
  memo?: string
}

export interface ITxClientRes {
  signAndBroadcast: (msgs: EncodeObject[], { fee, memo }: SignAndBroadcastOptions) => Promise<DeliverTxResponse>,
  msgGrantPermission: (data: MsgGrantPermission) => EncodeObject,
  msgRevokePermission: (data: MsgRevokePermission) => EncodeObject,
  msgMint: (data: MsgMint) => EncodeObject
  msgBurn: (data: MsgBurn) => EncodeObject
}
const txClient = async (wallet: OfflineSigner, { addr: addr }: TxClientOptions = { addr: "http://localhost:26657" }) => {
  if (!wallet) throw MissingWalletError;
  let client: any;
  if (addr) {
    client = await SigningStargateClient.connectWithSigner(addr, wallet, { registry });
  } else {
    client = await SigningStargateClient.offline(wallet, { registry });
  }
  const { address } = (await wallet.getAccounts())[0];

  return {
    signAndBroadcast: (msgs: EncodeObject[], { fee, memo }: SignAndBroadcastOptions = { fee: defaultFee, memo: "" }) => client.signAndBroadcast(address, msgs, fee, memo),
    msgGrantPermission: (data: MsgGrantPermission): EncodeObject => ({ typeUrl: "/sixnft.admin.MsgGrantPermission", value: MsgGrantPermission.fromPartial(data) }),
    msgRevokePermission: (data: MsgRevokePermission): EncodeObject => ({ typeUrl: "/sixnft.admin.MsgRevokePermission", value: MsgRevokePermission.fromPartial(data) }),
    msgMint: (data: MsgMint): EncodeObject => ({ typeUrl: "/sixnft.admin.MsgMint", value: MsgMint.fromPartial(data) }),
    msgBurn: (data: MsgBurn): EncodeObject => ({ typeUrl: "/sixnft.admin.MsgBurn", value: MsgBurn.fromPartial(data) }),

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
