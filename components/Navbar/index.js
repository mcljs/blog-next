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
  <a href="/contact" className="ml-4">
 <svg className="w-6 h-8 text-white"  fill="none" stroke="currentColor" viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg"><path d="m12 .5c-6.63 0-12 5.28-12 11.792 0 5.211 3.438 9.63 8.205 11.188.6.111.82-.254.82-.567 0-.28-.01-1.022-.015-2.005-3.338.711-4.042-1.582-4.042-1.582-.546-1.361-1.335-1.725-1.335-1.725-1.087-.731.084-.716.084-.716 1.205.082 1.838 1.215 1.838 1.215 1.07 1.803 2.809 1.282 3.495.981.108-.763.417-1.282.76-1.577-2.665-.295-5.466-1.309-5.466-5.827 0-1.287.465-2.339 1.235-3.164-.135-.298-.54-1.497.105-3.121 0 0 1.005-.316 3.3 1.209.96-.262 1.98-.392 3-.398 1.02.006 2.04.136 3 .398 2.28-1.525 3.285-1.209 3.285-1.209.645 1.624.24 2.823.12 3.121.765.825 1.23 1.877 1.23 3.164 0 4.53-2.805 5.527-5.475 5.817.42.354.81 1.077.81 2.182 0 1.578-.015 2.846-.015 3.229 0 .309.21.678.825.56 4.801-1.548 8.236-5.97 8.236-11.173 0-6.512-5.373-11.792-12-11.792z" fill="white"/></svg>
    </a>
  <a href="/contact" className="ml-4">
 <svg className="w-6 h-8 text-white"  fill="none" stroke="currentColor"  xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"  fill="white"/></svg>    </a>
    </div>
</div>

<div class="w-full h-24 bg-yellow-900 bg-opacity-95 absolute top-0 left-0"></div>   
  </>
  );
}
export default Navbar


