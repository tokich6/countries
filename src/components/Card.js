import { Box, Flex, Spacer, VStack, Stack, Heading, Text, Image } from "@chakra-ui/react";

const Card = ({ flag, name, population, region, capital }) => {
  return (
    <>
      <Box>
        <Stack>
          <Image boxSize="200px" src={flag} alt={name} />
          <Heading m="5" mb="0" as="h2" size="md"> {name} </Heading>
          <Text m="5" mb="0" as="h4" size="md"> Population: {population} </Text>
          <Text m="5" mb="0" as="h4" size="md"> Region: {region} </Text>
          <Text m="5" mb="0" as="h4" size="md"> Capital: {capital} </Text>
        </Stack>
      </Box>
    </>
  )
}

export default Card;
