import { OfflineSigner } from "@cosmjs/proto-signing";
import {DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";

export class Accounts {
    prefix: string = "6nft";
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
     * @param options An optional `DirectSecp256k1HdWalletOptions` object optionally containing a bip39Password, hdPaths, and prefix.
     */
    async privateKeyToAccount(privateKey: string): Promise<OfflineSigner> {
        return DirectSecp256k1HdWallet.fromMnemonic(privateKey, { prefix: this.prefix })
    }
  
}


