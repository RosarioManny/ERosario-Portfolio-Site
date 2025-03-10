import React from "react";

const Card = ({ card, meta_BASE_URL, darkMode, theme }) => {
  return (
    <div className="mx-4 my-6">
      <img src={`${meta_BASE_URL}${card.image}`} alt={card.alt} />
      <h2 className={`${theme.subheading.default} ${darkMode ? theme.darkMode.subheading : theme.lightMode.subheading}`}>
        {card.header}
      </h2>
      <p className={`text-base p-2 ${theme.bodyText.default} ${darkMode ? `${theme.darkMode.container} ${theme.darkMode.mainText}` : `${theme.lightMode.container} ${theme.lightMode.mainText}`}`}>
        {card.desc}
      </p>
    </div>
  );
};

export default Card