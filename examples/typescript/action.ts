import { SixDataChainConnector, typesTxNFTManager } from "../../src"; // from "@sixnetwork/six-data-chain-sdk";
import { EncodeObject } from "@cosmjs/proto-signing";
import { GasPrice, calculateFee } from "@cosmjs/stargate/build/fee";
import exampleNFTData from "./resource/nft-metadata-example.json";

const main = async () => {
    const sixConnector = new SixDataChainConnector();
    // ** LOCAL TESTNET **
    sixConnector.rpcUrl = "http://localhost:26657";
    const accountSigner = await sixConnector.accounts.privateKeyToAccount(process.env.ALICE_PRIVATE_KEY!);
    // const accountSigner = await sixConnector.accounts.mnemonicKeyToAccount(process.env.ALICE_MNEMONIC);
  
    // ** FIVENET **
    // sixConnector.rpcUrl = "https://rpc1.fivenet.sixprotocol.net:443";
    // const accountSigner = await sixConnector.accounts.privateKeyToAccount(process.env.PRIVATE_KEY!);
    // const accountSigner = await sixConnector.accounts.mnemonicKeyToAccount(process.env.MNEMONIC);
    // Get index of account
    const address = (await accountSigner.getAccounts())[0].address;
    const rpcClient = await sixConnector.connectRPCClient(accountSigner, {
      gasPrice: GasPrice.fromString("1.25usix"),
    });
  
    const msgArray: Array<EncodeObject> = [];
  
    let tokenTarget = String(20);
    let token_id = String(10);
    const action: typesTxNFTManager.MsgPerformActionByAdmin = {
      creator: address,
      nft_schema_code: exampleNFTData.nft_schema_code,
      tokenId: token_id,
      action: "start_mission",
      ref_id: `start_mission-${token_id}`,
      parameters: [],
    };
    const msg = await rpcClient.nftmngrModule.msgPerformActionByAdmin(action);
    msgArray.push(msg);
    const txResponse = await rpcClient.nftmngrModule.signAndBroadcast(msgArray, {
      fee: "auto",
      memo: "tk1_burn_20points",
    });
    console.log(txResponse);
}
main()