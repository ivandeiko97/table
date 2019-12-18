import React from 'react';

import IconLock from '../../icons/IconLock';
import './style.css';
import IconChangePage from '../../icons/IconChangePage';

export default function PageController({ pageCount, selectedPage, changePage }) {
  let pages = [];
  for (let i = 1; i <= pageCount; i++) {
    const selected = selectedPage === i;
    pages.push(
      <li
        className={`pages__item ${selected ? 'pages__item_selected' : ''}`}
        key={i}
        onClick={change}
      >
        {i}
      </li>
    );
  };

  function change({ target }) {
    return changePage(target.innerText)
  }

  return (
    <div className="pages">
      <button
        disabled={selectedPage === 1}
        className="pages__btn pages__btn_minus" 
        onClick={() => changePage(selectedPage - 1)}
      >
        <IconChangePage />
      </button>
      <ul className="pages__list">
        {[...pages]}
        <li className="pages__item">
          <IconLock />
        </li>
        <li className="pages__item">
          <IconLock />
        </li>
      </ul>
      <button
        disabled={selectedPage + 1 > pageCount}
        className="pages__btn pages__btn_plus" 
        onClick={() => changePage(selectedPage + 1)}
      >
        <IconChangePage />
      </button>
    </div>
  )
}
