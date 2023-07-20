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
    <section className=" w-screen min-h-screen bg-[#F7F7F7] py-20">
        <main className="bg-white container mx-auto rounded-[20px] p-4">
             <nav className=" flex items-center justify-between border-b py-2">
                <h1 className="tracking-[0.14px] text-[14px] text-[#0E0E0E]">{`Round ${firstPage}`}</h1>
                <div className="flex items-center space-x-6">
                    <GrFormPrevious onClick={prevPage} />
                    {numbers.map((n, index) => {
                        return (<li key={index} className="list-none"><button className={`page item ${firstPage === n? "bg-[#A8d841] text-[#FFF]" : ""} p-2 text-[12px] font-medium tracking-[0.12px]`} onClick={() => changeCurrentPage(n)}>{n}</button></li>
                    )})}
                   <GrFormNext onClick={nextPage}/>
                </div>
            </nav>
            <div className=" grid grid-cols-3 mt-[20px]">
                <div className="grid grid-cols-2 col-span-2 gap-6 ">
                    { tournaments.filter((item, index) => index <=3 ).map((player, index) => {
                    return (
                        <FirstRound player = {player} key={index} setTournaments = {setTournaments}/>
                    )
                    })}
                </div>
                <Footer />
            </div>
        <div className="flex justify-center items-center mt-40">
          <button onClick={() => changeCurrentPage(numbers[1])} className=" bg-[#9CD326] w-[422px] h-[52px] rounded">Proceed to Round 2</button>
        </div>
       
     </main>       
    </section>
       
           
        )
    } else if(firstPage === 2) {
        return (
        <section className=" w-screen min-h-screen bg-[#F7F7F7] py-20">
            <main className="bg-white container mx-auto rounded-[20px] p-4">
                <nav className=" flex items-center justify-between border-b py-2">
                <h1 className="tracking-[0.14px] text-[14px] text-[#0E0E0E]">{`Round ${firstPage}`}</h1>
                <div className="flex items-center space-x-6">
                    <GrFormPrevious onClick={prevPage}/>
                    {numbers.map((n, index) => {
                        return (<li key={index} className="list-none"><button onClick={() => changeCurrentPage(n)} className={`page item ${firstPage === n? "bg-[#A8d841] text-[#FFF]" : ""} p-2 text-[12px] font-medium tracking-[0.12px]`}>{n}</button></li>
                    )})}
                   <GrFormNext onClick={nextPage}/>
                </div>
            </nav>
         <div className=" grid grid-cols-3 mt-[20px]">
            <div className="grid grid-cols-2 col-span-2 gap-6 ">
            { tournaments.filter((item, index) => index >=4 && index <=5 ).map((player, index) => {
            return (
                <SecondRound player = {player} key={index} setTournaments = {setTournaments}/>
            )
           })}
            </div>
            <Footer />
        </div>
          
           <div className="flex justify-center items-center mt-40">
            <button onClick={() => changeCurrentPage(numbers[2])}  className=" bg-[#9CD326] w-[422px] h-[52px] rounded">Proceed to Round 3</button>
           </div>
           
            </main>
            
        </section>
           
        )
    } else if(firstPage === 3) {
        return (
<section className=" w-screen min-h-screen bg-[#F7F7F7] py-20">
            <main className="bg-white container mx-auto rounded-[20px] p-4">
                <nav className=" flex items-center justify-between border-b py-2">
                <h1 className="tracking-[0.14px] text-[14px] text-[#0E0E0E]">{`Round ${firstPage}`}</h1>
                <div className="flex items-center space-x-6">
                    <GrFormPrevious onClick={prevPage}/>
                    {numbers.map((n, index) => {
                        return (<li key={index} className="list-none"><button onClick={() => changeCurrentPage(n)} className={`page item ${firstPage === n? "bg-[#A8d841] text-[#FFF]" : ""} p-2 text-[12px] font-medium tracking-[0.12px]`}>{n}</button></li>
                    )})}
                   <GrFormNext onClick={nextPage}/>
                </div>
            </nav>
         <div className=" grid grid-cols-3 mt-[20px]">
            <div className="grid grid-cols-2 col-span-2 gap-6 ">
            { tournaments.filter((item, index) => index > 5 ).map((player, index) => {
            return (
                <FinalRound player = {player} key={index} setTournaments = {setTournaments}/>
            )
           })}
            </div>
            <Footer />
        </div>
          
           
            </main>
            
        </section>
          
        )
    }
    
}


export default App;