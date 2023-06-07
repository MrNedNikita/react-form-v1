import React from 'react';
import s from './SignUpForm.module.css';
import Container from '@mui/material/Container';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import StepOne from './StepOne/StepOne';
import StepTwo from './StepTwo/StepTwo';
import StepThree from './StepThree/StepThree';

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
  const [tabValue, setTabValue] = React.useState(0);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <Container maxWidth="xs" className={s.container}>
      <h1>Register</h1>
      <Tabs
        value={tabValue}
        onChange={handleTabChange}
        indicatorColor="primary"
        textColor="primary"
        variant="fullWidth"
        aria-label="action tabs example"
      >
        <Tab label="1" {...a11yProps(0)} />
        <Tab label="2" {...a11yProps(1)} />
        <Tab label="3" {...a11yProps(2)} />
      </Tabs>
      <TabPanel value={tabValue} index={0} dir={theme.direction}>
        <StepOne />
      </TabPanel>
      <TabPanel value={tabValue} index={1} dir={theme.direction}>
        <StepTwo />
      </TabPanel>
      <TabPanel value={tabValue} index={2} dir={theme.direction}>
        <StepThree />
      </TabPanel>
    </Container>
  );
}

export default SignUpForm;
