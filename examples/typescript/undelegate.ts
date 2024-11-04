import { SixDataChainConnector, BASE64, typesTxCosmosStaking, fee } from "../../src";
import { Coin } from "../../src/modules/six-protocol/thesixnetwork.sixprotocol.tokenmngr/module/types/cosmos/base/v1beta1/coin";

const unDelegate = async () => {
    const sixConnector = new SixDataChainConnector();
    sixConnector.rpcUrl = "http://localhost:26657";

    // Retrieve acctount signer from private key or mnemonic
    const accountSigner = await sixConnector.accounts.mnemonicKeyToAccount(
        "code1 code2 code3 code4 code5 code6 code7 code8 code9 code10 code11 code12 code13 code14 code15 code16 code17 code18 code19 code20 code21 code22 code23 code24"
    );

    // Get index of account
    const address = (await accountSigner.getAccounts())[0].address;
    const rpcClient = await sixConnector.connectRPCClient(accountSigner, { gasPrice: fee.GasPrice.fromString("1.25usix") })

    const validator_address = "6xvaloper138lkrkpjn2ahvlmqqa6jerae0jzvnlg683lm5d"

    const delegate_amount: Coin = {
        amount: "20000000",
        denom: "usix"
    }

    const msgDelegate: typesTxCosmosStaking.MsgUndelegate = {
        amount: delegate_amount,
        delegator_address: address,
        validator_address: validator_address
    }

    const msg = await rpcClient.cosmosStakingModule.msgUndelegate(msgDelegate)
    const txResponse = await rpcClient.nftmngrModule.signAndBroadcast([msg], {
        fee: "auto",
        memo: "memo",
    });
    console.log(txResponse);
}

unDelegate().then(() => {
    console.log
}).catch(() => {
    console.log
});