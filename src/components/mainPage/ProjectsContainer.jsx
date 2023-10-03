import { createContext, useState } from "react";

import ProjectBoxComponent from "./ProjectBoxComponent"

import data from '../data/data.json'

export const MyContext = createContext();


export default function ProjectsContainer() {
    
    const [datas, setDatas] = useState(data);

    return(
        <div>
            {
                datas.map(
                    data => (
                        <div>
                            <MyContext.Provider value={{data}}>
                                <ProjectBoxComponent/>
                            </MyContext.Provider>
                        </div>
                    )
                )
            }

        </div>
        
    )
}