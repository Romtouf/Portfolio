import React from 'react';

const Card = ({title, picture, content}) => {
    return (
        <div className="card">
            <img src={picture} alt={title} />
            <div className="card__infos">
            <h4 className='card__infos__title'>{title}</h4>
            <span className='card__infos__content'>{content}</span>
        </div>
       
      </div>
    );
};

export default Card;