
const Login = () => {
    return (
        <div className="border border-red-900 h-auto w-full flex flex-wrap">
            <div className="border border-blue-900 w-4/6">
                <img className="h-auto w-full" src="/images/loginweb.svg"></img>
            </div>
            <div className="border border-yellow-500 w-2/6">
                <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <div class="mb-10">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="correoElectronico">
                            Correo electrónico
                        </label>
                        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text"/>
                    </div>
                    <div class="mb-10">
                        <label class="block text-gray-500 text-sm font-light text-lg mb-2" for="password">
                            Contraseña
                        </label>
                        <input class="shadow appearance-none border rounded-t-lg w-3/4 py-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password"/>
                    </div>
                    <div class="flex items-center justify-between">
                        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                            Sign In
                        </button>
                        <a class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                            Forgot Password?
                        </a>
                    </div>
                </form>
                <p class="text-center text-gray-500 text-xs">
                    &copy;2020 Acme Corp. All rights reserved.
                </p>
            </div>
        </div>
    );
}

export default Login;