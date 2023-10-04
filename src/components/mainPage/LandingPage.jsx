import ContactsComponent from "./ContactsComponent"

export default function LandingPage() {
    return(
        <div className="row d-flex align-items-center justify-content-center"  style={{height:"80vh"}}>
            <div style={{maxWidth:"80vw"}}>
                <h1 className="title">Hi, I am Ato</h1>
                <p className="pb-4">Juggling things between AI and Software Engineering</p>
                <ContactsComponent/>
            </div>
        </div>  
    )
}
