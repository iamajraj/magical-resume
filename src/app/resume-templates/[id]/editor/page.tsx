import React from 'react';
import Link from 'next/link';
import { getTemplateEditor } from '../../../../helpers/getTemplateEditor';
import { templatesIds } from '../../../../helpers/getTemplate';

type Props = {
  params: {
    id: string;
  };
};

function Template({ params: { id } }: Props) {
  const FoundTemplateEditor = getTemplateEditor(Number(id));

  if (!FoundTemplateEditor) {
    return (
      <div className="mt-5">
        <p className='text-2xl italic bg-white px-4 py-2 text-black rounded-lg border w-max mx-auto'>{id in templatesIds ? "The Editor for this template is not completed yet. Coming Soon" : "Invalid template Id"}</p>
        <div className='mt-5 flex items-center gap-5 justify-center'>
          <p>Go to home page</p>
        <Link href="/" className="underline">
          Go back
        </Link>
        </div>
      </div>
    );
  }

  return <FoundTemplateEditor />
}

export default Template;
