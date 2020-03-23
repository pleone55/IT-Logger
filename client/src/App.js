import React, { useEffect } from 'react';
import SearchBar from './components/layout/SearchBar';
import Logs from './components/logs/Logs';
import AddButton from './components/layout/AddButton';
import AddLog from './components/logs/AddLog';
import EditLog from './components/logs/EditLog';
import AddTech from './components/techs/AddTech';
import TechList from './components/techs/TechList';

import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import './App.css';

function App() {
  useEffect(() => {
    //Initializes Materialize JS
    M.AutoInit();
  });

  return (
    <>
      <SearchBar/>
      <div className="container">
        <AddButton/>
        <AddLog/>
        <EditLog/>
        <AddTech/>
        <TechList/>
        <Logs />
      </div>
    </>
  );
}

export default App;
