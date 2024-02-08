import React, { useEffect } from "react";
import { github, google } from "../assets";
import { getAuth, signInWithPopup, GoogleAuthProvider,signOut } from "firebase/auth";
import app from '../firebase.config'
import { ToastContainer, toast } from "react-toastify";



export default function Login() {
    const auth = getAuth();

const provider =new GoogleAuthProvider()

  const handleGoogleLogin = (e) => {
    e.preventDefault();
    signInWithPopup(auth , provider).then((result)=>{
        const user = result.user
        console.log(user)
    }).catch((error)=>{
        console.log(error)
    })
  };

  const handelSingOut =()=>{
    signOut(auth).then(()=>{
        toast.success("Log Out Successfully!!")
        // dispatch(removeUser())
    }).catch((error)=>{
        console.log(error)
    })
  }
  return (
    <div className="w-full flex flex-col items-center justify-center gap-10 py-20">
      <div className="w-full flex items-center justify-center gap-10">
        <div onClick={handleGoogleLogin} className="text-base w-60 h-12 tracking-wide border-[1px] border-gray-400 rounded-md flex items-center jus  gap-2 hover:border-blue-600 cursor-pointer duration-300">
          <img src={google} alt="image google" className="w-8 gap-3 m-5" />
          <span className="text-sm text-gray-900">Sing in with Google</span>
        </div>
        <button onClick={handelSingOut} className="bg-black text-white text-base py-3 px-8 tracking-wide rounded-md hover:bg-gray-800 duration-300">Sign Out</button>
      </div>

      <div className="w-full flex items-center justify-center gap-10">
        <div className="text-base w-60 h-12 tracking-wide border-[1px] border-gray-400 rounded-md flex items-center jus  gap-2 hover:border-blue-600 cursor-pointer duration-300">
          <img src={github} alt="image google" className="w-8 gap-3 m-5" />
          <span className="text-sm text-gray-900">Sing in with GitHub</span>
        </div>
        <button className="bg-black text-white text-base py-3 px-8 tracking-wide rounded-md hover:bg-gray-800 duration-300">Sign Out</button>
      </div>
      <ToastContainer
        position="top-left"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
}
