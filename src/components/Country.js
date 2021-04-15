import { Container, Box, WrapItem, Stack, Text, Image, useColorMode, Button } from "@chakra-ui/react";
import { FaArrowLeft } from 'react-icons/fa';



const Country = ({ flag, name, nativeName, population, region,subRegion, capital, domain, currencies, languages, borders, onBackClick }) => {
  // const { colorMode } = useColorMode();
  // const bgColor = { light: 'hsl(0, 0%, 100%)', dark: 'hsl(209, 23%, 22%)' };

  return (
    <Container>
    <Button onClick={onBackClick}> <FaArrowLeft p='5'/> Back</Button>
    <WrapItem>
        {/* <Box w="250px" boxShadow='md' borderRadius='5px' overflow='hidden' bg={bgColor[colorMode]}> */}
          <Image w='100%' h='150px' objectFit='cover' src={flag} alt={name} />
          <Box p={5}>
            <Stack>
              <Text mb="2" as="h3" fontSize="lg" fontWeight='bold'> {name} </Text>
              <Text fontSize="sm"> <Text as='span' fontWeight='semibold'>Native Name: </Text> {nativeName} </Text>
              <Text fontSize="sm"> <Text as='span' fontWeight='semibold'>Population: </Text> {population} </Text>
              <Text fontSize="sm"> <Text as='span' fontWeight='semibold'>Region: </Text> {region} </Text>
              <Text fontSize="sm"> <Text as='span' fontWeight='semibold'>Sub Region: </Text> {subRegion} </Text>
              <Text fontSize="sm"> <Text as='span' fontWeight='semibold'>Capital: </Text> {capital} </Text>
              <Text fontSize="sm"> <Text as='span' fontWeight='semibold'>Top Level Domain: </Text> {domain} </Text>
              <Text fontSize="sm"> <Text as='span' fontWeight='semibold'>Currencies: </Text> {currencies} </Text>
              <Text fontSize="sm"> <Text as='span' fontWeight='semibold'>Languages: </Text> {languages} </Text>

              <Text mb="2" as="h4" fontSize="md" fontWeight='bold'> Border Countries: {borders} </Text>

            </Stack>
          </Box>
        {/* </Box> */}

      </WrapItem>

    </Container>
     
  )
}

export default Country;