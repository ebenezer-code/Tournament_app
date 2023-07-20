import React from "react";


function FinalRound({player}) {
    const {_id, challenged, challenger} = player;
    return(
        <section key={_id}>
                <ul>
                    <div>
                        <li>1</li>
                        <li>{`${challenged.firstname} ${challenged.lastname}`}</li>
                    </div>
                    <div>
                        <li>2</li>
                        <li>{`${challenger?.firstname} ${challenger?.lastname}`}</li>
                    </div>
                </ul>
       </section>
    )
}

export default FinalRound;