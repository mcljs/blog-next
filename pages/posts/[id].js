import { API, Storage } from 'aws-amplify'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import ReactMarkdown from 'react-markdown'
import { listPosts, getPost } from '../../graphql/queries'
import { NextSeo } from 'next-seo'

export default function Post({ post }) {
  const [coverImage, setCoverImage] = useState(null)
  useEffect(() => {
    updateCoverImage()
  }, [])
  async function updateCoverImage() {
    if (post.coverImage) {
      const imageKey = await Storage.get(post.coverImage)
      setCoverImage(imageKey)
    }
  }
  console.log('post: ', post)
  const router = useRouter()
  if (router.isFallback) {
    return <div>Loading...</div>
  }
  return (
    <>
<NextSeo
        title={`${post.title} - Michael Chacón`}
        canonical="https://mcljs.com"
        openGraph={{
          url: 'https://mcljs.com',
          title: `${post.title} - Michael Chacón`,
          description:
            post.description?.text ||
            'Un simple blog de tecnología y escritos',
          images: [
            {
              url: post.coverImage,
              width: post.coverImage,
              height: post.coverImage,
              alt: `${post.title}`
            }
          ]
        }}
      />
    <article className="mb-32">
      <header className="py-10 px-6 sm:px-8">

        <h1 className="text-gray-800 max-w-screen-md mx-auto sm:px-0 px-5 leading-tight mt-24 mb-4 sm:text-5xl text-3xl font-bold text-center">{post.title}</h1>
        <h2 className="text-sm text-center opacity-75 mb-10">by {post.username} </h2>
        <hr className="mt-8 border-t-2 w-20 mx-auto" />
      </header>

      {
        coverImage && <img src={coverImage} className="max-w-screen-lg overflow-hidden lg:rounded-lg rounded-none mx-auto mt-16" />
      }
     
      <div className="mt-8">
        <ReactMarkdown className='mt-8 mx-auto prose prose-indigo md:prose-lg lg:prose-xl' children={post.content} />
      </div>
    </article>
    </>
  )
}

export async function getStaticPaths() {
  const postData = await API.graphql({
    query: listPosts
  })
  const paths = postData.data.listPosts.items.map(post => ({ params: { id: post.id }}))
  return {
    paths,
    fallback: true
  }
}

export async function getStaticProps ({ params }) {
  const { id } = params
  const postData = await API.graphql({
    query: getPost, variables: { id }
  })
  return {
    props: {
      post: postData.data.getPost
    }
  }
}
