import { useState, useEffect } from 'react';
import { Box, Flex, Spacer, VStack, Input, InputGroup, 
  InputLeftElement, Select, useColorMode} from "@chakra-ui/react";
import { FaSearch } from 'react-icons/fa';


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

  const getCountry = (event) => {
    setCountry(event.target.value);
  }
  console.log(country);

  const getRegion = (event) => setRegion(event.target.value);
  console.log(region);

  
  const { colorMode } = useColorMode();
  return (
    <>
      { isMobile ? (
        <VStack spacing={6}>
          <InputGroup bg={colorMode === 'dark' ? 'hsl(209, 23%, 22%)' : 'hsl(0, 0%, 100%)'} >
            <InputLeftElement
              pointerEvents="none"
              children={<FaSearch color="gray.300" />}
            />
            <Input placeholder=" Search for a country..." variant="outline" onChange={getCountry} value={country} />
          </InputGroup>


          <Select placeholder="Filter by Region" value={region} onChange={getRegion} bg={colorMode === 'dark' ? 'hsl(209, 23%, 22%)' : 'hsl(0, 0%, 100%)'}>
            <option value="Africa">Africa</option>
            <option value="America">America</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
          </Select>
        </VStack>
      )

        : (

          <Flex p={6}>
            <Box w={450}>
              <InputGroup bg={colorMode === 'dark' ? 'hsl(209, 23%, 22%)' : 'hsl(0, 0%, 100%)'}>
                <InputLeftElement
                  pointerEvents="none"
                  children={<FaSearch color="gray.300" />}
                />
                <Input placeholder=" Search for a country..." variant="outline" onChange={getCountry} value={country} />
              </InputGroup>
            </Box>

            <Spacer />
            <Box>
              <Select placeholder="Filter by Region" value={region} onChange={getRegion} bg={colorMode === 'dark' ? 'hsl(209, 23%, 22%)' : 'hsl(0, 0%, 100%)'}>
                <option value="Africa">Africa</option>
                <option value="America">America</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
              </Select>
            </Box>
          </Flex>
        )
      }
    </>
  )
}

export default Search;