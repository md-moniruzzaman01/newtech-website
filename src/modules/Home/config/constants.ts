import { icons } from '@libs/Icons';
import choose_img from '../../../images/choose.jpg';

import slider1 from '../../../images/latest blog/image1.jpg';
import slider2 from '../../../images/latest blog/image2.jpg';
import slider3 from '../../../images/latest blog/Image3.jpg';

export const home_data = {
  //
  hero: {
    title: 'The Best Choice for Laptop, Desktop PC & Apple Repair Services',
    description:
      'We are the exclusive repair center in Bangladesh with a state of the art lab fully equipped to carry out repairs of any kind of IT products.',

    button: {
      text: 'Book a Service',
      link: '/repair-services',
    },
  },

  //
  welcome: {
    title: 'Welcome to Newtech',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    button: {
      text: 'CONTACT US',
      link: '/contact',
    },

    cards: [
      {
        icon: icons.comoputerRepair,
        title: 'Free Diagnostic',
        description: "Lorem Ipsum has been the industry's standard dummy text",
      },
      {
        icon: icons.shieldSearch,
        title: 'The best in quality',
        description:
          "Lorem Ipsum has been the industry's standard dummy text ever since  the 1500s",
      },
      {
        icon: icons.userRepair,
        title: 'tested experience',
        description:
          "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      },
    ],
  },

  //////////////////////////////////////////////////Choose US //////////////////////////////////////
  choose_data: {
    image: choose_img,
    title: 'WHY CHOOSE US',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    list: [
      {
        icon: icons.coin,
        title: 'Save Money',
      },
      {
        icon: icons.watch,
        title: 'Save Time',
      },
      {
        icon: icons.like,
        title: 'Make a Difference',
      },
      {
        icon: icons.computer,
        title: 'Get Back to the Work',
      },
      {
        icon: icons.peace,
        title: 'Regain your Peace',
      },
    ],
    button: {
      text: 'Learn More',
      link: '#',
    },
  },

  ////////////////////////////////////////////////OUR SERVICE ////////////////////////////
  our_service: {
    title: 'Our Service',
    description: 'WE DO A LOT MORE THAN FIX COMPUTERS!',
    button: {
      text: 'Learn More',
      link: '#',
    },
  },

  //////////////////////////////////////////////////////////////// lATEST BLOG ///////////////////////////////////////////////////
  latest_blog: {
    title: 'Our Latest Blog',
    card_list: [
      {
        caption: 'How To Fix My PC That Won’t Turn On?',
        description:
          "Everybody wants a computer that 'just works' without hassle, but speed and performance can only be ensured by regular computer ...",
        image: slider1,
        tags: ['Computer', 'Repair'],
      },
      {
        caption: 'Top 10 Essential Computer Maintenance Tips',
        description:
          'Does your Gaming PC turn on, but there’s no display? Or perhaps your PC doesn’t turn on at all? When a computer doesn’t turn on, we...',
        image: slider2,
        tags: ['Computer', 'Maintenance', 'Tips'],
      },
      {
        caption: '10 Computer Repair Tips to Speed up Your Slow PC',
        description:
          'No matter how expensive and sophisticated your computer is, it can slow down over time. That’s because all machines need regular repair and ...',
        image: slider3,
        tags: ['Computer', 'Repair'],
      },
    ],
  },
};
