import { model, Schema } from 'mongoose';
import { TNftData } from './nft.interface';

const nftDataSchema = new Schema<TNftData>(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    logoUrl: {
      type: String,
      required: true,
      trim: true,
    },
    address: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

export const Nft = model<TNftData>('nftData', nftDataSchema);
