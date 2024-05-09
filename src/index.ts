import fetch from 'node-fetch'

globalThis.fetch = fetch

export * from "./client/SixDataChainConnector"
export * from "./helper/base64"
// legacy code will be replicated and replaced with typesTxNFTManager
export * as ITxNFTmngr from "./modules/sixnft/thesixnetwork.sixnft.nftmngr/module/types/nftmngr/tx"
// legacy code will be replicated and replaced with typesTxNFTAdmin
export * as ITxNFTadmin from "./modules/sixnft/thesixnetwork.sixnft.nftadmin/module/types/nftadmin/tx"
// legacy code will be replicated and replaced with typesTxNFTOracle
export * as fee from "@cosmjs/stargate/build/fee"

// ############### COSMOSSDK ###############
// ################### TX ##################
export * as typesTxCosmosAuth from "./modules/cosmos/cosmos-sdk/cosmos.auth.v1beta1/module/types/cosmos/auth/v1beta1/auth"
export * as typesTxCosmosAuthz from "./modules/cosmos/cosmos-sdk/cosmos.authz.v1beta1/module/types/cosmos/authz/v1beta1/tx"
export * as typesTxBank from "./modules/cosmos/cosmos-sdk/cosmos.bank.v1beta1/module/types/cosmos/bank/v1beta1/tx"
export * as typesTxCosmosBank from "./modules/cosmos/cosmos-sdk/cosmos.bank.v1beta1/module/types/cosmos/bank/v1beta1/tx"
export * as typesTxCosmosCrisis from "./modules/cosmos/cosmos-sdk/cosmos.crisis.v1beta1/module/types/cosmos/crisis/v1beta1/tx"
export * as typesTxCosmosDistribution from "./modules/cosmos/cosmos-sdk/cosmos.distribution.v1beta1/module/types/cosmos/distribution/v1beta1/tx"
export * as typesTxCosmosEvidence from "./modules/cosmos/cosmos-sdk/cosmos.evidence.v1beta1/module/types/cosmos/evidence/v1beta1/tx"
export * as typesTxCosmosFeeGrant from "./modules/cosmos/cosmos-sdk/cosmos.feegrant.v1beta1/module/types/cosmos/feegrant/v1beta1/tx"
export * as typesTxCosmosGov from "./modules/cosmos/cosmos-sdk/cosmos.gov.v1beta1/module/types/cosmos/gov/v1beta1/tx"
// DISABLE THIS FEATURE FOR PUBLIC export * as typesTxCosmosMint from "./modules/cosmos/cosmos-sdk/cosmos.mint.v1beta1/module/types/cosmos/mint/v1beta1/mint"
export * as typesTxParams from "./modules/cosmos/cosmos-sdk/cosmos.params.v1beta1/module/types/cosmos/params/v1beta1/params"
export * as typesTxCosmosSlashing from "./modules/cosmos/cosmos-sdk/cosmos.slashing.v1beta1/module/types/cosmos/slashing/v1beta1/tx"
export * as typesTxCosmosStaking from "./modules/cosmos/cosmos-sdk/cosmos.staking.v1beta1/module/types/cosmos/staking/v1beta1/tx"
export * as typesTxCosmosUpgrade from "./modules/cosmos/cosmos-sdk/cosmos.upgrade.v1beta1/module/types/cosmos/upgrade/v1beta1/upgrade"
export * as typesTxCosmosVesting from "./modules/cosmos/cosmos-sdk/cosmos.vesting.v1beta1/module/types/cosmos/vesting/v1beta1/tx"

// ############### Query ################
export * as typesQueryCosmosBase from "./modules/cosmos/cosmos-sdk/cosmos.base.tendermint.v1beta1/module/types/cosmos/base/tendermint/v1beta1/query"
export * as typesQueryCosmosAuth from "./modules/cosmos/cosmos-sdk/cosmos.auth.v1beta1/module/types/cosmos/auth/v1beta1/query"
export * as typesQueryCosmosAuthz from "./modules/cosmos/cosmos-sdk/cosmos.authz.v1beta1/module/types/cosmos/authz/v1beta1/query"
export * as typesQueryCosmosBank from "./modules/cosmos/cosmos-sdk/cosmos.bank.v1beta1/module/types/cosmos/bank/v1beta1/query"
// NONE export * as typesQueryCosmosCrisis from "./modules/cosmos/cosmos-sdk/cosmos.crisis.v1beta1/module/types/cosmos/crisis/v1beta1/genesis"
export * as typesQueryCosmosDistribution from "./modules/cosmos/cosmos-sdk/cosmos.distribution.v1beta1/module/types/cosmos/distribution/v1beta1/query"
export * as typesQueryCosmosEvidence from "./modules/cosmos/cosmos-sdk/cosmos.evidence.v1beta1/module/types/cosmos/evidence/v1beta1/query"
export * as typesQueryCosmosFeeGrant from "./modules/cosmos/cosmos-sdk/cosmos.feegrant.v1beta1/module/types/cosmos/feegrant/v1beta1/query"
export * as typesQueryCosmosGov from "./modules/cosmos/cosmos-sdk/cosmos.gov.v1beta1/module/types/cosmos/gov/v1beta1/query"
// DISABLE THIS FEATURE FOR PUBLIC export * as typesQueryCosmosMint from "./modules/cosmos/cosmos-sdk/cosmos.mint.v1beta1/module/types/cosmos/mint/v1beta1/mint"
export * as typesQueryParams from "./modules/cosmos/cosmos-sdk/cosmos.params.v1beta1/module/types/cosmos/params/v1beta1/query"
export * as typesQueryCosmosSlashing from "./modules/cosmos/cosmos-sdk/cosmos.slashing.v1beta1/module/types/cosmos/slashing/v1beta1/query"
export * as typesQueryCosmosStaking from "./modules/cosmos/cosmos-sdk/cosmos.staking.v1beta1/module/types/cosmos/staking/v1beta1/query"
export * as typesQueryCosmosUpgrade from "./modules/cosmos/cosmos-sdk/cosmos.upgrade.v1beta1/module/types/cosmos/upgrade/v1beta1/query"
export * as typesQueryCosmosVesting from "./modules/cosmos/cosmos-sdk/cosmos.vesting.v1beta1/module/types/cosmos/vesting/v1beta1/vesting"

// ############### ETHERMINT ###############
// ################### TX ##################
export * as typesTxEthermintEvm from "./modules/evmos/ethermint/ethermint.evm.v1/module/types/ethermint/evm/v1/tx"
export * as typesTxEthermintFeemarket from "./modules/evmos/ethermint/ethermint.feemarket.v1/module/types/ethermint/feemarket/v1/feemarket"

// ############### Query ################
export * as typesQueryEthermintEvm from "./modules/evmos/ethermint/ethermint.evm.v1/module/types/ethermint/evm/v1/query"
export * as typesQueryEthermintFeemarket from "./modules/evmos/ethermint/ethermint.feemarket.v1/module/types/ethermint/feemarket/v1/query"

// ############### EVMOS ###############
// ################### TX ##################
export * as typesTxEvmosErc20 from "./modules/evmos/v6/evmos.erc20.v1/module/types/evmos/erc20/v1/tx"
// ############### Query ################
export * as typesQueryEvmosErc20 from "./modules/evmos/v6/evmos.erc20.v1/module/types/evmos/erc20/v1/query"
export * as typesQueryEvmosRecovery from "./modules/evmos/v6/evmos.recovery.v1/module/types/evmos/recovery/v1/query"


