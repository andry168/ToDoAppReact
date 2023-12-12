import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return(
        <header className="flex justify-between">
            <h1>ToDo App</h1>
            <Link to = {'/new'}><button>AddTask</button></Link>
            
        </header>
    )
}

export default Header;