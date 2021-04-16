import { useState, useEffect } from 'react'
import Link from 'next/link'
import { API, Storage } from 'aws-amplify'
import { listPosts } from '../graphql/queries'
import Amplify from 'aws-amplify';
import config from './aws-exports';
Amplify.configure(config);

export default function Home() {
  const [posts, setPosts] = useState([])
  useEffect(() => {
    fetchPosts()
  }, [])
  async function fetchPosts() {
    const postData = await API.graphql({
      query: listPosts
    })
    const { items } = postData.data.listPosts
    // Fetch images from S3 for posts that contain a cover image
    const postsWithImages = await Promise.all(items.map(async post => {
      if (post.coverImage) {
        post.coverImage = await Storage.get(post.coverImage)
      }
      return post
    }))
    setPosts(postsWithImages)
  }
  return (
    <div>
  <section className="my-10">
        <h1 className="text-5xl uppercase font-hairline text-center text-gray-600 mb-2 font-serif">Otro blog de tecnología en español</h1>
     
      </section>

    <section className="grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 grid-flow-row gap-8 my-10 ">
  {
        posts.map((post, index) => (

      <article className="col-auto border-yellow-900 border-opacity-40  border-4 p-5" key={index}>
            <p className="text-xs font-hairline font-sans text-gray-500 uppercase mt-5 tracking-widest">15.04.21</p>
            <h2 className="text-xl font-hairline text-gray-600 font-serif mb-5"><Link href={`/posts/${post.id}`}>{post.title}</Link></h2>
            <p className="text-base font-light font-sans text-gray-700">
              {post.username}
            </p>
                     </article>        )
        )
      }
      </section>
      {/*  <h1 className="text-3xl font-semibold tracking-wide mt-6 mb-8">Posts</h1>
      {
        posts.map((post, index) => (
        <Link key={index} href={`/posts/${post.id}`}>
          <div className="my-6 pb-6 border-b border-gray-300	">
            {
              post.coverImage && <img src={post.coverImage} className="w-56" />
            }
            <div className="cursor-pointer mt-2">
              <h2 className="text-xl font-semibold">{post.title}</h2>
              <p className="text-gray-500 mt-2">Author: {post.username}</p>
            </div>
          </div>
        </Link>)
        )
      }*/}
    </div>
  )
}
