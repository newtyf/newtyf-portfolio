import { Box } from "@mui/material";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
  isMobile?: boolean;
}

export function TabPanel(props: TabPanelProps) {
  const { children, value, index, isMobile } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      className="animate__animated animate__fadeIn animate__slow"
    >
      {value === index && (
        <Box
          sx={{
            pl: `${isMobile ? "10px" : "50px"}`,
            mt: `${isMobile ? "40px" : "0px"}`,
          }}
        >
          {children}
        </Box>
      )}
    </div>
  );
}
