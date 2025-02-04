'use client';
import { DashboardProvider } from '@/context/DashboardContext';
import PerformanceData from '@/section/PerformanceData';
import PerformanceDataSkeleton from '@/section/PerformanceDataSkeleton';
import { SelectInput, ClientButton } from '@/components';
import { useCourseData } from '@/hooks/useCourseData';

const DashboardPage = () => {
  const { course, data, isLoading, error, setCourse, handleSubmit } =
    useCourseData();

  return (
    <div className='min-h-screen bg-gray-50 p-4 md:p-8'>
      <div className='max-w-4xl mx-auto space-y-6'>
        <h1 className='text-3xl font-bold text-gray-900'>Course Analytics</h1>

        <div id='coursePerformance' className='flex flex-col gap-4 w-full p-4'>
          <div className='flex flex-col gap-4 md:flex-row md:items-end md:gap-5'>
            <SelectInput
              value={course}
              onChange={setCourse}
              placeholder='Select a Course ...'
              label='Check Performance of'
            />
            <ClientButton onClick={handleSubmit}>Submit</ClientButton>
          </div>
          <div className='flex flex-col gap-2 pt-6'>
            {isLoading && <PerformanceDataSkeleton />}

            {error && (
              <div className='p-4 bg-red-50 text-red-700 rounded-lg w-max-96'>
                Error: {error}
              </div>
            )}

            {data && <PerformanceData {...data} />}
          </div>
        </div>
      </div>
    </div>
  );
};

// Wrap with context provider in _app.tsx
export default function Home() {
  return (
    <DashboardProvider>
      <DashboardPage />
    </DashboardProvider>
  );
}
