

import { APIClient } from "./APIClient"
import { RPCClient } from "./RPCClient"
import { Accounts } from "./Accounts"

export class SixDataChainConnector {
    public rpcClient: RPCClient = new RPCClient();
    public apiClient: APIClient = new APIClient();
    public accounts: Accounts = new Accounts();
    
}