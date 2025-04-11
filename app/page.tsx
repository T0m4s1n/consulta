// components/ParentComponent.jsx
import React from 'react';
import Presentation from './Presentation';
import Slide from './slide';
import Slode from './slode';
import Window from './window';

const ParentComponent = () => {
  return (
    <div>
        <Presentation/>
        <Slide/>
        <Slode/>
        <Window/>
      </div>
  );
};

export default ParentComponent;