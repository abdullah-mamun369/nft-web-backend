import { TNftData } from './nft.interface';
import { Nft } from './nft.model';

const createNftIntoDB = async (payload: TNftData) => {
  const result = await Nft.create(payload);
  return result;
};

const getSingleNftFromDB = async (id: string) => {
  const result = await Nft.findById(id);
  return result;
};

export const NftServices = {
  createNftIntoDB,
  getSingleNftFromDB,
};
