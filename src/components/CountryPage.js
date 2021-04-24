import { useState, useEffect } from "react";
import { useParams, useLocation } from 'react-router-dom';
import { Spinner, Text, Tab } from "@chakra-ui/react";
import history from '../history';
import Country from './Country';
import BorderCountry from './BorderCountry';
import { formatNumber, showElements } from '../helpers';

const CountryPage = () => {
  const goBack = () => history.push('/');
  const { code } = useParams();
  // const path = useLocation();

  const [detail, setDetail] = useState({});
  // const [loading, setLoading] = useState(false);
  console.log(code)

  useEffect(() => {
    async function fetchCountry(countryCode) {
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
    fetchCountry(code);
  }, [code])

  const showBorders = (arr) => {
    if (arr !== undefined) {
      return arr.map((country, index) => {
        return (
          <BorderCountry
            key={index}
            name={country}
            handleClick={() => {
              history.push({
                pathname: `/country/${country}`
              });
            }}
          />
        )
      })
    } else {
      return <Text> N/A </Text>
    }
  }

  return (
    // {
    // loading ? <Spinner size='xl' /> :
    <Country
      flag={detail.flag}
      name={detail.name}
      nativeName={detail.nativeName}
      population={detail.population}
      region={detail.region}
      subRegion={detail.subregion}
      capital={detail.capital}
      domain={detail.topLevelDomain}
      currencies={showElements(detail.currencies)}
      languages={showElements(detail.languages)}
      borders={showBorders(detail.borders)}
      onBackClick={goBack}
    />
    // }
  )
}
export default CountryPage;