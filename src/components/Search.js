import { useState, useEffect } from 'react';
import { Box, HStack, Spacer, VStack, useColorMode } from "@chakra-ui/react";
import CustomInput from './CustomInput';
import Regions from '../components/Regions';


const Search = ({country, region, handleCountry, handleRegion }) => {

  const [isMobile, setMobile] = useState(window.innerWidth < 670);
  
  const updateMedia = () => {
    setMobile(window.innerWidth < 670);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  const { colorMode } = useColorMode();
  const bgColor = {light: 'hsl(0, 0%, 100%)', dark: 'hsl(209, 23%, 22%)'};


  return (
    <>
      { isMobile ? (
        <VStack spacing={8}>
          <CustomInput value={country} handleChange={handleCountry} bg={bgColor[colorMode]} />
          <Regions regionValue={region} handleRegion={handleRegion} bg={bgColor[colorMode]} />
        </VStack>
      )
        :
        (
          <HStack p={6} w='100%'>
            <Box w={450}>
              <CustomInput value={country} handleChange={handleCountry} bg={bgColor[colorMode]} />
            </Box>

            <Spacer />
            <Box>
              <Regions regionValue={region} handleRegion={handleRegion} bg={bgColor[colorMode]} />
            </Box>
          </HStack>
        )
      }
    </>
  )
}

export default Search;