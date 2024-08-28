import React, { useState } from 'react';
import CountUp from 'react-countup';
import { FaUsers, FaBuilding, FaUsersCog, FaCalendarAlt } from 'react-icons/fa';

const StatsSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const stats = [
    { icon: FaUsers, label: 'Clients', number: 5000 },
    { icon: FaBuilding, label: 'Branches', number: 100  },
    { icon: FaUsersCog, label: 'Team Members', number: 200 },
    { icon: FaCalendarAlt, label: 'Years of Experience', number: 15 },
  ];

  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="text-center  p-6 rounded-lg shadow-lg bg-gradient-to-r from-[#eba85b] via-[#ae7437] to-[#b67b55]"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div
                  className={`transform transition-transform duration-500  ${
                    hoveredIndex === index ? 'rotate-360' : ''
                  }`}
                >
                  <Icon className=" text-color-#8d755a text-5xl mx-auto mb-4" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">
                  <CountUp end={stat.number} duration={2} />
                </h2>
                <p className="text-gray-600 mt-2">{stat.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
