import { job, option } from "@/types";

export const menu: option[] = [
  {
    title: "About",
    link: "#about",
  },
  {
    title: "Work",
    link: "#work",
  },
  { title: "Projects", link: "#projects" },
  { title: "Contact", link: "#contact" },
  { title: "Resume", link: "/cv.pdf", styleCustom: true },
];

export const social: option[] = [
  { title: "github", link: "https://github.com/newtyf" },
  { title: "linkedin", link: "https://www.linkedin.com/in/axel-mu%C3%B1oz/" },
  { title: "instagram", link: "https://www.instagram.com/newt_yf/" },
];

export const mail = "axelskam.123@outlook.es";

export const worksSpa: job[] = [
  {
    title: "Picnic Creativa",
    description: [
      `Encargado del desarrollo e implementacion de nuevas features tanto en el lado Frontend como en el lado Backend.`,
      `Implementacion y desarrollo de Mails Automatizados`,
      `Administrar y gestionar los servidores de desarrollo.`,
      `Desarrollo de bots automatizado para la trazabilidad de errores y
      getion de los servicios implementados.`,
      `Generar codigo SQL para la gestion e implementacion de nuevas
      features en la Base de Datos.`,
    ],
    role: "Desarrolllador Web",
    start: "ENE 2022",
    end: "JUL 2022",
  },
  {
    title: "Mirum Agency",
    description: [
      "Maquetado de Mails",
      "Testeo de Mails",
      "Investigación de servicios para la mejora en el desarrollo de mails",
    ],
    role: "Programador",
    start: "JUL 2022",
    end: "MAR 2023",
  },
];

export const works: job[] = [
  {
    title: "Mirum Agency",
    description: [
      "Layout and development of emails",
      "Email testing",
      "Investigation of services to improve the development of emails",
    ],
    role: "Programer",
    start: "JUL 2022",
    end: "MAR 2023",
  },
    {
    title: "Picnic Creativa",
    description: [
      `In charge of the development and implementation of new features both on the Frontend side and on the Backend side.`,
      `Implementation and development of Automated Mails`,
      `Administer and manage development servers.`,
      `Automated bot development for bug traceability and
      Management of the implemented services.`,
      `Generate SQL code for the management and implementation of new
      features in the Database.`,
    ],
    role: "Web Developer",
    start: "ENE 2022",
    end: "JUL 2022",
  },
];
