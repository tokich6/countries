import { Flex, Spacer, useColorMode } from "@chakra-ui/react";
import { ColorModeSwitcher } from '../ColorModeSwitcher';


const Header = () => {
  const {colorMode} = useColorMode();
  return (
    <>
      <Flex 
      p={4}
      bg={colorMode === 'dark' ? 'hsl(209, 23%, 22%)' : 'hsl(0, 0%, 100%)'}
      >
      <h1>Where in the world? </h1>
      <Spacer />
      <ColorModeSwitcher />
      </Flex>
    </>
  )
}

export default Header;
