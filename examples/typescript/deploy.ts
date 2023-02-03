import { SixDataChainConnector } from "../../src/client";
import { BASE64 } from "../../src/helper/base64";
import nft_schema from "./resource/nft-schema-example.json";
import {StdFee} from "@cosmjs/amino";
import { Decimal } from "@cosmjs/math";
import { GasPrice, calculateFee } from "@cosmjs/stargate/build/fee"
import dotenv from "dotenv";
dotenv.config();

const Deploy = async () => {
  const sixConnector = new SixDataChainConnector();
  // ** LOCAL TESTNET **
  sixConnector.rpcUrl = "http://localhost:26657";
  const accountSigner = await sixConnector.accounts.privateKeyToAccount("code1 code2 code3 code4 code5 code6 code7 code8 code9 code10 code11 code12 code13 code14 code15 code16 code17 code18 code19 code20 code21 code22 code23 code24");
  // const accountSigner = await sixConnector.accounts.mnemonicKeyToAccount(process.env.ALICE_MNEMONIC);

  // ** FIVENET **
  // sixConnector.rpcUrl = "https://rpc1.fivenet.sixprotocol.net:443";
  // const accountSigner = await sixConnector.accounts.privateKeyToAccount(process.env.PRIVATE_KEY);
  // const accountSigner = await sixConnector.accounts.mnemonicKeyToAccount(process.env.MNEMONIC);

  const address = (await accountSigner.getAccounts())[0].address;
  const rpcClient = await sixConnector.connectRPCClient(accountSigner, { gasPrice: GasPrice.fromString("1.25usix") })

  const encodeBase64Schema = BASE64.encode(JSON.stringify(nft_schema));
  const msg = await rpcClient.nftmngrModule.msgCreateNFTSchema({
    creator: address,
    nftSchemaBase64: encodeBase64Schema,
  });

  const txResponse = await rpcClient.nftmngrModule.signAndBroadcast([msg],{
    fee: 'auto',
  });
  if (txResponse.code) {
    console.log(txResponse.rawLog);
  }
  console.log(txResponse);
  console.log(txResponse.gasWanted * 1.25);
  // console.log(txResponse.transactionHash);
  // console.log("NFT Schema Deploy successfully !!! \n");
};
Deploy();
