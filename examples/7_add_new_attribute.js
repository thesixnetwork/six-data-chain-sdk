const { BASE64 , SixDataChainConnector } = require("@sixnetwork/six-data-chain-sdk");
const exampleNewAttriubte = require("./tmp/new-attribute.json")
const mnemonic = ""
const main = async () => {
    const sixConnector = new SixDataChainConnector()
    sixConnector.rpcUrl = "http://localhost:80"
    const accountSigner = await sixConnector.accounts.privateKeyToAccount(mnemonic)
    const address = (await accountSigner.getAccounts())[0].address
    const rpcClient = await sixDataChainConnector.connectRPCClient(accountSigner)

    const encodeBase64NewAction = BASE64.encode(JSON.stringify(exampleNewAttriubte))

    const msg = await rpcClient.nftmngrModule.msgAddAttribute({
        creator: address,
        code: "buakaw99",
        location: "0", // if 0 it is for NFT_ATTRIBUTE and if 1 then it is for TOKEN_ATTRIBUTE 
        base64NewAttriuteDefenition: encodeBase64NewAction,
    })
    const txResponse = await rpcClient.nftmngrModule.signAndBroadcast([msg])
    console.log(txResponse)
}
main()