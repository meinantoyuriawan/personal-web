import { BrowserRouter, Route, Routes } from "react-router-dom";
import HeaderComponent from "./HeaderComponent";
import LandingPage from "./LandingPage";
import ProjectsPage from "./ProjectsPage";
import AboutPage from "./AboutPage";
import ErrorComponent from "./ErrorComponent";
import FooterComponent from "./FooterComponent";

import './main.css'

function MainPage() {
    return (
        <div className="App row d-flex justify-content-center">
            <BrowserRouter >
                <HeaderComponent/>
                <div className="row d-flex justify-content-center mainCon">
                    <div style={{maxWidth:"1000px"}} className="w-auto">
                        <Routes>
                            <Route path='/' element={<LandingPage />}/>
                            <Route path='/projects' element={<ProjectsPage />}/>
                            <Route path='/about' element={<AboutPage />}/>
                            <Route path='*' element={<ErrorComponent />}/>
                        </Routes>
                    </div>
                </div>
                <FooterComponent/>
                
            </BrowserRouter>
            {/* <HeaderComponent/> */}
        </div>
    )
}

export default MainPage;