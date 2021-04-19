import { useState, useEffect } from 'react'
import { Auth } from 'aws-amplify'
import { NextSeo } from 'next-seo'
 
function Profile({ setUiState }) {
  const [user, setUser] = useState(null)
  useEffect(() => {
    checkUser()
  }, [])
  async function checkUser() {
    const user = await Auth.currentAuthenticatedUser()
    setUser(user.attributes)
  }
  if (!user) return null
  return (
    
    <>
     <NextSeo
   title="Perfil"
   titleTemplate={'%s | Blog'}
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
     <p className="text-xl font-black">Bienvenido, {user.email}</p>
     <button
        onClick={() => { Auth.signOut(); setUiState('signIn') }}
        className="text-white w-full mt-10 bg-[#2563EB] p-3 rounded">Salir
      </button>
    </> 
  )
}

export default Profile
