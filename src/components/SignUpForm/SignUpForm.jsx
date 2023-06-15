import React, { useState, useRef } from "react";
import s from "./SignUpForm.module.css";
import Container from "@mui/material/Container";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import StepOne from "./StepOne/StepOne";
import StepTwo from "./StepTwo/StepTwo";
import StepThree from "./StepThree/StepThree";
import axios from "axios";
import { StyledTab } from "./SignUpForm.css-in-js";
import { StyledTabs } from "./SignUpForm.css-in-js";
import toast, { Toaster } from "react-hot-toast";



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

// function a11yProps(index) {
//   return {
//     id: `action-tab-${index}`,
//     "aria-controls": `action-tabpanel-${index}`,
//   };
// }

function SignUpForm() {
  const [tabValue, setTabValue] = useState(0);
  const [formData, setFormData] = useState({
    email: "",
    phoneNumber: "",
    domain: "",
    seoFor: "",
    seoLevel: "",
    seoTools: "",
    firstName: "",
    lastName: "",
    companyName: "",
  });

  const theme = useTheme();

  const addData = (data) => {
    setFormData((prevFormData) => ({ ...prevFormData, ...data }));
  };

  const sendFormData = () => {
    console.log("sendFormData::", formData);
    axios
      .post("https://suite.xovi.net/spa/user/register", formData)
      .then((response) => {
        console.log('resp:::', response.data);
      })
      .catch((error) => {
        console.log('err::', error.message);
        toast.error(error.message);
      });
  };

  const submitRef = useRef();

  const handleTabChange = (event, newValue) => {
    console.log(newValue);
    setTabValue(newValue);
  };

  const handleClickOnSecondTab = () => {
    (tabValue === 1 || tabValue === 2) ? setTabValue(1) : submitRef.current.click();
  };

  const handleClickOnThirdTab = () => {
    tabValue === 0 ? setTabValue(0) : (tabValue === 1) ? submitRef.current.click() : setTabValue(2);
  };

  return (
    <Container maxWidth="xs" className={s.container}>
      <h1 className={s.title}>Register</h1>
      <StyledTabs
        value={tabValue}
        indicatorColor="primary"
        textColor="primary"
        variant="fullWidth"
        aria-label="action tabs example"
      >
        <StyledTab
          onClick={() => handleTabChange('', 0)}
          className="line"
          label="1"
        />
        <StyledTab
          onClick={handleClickOnSecondTab}
          className="line"
          label="2"
        />
        <StyledTab
          onClick={handleClickOnThirdTab}
          label="3"
        />
      </StyledTabs>
      <TabPanel value={tabValue} index={0} dir={theme.direction}>
        <StepOne
          addData={addData}
          formData={formData}
          handleTabChange={handleTabChange}
          submitRef={submitRef}
        />
      </TabPanel>
      <TabPanel value={tabValue} index={1} dir={theme.direction}>
        <StepTwo
          addData={addData}
          formData={formData}
          handleTabChange={handleTabChange}
          submitRef={submitRef}
        />
      </TabPanel>
      <TabPanel value={tabValue} index={2} dir={theme.direction}>
        <StepThree
          addData={addData}
          formData={formData}
          handleTabChange={handleTabChange}
          sendFormData={sendFormData}
          submitRef={submitRef}
        />
      </TabPanel>
      <Toaster position="top-right" reverseOrder={false} />
    </Container>
  );
}

export default SignUpForm;
