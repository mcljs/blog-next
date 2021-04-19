import { NextSeo } from 'next-seo'
import Input from './Input'

function ConfirmSignUp({ setUiState, onChange, confirmSignUp }) {
  return (
    <>
     <NextSeo
   title="Confirmación de Registro"
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
      <p className="text-3xl font-black">Confirma Registro</p>
      <div className="mt-10">
        <label className="text-sm">Codigo de confirmación</label>
        <Input onChange={onChange} name="authCode" />
      </div>
      <button
        onClick={() => confirmSignUp()}
        className="text-white w-full mt-4 bg-[#2563EB] p-3 rounded">
        Continuar
      </button>
      <button
      onClick={() => setUiState('signIn')}
      className="text-sm mt-6 text-[#2563EB]">Cancelar</button>
    </> 
  )
}

export default ConfirmSignUp
