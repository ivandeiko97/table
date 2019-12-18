import React from 'react';

import './style.css';

export default function Channelnfo(props) {
  const {
    channel_name,
    game_name,
    stream_language,
    avatar_url
  } = props;

  return (
    <td className="channel-info body-row__item">
      <div className="channel-info__avatar">
        <img
          src={avatar_url}
          className="channel-info__img" 
          alt="channel avatar" 
        />
      </div>
      <div className="channel-info__container">
        <div className="channel-info__top">
          <h3 className="channel-info__channel-name">
            {channel_name}
          </h3>
        </div>
        <div className="channel-info__list">
          <p className="channel-info__language">
            {stream_language}
          </p>
          <span className="channel-info__dot"></span>
          <p className="channel-info__game-name">
            {game_name}
          </p>
        </div>
      </div>
    </td>
  )
}
