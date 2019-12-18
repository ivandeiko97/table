import React from 'react';

import './style.css';
import IconFilter2 from '../../icons/IconFilter2';
import IconFilter from '../../icons/IconFilter';

export default function Filter({ filter, openFilter, selectOption }) {
  const {
    selectedOption,
    filterOptions,
    open,
  } = filter;
  
  let borderBody = {
    borderBottomLeftRadius: open ? "0" :"50px",
    borderBottomRightRadius: open ? "0" :"50px",
    borderTopLeftRadius: open ? "27px" :"50px",
    borderTopRightRadius: open ? "27px" :"50px",
  }
  
  function clickHandler({target}) {
    return selectOption(target.innerText);
  }

  return (
    <div className="filter">
      <IconFilter />
      <span className="filter__text">filter:</span>
      <div 
        className="filter__body"
        style={{...borderBody}}
        onClick={openFilter}
      >
        <div className="filter__selected">{selectedOption}</div>
        <div 
          className="filter__options" 
          style={{display: open ? 'block' : 'none'}}
        >
          {filterOptions.map(option => (
            <div 
              className="filter__option"
              key={option}
              onClick={clickHandler}
            >
                {option}
            </div>
          ))}
        </div>
      </div>
      <div 
        className="filter__arrow"
        style={{
          transform: open ? 'rotate(180deg)' : 'rotate(0deg)'
        }}
        onClick={openFilter}
      >
        <IconFilter2 />
      </div>
    </div>
  )
}
