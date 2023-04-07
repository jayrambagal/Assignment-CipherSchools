import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import logo2 from '../assets/logo2.png';
import "./login.css"
import { useNavigate } from 'react-router-dom';
import hidePwdImg from "../assets/hide.png";
import showPwdImg from "../assets/show.png";
import logoname from "../assets/logoname.png"

const Login = () => {

    const [email,setEmail] = useState()
    const [password,setPassword] = useState()
    const [isRevealPwd, setIsRevealPwd] = useState(false);
    const navigate = useNavigate()
  
    const LoginPage = async(e)=>{
      e.preventDefault()

      try{

        const res = await fetch('/login',{
          method:'POST',
          body:JSON.stringify({ email,password}),
          headers:{'Content-Type':'application/json'}
        })

        const data = await res.json()
        

        if(res.status===200){
          window.alert("login Successfully !")
          navigate('/home')  
        }
        else{
          window.alert("invalid Crediantials")
        }

      }catch(err){
        console.log(err)
      }
    }

  return (

    <div class="container">
      
   
    
      <main
      className="main_login"
     
    >

    <div className="login-header">
      <div className="logo flex ">
      <img className='' src={"https://www.cipherschools.com/static/media/Cipherschools_icon@2x.3b571d743ffedc84d039.png"} alt='logo'/>
      <h5>Cipher schools</h5>
      </div>
            <h2>Hey, Welcome!</h2>
            <h4>Please provide your email and password to signin</h4>
        </div>

      <form className="measure" method='POST'>
        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
          <div className="mt3">
            <label
              className="db lh-copy f6 mb1"
              htmlFor="full-name"
              style={{ textAlign: "left" }}
            >
              Email
            </label>
            <input
              className="f6 br2 ph3 pv2 mb2 dib black w-100"
              type="text"
              name="full-name"
              id="full-name"
              size="30"
              placeholder="Email"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              style={{
                borderStyle: "solid",
                borderWidth: "1px",
                borderColor: "#EAEEF5",
              }}
            />
          </div>
          <div className="mv3" style={{position:"relative" }} >
            <label
              className="db lh-copy f6 mb1"
              htmlFor="display-name"
              style={{ textAlign: "left" }}
            >
              Password
            </label>
            <input
              className="f6 br2 ph3 pv2 mb2 dib black w-100"
              type={isRevealPwd ? "text" : "password"}
              name="display-name"
              id="display-name"
              placeholder="password"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
              style={{
                borderStyle: "solid",
                borderWidth: "1px",
                borderColor: "#EAEEF5",
              }}
            />
            <img
              title={isRevealPwd ? "Hide password" : "Show password"}
              src={isRevealPwd ? hidePwdImg : showPwdImg}
              onClick={() => setIsRevealPwd((prevState) => !prevState)}
              alt=""
              style={{width:"23px",height:"22px",cursor:"pointer",position:"absolute",marginLeft:"-35px",marginTop:"5px"}}
            />
          
            <div className="Change_Forget"><br></br>
            {/*<NavLink to="/changepassword" style={{marginTop:"10px"}}>Change password </NavLink>*/}
            <NavLink to="/register" style={{marginTop:"10px"}}>Don't have an account ? get started </NavLink> <br></br><br></br>
            <NavLink to="/forget" style={{marginTop:"10px"}}>Change or Forget password ? </NavLink>
          </div>
          </div>
          
        </fieldset>
        
        <div>
          <input
            className="f6 grow br2 ph3 pv2 mb2 dib white"
            style={{
              borderStyle: "none",
              width: "100%",
              backgroundColor: "#F3912E",
            }}
            type="submit"
            value="Login"
            onClick={LoginPage}
          />
        </div>
      </form>
    </main>
    </div>
    
  )
}

export default Login
