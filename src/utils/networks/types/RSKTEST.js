import rsk from '@/assets/images/networks/rsk-test.svg';
import tokens from '@/_generated/tokens/tokens-rsk-test.json';
import contracts from '@/_generated/contracts/contract-abi-rsk-test.json';

export default {
  name: 'RSKTEST',
  name_long: 'RSK Testnet',
  homePage: 'https://rsk.co/',
  blockExplorerTX: 'https://explorer.testnet.rsk.co/tx/[[txHash]]',
  blockExplorerAddr: 'https://explorer.testnet.rsk.co/address/[[address]]',
  chainID: 31,
  tokens: tokens,
  contracts: contracts,
  icon: rsk,
  isTestNetwork: true,
  currencyName: 'tRBTC',
  isEthVMSupported: {
    supported: false,
    url: null,
    websocket: null
  },
  coingeckoID: 'rootstock'
};
