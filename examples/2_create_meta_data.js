const { BASE64, SixDataChainConnector } = require("six-data-chain-sdk");
const exampleNFTData = require("./tmp/nft-data-example.json")
const main = async () => {
    const sixConnector = new SixDataChainConnector("http://127.0.0.1")
    const accountSigner = await sixConnector.accounts.privateKeyToAccount("pk or mnomic")
    // get wallet address
    const address = (await accountSigner.getAccounts())[0].address
    const rpcClient = await sixConnector.connectRPCClient(accountSigner)
    const encodeBase64Schema = BASE64.encode(JSON.stringify(exampleNFTData))
    const msg = await rpcClient.nftmngrModule.msgCreateMetadata({
        creator: address,
        nftSchemaCode: "buakaw99",
        tokenId: "2",
        base64NFTData: encodeBase64Schema
    })

    const txResponse = await rpcClient.nftmngrModule.signAndBroadcast([msg])
    console.log(txResponse)

}
main()