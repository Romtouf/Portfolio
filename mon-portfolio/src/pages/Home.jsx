import React from 'react';
import Presentation from '../components/Presentation';
import Card from '../components/Card';
import data from "../Data/travaux.json";
import { NavLink } from "react-router-dom"


const Home = () => {
    return (
        <div className='home'>
            <Presentation />
            <div className="gallery">
        {data.map(({ id, title, picture }) => (
          <NavLink className="gallery__cards" key={id} to={`/.../${id}`}>
            <Card title={title} picture={picture} />
          </NavLink>
        ))}
      </div>
        </div>
    );
};

export default Home;