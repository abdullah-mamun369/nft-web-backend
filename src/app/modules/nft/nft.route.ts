import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { NftValidations } from './nft.validation';
import { NftControllers } from './nft.contorller';

const router = express.Router();

router.post(
  '/create-nft',
  validateRequest(NftValidations.createNftValidationSchema),
  NftControllers.createNft,
);
router.get('/:id', NftControllers.getSingleNft);
router.get('/gallery');

export const NftRoute = router;
