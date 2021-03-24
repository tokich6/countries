import { useState, useEffect } from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  VStack,
  Wrap,
  WrapItem,
  useColorMode,
} from '@chakra-ui/react';
import Header from './components/Header';
import Search from './components/Search';
import Card from './components/Card';
import theme from "./theme";

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

  const { colorMode } = useColorMode();
  const bgColor = {light: 'hsl(0, 0%, 98%)', dark: 'hsl(207, 26%, 17%)'};
  const textColor = {light: 'hsl(200, 15%, 8%)', dark: 'hsl(0, 0%, 100%)'}; 

  function formatNumber(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
  }

  return (
    <ChakraProvider theme={theme}>
      <Box>
        <Header />
        <Search />
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
      </Box>
    </ChakraProvider>
  );
}

export default App;
