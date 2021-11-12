import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./views/Home";
import Profile from "./views/Profile";
import Detail from "./views/Detail";
import Header from "./components/Header"

import {data} from "./helpers/data";

const App = () => { 


    return(
    <>
        <Header site={data.site} profile={data.profile} />
        <div className="container">
        <Routes>
            <Route path="/" element={<Home data={data.data} />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/detail/:detailId" element={<Detail />} />
        </Routes>
        </div>  
    </>
    );
}



export default App;