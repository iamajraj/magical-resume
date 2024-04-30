import React from 'react';
import Template1 from '../../components/templates/Template1';
import Template2 from '../../components/templates/Template2';
import Link from 'next/link';

type Props = {
  params: {
    id: string;
  };
};

function getTemplate(id: number) {
  switch (id) {
    case 1:
      return Template1;
    case 2:
      return Template2;
    default:
      return null;
  }
}

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
