import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Homepage from '../HomePage/HomePage'

const AllRoute = () => {

    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Homepage/>}/>
                    <Route path="home" element={<Homepage/>}/>
                    {/*<Route path="home2" element={<HomePage2/>} />*/}
                    {/*<Route path="home3" element={<HomePage3/>} />*/}
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default AllRoute;
