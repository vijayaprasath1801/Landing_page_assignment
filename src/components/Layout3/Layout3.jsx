import './Layout3.styles.css';
import {ReactComponent as AILogo} from '../../assets/aiRo.svg';

function Layout3() {
  return (
    <div className="Layout3">
    <h1>AI <span>framework</span></h1>
    <div className='para-1'>
    <hr className='line-1'></hr>
      <h2>Personalisation</h2>
      <p>The advanced intelligent system assists in reaching out to customers and increasing conversion funnel.</p>
    </div>
    <div className='para-2'>
    <hr className='line-3'></hr>
      <h2>Efficiency</h2>
      <p>Our data models help improve the content. Real-time delivery insights are monitored using AI and provide meaningful actions.</p>
    </div>
    <div className='para-3'>
    <hr className='line-3'></hr>
      <h2>Automation</h2>
      <p>Send email at scale using code written in your preferred programming language, such as Python, Java, or Curl.</p>
    </div>
    <div className='img'>
    <AILogo />
    </div>
    </div>
  )
}

export default Layout3;