import Input from './Input'

function FogotPasswordSubmit({ setUiState, onChange, forgotPasswordSubmit }) {
  return (
    <>
      <p className="text-3xl font-black">Restablecer contraseña</p>
      <div className="mt-10">
        <label className="text-sm">Confirmación de codigo</label>
        <Input onChange={onChange} name="authCode" />
      </div>
      <div className="mt-6">
        <label className="text-sm">
          Nueva contraseña
        </label>
        <Input type="password" name="password" onChange={onChange} />
      </div>
      <button
        onClick={() => forgotPasswordSubmit()}
        className="text-white w-full mt-4 bg-[#2563EB] p-3 rounded">
        Continuar
      </button>
      <button
      onClick={() => setUiState('signIn')}
      className="text-sm mt-6 text-[#2563EB]">Cancel</button>
    </> 
  )
}

export default FogotPasswordSubmit
