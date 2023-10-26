import React from 'react';
import cvPdf from "../assets/cv.pdf";

const Cv = () => {
    return (
        <div className='cv'>
          <a href={cvPdf} download="CV">
          <button className='button__cv'>Télécharger mon CV</button>
          </a>
        </div>
    );
};

export default Cv;