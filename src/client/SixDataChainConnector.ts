

import { Accounts } from "./Accounts"
import { SigningStargateClientOptions} from "@cosmjs/stargate";
import { OfflineSigner } from "@cosmjs/proto-signing";
import * as nftmngrModuleGenerate from "../modules/sixnft/thesixnetwork.sixnft.nftmngr/module/index"
import * as nftoracleModuleGenerate from "../modules/sixnft/thesixnetwork.sixnft.nftoracle/module/index"
import * as nftadminModuleGenerate from "../modules/sixnft/thesixnetwork.sixnft.nftadmin/module/index"
import * as tokenmngrModuleGenerate from "../modules/six-protocol/thesixnetwork.sixprotocol.tokenmngr/module/index"
import * as protocoladminModuleGenerate from "../modules/six-protocol/thesixnetwork.sixprotocol.protocoladmin/module/index"
import * as cosmosbankModuleGenerate from "../modules/cosmos/cosmos-sdk/cosmos.bank.v1beta1/module/index"
import * as cosmosstakingLegacyModuleGenerate from "../modules/cosmos/cosmos-sdk/cosmos.staking.v1beta1/module/index"
import * as cosmosstakingModuleGenerate from "../modules/cosmos/cosmos-sdk/cosmos.staking.v2beta1/module/index"
import * as cosmosTx from "../modules/cosmos/cosmos-sdk/cosmos.tx.v1beta1/module/index"
import * as distributionModuleGenerate from "../modules/cosmos/cosmos-sdk/cosmos.distribution.v1beta1/module/index"

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
            nftAdminModule,
            tokenmngrModule,
            protocolAdminModule,
            cosmosBankModule,
            cosmosStakingModule,
            cosmosStakingModuleLegacy,
            cosmosTxModule,
            distributionModule
        ] = await Promise.all([
            nftmngrModuleGenerate.queryClient({ addr: this.apiUrl }),
            nftoracleModuleGenerate.queryClient({ addr: this.apiUrl }),
            nftadminModuleGenerate.queryClient({ addr: this.apiUrl }),
            tokenmngrModuleGenerate.queryClient({ addr: this.apiUrl }),
            protocoladminModuleGenerate.queryClient({ addr: this.apiUrl }),
            cosmosbankModuleGenerate.queryClient({ addr: this.apiUrl }),
            cosmosstakingModuleGenerate.queryClient({ addr: this.apiUrl }),
            cosmosstakingLegacyModuleGenerate.queryClient({ addr: this.apiUrl }),
            cosmosTx.queryClient({ addr: this.apiUrl }),
            distributionModuleGenerate.queryClient({ addr: this.apiUrl })
        ])
        return {
            nftmngrModule,
            nftoracleModule,
            nftAdminModule,
            tokenmngrModule,
            protocolAdminModule,
            cosmosBankModule,
            cosmosStakingModule,
            cosmosStakingModuleLegacy,
            cosmosTxModule,
            distributionModule
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
            nftoracleModule,
            nftAdminModule,
            tokenmngrModule,
            protocolAdminModule,
            cosmosBankModule,
            cosmosStakingModule,
            cosmosStakingModuleLegacy,
            cosmosTxModule,
            distributionModule
        ] = await Promise.all([
            nftmngrModuleGenerate.txClient(accountSigner, { addr: this.rpcUrl },options),
            nftadminModuleGenerate.txClient(accountSigner, { addr: this.rpcUrl },options),
            nftoracleModuleGenerate.txClient(accountSigner, { addr: this.rpcUrl },options),
            tokenmngrModuleGenerate.txClient(accountSigner, { addr: this.rpcUrl },options),
            protocoladminModuleGenerate.txClient(accountSigner, { addr: this.rpcUrl },options),
            cosmosbankModuleGenerate.txClient(accountSigner, { addr: this.rpcUrl },options),
            cosmosstakingModuleGenerate.txClient(accountSigner, { addr: this.rpcUrl },options),
            cosmosstakingLegacyModuleGenerate.txClient(accountSigner, { addr: this.rpcUrl },options),
            cosmosTx.txClient(accountSigner,{ addr: this.rpcUrl },options),
            distributionModuleGenerate.txClient(accountSigner,{ addr: this.rpcUrl },options)
        ])
        return {
            nftmngrModule,
            nftoracleModule,
            nftAdminModule,
            tokenmngrModule,
            protocolAdminModule,
            cosmosBankModule,
            cosmosStakingModule,
            cosmosStakingModuleLegacy,
            cosmosTxModule,
            distributionModule
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




