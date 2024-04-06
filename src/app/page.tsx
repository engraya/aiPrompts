import Feed from "@components/Feed"

function Home() {
  return (
    <>
    
    <section className="w-full flex-center flex-col justify-center content-center">
      <h1 className="head_text text-center justify-center content-center">Discover and share
      <br className="max-md:hidden"/>
      <span className="orange_gradient text-center">AI-Powered Prompts</span>
      </h1>
    </section>
      <div className="desc text-center">
        Discover astonishing advancement of AI and Web Development in Powering Promts using AI
      </div>
      <Feed/>
    </>

    
  )
}

export default Home





