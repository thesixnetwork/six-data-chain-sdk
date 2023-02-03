import { SixDataChainConnector } from "../../src/client";
import { EncodeObject } from "@cosmjs/proto-signing";
import { ITxNFTmngr } from "../../src/";

const main = async () => {
    const sixConnector = new SixDataChainConnector()
    // specify the RPC URL of the chain
    sixConnector.rpcUrl = "http://localhost:26657";
    // Retrieve acctount signer from private key or mnemonic
    const accountSigner = await sixConnector.accounts.mnemonicKeyToAccount(
        "code1 code2 code3 code4 code5 code6 code7 code8 code9 code10 code11 code12 code13 code14 code15 code16 code17 code18 code19 code20 code21 code22 code23 code24"
    );
    // Get index of account
    const address = (await accountSigner.getAccounts())[0].address
    const rpcClient = await sixConnector.connectRPCClient(accountSigner)
    
    const msgArray:Array<EncodeObject> =[]

    // const action : MsgPerformActionByAdmin = {
    //     creator: address,
    //     nft_schema_code: "six.rocket_ticket",
    //     tokenId: "1",
    //     action: "burn",
    //     ref_id: "tk1_burn_20points_1",
    //     parameters: [{
    //         name: "points",
    //         value: "20"
    //     }]
    // }

    const action : ITxNFTmngr.MsgPerformActionByAdmin = {
        creator: address,
        nft_schema_code: "six.rocket_ticket",
        tokenId: "1",
        action: "start_mission",
        ref_id: "start_mission-tk1",
        parameters: []
    }
    const msg = await rpcClient.nftmngrModule.msgPerformActionByAdmin(action)
    msgArray.push(msg)
    const txResponse = await rpcClient.nftmngrModule.signAndBroadcast(msgArray, {
        fee: { amount: [{ denom: "usix", amount: "10000000" }], gas: "1500000" },
        memo: "tk1_burn_20points",
    });
    console.log(txResponse)

}
main()