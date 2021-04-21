import { useState, useEffect } from 'react';
import {
  ChakraProvider,
  Wrap,
  Container,
  Spinner,
} from '@chakra-ui/react';
import { Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Search from './components/Search';
import Card from './components/Card';
import CountryPage from './components/CountryPage';
import Fonts from "./styles/Fonts";
import { customTheme } from "./styles/theme";
import history from './history';
import { formatNumber } from './helpers';

function App() {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [isFiltered, setIsFiltered] = useState(false);
  const [country, setCountry] = useState("");
  const [region, setRegion] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const response = await fetch('https://restcountries.eu/rest/v2/all?fields=flag;name;population;region;capital;nativeName;subRegion;currencies;languages;topLevelDomain;borders;alpha2Code');
        const data = await response.json();
        setLoading(false);
        return setCountries(data);
      } catch (err) {
        setLoading(false);
        console.log(err);
      }
    }
    fetchData();
  }, []);
  /* eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
    const filteredByRegion = countries.filter(el => {
      return region !== '' && el.region === region;
    })
    if (filteredByRegion.length > 0) {
      setFilteredCountries(filteredByRegion);
    } else {
      setIsFiltered(false);
    }
  }, [region])

  useEffect(() => {
    const filteredByCountry = countries.filter(el => {
      if (region !== '') {
        return el.name.toLowerCase().indexOf(country.toLowerCase()) !== -1 && el.region === region;
      } else {
        return el.name.toLowerCase().indexOf(country.toLowerCase()) !== -1;
      }
    })
    if (filteredByCountry.length >= 0) {
      setFilteredCountries(filteredByCountry);
    } else {
      setIsFiltered(false);
    }
  }, [country])


  const getCountry = event => {
    setCountry(event.target.value);
    setIsFiltered(true);
  };

  const getRegion = (event) => {
    setRegion(event.target.value);
    setIsFiltered(true);
  }

   function goToCountryRoute(countryCode) {
    history.push({
      pathname: `/country/${countryCode}`
    });
   } 


  const generateCards = (arr) => {
    return arr.map((el, index) => {
      return (
        <Card
          key={index}
          flag={el.flag}
          name={el.name}
          population={formatNumber(el.population)}
          region={el.region}
          capital={el.capital}
          onClick={() => {
            goToCountryRoute(el.alpha2Code)
          }}
        />
      )
    })
  }

  return (
    <Router history={history}>
      <ChakraProvider theme={customTheme}>
        <Fonts />
        <Header />
        <Switch>
          <Route exact path='/'>
            <Container maxW="container.xl" centerContent>
              <Search country={country} region={region} handleCountry={getCountry} handleRegion={getRegion} />
              <Wrap spacing="50px" justify="center" mt='5'>
                {
                  loading ? <Spinner size="xl" /> :
                    (
                      !isFiltered ? generateCards(countries) : generateCards(filteredCountries)
                    )
                }

              </Wrap>
            </Container>
          </Route>
          <Route path='/country/:code'>
            <CountryPage />
          </Route>

        </Switch>

      </ChakraProvider>
    </Router>
  );
}

export default App;
