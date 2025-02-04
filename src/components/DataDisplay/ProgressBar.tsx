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
          className='absolute left-0 top-0 h-full bg-indigo-200 rounded-full'
          style={{ width: `${percentage}%` }}
        ></div>
        {/* Percentage Label */}
        <span
          className={`absolute top-1/2 transform px-2 outline outline-indigo-600 rounded-md -translate-y-1/2 text-xs font-semibold text-white bg-indigo-600  ${
            percentage < 15 ? '-translate-x-none' : '-translate-x-full'
          }`}
          style={{ left: percentage < 15 ? 0 : `${percentage}%` }}
        >
          {percentage}%
        </span>
      </div>

      {/* Orders and Shipments Info */}
      <div className='mt-1 text-gray-500 text-sm'>
        <span className='font-semibold'>{total.toLocaleString()}</span>{' '}
        Purchased Count •{' '}
        <span className='font-semibold'>{current.toLocaleString()}</span>{' '}
        Registered Count
      </div>
    </div>
  );
}
