import { FiGrid } from "react-icons/fi";


import CSSImage from "../assets/images/css.jpg";
import CSSFile from "../files/JavaFX Script - Dynamic Java Scripting for Rich Internet-Client-Side Applications Oct 2007.pdf";

import BEGINImage from "../assets/images/highpermance.jpg";

import CSS1 from "../assets/images/javacriptx.jpg";
import CSS2 from "../assets/images/javascriptandcss.jpg";
import CSS3 from "../assets/images/node.jpg";
import CSS4 from "../assets/images/practical.jpg";
import CSS5 from "../assets/images/reactiveprograming.jpg";

import CSS6 from "../assets/images/javacriptD.jpg";



export const UUID = () => {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let characterLength = characters.length;

  let uuid = "";

  for (let i = 0; i < 12; i++) {
    uuid += characters.charAt(Math.floor(Math.random() * characterLength));
  }

  return uuid;
};

export const dashNavLInks = [
  {
    name: "Books Category",
    path: "categories",

    icon: FiGrid,
  },
];

export const allresources = [
  {
    id: UUID(),
    resource: "doc",
    description: "High performance javascript ",
    author: "Janet Blay",
    date: "03/1990",
    type: "docs",
    url: CSSFile,
    image: CSS2,
  },
  {
    id: UUID(),
    resource: "doc",
    description: "Reactive Programing with React ",
    author: "Janet Blay",
    date: "03/1990",
    type: "docs",
    url: CSSFile,
    image: CSS5,
  },
  {
    id: UUID(),
    resource: "doc",
    description: "High performance javascript ",
    author: "Janet Blay",
    date: "03/1990",
    type: "docs",
    url: CSSFile,
    image: CSS1,
  },
  {
    id: UUID(),
    resource: "doc",
    description: "High performance javascript ",
    author: "Janet Blay",
    date: "03/1990",
    type: "docs",
    url: CSSFile,
    image: BEGINImage,
  },
  {
    id: UUID(),
    resource: "doc",
    description: "Pro CSS3 Animation",
    author: "Micheal Brown",
    type: "docs",
    date: "07/2020",
    url: CSSFile,
    image: CSSImage,
  },
  {
    id: UUID(),
    resource: "doc",
    description: "HTML AND CSS ",
    author: "Janet Blay",
    date: "03/1990",
    type: "docs",
    url: CSSFile,
    image: CSS6,
  },
  {
    id: UUID(),
    resource: "doc",
    description: "High performance javascript ",
    author: "jay",
    date: "03/1990",
    type: "docs",
    url: CSSFile,
    image: CSS4,
  },
  {
    id: UUID(),
    resource: "doc",
    description: "High performance javascript ",
    author: "Janet Blay",
    date: "03/1990",
    type: "docs",
    url: CSSFile,
    image: CSS3,
  },
  {
    id: UUID(),
    resource: "doc",
    description: "High performance javascript ",
    author: "Janet Blay",
    date: "03/1990",
    type: "docs",
    url: CSSFile,
    image: CSS6,
  },
];
