import express from 'express';

const router = express.Router();

router.post('/create-nft-data');
router.get('/:id');
router.get('/gallery');

export const NftRoute = router;
