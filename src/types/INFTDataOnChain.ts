export interface INFTDataOnChain {
    nftData: {
        nft_schema_code: string;
        token_id: number;
        token_owner: string;
        owner_address_type: string;
        origin_image: string;
        onchain_image?: string;
        // why use origin_attributes: any[] 
        // because we don't know the type of onchain_attributes
        // string_attribute_value
        // number_attribute_value
        // boolean_attribute_value
        origin_attributes: any[ 
        // {
            // name: string,
            // string_attribute_value: {
            //     value: string
            // }
        // }
        ]
        // why use onchain_attributes: any[] 
        // because we don't know the type of onchain_attributes
        // string_attribute_value
        // number_attribute_value
        // boolean_attribute_value
        onchain_attributes: any[]
    }
}