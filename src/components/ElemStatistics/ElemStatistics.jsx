import React from 'react';

import './style.css';
import { getWidth } from '../../utils';

export default function ElemStatistics({ data, color }) {
  const {
    value,
    previousPeriodDiffPercentage,
  } = data;
  
  let width = getWidth(previousPeriodDiffPercentage);

  let styleArrow = {
    color: previousPeriodDiffPercentage < 0 ? "#FF574C" : '#4BFF58',
  }

  return (
    <td className="body-row__item body-row__item_paddingRight">
      <div className="statistics-elem">
        <p className="statistics-elem__value">{value}</p>
        <div className="statistics-elem__container">
          <p 
            className="statistics-elem__arrow"
            style={{...styleArrow}}
          >
            {previousPeriodDiffPercentage < 0 ?  '↓' : '↑'}
          </p>
          <p className="statistics-elem__different">{data.previousPeriodDiffPercentage}%</p>
        </div>
      </div>
      <div className="gradient">
          <div 
            className={`gradient__colorElem gradient__colorElem_${color}`}
            style={{
              width: `${width.color}%`,
            }}
          ></div>
          <div 
            className="gradient__blackElem"
            style={{
              width: `${Math.abs(width.black)}%`,
            }}
          ></div>
        </div>
    </td>
  )
}
