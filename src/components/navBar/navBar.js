import React from "react";
import NavBarButtons from "../navBarButtons/navBarButtons";
import "./navBar.css";

class NavBar extends React.Component{
    constructor(props){
        super(props);
        this.state={};
    }

    render(){
        return(
            <div className="navbar">
            <NavBarButtons text="Home" />
            <NavBarButtons text="About" />
            <NavBarButtons text="Contact" />
            <NavBarButtons text="Contact" />
            </div>
        )
    }
}
export default NavBar;