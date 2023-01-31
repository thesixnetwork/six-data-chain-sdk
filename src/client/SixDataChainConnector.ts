

import { Accounts } from "./Accounts"
import { SigningStargateClientOptions} from "@cosmjs/stargate";
import { OfflineSigner } from "@cosmjs/proto-signing";
import * as nftmngrModuleGenerate from "../modules/sixnft/thesixnetwork.sixnft.nftmngr/module/index"
import * as nftoracleModuleGenerate from "../modules/sixnft/thesixnetwork.sixnft.nftoracle/module/index"
import * as nftadminModuleGenerate from "../modules/sixnft/thesixnetwork.sixnft.nftadmin/module/index"



type Module = {
    txClient: (wallet: any, options: any) => Promise<any>
    queryClient: (options: any) => Promise<any>
}

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
            nftoracleModule,
            nftAdminModule
        ] = await Promise.all([
            nftmngrModuleGenerate.queryClient({ addr: this.apiUrl }),
            nftoracleModuleGenerate.queryClient({ addr: this.apiUrl }),
            nftadminModuleGenerate.queryClient({ addr: this.apiUrl })
        ])
        return {
            nftmngrModule,
            nftoracleModule,
            nftAdminModule
        }
    }

    /** 
    * @param accountSigner OfflineSigner
    * @example 
    * const signer = await sixConnector.accounts.privateKeyToAccount("priveteKey")
    * const txClient = await sixConnector.connectRPCClient(signer)
    * @description connect to RPC client use for send transaction
    **/
    connectRPCClient = async (accountSigner: OfflineSigner,options?:SigningStargateClientOptions) => {
        const [
            nftmngrModule,
            nftadminModule,
            nftoracleModule,
        ] = await Promise.all([
            nftmngrModuleGenerate.txClient(accountSigner, { addr: this.rpcUrl },options),
            nftoracleModuleGenerate.txClient(accountSigner, { addr: this.rpcUrl },options),
            nftadminModuleGenerate.txClient(accountSigner, { addr: this.rpcUrl },options)
        ])
        return {
            nftmngrModule,
            nftadminModule,
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




