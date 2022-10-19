import './Layout2.styles.css';
import {ReactComponent as EmailLogo} from '../../assets/email.svg';
import {ReactComponent as Kurshana} from '../../assets/kurshana.svg';

function Layout2() {
  return (
    <div className="Layout2">
    <h1>Grow Your Business with Email Automation</h1>
    <div className='image-container'>
    <EmailLogo />
    </div>
    <div className='kurshana-Logo'>
     <Kurshana />
    </div>
    <button className='btn'>Get Started</button>
    <button className='contact-btn'>Talk to us</button>
    </div>
  )
}

export default Layout2;