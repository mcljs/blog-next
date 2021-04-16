import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { Auth, Hub } from 'aws-amplify'
const Navbar = (  ) => {

   const [click, setClick] = useState(false) 
    const handleClick = () => setClick(!click)

   const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  React.useEffect(() => {
    window.addEventListener('scroll', changeNav);
  }, []);


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


    return(
  <>
 <div className="h-24 z-50 relative container mx-auto px-6 grid grid-cols-3">

    <div onClick={handleClick} className="flex items-center">
{
          click?
               <div  className="fixed inset-0 w-full h-full bg-white z-50 text-yellow-900">
            <div className="container h-full mx-auto px-6 py-8 relative z-10 flex flex-col items-center justify-center text-2xl uppercase font-bold tracking-widest space-y-6">
                <button className="absolute top-0 left-0 mt-8 ml-6">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                </button>


  <Link href="/" className="inline-block border-b-4 border-transparent hover:border-yellow-900">
        Home
      </Link>
      <Link href="/create-post" className="inline-block border-b-4 border-transparent hover:border-yellow-900">
       Create Post
      </Link>
      <Link href="/profile" className="inline-block border-b-4 border-transparent hover:border-yellow-900">
        Profile
      </Link>
{
  signedInUser && (
    <Link href="/my-posts" className="inline-block border-b-4 border-transparent hover:border-yellow-900">
     My Posts
    </Link>
  )}
                          </div>
            <div className="absolute inset-0 w-full h-full bg-yellow-900 bg-opacity-20"></div>
        </div>   
   :


     <button  >

            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
           

                 
        </button>
        }
    </div>
        
    <div className="flex items-center justify-center">
        <a href="/" className="text-white uppercase font-bold text-2xl tracking-widest">
          Michael Chacon
        </a>
     

    </div>

    <div class="flex items-center justify-end">
       

    <a href="/contact">
            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
        </a>
    </div>
</div>

<div class="w-full h-24 bg-yellow-900 bg-opacity-95 absolute top-0 left-0"></div>   
  </>
  );
}
export default Navbar


