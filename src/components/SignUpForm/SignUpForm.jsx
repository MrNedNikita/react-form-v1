import React, { useEffect, useState } from "react";
import s from "./SignUpForm.module.css";
import Container from "@mui/material/Container";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";
import Tabs from "@mui/material/Tabs";
// import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import StepOne from "./StepOne/StepOne";
import StepTwo from "./StepTwo/StepTwo";
import StepThree from "./StepThree/StepThree";
import styled from "@mui/material/styles/styled";
import axios from "axios";
import { StyledTab } from "./SignUpForm.css-in-js";

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
    "aria-controls": `action-tabpanel-${index}`,
  };
}

function SignUpForm() {
  const theme = useTheme();
  const [tabValue, setTabValue] = useState(0);
  const [formData, setFormData] = useState({
    // email: "",
    phoneNumber: "",
    domain: "",
    seoFor: "",
    seoLevel: "",
    seoTools: "",
    firstName: "",
    lastName: "",
    companyName: "",
  });

  useEffect(() => {
    console.log("formData::", formData);
  }, [formData]);

  const addData = (data) => {
    setFormData((prevFormData) => ({ ...prevFormData, ...data }));
  };

  const sendFormData = () => {
    console.log("sendFormData::", formData);
    axios
      .post("https://suite.xovi.net/spa/user/register", formData)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error.data);
      });
  };
  // const handleInputChange = (event) => {
  //   setFormData({ ...formData, [event.target.name]: event.target.value });
  // };

  const handleTabChange = (event, newValue) => {
    console.log(newValue);
    setTabValue(newValue);
  };

  const StyledTabs = styled((props) => (
    <Tabs
      {...props}
      TabIndicatorProps={{
        children: <span className="MuiTabs-indicatorSpan" />,
      }}
    />
  ))({
    display: "flex",
    alignItems: "center",
    "& .MuiTabs-flexContainer": {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    "& .MuiTabs-indicator": {
      display: "none",
    },
  });



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
        <StyledTab className="line" label="1" {...a11yProps(0)} />
        <StyledTab className="line" label="2" {...a11yProps(1)} />
        <StyledTab label="3" {...a11yProps(2)} />
      </StyledTabs>
      <TabPanel value={tabValue} index={0} dir={theme.direction}>
        <StepOne
          addData={addData}
          formData={formData}
          handleTabChange={handleTabChange}
        />
      </TabPanel>
      <TabPanel value={tabValue} index={1} dir={theme.direction}>
        <StepTwo
          addData={addData}
          formData={formData}
          handleTabChange={handleTabChange}
        />
      </TabPanel>
      <TabPanel value={tabValue} index={2} dir={theme.direction}>
        <StepThree
          addData={addData}
          formData={formData}
          handleTabChange={handleTabChange}
          sendFormData={sendFormData}
        />
      </TabPanel>
    </Container>
  );
}

export default SignUpForm;
