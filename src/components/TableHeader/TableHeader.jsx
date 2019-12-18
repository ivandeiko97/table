import React from 'react';

import './style.css';

export default function TableHeader({ sort, sortInfo,stat }) {
  const {sortMode, sortElem} = sortInfo;
  let sortType = sortMode ? '↑' : '↓';
  let sortColor = sortMode ? '#4BFF58' : '#FF574C'

  return (
    <thead className="header">
      <tr className="header__row">
        <th>#</th>
        <th>Channel</th>
        {stat.map(item => (
          <th key={item.shortName}>
            <div className="header__elem">
              <div
                onClick={() => sort(item.shortName)}
                className="header__elemName"
              >
                <div className="header__title" aria-haspopup="true">
                  <p>{item.title}</p>
                </div>
                {item.shortName}
              </div>
              <p
                style={{
                  color: sortElem === item.shortName ? sortColor : '#36363C',
                }}
                className="header__sort"
              > {sortElem === item.shortName ? sortType : '↑'} </p>
            </div>
          </th>
        ))}
      </tr>
    </thead>
  )
}
