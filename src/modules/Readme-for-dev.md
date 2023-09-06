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

Find

```typescript
interface SignAndBroadcastOptions {
  fee: StdFee,
  memo?: string
}
```

Replace

```typescript
export interface SignAndBroadcastOptions {
  fee: StdFee | "auto",
  memo?: string
}
```

- 5 import {... ,SigningStargateClientOptions} from @cosmjs/stargate

Find

```typescript
import { SigningStargateClient } from "@cosmjs/stargate";
```

Replace

```typescript
import { SigningStargateClient, SigningStargateClientOptions} from "@cosmjs/stargate";
```

- 6 add SigningStargateClientOptions to txClient

Find

```typescript
const txClient = async (wallet: OfflineSigner, { addr: addr }: TxClientOptions = { addr: "http://localhost:26657" }) => {
```

Replace

```typescript
const txClient = async (wallet: OfflineSigner, { addr: addr }: TxClientOptions = { addr: "http://localhost:26657" }, options?: SigningStargateClientOptions) => {
```

- 7 add options to SigningStargateClient.connectWithSigner

Find

```typescript
client = await SigningStargateClient.connectWithSigner(addr, wallet, { registry });
```

Replace

```typescript
client = await SigningStargateClient.connectWithSigner(addr, wallet, { registry, ...options});
```
