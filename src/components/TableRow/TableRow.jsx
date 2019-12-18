import React from 'react';

import ChanneInfo from '../ChannelInfo/Channelnfo';
import ElemStatistics from '../ElemStatistics/ElemStatistics';
import './style.css'

export default function TableRow(props) {
  const {
      channel_name,
      game_name,
      stream_language,
      avatar_url,
      air_time,
      hours_watched,
      peak_viewers,
      avg_concurrent_viewers,
      views_gain,
      followers_gain,
      ratingNumber,
  } = props;

  const statistics = [
    air_time, 
    hours_watched, 
    peak_viewers, 
    avg_concurrent_viewers, 
    views_gain, 
    followers_gain 
  ]

  return (
    <tr className="body-row">
      <td className="body-row__item">
        <div className="rating-number">
          {ratingNumber}
        </div>
      </td>
      <ChanneInfo 
        channel_name={channel_name}
        game_name={game_name}
        stream_language={stream_language}
        avatar_url={avatar_url}
      />
      {statistics.map((data, index) => (
        <ElemStatistics data={data} key={data.value} color={index + 1} />
      ))}
    </tr>
  )
}
