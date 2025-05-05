import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <img src="/index.gif"></img>

      {/* <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        The Human Obsolescence Index: Who are we?
      </h1> */}
      <p className="mb-4">
        {`We are witnessing a concerted push by powerful actors to render humanity obsolete.`}
      </p>
      <p className="mb-4">
        {`Who are these powerful actors? They are the tech oligarchs (T.O.), billionaire entrepreneurs and technologists who have been working on artificial general intelligence (AGI) for the last decade. We have already seen the devastating downstream effects of this technology's emergent properties on labor, learning, and creativity. The T.O. are not just misguided, however. They are acting maliciously in the interest of destroying the human race as we know it. Governments, corporations, and civil society have remained complicit thus far, but we see the truth.
        `}
      </p>

      <p className="mb-4">
        {`We are an extremely pluralistic group: concerned citizens, former technologists, farmers, born-again Christians, artists, real housewives, and more. What unites us is our belief that the development of AGI is a deliberate plot to undermine our foundational values and way of life.`}
      </p>
      <p className="mb-4">
        {`We began the Human Obsolescence Index to keep track of these developments. Follow our index and blog for updates.`}
      </p>
      {/* <p className="mb-4">
        {`Is it God's plan to make us obsolete? Or is the product of the actions of a few malicious actors? These are amazing questions that we hope to uncover.`}
      </p> */}
      <a href="/table">
      <img
        src="/flame.gif"
        alt="Human Obsolescence Index"
        className="w-full h-auto mb-8 rounded-lg shadow-lg"
      />
      </a>
      
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
