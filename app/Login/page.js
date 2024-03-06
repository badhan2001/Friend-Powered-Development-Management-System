import React from "react";
//import { IonIcon } from '@ionic/react';
import {FaLinkedinIn, FaGoogle, FaEnvelope} from 'react-icons/fa';
import {MdLockOutline} from 'react-icons/md';
export default function Login(){
    return(
        <div className="mt-10 flex flex-col items-center justify-center min-h-screen py-2">
        <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
            {/* <li>
                Sadman Sami Khan<br/>Mobile-<br/>Email-
            </li>
            <li>
                Badhan Talukder<br/>Mobile-<br/>Email-
            </li> */}
            <div className="bg-white rounded-2xl shadow-2xl  w-2/3 max-w-4xl items-center justify-center">
               <div className="text-black w-3/2 p-3 text-center">
                <div className="py-10">
                   <h2 className="text-3xl font-bold text-black-100 mb-2 ">Log in to your account</h2>
                <div className="border-2 w-10 border-black-100 inline-block mb-2"></div>
                <div className="flex justify-center my-2">
                    <a href="#" className="border-2 border-gray-200 rounded-full p-3 mx-1">
                      <FaGoogle className="text-sm"/>
                    </a>
                    <a href="#" className="border-2 border-gray-200 rounded-full p-3 mx-1">
                      <FaLinkedinIn className="text-sm"/>
                    </a>
                </div>
                <p className="text-gray-400 my-3">or use your email account</p>
                <div className="flex flex-col items-center">
                  <div className="bg-gray-100 w-64 p-2 flex items-center mb-3"><FaEnvelope className="text-gray-400 m-2"/>
                   <input type="email" name="email" placeholder="Email" className="bg-gray-100 outline-none text-sm flex-1"/>
                  </div>
                  <div className="bg-gray-100 w-64 p-2 flex items-center mb-3"><MdLockOutline className="text-gray-400 m-2"/>
                   <input type="password" name="password" placeholder="Password" className="bg-gray-100 outline-none text-sm flex-1"/>
                  </div>
                  <div className="flex justify-between w-64 mb-5">
                    <label className="flex items-center text-xs"><input type="checkbox" name="remember" className="mr-1"/>Remember me?</label>
                    <a href="#" className="text-xs">Forget Password?</a>
                  </div>
                  <a href="#" className="border-2 border-black-1000 text-black-500 rounded-full px-12 py-2 inline-block font-semibold hover:bg-black-500 hover:text-white">Sign-in</a>
                </div>
                </div>
               </div>
            </div>
            </main>
            </div>
      
    );
}

