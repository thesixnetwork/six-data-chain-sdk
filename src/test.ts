import { OfflineAminoSigner, StdSignature ,decodeSignature,encodeSecp256k1Signature,Secp256k1Wallet,Secp256k1HdWallet,pubkeyToAddress
} from "@cosmjs/amino";
const main = async() => {

    const wallet2 = await Secp256k1HdWallet.generate(12,{prefix:"6x"})
    const acc = await wallet2.getAccounts()
    console.log("acc[0].address",acc[0].address)
    const sign = await wallet2.signAmino(acc[0].address,{
        chain_id: "sixnet",
        account_number: "0",
        sequence: "0",
        fee: {
            amount: [],
            gas: "0"
        },
        msgs:[],
        memo: ""
    })
    // console.log(sign)
    const decode = decodeSignature(sign.signature)
    // console.log("decode",decode)
    
    const xiao =await encodeSecp256k1Signature(decode.pubkey,decode.signature)
    
    // console.log("addr",xiao)
    const addr = pubkeyToAddress(xiao.pub_key,"6x")
    console.log("addr",addr)
    

}
main()