import Link from "next/link";

function Form({ type, post, setPost, submitting, handleSubmit }) {
  return (
    <section className='w-full max-w-full flex-start flex-col'>
    <h1 className='head_text text-left'>
      <span className='blue_gradient'>{type} Post</span>
    </h1>
    <p className='desc text-left max-w-md'>
      {type} and share amazing prompts with the world, and let your
      imagination run wild with any AI-powered platform
    </p>
    <form className="-m-2 flex flex-wrap" onSubmit={handleSubmit}>
      <div className="mt-4 w-full p-2">
        <div className="relative">
          <textarea 
          id="prompt" 
          name="prompt" 
          value={post.prompt}
          onChange={(e) => setPost({ ...post, prompt: e.target.value })}
          required
          className="peer h-32 w-full resize-none rounded border border-gray-700 bg-gray-800 bg-opacity-40 py-1 px-3 text-base leading-6 text-gray-100 placeholder-transparent outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900"
          placeholder='Write your post here' />
          <label htmlFor="prompt" className="absolute left-3 -top-6 bg-transparent text-sm leading-7 text-indigo-500 transition-all peer-placeholder-shown:left-3 peer-placeholder-shown:top-2 peer-placeholder-shown:bg-gray-900 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:left-3 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-indigo-500">Prompt</label>
        </div>
      </div>
      <div className="w-full p-2">
        <div className="relative">
          <input 
          type="text" 
          id="tag" 
          name="tag"
          value={post.tag}
          onChange={(e) => setPost({ ...post, tag: e.target.value })}
          required 
          className="peer w-full rounded border border-gray-700 bg-gray-800 bg-opacity-40 py-1 px-3 text-base leading-8 text-gray-100 placeholder-transparent outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900" 
          placeholder='#Tag' />
          <label htmlFor="tag" className="absolute left-3 -top-6 bg-transparent text-sm leading-7 text-indigo-500 transition-all peer-placeholder-shown:left-3 peer-placeholder-shown:top-2 peer-placeholder-shown:bg-gray-900 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:left-3 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-indigo-500">#Tag</label>
        </div>
      </div>
      <div className="w-full p-2">
        <button
        type='submit'
        disabled={submitting}
        className="mx-auto flex rounded border-0 bg-indigo-500 py-2 px-8 text-lg text-white hover:bg-indigo-600 focus:outline-none">
         {submitting ? `${type}ing...` : type}
        </button>
        <Link href="/">
        <button className="mx-auto flex rounded border-0 bg-pink-500 py-2 px-8 text-lg text-white hover:bg-indigo-600 focus:outline-none">Cancel</button>
        </Link>
      </div>
    </form>
  </section>
  )
}

export default Form
