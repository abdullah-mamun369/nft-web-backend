import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { NftServices } from './nft.service';

const createNft = catchAsync(async (req, res) => {
  const result = await NftServices.createNftIntoDB(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Nft is created succesfully',
    data: result,
  });
});

const getSingleNft = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await NftServices.getSingleNftFromDB(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Nft is retrieved succesfully',
    data: result,
  });
});

export const NftControllers = {
  createNft,
  getSingleNft,
};
