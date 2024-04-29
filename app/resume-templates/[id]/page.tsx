import React from 'react';
import Template1 from '../../components/templates/Template1';

type Props = {};

function Template({}: Props) {
  return (
    <div className="bg-[#191919] w-full p-10 flex items-center justify-center">
      <Template1 />
    </div>
  );
}

export default Template;
