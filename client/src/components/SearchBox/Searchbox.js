import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
import './Searchbox.css'
const Searchbox = () => {
    const[words,setWords]=useState("");
   const navigate= useNavigate();


    const searchhandler=(e)=>{
        e.preventDefault();
       
        if(words.trim()){
navigate (`/search/${words}`)
        }
        else{
            navigate("/")
        }
    }
  return (
    <div className='search'>
        <form onSubmit={searchhandler} >
        <input type="text" className="searchbox"  value={words} name="query" onChange={(e)=>setWords(e.target.value)} placeholder="search"/>

        <button type="submit" className='searchbutton mx-2 btn btn-sm' ><i className='fa fa-search'></i></button>
        </form>
    </div>
  )
}

export default Searchbox