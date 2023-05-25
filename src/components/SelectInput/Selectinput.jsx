import * as React from 'react';
// import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
// import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
// import { red } from '@mui/material/colors';

function MultipleSelectPlaceholder() {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div >
      <FormControl sx={{ m: 0, minWidth: {sm:120 , md: 170,} }} size="small">
        <Select
          sx={{border:1,borderRadius: 0,outline: 0,p:{xs:"2.7px 0px",sm:"6.7px 0px"}}}
          value={age}
          onChange={handleChange}
          displayEmpty
          
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem value=""  >
            <div>Most Popular</div>
          </MenuItem>
          <MenuItem value={20}>Highest Rated</MenuItem>
          <MenuItem value={30}>Newest</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}


export function BasicTextFields() {
  return (
<>
</>
  );
}


export default MultipleSelectPlaceholder