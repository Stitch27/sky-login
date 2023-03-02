import React from 'react'

const Informacion = () => {
  return (
    <div className="flex flex-1 w-full  px-4 pt-8 flex flex-col space-y-4 ">
      <div className="flex h-[5rem] w-full  flex-col px-2 py-2 space-y-2" >
        <p className="flex items-center justify-end  w-full h-auto px-4 text-md font-bold text-black-800">Hola Aarón Pérez</p>
        <p className="flex items-center justify-end  w-full h-auto px-4 text-md font-bold text-black-800">No. Cuenta 501244212913</p>
      </div>
      <div className="border shadow-md flex h-[7rem] w-full px-2 py-1 flex-col space-y-2">
        <p className="flex items-center  w-full h-auto px-2 text-xl font-bold text-blue-800">Información</p>
        <div className="px-2">
          <hr className="bg-orange-400 h-0.5 border-0" />
        </div>
        <div className="flex items-center justify-end space-x-8 px-2 py-2">
          <button className="py-1 px-4 font-bold text-white bg-blue-500 rounded-md hover:bg-blue-800 focus:outline-none focus:shadow-outline">
            Perfil
          </button>
          <button className="py-1 px-4 font-bold text-white bg-blue-500 rounded-md hover:bg-blue-800 focus:outline-none focus:shadow-outline">
            Actualizar datos
          </button>
          <button className="py-1 px-4 font-bold text-white bg-blue-500 rounded-md hover:bg-blue-800 focus:outline-none focus:shadow-outline">
            Cambiar contraseña
          </button>
        </div>
      </div>
    </div>
  )
}

export default Informacion;