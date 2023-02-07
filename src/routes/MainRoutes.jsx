import { Route, Routes } from "react-router-dom";
import Login from "../page/Login"
import Menu from "../page/Menu"

const MainRoutes = () => {

    return <Routes>
            <Route>
                <Route element = {<Login/>} path = "/login"/>
                <Route element = {<Menu/>} path = "/menu"/>
            </Route>
        </Routes>

}

export default MainRoutes;