import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  // theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import Header from './components/Header';
import Search from './components/Search';
import theme from "./theme";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box fontSize="xl">
        <Header />
        <Search />
          <VStack spacing={8}>
          
            <Text>
              Countries API
            </Text>
          </VStack>
      </Box>
    </ChakraProvider>
  );
}

export default App;
