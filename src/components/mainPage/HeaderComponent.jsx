import { Link } from "react-router-dom";
import {ReactComponent as HomeLogo} from '../icon/home.svg'
import {ReactComponent as ZapOn} from '../icon/zap.svg'
import {ReactComponent as ZapOff} from '../icon/zap-off.svg'

function HeaderComponent() {
    return(
        <header className="border-bottom border-2" style={{backgroundColor:"#191919"}}>
            <div className="container" style={{maxWidth:"1000px"}} >
                {/* <div className="" style={{width:"90vh"}}> */}
                    <nav className="navbar"  >
                        {/* <div className="colapse navbar-collapse"> */}
                        <ul className="navbar-nav d-flex flex-row">
                            <li className="nav-item ms-2">
                                <Link className="nav-link"to="/">
                                    <p style={{color:"white", margin:"0"}}>
                                        <HomeLogo/>
                                    </p>
                                </Link>
                            </li>
                            <li className="nav-item ">
                                <Link className="nav-link" to="/about">
                                    <p style={{color:"white", margin:"0"}}>
                                    About
                                    </p>
                                </Link>
                            </li>
                            <li className="nav-item ">
                                <Link className="nav-link" to="/projects">
                                    <p style={{color:"white", margin:"0"}}>
                                    Projects
                                    </p>
                                </Link>
                            </li>
                            <li className="nav-item ">
                                <a href="https://meinantoyuriawan.medium.com/" target="_blank" className="nav-link">
                                    <p style={{color:"white", margin:"0"}}>
                                        Blog
                                    </p>
                                </a>
                            </li>
                        </ul>
                        {/* <div className="nav-item pe-3"to="/">
                            <p style={{color:"#FFC000", margin:"0"}}>
                                <ZapOff/>
                            </p>
                        </div> */}
                        {/* </div> */}
                    </nav>
                {/* </div> */}
            </div>
        </header>
    )
}

export default HeaderComponent;