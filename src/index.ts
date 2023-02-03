import fetch from 'node-fetch'

globalThis.fetch = fetch

export * from "./client/SixDataChainConnector"
export * from "./helper/base64"
export * as ITxNFTmngr from "./modules/sixnft/thesixnetwork.sixnft.nftmngr/module/types/nftmngr/tx"
export * as ITxNFTadmin from "./modules/sixnft/thesixnetwork.sixnft.nftadmin/module/types/nftadmin/tx"
export * as ITxNFToracle from "./modules/sixnft/thesixnetwork.sixnft.nftoracle/module/types/nftoracle/tx"
export * as fee from "@cosmjs/stargate/build/fee"