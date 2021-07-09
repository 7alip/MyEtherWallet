import { ETC, ETH, ROP, RSK, RSKTEST } from '@/utils/networks/types';
import {
  ledgerEthereum,
  ledgerLiveEthereum,
  ledgerEthereumClassic,
  ledgerLiveEthereumClassic,
  ropsten,
  rskTestnet,
  rskMainnet
} from '@/modules/access-wallet/hardware/handlers/configs/configPaths';
const appList = [
  {
    network: ETH,
    paths: [ledgerEthereum, ledgerLiveEthereum]
  },
  {
    network: ETC,
    paths: [ledgerEthereumClassic, ledgerLiveEthereumClassic]
  },
  {
    network: ROP,
    paths: [ropsten]
  },
  {
    network: RSK,
    paths: [rskMainnet]
  },
  {
    network: RSKTEST,
    paths: [rskTestnet]
  }
];
export default appList;
