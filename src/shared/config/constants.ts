import classNames from "classnames";
import { navDataTypes } from "./types";

// whenever wee need to change default className value we will use this
export const cx = classNames;

// brand image
export const logo = "/NT-LOGO.png";

// menu items
export const menuData: Array<navDataTypes> = [
  {
    to: "/",
    label: "Home",
    subItems: [],
  },
  {
    to: "/repair-services",
    label: "Repair Services",
    subItems: [
      { to: "/mobile", label: "Mobile service" },
      { to: "/desktop", label: "Desktop service" },
      { to: "/server", label: "Server service" },
    ],
  },
  {
    to: "/about ",
    label: "About ",
    subItems: [],
  },
  {
    to: "/blog ",
    label: "Blog ",
    subItems: [],
  },
  {
    to: "/contact",
    label: "Contact",
    subItems: [],
  },
];
