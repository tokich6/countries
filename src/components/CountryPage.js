// import { Container, Wrap } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { useParams, useLocation } from 'react-router-dom';
import history from '../history';
import Country from './Country';
import { formatNumber } from '../helpers';

const CountryPage = () => {
  const goBack = () => history.push('/');
  const { code } = useParams();
  const path = useLocation();
  // console.log(path);

  const [detail, setDetail] = useState({});
 
 useEffect(() => {
  async function fetchCountry(countryCode) {
    // if (path.pathname.includes('country')) {
      try {
        // setLoading(true);
        const response = await fetch(`https://restcountries.eu/rest/v2/alpha/${countryCode}`);
        const data = await response.json();
        // setLoading(false);
        // console.log(data);
        return setDetail(data)
      } catch (e) {
        // setLoading(false);
        console.log(e);
      }
    } 
  // }
  fetchCountry(code);
 })
 

  return (
    <Country
      flag = {detail.flag}
      name={detail.name}
      nativeName = {detail.nativeName}
      population = {detail.population}
      region = {detail.region}
      subRegion = {detail.subregion}
      capital = {detail.capital}
      domain
      currencies
      languages
      borders
      onBackClick={goBack}
    />

  )

}

export default CountryPage;