import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

const work = [
  {
    title: "Picnic Creativa",
    descripton: [
      `Encargado del desarrollo e implementacion de nuevas features tanto en el lado Frontend como en el lado Backend.`,
      `Implementacion y desarrollo de Mails Automatizados`,
      `Administrar y gestionar los servidores de desarrollo.`,
      `Desarrollo de bots automatizado para la trazabilidad de errores y
      getion de los servicios implementados.`,
      `Generar codigo SQL para la gestion e implementacion de nuevas
      features en la Base de Datos.`,
    ],
    position: "Desarrolllador Web",
    start: "ENE 2022",
    end: "JUL 2022",
  },
  {
    title: "Mirum Agency",
    descripton: [
      "Maquetado de Mails",
      "Testeo de Mails",
      "Investigación de servicios para la mejora en el desarrollo de mails",
    ],
    position: "Programador",
    start: "JUL 2022",
    end: "MAR 2023",
  },
];

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ pl: "50px" }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        bgcolor: "transparent",
        display: "flex",
        fontSize: "24px",
        mt: "40px",
      }}
    >
      <Tabs
        orientation='vertical'
        value={value}
        onChange={handleChange}
        aria-label='Vertical tabs example'
        sx={{ borderRight: 1, borderColor: "divider", minWidth: "160px" }}
      >
        {work.map((item, index) => (
          <Tab
            key={item.title}
            label={item.title}
            sx={{ color: "#f3f3f3" }}
            {...a11yProps(index)}
          />
        ))}
      </Tabs>
      {work.map((item, index) => (
        <TabPanel key={item.title} value={value} index={index}>
          <div>
            <h2>{item.title}</h2>
            <h4>
              {item.start} - {item.end}
            </h4>
            <ul>
              {item.descripton.map((task) => (
                <li key={task}>{task}</li>
              ))}
            </ul>
          </div>
        </TabPanel>
      ))}
    </Box>
  );
}
