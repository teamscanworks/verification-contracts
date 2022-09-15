import Image from 'next/image';
import {
  osmo,
  luna,
  secretnetwork,
  stargaze,
  tgrade,
  bjuno,
} from '../../public/assets/networks';

export const getIconNetworks = (icon: string) => {
  switch (icon) {
    case 'osmosis':
      return <Image src={osmo} width={20} height={20} alt="osmo" />;
    case 'terra':
      return <Image src={luna} width={20} height={20} alt="terra" />;
    case 'terra2':
      return <Image src={luna} width={20} height={20} alt="terra2" />;
    case 'secretnetwork':
      return <Image width={20} height={20} alt="secretNetwork" src={secretnetwork} />;
    case 'stargaze':
      return <Image src={stargaze} width={20} height={20} alt="stargaze" />;
    case 'tgrade':
      return <Image src={tgrade} width={20} height={20} alt="tgrade" />;
    case 'juno':
      return <Image src={bjuno} width={20} height={20} alt="juno" />;
  }
};
