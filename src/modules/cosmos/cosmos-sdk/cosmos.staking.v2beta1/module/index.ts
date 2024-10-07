// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { StdFee } from "@cosmjs/launchpad";
import { SigningStargateClient, SigningStargateClientOptions} from "@cosmjs/stargate";
import { Registry, OfflineSigner, EncodeObject, DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgUndelegate } from "./types/cosmos/staking/v2beta1/tx";
import { MsgSetValidatorApproval } from "./types/cosmos/staking/v2beta1/tx";
import { MsgEditValidator } from "./types/cosmos/staking/v2beta1/tx";
import { MsgBeginRedelegate } from "./types/cosmos/staking/v2beta1/tx";
import { MsgCreateWhitelistDelegator } from "./types/cosmos/staking/v2beta1/tx";
import { MsgDeleteWhitelistDelegator } from "./types/cosmos/staking/v2beta1/tx";
import { MsgCreateValidator } from "./types/cosmos/staking/v2beta1/tx";
import { MsgDelegate } from "./types/cosmos/staking/v2beta1/tx";


const types = [
  ["/cosmos.staking.v2beta1.MsgUndelegate", MsgUndelegate],
  ["/cosmos.staking.v2beta1.MsgSetValidatorApproval", MsgSetValidatorApproval],
  ["/cosmos.staking.v2beta1.MsgEditValidator", MsgEditValidator],
  ["/cosmos.staking.v2beta1.MsgBeginRedelegate", MsgBeginRedelegate],
  ["/cosmos.staking.v2beta1.MsgCreateWhitelistDelegator", MsgCreateWhitelistDelegator],
  ["/cosmos.staking.v2beta1.MsgDeleteWhitelistDelegator", MsgDeleteWhitelistDelegator],
  ["/cosmos.staking.v2beta1.MsgCreateValidator", MsgCreateValidator],
  ["/cosmos.staking.v2beta1.MsgDelegate", MsgDelegate],
  
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
    msgUndelegate: (data: MsgUndelegate): EncodeObject => ({ typeUrl: "/cosmos.staking.v2beta1.MsgUndelegate", value: MsgUndelegate.fromPartial( data ) }),
    msgSetValidatorApproval: (data: MsgSetValidatorApproval): EncodeObject => ({ typeUrl: "/cosmos.staking.v2beta1.MsgSetValidatorApproval", value: MsgSetValidatorApproval.fromPartial( data ) }),
    msgEditValidator: (data: MsgEditValidator): EncodeObject => ({ typeUrl: "/cosmos.staking.v2beta1.MsgEditValidator", value: MsgEditValidator.fromPartial( data ) }),
    msgBeginRedelegate: (data: MsgBeginRedelegate): EncodeObject => ({ typeUrl: "/cosmos.staking.v2beta1.MsgBeginRedelegate", value: MsgBeginRedelegate.fromPartial( data ) }),
    msgCreateWhitelistDelegator: (data: MsgCreateWhitelistDelegator): EncodeObject => ({ typeUrl: "/cosmos.staking.v2beta1.MsgCreateWhitelistDelegator", value: MsgCreateWhitelistDelegator.fromPartial( data ) }),
    msgDeleteWhitelistDelegator: (data: MsgDeleteWhitelistDelegator): EncodeObject => ({ typeUrl: "/cosmos.staking.v2beta1.MsgDeleteWhitelistDelegator", value: MsgDeleteWhitelistDelegator.fromPartial( data ) }),
    msgCreateValidator: (data: MsgCreateValidator): EncodeObject => ({ typeUrl: "/cosmos.staking.v2beta1.MsgCreateValidator", value: MsgCreateValidator.fromPartial( data ) }),
    msgDelegate: (data: MsgDelegate): EncodeObject => ({ typeUrl: "/cosmos.staking.v2beta1.MsgDelegate", value: MsgDelegate.fromPartial( data ) }),
    
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
