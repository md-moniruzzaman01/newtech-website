export const columns = [
  { key: 'id', label: 'ID' },
  { key: 'serialNo', label: 'Serial-No' },
  { key: 'problem', label: 'Problem' },
  { key: 'brand', label: 'brand' },
  { key: 'category', label: 'Category' },
  {
    key: 'payment',
    label: 'Payment',
    render: (value: any) => `$${value.amount}`,
  },
  { key: 'deliveryDate', label: 'Delivery Date' },
];
