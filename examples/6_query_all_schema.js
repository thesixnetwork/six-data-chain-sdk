const {BASE64,SixDataChainConnector} = require("@sixnetwork/six-data-chain-sdk");

const main = async() => {
    const sixConnector = new SixDataChainConnector("http://127.0.0.1")
    const apiClient = await sixConnector.connectAPIClient()

    const allNFTSchema = await apiClient.nftmngrModule.queryNftSchemaAll()//.catch(e=>{console.log(e)})
    console.log(JSON.stringify(allNFTSchema.data))
}
main()