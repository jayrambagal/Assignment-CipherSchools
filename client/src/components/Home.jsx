import './Home.css'
import React, { useState } from "react";
import { FaSeedling } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Home = () => {

  const history = useNavigate();
  const callAboutPage = async () =>{
    try{
      const res = await fetch("/home",
      {
        method:'GET',
        headers:{Accept:'application/json',
                "Contact-Type":'application/json'
                },
        credentials:'include'
      })
      console.log(res.status)
      const data = res.json()
      if(!res.status===200 || !data){
        console.log(data);
        throw new Error("user not found")
      }else if(res.status === 401 || res.status===403){
        history('/')
      }
    }catch(error){
        console.log(error);
    }
  }
  useEffect(()=>{
    callAboutPage();
  })
  
  const LogOut = async () =>{
    try{

        const res = await fetch("/logout",{
            method:'GET',
            headers:{Accept:'application/json',
                    "Contact-Type":'application/json'
                    },
            credentials:'include'
        })

        const data = await res.json()
        console.log(data)

        if (!res.status===200 || !data){
            const error = new Error(res.error)
            throw error
        }else{
                history("/")
        }

    }catch(err){
        history("/")
        console.log(err);
    }
}

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
        <h1 >Welcome to the Future of Learning!</h1>
        <input
            className="f6 grow br2 ph3 pv2 mb2 dib white"
            style={{
              borderStyle: "none",
              width: "100px",
              backgroundColor: "#F3912E",
            }}
            type="submit"
            value="Logout"
            onClick={LogOut}
          />
        </div>
      </div>
  )
}

export default Home
