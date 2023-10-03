import ProjectsContainer from "./ProjectsContainer"
import ContactsComponent from "./ContactsComponent"

export default function ProjectsPage() {
    return(
        <div className="row d-flex align-items-center justify-content-center">
            <div style={{maxWidth:"94vw"}}>
                <h1 className="p-5 title"> Projects</h1>
                <p style={{textAlign: "center"}} className="p-3">One or two documented works I do</p>
                <ProjectsContainer/>
            </div>
            <ContactsComponent/>
        </div>
    )
}