import React from "react";
import { Outlet } from "react-router-dom";
import Header from './Header';


const Layout = (props) => {

    return (
        <main className={props.darkMode ? "dark" : ""}>

            <Header 
                clickHandler={props.toggleDarkMode}
                darkMode={props.darkMode} 
            />
            <Outlet/>
        </main>
    )
}

export default Layout;