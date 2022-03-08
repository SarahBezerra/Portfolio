import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './style/reset.css';

import Home from './Pages/HomePage/index.js'
import Works from './Pages/WorksPage/index.js'
import Sidebar from './Components/Sidebar/Sidebar'

export default function App(){
    return(
        <>
        <Sidebar/>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/works" element={<Works />} />
            </Routes>
        </BrowserRouter>
        </>
    )
}