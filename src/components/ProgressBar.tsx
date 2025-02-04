'use client';
import React from 'react';

type ProgressBarProps = {
  percentage: number;
  total: number;
  current: number;
};

export default function ProgressBar({
  percentage,
  total,
  current,
}: ProgressBarProps) {
  return (
    <div className='w-full md:w-96'>
      {/* Progress Bar Container */}
      <div className='relative w-full h-6 bg-gray-200 rounded-full overflow-hidden'>
        {/* Progress Fill */}
        <div
          className='absolute left-0 top-0 h-full bg-blue-200 rounded-full'
          style={{ width: `${percentage}%` }}
        ></div>
        {/* Percentage Label */}
        <span
          className={`absolute top-1/2 transform px-2 outline outline-blue-500 rounded-md -translate-y-1/2 text-xs font-semibold text-white bg-blue-600  ${
            percentage < 15 ? '-translate-x-none' : '-translate-x-full'
          }`}
          style={{ left: percentage < 15 ? 0 : `${percentage}%` }}
        >
          {percentage}%
        </span>
      </div>

      {/* Orders and Shipments Info */}
      <div className='mt-1 text-gray-600 text-sm'>
        {total.toLocaleString()} Purchased Count • {current.toLocaleString()}{' '}
        Registered Count
      </div>
    </div>
  );
}
