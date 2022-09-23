import fetch from 'node-fetch'
globalThis.fetch = fetch

export * from "./client/SixDataChainConnector"
export * from "./helper/base64"