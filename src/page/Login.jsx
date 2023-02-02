
const Login = () => {
    return (
        <div className="max-h-screen max-w-screen flex">

            <div className="grid place-items-center max-h-screen max-w-screen w-4/6">

                <img className="max-h-screen max-w-screen py-2" src="/images/loginweb.png" alt="Display"></img>

            </div>

            <div className=" h-full w-2/6 p-4 flex flex-col space-y-4">

                <div className="grid place-items-center h-1/4 ">

                    <img className="object-scale-down h-auto w-36" src="/images/header.png" alt="Display"></img>

                </div>

                <div className="h-3/4 w-full">





                    <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">

                        <div class="mb-10">
                            <label class="block text-gray-700 text-sm font-bold mb-2" for="correoElectronico">
                                Correo electrónico
                            </label>
                            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" />
                        </div>

                        <div class="mb-10">
                            <label class="block text-gray-500 text-sm font-light text-lg mb-2" for="password">
                                Contraseña
                            </label>
                            <input class="shadow appearance-none border rounded w-3/4 py-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" />
                        </div>

                        <div class="flex items-center justify-between">
                            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                                Iniciar sesión
                            </button>
                            <a class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                                Olvide mi contraseña
                            </a>
                        </div>

                    </form>

                </div>

                <div className="text-xs">

                    <p className="text-center text-gray-400" >Dispositivos móviles(BlackBerry®, iPhone, iPad y Android) utilizando navegadores: Internet Explorer, Google Chrome, Firefox y Safari.</p>
                    <br />
                    <p className="text-center text-gray-400" >Navegadores soportados son Internet Explorer Versión 10 o superior, Google Chrome 50 o superior, Mozilla Firefox 42 o superior. Para MAC Safari 7 o superior.</p>
                    <br />
                    <p className="text-center text-gray-400" >(1) Factura electrónica únicamente disponible en México. Pago en línea disponible por el momento en México y Centroamérica.</p>
                    <br />
                    <p className="text-center text-gray-400" >(2) Disponible en México para equipos SKY + HD y SKY Super Plus HD.</p>
                    <br />
                    <p className="text-center text-gray-400" >(3) Disponible en México, excepto para los paquetes VeTV y VeTV Plus.</p>
                    <br />
                    <p className="text-center text-gray-400" >“Sky” y las marcas relacionadas, nombres y logotipos, son propiedad de “Sky International AG” y otras empresas del grupo.</p>
                    <br />
                    <p className="text-center text-gray-400" >Corporación Novavisión S. de R.L. de C.V. 2022. Prohibida su reproducción total o parcial.</p>
                    <br />
                    <p className="text-center text-gray-400" >SESION_ID : 022120239</p>
                    
                </div>

            </div>

        </div>

    );

}

export default Login;