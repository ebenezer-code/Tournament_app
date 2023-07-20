import React from "react";



function Footer () {
    return (
        <div className = "text-[14px]">
            <div className="flex items-center space-x-2">
             <div className=" rounded-full w-[5px] h-[5px] bg-[#E89D2A]"></div>
             <h1>Match is ongoing</h1>
           </div>
           <div  className="flex items-center space-x-2">
           <div className=" rounded-full w-[5px] h-[5px] bg-[#AFAFAF]"></div>
             <h1>Loser of the match</h1>
           </div>
           <div  className="flex items-center space-x-2">
           <div className=" rounded-full w-[5px] h-[5px] bg-[#82B020]"></div>
             <h1>Winner of the match</h1>
           </div>
      </div>
       )
}

export default Footer;