import { OfflineSigner } from "@cosmjs/proto-signing";
import {DirectSecp256k1HdWallet ,DirectSecp256k1Wallet} from "@cosmjs/proto-signing";
import crypto from 'crypto';
export class Accounts {
    prefix: string = "6x";
    /**
     * Generates a new wallet with a BIP39 mnemonic of the given length.
     *
     * @param mnemoniclength The number of words in the mnemonic (12, 15, 18, 21 or 24).
     * @param options An optional `DirectSecp256k1HdWalletOptions` object optionally containing a bip39Password, hdPaths, and prefix.
     */
    async create(mnemonicLength: 12 | 15 | 18 | 21 | 24 = 24): Promise<OfflineSigner> {
        return DirectSecp256k1HdWallet.generate(
            mnemonicLength,
            { prefix: this.prefix }
        )
    }
    /**
     * Restores a wallet from the given BIP39 mnemonic.
     *
     * @param mnemonic Any valid English mnemonic.
     */
    async mnemonicKeyToAccount(mnemonic: string): Promise<OfflineSigner> {
        return DirectSecp256k1HdWallet.fromMnemonic(mnemonic, { prefix: this.prefix })
    }
    /**
     * Restores a wallet from the given privatekey.
     *
     * @param privatekey Any valid privatekey.
     */
    async privateKeyToAccount(privateKey: string): Promise<OfflineSigner> {
        if(privateKey.startsWith("0x")){
            privateKey = privateKey.slice(2)
        }
        const cryptoConverter = crypto.createECDH('secp256k1');
        cryptoConverter.setPrivateKey(privateKey, 'hex');
        // console.log(xxx)
        return DirectSecp256k1Wallet.fromKey(cryptoConverter.getPrivateKey(),  this.prefix )
    }
  
}


