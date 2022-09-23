

import { Accounts } from "./Accounts"
import { OfflineSigner } from "@cosmjs/proto-signing";
import * as nftmngrModuleGenerate from "../modules/sixnft/sixnft.nftmngr/module/index"
import * as evmsupportModuleGenerate from "../modules/sixnft/sixnft.evmsupport/module/index"
import * as adminModuleGenerate from "../modules/sixnft/sixnft.admin/module/index"
import * as nftoracleModuleGenerate from "../modules/sixnft/sixnft.nftoracle/module/index"


type Module = {
    txClient: (wallet: any, options: any) => Promise<any>
    queryClient: (options: any) => Promise<any>
}
type ModulesName =
    | "nftmngrModule"
    | "evmsupportModule"
    | "adminModule"
    | "nftoracleModule"

export class SixDataChainConnector {
    // public rpcClient: RPCClient = new RPCClient();
    // public api: ApiClient
    // public rpc: RpcClient
    // public nodeUrl: string = "http://localhost"
    public apiUrl: string;
    public rpcUrl: string;
    public accounts: Accounts = new Accounts();

     /** 
    * @param _nodeUrl is the url of the node to connect default is http://localhost
    * @param _portApi default is 1317
    * @param _portRpc default is 26657
    **/
    constructor(
        _nodeUrl: string = "http://localhost",
        _portApi: number = 1317,
        _portRpc: number = 26657
    ) {
        const url = this.removeSLash(_nodeUrl)
        this.apiUrl = url + ":" + _portApi
        this.rpcUrl = url + ":" + _portRpc
    }

    connectAPIClient = async () => {
        const [
            nftmngrModule,
            evmsupportModule,
            adminModule,
            nftoracleModule,
        ] = await Promise.all([
            nftmngrModuleGenerate.queryClient({ addr: this.apiUrl }),
            evmsupportModuleGenerate.queryClient({ addr: this.apiUrl }),
            adminModuleGenerate.queryClient({ addr: this.apiUrl }),
            nftoracleModuleGenerate.queryClient({ addr: this.apiUrl })
        ])
        return {
            nftmngrModule,
            evmsupportModule,
            adminModule,
            nftoracleModule
        }
    }

    /** 
    * @param accountSigner OfflineSigner
    * @example 
    * const signer = await sixConnector.accounts.privateKeyToAccount("priveteKey")
    * const txClient = await sixConnector.connectRPCClient(signer)
    * @description connect to RPC client use for send transaction
    **/
    connectRPCClient = async (accountSigner: OfflineSigner) => {
        const [
            nftmngrModule,
            evmsupportModule,
            adminModule,
            nftoracleModule,
        ] = await Promise.all([
            nftmngrModuleGenerate.txClient(accountSigner, { addr: this.rpcUrl }),
            evmsupportModuleGenerate.txClient(accountSigner, { addr: this.rpcUrl }),
            adminModuleGenerate.txClient(accountSigner, { addr: this.rpcUrl }),
            nftoracleModuleGenerate.txClient(accountSigner, { addr: this.rpcUrl })
        ])
        return {
            nftmngrModule,
            evmsupportModule,
            adminModule,
            nftoracleModule,
        }
    }

    private removeSLash = (url: string) => {
        if (url[url.length - 1] === "/") return url.slice(0, -1)
        return url
    }
    // switch(module) {
    //     case "nftmngrModule": return await nftmngrModule.queryClient()
    //     case "evmsupportModule": return await evmsupportModule.queryClient()
    //     default:
    //         throw new Error("Module not found")
    // }

}
    // InitQueryClient = async (
    //     module: "nftmngrModule" | "evmsupportModule" | "adminModule" | "nftoracleModule",
    //     addr: string
    // ) => {
    //     switch (module) {
    //         case "nftmngrModule":
    //             return await this.modules.nftmngrModule.queryClient({ addr: addr })
    //         case "evmsupportModule":
    //             return await this.modules.evmsupportModule.queryClient({ addr: addr })
    //         case "adminModule":
    //             return await this.modules.adminModule.queryClient({ addr: addr })
    //         case "nftoracleModule":
    //             return <Api>(await this.modules.nftoracleModule.queryClient({ addr: addr }))
    //     }
    // }




