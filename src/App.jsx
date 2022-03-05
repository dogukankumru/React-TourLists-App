import './index.css';
import axios from "axios"
import { useEffect, useState } from 'react';
import Header from "./components/Header"
import TourList from "./components/TourList"

function App(){
  const [tours,setTours]=useState([]);
  const[readMore,setReadMore]=useState(false);

  function deleteTour(id){
    setTours(tours.filter((tour)=>tour.id!==id));
  }

  function refreshPage(){
    fetchData();
  }

  // *************************** 
  //Taking data from website
  const fetchData = async () =>{
    const url ='https://course-api.com/react-tours-project';
    const response = await axios.get(url)
    setTours(response.data)
  }
  useEffect(()=>{
    fetchData();
  },[])
  // //*************************** 



  return(
    <div className="container">
        <Header tours={tours} refreshPage={refreshPage}/>
        <TourList tours={tours} deleteTour={deleteTour} readMore={readMore} setReadMore={setReadMore}/>
    </div>
  )
}

export default App;
