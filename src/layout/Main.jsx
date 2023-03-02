import React from 'react';
import { Collapse } from "../components/collapseItem/Collapse";
import { Outlet, useNavigate } from 'react-router-dom';

const Main = () => {

    const navigate = useNavigate();

    return (
        <div className="h-screen w-full flex ">
            <div className="flex h-full ">
                <div className="w-[25rem] relative ">
                    <div className="border shadow-md absolute top-2 left-2 right-2 bottom-2 rounded-lg overflow-y-auto ">
                        <div className="flex items-center justify-center pt-10 w-auto ">
                            <img className="object-scale-down h-auto w-36" src="/images/header.png" alt="Display" onClick={()=>navigate('/menu')}></img>
                        </div>
                        <div className="px-6 py-10">
                            <hr className="bg-blue-200 h-0.5 border-0" />
                        </div>
                        <Collapse />
                        <div className="px-6 py-10 space-y-10">
                            <hr className="bg-blue-200 h-0.5 border-0" />
                            <button className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-md hover:bg-blue-800 focus:outline-none focus:shadow-outline" type="button">
                                Cerrar sesión
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <main className='flex flex-col flex-1 w-full overflow-x-hidden overflow-y-auto'><Outlet /></main>
        </div>
    )
}

export default Main;
