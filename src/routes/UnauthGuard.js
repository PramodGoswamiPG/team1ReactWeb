import React, { useEffect } from 'react';


const UnauthGuard = ({component}) => {
    useEffect(() => {
        console.log("Unauth Guard");
    }, []);

    return <>{component}</>
}

export default UnauthGuard;