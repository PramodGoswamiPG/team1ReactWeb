import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from '../components/NavBar';


const AuthGaurd = ({component}) => {

    const navigator= useNavigate();
    const [status, setStatus] = useState(false);


    useEffect(() => {
        console.log("Auth Guard");
        verifyToken();
    }, []);

    const verifyToken=()=>{
       const userToken= localStorage.getItem("USER_TOKEN");
       console.log(userToken)
       if(!userToken)
       {
            navigator("/");
       }

       if(userToken && userToken.length>0)
       {
            setStatus(true);
       }

    }

    return status?<><NavBar/>{component}</>:<><h1>Un-Authorized acess Please login</h1>
    </>
}

export default AuthGaurd;