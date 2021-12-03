import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../App.css';

export default function CountryDetails() {
  const { id } = useParams();
  const [details, setDetail] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        let { data } = await axios.get(
          `https://restcountries.com/v3.1/alpha/${id}`
        );
        let country = {
          id: id,
          name: data[0].name.common,
          flag: data[0].flags.svg,
          area: data[0].area,
          border: [data[0].borders],
        };
        setDetail(country);
      } catch (err) {
        console.log(err);
      }
    })();
  }, [id]);

  if (!details) {
    return <p>Loading . . . </p>;
  }

  return (
    <div classLink="flx-clm">
      <img
        id="countryDetails"
        src={details.flag}
        classLink="flagLink flx-clm"
      />
      <h1 classLink="flx-clm">{details.name}</h1>
      <p classLink="flx-clm">Area: {details.area}</p>
      <p classLink="flx-clm">Borders: {details.border} </p>
    </div>
  );
}
