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
        'inline-flex justify-center items-center h-8 rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2'
      )}
      onClick={onClick}
    >
      {children}
    </Button>
  );
}
