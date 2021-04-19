import { NextSeo } from 'next-seo'
import Input from './Input'

function SignUp({
  setUiState, signUp, onChange
}) {
  return (
    <>
     <NextSeo
   title="Registro"
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
      <p className="text-3xl font-black">Registrate para ingresar</p>
      <div className="mt-7">
        <label className="text-sm">Nombre de Usuario</label>
        <Input onChange={onChange} name="email" />
      </div>
      <div className="mt-7">
        <label className="text-sm">Email</label>
        <Input onChange={onChange} name="email" />
      </div>
      <div className="mt-7">
        <p className="text-sm">
          Contraseña
          <span
            className="ml-8 sm:ml-48 text-[#2563EB]"
          >Olvidaste tu contraseña?</span>
          </p>
        <Input name="password" onChange={onChange} type="password" />
      </div>
      <button
        onClick={signUp}  
        className="text-white w-full mt-10 bg-[#2563EB] p-3 rounded">
        Continuar
      </button>
      <p className="mt-12 text-sm font-light">
      Ya tienes una cuenta registrada?
        <span
          className="cursor-pointer text-[#2563EB]"
          onClick={() => setUiState('signIn')}
        > Ingresar.</span>
    </p>
    </> 
  )
}

export default SignUp
