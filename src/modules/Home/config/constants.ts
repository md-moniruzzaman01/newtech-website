import { icons } from "@libs/Icons";

export const home_data = {
  //
  hero: {
    title: "The Best Choice for Laptop, Desktop PC & Apple Repair Services",
    description:
      "We are the exclusive repair center in Bangladesh with a state of the art lab fully equipped to carry out repairs of any kind of IT products.",

    button: {
      text: "Book a Service",
      link: "/repair-services",
    },
  },

  //
  welcome: {
    title: "Welcome to Newtech",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    button: {
      text: "CONTACT US",
      link: "/contact",
    },

    cards: [
      {
        icon: icons.comoputerRepair,
        title: "Free Diagnostic",
        description: "Lorem Ipsum has been the industry's standard dummy text",
      },
      {
        icon: icons.shieldSearch,
        title: "The best in quality",
        description:
          "Lorem Ipsum has been the industry's standard dummy text ever since  the 1500s",
      },
      {
        icon: icons.userRepair,
        title: "tested experience",
        description:
          "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      },
    ],
  },
};
