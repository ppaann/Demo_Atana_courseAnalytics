import { SelectInput } from '@/app/components';

export default function Home() {
  return (
    <div className='flex justify-center items-center h-screen w-screen'>
      <div
        id='coursePerformance'
        className='flex flex-col gap-4 w-full md:w-96 p-4'
      >
        <SelectInput />

        <div className='flex flex-col gap-2'></div>
      </div>
    </div>
  );
}
