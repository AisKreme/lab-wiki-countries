import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function CountriesList() {
  const [countryList, setCountries] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        let { data } = await axios.get('https://restcountries.com/v3.1/all');
        setCountries(data);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  if (!countryList.length) {
    return <p>Page is loading . . .</p>;
  }

  return (
    <div>
      <h1>COUNTRYLIIIST</h1>
      {countryList.map((elem, i) => {
        return (
          <div className="flx-clm">
            <img
              className="flx-item flagLink"
              src={elem.flags.svg}
              alt="Flags"
            ></img>
            <Link className="flx-item" to={`/country/${elem.cca3}`}>
              {elem.name.common}
            </Link>
          </div>
        );
      })}
    </div>
  );
}
