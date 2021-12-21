import React from "react";
import react from "react";
import "./pagination.css";

class Pagination extends React.Component{
    constructor(props){
        super(props);
        this.state={};

    }

    render(){
        let NumberOfPages=Math.ceil(this.props.totalMovies/5);
        let paginationButtons=[];
        for(let i=0;i<NumberOfPages;i++){
            paginationButtons.push(<div className="pagination-button" onClick={()=>{
                this.props.changePage(i+1);
            }} >{i+1}</div>)
        }
        return(
            <div className="pagination">
                {paginationButtons}
            </div>
        )
    }
}
export default Pagination;