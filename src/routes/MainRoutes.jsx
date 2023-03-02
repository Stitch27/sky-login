import { Route, Routes, Navigate } from "react-router-dom";
import Login from "../page/auth/Login"
import Informacion from "../page/menu/Informacion";
import Paquetes from "../page/menu/Paquetes";
import Main from "../layout/Main";
import Menu from "../page/Menu";

const MainRoutes = () => {

    return <Routes>
        <Route>
            <Route path="/" element={<Navigate replace to={'/auth/login'} />} />
            <Route path="/auth/login" element={<Login/>} />
        </Route>
        <Route path="menu" element={<Main />}>
            <Route path="" element={<Menu />} />
            <Route path="informacion" element={<Informacion />} />
            <Route path="paquetes" element={<Paquetes />} />
        </Route>
    </Routes>
}

export default MainRoutes;