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
  // Text
  heading: {
    default: "text-sunburst text-3xl mt-6 font-semibold",
    home: "text-frost text-7xl mt-20 mx-4 font-sans",
    drkDefault: "text-tangerine",
    drkHome: "text-skyline"
  },
  subheading: {
    default: "text-frost text-lg",
    home: "text-sunburst text-xl my-2 mx-4",
    card: "font-bold text-xl mb-2 text-sunburst",
    nav: "text-sunburst text-sm",
  },
  bodyText: {
    default: "text-frost text-base font-Pixelify",
    card: " text-frost text-auto text-[13px]",
  },
  // Containers
  card: {
    projects: "min-w-sm max-w-2xl box-border transition-all overflow-hidden mx-4 my-6 hover:shadow-xl hover:border-solid hover:border-frost hover:border-2",
    hover: ""
  },
  container: {
    default: "p-5 p m-4 border-[1px] border-frost",
    img: "p-3",
    nav: "sticky p-2 justify-between items-center flex top-0 right-0 left-0",
    footer: "items-center text-frost text-sm p-2 grid  grid-cols-2 transition-all duration-500",
    socialsLogos: "bg-sunburst p-2",
    description: "text-frost mx-4 mb-6 flex ",
  },
  button: {
    default: "flex bg-sunburst w-fit p-2 mb-2 place-items-center inline-block py-1 text-sm font-bold",
    largeButton: "flex justify-center gap-2  place-items-center  inline-block bg-sunburst py-1 text-sm font-bold text-midnight "
  }, 
  navMenu: {
    burger: "bg-sunburst transition-all duration-300 ease-in-out transform h-1 w-7",
    offScreen: "h-screen w-full max-w-[450px] fixed top-0 flex flex-col space-y-9 items-center justify-center text-center text-3xl font-medium transition-all ease-in-out duration-300 off-screen-menu",
  },
  dark: {
    home: "text-skyline",
    subheading: "text-tangerine",
    bodyText: "text-glacier",
    nav: "text-tangerine bg-charcoal transition-colors duration-500 ",
    burger: "bg-tangerine",
    container: "bg-charcoal text-glacier transition-colors duration-500",
    bg: "bg-onyx",
    footer: "bg-charcoal"
  },
}