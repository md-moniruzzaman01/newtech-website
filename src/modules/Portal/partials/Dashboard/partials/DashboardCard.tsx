import React from 'react';

interface Card {
  bgColor: string;
  borderColor: string;
  icon: React.ReactNode;
  title: string;
  value: string | number;
  details: { [key: string]: string | number };
}

const DashboardCard: React.FC<{ card: Card }> = ({ card }) => (
  <div
    className={`p-6 rounded-lg border ${card.bgColor} ${card.borderColor} shadow-sm hover:shadow-md transition-shadow duration-300`}
  >
    <div className="flex justify-between items-center">
      <div className="p-4 rounded-lg flex items-center justify-center bg-opacity-20 ">
        {card.icon}
      </div>
      <div className="text-right">
        <h3 className="text-lg font-semibold text-gray-700 text-center">
          {card.title}
        </h3>
        <p className="text-4xl font-bold text-gray-900 text-secondary">
          {card.value}
        </p>
      </div>
    </div>
    <hr className="mt-3 border-slate-300" />
    <div className="mt-4 space-y-2">
      {Object.entries(card.details).map(([key, value]) => (
        <div key={key} className="flex justify-between text-sm text-gray-600">
          <span className="capitalize">{key}:</span>
          <span className="font-medium">{value}</span>
        </div>
      ))}
    </div>
  </div>
);

export default DashboardCard;
