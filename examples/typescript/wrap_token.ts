import { SixDataChainConnector, fee, typesTxTokenManager } from "../../src";
import { EncodeObject } from "@cosmjs/proto-signing";
import { GasPrice, calculateFee } from "@cosmjs/stargate/build/fee";
import dotenv from "dotenv";
dotenv.config();

const main = async () => {
  const sixConnector = new SixDataChainConnector();
  // ** LOCAL TESTNET **
  sixConnector.rpcUrl = "http://localhost:26657";
  const accountSigner = await sixConnector.accounts.privateKeyToAccount(
    process.env.ALICE_PRIVATE_KEY!
  );
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

  const convertMsg: typesTxTokenManager.MsgWrapToken = {
    creator: address,
    amount: {
      denom: "usix",
      amount: "100000000", // 100000000 == 100000000000000000000asix (100 six)
    },
    receiver: "0x549a10Dba089E4BFD329aa726d968c8ca4222f47", // wrao to evm address
    // receiver:address, // wrap to self
  };

  const msg = await rpcClient.tokenmngrModule.msgWrapToken(
    convertMsg
  );
  msgArray.push(msg);
  const txResponse =
    await rpcClient.tokenmngrModule.signAndBroadcast(msgArray, {
      fee: "auto",
      memo: "wrap usix to 0x549a10Dba089E4BFD329aa726d968c8ca4222f47",
    });
  if (txResponse.code) {
    console.log(txResponse.rawLog);
  }
  console.log(
    `gasUsed: ${txResponse.gasUsed}\ngasWanted:${txResponse.gasWanted}\n`
  );
  return txResponse;
};

main();
