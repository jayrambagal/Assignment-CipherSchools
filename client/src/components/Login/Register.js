import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import logo2 from '../assets/logo2.png';
import "./login.css"
import logoname from "../assets/logoname.png"
// import { useNavigate } from 'react-router-dom';


const Register = () => {

    const [email,setEmail] = useState()
    const [password,setPassword] = useState()
    const [firstname,setFirstname] = useState()
    const [lastname,setLastname] = useState()
    const [phone,setPhone] = useState()

    

  return (
    <main
      className="main_login pt5 black-80 center"
      style={{ maxWidth: "50%", maxHeight: "30%", }}
    >

    <div className="ma5 center">
            <img className='' style={{width: '200px', height: 'auto'}} src={logoname} alt='logo'/>
            <h2>Hey, Welcome!</h2>
            <h4>Please provide your Registration details</h4>
        </div>

      <form className="measure" method='POST'>
       
     
        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">

        <div className="mt3">
            <label
              className="db lh-copy f6 mb1"
              htmlFor="full-name"
              style={{ textAlign: "left" }}
            >
              FirstName
            </label>
            <input
              className="f6 br2 ph3 pv2 mb2 dib black w-100"
              type="text"
              name="firstname"
              id="firstname"
              size="30"
              placeholder="firstname"
              value={firstname}
              onChange={(e)=>setFirstname(e.target.value)}
              style={{
                borderStyle: "solid",
                borderWidth: "1px",
                borderColor: "#EAEEF5",
              }}
            />
          </div>

          <div className="mt3">
            <label
              className="db lh-copy f6 mb1"
              htmlFor="full-name"
              style={{ textAlign: "left" }}
            >
              LastName
            </label>
            <input
              className="f6 br2 ph3 pv2 mb2 dib black w-100"
              type="text"
              name="lastname"
              id="lastname"
              size="30"
              placeholder="lastname"
              value={lastname}
              onChange={(e)=>setLastname(e.target.value)}
              style={{
                borderStyle: "solid",
                borderWidth: "1px",
                borderColor: "#EAEEF5",
              }}
            />
          </div>

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

          <div className="mt3">
            <label
              className="db lh-copy f6 mb1"
              htmlFor="full-name"
              style={{ textAlign: "left" }}
            >
              Phone
            </label>
            <input
              className="f6 br2 ph3 pv2 mb2 dib black w-100"
              type="text"
              name="phone"
              id="phone"
              size="30"
              placeholder="phone no"
              value={phone}
              onChange={(e)=>setPhone(e.target.value)}
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
              type="password"
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
            
          
            <div className="Change_Forget">
            {/*<NavLink to="/changepassword" style={{marginTop:"10px"}}>Change password </NavLink>*/}
            <NavLink to="/" style={{marginTop:"10px"}}> Login ? </NavLink> <br></br>
            
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
            // onClick={LoginPage}
          />
        </div>
      </form>
    </main>
  )
}

export default Register
