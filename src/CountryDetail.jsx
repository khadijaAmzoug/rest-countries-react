import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

export default function CountryDetail() {
  const { name } = useParams();
  const navigate = useNavigate();
  const [country, setCountry] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(`https://restcountries.com/v3.1/name/${name}?fullText=true`)
      .then(res => res.json())
      .then(data => {
        setCountry(data[0]);
        setLoading(false);
      })
      .catch(err => {
        console.error('Failed to fetch country:', err);
        setLoading(false);
      });
  }, [name]);

  if (loading) return <p className="p-4">Loading...</p>;

  if (!country) return <p className="p-4">Country not found.</p>;

  return (
    <div  className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <button
        onClick={() => navigate(-1)}
        className="mb-6 px-6 py-2 bg-white dark:bg-gray-700 shadow rounded hover:opacity-90 transition"
      >
        ← Back
      </button>

      <div className="flex flex-col md:flex-row gap-8">
        <img
          src={country.flags.svg}
          alt={`Flag of ${country.name.common}`}
          className="w-full md:w-1/2 rounded shadow"
        />

        <div className="flex-1">
          <h2 className="text-3xl font-bold mb-4">{country.name.common}</h2>

          <p><strong>Native Name:</strong> {Object.values(country.name.nativeName || {})[0]?.common || country.name.common}</p>
          <p><strong>Population:</strong> {country.population.toLocaleString()}</p>
          <p><strong>Region:</strong> {country.region}</p>
          <p><strong>Sub Region:</strong> {country.subregion || 'N/A'}</p>
          <p><strong>Capital:</strong> {country.capital ? country.capital[0] : 'N/A'}</p>
          <p><strong>Top Level Domain:</strong> {country.tld ? country.tld[0] : 'N/A'}</p>
          <p><strong>Currency:</strong> {country.currencies ? Object.values(country.currencies)[0].name : 'N/A'}</p>
          <p><strong>Language(s):</strong> {country.languages ? Object.values(country.languages).join(', ') : 'N/A'}</p>

          <div className="mt-6">
            <h3 className="font-semibold mb-2">Border Countries:</h3>
            <div className="flex flex-wrap gap-2">
              {country.borders && country.borders.length > 0 ? (
                country.borders.map(border => (
                  <span
                    key={border}
                    className="px-3 py-1 bg-white dark:bg-gray-700 shadow rounded text-sm cursor-default"
                  >
                    {border}
                  </span>
                ))
              ) : (
                <span>No border countries</span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
