import React from 'react';
import {
  PenTool as Tool,
  Truck,
  Timer,
  DollarSign,
  Wrench,
  Box,
  Clock,
  ShieldCheck,
} from 'lucide-react';
import { stats } from './config/constants';
import DashboardCard from './partials/DashboardCard';

const Dashboard = () => {
  const serviceCards = [
    {
      title: 'Products in Service',
      icon: <Tool className="w-12 h-12 text-blue-600" />, // Increased icon size
      value: stats.service.inService.count,
      details: stats.service.inService.details,
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
    },
    {
      title: 'Ready for Delivery',
      icon: <Truck className="w-12 h-12 text-green-600" />, // Increased icon size
      value: stats.service.readyForDelivery.count,
      details: stats.service.readyForDelivery.details,
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200',
    },
    {
      title: 'Pending Products',
      icon: <Timer className="w-12 h-12 text-yellow-600" />, // Increased icon size
      value: stats.service.pending.count,
      details: stats.service.pending.details,
      bgColor: 'bg-yellow-50',
      borderColor: 'border-yellow-200',
    },
    {
      title: 'Total Payment',
      icon: <DollarSign className="w-12 h-12 text-purple-600" />, // Increased icon size
      value: stats.service.totalPayment.amount,
      details: stats.service.totalPayment.details,
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200',
    },
  ];

  const warrantyCards = [
    {
      title: 'Products in Warranty',
      icon: <Wrench className="w-12 h-12 text-blue-600" />, // Increased icon size
      value: stats.warranty.inProcess.count,
      details: stats.warranty.inProcess.details,
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
    },
    {
      title: 'Ready for Delivery',
      icon: <Box className="w-12 h-12 text-green-600" />, // Increased icon size
      value: stats.warranty.readyForDelivery.count,
      details: stats.warranty.readyForDelivery.details,
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200',
    },
    {
      title: 'Pending Claims',
      icon: <Clock className="w-12 h-12 text-yellow-600" />, // Increased icon size
      value: stats.warranty.pending.count,
      details: stats.warranty.pending.details,
      bgColor: 'bg-yellow-50',
      borderColor: 'border-yellow-200',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="space-y-8">
        {/* Service Section */}
        <div>
          <div className="flex items-center space-x-2 mb-6">
            <Tool className="w-12 h-12 text-blue-600" />
            <h2 className="text-2xl font-bold text-gray-800">
              Service Dashboard
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {serviceCards.map((card, index) => (
              <DashboardCard key={index} card={card} />
            ))}
          </div>
        </div>

        {/* Warranty Section */}
        <div>
          <div className="flex items-center space-x-2 mb-6">
            <ShieldCheck className="w-12 h-12 text-green-600" />
            <h2 className="text-2xl font-bold text-gray-800">
              Warranty Dashboard
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {warrantyCards.map((card, index) => (
              <DashboardCard key={index} card={card} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
