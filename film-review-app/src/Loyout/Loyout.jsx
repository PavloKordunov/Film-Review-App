import Header from "../Header/Header"
import { Outlet } from "react-router-dom"

const Louout = () => {
    return(
        <div>
            <Header/>
            <Outlet/>
        </div>
    )
}

export default Louout