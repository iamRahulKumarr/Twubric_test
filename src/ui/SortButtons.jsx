import { useState } from 'react';
import Button from './Button';
import { useEffect } from 'react';

function SortButtons() {
  const [currSort, setCurrSort] = useState('');
  const sortingButtons = [
    'Twubric Score',
    'Friends',
    'Influence',
    'Chirpiness',
  ];
  useEffect(function () {}, [currSort]);
  return (
    <div className="mx-auto w-3/4 flex border-black border-2">
      {sortingButtons.map((buttonName, i) => (
        <Button key={i} id={buttonName} onClick={() => console.log('hi')}>
          {buttonName}
        </Button>
      ))}
    </div>
  );
}

export default SortButtons;
