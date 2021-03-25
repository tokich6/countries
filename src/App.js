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

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://restcountries.eu/rest/v2/all?fields=flag;name;population;region;capital;nativeName;subRegion;currencies;languages;topLevelDomain;borders');
      const data = await response.json();
      return setCountries(data);
    }
    fetchData();
  }, []);

  console.log(countries);


  function formatNumber(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
  }

  return (
    <ChakraProvider theme={customTheme}>
    <Fonts />
      <Header />
      <Container maxW="container.xl" centerContent >
        <Search  />
        <Wrap spacing="50px" justify="center" mt='5'>
          {
            countries.map((country, index) => (
              <Card
                key={index}
                flag={country.flag}
                name={country.name}
                population={formatNumber(country.population)}
                region={country.region}
                capital={country.capital}
              />
            )
            )}
        </Wrap>
      </Container>
    </ChakraProvider>
  );
}

export default App;
