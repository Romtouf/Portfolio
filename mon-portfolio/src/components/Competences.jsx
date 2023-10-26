import React from 'react';

const Competences = ({title, picture}) => {
    return (
        <div className="competences">
        <img src={picture} alt={title} />
        <div className="competences__infos">
          <h4 className='competences__infos__title'>{title}</h4>
        </div>
      </div>
    );
};

export default Competences;