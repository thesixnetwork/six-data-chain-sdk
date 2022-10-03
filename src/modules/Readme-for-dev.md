# Step
- 1 build sixnft datachain
- 2 delete index.ts ./sixnft/sixnft.{module}/index.ts
- 3 search all remove
```
if (util.Long !== Long) {
  util.Long = Long as any;
  configure();
}
```
- 4 export SignAndBroadcastOptions in all sixnft/{module name}/module/index
export interface SignAndBroadcastOptions