import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import { TabPanel } from "./TabPanel";
import { job } from "@/types";

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs({ works }: { works: job[] }) {
  const [value, setValue] = React.useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        bgcolor: "transparent",
        fontSize: "24px",
        display: `${isMobile ? "" : "flex"}`,
        mt: `${isMobile ? "" : "40px"}`,
      }}
    >
      <Tabs
        orientation={isMobile ? "horizontal" : "vertical"}
        value={value}
        onChange={handleChange}
        variant={isMobile ? "fullWidth" : "standard"}
        aria-label='Vertical tabs example'
        sx={{ borderRight: 1, borderColor: "divider", minWidth: "160px" }}
      >
        {works.map((item, index) => (
          <Tab
            key={item.title}
            label={item.title}
            sx={{ color: "#f3f3f3" }}
            {...a11yProps(index)}
          />
        ))}
      </Tabs>
      {works.map((item, index) => (
        <TabPanel
          key={item.title}
          value={value}
          index={index}
          isMobile={isMobile}
        >
          <div>
            <h2>{item.role}</h2>
            <h4>
              {item.start} - {item.end}
            </h4>
            <ul>
              {item.description.map((task) => (
                <li key={task}>{task}</li>
              ))}
            </ul>
          </div>
        </TabPanel>
      ))}
    </Box>
  );
}
