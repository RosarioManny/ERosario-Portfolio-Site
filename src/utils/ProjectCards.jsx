import React from "react";

const Card = ({ card, meta_BASE_URL, darkMode, github, tech_stack, isFirstCard, theme, isMobile}) => {
  return (
    <div className="mx-4 my-6 flex justify-center">
      <div className={`
        ${theme.bodyText.default} 
        ${darkMode ? `${theme.darkMode.container} ${theme.darkMode.mainText}` : `${theme.lightMode.container} ${theme.lightMode.mainText}`}
        ${isMobile ? `min-h-[300px] min-w-[650px] `: `max-w-[600px] min-w-[300px] min-h-[200px]`}
        p-4 rounded-md shadow-lg 
      `}>
        <div className="mx-auto w-full">
          <img className="rounded-md" src={`${meta_BASE_URL}${card.image}`} alt={card.alt} />
        </div>
      <h2 className={`
        !text-2xl
        ${theme.subheading.default} 
        ${darkMode ? theme.darkMode.subheading : theme.lightMode.subheading}`
      }>
        {card.header}
      </h2>
        {card.desc}
        {isFirstCard && (
        <>
        <hr className="m-2 border-[1px]" />
        <p>Tech Stack:</p>
        <div className="">
          <div className="flex w-auto flex-cols space-x-6 justify-center px-3 my-3">
              {tech_stack.map((tech, idx) => (
                <img className={`${isMobile ? `w-24 min-w-16` : `w-16 min-w-10`}`} key={idx} src={`${meta_BASE_URL}${tech}`} alt={`${tech} Logo`} />
              ))}
          </div>
        </div>
        <a href={github} className={`${theme.button.largeButton} ${darkMode ? `${theme.darkMode.button} hover:bg-skyline` : `${theme.lightMode.button} hover:bg-aqua` }`}>
          <img className="h-8" src={`${meta_BASE_URL}/assets/Logos/github-mark-white.png`} alt="GitHub Logo" />
          <a target="_blank" rel="noopener noreferrer">GitHub</a>
        </a>  
        </>
      )}
      </div>
    </div>
  );
};

export default Card