import { Flex, Heading, Spacer, useColorMode } from "@chakra-ui/react";
import { ColorModeSwitcher } from '../ColorModeSwitcher';


const Header = () => {

  const { colorMode } = useColorMode();
  const bgColor = {light: 'hsl(0, 0%, 100%)', dark: 'hsl(209, 23%, 22%)'};

  return (
    <>
      <Flex 
      px={16}
      py={4}
      bg={bgColor[colorMode]}
      boxShadow='md'
      alignItems='baseline'
      >
      <Heading fontSize='lg'>Where in the world? </Heading>
      <Spacer />
      <ColorModeSwitcher />
      </Flex>
    </>
  )
}

export default Header;
