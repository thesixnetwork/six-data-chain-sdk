const {  SixDataChainConnector } = require("six-data-chain-sdk");

const main = async () => {
    const sixDataChainConnector = new SixDataChainConnector()
    const accountSigner = await sixDataChainConnector.accounts.privateKeyToAccount("pk or mnomic", { prefix: "6nft" })
    // get wallet address
    const address = (await accountSigner.getAccounts())[0].address
    await sixDataChainConnector.rpcClient.connect({
        rpcUrl: "http://localhost:26657",
        accountSigner: accountSigner
    })
    // const encodeBase64Schema = BASE64.encode(JSON.stringify(exampleSchema))
    console.log(111)
    const msg = await sixDataChainConnector.rpcClient.buildMsgPerformActionByAdmin({
        creator: address,
        nft_schema_code: "buakaw99",
        tokenId: "2",
        action: "use10percentdiscount",
        ref_id: "1"
    })
    console.log(222)

    const txResponse = await sixDataChainConnector.rpcClient.boardCastTx([msg])
    console.log(txResponse)

}
main()