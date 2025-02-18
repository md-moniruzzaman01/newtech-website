export const columns = [
  { key: 'id', label: 'Complaint ID' },
  { key: 'serialNo', label: 'Serial-No' },
  { key: 'brand', label: 'Brand' },
  { key: 'category', label: 'Category' },
  { key: 'problem', label: 'Problem' },
  { key: 'status', label: 'Status' },

  { key: 'estimatedTime', label: 'Estimated Time' },
  { key: 'createdAt', label: 'Created At' },
  {
    key: 'deliveryDate',
    label: 'Delivery Date',
    render: (date?: any) => date || 'N/A',
  },
];
