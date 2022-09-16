export interface INFTData {
    nft_schema_code: string,
    token_id: number,
    token_owner: string
    origin_image: string
    origin_attributes: IOriginAttribute[]
    onchain_attributes: any[]

}
export interface IOriginAttribute {
    name: string
    value: string
}
export interface IMetadataSchema {
    nFTSchema: {
        code: string,
        name: string,
        owner: string,
        origin_data: {
            origin_chain: string, // "ethereum" | "binance" | "polygon" | "solana" | "tezos" | "avalanche" | "fantom" | "harmony" | "xdai" | "celo" | "klaytn" | "arbitrum" | "rsk" | "tron" | "waves" | "neo" | "ontology" | "flow" | "secret" | "near" | "algorand" | "cosmos" | "terra" | "kusama" | "polkadot" | "substrate" | "eos" | "wax" | "telos" | "eosio" | "icon" | "iotex" | "nervos" | "neo3" | "lto" | "thorchain" | "elrond" | "binance-smart-chain" | "filecoin" | "near-protocol" | "near-eth" | "near-eth-erc20" | "near-eth-erc721" | "near-eth-erc1155" | "near-eth-erc20-bridge" | "near-eth-erc721-bridge" | "near-eth-erc1155-bridge" | "near-eth-erc20-bridge-v2" | "near-eth-erc721-bridge-v2" | "near-eth-erc1155-bridge-v2" | "near-eth-erc20-bridge-v3" | "near-eth-erc721-bridge-v3" | "near-eth-erc1155-bridge-v3" | "near-eth-erc20-bridge-v4" | "near-eth-erc721-bridge-v4" | "near-eth-erc1155-bridge-v4" | "near-eth-erc20-bridge-v5" | "near-eth-erc721-bridge-v5" | "near-eth-erc1155-bridge-v5" | "near-eth-erc20-bridge-v6" | "near-eth-erc721-bridge-v6" | "near-eth-erc1155-bridge-v6" | "near-eth-erc20-bridge-v7" | "near-eth-erc721-bridge-v7" | "near-eth-erc1155-bridge-v
            origin_contract_address: string
            origin_base_url: string,
            attribute_overriding: string
            metadata_format: string, // "opensea" use for display and use for key of attribute
            origin_attributes: [
                {
                    name: string,
                    data_type: string, // string | boolean | number
                    display_value_field: string, // default is "value"
                    display_option: any
                        // bool_display_type?: string
                        // opensea: {
                        //     bool_display_type:string
                        //     trait_type: string
                        //     max_value:string
                        // }
                    
                    default_mint_value:string
                    hidden_to_marketplace:boolean // default is false
                }
            ]
            uri_retrieval_method: string // BASE
        }
        onchain_data: {
            reveal_required: boolean,
            reveal_secret?: string,
            nft_attributes: [
                {
                    name: string,
                    data_type: string,
                    required:boolean // default is false
                    display_value_field: string, // default is "value"
                    display_option: any
                    // {
                    //     bool_display_type:string // yes no | true false | 1 0
                    //     opensea: {
                    //         display_type: string,
                    //         trait_type: string
                    //         max_value: string
                    //     }
                    // }
                    default_mint_value: string
                    hidden_to_marketplace: boolean // default is false
                }
            ],
            token_attributes: [
                {
                    name: string,
                    data_type: string,
                    hidden_to_marketplace?: boolean,
                    default_mint_value?: string,
                    display_value_field?: string,
                    display_option?: any
                    // {
                    //     opensea: {
                    //         trait_type: string
                    //         max_value?: string
                    //         display_type: string
                    //     }
                    // }

                }
            ]
            actions: [
                {
                    name: string
                    desc: string
                    when: string
                    then: string[]
                }
            ]
            on_off_switch: {
                active: boolean
            },
            status: {
                first_mint_complete: boolean
            }
            nft_attributes_value:[
                {
                    name:string,
                    number_attribute_value:{
                        value:number
                    }
                }
            ]
        }
    }
}