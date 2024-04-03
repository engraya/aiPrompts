import Feed from "@components/Feed"

function Home() {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">Discover and share
      <br className="max-md:hidden"/>
      <span className="orange_gradient text-center">AI-Powered Prompts</span>
      <div className="desc text-center">
        Discover astonishing advancement of AI and Web Development in Powering Promts using AI
      </div>
      </h1>
      <Feed/>
    </section>
  )
}

export default Home
