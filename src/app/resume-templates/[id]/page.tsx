import React from 'react';
import Link from 'next/link';
import { getTemplate, templatesIds } from '../../../helpers/getTemplate';
import BackBtn from './components/BackBtn';

type Props = {
  params: {
    id: string;
  };
};

function Template({ params: { id } }: Props) {
  const FoundTemplate = getTemplate(Number(id));

  if (!FoundTemplate) {
    return (
      <p className="text-center font-medium mt-5">
        Template not found Go to home page{' '}
        <Link href="/" className="underline">
          Go back
        </Link>
      </p>
    );
  }

  const nextURL = () => {
    let nId = Number(id);
    if (!nId) return;
    if (nId + 1 <= templatesIds.length) {
      return '/resume-templates/' + (nId + 1);
    }
    return null;
  };

  return (
    <div className="relative bg-[#191919] w-full p-10 flex items-center justify-center">
      <BackBtn />
      <FoundTemplate />

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
    </div>
  );
}

export default Template;
