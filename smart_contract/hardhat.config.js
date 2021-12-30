
require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/svqoAllGlVhDdn0ebFdiklxUpe9Fr9F-',
      accounts: ['43336c84036dda0dd8ee0e0b22e5d359d7f130ddf1225d8ae4f0744b084d2bfd'],
    },
  },
};