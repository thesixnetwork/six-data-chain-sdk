import axios from "axios";
import { Api as ApiNftMngr } from "../modules/sixnft.nftmngr/module/rest"
interface ISyncState {
    syncing: boolean;
}

interface IConnect {
    apiUrl?: string,
}
/**
 * @description This class is used to connect to the API node for query data
 */
export class APIClient {
    public apiUrl: string = "http://localhost:1317";
    private apiNFTMngr: ApiNftMngr<unknown> = new ApiNftMngr({ baseUrl: "http://localhost:1317" })


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
        apiUrl: "http://localhost:1317"
        
    }) {
        if(param.apiUrl)
            this.apiUrl = param.apiUrl
        
        this.apiNFTMngr = new ApiNftMngr({
            baseUrl: this.apiUrl
        })
    }

    /**
     * @description This function is used to check if the node is syncing or not 
     * @returns {Promise<ISyncState>} Return Promise of INFTDataOnChain because you can use promise all for increase performance
     */
    async checkSyncState() {
        return axios.get<ISyncState>(`${this.apiUrl}/cosmos/base/tendermint/v1beta1/syncing`)
    }
    /**
   * No description
   *
   * @tags Query
   * @name QueryActionByRefId
   * @summary Queries a ActionByRefId by index.
   * @request GET:/sixnft/nftmngr/action_by_ref_id/{refId}
   */
    async queryActionByRefId(refId: string) {
        return this.apiNFTMngr.queryActionByRefId(refId)
    }
    /**
   * No description
   *
   * @tags Query
   * @name QueryActionByRefIdAll
   * @summary Queries a list of ActionByRefId items.
   * @request GET:/sixnft/nftmngr/action_by_ref_id
   */
    async queryActionByRefIdAll(query?: {
        "pagination.key"?: string;
        "pagination.offset"?: string;
        "pagination.limit"?: string;
        "pagination.count_total"?: boolean;
    }) {
        return this.apiNFTMngr.queryActionByRefIdAll(query)
    }
    /**
       * No description
       *
       * @tags Query
       * @name QueryNftData
       * @summary Queries a NftData by index.
       * @request GET:/sixnft/nftmngr/nft_data/{nftSchemaCode}/{tokenId}
       */
    async queryNftData(nftSchemaCode: string, tokenId: string) {
        return this.apiNFTMngr.queryNftData(nftSchemaCode, tokenId)
    }
    /**
   * No description
   *
   * @tags Query
   * @name QueryNftSchemaAll
   * @summary Queries a list of NFTSchema items.
   * @request GET:/sixnft/nftmngr/nft_schema
   */
    async queryNftDataAll(query?: {
        "pagination.key"?: string;
        "pagination.offset"?: string;
        "pagination.limit"?: string;
        "pagination.count_total"?: boolean;
    }) {
        return this.apiNFTMngr.queryNftDataAll(query)
    }
    /**
   * No description
   *
   * @tags Query
   * @name QueryNftSchema
   * @summary Queries a NFTSchema by index.
   * @request GET:/sixnft/nftmngr/nft_schema/{code}
   */
    async queryNftSchema(code: string) {
        return this.apiNFTMngr.queryNftSchema(code)
    }
    /**
   * No description
   *
   * @tags Query
   * @name QueryNftSchemaAll
   * @summary Queries a list of NFTSchema items.
   * @request GET:/sixnft/nftmngr/nft_schema
   */
    async queryNftSchemaAll(query?: {
        "pagination.key"?: string;
        "pagination.offset"?: string;
        "pagination.limit"?: string;
        "pagination.count_total"?: boolean;
    }) {
        return this.apiNFTMngr.queryNftSchemaAll(query)
    }
    /**
   * No description
   *
   * @tags Query
   * @name QueryOrganization
   * @summary Queries a Organization by index.
   * @request GET:/sixnft/nftmngr/organization/{name}
   */
    async queryOrganization(name: string,) {
        return this.apiNFTMngr.queryOrganization(name)
    }
    /**
   * No description
   *
   * @tags Query
   * @name QueryOrganizationAll
   * @summary Queries a list of Organization items.
   * @request GET:/sixnft/nftmngr/organization
   */
    async queryOrganizationAll(query?: {
        "pagination.key"?: string;
        "pagination.offset"?: string;
        "pagination.limit"?: string;
        "pagination.count_total"?: boolean;
    }) {
        return this.apiNFTMngr.queryOrganizationAll(query)
    }
    

}