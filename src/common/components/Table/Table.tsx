'use client';
import React from 'react';
import { useRouter } from 'next/router';

interface Column {
  key: string;
  label: string;
  render?: (value: any, row: any) => React.ReactNode;
}

interface TableProps {
  onRowClick: (id: any) => void;
  columns: Column[];
  data: any[];
}

const Table: React.FC<TableProps> = ({ columns, data, onRowClick }) => {
  return (
    <div className="overflow-x-auto  md:max-w-full max-w-[35svh]">
      <table className="min-w-full bg-white rounded-lg">
        <thead>
          <tr className="bg-gradient-to-r from-primary to-indigo-500 text-white ">
            {columns.map(col => (
              <th
                key={col.key}
                className="p-3 text-left font-semibold uppercase"
              >
                {col.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr
              key={row.id}
              onClick={() => {
                console.log('Row clicked:', row.id);
                onRowClick(row.id);
              }}
              className={`${
                index % 2 === 0 ? 'bg-gray-100' : 'bg-white'
              } transition hover:bg-primary/20 cursor-pointer`}
            >
              {columns.map(col => (
                <td key={col.key} className="p-3 border-b border-slate-400">
                  {col.render ? col.render(row[col.key], row) : row[col.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
