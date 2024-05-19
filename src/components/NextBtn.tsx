import React from 'react'
import { templatesIds } from '../helpers/getTemplate';
import Link from 'next/link';

type Props = {
  id: number
}

function NextBtn({id}: Props) {

  const nextURL = () => {
    let nId = Number(id);
    if (!nId) return;
    if (nId + 1 <= templatesIds.length) {
      return '/resume-templates/' + (nId + 1);
    }
    return null;
  };
  return (
    <Link
    href={nextURL() ?? ''}
    className={`text-white absolute top-10 right-16 flex items-center gap-2 ${
      !nextURL()
        ? 'pointer-events-none opacity-50 cursor-not-allowed'
        : 'pointer-events-auto opacity-100 cursor-pointer'
    }`}>
    <p>See Next</p>
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
        d="m15 15 6-6m0 0-6-6m6 6H9a6 6 0 0 0 0 12h3"
      />
    </svg>
  </Link>
  )
}

export default NextBtn