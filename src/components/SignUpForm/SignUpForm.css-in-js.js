import Tab from "@mui/material/Tab";
import styled from "@mui/material/styles/styled";
import Tabs from "@mui/material/Tabs";

export const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    textTransform: "none",
    fontWeight: "800",
    fontSize: "12px",
    borderRadius: "50px",
    minWidth: "26px",
    maxWidth: "26px",
    minHeight: "26px",
    maxHeight: "26px",
    padding: "0",
    border: "1px solid #bbb",
    overflow: "visible",
    "&.line": {
      marginRight: "32px",
    },
    "&.line:after": {
      content: '""',
      position: "absolute",
      width: "22px",
      height: "1px",
      backgroundColor: "#bbb",
      left: "calc(100% + 6px)",
    },
    "&.Mui-selected": {
      color: "#fff",
      backgroundColor: "orange",
      border: "none",
    },
    "&.Mui-focusVisible": {
      backgroundColor: "rgba(100, 95, 228, 0.32)",
    },
  })
);

export const StyledTabs = styled((props) => (
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
