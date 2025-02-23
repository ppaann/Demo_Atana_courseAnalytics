'use client';

const courses = [
  { id: 'HWYD', name: 'How Was Your Day' },
  { id: 'USH', name: 'Unintentional Still Hurts' },
  { id: 'OFA', name: 'Once and For All' },
  { id: 'UC', name: 'Uncomfortable Conversation' },
  { id: 'GRAWV', name: 'Getting Real About Workplace Violence' },
];
import { Fragment } from 'react';
import {
  Label,
  Listbox,
  Transition,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from '@headlessui/react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';
import { twMerge } from 'tailwind-merge';
import { CourseName } from '@/types/dashboard';

interface SelectInputProps {
  value: CourseName | null;
  onChange: (value: CourseName) => void;
  placeholder?: string;
  label?: string;
}

export default function SelectInput({
  value,
  onChange,
  placeholder,
  label,
}: SelectInputProps) {
  return (
    <div className='w-full md:w-96'>
      <Listbox
        value={value}
        onChange={(course) => {
          if (course) {
            onChange(course);
          }
        }}
      >
        <Label className='block text-sm/6 font-medium text-gray-900'>
          {label}
        </Label>
        <div className='relative mt-1'>
          <ListboxButton className='relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md outline outline-1 -outline-offset-1 outline-gray-300  focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm'>
            <span className='col-start-1 row-start-1 flex items-center gap-3 pr-6'>
              {value ? (
                <>
                  <span>{value.id}</span>
                  <span className='block truncate'>{value.name}</span>
                </>
              ) : (
                <span className='text-sm text-gray-400'>{placeholder}</span>
              )}
            </span>
            <span className='pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2'>
              <ChevronUpDownIcon
                className='h-5 w-5 text-gray-400'
                aria-hidden='true'
              />
            </span>
          </ListboxButton>
          <Transition
            as={Fragment}
            leave='transition ease-in duration-100'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <ListboxOptions className='absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm z-20'>
              {courses.map((course, index) => (
                <ListboxOption
                  key={index}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                      active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'
                    }`
                  }
                  value={course}
                >
                  {({ selected }) => (
                    <>
                      <div className='flex items-center w-full'>
                        <span>{course.id}</span>
                        <span
                          className={twMerge(
                            'ml-3 block truncate font-normal group-data-selected:font-semibold',
                            selected ? 'font-medium' : 'font-normal'
                          )}
                          title={course.name}
                        >
                          {course.name}
                        </span>
                      </div>
                      {selected ? (
                        <span className='absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600'>
                          <CheckIcon className='h-5 w-5' aria-hidden='true' />
                        </span>
                      ) : null}
                    </>
                  )}
                </ListboxOption>
              ))}
            </ListboxOptions>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
}
