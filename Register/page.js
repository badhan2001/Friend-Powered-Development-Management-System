import React from "react";
//import { IonIcon } from '@ionic/react';
import {FaLinkedinIn, FaGoogle, FaEnvelope} from 'react-icons/fa';
import {MdLockOutline} from 'react-icons/md';
import { SiNamecheap } from "react-icons/si";
// import { CiUser } from "react-icons/ci";
import { CiCalendarDate } from "react-icons/ci";
import { FaPhone } from "react-icons/fa6";
import { IoIosContacts } from "react-icons/io";
import { BsCalendarDateFill } from "react-icons/bs";
import { GiConfirmed } from "react-icons/gi";
//import { useState, useEffect } from 'react';
export default function Register(){
  
    return(
        
        <div>
        <div className="mt-10 flex flex-col items-center justify-center min-h-screen py-2 rounded-xl">
        <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center rounded-xl">
            
            <div className="bg-white rounded-2xl shadow-2xl  w-2/3 max-w-4xl items-center justify-center rounded-xl">
               <div className="text-black w-3/2 p-3 text-center rounded-xl">
                <div className="py-10">
                   <h2 className="text-3xl font-bold text-black-100 mb-2 ">Registration Form</h2>
               
                

                {/* <p className="text-gray-400 my-3">or use your email account</p> */}
                <div className="flex flex-col items-center rounded-xl">
                  
                  
                  <div className="bg-gray-100 w-64 p-2 flex items-center mb-3"><SiNamecheap className="text-gray-400 m-2"/>
                   <input type="first_name" name="first_name" placeholder="First Name" className="bg-gray-100 outline-none text-sm flex-1"/>
                  </div>
                  <div className="bg-gray-100 w-64 p-2 flex items-center mb-3"><SiNamecheap className="text-gray-400 m-2"/>
                   <input type="last_name" name="last_name" placeholder="Last Name" className="bg-gray-100 outline-none text-sm flex-1"/>
                  </div>
                  <div className="bg-gray-100 w-64 p-2 flex items-center mb-3"><CiCalendarDate className="text-gray-400 m-2"/>
                   <input type="date_of_birth" name="date_of_birth" placeholder="Date of Birth" className="bg-gray-100 outline-none text-sm flex-1"/>
                  </div>
                  <div className="bg-gray-100 w-64 p-2 flex items-center mb-3"><FaEnvelope className="text-gray-400 m-2"/>
                   <input type="email" name="email" placeholder="Email" className="bg-gray-100 outline-none text-sm flex-1"/>
                  </div>
                  <div className="bg-gray-100 w-64 p-2 flex items-center mb-3"><MdLockOutline className="text-gray-400 m-2"/>
                   <input type="new password" name="new password" placeholder="New Password" className="bg-gray-100 outline-none text-sm flex-1"/>
                  </div>
                  <div className="bg-gray-100 w-64 p-2 flex items-center mb-3"><GiConfirmed className="text-gray-400 m-2"/>
                   <input type="confirm new password" name="confirm new password" placeholder="Confirm New Password" className="bg-gray-100 outline-none text-sm flex-1"/>
                  </div>
                  <div className="bg-gray-100 w-64 p-2 flex items-center mb-3"><FaPhone className="text-gray-400 m-2"/>
                   <input type="phone_number" name="phone_number" placeholder="Phone_Number" className="bg-gray-100 outline-none text-sm flex-1"/>
                  </div>
                  
                  {/* <div className="bg-gray-100 w-64 p-2 flex items-center mb-3"><IoIosContacts className="text-gray-400 m-2"/>
                   <input type="role" name="role" placeholder="Role" className="bg-gray-100 outline-none text-sm flex-1"/>
                </div> */}
                  <div className="bg-gray-100 w-64 p-2 flex items-center mb-3"><BsCalendarDateFill className="text-gray-400 m-2"/>
                   <input type="join date" name="join date" placeholder="Join Date" className="bg-gray-100 outline-none text-sm flex-1"/>
                  </div> 
                  
                  <a href="#" className="border-2 border-black-1000 text-black-500 rounded-full px-12 py-2 inline-block font-semibold hover:bg-black-500 hover:text-white">Register</a>
                </div>
                </div>
               </div>
            </div>
            </main>
            </div>
        </div>
        
    );
}