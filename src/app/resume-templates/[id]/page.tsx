import React from 'react';
import Link from 'next/link';
import { availableEditorsId } from '../../../helpers/getTemplateEditor';
import { getTemplateDesign, templatesIds } from '../../../helpers/getTemplate';
import BackBtn from '../../../components/BackBtn';
import NextBtn from '../../../components/NextBtn';

type Props = {
  params: {
    id: string;
  };
};

function Template({ params: { id } }: Props) {
  const FoundTemplateEditor = getTemplateDesign(Number(id));

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

  return <div className='flex justify-center mt-16 pb-10 w-full'>
    <BackBtn/>
    <div className='flex flex-col gap-5'>
      {availableEditorsId.includes(Number(id)) ? <Link href={`${id}/editor`} className='font-bold border bg-white text-black px-4 py-2 rounded-lg w-max cursor-pointer hover:bg-white/80 active:scale-110 transition-all'>Visit Editor</Link> : <p className='opacity-50 font-bold border bg-white text-black px-4 py-2 rounded-lg w-max cursor-not-allowed'>Editor for this template is not implemented yet. Look for others.</p>}
    {/* @ts-ignore */}
    <FoundTemplateEditor />
    </div>
    <NextBtn id={Number(id)}/>
  </div>
}

export default Template;
