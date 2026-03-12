
import readline from "readline";
import {validateWallet} from "./validator.js";
import {checkAirdrop} from "./tracker.js";

const rl = readline.createInterface({
input:process.stdin,
output:process.stdout
});

rl.question("Wallet: ", async(wallet)=>{

if(!validateWallet(wallet)){
console.log("Invalid wallet");
process.exit();
}

const result = await checkAirdrop(wallet);

console.log(result);

rl.close();

});
