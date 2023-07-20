import React, { useEffect, useState } from "react";


function FirstRound({player}) {
    const {_id, challenged, challenger, winner} = player;
    const [isChallenger, setIsChallenger] = useState(false);
    const [isChallenged, setIsChallenged] = useState(false);
    useEffect(() => {
        if(challenger.firstname === winner?.firstname) {
            setIsChallenger(true);
        }
        if(challenged?.firstname === winner?.firstname) {
            setIsChallenged(true);
        }
    },[challenged, challenger, winner]);
    return(
        <section key={_id}>
                <table className="rounded-2xl border">
                 <tbody>
                    <tr>
                    <td className= {`${isChallenged? "bg-[#82B020]" : "bg-[#AFAFAF]"} p-2 border`}>1</td>
                    <td className="p-2 border">{`${challenged? challenged.firstname: "Ogunyemi"} ${challenged? challenged.lastname: "Timilehin"}`}</td>
                    </tr>
            
                    <tr>
                    <td className= {`${isChallenger? "bg-[#82B020]" : "bg-[#AFAFAF]"} p-2 border`}>2</td>
                    <td className="p-2 border">{`${challenger?.firstname} ${challenger?.lastname}`}</td>
                    </tr>
                </tbody>
                </table>
       </section>
    )
}

export default FirstRound;