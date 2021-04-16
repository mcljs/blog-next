import { useState, useEffect } from 'react'
import RouterLoadingIndicator from '../components/RouterLoadingIndicator'
import '../styles/globals.css'
import '../configureAmplify'
import Head from 'next/head'
import { Auth, Hub } from 'aws-amplify'
import Navbar from '../components/Navbar'
import {useRouter} from 'next/router'

import { DefaultSeo } from 'next-seo'
import SEO from '../next-seo.config'


function MyApp({ Component, pageProps }) {

const [signedInUser, setSignedInUser] = useState(false)

useEffect(() => {
  authListener()
})
async function authListener() {
  Hub.listen('auth', (data) => {
    switch (data.payload.event) {
      case 'signIn':
        return setSignedInUser(true)
      case 'signOut':
        return setSignedInUser(false)
    }
  })
  try {
    await Auth.currentAuthenticatedUser()
    setSignedInUser(true)
  } catch (err) {}
}



  const router = useRouter()

  const [state, setState] = useState({
    isRouteChanging: false,
    loadingKey: 0,
  })

  useEffect(() => {
    const handleRouteChangeStart = () => {
      setState((prevState) => ({
        ...prevState,
        isRouteChanging: true,
        loadingKey: prevState.loadingKey ^ 1,
      }))
    }

    const handleRouteChangeEnd = () => {
      setState((prevState) => ({
        ...prevState,
        isRouteChanging: false,
      }))
    }

    router.events.on('routeChangeStart', handleRouteChangeStart)
    router.events.on('routeChangeComplete', handleRouteChangeEnd)
    router.events.on('routeChangeError', handleRouteChangeEnd)

    return () => {
      router.events.off('routeChangeStart', handleRouteChangeStart)
      router.events.off('routeChangeComplete', handleRouteChangeEnd)
      router.events.off('routeChangeError', handleRouteChangeEnd)
    }
  }, [router.events])



  return (
    <>
 <Head>
        <link rel="shortcut icon" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <link rel="manifest" href="/manifest.json" />
        </Head>
 <RouterLoadingIndicator isRouteChanging={state.isRouteChanging} />
    <Navbar />
      <div>
{ /*
    <nav className="p-6 border-b border-gray-300">
      <Link href="/">
        <span className="mr-6 cursor-pointer">Home</span>
      </Link>
      <Link href="/create-post">
        <span className="mr-6 cursor-pointer">Create Post</span>
      </Link>
      <Link href="/profile">
        <span className="mr-6 cursor-pointer">Profile</span>
      </Link>
{
  signedInUser && (
    <Link href="/my-posts">
      <span className="mr-6 cursor-pointer">My Posts</span>
    </Link>
  )}
    </nav>*/}
    <DefaultSeo {...SEO} />
    <div className="py-8 px-16">
      <Component {...pageProps} />
    </div>
  </div>
    </>
  )
}

export default MyApp
