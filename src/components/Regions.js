import { Select } from "@chakra-ui/react";

const Regions = ({regionValue, handleRegion, bg }) => {
  return (
    <>
      <Select placeholder="All" value={regionValue} onChange={handleRegion} bg={bg} boxShadow='sm'>
        <option value="Africa">Africa</option>
        <option value="Americas">Americas</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </Select>
    </>
  )
}

export default Regions;