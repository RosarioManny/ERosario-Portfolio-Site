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
          <div className={`${theme.bodyText.default} p-3`}>
            Description of my website. Its made for descriptions and other descriptions. 
            <p><b>Languages:</b></p>
            <div className="flex flex-cols space-x-10 justify-center my-3">
              <img className="h-12" src="../src/assets/Logos/icons8-ejs-96.png"/>
              <img className="h-12" src="../src/assets/Logos/icons8-html-logo-96.png"/>
              <img className="h-12" src="../src/assets/Logos/icons8-css-logo-96.png"/>
            </div>
            <div className="flex justify-end m-1 ">
              <button className="inline-block bg-sunburst mt-2 px-3 py-1 text-sm font-semibold text-midnight">
                Github
              </button>
            </div>
          </div>
        </div>
        <div className="mx-4 my-6">
          <img src="../src/assets/Artfolio-PostDetails.png" alt="" />
        </div>
        <div>
          <div className="mx-4 my-6">
            <img src="../src/assets/Artfolio-Profile.png" alt="" />
          </div>
            
        </div>
    </section>
  </>
)

}

export default Artfolio