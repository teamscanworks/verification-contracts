import { useEffect, useState } from 'react';
import { getChains } from 'services/contractRegistryQueries';

export const useChainsList = async () => {
  const [optionsNetworks, setOptionsNetworks]: any = useState([]);

  const getChainsList = async () => {
    const response: any = await getChains();
    setOptionsNetworks([]);
    response.data.forEach((chain_name: string) => {
      optionsNetworks.push({ label: chain_name, value: chain_name });
    });
  };

  useEffect(() => {
    getChainsList();
  });

  return { optionsNetworks };
};
