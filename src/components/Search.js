import { useState, useEffect } from 'react';
import { Box, Flex, HStack, Spacer, VStack, useColorMode } from "@chakra-ui/react";
import CustomInput from './CustomInput';
import Regions from '../components/Regions';


const Search = () => {

  const [isMobile, setMobile] = useState(window.innerWidth < 670);
  const [country, setCountry] = useState("");
  const [region, setRegion] = useState("");

  const updateMedia = () => {
    setMobile(window.innerWidth < 670);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  const getCountry = event => setCountry(event.target.value);
  console.log(country);

  const getRegion = (event) => setRegion(event.target.value);
  console.log(region);

  const { colorMode } = useColorMode();
  const bgColor = {light: 'hsl(0, 0%, 100%)', dark: 'hsl(209, 23%, 22%)'};


  return (
    <>
      { isMobile ? (
        <VStack spacing={8}>
          <CustomInput value={country} handleChange={getCountry} bg={bgColor[colorMode]} />
          <Regions regionValue={region} handleRegion={getRegion} bg={bgColor[colorMode]} />
        </VStack>
      )
        :
        (
          <HStack p={6} w='100%'>
            <Box w={450}>
              <CustomInput value={country} handleChange={getCountry} bg={bgColor[colorMode]} />
            </Box>

            <Spacer />
            <Box>
              <Regions regionValue={region} handleRegion={getRegion} bg={bgColor[colorMode]} />
            </Box>
          </HStack>
        )
      }
    </>
  )
}

export default Search;