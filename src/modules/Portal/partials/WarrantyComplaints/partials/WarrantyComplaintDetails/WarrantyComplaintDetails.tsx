'use client';
import { complaints } from '@modules/Portal/partials/Complaints/config/constants';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import image from '../../../../../../images/latest blog/image1.jpg';
const WarrantyComplaintDetails = () => {
  const { id } = useParams();
  const complaint = complaints.find(comp => comp.id === id);

  if (!complaint) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <p className="text-red-500 text-xl font-semibold">
          Complaint not found
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-8 space-y-8 bg-gray-50 rounded-lg shadow-lg mt-6">
      <h2 className="text-4xl font-bold text-center text-secondary mb-6">
        Warranty Complaint Details
      </h2>

      {/* Main Layout */}
      <div className="flex flex-col md:flex-row gap-8">
        {/* Left Side: Complaint Details */}
        <div className="flex-1 bg-white rounded-xl p-6 space-y-6">
          <div className="text-lg font-medium text-gray-700 space-y-4">
            <div className="flex justify-between">
              <span className="font-bold">Complaint ID:</span>
              <span className="text-indigo-600">{complaint.id}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-bold">Serial No:</span>
              <span className="">{complaint.serialNo}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-bold">Problem:</span>
              <span className="text-gray-600">{complaint.problem}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-bold">Status:</span>
              <span
                className={`font-semibold px-3 py-1 rounded-full ${
                  complaint.status === 'completed'
                    ? 'bg-green-100 text-green-700'
                    : 'bg-yellow-100 text-yellow-700'
                }`}
              >
                {complaint.status}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="font-bold">Estimated Time:</span>
              <span className="text-gray-600">{complaint.estimatedTime}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-bold">Created At:</span>
              <span className="text-gray-600">{complaint.createdAt}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-bold">Delivery Date:</span>
              <span className="text-gray-600">{complaint.deliveryDate}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-bold">Device Type:</span>
              <span className="text-gray-600">{complaint.category}</span>
            </div>
          </div>
        </div>

        {/* Right Side: Image */}
        <div className="flex-1 bg-white p-6 flex justify-center items-center">
          <Image
            src={complaint.img}
            alt="Complaint Image"
            className="rounded-lg w-auto h-full mb-4 p-10"
          />
        </div>
      </div>
    </div>
  );
};
export default WarrantyComplaintDetails;
