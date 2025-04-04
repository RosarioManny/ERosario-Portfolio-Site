/* 
Color Pallete:
  Crash Site:
    Color     -  Hex Code   -  Tailwind
    Yellow    >  #EEC643    >  sunburst
    Dark Blue >  #011638    >  midnight
    Blue      >  #0D21A1    >  royal
    Light Blue > #97DBFF    >  aqua
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
    default: "text-4xl mt-6 font-Pixelify transition-colors duration-500",
    home: "text-frost mt-20 mx-4 font-Pixelify transition-colors duration-500",
  },
  subheading: {
    default: "m-2 text-center text-frost text-2xl font-Pixelify transition-all duration-500",
    home: " mx-4 font-Pixelify transition-all duration-500",
    card: "font-bold text-2xl text-center mb-2 transition-all duration-500",
    nav: "text-2xl font-Pixelify  transition-all duration-500",
  },
  bodyText: {
    default: "text-lg font-Pixelify transition-all duration-500",
    card: "text-auto text-[13px] font-Pixelify transition-all duration-500",
  },
  // Containers
  card: {
    projects: "min-w-sm max-w-2xl h-min box-border transition-all overflow-hidden mx-4 my-6",
  },
  container: {
    default: "p-3 p m-4 rounded-md transition-all duration-500",
    img: "p-3 transition-all duration-500 ",
    nav: " p-2 shadow-white justify-between items-center flex top-0 right-0 left-0 transition-all duration-500",
    footer: "items-center text-frost text-base font-Pixelify p-2 transition-all duration-500",
    socialsLogos: "p-2",
    description: "text-frost mx-4 mb-6 flex ",
  },
  button: {
    default: "flex w-fit p-3 rounded mb-2 py-1 text-base font-Pixelify transition-color duration-500",
    largeButton: "flex justify-center gap-2 rounded place-items-center inline-block  py-1 text-sm font-bold transition-color duration-300"
  }, 
  navMenu: {
    burger: "bg-sunburst transition-all duration-300 ease-in-out transform h-1 w-7",
    offScreen: "h-screen w-full max-w-[450px] fixed top-0 flex flex-col space-y-9 items-center justify-center text-center text-3xl transition-all ease-in-out duration-300 off-screen-menu",
  },
  // Colors
  lightMode: {
    mainText: "text-frost",
    subheading: "text-sunburst",
    highlight: "text-aqua",
    background: "bg-royal",
    container: "bg-midnight",
    button: "bg-sunburst text-midnight",
    hoverCard: " hover:cursor-pointer hover:shadow-2xl hover:border-solid hover:border-aqua hover:border-2",
    hoverButton: "hover:animate-pulse motion-safe:none hover:cursor-pointer hover:box-border hover:bg-midnight hover:text-sunburst ",
    hoverText: "hover:animate-pulse motion-safe:none hover:cursor-pointer hover:text-aqua"
  }, 
  darkMode: {
    mainText: "text-glacier",
    subheading: "text-tangerine",
    highlight: "text-skyline",
    background: "bg-onyx",
    container: "bg-charcoal",
    button: "bg-tangerine text-onyx",
    hoverCard: " hover:cursor-pointer hover:shadow-2xl hover:border-solid hover:border-skyline hover:border-2",
    hoverButton: "hover:animate-pulse motion-safe:none hover:cursor-pointer hover:box-border hover:bg-charcoal hover:text-tangerine ",
    hoverText: "hover:animate-pulse motion-safe:none hover:cursor-pointer hover:text-skyline"
  },
}