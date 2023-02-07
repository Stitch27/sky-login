import { useNavigate } from "react-router-dom";

const Login = () => {

    const navigate = useNavigate();

    const SinIng = () => {

        navigate("/menu");
        console.log("Aaron");
        
    }

    return (
        <div className="h-screen w-screen flex space-x-4 p-3  overflow-y-auto">
            <div className="flex items-center justify-center max-h-screen w-3/5 p-4">
                <img className="object-center h-full w-auto" src="/images/loginweb.png" alt="Display"></img>
            </div>
            <div className="max-h-screen w-2/5 px-2 flex flex-col space-y-4 pt-5 pr-16">
                <div className="flex items-center justify-center h-1/6 w-auto">
                    <img className="object-scale-down h-auto w-36" src="/images/header.png" alt="Display"></img>
                </div>
                <div className="h-4/6 w-auto">
                <form className="px-8 pt-2 bg-white">
                        <div className="mb-6">
                            <label className="block mb-3 text-sm font-bold text-gray-800" htmlFor="email">
                                Email
                            </label>
                            <input
                                className="w-full px-3 py-2 text-sm leading-tight text-gray-500 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                id="email"
                                type="text"
                                placeholder="Email"
                            />
                        </div>
                        <div className="mb-3">
                            <label className="block mb-3 text-sm font-bold text-gray-800" htmlFor="password">
                                Password
                            </label>
                            <input
                                className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-800 border border-red-600 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                id="password"
                                type="password"
                                placeholder="********************"
                            />
                            <p className="text-xs italic text-red-600">Please choose a password.</p>
                        </div>
                        <div className="mb-8">
                            <input className="mr-2 leading-tight" type="checkbox" id="remember" />
                            <label className="text-sm" htmlFor="remember">
                                Remember Me
                            </label>
                        </div>
                        <div className="mb-6 text-center">
                            <button onClick = {SinIng} className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline" type="button">
                                Sign In
                            </button>
                        </div>
                        <hr className="mb-5 border-t" />
                        <div className="text-center">
                            <p className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800">
                                Forgot Password?
                            </p>
                        </div>
                    </form>
                </div>
                <div className="w-auto text-xs mt-5">
                        <br />
                        <p className="text-center text-gray-400" >Dispositivos móviles(BlackBerry®, iPhone, iPad y Android) utilizando navegadores: Internet Explorer, Google Chrome, Firefox y Safari.</p>
                        <br />
                        <p className="text-center text-gray-400" >Navegadores soportados son Internet Explorer Versión 10 o superior, Google Chrome 50 o superior, Mozilla Firefox 42 o superior. Para MAC Safari 7 o superior.</p>
                    </div>
            </div>
        </div>
    );
}

export default Login;