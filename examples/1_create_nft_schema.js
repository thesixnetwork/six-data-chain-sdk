const { BASE64, SixDataChainConnector } = require("@sixnetwork/six-data-chain-sdk");
const exampleSchema = require("./tmp/nft-schema-example.json")
const main = async () => {
    const sixConnector = new SixDataChainConnector("http://127.0.0.1")
    const accountSigner = await sixConnector.accounts.privateKeyToAccount("pk or mnomic")
    const address = (await accountSigner.getAccounts())[0].address
    const rpcClient = await sixDataChainConnector.connectRPCClient(accountSigner)

    const encodeBase64Schema = BASE64.encode(JSON.stringify(exampleSchema))
    const msg = await rpcClient.nftmngrModule.msgCreateNFTSchema({
        creator: address,
        nftSchemaBase64: encodeBase64Schema
    })

    const txResponse = await rpcClient.nftmngrModule.signAndBroadcast([msg])
    console.log(txResponse)

}
main()