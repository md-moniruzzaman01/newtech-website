import laptop from '../../../../../images/Our_Service/laptop.png';
import desktop from '../../../../../images/Our_Service/desktop.png';
import printer from '../../../../../images/Our_Service/printer.png';
import scanner from '../../../../../images/Our_Service/Scanner.png';

import { ComplaintsProps } from './type';

export const complaints: ComplaintsProps[] = [
  {
    id: 'SR-2024-001',
    serialNo: '001',
    brand: 'hp',
    problem: 'Blue screen of death, random crashes',
    status: 'in-progress',
    payment: { amount: 150, status: 'paid' },
    estimatedTime: '48 hours',
    createdAt: '2024-03-15',
    deliveryDate: '2024-03-17',
    category: 'laptop',
    img: laptop,
  },
  {
    id: 'SR-2024-002',
    serialNo: '002',
    brand: 'dell',
    problem: 'Hardware upgrade - RAM and SSD',
    status: 'pending',
    payment: { amount: 300, status: 'pending' },
    estimatedTime: '24 hours',
    createdAt: '2024-03-16',
    deliveryDate: null,
    category: 'desktop',
    img: desktop,
  },
  {
    id: 'SR-2024-003',
    serialNo: '003',
    brand: 'acer',
    problem: 'Printer not connecting to network',
    status: 'completed',
    payment: { amount: 100, status: 'paid' },
    estimatedTime: '24 hours',
    createdAt: '2024-03-14',
    deliveryDate: '2024-03-15',
    category: 'printer',
    img: printer,
  },
  {
    id: 'SR-2024-004',
    serialNo: '004',
    brand: 'msi',
    problem: 'Screen replacement',
    status: 'completed',
    payment: { amount: 200, status: 'paid' },
    estimatedTime: '72 hours',
    createdAt: '2024-03-10',
    deliveryDate: '2024-03-13',
    category: 'laptop',
    img: laptop,
  },
  {
    id: 'SR-2024-005',
    serialNo: '005',
    brand: 'hp',
    problem: 'replacement',
    status: 'in-progress',
    payment: { amount: 100, status: 'paid' },
    estimatedTime: '24 hours',
    createdAt: '2024-03-16',
    deliveryDate: '2024-03-17',
    category: 'scanner',
    img: scanner,
  },
];
export const columns = [
  { key: 'id', label: 'Complaint ID' },
  { key: 'serialNo', label: 'Serial No' },
  { key: 'category', label: 'Category' },
  { key: 'brand', label: 'Brand' },
  { key: 'problem', label: 'Problem' },
  { key: 'status', label: 'Status' },
  {
    key: 'payment',
    label: 'Payment',
    render: (payment: { amount: number; status: string }) =>
      `${payment.amount} USD (${payment.status})`,
  },

  { key: 'createdAt', label: 'Created At' },
  {
    key: 'deliveryDate',
    label: 'Delivery Date',
    render: (date?: any) => date || 'N/A',
  },
];
