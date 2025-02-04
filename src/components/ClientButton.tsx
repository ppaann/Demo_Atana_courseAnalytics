'use client';

import { Button } from '@headlessui/react';
import { PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';

interface ClientButtonProps {
  onClick: () => void;
  className?: string;
}

export default function ClientButton({
  onClick,
  children,
  className,
}: PropsWithChildren<ClientButtonProps>) {
  return (
    <Button
      className={twMerge(
        className,
        'rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
      )}
      onClick={onClick}
    >
      {children}
    </Button>
  );
}
