import {signOut} from "firebase/auth";
import {useNavigate} from "react-router-dom";
import {auth} from "../utils/firebase"
import { useSelector } from "react-redux";

const Header=()=> {
   const navigate=useNavigate();
  const user=useSelector((store)=>store.user);
  const handleSignOut=()=> {
    signOut(auth)
    .then(()=>{
      navigate("/");
    })  .catch((error)=>{
          // An error happened.
          navigate("/error");
    });
  };
  
  return  (
    <div className="absolute w-screen px-8 py-4  z-10 flex justify-between">
        <img
        className="w-44"
        src="https://static.wixstatic.com/media/2ed9b9_514fe584406c4bcf9ab2285b120daaf0~mv2.png/v1/fill/w_225,h_66,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/GSP-colored.png" alt="logo"/>
         {user&&(<div className="flex p-2">
         <img className="w-12 h-12" alt="usericon" 
         src="{user.photoURL}"
         />
        <button onClick={handleSignOut}  className="font-bold text text-red-500">SignOut</button>
    </div>)}
    </div>
);
};

export default Header;