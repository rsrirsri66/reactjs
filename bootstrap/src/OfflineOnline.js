import { useEffect, useState } from "react";
import './App.css';

function OffOn(){
    //Online state
    const [isOnline, setIsOnline]=useState(navigator.onLine);

    useEffect(()=>{
        //update network status
        const handleStatusChange=()=>{
            setIsOnline(navigator.onLine);
        }
        //listen to the online status
        window.addEventListener('online',handleStatusChange);

        //listen to the offline status
        window.addEventListener('offline',handleStatusChange);

        //specify how to clean up after this effect for performance improvment

        return()=>{
            window.removeEventListener('online',handleStatusChange);
            window.removeEventListener('offline',handleStatusChange);
        }

    },[isOnline])

    return(
        <div className="container">
            <h3>
                Welcome to imarticus.com
            </h3>
            <p>
                Turn on/off your wifi to see what happens
            </p>
            {isOnline?(
                <h1 className="online">You are Online</h1>
            ):(
                <h1 className="offline">You are offline</h1>
            )}
        </div>
    )
}
export default OffOn;