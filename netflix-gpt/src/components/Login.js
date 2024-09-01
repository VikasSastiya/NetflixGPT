import Header from './Header';
import { useState,useRef } from 'react';
import {checkValidData} from "../utils/validate.js"
const Login = () => {
  const [isSignInForm ,setIsSignForm]=useState(true);
  const[errorMesage,setErrorMessage]=useState(null);

  const name=useRef(null);
  const email=useRef(null);
  const password=useRef(null);

  const handleButtonClick=()=> {
      //   Validate the form data
   // checkValidData(email,password)

   console.log(email.current.value);
   console.log(password.current.value);

   const message=checkValidData(email.current.value,password.current.value);
   setErrorMessage(message);

   // Sign in / Sign Up
  };

  const toggleSignInForm=()=>{
    setIsSignForm(!isSignInForm);
  };
  return (
  
    <div>
            <Header/>
            <div className="absolute w-full h-full" >
            <img src="https://www.pearsonaccelerated.com/content/dam/websites/accelerated-pathways/blog-images/study-at-home-without-going-crazy.jpg" alt="logo" class="w-full h-full"/>
    </div>
    
     <form onSubmit={(e)=>e.preventDefault()} className="w-3/12 absolute p-12 bg-yellow-700 my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-40">
      <h1 className="font-bold text-3xl py-4">{isSignInForm? "Sign In":"Sign Up"}</h1>
      {!isSignInForm&&(<input type="text" placeholder="Full Name" className="p-4 my-2 w-full placeholder-white bg-yellow-600"/>)}
  
    <input ref={email} type="text" placeholder="Email Address" className="p-4 my-2 w-full placeholder-white bg-yellow-600"/>
 
    <input ref={password} type="password" placeholder="Password" className="p-4 my-2 w-full placeholder-white bg-yellow-600"/>
      <p className='text-red-500 font-bold text-lg py-2'>{errorMesage}</p>
     <button className="p-4 my -6 bg-orange-700 w-full rounded-lg" onClick={handleButtonClick}>{isSignInForm? "Sign In":"Sign Up"}</button>
     <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>{isSignInForm? "New to Globel School? SignUp Now":"Already registered? SignUp now"}</p>
    </form>
    </div>
   
  );
};

export default Login;