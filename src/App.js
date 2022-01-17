import logo from './logo.svg';
import './App.css';
import React from 'react';
// import React,{useState,useEffect} from 'react';

function App() {

  const [catFacts,setCatFacts]=React.useState([])

  React.useEffect(()=>{
    getNewCatfact();
  }, [])

  const getNewCatfact=()=>{

    if(catFacts.length>2){
    setCatFacts(catFacts.slice(1))
  }

  fetch("https://catfact.ninja/fact?max_length=140")
    .then(res => res.json())
    .then(
      (result)=>{
        console.log(result);
        setCatFacts(catFacts=>[...catFacts,result]);
        // Note:...catch errors, instead of catch() 
      },  
      (error)=>{
        //setIsLoaded(true);
        //setError(Error);
      }
    
    )
  }
  return (
    <>
    {/* Create a new application
    get a single cat fact from catFacts.ninja
    render it to the screen
    Create a button to get a new catfact and add it to the list of catFacts
    if there are more than 3 facts when user clicks the button, delete the oldest one */}
    <div className='App'>
      {catFacts.length > 0 && 
        catFacts.map((catFact,index)=>{
            return(
             
              
              <div className="catFact" key={index}>{catFact.fact}</div>

            )
        })
      }
      <div className="button" onClick={()=>getNewCatfact()}>button</div>
    </div>
   
       
    </>
  );
 }

export default App;
