const { BASE64, SixDataChainConnector } = require("@sixnetwork/six-data-chain-sdk");
const exampleNFTData = require("./tmp/nft-metadata-example.json")
const main = async () => {
    const sixConnector = new SixDataChainConnector()
    
     // Or direct config (require uri with port) 
    // use when node split url
    // const sixConnector = new SixDataChainConnector()
    sixConnector.apiUrl = "http://example1.node:1317"
    sixConnector.rpcUrl = "http://example2.node:26657"
    
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