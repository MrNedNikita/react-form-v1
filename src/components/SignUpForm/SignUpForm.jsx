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
import styled from '@mui/material/styles/styled';
import { createTheme } from '@mui/material/styles';

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

  const StyledTabs = styled((props) => (
    <Tabs
      {...props}
      TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
    />
  ))({
    display: 'flex',
    alignItems: 'center',
    '& .MuiTabs-flexContainer': {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    '& .MuiTabs-indicator': {
      display: 'none',
    },
  });

  const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
    ({ theme }) => ({
      textTransform: 'none',
      fontWeight: '800',
      fontSize: '12px',
      borderRadius: '50px',
      minWidth: '26px',
      maxWidth: '26px',
      minHeight: '26px',
      maxHeight: '26px',
      padding: '0',
      border: '1px solid #bbb',
      overflow: 'visible',
      '&.line': {
        marginRight: '32px',
      },
      '&.line:after': {
        content: '""',
        position: 'absolute',
        width: '22px',
        height: '1px',
        backgroundColor: '#bbb',
        left: 'calc(100% + 6px)',
      },
      '&.Mui-selected': {
        color: '#fff',
        backgroundColor: 'orange',
        border: 'none',
      },
      '&.Mui-focusVisible': {
        backgroundColor: 'rgba(100, 95, 228, 0.32)',
      },
    }),
  );

  return (
    <Container maxWidth="xs" className={s.container}>
      <h1 className={s.title}>Register</h1>
      <StyledTabs
        value={tabValue}
        onChange={handleTabChange}
        indicatorColor="primary"
        textColor="primary"
        variant="fullWidth"
        aria-label="action tabs example"
      >
        <StyledTab className='line' label="1" {...a11yProps(0)} />
        <StyledTab className='line' label="2" {...a11yProps(1)} />
        <StyledTab label="3" {...a11yProps(2)} />
      </StyledTabs>
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
