import { Flex, Spacer } from "@chakra-ui/react";
import { ColorModeSwitcher } from '../ColorModeSwitcher';


const Header = () => {
  return (
    <>
      <Flex p={4}>
      <h1>Where in the world? </h1>
      <Spacer />
      <ColorModeSwitcher />
      </Flex>
    </>
  )
}

export default Header;
