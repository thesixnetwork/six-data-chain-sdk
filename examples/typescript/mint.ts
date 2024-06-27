import { SixDataChainConnector, BASE64 } from "../../src"; //from "@sixnetwork/six-data-chain-sdk";
import { EncodeObject } from "@cosmjs/proto-signing";
import exampleNFTData from "./resource/nft-metadata-example.json";
import {StdFee} from "@cosmjs/amino";
import { Decimal } from "@cosmjs/math";
import { GasPrice, calculateFee } from "@cosmjs/stargate/build/fee"
import dotenv from "dotenv";
dotenv.config();

const schemaCode = exampleNFTData.nft_schema_code;

const Mint = async () => {
  const sixConnector = new SixDataChainConnector();
  // ** LOCAL TESTNET **
  sixConnector.rpcUrl = "http://localhost:26657";
  // const accountSigner = await sixConnector.accounts.privateKeyToAccount(process.env.ALICE_PRIVATE_KEY);
  const accountSigner = await sixConnector.accounts.mnemonicKeyToAccount("code1 code2 code3 code4 code5 code6 code7 code8 code9 code10 code11 code12 code13 code14 code15 code16 code17 code18 code19 code20 code21 code22 code23 code24");

  // ** FIVENET **
  // sixConnector.rpcUrl = "https://rpc1.fivenet.sixprotocol.net:443";
  // const accountSigner = await sixConnector.accounts.privateKeyToAccount(process.env.PRIVATE_KEY);
  // const accountSigner = await sixConnector.accounts.mnemonicKeyToAccount(process.env.MNEMONIC);
  // Get index of account
  const address = (await accountSigner.getAccounts())[0].address;

  const rpcClient = await sixConnector.connectRPCClient(accountSigner, { gasPrice: GasPrice.fromString("1.25usix") })
  // Encode NFT data to base64
  
  let msgArray:Array<EncodeObject> =[]
  let token_id = String(10);
    exampleNFTData.token_id = token_id;
    let encodeBase64Metadata = BASE64.encode(JSON.stringify(exampleNFTData));
    const msg = await rpcClient.nftmngrModule.msgCreateMetadata({
      creator: address,
      nftSchemaCode: schemaCode,
      tokenId: token_id,
      base64NFTData: encodeBase64Metadata,
    });
    // push msg to array
    msgArray.push(msg)
    // start
    const txResponse = await rpcClient.nftmngrModule.signAndBroadcast(msgArray, {
      fee: "auto",
      memo: "Mint NFT Metadata Token",
    });
    if (txResponse.code) {
      console.log(txResponse.rawLog);
    }
    console.log(`gasUsed: ${txResponse.gasUsed}\ngasWanted:${txResponse.gasWanted}\nFee: ${(txResponse.gasWanted * 1.25)/1000000} six`);
    // clear msgArray
    msgArray = [];
};
  
Mint();
