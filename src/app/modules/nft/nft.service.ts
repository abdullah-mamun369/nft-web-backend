import { TNftData } from './nft.interface';
import { Nft } from './nft.model';

const createNftIntoDB = async (payload: TNftData) => {
  const result = await Nft.create(payload);
  return result;
};

export const NftServices = {
  createNftIntoDB,
};
