import Header from '../Header/Header'
import { Outlet} from "react-router";
import React from "react";

const Layout: React.FC = () => {
    return (
        <div>
            <Header />
            <Outlet />
        </div>
    )
}

export default Layout
