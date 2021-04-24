import { useColorMode, Button } from "@chakra-ui/react";

const BorderCountry = ({name , code, handleClick }) => {
  const { colorMode } = useColorMode();
  const bgColor = { light: 'hsl(0, 0%, 100%)', dark: 'hsl(209, 23%, 22%)' };
  return (
    <Button onClick={handleClick} bg={bgColor[colorMode]} m="1" boxShadow='md'> { name } </Button>
  )
}

export default BorderCountry;
