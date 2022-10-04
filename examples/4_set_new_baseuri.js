const { SixDataChainConnector } = require("@sixnetwork/six-data-chain-sdk");
const mnemonic = ""
const main = async () => {
    const sixConnector = new SixDataChainConnector()
    sixConnector.rpcUrl = "http://localhost:80"
    const accountSigner = await sixConnector.accounts.privateKeyToAccount(mnemonic)
    const address = (await accountSigner.getAccounts())[0].address
    const rpcClient = await sixDataChainConnector.connectRPCClient(accountSigner)


    const msg = await rpcClient.nftmngrModule.msgSetBaseUri({
        creator: address,
        code: "",
        newBaseUri: ""
    })
    const txResponse = await rpcClient.nftmngrModule.signAndBroadcast([msg])
    console.log(txResponse)

}
main()
