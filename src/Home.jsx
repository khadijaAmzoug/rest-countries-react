import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  // حالات الدول، بحث، فلتر...
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState('');
  const [region, setRegion] = useState('');
  
  // حالة الوضع الليلي
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('darkMode') === 'true';
  });
  
  const navigate = useNavigate();

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all?fields=name,flags,population,region,capital')
      .then(res => res.json())
      .then(data => setCountries(data))
      .catch(err => console.error('Failed to fetch countries:', err));
  }, []);

  // تفعيل/تعطيل الوضع الليلي وتخزينه
  const toggleDarkMode = () => {
    setDarkMode(prev => {
      localStorage.setItem('darkMode', !prev);
      return !prev;
    });
  };

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const filteredCountries = countries.filter(country => {
    const matchesSearch = country.name.common.toLowerCase().includes(search.toLowerCase());
    const matchesRegion = region ? country.region === region : true;
    return matchesSearch && matchesRegion;
  });

  return (
    <div  className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <header className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Where in the world?</h1>
        <button
          onClick={toggleDarkMode}
          className="bg-gray-200 dark:bg-gray-700 px-4 py-2 rounded"
        >
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </header>

      <section className="flex flex-col md:flex-row md:justify-between mb-6 gap-4">
        <input
          type="text"
          placeholder="Search for a country..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="p-2 rounded shadow border w-full md:w-1/3"
        />
        <select
          value={region}
          onChange={e => setRegion(e.target.value)}
          className="p-2 rounded shadow border w-full md:w-1/5"
        >
          <option value="">Filter by Region</option>
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </section>

      <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {filteredCountries.map(country => (
          <article
            key={country.name.common}
            onClick={() => navigate(`/country/${country.name.common}`)}
            className="bg-white dark:bg-gray-800 rounded shadow cursor-pointer hover:scale-105 transform transition duration-200"
          >
            <img
              src={country.flags.svg}
              alt={`Flag of ${country.name.common}`}
              className="w-full h-40 object-cover rounded-t"
            />
            <div className="p-4">
              <h2 className="font-bold text-lg mb-2">{country.name.common}</h2>
              <p><strong>Population:</strong> {country.population.toLocaleString()}</p>
              <p><strong>Region:</strong> {country.region}</p>
              <p><strong>Capital:</strong> {country.capital ? country.capital[0] : 'N/A'}</p>
            </div>
          </article>
        ))}
      </main>
    </div>
  );
}
