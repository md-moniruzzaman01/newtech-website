"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import {
  Phone,
  MapPin,
  DollarSign,
  Clock,
  Mail,
  CarTaxiFront,
  ShoppingBag,
} from "lucide-react";
import dp from "../../../../images/female_user.webp";
import { FaPen } from "react-icons/fa";

const Profile = () => {
  const [user, setUser] = useState<any>(null);
  const [profilePic, setProfilePic] = useState(dp);
  // const [isClient, setIsClient] = useState(false);

  // useEffect(() => {
  //   setIsClient(true);
  //   const userData = localStorage.getItem("user");
  //   if (userData) {
  //     setUser(JSON.parse(userData));
  //   }
  // }, []);

  // if (!isClient || !user) {
  //   return (
  //     <div className="flex justify-center items-center min-h-screen text-teal-600 text-lg font-medium">
  //       Loading...
  //     </div>
  //   );
  // }

  const userServiceData = {
    firstName: "Isabel",
    lastName: "S. McAvoy",
    email: "isabel.smcavoy@example.com",
    phone: "123-456-7890",
    address: "123 Main St, Anytown, USA",
    jobTitle: "Software Engineer",
    totalProducts: 15,
    totalPaid: 2500,
    totalPending: 500,
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-50 p-4 md:p-6">
      {/* Cover Photo */}
      <div className="w-full h-48 md:h-60 bg-gradient-to-r bg-slate-100 relative rounded-lg overflow-hidden"></div>

      {/* Profile Card */}
      <div className="max-w-7xl bg-white p-6 -mt-12 mx-48 md:-mt-16 rounded-lg shadow-lg relative z-10 flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6">
        <div className="relative">
          <Image
            src={profilePic}
            alt="User Profile"
            className="w-24 h-24 md:w-32 md:h-32 rounded-lg object-cover border-4 border-white shadow-md"
          />
          <div className="absolute bottom-2 m-2 right-2 bg-white/30 border-white border p-1 rounded-full shadow-md">
            <FaPen className="w-3 h-3 m-1 text-white " />
          </div>
        </div>
        <div className="flex-1">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
            {userServiceData.firstName} {userServiceData.lastName}
          </h2>
          <p className="text-gray-500">{userServiceData.jobTitle}</p>
          <div className="flex items-center gap-4 mt-2 text-gray-600">
            <Mail className="w-5 h-5 text-gray-400" /> {userServiceData.email}
            <Phone className="w-5 h-5 text-gray-400" /> {userServiceData.phone}
            <MapPin className="w-5 h-5 text-gray-400" />
            {userServiceData.address}
          </div>
        </div>
        <div className="flex gap-2">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow">
            Edit Profile
          </button>
        </div>
      </div>

      {/* Stats Section */}
      <div className="w-full flex flex-col md:flex-row justify-between gap-4 mt-6">
        {/* Products in Service */}
        <div className="flex-1 p-4 bg-blue-50 rounded-md shadow-md flex justify-between items-center gap-4">
          <ShoppingBag className="w-10 h-10 text-blue-600" />
          <div className="flex flex-col">
            <p className="text-black font-medium">Products in Service</p>
            <p className="text-2xl font-bold text-blue-900 text-right">156</p>
          </div>
        </div>

        {/* Total Paid */}
        <div className="flex-1 p-4 bg-green-50 rounded-md shadow-md flex justify-between items-center gap-4">
          <DollarSign className="w-10 h-10 text-green-600" />
          <div className="flex flex-col">
            <p className="text-black font-medium">Total Paid</p>
            <p className="text-2xl font-bold text-green-900 ">
              ${userServiceData.totalPaid}
            </p>
          </div>
        </div>

        {/* Total Pending */}
        <div className="flex-1 p-4 bg-yellow-50 rounded-md shadow-md flex items-center justify-between gap-4">
          <Clock className="w-10 h-10 text-yellow-600" />
          <div className="flex flex-col">
            <p className="text-black font-medium">Total Pending</p>
            <p className="text-2xl font-bold text-yellow-900 text-right">
              ${userServiceData.totalPending}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
