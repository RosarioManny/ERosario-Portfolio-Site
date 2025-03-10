const figma_logo = "public/assets/Logos/icons8-figma-96.png"
const react_logo = "public/assets/Logos/icons8-react-native-96.png"
const javascript_logo = "public/assets/Logos/js.png"
const python_logo = "public/assets/Logos/icons8-python-96.png"
const html_logo = "public/assets/Logos/icons8-html-logo-96.png"
const css_logo = "public/assets/Logos/icons8-css-logo-96.png"
const django_logo = "public/assets/Logos/icons8-django-100.png"
const ejs_logo = "public/assets/Logos/icons8-ejs-96.png"
const tailwind_logo = "public/assets/Logos/icons8-tailwind-css-96.png"
const vite_logo = "public/vite.svg"

export const projects = [
  {
    id: 1,
    title: "TalkThrough.It",
    tech_stack: [react_logo, javascript_logo, tailwind_logo, vite_logo],
    card1: {
      header: "Landing Page",
      desc: "An app made to help therapist and clients keep track of connect and get better mental health. Therapist and clients have their own portals. Therapist portal allows them to create dynamic schedules, accept bookings and list their services. Clients can browse therapist, favorites ones they like, book appointments and view upcoming ones.",
      image: "/assets/Talkthroughit/talkthroughit.png",
      alt: "Talk Through it - Landing Page",
    },
    github: "https://github.com/RosarioManny/TalkThrough.it-Front-End",
    card2: {
      header: "Client Dashboard",
      desc: "Where Clients can see their upcoming appointments, favorited therapist and total appointments.",
      image: "/assets/Talkthroughit/BrowseTherapist_Talkthroughit.png",
      alt: "Talk Through it - Client Dashboard"
    },
    card3: {
      header: "Browse Page",
      desc: "The page where clients and Therapist can view. You can book appointments and favorite on this page.",
      image: "/assets/Talkthroughit/BrowseTherapist_Talkthroughit.png",
      alt: "Talk Through it - Browse Page"
    }, 
    link: "/projects/talkthroughit",
  },
  {
    id: 2,
    title: "Artfolio",
    header_desc: "A place for artists to share their portfolio and artwork. Create an account, upload your photos and manage your profile!",
    link: "/projects/artfolio",
    image: "/assets/Artfolio/artfolio.png",
    alt: "Artfolio - Art portfolio website"
  },
  {
    id: 3,
    title: "Whataduudle",
    header_desc: "Have fun and play with AI! A drawing game where AI guesses what you've drawn. If it guesses your drawing, YOU WIN!",
    link: "/projects/whataduudle",
    image: "/assets/Whataduudle/whataduudle.png",
    alt: "What a doodle - AI drawing game website"
  },
  {
    id: 4,
    title: "Personal Website!",
    header_desc: "My personal website that showcases how my software engineer development. Click this card or the Github link in the footer to learn how I made this website!",
    link: "https://github.com/RosarioManny/My-Website.git",
    image: "/assets/MoretoCome.png",
    alt: "More to Come - Placeholder"
  },
];
