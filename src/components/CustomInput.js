import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { FaSearch } from 'react-icons/fa';

const CustomInput = ({ value, handleChange, bg}) => {

  return (
    <>
      <InputGroup bg={bg}>
        <InputLeftElement
          pointerEvents="none"
          children={<FaSearch color="gray.300" />}
        />
        <Input placeholder=" Search for a country..." variant="outline" value={value} onChange={handleChange}  />
      </InputGroup>
    </>
  )
}

export default CustomInput;