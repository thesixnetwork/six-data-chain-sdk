const { BASE64, SixDataChainConnector } = require("six-data-chain-sdk");
const exampleNFTData = require("./tmp/nft-data-example.json")
const main = async () => {
    const sixDataChainConnector = new SixDataChainConnector()
    const accountSigner = await sixDataChainConnector.accounts.privateKeyToAccount("gpk or mnomic")
    // get wallet address
    const address = (await accountSigner.getAccounts())[0].address
    await sixDataChainConnector.rpcClient.connect({
        rpcUrl: "http://localhost:26657/",
        accountSigner: accountSigner
    })
    const encodeBase64Schema = BASE64.encode(JSON.stringify(exampleNFTData))
    const msg = await sixDataChainConnector.rpcClient.buildMsgCreateMetadata({
        creator: address,
        nftSchemaCode: "buakaw99",
        tokenId: "2",
        base64NFTData: encodeBase64Schema
    })

    const txResponse = await sixDataChainConnector.rpcClient.boardCastTx([msg])
    console.log(txResponse)

}
main()