import { BrowserRouter, Route, Routes } from "react-router-dom";
import HeaderComponent from "./HeaderComponent";
import LandingPage from "./LandingPage";
import ProjectsPage from "./ProjectsPage";
import AboutPage from "./AboutPage";
import ErrorComponent from "./ErrorComponent";

function MainPage() {
    return (
        <div className="App row d-flex justify-content-center">
            <BrowserRouter >
                <HeaderComponent/>
                <div style={{maxWidth:"1000px"}} className="mainCon w-auto col">
                    <Routes>
                        <Route path='/' element={<LandingPage />}/>
                        <Route path='/projects' element={<ProjectsPage />}/>
                        <Route path='/about' element={<AboutPage />}/>
                        <Route path='*' element={<ErrorComponent />}/>
                    </Routes>
                </div>
            </BrowserRouter>
            {/* <HeaderComponent/> */}
        </div>
    )
}

export default MainPage;