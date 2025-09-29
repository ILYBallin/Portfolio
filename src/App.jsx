import './App.css'
import Naglowke from './komponenty/Naglowek';
import Poczatek from './komponenty/Poczatek'
import Glowne from './strony/Glowne';
import Projekty from './strony/Projekty';
import { useState, useEffect } from "react";
import { Routes, Route } from 'react-router-dom';

function App() {
    const [show, setShow] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setShow(false), 3100);
        return () => clearTimeout(timer);
    }, []);
  return (
    <>
      {show && <Poczatek />}
      <Naglowke/>
      <Glowne/>
    </>
  );
}

export default App
