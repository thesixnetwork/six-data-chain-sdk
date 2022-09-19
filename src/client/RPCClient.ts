
import { OfflineSigner, EncodeObject } from "@cosmjs/proto-signing";
import { txClient as sixnftNftmngrClient } from "../modules/sixnft.nftmngr/module/index"
import { MsgCreateNFTSchema, MsgCreateMetadata, MsgPerformActionByAdmin } from "../modules/sixnft.nftmngr/module/types/nftmngr/tx"
import { SignAndBroadcastOptions, ITxClientRes } from "../modules/sixnft.nftmngr/module/index"
import { MsgGrantPermission, MsgRevokePermission, MsgMint, MsgBurn } from "../modules/sixnft.admin/module/types/admin/tx"
interface IConnect {
    rpcUrl: string,
    accountSigner?: OfflineSigner
}

export class RPCClient {
    private rpc: string = "";
    private accountSigner?: OfflineSigner;
    private client?: ITxClientRes;
    private defaultSignOptions: SignAndBroadcastOptions = {
        fee: {
            amount: [],
            gas: "2000000",
        },
    }

    setDefaultSignOptions(signOptions: SignAndBroadcastOptions) {
        this.defaultSignOptions = signOptions
    }

    /**
     * @example await sixDataChainConnector.rpcClient.connect({
     *      url: "http://35.213.145.135",
     *      port: 26657
     *  })
     * @description This function is used to connect to the RPC node but should await to check connection
     * @param param IConnect 
     * @returns {Promise<void>}
     */
    async connect(param: IConnect = {
        rpcUrl: "http://localhost:26657"
    }) {
        if (!param.accountSigner)
            throw new Error("accountSigner is required")
        this.accountSigner = param.accountSigner
        this.rpc = `${param.rpcUrl}`
        this.client = await sixnftNftmngrClient(this.accountSigner, { addr: this.rpc })
    }

    /**
     * @example buildMsgPerformActionByAdmin({...msg param})
     * @description This function is used to build MsgPerformActionByAdmin
     * @param msg MsgPerformActionByAdmin 
     * @returns {EncodeObject} Return EncodeObject
     */
    async buildMsgPerformActionByAdmin(msg: MsgPerformActionByAdmin): Promise<EncodeObject> {
        this.checkClientConnector()
        // const client = await sixnftNftmngrClient(this.accountSigner!, { addr: this.rpc })
        return this.client!.msgPerformActionByAdmin(msg)
    }
    /**
     * @example buildMsgCreateMetadata({...msg param})
     * @description This function is used to build MsgCreateMetadata
     * @param msg MsgCreateMetadata 
     * @returns {EncodeObject} Return EncodeObject
     */
    async buildMsgCreateMetadata(msg: MsgCreateMetadata): Promise<EncodeObject> {
        this.checkClientConnector()
        // const client = await sixnftNftmngrClient(this.accountSigner!, { addr: this.rpc })
        return this.client!.msgCreateMetadata(msg)
    }

    /**
     * @example buildMsgCreateNFTSchema(param)
     * @description This function is used to build MsgCreateNFTSchema
     * @param msg MsgCreateNFTSchema  {creator:string,nftSchemaBase64:string}
     * @returns {EncodeObject} Return EncodeObject
     */
    async buildMsgCreateNFTSchema(msg: MsgCreateNFTSchema): Promise<EncodeObject> {
        this.checkClientConnector()
        // const client = await sixnftNftmngrClient(this.accountSigner!, { addr: this.rpc })
        return this.client!.msgCreateNFTSchema(msg)
    }
    /**
     * @example buildMsgGrantPermission(param)
     * @description This function is used to build MsgCreateNFTSchema
     * @param msg MsgGrantPermission 
     * @returns {EncodeObject} Return EncodeObject
     */
    async buildMsgGrantPermission(msg: MsgGrantPermission): Promise<EncodeObject> {
        this.checkClientConnector()
        // const client = await sixnftNftmngrClient(this.accountSigner!, { addr: this.rpc })
        return this.client!.msgGrantPermission(msg)
    }
    /**
     * @example buildMsgRevokePermission(msg)
     * @description This function is used to build MsgRevokePermission
     * @param msg MsgRevokePermission 
     * @returns {EncodeObject} Return EncodeObject
     */
    async buildMsgRevokePermission(msg: MsgRevokePermission): Promise<EncodeObject> {
        this.checkClientConnector()
        // const client = await sixnftNftmngrClient(this.accountSigner!, { addr: this.rpc })
        return this.client!.msgRevokePermission(msg)
    }
    /**
     * @example buildMsgMint(msg)
     * @description This function is used to build MsgMint
     * @param msg MsgMint 
     * @returns {EncodeObject} Return EncodeObject
     */
    async buildMsgMint(msg: MsgMint): Promise<EncodeObject> {
        this.checkClientConnector()
        // const client = await sixnftNftmngrClient(this.accountSigner!, { addr: this.rpc })
        return this.client!.msgMint(msg)
    }
    /**
     * @example buildMsgBurn(msg)
     * @description This function is used to build MsgBurn
     * @param msg MsgBurn 
     * @returns {EncodeObject} Return EncodeObject
     */
    async buildMsgBurn(msg: MsgBurn): Promise<EncodeObject> {
        this.checkClientConnector()
        // const client = await sixnftNftmngrClient(this.accountSigner!, { addr: this.rpc })
        return this.client!.msgBurn(msg)
    }

    /**
     * @example boardCastTx(txs, {fee: {amount: [], gas: "2000000"}})
     * @description this function is used to broadcast txs 
     * @param txs EncodeObject[] : You can get it from buildMsg function (buildMsgCreateNFTSchema etc.)
     * @param customSignOptions SignAndBroadcastOptions : You can set custom sign options (fee, memo, gas)
     * @returns {EncodeObject} Return EncodeObject
     */
    async boardCastTx(txs: EncodeObject[], customSignOptions?: SignAndBroadcastOptions) {
        this.checkClientConnector()
        // const client = await sixnftNftmngrClient(this.accountSigner!, { addr: this.rpc })
        const signOptions = this.getDefaultSignAndBroadcastOptions(customSignOptions);
        // console.log("client",client)
        return await this.client!.signAndBroadcast(txs, {fee:signOptions.fee});
    }

    private getDefaultSignAndBroadcastOptions(customSignOptions?: SignAndBroadcastOptions) {
        return customSignOptions ? customSignOptions : this.defaultSignOptions
    }

    private checkClientConnector() {
        if (!this.accountSigner)
            throw Error("AccountSigner is not connected")
    }


}