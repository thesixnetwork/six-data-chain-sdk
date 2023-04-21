# Step
- 1 build sixnft datachain
- 2 delete index.ts ./sixnft/sixnft.{module}/index.ts
- 3 search all remove
```typescript
if (util.Long !== Long) {
  util.Long = Long as any;
  configure();
}
```
- 4 export SignAndBroadcastOptions in all sixnft/{module name}/module/index
export interface SignAndBroadcastOptions

- 5 import {... ,SigningStargateClientOptions} from @cosmjs/stargate
modify txClientOptions
const txClient = async (wallet: OfflineSigner, { addr: addr }: TxClientOptions = { addr: "http://localhost:26657" }, options?: SigningStargateClientOptions) => {