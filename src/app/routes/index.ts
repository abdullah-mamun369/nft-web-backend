import { Router } from 'express';
import { NftRoute } from '../modules/nft/nft.route';

const router = Router();

const moduleRoutes = [
  {
    path: '/nft',
    route: NftRoute,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
