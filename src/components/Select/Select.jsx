import React from 'react';

import IconLock from '../../icons/IconLock';
import IconFilter2 from '../../icons/IconFilter2';
import './style.css';

export default function Select({ selected }) {
  return (
    <div className="select">
      <IconLock />
      <div className="select__body">
        <div className="select__selected" >{selected}</div>
      </div>
      <IconFilter2 />
    </div>
  )
}
