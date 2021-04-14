import { Box, WrapItem, Stack, Text, Image, useColorMode } from "@chakra-ui/react";

const Card = ({ flag, name, population, region, capital, onClick }) => {
  const { colorMode } = useColorMode();
  const bgColor = { light: 'hsl(0, 0%, 100%)', dark: 'hsl(209, 23%, 22%)' };

  return (
    <>
      <WrapItem>

        <Box w="250px" boxShadow='md' borderRadius='5px' overflow='hidden' bg={bgColor[colorMode]}
          _hover={{ transform: 'scale(1.1)', transition: '0.4s', cursor:'pointer' }}
          onClick={onClick}>
          <Image w='100%' h='150px' objectFit='cover' src={flag} alt={name} />
          <Box p={5}>
            <Stack>
              <Text mb="2" as="h3" fontSize="lg" fontWeight='bold'> {name} </Text>
              <Text fontSize="sm"> <Text as='span' fontWeight='semibold'>Population: </Text> {population} </Text>
              <Text fontSize="sm"> <Text as='span' fontWeight='semibold'>Region: </Text> {region} </Text>
              <Text fontSize="sm"> <Text as='span' fontWeight='semibold'>Capital: </Text> {capital} </Text>
            </Stack>
          </Box>

        </Box>

      </WrapItem>
    </>
  )
}

export default Card;
