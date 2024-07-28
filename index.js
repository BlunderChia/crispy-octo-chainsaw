const { Connection, PublicKey } = require ("@solana/web3.js");

const solanaInfo = async (address) => {
  const connection = new Connection("https://solana-mainnet.g.alchemy.com/v2/WAmuWVH2HWHX23_h3dq8VbtCO6H0om6X");
  let info = await connection.getAccountInfo(new PublicKey(address))
  return info
}

const sum = (a, b) => a + b

exports.sum = sum
exports.info = solanaInfo
