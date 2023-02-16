import { Route, Routes, Navigate } from "react-router-dom";
import Login from "../page/Login"
import Menu from "../page/Menu"

const MainRoutes = () => {

    return <Routes>
                <Route>
                    <Route path="/" element={<Navigate replace to={'/login'} />}  />
                    <Route element = {<Login/>} path = "/login"/>
                    <Route element = {<Menu/>} path = "/menu"/>
                </Route>
            </Routes>

}

export default MainRoutes;