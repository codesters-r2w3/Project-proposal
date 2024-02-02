require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();
const {PRIVATE_KEY } = process.env;
module.exports = {
   solidity: "0.8.20",
   defaultNetwork: "mumbai",
   networks: {
     hardhat: {},
     mumbai: {
       url: "https://rpc.ankr.com/polygon_mumbai",
       accounts: [`0x${PRIVATE_KEY}`],
     },
   },
};
