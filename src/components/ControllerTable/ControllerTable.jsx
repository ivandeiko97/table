import React from 'react';

import Filter from '../Filter/Filter';
import './style.css';
import Select from '../Select/Select';

export default function ControllerTable(props) {

  return (
    <div className="controller">
      <Filter {...props} />
      <Select selected="All Languages" />
      <Select selected="All Games" />
    </div>
  )
}
