import { twMerge } from 'tailwind-merge';

export default function ScoreChart({
  score,
  description,
}: {
  score: number;
  description: string;
}) {
  return (
    <div className='flex flex-col justify-center items-center pt-6 md:pt-0'>
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
        {score}
      </div>
      <p className='text-sm text-gray-500'>{description}</p>
    </div>
  );
}
