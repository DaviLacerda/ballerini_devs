import { useState, useEffect } from "react";
import { getAuth } from "firebase/auth";

export function User() {
    const [user, setUser] = useState(undefined)
    const gitHubUser = window.location.href.split("/")[4];
    const auth = getAuth();

    useEffect(() => {
      auth !== null && setUser(auth.currentUser.displayName)
    }, [auth])
    
    console.log(user);

    return (
        <>
            {
                user !== undefined && <h1>{user}</h1>
            }
        </>
    );
}
