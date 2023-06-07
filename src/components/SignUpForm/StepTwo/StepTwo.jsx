import React from 'react';
import s from './StepTwo.module.css';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

const StepTwo = () => {
  const [age, setAge] = React.useState('');

  const handleSelectChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div className="step2">
      <h4>What website would you like to analyze first?</h4>
      <form>
        <input type="text" placeholder="Domain" />
        <div>
          <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="seoFor">I do SEO for</InputLabel>
            <Select
              labelId="seoFor"
              id="seoFor"
              value={age}
              onChange={handleSelectChange}
              label="seoFor"
            >
              <MenuItem value={10}>In-house SEO</MenuItem>
              <MenuItem value={20}>Agency</MenuItem>
              <MenuItem value={30}>E-Commerce</MenuItem>
            </Select>
          </FormControl>
          <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="seoFor">I do SEO for</InputLabel>
            <Select
              labelId="seoFor"
              id="seoFor"
              value='seoFor'
              onChange={handleSelectChange}
              label="seoFor"
            >
              <MenuItem value={10}>In-house SEO</MenuItem>
              <MenuItem value={20}>Agency</MenuItem>
              <MenuItem value={30}>E-Commerce</MenuItem>
            </Select>
          </FormControl>
        </div>
        <Select
          labelId="seoFor"
          id="seoFor"
          value='seoFor'
          onChange={handleSelectChange}
          label="seoFor"
        >
          <MenuItem value={10}>In-house SEO</MenuItem>
          <MenuItem value={20}>Agency</MenuItem>
          <MenuItem value={30}>E-Commerce</MenuItem>
        </Select>
        <Button className={s.button} variant="contained">Register</Button>
      </form>
    </div>
  );
};

export default StepTwo;