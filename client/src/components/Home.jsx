import './Home.css'

import { FaSeedling } from "react-icons/fa";

const Home = () => {
  return (
    <div className="home-container">

        <nav>
        <div className="logo">
            <img className='' src={"https://www.cipherschools.com/static/media/Cipherschools_icon@2x.3b571d743ffedc84d039.png"} alt='logo'/>
                <h5>Cipher schools</h5>
        </div >
        <div className="navlinks">
        <a> Home</a>
        <a> Courses</a>
        <a> Following</a>
        
        </div>
        <a href="/login">
            <img src="https://png.pngtree.com/png-vector/20191101/ourmid/pngtree-cartoon-color-simple-male-avatar-png-image_1934459.jpg" alt="avatar" className='avatar' />
        </a>
        </nav>

        <div className="mini-container">
        </div>
      </div>
  )
}

export default Home
