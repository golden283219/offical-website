const withPWA = require('next-pwa');
const runtimeCaching = require('next-pwa/cache');

module.exports = withPWA({
  pwa: {
    dest: 'public',
    runtimeCaching,
  },
  compress: false, // brotli compress rather than default gzip support of next.js
  env: {
    contractAddress: '0xaA385813E760f02434B29db34C30F708d8eDFa31',
    ownerAddress: '0x9e16e0C678DbB15aFe8a1159d03F8970e41EE882',
    preSaleAmount: 60000000000000000,
    publicSaleAmount: 120000000000000000,
    rpcURI: 'https://speedy-nodes-nyc.moralis.io/a0dd13b0091772cbf75a91db/eth/rinkeby',
    network: 'rinkeby',
    chainId: 4,
    api: 'https://api.brainchildnft.com',
    infuraId: '41ef39b8a23943439d5c1d071593c52f',
    mintCount: 3,
    //googleApiKey: '',
    //production: process.env.PRODUCTION,
  },
  images: {
    domains: ['ipfs.io'],
  },
});
