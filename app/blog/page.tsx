import { BlogPosts } from 'app/components/posts'

export const metadata = {
  title: 'Blog',
  description: 'Read my blog.',
}

export default function Page() {
  return (
    <section>
      <img src="/blog.gif"></img>

      {/* <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Our Blog</h1> */}
      <BlogPosts />
    </section>
  )
}
