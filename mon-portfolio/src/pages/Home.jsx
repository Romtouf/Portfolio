import React from 'react';
import Presentation from '../components/Presentation';
import Card from '../components/Card';
import data from "../Data/travaux.json";
import dataCompetences from "../Data/competences.json";
import Competences from '../components/Competences';
import { NavLink } from "react-router-dom";
import Cv from "../components/Cv";
import Contact from '../components/Contact';


const Home = () => {

    return (
        <div className='home'>
            <Presentation/>
            <h2 className='home__title' id='mes-travaux'>MES TRAVAUX</h2>
            <div className="gallery">
        {data.map(({ id, title, picture, content, lien }) => (
          <NavLink className="gallery__cards" key={id} to={lien}>
            <Card title={title} picture={picture} content={content} />
          </NavLink>
        ))}
      </div>
      <h2 className='competences__title' id='competences'>COMPÉTENCES</h2>
      <div className="mescompetences">
      {dataCompetences.map(({ id, title, picture }) => (
            <Competences className="mescompetences__cards" key={id} title={title} picture={picture} />
        ))}
      </div>
      <h2 className='cv__title' id='mon-cv'>MON CV</h2>
      <div className='monCv'>
        <Cv />
      </div>
      <h2 className="contact__title" id='contact'>UN PROJET ? <br></br> CONTACTEZ-MOI</h2>
      <div className='contact__block'>
        <Contact />
      </div>
        </div>
    );
};

export default Home;