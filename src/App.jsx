import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import CountryDetail from './CountryDetail';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/country/:name" element={<CountryDetail />} />
    </Routes>
  );
}
