const {  SixDataChainConnector } = require("@sixnetwork/six-data-chain-sdk");

const main = async () => {
    const sixConnector = new SixDataChainConnector("http://127.0.0.1")
    const accountSigner = await sixConnector.accounts.privateKeyToAccount("pk or mnomic")
    
     // Or direct config (require uri with port) 
    // use when node split url
    // const sixConnector = new SixDataChainConnector()
    // sixConnector.apiUrl = "http://example1.node:1317"
    // sixConnector.rpcUrl = "http://example2.node:26657"

    const address = (await accountSigner.getAccounts())[0].address
    const rpcClient = await sixConnector.connectRPCClient(accountSigner)

    const msg = await rpcClient.msgPerformActionByAdmin({
        creator: address,
        nft_schema_code: "buakaw99",
        tokenId: "2",
        action: "use10percentdiscount",
        ref_id: "1"
    })

    const tx = await rpcClient.nftmngrModule.signAndBroadcast([msg])
    console.log(tx)

}
main()