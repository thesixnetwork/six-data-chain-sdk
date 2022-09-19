const {BASE64,SixDataChainConnector} = require("six-data-chain-sdk");

const main = async() => {
    const sixDataChainConnector = new SixDataChainConnector()
    await sixDataChainConnector.apiClient.connect({apiUrl:"http://localhost:1317"})

    const allNFTSchema = await sixDataChainConnector.apiClient.queryNftData("buakaw99","2")//.catch(e=>{console.log(e)})
    console.log(JSON.stringify(allNFTSchema.data))
}
main()