import React from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar';
import Banner from './Components/Banner/Banner';
import RowPost from './Components/RowPost/RowPost';
import {original,action,horror,comedy,romantic,documentary} from './urls';

const App = () => {
  return (
    <div>
      <Navbar/>
      <Banner/>
      <RowPost url={original} title='Netflix Originals' />
      <RowPost url={action} title='Action' isSmall />
      <RowPost url={comedy} title='Comedy' isSmall />
      <RowPost url={horror} title='Horror' isSmall />
      <RowPost url={romantic} title='Romantic' isSmall />
      <RowPost url={documentary} title='Documentary' isSmall />
    </div>
  );
}

export default App;
