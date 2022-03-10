import { useEffect, useState } from "react";

export const Stopwatch = () => {

    const [timer, setTimer] = useState(1)
    // setInterval(() => {
    //     console.log("msdkfm")
    //     setTimer(timer - 1)
    // }, 5000)
// i use prev = timer
    useEffect(() => {
       var id =  setInterval(() => {
             console.log("Timer", timer)

            // setTimer(timer - 1)

            //setTimer((prev) => prev - 1)

            setTimer((prev) => {
                if(prev >= 100){
                    clearInterval(id);
                    return 0;
                }
                return prev + 1;
            })
        }, 1000)

        return () => {
            clearInterval(id);
            console.log("Unmounting Timer")
        }
    },[])



    return <div id = "timer"><h5>Timer : {timer}</h5></div>
};





// const id = setIntervel()