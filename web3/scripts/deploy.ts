import { ethers } from "hardhat";
import "@nomiclabs/hardhat-ethers"
async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying contracts with the account:", deployer.address);

  const Nft = await ethers.getContractFactory("Nft");
  const nft = await Nft.deploy();

  //console.log("Nft contract deployed to:", nft.address());
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
