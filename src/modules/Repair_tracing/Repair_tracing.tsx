'use client';

import Event from './partials/Event';
import { useParams } from 'next/navigation';
import { servicecard_data } from '@components/ServiceCard/config/constants';

const Repair_tracing = () => {
  const { trackingNumber } = useParams();

  const service = servicecard_data.service_list.find(
    item => item.trackNumber === trackingNumber
  );

  return (
    <div className="">
      <Event service={service} />
    </div>
  );
};

export default Repair_tracing;
