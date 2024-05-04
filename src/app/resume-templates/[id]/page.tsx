import React from 'react';
import Link from 'next/link';
import { getTemplateEditor } from '../../../helpers/getTemplateEditor';

type Props = {
  params: {
    id: string;
  };
};

function Template({ params: { id } }: Props) {
  const FoundTemplateEditor = getTemplateEditor(Number(id));

  if (!FoundTemplateEditor) {
    return (
      <p className="text-center font-medium mt-5">
        Template editor not found Go to home page{' '}
        <Link href="/" className="underline">
          Go back
        </Link>
      </p>
    );
  }

  return (
    <div className="relative bg-[#191919] w-full p-10">
      <FoundTemplateEditor />
    </div>
  );
}

export default Template;
