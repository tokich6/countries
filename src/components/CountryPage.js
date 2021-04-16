import { Container, Wrap } from "@chakra-ui/react";
import { useState, useEffect, useColorMode } from "react";
import { useLocation, useParams } from 'react-router-dom';
import history from '../history';
import Country from './Country'

const CountryPage = () => {
  const goBack = () => history.push('/');
  const location = useLocation();
  // const { code } = useParams();
  const [details, setDetails] = useState({});
 

  useEffect(() => {
    setDetails(location.countryDetails); 
 }, [location]);


  return (
    <Country
      flag = {details.flag}
      name={details.name}
      nativeName = {details.nativeName}
      population = {details.population}
      region = {details.region}
      subRegion = {details.subregion}
      capital = {details.capital}
      domain
      currencies
      languages
      borders
      onBackClick={goBack}
    />

  )

}

export default CountryPage;