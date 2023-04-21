import { SixDataChainConnector, typesTxTokenManager, fee} from "../../src";
import { EncodeObject } from "@cosmjs/proto-signing";
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
    gasPrice: fee.GasPrice.fromString("1.25usix"),
  });

  const msgArray: Array<EncodeObject> = [];

  const wrapTokenMsg: typesTxTokenManager.MsgUnwrapToken = {
    creator: address,
    amount: {
      denom: "asix",
      amount: "200000000000000000000",
    },
    // receiver: "0x549a10Dba089E4BFD329aa726d968c8ca4222f47",
    receiver:address,
  };

  const msg = await rpcClient.tokenmngrModule.msgUnwrapToken(
    wrapTokenMsg
  );
  msgArray.push(msg);
  const txResponse =
    await rpcClient.tokenmngrModule.signAndBroadcast(msgArray, {
      fee: "auto",
      memo: "convert asix to alice",
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
