import { ProgressBar, ScoreChart } from '@/components';
import { CourseData } from '@/types/dashboard';

export default function PerformanceData({
  registrationCount,
  title,
  purchasedCount,
  averageMasteryScore,
}: CourseData) {
  return (
    <div className='flex items-start flex-col gap-1 '>
      <div className='text-sm flex'>
        <span className='pr-2'>Course:</span>
        <span className='font-semibold'>{title}</span>
      </div>

      <div className='flex flex-col gap-4 md:flex-row md:items-end '>
        <ProgressBar
          percentage={((registrationCount * 100) / purchasedCount) << 0}
          total={purchasedCount}
          current={registrationCount}
        />
        <ScoreChart score={averageMasteryScore} description='Average Score' />
      </div>
    </div>
  );
}
