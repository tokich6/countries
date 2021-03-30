import { useState, useEffect } from 'react';
import {
  ChakraProvider,
  Wrap,
  Container,
} from '@chakra-ui/react';
import Header from './components/Header';
import Search from './components/Search';
import Card from './components/Card';
import Fonts from "./styles/Fonts";
import { customTheme } from "./styles/theme";

function App() {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [isFiltered, setIsFiltered] = useState(false);
  const [country, setCountry] = useState("");
  const [region, setRegion] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('https://restcountries.eu/rest/v2/all?fields=flag;name;population;region;capital;nativeName;subRegion;currencies;languages;topLevelDomain;borders');
        const data = await response.json();
        return setCountries(data);
      } catch (err){
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
    if (filteredByCountry.length > 0) {
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


  function formatNumber(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
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
        />
      )
    })
  }
  
  return (
    <ChakraProvider theme={customTheme}>
      <Fonts />
      <Header />
      <Container maxW="container.xl" centerContent >
        <Search country={country} region={region} handleCountry={getCountry} handleRegion={getRegion} />
        <Wrap spacing="50px" justify="center" mt='5'>
          {
            !isFiltered ? generateCards(countries) : generateCards(filteredCountries)
          }
        </Wrap>
      </Container>
    </ChakraProvider>
  );
}

export default App;
