const {BASE64,SixDataChainConnector} = require("six-data-chain-sdk");

const main = async() => {
    const sixDataChainConnector = new SixDataChainConnector()
    await sixDataChainConnector.apiClient.connect({apiUrl:"http://localhost:1317"})
    // console.log(sixDataChainConnector.apiClient)
    const allNFTSchema = await sixDataChainConnector.apiClient.queryNftSchemaAll()//.catch(e=>{console.log(e)})
    console.log(JSON.stringify(allNFTSchema.data))
}
main()