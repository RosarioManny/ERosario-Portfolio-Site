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
  // TalkThroughit
  {
    id: 1,
    title: "TalkThrough.It",
    tech_stack: [react_logo, javascript_logo, tailwind_logo, vite_logo],
    github: "https://github.com/RosarioManny/TalkThrough.it-Front-End",
    link: "/projects/talkthroughit",
    cards: [
      {
        header: "Landing Page",
        desc: "An app made to help therapist and clients keep track of connect and get better mental health. Therapist and clients have their own portals. Therapist portal allows them to create dynamic schedules, accept bookings and list their services. Clients can browse therapist, favorites ones they like, book appointments and view upcoming ones.",
        image: "/assets/Talkthroughit/talkthroughit.png",
        alt: "Talk Through it - Landing Page",
      },
      {
        header: "Client Dashboard",
        desc: "Where Clients can see their upcoming appointments, favorited therapist and total appointments.",
        image: "/assets/Talkthroughit/BrowseTherapist_Talkthroughit.png",
        alt: "Talk Through it - Client Dashboard"
      },
      {
        header: "Browse Page",
        desc: "The page where clients and Therapist can view. You can book appointments and favorite on this page.",
        image: "/assets/Talkthroughit/BrowseTherapist_Talkthroughit.png",
        alt: "Talk Through it - Browse Page"
      }, 
    ],
    
  },
  // Artfolio
  {
    id: 2,
    title: "Artfolio",
    tech_stack: [ejs_logo, html_logo, css_logo, figma_logo],
    github: "https://github.com/RosarioManny/Artfolio.git",
    link: "https://artfolio-6f7be019a918.herokuapp.com/",
    cards: [
      {
        header: "Landing Page",
        desc: "The landing page where you can view post even without having to create an account. This app made to help artist keep track of their artworks and build their portfolio's. They can see also view other artist's work and art journey alongside them. ",
        image: "/assets/Artfolio/artfolio.png",
        alt: "Artfolio - Landing Page",
      },
      {
        header: "Art Details",
        desc: "Where you can see the larger image of the artwork and the artwork's details including medium, date, creator, and more.",
        image: "/assets/Artfolio/Artfolio-PostDetails.png",
        alt: "Art Details Page"
      },
      {
        header: "Profile Page",
        desc: "Where users can upload their artworks, edit their profile and view their works. They can go into the artworks and see the art's details.",
        image: "/assets/Artfolio/Artfolio-Profile.png ",
        alt: "Artist profile page"
      }, 
    ],
    
  },
  {
    id: 3,
    title: "Whataduudle",
    tech_stack: [python_logo, react_logo, tailwind_logo, django_logo, figma_logo],
    github: "https://github.com/RosarioManny/duudle-backend",
    cards: [
      {
        header: "Landing Page",
        desc: "An AI guessing drawing game. This is the landing page. Focused on giving the user the rules of the game and ability to create their account.",
        image: "/assets/Whataduudle/whataduudle.png",
        alt: "What a doodle - Landing Page",
      },
      {
        header: "Prompt Phase",
        desc: "Once the user is signed in, they will immediatly navigate into the game a be shown the word for the round. The word given is what you want to draw.  ",
        image: "/assets/Whataduudle/whataduudle_start.png",
        alt: "Prompt Phase page - Prompt is given to player"
      },
      {
        header: "Drawing Phase",
        desc: "This is where the game takes place. The user now has 20 seconds to draw on the canvas. Let's hope that the AI can identify your drawing as the word given. ",
        image: "/assets/Whataduudle/whataduudle_drawing.png",
        alt: "Canvas appears for the player to begin drawing"
      }, 
    ],
    link: "",
  },
];
