import { Link } from "react-router-dom";
import {ReactComponent as HomeLogo} from '../icon/home.svg'

function HeaderComponent() {
    return(
        <header className="border-bottom border-5 mb-5 p-2">
            <div className="container">
                <div className="row">
                    <nav className="navbar navbar-expand-lg">
                        <Link className="nav-link" to="/">
                            <h2 className="navbar-brand ms-2 fs-2">
                                <HomeLogo/>
                            </h2>
                        </Link>
                        <div className="colapse navbar-collapse">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/projects">Projects</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/about">About</Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default HeaderComponent;