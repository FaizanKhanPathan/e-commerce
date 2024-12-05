import React, { useEffect, useState } from "react";

// Helper function to format time in hh:mm:ss with labels
const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;
    return `${String(hours).padStart(2, '0')}hh ${String(minutes).padStart(2, '0')}mm ${String(remainingSeconds).padStart(2, '0')}ss`;
};

const DeliveryTimer = () => {

    // State to hold the time remaining in seconds
    const [timeRemaining, setTimeRemaining] = useState(0);

    // Function to calculate the time remaining until the next 6 PM
    const calculateTimeTo6PM = () => {
        const now = new Date();
        const targetTime = new Date(now);
        targetTime.setHours(18, 0, 0, 0); // Set target to 6 PM today

        // If it's already past 6 PM, set target for 6 PM tomorrow
        if (now >= targetTime) {
            targetTime.setDate(now.getDate() + 1); // Move to the next day
        }

        return Math.floor((targetTime - now) / 1000); // Return time in seconds
    };

    // Start the timer when component mounts
    useEffect(() => {
        // Set the initial time to countdown until the next 6 PM
        setTimeRemaining(calculateTimeTo6PM());

        // Setup interval to update the countdown every second
        const interval = setInterval(() => {
            setTimeRemaining((prevTime) => {
                // If time remaining is 0, restart the timer at 6 PM
                if (prevTime <= 0) {
                    return calculateTimeTo6PM(); // Reset to 6 PM
                }
                return prevTime - 1; // Otherwise, decrement by 1 second
            });
        }, 1000); // Update every second

        return () => clearInterval(interval); // Cleanup on component unmount
    }, []);


    return (
        // <div className='outer-container'>
        //     <div className='inner-container w-96 w-24 transition duration-300 delay-150'>
        //         <h1 className="text-end">FedEx</h1>
        //         <h1 className="text-end">Cutoff</h1>
        //         {/* <p>{formatTime(timeRemaining)}</p> */}
        //     </div>
        // </div>
        <div className='group'>
            <div className='inner-container w-24 group-hover:w-96 transition-all duration-1000 ease-in-out'>
                <div className="">
                    <h1 className="text-end">FedEx</h1>
                    <h1 className="text-end">Cutoff</h1>
                </div>
            </div>
        </div>
    );
};

export default DeliveryTimer;
