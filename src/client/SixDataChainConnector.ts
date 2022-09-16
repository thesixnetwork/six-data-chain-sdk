

import { APIClient } from "./APIClient"
import { RPCClient } from "./RPCClient"
import { Accounts } from "./Accounts"

import { DirectSecp256k1HdWallet, Registry, OfflineSigner, EncodeObject } from "@cosmjs/proto-signing";
interface ISixDataChainConnectorConstructor {
    url: string,
    apiPort: number,
    rpcPort: number
}
export class SixDataChainConnector {
    public rpcClient: RPCClient = new RPCClient();
    public apiClient: APIClient = new APIClient();
    public accounts: Accounts = new Accounts();
    
    
       
    // }) {
    //     this.url = param.url;
    //     this.apiPort = param.apiPort;
    //     this.rpcPort = param.rpcPort;
    // }
    // async RPCClient = (url: string = "http://localhost", rpcPort: number = 26657) => {
    //     this.rpcClient.connect({
    //         url: url,
    //         port: rpcPort
    //     })
}