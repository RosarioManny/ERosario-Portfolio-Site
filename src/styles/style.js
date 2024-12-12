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
    home: "text-frost text-7xl mt-20 font-sans",
    container: "text-sunburst p-3 fixed left-0 right-0 top-0 flex space-x-52",
  },
  subheading: {
    home: "text-sunburst text-xl my-2",
  },
  bodyText: {
    home: "text-frost bg-midnight p-5 my-6",
    nav: "text-sunburst",
    navToggle: "text-frost",
  },
  card: {
  },
  container: {
    nav: "bg-midnight p-4 space-x-[125px] flex top-0 right-0 left-0"
  },
  navMenu: {
    burger: "bg-sunburst transition-all duration-300 ease-in-out transform h-1 w-11",
    closed: "bg-midnight h-screen w-full max-w-[450px] fixed top-0 flex flex-col items-center justify-center text-center text-3xl transition-all ease-in-out duration-300 off-screen-menu",
    open: "",
  }
  // DARK MODE
}

