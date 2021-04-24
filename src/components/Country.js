import { Box, Heading, Stack, Text, Image, useColorMode, Button, SimpleGrid } from "@chakra-ui/react";
import { FaArrowLeft } from 'react-icons/fa';



const Country = ({ flag, name, nativeName, population, region, subRegion, capital, domain, currencies, languages, borders, onBackClick }) => {
  const { colorMode } = useColorMode();
  const bgColor = { light: 'hsl(0, 0%, 100%)', dark: 'hsl(209, 23%, 22%)' };

  return (
    <>
      <Box maxW={['18em', '28em', '58em', '70em']} mx="auto" mt={[6, 8, 10, 12]} p='10'  >
        <Button onClick={onBackClick} bg={bgColor[colorMode]} mb='10' boxShadow='md' leftIcon={<FaArrowLeft />}> Back </Button>

        <SimpleGrid columns={[1, null, 2]} spacing={20}>
          <Image w='100%' h='100%' objectFit='cover' boxShadow='md' src={flag} alt={name} />
          <Box p={5}>
            <Heading mb="4" as="h1" fontSize="lg" fontWeight='bold'> {name} </Heading>
            <SimpleGrid columns={[1, null, 2]} spacing={10} >
              <Stack>
                <Text fontSize="sm"> <Text as='span' fontWeight='semibold'>Native Name: </Text> {nativeName} </Text>
                <Text fontSize="sm"> <Text as='span' fontWeight='semibold'>Population: </Text> {population} </Text>
                <Text fontSize="sm"> <Text as='span' fontWeight='semibold'>Region: </Text> {region} </Text>
                <Text fontSize="sm"> <Text as='span' fontWeight='semibold'>Sub Region: </Text> {subRegion} </Text>
                <Text fontSize="sm"> <Text as='span' fontWeight='semibold'>Capital: </Text> {capital} </Text>
              </Stack>
              <Stack>
                <Text fontSize="sm"> <Text as='span' fontWeight='semibold'>Top Level Domain: </Text> {domain} </Text>
                <Text fontSize="sm"> <Text as='span' fontWeight='semibold'>Currencies: </Text> {currencies} </Text>
                <Text fontSize="sm"> <Text as='span' fontWeight='semibold'>Languages: </Text> {languages} </Text>
              </Stack>
            </SimpleGrid>

            <Text mb="2" mt="6" as="h4" fontSize="md" fontWeight='bold'> Border Countries: {borders} </Text>

          </Box>
        </SimpleGrid>


      </Box>

    </>
  )
}

export default Country;