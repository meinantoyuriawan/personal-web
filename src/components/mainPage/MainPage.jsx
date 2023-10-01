import { BrowserRouter, Route, Routes } from "react-router-dom";
import HeaderComponent from "./HeaderComponent";
import LandingPage from "./LandingPage";
import ProjectsPage from "./ProjectsPage";
import AboutPage from "./AboutPage";
import ErrorComponent from "./ErrorComponent";

function MainPage() {
    return (
        <div className="App">
            <BrowserRouter>
                <HeaderComponent/>
                <Routes>
                    <Route path='/' element={<LandingPage />}/>
                    <Route path='/projects' element={<ProjectsPage />}/>
                    <Route path='/about' element={<AboutPage />}/>
                    <Route path='*' element={<ErrorComponent />}/>
                </Routes>
            </BrowserRouter>
            {/* <HeaderComponent/> */}
        </div>
    )
}

export default MainPage;