import imgHTML from "../public/static/img/stack/html.svg";
import imgCSS from "../public/static/img/stack/css.svg";
import imgJS from "../public/static/img/stack/js.svg";
import imgNode from "../public/static/img/stack/node.svg";
import imgStyled from "../public/static/img/stack/styled.svg";
import imgReact from "../public/static/img/stack/react.svg";
import { SiTypescript } from "react-icons/si";
import {TbBrandPython} from "react-icons/tb"
import {DiDjango} from "react-icons/di"
import {SiPostgresql} from "react-icons/si"

export const stackData = [
  {
    title: "HTML",
    img: imgHTML,
  },
  {
    title: "CSS",
    img: imgCSS,
  },
  {
    title: "JS",
    img: imgJS,
  },
  { title: "TypeScript", img: SiTypescript },
  {
    title: "Styled Components",
    img: imgStyled,
  },
  {
    title: "React",
    img: imgReact,
  },
  {
    title: "Node JS",
    img: imgNode,
  },
  { title: "Python", img: TbBrandPython },
  { title: "Django", img: DiDjango },
  { title: "PostgreSQL", img: SiPostgresql}

];
