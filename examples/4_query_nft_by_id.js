const {SixDataChainConnector} = require("@sixnetwork/six-data-chain-sdk");

const main = async() => {
    const sixConnector = new SixDataChainConnector("http://127.0.0.1")
    const apiClient = await sixConnector.connectAPIClient()

    const nftData = await apiClient.nftmngrModule.queryNftData("buakaw99","2")//.catch(e=>{console.log(e)})
    console.log(JSON.stringify(nftData.data))
}
main()