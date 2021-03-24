import { Select } from "@chakra-ui/react";

const Regions = ({regionValue, handleRegion, bg }) => {
  return (
    <>
      <Select placeholder="Filter by Region" value={regionValue} onChange={handleRegion} bg={bg}>
        <option value="Africa">Africa</option>
        <option value="America">America</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </Select>
    </>
  )
}

export default Regions;