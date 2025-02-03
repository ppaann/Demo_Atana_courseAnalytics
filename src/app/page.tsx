'use client';
import { SelectInput, ClientButton, ProgressBar } from '@/app/components';
import { twMerge } from 'tailwind-merge';

export default function Home() {
  const getCoursePerformance = () => {};
  const score = 85;

  return (
    <div className='flex justify-center items-center h-screen w-screen'>
      <div id='coursePerformance' className='flex flex-col gap-4 w-full p-4'>
        <div className='flex flex-col gap-4 md:flex-row md:items-end md:gap-5'>
          <SelectInput />
          <ClientButton onClick={getCoursePerformance}>Submit</ClientButton>
        </div>
        <div className='flex flex-col gap-2 pt-6'>
          <p>Course: Getting Real About Workplace Violence</p>

          <div className='flex flex-col gap-4 md:flex-row justify-center md:justify-start items-center pt-2'>
            <ProgressBar
              percentage={14}
              orders={123}
              shipments={12}
            ></ProgressBar>
            <div className='flex flex-col justify-center items-center h-6 pt-6 md:pt-0'>
              <div
                className={twMerge(
                  'size-12 md:size-10 flex justify-center items-center text-2xl font-semibold',
                  score >= 85
                    ? 'text-green-500'
                    : score < 60
                    ? 'text-red-500'
                    : 'text-gray-900'
                )}
              >
                89
              </div>
              <p className='text-sm md:text-xs text-gray-500'>Average Score</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
