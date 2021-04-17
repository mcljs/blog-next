import { useState, useEffect } from 'react'
import Link from 'next/link'
import { NextSeo } from 'next-seo'
import { API, Storage } from 'aws-amplify'
import { listPosts ,Post} from '../graphql/queries'
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

  const [uniPosts, setUniPosts] = useState([])
  useEffect(() => {
    fetchPost()
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

  async function fetchPost() {
    const postData = await API.graphql({
      query: Post
    })
    const { items } = postData.data.listPosts
    // Fetch images from S3 for posts that contain a cover image
    const postsWithImages = await Promise.all(items.map(async post => {
      if (post.coverImage) {
        post.coverImage = await Storage.get(post.coverImage)
      }
      return post
    }))
    setUniPosts(postsWithImages)
  }




  return (
    <>
 <NextSeo
   title="Michael Chacón"
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
      {
        uniPosts.map((post,index)=>(
          <div className="grid  grid-cols-1 md:grid-cols-2 py-12 col-gap-24 row-gap-12" key={index}>
             {
              post.coverImage && <img imgStyle={{ objectFit: "cover" }} src={post.coverImage}    className="rounded" />
            }
            <div>
            <div class="w-24 h-2 bg-yellow-800 mb-4"></div>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold">
                  {post.title}
                </h2>
                <p className="text-lg text-gray-500 py-4">
                  {post.description}
                </p>
                <button className="inline-block border-2 border-yellow-800  text-yellow-800 text-sm uppercase tracking-widest py-3 px-8 hover:bg-yellow-800 hover:text-white">
                  <Link href={`/posts/${post.id}`}>
                    Leer Articulo
                  </Link>
                </button>
              </div>
            </div>
        ))
      }
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 pt-12 pb-24" >
         
  {
        posts.map((post, index) => (
      <div key={index}>
         {
              post.coverImage && <img imgStyle={{ objectFit: "cover" }} src={post.coverImage}    className="w-full h-52 md:h-64 lg:h-96 xl:h-64 object-cover" />
            }
            <div className="bg-gray-50 p-8">
            <div className="text-xs text-gray-600 uppercase font-semibold">{post.username}</div>
            <h2 className="mt-3 text-3xl mb-6 font-display text-black leading-tight max-w-sm">
                  {post.title}
                </h2>
                <p className="mt-4 max-w-md">
                        {post.title}
                    </p>
                    <a href={`/posts/${post.id}`} className="flex items-center mt-6 uppercase text-sm text-black font-semibold">
                    Read article
                    <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M9 5l7 7-7 7"></path></svg>
                </a>
        </div>
        </div>
        
        



                     )
        )
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
