import axios from 'axios';
const BASE_URL = 'https://codes.scanworks.org/v1';

export const getChains = async () => await axios.get(`${BASE_URL}/chains`);

export const getRegistry = async (chain: string, codeId: string) => {
  try {
    const response = await axios.get(`${BASE_URL}/chain/${chain}/code-id/${codeId}`);
    return response;
  } catch (error: any) {
    return error.response;
  }
};
