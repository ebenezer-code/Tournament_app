import { useState } from "react";
import Data from "./data.json";
import FirstRound from "./Components/FirstRound";
import SecondRound from "./Components/SecondRound";
import FinalRound from "./Components/FinalRound";
import Footer from "./Components/Footer";
import {GrFormNext, GrFormPrevious} from "react-icons/gr"




function App() {
    const [firstPage, setFirstPage] = useState(1);
    const [tournaments, setTournaments] = useState(Data);

   
    
    const nPage = Math.ceil(Data.length / 3);
    const numbers = [...Array(nPage+ 1).keys()].slice(1);



    const prevPage = () => { 
           if(firstPage !== 1){
            setFirstPage(firstPage - 1);
           }
       
    }
    const changeCurrentPage = (id) => {
       setFirstPage(id);
    }
    const nextPage = () => {
        if(firstPage !== nPage) {
            setFirstPage(firstPage + 1);
        }
    
    }
    if(firstPage === 1) {
        return(
    <section>
         <div>
             <nav>
                <h1>{`Round ${firstPage}`}</h1>
                <div>
                    <GrFormPrevious onClick={prevPage}/>
                    {numbers.map((n, index) => {
                        return (<li key={index} className={`page item ${firstPage === n? "active" : ""}`}><button onClick={() => changeCurrentPage(n)}>{n}</button></li>
                    )})}
                   <GrFormNext onClick={nextPage}/>
                </div>
            </nav>
          { tournaments.filter((item, index) => index <=3 ).map((player, index) => {
            return (
                <FirstRound player = {player} key={index} setTournaments = {setTournaments}/>
            )
           })}
           <Footer />

        </div>
        <button onClick={() => changeCurrentPage(numbers[1])}>Proceed to Round 2</button>
    </section>
       
           
        )
    } else if(firstPage === 2) {
        return (
        <section>
             <div>
                <nav>
                <h1>{`Round ${firstPage}`}</h1>
                <div>
                    <GrFormPrevious onClick={prevPage}/>
                    {numbers.map((n, index) => {
                        return (<li key={index} className={`page item ${firstPage === n? "active" : ""}`}><button onClick={() => changeCurrentPage(n)}>{n}</button></li>
                    )})}
                   <GrFormNext onClick={nextPage}/>
                </div>
            </nav>
          { tournaments.filter((item, index) => index >=4 && index <=5 ).map((player, index) => {
            return (
                <SecondRound player = {player} key={index} setTournaments = {setTournaments}/>
            )
           })}
           <Footer />
            </div>
            <button onClick={() => changeCurrentPage(numbers[2])}>Proceed to Round 3</button>
        </section>
           
        )
    } else if(firstPage === 3) {
        return (
            <div>
                <nav>
                <h1>{`Round ${firstPage}`}</h1>
                <div>
                    <GrFormPrevious onClick={prevPage}/>
                    {numbers.map((n, index) => {
                        return (<li key={index} className={`page item ${firstPage === n? "active" : ""}`}><button onClick={() => changeCurrentPage(n)}>{n}</button></li>
                    )})}
                   <GrFormNext onClick={nextPage}/>
                </div>
            </nav>
          { tournaments.filter((item, index) => index > 5 ).map((player, index) => {
            return (
                <FinalRound player = {player} key={index} setTournaments = {setTournaments}/>
            )
           })}
           <Footer />
            </div>
        )
    }
    
}


export default App;