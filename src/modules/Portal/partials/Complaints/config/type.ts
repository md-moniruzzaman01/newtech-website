import { StaticImageData } from 'next/image';

export interface ComplaintsProps {
  id: string;
  serialNo: string;
  problem: string;
  status: 'pending' | 'in-progress' | 'completed';
  payment: {
    amount: number;
    status: 'pending' | 'paid';
  };
  estimatedTime: string;
  createdAt: string;
  deliveryDate: string | null;
  category: 'laptop' | 'desktop' | 'printer' | 'scanner';
  brand: 'hp' | 'dell' | 'msi' | 'acer';
  img: StaticImageData;
}
