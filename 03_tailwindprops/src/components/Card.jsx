import React from "react";

function Card({username, textBtn="Visit Me"}) {
    // console.log(username);
    // console.log(props.username);
    
    
    return(
        <>
            <div className="w-52 mx-auto bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden mt-4">
                <img className="w-52 h-32" src="https://www.shutterstock.com/shutterstock/photos/721402717/display_1500/stock-photo-cute-little-boy-in-school-uniform-with-briefcase-in-the-park-in-autumn-721402717.jpg" alt="Card Image"/>
                <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-800">{username}</h2>
                <p className="mt-2 text-gray-600">This is a simple description for the TailwindCSS card. You can customize it as needed!</p>
                <button className="mt-4 w-full bg-blue-500 text-white font-medium py-2 px-4 rounded hover:bg-blue-600">
                {textBtn}
                </button>
                 </div>
           </div>
        </>
    )
}

export default Card