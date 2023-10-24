import React from 'react';

const Card = ({title, picture}) => {
    return (
        <div className="card">
        <img src={picture} alt={title} />
        <div className="card__infos">
          <h4>{title}</h4>
        </div>
      </div>
    );
};

export default Card;