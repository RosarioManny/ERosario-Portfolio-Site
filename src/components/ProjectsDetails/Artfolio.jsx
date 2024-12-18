import { Link } from "react-router-dom";
import { theme } from "../../styles/style";

const Artfolio = () => {

return (
  <>
    <section className="place-items-center">
      <h1 className={`${theme.heading.default}`}> 
        Artfolio 
      </h1 >
        <div className="mx-4 mt-6" >
          <img src="../src/assets/artfolio.png" alt="" />
        </div>
        <div className={`${theme.container.description}`}>
          <div className={`${theme.bodyText.default} text-sm p-3`}>
            <p className="m-2"> 
              An app made to help artist keep track of their artworks. While building their portfolio, 
              they can see other artist work and art journey.
              The landing page of the app. You can view post, without having to create an account. 
            </p>
            <p><b>Languages:</b></p>
            <div className="flex flex-cols space-x-10 justify-center my-3">
              <img className="h-12" src="../src/assets/Logos/icons8-ejs-96.png"/>
              
              <img className="h-12" src="../src/assets/Logos/icons8-html-logo-96.png"/>
              <img className="h-12" src="../src/assets/Logos/icons8-css-logo-96.png"/>
            </div>
            <div className="flex justify-center gap-2 m-1 place-items-center  inline-block bg-sunburst py-1 text-sm font-bold text-midnight">
                <img className="h-8" src="../src/assets/Logos/github_logo_BW.png" />
                Github
            </div>
          </div>
        </div>
        <div className="mx-4 my-6">
            <img src="../src/assets/Artfolio-PostDetails.png" alt="" />
          <h1 className={`${theme.bodyText.default} bg-midnight p-2 flex justify-center`}>
            Art Details - Where you can see the artwork's details including medium, date and more.
          </h1>
        </div>
        <div className="mx-4 my-6">
            <img src="../src/assets/Artfolio-Profile.png" alt="" />
          <h1 className={`${theme.bodyText.default} bg-midnight p-2 flex justify-center`}>
            Profile Page - The profile page. Shows information about you and displays of your works
          </h1>
        </div>
    </section>
  </>
)

}

export default Artfolio