import QueryBuilder from '../../builder/QueryBuilder';
import { NftSearchableFields } from './nft.constant';
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

const getNftByAddressFromDB = async (query: Record<string, any>) => {
  const nftQuery = new QueryBuilder(Nft.find(), query).search(
    NftSearchableFields,
  );

  const result = await nftQuery.modelQuery;

  return {
    result,
  };
};

export const NftServices = {
  createNftIntoDB,
  getSingleNftFromDB,
  getNftByAddressFromDB,
};
