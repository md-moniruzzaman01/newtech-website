'use client';
import { useState, useEffect } from 'react';
import Table from '@components/Table/Table';
import { columns, complaints } from './config/constants';
import { useRouter } from 'next/navigation';
import Pagination from '@components/portal pagination/pagination';

const Complaints = () => {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');
  const [filterQuery, setFilterQuery] = useState('');
  const [filteredComplaints, setFilteredComplaints] = useState(complaints);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const handleRowClick = (complaintId: string) => {
    router.push(`/portal/service-complaints/${complaintId}`);
  };

  const filterComplaints = (query: string, filter: string) => {
    return complaints.filter(
      complaint =>
        [
          complaint.id,
          complaint.serialNo,
          complaint.category,
          complaint.brand,
          complaint.problem,
          complaint.status,
          complaint.createdAt,
          complaint.deliveryDate,
        ].some(field => field?.toLowerCase().includes(query.toLowerCase())) &&
        [
          complaint.category,
          complaint.brand,
          complaint.status,
          complaint.createdAt,
          complaint.deliveryDate,
        ].some(field => field?.toLowerCase().includes(filter.toLowerCase()))
    );
  };

  // Auto-filter when filterQuery changes
  useEffect(() => {
    setFilteredComplaints(filterComplaints(searchQuery, filterQuery));
  }, [filterQuery]);

  // Search when clicking the button
  const handleSearchClick = () => {
    setFilteredComplaints(filterComplaints(searchQuery, filterQuery));
    setCurrentPage(1); // Reset pagination
  };

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentComplaints = filteredComplaints.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const totalPages = Math.ceil(filteredComplaints.length / itemsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="p-4">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row items-center justify-between mb-6 mt-6 w-full">
        {/* Title on Left */}
        <h2 className="text-3xl font-bold text-secondary mb-4 md:mb-0">
          Product Complaints
        </h2>
        <div className="flex w-full md:w-auto items-center space-y-2 md:space-y-0 md:space-x-4">
          <input
            type="text"
            placeholder="Search Here..."
            className="p-2 border border-slate-400 rounded-lg w-full md:w-72 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
          />

          {/* Search Button (Centered) */}
          <div className="flex justify-center w-full md:w-auto">
            <button
              onClick={handleSearchClick}
              className="px-4 py-2 bg-primary w-full  mx-4 md:mx-2 text-white rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
            >
              Search
            </button>
          </div>
        </div>

        <div className="flex w-full md:w-auto items-center space-y-2 md:space-y-0 md:space-x-4">
          <input
            type="text"
            placeholder="Filter your product..."
            className="p-2 border border-slate-400 rounded-lg w-full md:w-72 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={filterQuery}
            onChange={e => setFilterQuery(e.target.value)}
          />
        </div>
      </div>

      {/* Complaints Table */}
      <Table
        columns={columns}
        data={currentComplaints}
        onRowClick={handleRowClick}
      />

      {/* Pagination Component */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default Complaints;
