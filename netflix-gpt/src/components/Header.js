import {onAuthStateChanged, signOut} from "firebase/auth";
import {useEffect} from "react"
import {auth} from "../utils/firebase"
import { useSelector ,useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import {LOGO, USER_AVATAR} from "../utils/constants.js"

import {addUser,removeUser} from "../utils/userSlice";

const Header=()=> {
  const dispatch=useDispatch();
   const navigate=useNavigate();
  const user=useSelector((store)=>store.user);
  const handleSignOut=()=> {
    signOut(auth)
    .then(()=>{})
    .catch((error)=>{
          // An error happened.
          navigate("/error");
    });
  };

  useEffect(()=> {
  const unsubscribe = onAuthStateChanged(auth,(user)=> {
    if(user) {
      const {uid,email,displayName,photoURL}=user;
      dispatch(
        addUser({
          uid:uid,
          email:email,
          displayName:displayName,
          photoURL:photoURL,
        })
      );
      navigate("/browser");
    } else {
      dispatch(removeUser());
      navigate("/");
    }
  });

     // Unsubscribe when component unmount
    return ()=> unsubscribe();
  },[]);
  
  return  (
    <div className="absolute w-screen px-8 py-4  z-10 flex justify-between">
        <img
        className="w-44"
        src={LOGO} alt="logo"/>
         {user&&(<div className="flex p-2">
         <img className="w-12 h-12" alt="usericon" 
         src={USER_AVATAR}
         />
        <button onClick={handleSignOut}  className="font-bold text text-red-500">SignOut</button>
    </div>)}
    </div>
);
};

export default Header;