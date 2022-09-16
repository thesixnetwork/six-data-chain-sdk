export interface IMetadataOffchain {
    image: string,
    name: string,
    description: string
    attributes:IMetadataOffchainAttributes []
}
export interface IMetadataOffchainAttributes {
    trait_type: string,
    value: any
}