// ############### TENDERMINT IBC ###############
// ################### TX ##################
export * as typesTxIBCAccountController from "./modules/ibc-go/v3/ibc.applications.interchain_accounts.controller.v1/module/types/ibc/applications/interchain_accounts/controller/v1/controller"
export * as typesTxIBCAccountHots from "./modules/ibc-go/v3/ibc.applications.interchain_accounts.host.v1/module/types/ibc/applications/interchain_accounts/host/v1/host"
export * as typesTxIBCTransfer from "./modules/ibc-go/v3/ibc.applications.transfer.v1/module/types/ibc/applications/transfer/v1/tx"
export * as typesTxIBCChannel from "./modules/ibc-go/v3/ibc.core.channel.v1/module/types/ibc/core/channel/v1/tx"
export * as typesTxIBCClient from "./modules/ibc-go/v3/ibc.core.client.v1/module/types/ibc/core/client/v1/client"
export * as typesTxIBCConnection from "./modules/ibc-go/v3/ibc.core.connection.v1/module/types/ibc/core/connection/v1/tx"

// ############### Query ################
export * as typesQueryIBCAccountController from "./modules/ibc-go/v3/ibc.applications.interchain_accounts.controller.v1/module/types/ibc/applications/interchain_accounts/controller/v1/query"
export * as typesQueryIBCAccountHots from "./modules/ibc-go/v3/ibc.applications.interchain_accounts.host.v1/module/types/ibc/applications/interchain_accounts/host/v1/query"
export * as typesQueryIBCTransfer from "./modules/ibc-go/v3/ibc.applications.transfer.v1/module/types/ibc/applications/transfer/v1/query"
export * as typesQueryIBCChannel from "./modules/ibc-go/v3/ibc.core.channel.v1/module/types/ibc/core/channel/v1/query"
export * as typesQueryIBCClient from "./modules/ibc-go/v3/ibc.core.client.v1/module/types/ibc/core/client/v1/query"
export * as typesQueryIBCConnection from "./modules/ibc-go/v3/ibc.core.connection.v1/module/types/ibc/core/connection/v1/query"

// ################### CORE ##################
export * as typesCoreIBCTransferCore from "./modules/ibc-go/v3/ibc.applications.transfer.v1/module/types/ibc/core/client/v1/client"
export * as typesCoreIBCChannel from "./modules/ibc-go/v3/ibc.core.channel.v1/module/types/ibc/core/channel/v1/channel"

// ############### SIX PROTOCOL ###############
// ################### TX ##################
export * as typesTxTokenManager from "./modules/six-protocol/thesixnetwork.sixprotocol.tokenmngr/module/types/tokenmngr/tx"
export * as typesTxProtocolAdmin from "./modules/six-protocol/thesixnetwork.sixprotocol.protocoladmin/module/types/protocoladmin/tx"

// ################### Query ##################
export * as typesQueryProtocolAdmin from "./modules/six-protocol/thesixnetwork.sixprotocol.protocoladmin/module/types/protocoladmin/query"
export * as typesQueryTokenManager from "./modules/six-protocol/thesixnetwork.sixprotocol.tokenmngr/module/types/tokenmngr/query"


// ############### SIXNFT ###############
// ################### TX ##################
// legacy code will be replicated and replaced with typesTxNFTOracle
export * as ITxNFToracle from "./modules/sixnft/thesixnetwork.sixnft.nftoracle/module/types/nftoracle/tx"
export * as typesTxNFTManager from "./modules/sixnft/thesixnetwork.sixnft.nftmngr/module/types/nftmngr/tx"
export * as typesTxNFTAdmin from "./modules/sixnft/thesixnetwork.sixnft.nftadmin/module/types/nftadmin/tx"
export * as typesTxNFTOracle from "./modules/sixnft/thesixnetwork.sixnft.nftoracle/module/types/nftoracle/tx"

// ################### Query ##################
export * as typesQueryNFTOracle from "./modules/sixnft/thesixnetwork.sixnft.nftoracle/module/types/nftoracle/query"
export * as typesQueryNFTManager from "./modules/sixnft/thesixnetwork.sixnft.nftmngr/module/types/nftmngr/query"
export * as typesQueryNFTAdmin from "./modules/sixnft/thesixnetwork.sixnft.nftadmin/module/types/nftadmin/query"
