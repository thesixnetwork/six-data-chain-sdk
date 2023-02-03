import { SixDataChainConnector } from "../../src/client";
import { BASE64 } from "../../src/helper/base64";
import exampleNewAttribute from "./resource/new-attribute.json";
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
  const rpcClient = await sixConnector.connectRPCClient(accountSigner);
  // Encode NFT data to base64
  const encodeBase64NewAttribute = BASE64.encode(JSON.stringify(exampleNewAttribute));
  const msg = await rpcClient.nftmngrModule.msgAddAttribute({
    creator: address,
    code: "six.rocket_ticket",
    location:1, // 0: NFT Attribute(non-Dynamic Attribute), 1: Token Attribute (Dynamic Attribute)
    base64NewAttriuteDefenition: encodeBase64NewAttribute,
  });
  const txResponse = await rpcClient.nftmngrModule.signAndBroadcast([msg], {
    fee: { amount: [{ denom: "usix", amount: "10000000" }], gas: "1500000" },
    memo: "Add New Attribute to NFT Schema",
  });

  console.log(txResponse);
};
main();
