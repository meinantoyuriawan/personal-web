import ContactsComponent from "./ContactsComponent"


export default function AboutPage() {
    return(
        <div className="row d-flex align-items-center justify-content-center">
            <div style={{maxWidth:"94vw"}}>
                <h1 className="p-5 title">About me</h1>
                <p style={{textAlign: "center"}} className="p-3">Hi, I'm Ato. I love to build things</p>
                <p style={{textAlign: "left"}} className="p-2">
                    I have graduated from Institut Teknologi Bandung in 2021 with Bachelor Degree in Electrical Engineering. 
                    I continued my career as a Data Scientist at <a href="https://datasintesa.id/" target="_blank" style={{color:"#7f7f7f"}}>Datasintesa</a> for a year and half where I do a broad range of tasks in my job, 
                    from modeling machine learning models to develop a web services and deploy it in the cloud services.
                </p>
                <p style={{textAlign: "left"}} className="p-2">
                    I have a diverse background in engineering, I learn about hardware and electronics engineering as my major
                    and also software engineering and Artificial Intelligence in my free time in the college. 
                    During 2020 semester break, I spent my time as an intern in <a href="http://www.idealab.id/" target="_blank" style={{color:"#7f7f7f"}}>idealab.id</a> as a Web developer Intern. 
                </p>

                <p style={{textAlign: "left"}} className="p-2">
                    My interest in Artificial Intelligence led me to joined <a href="https://grow.google/intl/id_id/bangkit/?tab=machine-learning" target="_blank" style={{color:"#7f7f7f"}}>Bangkit Academy by Google Indonesia</a> as a trainee in Machine Learning Path in early 2021, 
                    I have graduated in the program with a <a href="https://www.credential.net/9d5d52d5-a1b6-4092-bf63-492a63ccc43a#gs.6figiq" target="_blank" style={{color:"#7f7f7f"}}>TensorFlow developer Certificate</a>. 
                    I continued my interest in AI by doing a undergraduate thesis research topic on Image Based Visual Servoing titled 
                    <span style={{color:"#FF3131"}}>`Thermal Infrared Tracking System with YOLOv4 Algorithm and Visual Servoing Method`</span>
                    , Object Tracking System for a low light environment.
                    I managed to publish the documented works in IEEE <a href="https://ieeexplore.ieee.org/document/9980587"target="_blank" style={{color:"#7f7f7f"}}>(here)</a>
                </p>
                
                <p style={{textAlign: "left"}} className="p-2 pb-3">
                    I enjoy learning new things. I mainly code in Python but I learnt to build a service using Go and SpringBoot recently. 
                    Besides that, I also do some works using NodeJs and a little bit of React.
                </p>

                <p style={{textAlign: "left"}} className="p-2 pb-3">
                    I love to workout and running in my freetime, not a professional but I can run 10K. Besides that, I appreciate a diverse genre of Music ranging from old 90's rock to Korean indie band. <a href="https://drive.google.com/file/d/1_GGBVV66A9v85k4G5_5ZXCb_aQtBqRP-/view"target="_blank" style={{color:"#7f7f7f"}}>Get my CV</a> to know more about me (or find me below :))
                </p>


                <p className="pt-5">Feel free to find me at</p>
                <ContactsComponent/>
            </div>
        </div>
    )
}