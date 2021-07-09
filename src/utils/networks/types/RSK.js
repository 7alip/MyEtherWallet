import rsk from '@/assets/images/networks/rsk.svg';
import tokens from '@/_generated/tokens/tokens-rsk.json';
import contracts from '@/_generated/contracts/contract-abi-rsk.json';

export default {
  name: 'RSK',
  name_long: 'RSK',
  homePage: 'https://rsk.co/',
  blockExplorerTX: 'https://explorer.rsk.co/tx/[[txHash]]',
  blockExplorerAddr: 'https://explorer.rsk.co/address/[[address]]',
  chainID: 30,
  tokens: tokens,
  contracts: contracts,
  icon: rsk,
  isTestNetwork: false,
  currencyName: 'RBTC',
  isEthVMSupported: {
    supported: false,
    url: null,
    websocket: null
  },
  coingeckoID: 'rootstock'
};
