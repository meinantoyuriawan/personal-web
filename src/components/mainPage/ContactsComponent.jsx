import {ReactComponent as GithubLogo} from '../icon/github.svg'
import {ReactComponent as LinkedinLogo} from '../icon/linkedin.svg'
import {ReactComponent as MediumLogo} from '../icon/medium.svg'


export default function ContactsComponent() {
    return(
        <div>
            <div className='mt-4 m-3'>
                <a href="https://github.com/meinantoyuriawan" target="_blank" style={{color:"#000"}}>
                    <GithubLogo className='m-3'/>
                </a>
                <a href="https://www.linkedin.com/in/meinantoyuriawan/" target="_blank" style={{color:"#000"}}>
                    <LinkedinLogo className='m-3'/>
                </a>
                <a href="https://meinantoyuriawan.medium.com/" target="_blank" style={{color:"#000"}}>
                    <MediumLogo className='m-3'/>
                </a>
            </div>
        </div>
    )
}
