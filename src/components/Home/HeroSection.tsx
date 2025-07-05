import * as React from 'react';
import { FaServer, FaLock, FaHeartbeat, FaCube, FaExchangeAlt } from 'react-icons/fa';

const blockchainStats = [
  { icon: <FaServer className="text-[#000F96] w-8 h-8" />, label: 'Validators', value: '2,500' },
  { icon: <FaLock className="text-[#000F96] w-8 h-8" />, label: 'Staked', value: '1,200,000' },
  { icon: <FaHeartbeat className="text-[#000F96] w-8 h-8" />, label: 'Health', value: 'Good' },
  { icon: <FaCube className="text-[#000F96] w-8 h-8" />, label: 'Blocks', value: '8,900,000' },
  { icon: <FaExchangeAlt className="text-[#000F96] w-8 h-8" />, label: 'Transactions', value: '120,000,000' },
];

const bentoGrid = [
  { ...blockchainStats[0], className: 'col-span-2 row-span-1' },
  { ...blockchainStats[1], className: 'col-span-1 row-span-2' },
  { ...blockchainStats[2], className: 'col-span-1 row-span-1' },
  { ...blockchainStats[3], className: 'col-span-1 row-span-1' },
  { ...blockchainStats[4], className: 'col-span-2 row-span-1' },
];

const StatsDashboard: React.FC = () => {
  return (
    <div className="relative w-screen min-h-[60vh] bg-white py-16 px-4 flex items-center justify-center">
      <div className="w-full max-w-6xl grid grid-cols-2 md:grid-cols-4 grid-rows-3 gap-6">
        {bentoGrid.map((stat, i) => (
          <div
            key={i}
            className={`flex flex-col justify-between rounded-2xl bg-white border-2 border-black shadow-xl p-8 ${stat.className} transition-transform hover:scale-105 duration-200`}
            style={{ minHeight: '160px' }}
          >
            <div className="flex items-center gap-3 mb-4">
              {stat.icon}
              <span className="text-lg font-semibold text-black">{stat.label}</span>
            </div>
            <div className="text-3xl font-extrabold text-black">{stat.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsDashboard;