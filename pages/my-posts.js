import { useState, useEffect } from 'react'
import Link from 'next/link'
import { API, Auth } from 'aws-amplify'
import { postsByUsername } from '../graphql/queries'
import { deletePost as deletePostMutation } from '../graphql/mutations'
import { NextSeo } from 'next-seo'

export default function MyPosts() {
  const [posts, setPosts] = useState([])
  useEffect(() => {
    fetchPosts()
  }, [])
  async function fetchPosts() {
    const { username } = await Auth.currentAuthenticatedUser()
    const postData = await API.graphql({
      query: postsByUsername, variables: { username }
    })
    setPosts(postData.data.postsByUsername.items)
  }
  async function deletePost(id) {
    await API.graphql({
      query: deletePostMutation,
      variables: { input: { id } },
      authMode: "AMAZON_COGNITO_USER_POOLS"
    })
    fetchPosts()
  }
  return (
    <div className="py-8 px-16">
       <NextSeo
   title="Mi publicaciones"
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
      <h1 className="text-3xl font-semibold tracking-wide mt-6 mb-2">Mi Publicaciones</h1>
      {
        posts.map((post, index) => (
          <div key={index} className="border-b border-gray-300	mt-8 pb-4">
            <h2 className="text-xl font-semibold">{post.title}</h2>
            <p className="text-gray-500 mt-2 mb-2">Author: {post.username}</p>
            <Link href={`/edit-post/${post.id}`}><a className="text-sm mr-4 text-blue-500">Editar Post</a></Link>
            <Link href={`/posts/${post.id}`}><a className="text-sm mr-4 text-blue-500">Visualizar Post</a></Link>
            <button
              className="text-sm mr-4 text-red-500"
              onClick={() => deletePost(post.id)}
            >Eliminar Post</button>
          </div>
        ))
      }
    </div>
  )
}
