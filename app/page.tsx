import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        The Human Obsolescence Index: Who are we?
      </h1>
      <p className="mb-4">
        {`We are witnessing a concerted push by powerful actors to render humanity obsolete.`}
      </p>
      <p className="mb-4">
        {`We are an extremely pluralistic group: concerned citizens, former technologists, farmers, born-again Christians, artists, real housewives, and more. What unites us is our belief that the development of artificial general intelligence (AGI) is a deliberate plot to undermine our foundational values and way of life.`}
      </p>
      <p className="mb-4">
        {`We began the Human Obsolescence Index to keep track of these developments. Follow our index and blog for updates.`}
      </p>
      {/* <p className="mb-4">
        {`Is it God's plan to make us obsolete? Or is the product of the actions of a few malicious actors? These are amazing questions that we hope to uncover.`}
      </p> */}
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
