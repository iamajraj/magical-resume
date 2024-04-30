'use client';

import { useRouter } from 'next/navigation';
import React from 'react';

type Props = {};

export default function BackBtn({}: Props) {
  const router = useRouter();
  return (
    <button
      onClick={() => router.back()}
      className="text-white absolute top-10 left-16 flex items-center gap-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className="w-8 h-8">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3"
        />
      </svg>
      <p>Go Back</p>
    </button>
  );
}
