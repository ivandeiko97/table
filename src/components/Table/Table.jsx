import React from 'react'
import TableRow from '../TableRow/TableRow'
import TableHeader from '../TableHeader/TableHeader'

export default function Table({ table_info, page, startElem, sort, sortInfo, stat }) {
  let tableElem = [];
  for (let i = startElem; i < 5 * page; i++) {
    const info = table_info[i]
    tableElem.push(
      <TableRow 
        {...info} 
        key={info.channel_id} 
        ratingNumber={i + 1}
      />
    )
  }

  return (
    <table className="table">
      <TableHeader sort={sort} sortInfo={sortInfo} stat={stat} />
      <tbody>
        {[...tableElem]}
      </tbody>
    </table>
  )
}
