const {  SixDataChainConnector } = require("@sixnetwork/six-data-chain-sdk");

const main = async () => {
    const sixConnector = new SixDataChainConnector()
    const accountSigner = await sixConnector.accounts.privateKeyToAccount("pk or mnomic")
    
     // Or direct config (require uri with port) 
    // use when node split url
    // const sixConnector = new SixDataChainConnector()
    sixConnector.apiUrl = "http://example1.node:1317"
    sixConnector.rpcUrl = "http://example2.node:26657"

    const address = (await accountSigner.getAccounts())[0].address
    const rpcClient = await sixConnector.connectRPCClient(accountSigner)

    const msg = await rpcClient.nftmngrModule.msgPerformActionByAdmin({
        creator: address,
        nft_schema_code: "six.rocket_ticket",
        tokenId: "1",
        action: "transfer",
        params: [{
            name: "discount",
            value: "10"
        },{
            name: "token_id",
            value: "2"
        }],
        ref_id: "transfer_1_to_2"
    })

    const tx = await rpcClient.nftmngrModule.signAndBroadcast([msg])
    console.log(tx)

}
main()