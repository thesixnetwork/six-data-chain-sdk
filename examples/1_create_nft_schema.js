const { BASE64, SixDataChainConnector } = require("six-data-chain-sdk");
const exampleSchema = require("./tmp/nft-schema-example.json")
const main = async () => {
    const sixDataChainConnector = new SixDataChainConnector()
    const accountSigner = await sixDataChainConnector.accounts.privateKeyToAccount("pk or mnomic", { prefix: "6nft" })
    // get wallet address
    const address = (await accountSigner.getAccounts())[0].address
    await sixDataChainConnector.rpcClient.connect({
        rpcUrl: "http://localhost:26657",
        accountSigner: accountSigner
    })

    const encodeBase64Schema = BASE64.encode(JSON.stringify(exampleSchema))
    const msg = await sixDataChainConnector.rpcClient.buildMsgCreateNFTSchema({
        creator: address,
        nftSchemaBase64: encodeBase64Schema
    })

    const txResponse = await sixDataChainConnector.rpcClient.boardCastTx([msg])
    console.log(txResponse)

}
main()