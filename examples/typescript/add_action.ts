import { SixDataChainConnector, BASE64, typesTxNFTManager, fee } from "../../src"; // from "@sixnetwork/six-data-chain-sdk";
import exampleNewAction from "./resource/new-action.json";

const main = async () => {
  const sixConnector = new SixDataChainConnector();
  // specify the RPC URL of the chain
  sixConnector.rpcUrl = "http://localhost:26657";

  // Retrieve acctount signer from private key or mnemonic
  const accountSigner = await sixConnector.accounts.mnemonicKeyToAccount(
    "code1 code2 code3 code4 code5 code6 code7 code8 code9 code10 code11 code12 code13 code14 code15 code16 code17 code18 code19 code20 code21 code22 code23 code24"
  );
  // Get index of account
  const address = (await accountSigner.getAccounts())[0].address;
  const rpcClient = await sixConnector.connectRPCClient(accountSigner, { gasPrice: fee.GasPrice.fromString("1.25usix") })
  // Encode NFT data to base64
  const encodeBase64NewAction = BASE64.encode(JSON.stringify(exampleNewAction));
  // Create message
  const addAction:typesTxNFTManager.MsgAddAction = {
    creator: address,
    code: "six.rocket_ticket",
    base64NewAction: encodeBase64NewAction,
  }
  const msg = await rpcClient.nftmngrModule.msgAddAction(addAction);
  const txResponse = await rpcClient.nftmngrModule.signAndBroadcast([msg], {
    fee: "auto",
    memo: "Mint NFT Metadata Token 1",
  });

  console.log(txResponse);
};
main();
