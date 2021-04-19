import { NextSeo } from 'next-seo'
import Input from './Input'
import SocialSignIn from './SocialSignIn'

function SignIn({
  setUiState, onChange, signIn
}) {
  return (
    <>
     <NextSeo
   title="Inicio de sesión"
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
      <p className="text-3xl font-black">Iniciar sesión</p>
        <div className="mt-10">
        <label className="text-sm">Email</label>
        <Input onChange={onChange} name="email" />
      </div>
      <div className="mt-7">
        <label className="text-sm">
          Contraseña
          <span
            onClick={() => setUiState('forgotPassword')}
            className="ml-8 sm:ml-48 text-[#2563EB]"
          >Olvidaste tu contraseña?</span>
          </label>
        <Input type="password" name="password" onChange={onChange} />
      </div>
      <button onClick={signIn} className="text-white w-full mt-6 bg-[#2563EB] p-3 rounded">
        Continuar
      </button>
     
      <p className="mt-12 text-sm font-light">
      No tienes una cuenta? 
        <span
          onClick={() => setUiState('signUp')}
          role="button"
          className="cursor-pointer text-[#2563EB]"> Registrarse.</span>
    </p>
    </> 
  )
}

export default SignIn
