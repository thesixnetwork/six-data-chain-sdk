const { BASE64 , SixDataChainConnector } = require("@sixnetwork/six-data-chain-sdk");
const exampleNewAttribute = require("./tmp/new-action.json")
const mnemonic = ""
const main = async () => {
    const sixConnector = new SixDataChainConnector()
    sixConnector.rpcUrl = "http://localhost:80"
    const accountSigner = await sixConnector.accounts.privateKeyToAccount(mnemonic)
    const address = (await accountSigner.getAccounts())[0].address
    const rpcClient = await sixDataChainConnector.connectRPCClient(accountSigner)

    const encodeBase64NewAction = BASE64.encode(JSON.stringify(exampleNewAttribute))

    const msg = await rpcClient.nftmngrModule.msgAddAction({
        creator: address,
        code: "buakaw99",
        base64NewAction: encodeBase64NewAction,
    })
    const txResponse = await rpcClient.nftmngrModule.signAndBroadcast([msg])
    console.log(txResponse)
}
main()
