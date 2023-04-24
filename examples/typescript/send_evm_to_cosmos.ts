import { ethers } from "ethers"; // version "^5.5.4",
import abi from "./resource/UnwrapSIXToken_metadata.json"

const contractABI = abi.output.abi;
const contractAddress = "0x249D6DFBb6476e976A228a03E6449659749FA472"; // token converter contract
const rpcUrl = "https://rpc-evm.fivenet.sixprotocol.net"; // six fivenet evm rpc

const privateKey = "YOUR_PRIVATE_KEY_HERE";

const provider = new ethers.providers.JsonRpcProvider(rpcUrl);
const wallet = new ethers.Wallet(privateKey, provider);
const contract = new ethers.Contract(contractAddress, contractABI, wallet);

async function sendToCosmos(dst: string, amount: number) {
  try {
    const amountWei = ethers.utils.parseEther(amount.toString());
    const tx = await contract.transferToCosmos(dst, amountWei);
    await tx.wait();
    console.log("Transaction complete!");
  } catch (error) {
    console.log(error);
  }
}

sendToCosmos("DESTINATION_ADDRESS_HERE", 1);
