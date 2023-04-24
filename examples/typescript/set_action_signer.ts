import { SixDataChainConnector, typesTxNFTOracle, fee } from "../../src"; // from "@sixnetwork/six-data-chain-sdk";
import Web3 from "web3"; // version 1.9.0"
const web3 = new Web3('ws://localhost:8546');
import { ethers } from "ethers"; // version "^5.7.0"
import dotenv from "dotenv";
dotenv.config();


interface SetSignerSignature {
  signature: string;
  message: string;
}

interface SetSignerParams {
  ownerAddress: string;
  actorAddress: string;
  expiredAt: Date | undefined;
}

const raw_msg: SetSignerParams = {
    ownerAddress: "0xb7c2468b9481CbDfD029998d6bA98c55072d932e",
    actorAddress: "0x837f7E4DcCB7AEd3807e51f0535E7Fa2718bc0E7",
    expiredAt: new Date("2023-01-31T00:01:00.000Z"),
  };

const base64_msg = Buffer.from(JSON.stringify(raw_msg)).toString("base64");


// ** Standard EVM Signing on SIX-PROTOCOL **
const signing = async () => {
    const signature = web3.eth.accounts.sign(base64_msg, process.env.EVM_PRIVATE_KEY!);
    const signature_string = signature.signature
  
    const signature_hex = ethers.utils.joinSignature(signature_string);
    console.log(signature_hex);
    // hex to byte
    const signature_byte = ethers.utils.arrayify(signature_hex);
    return signature_byte;
    // console.log(signature_byte);
  };
  
// ** Standard EVM Signing on SIX-PROTOCOL **
const sixEvmSigner = async (signatureByte:Uint8Array) => {
  const lastByte = signatureByte[64] - 27;
  // concat byte
  const signature_concat = ethers.utils.concat([
    signatureByte.slice(0, 64),
    ethers.utils.arrayify(lastByte),
  ]);
  const noreovery_hex = ethers.utils.hexlify(signature_concat);
  console.log(noreovery_hex);
  return noreovery_hex;
}

const alice_set_actionsigner_request = async () => {
    const sixConnector = new SixDataChainConnector();
    // ** LOCAL TESTNET **
    sixConnector.rpcUrl = "http://localhost:26657";
    const accountSigner = await sixConnector.accounts.privateKeyToAccount(process.env.ALICE_PRIVATE_KEY!);
    // const accountSigner = await sixConnector.accounts.mnemonicKeyToAccount(process.env.ALICE_MNEMONIC);

    // ** FIVENET **
    // sixConnector.rpcUrl = "https://rpc1.fivenet.sixprotocol.net:443";
    // const accountSigner = await sixConnector.accounts.privateKeyToAccount(process.env.PRIVATE_KEY);
    // const accountSigner = await sixConnector.accounts.mnemonicKeyToAccount(process.env.MNEMONIC);

    const address = (await accountSigner.getAccounts())[0].address;
    const rpcClient = await sixConnector.connectRPCClient(accountSigner, {
      gasPrice: fee.GasPrice.fromString("1.25usix"),
    });

    const evmSignatureByte = await signing();
    const signature = await sixEvmSigner(evmSignatureByte);
    const evmOwnerAddress = ethers.utils.verifyMessage(base64_msg, signature);
    console.log("Evm Signer Address",evmOwnerAddress);

    const ownerSignature: SetSignerSignature = {
        signature: signature,
        message: base64_msg,
    };
    // base64 encode signature
    const base64_signature = Buffer.from(
        JSON.stringify(ownerSignature)
    ).toString("base64");

    const msgCreateActionSigner: typesTxNFTOracle.MsgCreateActionSigner = {
        creator: address,
        base64EncodedSetSignerAction: base64_signature,
    };

    const msg = await rpcClient.nftoracleModule.msgCreateActionSigner(msgCreateActionSigner); //! suppose to be nftoracleModule will be fixed in next version

    const txResponse = await rpcClient.nftoracleModule.signAndBroadcast([msg], {
      fee: "auto",
      memo: "dee_link_account",
    });

    console.log(txResponse);
    try {
      const jsonLog = JSON.parse(txResponse.rawLog);
        if (jsonLog[0]){
        console.log("Event return :",jsonLog[0].events[0].attributes[0].value);
        }
    } catch (error) {
        console.log("Error: you message is failed");
    }
    return txResponse;
};
alice_set_actionsigner_request();
// signing();