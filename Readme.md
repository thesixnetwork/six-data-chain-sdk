# This project is Six Data Chain Client 
it use for send transactions and query data from chain

------
## SET UP PROJECT 
```
npm i six-data-chain-sdk

or

yarn add six-data-chain-sdk
```

## EXAMPLE RPC CONNECTOR
### javascript
```
const {SixDataChainConnector} = require("six-data-chain-sdk") 

const main = async() => {
    const sixDataChainConnector = new SixDataChainConnector()
    const sixDataChainConnector = new SixDataChainConnector()
    await sixDataChainConnector.rpcClient.connect({
        rpcUrl: "http://35.213.145.135:26657",
    })
    
    
}
```