import React from 'react';

interface QuoteInfoProps {
  service: any;
  issue: string;
  selectedLocation: any;
}
const QuoteInfo: React.FC<QuoteInfoProps> = ({
  service,
  issue,
  selectedLocation,
}) => {
  return (
    <div className="bg-blue-50 rounded-lg p-8 shadow-lg w-full lg:w-1/3">
      <h3 className="text-lg font-semibold border-b border-primary pb-2 mb-4">
        Quote Information
      </h3>
      <ul className="space-y-2 text-sm">
        <li>
          <strong>Tracking Number:</strong>{' '}
          {service?.trackNumber || 'pc_desktop'}
        </li>
        <li>
          <strong>Device:</strong> {service?.title || 'pc_desktop'}
        </li>
        <li>
          <strong>Problem:</strong> {issue || 'Speaker'}
        </li>
        <li>
          <strong>Timeframe:</strong> {service?.timeframe || '48 Hours'}
        </li>
        <li>
          <strong>Warranty:</strong> {service?.warranty || '1 Year'}
        </li>
        <li>
          <strong>Description:</strong> Most computer repairs can be completed
          in 48 hours, but timeframes can vary depending on the parts required
          and diagnosis steps.
        </li>
      </ul>

      <div className="mt-16">
        <h3 className="text-lg font-semibold border-b border-primary pb-2 mb-4">
          Selected Store
        </h3>
        <div className=" rounded-lg p-4 text-sm bg-white">
          {selectedLocation ? (
            <div>
              <p className="font-bold">{selectedLocation.name}</p>
              <p>Address: {selectedLocation.address}</p>
              <p>Phone: {selectedLocation.phone}</p>
            </div>
          ) : (
            <p>No location selected</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuoteInfo;
