import { theme } from "/src/styles/style.js"

const Projects = () => {
  return (
    <>
      <section className="place-items-center bg-royal">
        <h1 className={`${theme.heading.default}`}> Projects_ </h1>
        <section >
          <div className="max-w-sm max-h-min overflow-hidden m-4 hover:shadow-xl hover:border-solid hover:border-obsidian hover:border-4">
            <img className="w-full"src="src/assets/talkthroughit.png" alt="" />
            <div class="p-4 bg-midnight">
              <div class="font-bold text-xl mb-2 text-sunburst">TalkThrough.It</div>
              <p class="text-frost text-base text-[13px]">
                The value of Therapy and Mental health is immense. <br/>
                Clients & Therapist can create accounts, book appointments, browser therapist, etc!
              </p>
            </div>
          </div>
          <div className="max-w-sm overflow-hidden m-4 hover:shadow-xl hover:border-solid hover:border-obsidian hover:border-4">
            <img className="w-full"src="src/assets/artfolio.png" alt="" />
            <div class="p-4 bg-midnight">
              <div class="font-bold text-xl mb-2 text-sunburst">Artfolio</div>
              <p class="text-frost text-base text-[13px]">
                A place for artist to share their portfolio and artwork. Create an account, upload your photos and manage your profile!
              </p>
            </div>
          </div>
          <div className="max-w-sm overflow-hidden m-4 hover:shadow-xl hover:border-solid hover:border-obsidian hover:border-4">
            <img className="w-full"src="src/assets/talkthroughit.png" alt="" />
            <div class="px-6 py-4 bg-midnight">
              <div class="font-bold text-xl mb-2 text-sunburst">Whataduudle</div>
              <p class="text-frost text-base text-[13px]">
                Have fun and play with AI! A drawing game that AI guesses what you've drawn. If it can guesses your drawing, YOU WIN!
              </p>
            </div>
          </div>
        </section>
      </section>
    </>
  )
}

export default Projects