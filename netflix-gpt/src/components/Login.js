import Header from './Header';
import { useState } from 'react';
const Login = () => {
  const [isSignInForm ,setIsSignForm]=useState(true);

  const toggleSignInForm=()=>{
    setIsSignForm(!isSignInForm);
  };
  return (
  
    <div>
            <Header/>
            <div className="absolute w-full h-full" >
            <img src="https://i.pinimg.com/originals/f2/58/14/f258140582ce9fb7dfa524cd06a8b290.jpg" alt="logo" class="w-full h-full"/>
    </div>
    
     <form className="w-3/12 absolute p-12 bg-yellow-700 my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-40">
      <h1 className="font-bold text-3xl py-4">{isSignInForm? "Sign In":"Sign Up"}</h1>
      {!isSignInForm&&(<input type="text" placeholder="Full Name" className="p-4 my-2 w-full placeholder-white bg-yellow-600"/>)}
  
    <input type="text" placeholder="Email Address" className="p-4 my-2 w-full placeholder-white bg-yellow-600"/>
 
    <input type="password" placeholder="Password" className="p-4 my-2 w-full placeholder-white bg-yellow-600"/>
     <button className="p-4 my -6 bg-orange-700 w-full rounded-lg">{isSignInForm? "Sign In":"Sign Up"}</button>
     <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>{isSignInForm? "New to Globel School? SignUp Now":"Already registered? SignUp now"}</p>
    </form>
    </div>
   
  );
};

export default Login;