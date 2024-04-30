import React from 'react';
import Link from 'next/link';
import { getTemplate } from '../../helpers/getTemplate';

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

  return (
    <div className="bg-[#191919] w-full p-10 flex items-center justify-center">
      <FoundTemplate />
    </div>
  );
}

export default Template;
