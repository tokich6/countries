// import React from 'react';
import { useState, useEffect } from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  VStack,
  useColorMode,
} from '@chakra-ui/react';
import Header from './components/Header';
import Search from './components/Search';
import Card from './components/Card';
import theme from "./theme";

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(async () => {
    const response = await fetch('https://restcountries.eu/rest/v2/all');
    const data = await response.json();
    return setCountries(data);
  }, []);

  console.log(countries);


  const { colorMode } = useColorMode();
  return (
    <ChakraProvider theme={theme} >
      <Box bg={colorMode === 'dark' ? 'hsl(207, 26%, 17%)' : 'hsl(0, 0%, 98%)'}>
        <Header />
        <Search />
        <VStack spacing={8}>
          {
            countries.map((country, index) => (
              <Card
                key={index}
                flag={country.flag}
                name={country.name}
                population={country.population}
                region={country.region}
                capital={country.capital}
              />
            )
            )}

        </VStack>
      </Box>
    </ChakraProvider>
  );
}

export default App;
