/* eslint-disable max-len */
/* eslint-disable react/no-array-index-key */
// import { useEffect, useState } from 'react';
// import axios from 'axios';
// import Spinner from '@/components/Spinner';
import AccordionTemplate from '@/components/Tools/AccordionTemplate';

function BilanAdeme() {
  const items = [
    {
      id: 'accordion-collapse-heading-1',
      title: 'Calculez votre bilan carbone?',
      bodyId: 'accordion-collapse-body-1',
      content: (
        <div className="w-full h-full flex justify-center items-center p-4 bg-white">
          <iframe
            title="Nos Gestes Climat Simulator"
            src="https://nosgestesclimat.fr/simulateur/bilan"
            width="500"
            height="800"
            className="border-0"
            allowFullScreen
          />
        </div>
      ),
      active: true,
    },
  ];
  return (
    <div className="mx-auto w-[80%]">
      <AccordionTemplate items={items} />
    </div>
  );
}
export default BilanAdeme;
