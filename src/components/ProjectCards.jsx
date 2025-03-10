import React from "react";

const Card = ({ card, meta_BASE_URL, darkMode, github, tech_stack, isFirstCard, theme }) => {
  return (
    <div className="mx-4 my-6 ">
      <p className={`text-base max-h-fit p-2 ${theme.bodyText.default} ${darkMode ? `${theme.darkMode.container} ${theme.darkMode.mainText}` : `${theme.lightMode.container} ${theme.lightMode.mainText}`}`}>
      <img src={`${meta_BASE_URL}${card.image}`} alt={card.alt} />
      <h2 className={`${theme.subheading.default} ${darkMode ? theme.darkMode.subheading : theme.lightMode.subheading}`}>
        {card.header}
      </h2>
        {card.desc}
        {isFirstCard && (
        <>
        <hr className="m-2 border-[1px]" />
        <p>Tech Stack:</p>
        <div className="flex flex-cols space-x-10 justify-center px-3 my-3">
            {tech_stack.map((tech, idx) => (
              <img className="w-20 min-w-16" key={idx} src={`${meta_BASE_URL}/${tech}`} alt={`${tech} Logo`} />
            ))}
        </div>
        <a href={github} className={`${theme.button.largeButton} ${darkMode ? `${theme.darkMode.button} hover:bg-skyline` : `${theme.lightMode.button} hover:bg-aqua` }`}>
          <img className="h-8" src={`${meta_BASE_URL}/assets/Logos/github-mark-white.png`} alt="GitHub Logo" />
          <a target="_blank" rel="noopener noreferrer">GitHub</a>
        </a>  
        </>
      )}
      </p>
    </div>
  );
};

export default Card