import { useState, useEffect } from 'react'
import Link from 'next/link'
import { NextSeo } from 'next-seo'
import { API, Storage } from 'aws-amplify'
import { listPosts} from '../graphql/queries'
import Amplify from 'aws-amplify';
import config from '../aws-exports';
import {Hero} from '../components/Hero'
import {About} from '../components/About'
import {Skills} from '../components/Skills'

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
    <>
 <NextSeo
   title="Home"
   titleTemplate={'%s | Michael Chacón'}
   description="Un blog de tecnología y escritos"
        canonical="https://mcljs.vercel.app"
        openGraph={{
          url: 'https://mcljs.vercel.app',
          title: 'Michael Chacón',
          description:
            'Un blog de tecnología y escritos',
          images: [
            {
              url: 'https://mcljs.vercel.app/image.jpg',
              width: 1280,
              height: 720,
              alt: 'Michael Chacón'
            }
          ],
          site_name: 'Michael Chacón'
        }}
      />
      <Hero />
      <About />
      <Skills />
      <section className="px-12 py-4 ">
      <div className="w-2/4 ">
        <h5 className="text-3xl font-bold">Mis Articulos</h5>
      </div>
      <div className="grid  grid-cols-1 md:grid-cols-2  py-12">
        <p className="w-full">
        Eche un vistazo a algunos de mis articulos referentes al desarrollo web actual
        </p>
      </div>
 <div className="grid md:grid-cols-2 grid-cols-1 md:gap-16 gap-8" >
      {
        posts.map((post,index)=>(
         
            <div className="flex flex-col" key={index}>
              <div className="md:mb-4 mb-2">
            <Link href={`/posts/${post.id}`}>
                    <a>
             {
              post.coverImage && 
                <img  
                  src={post.coverImage}
                  alt={post.coverImage} 
                  width={1280}
                  height={720}
                  quality={100}  
                  className="rounded-lg" />
            }
         </a>
                  </Link>
              </div>
           
                   <Link href={`/posts/${post.id}`}>
                <a>
                  <h2 className="md:text-3xl text-xl font-bold leading-tighter">
                    {post.title}
                </h2>
             </a>
              </Link>
                <p className="prose sm:prose prose-sm  sm:mt-4 mt-2 text-gray-700 ">
                  {post.description}
                </p>
              
            
                </div>
           
        ))
      }
 </div>
    

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
    </>
  )
}
