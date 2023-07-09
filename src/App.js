// import logo from './logo.svg';
import React, { useEffect, useState } from 'react';
import './App.css';
import styles from './styles/styles.module.css';

import axios from 'axios';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import Catalogue from './components/Catalogue';

import CountryPage from './components/CountryPage';
import Layout from './components/Layout';


function App() {
  const baseURL = "https://restcountries.com/v3.1/all";
  const [countryData, setCountryData] = useState([]);


  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setCountryData(response.data);
    });
  }, []);

  React.useEffect(() => {
    localStorage.setItem("countries", JSON.stringify(countryData))
  }, [countryData]);


  // console.log(countryData);

  // setting up the darkmode 
  const [darkMode, setDarkMode] = useState(false);

  function toggleDarkMode() {
    setDarkMode(prevMode => prevMode = !prevMode)
  }

  return (
   <Router>
     <Routes>
     <Route element={
                    <Layout 
                        toggleDarkMode={toggleDarkMode}
                        darkMode={darkMode} 
                    />
                }>
                    <Route
                        path="/"
                        element={
                            <Catalogue
                                darkMode={darkMode}
                                countryData={countryData}
                            />
                        }
                    />
                    <Route
                        path="/:cca3"
                                darkMode={darkMode}
                        element={<CountryPage  />}
                    />
                </Route>
            </Routes>
   </Router>
  );
}

export default App;



