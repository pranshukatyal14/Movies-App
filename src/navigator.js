import { Component } from "react";
import {Routes, Route, BrowserRouter} from "react-router-dom";
import NavBar from "./components/navBar/navBar";
import SideBar from "./components/sideBar/sideBar";
import MoviesList from "./containers/moviesList/moviesList";

class Navigator extends Component {
    render() {
        return(
            <BrowserRouter>
            <Routes>
                <Route path="/" element={<MoviesList/>}></Route>
            </Routes>
            </BrowserRouter>
        );
    }
}

export default Navigator;