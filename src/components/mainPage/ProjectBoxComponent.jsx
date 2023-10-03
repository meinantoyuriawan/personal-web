import {  useContext} from "react";

import { MyContext } from "./ProjectsContainer";

import './ProjectBox.css'


export default function ProjectBoxComponent() {
    const {data} = useContext(MyContext);
    return(
        <div className="wrapper d-flex justify-content-center mt-3 mb-3">
            <div className="box mt-1 mb-1">
                <div className="d-flex m-3 ps-4 containerbox">
                    <div className="ps-2">
                        <img src={data.img} alt={data.img} style={{width:"120px"}}/>
                    </div>
                    <div className="ms-4 d-flex row align-items-start" style={{textAlign: "left"}}>
                        <a href={data.link} target="_blank" className="links mt-2">
                            <h5 className="m-0">{data.title}</h5>
                        </a>
                        <p style={{fontSize:"14px"}} className="m-0">{data.content}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}