import React from 'react';
import s from './SignUpForm.module.css';
import Container from '@mui/material/Container';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`action-tabpanel-${index}`}
      aria-labelledby={`action-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `action-tab-${index}`,
    'aria-controls': `action-tabpanel-${index}`,
  };
}

function SignUpForm() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);
  const [age, setAge] = React.useState('');

  const handleSelectChange = (event) => {
    setAge(event.target.value);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Container maxWidth="xs" className={s.container}>
      <h1>Register</h1>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        variant="fullWidth"
        aria-label="action tabs example"
      >
        <Tab label="1" {...a11yProps(0)} />
        <Tab label="2" {...a11yProps(1)} />
        <Tab label="3" {...a11yProps(2)} />
      </Tabs>

      <TabPanel value={value} index={0} dir={theme.direction}>
        <div className="step1">
          <h4>Start your free 14 days trial - no cancellation required!</h4>
          <form>
            <input type="text" placeholder="Email" />
            <input type="number" placeholder="Number" />
            <Button className={s.button} variant="contained">Register</Button>
          </form>
        </div>
      </TabPanel>

      <TabPanel value={value} index={1} dir={theme.direction}>
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
                  onChange={handleChange}
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
              onChange={handleChange}
              label="seoFor"
            >
              <MenuItem value={10}>In-house SEO</MenuItem>
              <MenuItem value={20}>Agency</MenuItem>
              <MenuItem value={30}>E-Commerce</MenuItem>
            </Select>
            <Button className={s.button} variant="contained">Register</Button>
          </form>
        </div>
      </TabPanel>

      <TabPanel value={value} index={2} dir={theme.direction}>
        <div className="step3 df">
          <FormGroup>
            <TextField id="standard-basic" label="First Name" variant="standard" />
            <TextField id="standard-basic" label="Last Name" variant="standard" />
            <TextField id="standard-basic" label="Company Name" variant="standard" />
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="I agree to the terms and conditions."
            />
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="I agree to receive information about XOVI and its partners via email."
            />
            <Button className={s.button} variant="contained">Register</Button>
          </FormGroup>
        </div>
      </TabPanel>
    </Container >
  );
};

export default SignUpForm;