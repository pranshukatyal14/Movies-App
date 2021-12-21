import React from "react";
import "./sideBarButtons.css";

class SideBarButtons extends React.Component{
    constructor(props){
        super(props);
    }


    render(){
        return(
            <div className="sidebar-button"  >
                {this.props.text}
            </div>

        )
    }
}
export default SideBarButtons;