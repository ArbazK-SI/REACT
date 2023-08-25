
import React from 'react';
import  FunChild from "./funchild"


function App() {
  const power= 10;
  const version = 100;
  

 

  return (
    <div >
      <h1>PARENT COMPONENT</h1>
      <FunChild power={power} version={version}/>
     
      
   
    </div>
  );
}

export default App;
