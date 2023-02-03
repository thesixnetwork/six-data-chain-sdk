interface ActionParameter {
    name: string;
    value: string;
  }
export interface MsgPerformActionByAdmin {
    creator: string;
    nft_schema_code: string;
    tokenId: string;
    action: string;
    ref_id: string;
    parameters: ActionParameter[];
  }