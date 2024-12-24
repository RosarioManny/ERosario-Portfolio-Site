/* 
Color Pallete:
  Crash Site:
    Color     -  Hex Code   -  Tailwind
    Yellow    >  #EEC643    >  sunburst
    Dark Blue >  #011638    >  midnight
    Blue      >  #0D21A1    >  royal
    Black     >  #141414    >  obsidian
    White     >  #EEF0F2    >  frost
  Dark Mode:
    Color     -  Hex Code   -  Tailwind
    White     >  #EAF6FF    >  glacier 
    Baby Blue >  #009FFD    >  skyline
    Grey      >  #444140    >  charcoal
    Orange    >  #FFA400    >  tangerine
    Mat Black >  #1E1E24    >  onyx
*/

export const theme = {
  
  heading: {
    default: "text-sunburst text-3xl mt-6 font-semibold",
    home: "text-frost text-7xl mt-20 mx-4 font-sans",
  },
  subheading: {
    default: "text-frost text-lg",
    home: "text-sunburst text-xl my-2 mx-4",
  },
  bodyText: {
    default: "text-frost text-balance",
    nav: "text-sunburst text-sm",
  },
  card: {
  },
  container: {
    default: "bg-midnight p-5 p m-4",
    img: "bg-midnight p-3",
    nav: "bg-midnight p-4 space-x-[125px] flex top-0 right-0 left-0",
    footer: "bg-midnight items-center m-max flex flex-col space-y-1 text-frost text-sm p-2 flex position-fixed bottom-0 right-0 left-0",
    socialsLogos: "bg-sunburst p-2",
    description: "bg-midnight text-frost mx-4 mb-6",
    button: "bg-sunburst p-2 mb-2  w-fit m-5 hover:bg-midnight hover:text-frost transition duration-300 ease-in-out"
  },
  navMenu: {
    burger: "bg-sunburst transition-all duration-300 ease-in-out transform h-1 w-11",
    offScreen: "bg-midnight h-screen w-full max-w-[450px] fixed top-0 flex flex-col space-y-9 items-center justify-center text-center text-3xl font-medium transition-all ease-in-out duration-300 off-screen-menu",
  },
  // DARK MODE
  dkHeading: {
    default: "text-sunburst text-3xl mt-6 font-semibold",
    home: "text-frost text-7xl mt-20 mx-4 font-sans",
  },
  dkSubheading: {
    default: "text-frost text-lg",
    home: "text-sunburst text-xl my-2 mx-4",
  },
  dkBodyText: {
    default: "text-frost text-balance",
    nav: "text-sunburst text-sm",
  },
  dkCard: {
  },
  dkContainer: {
    default: "bg-midnight p-5 p m-4",
    img: "bg-midnight p-3",
    nav: "bg-midnight p-4 space-x-[125px] flex top-0 right-0 left-0",
    socialsLogos: "bg-sunburst p-2",
    description: "bg-midnight text-frost mx-4 mb-6",
    button: "bg-sunburst p-2 mb-2  w-fit m-5 hover:bg-midnight hover:text-frost transition duration-300 ease-in-out"
  },
  dkNavMenu: {
    burger: "bg-sunburst transition-all duration-300 ease-in-out transform h-1 w-11",
    offScreen: "bg-midnight h-screen w-full max-w-[450px] fixed top-0 flex flex-col space-y-9 items-center justify-center text-center text-3xl font-medium transition-all ease-in-out duration-300 off-screen-menu",
  }
}

