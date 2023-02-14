import { Collapse } from "../components/collapseItem/Collapse";

const Menu = () => {
    return (
        <div className="h-screen w-full flex ">
            <div className="flex h-full ">
                <div className="w-[25rem] relative ">
                    <div className="border shadow-md absolute top-2 left-2 right-2 bottom-2 rounded-lg overflow-y-auto ">
                        <div className="flex items-center justify-center pt-10 w-auto ">
                            <img className="object-scale-down h-auto w-36" src="/images/header.png" alt="Display"></img>
                        </div>
                        <div className="px-6 py-10">
                            <hr class="bg-blue-200 h-0.5 border-0" />
                        </div>
                        <Collapse/>
                        <div className="px-6 py-10 space-y-10">
                            <hr class="bg-blue-200 h-0.5 border-0" />
                            <button className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-md hover:bg-blue-800 focus:outline-none focus:shadow-outline" type="button">
                                Cerrar sesión
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-1 w-full  px-4 pt-8 flex flex-col space-y-4 ">
                <div className="flex h-[5rem] w-full  flex-col px-2 py-2 space-y-2" >
                    <p className="flex items-center justify-end  w-full h-auto px-4 text-md font-bold text-black-800">Hola Aarón Pérez</p>
                    <p className="flex items-center justify-end  w-full h-auto px-4 text-md font-bold text-black-800">No. Cuenta 501244212913</p>
                </div>
                <div className="border shadow-md flex h-[7rem] w-full px-2 py-1 flex-col space-y-2">
                    <p className="flex items-center  w-full h-auto px-2 text-xl font-bold text-blue-800">Información</p>
                    <div className="px-2">
                        <hr class="bg-orange-400 h-0.5 border-0" />
                    </div>
                    <div className="flex items-center justify-end space-x-8 px-2 py-2">
                        <button class="py-1 px-4 font-bold text-white bg-blue-500 rounded-md hover:bg-blue-800 focus:outline-none focus:shadow-outline">
                            Perfil
                        </button>
                        <button class="py-1 px-4 font-bold text-white bg-blue-500 rounded-md hover:bg-blue-800 focus:outline-none focus:shadow-outline">
                            Actualizar datos
                        </button>
                        <button class="py-1 px-4 font-bold text-white bg-blue-500 rounded-md hover:bg-blue-800 focus:outline-none focus:shadow-outline">
                            Cambiar contraseña
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Menu;