import './Layout1.styles.css';

function Layout1() {
  return (
    <nav>
    <ul>
     <li className='li-1'><i class="fa fa-github"> Github</i></li>
     <li className='li-2'><i class="fa fa-book"> Docs</i></li>
     <hr className='Line'></hr>
     <li className='li-3'><i class="fa fa-sign-in"> Signin</i></li>
     </ul>
    </nav>
  )
}

export default Layout1;