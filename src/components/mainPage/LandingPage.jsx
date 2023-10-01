import {ReactComponent as GithubLogo} from '../icon/github.svg'
import {ReactComponent as LinkedinLogo} from '../icon/linkedin.svg'
import {ReactComponent as MediumLogo} from '../icon/medium.svg'


export default function LandingPage() {
    return(
        <div>
            <h1>Hi, I am Ato</h1>
            <p>Juggling things between AI and Software Engineering</p>
            <div className='m-5'>
                <GithubLogo className='m-3'/>
                <LinkedinLogo className='m-3'/>
                <MediumLogo className='m-3'/>
            </div>
        </div>
    )
}
