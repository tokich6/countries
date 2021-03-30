import { Flex, Heading, Spacer, useColorModeValue } from "@chakra-ui/react";
import { ColorModeSwitcher} from '../styles/ColorModeSwitcher'


const Header = () => {

  const bg = useColorModeValue("hsl(0, 0%, 100%)", "hsl(209, 23%, 22%)");

  return (
    <>
      <Flex 
      px={10}
      py={4}
      bg={bg}
      boxShadow='md'
      alignItems='baseline'
      >
      <Heading fontSize='lg'>Where in the world? </Heading>
      <Spacer />
      <ColorModeSwitcher bg={bg} />
      </Flex>
    </>
  )
}

export default Header;
