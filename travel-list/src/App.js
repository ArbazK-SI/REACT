import { useState } from "react";
import "./index.css";
const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
];

function App() {
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  );
}

function Logo()
{
  return <h1> 🌴Far Away</h1>
}

function Form(){
  const [quantity,setQuantity]=useState(1);
  const [description,setDescription]=useState("");;

  function handleSubmit(event){
    event.preventDefault();

    // if description is empty return

    if(!description) return;

    // store the out put in the variable

    const newItem={description,quantity,packed :false}
    console.log(newItem)

    //setting it back to normal state
    setDescription("")
    setQuantity(1);

  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>
        What do you need for your 😍 Trip ? 
      </h3>

      <select value={quantity} onChange={(e)=> setQuantity(Number(e.target.value))}>
        <option value={1}> 1</option>
        <option value={2}> 2</option>
        <option value={3}> 3</option>
        <option value={4}> 4</option>
        <option value={5}> 5</option>
        <option value={6}> 6</option>
        <option value={7}> 7</option>
        <option value={8}> 8</option>
        <option value={9}> 9</option>
        <option value={10}> 10</option>
       
      </select>
      <input type="text" placeholder="Item..." value={description} onChange={(e)=> setDescription(e.target.value)} />
      <button>Add</button>
     
    </form>
  );
}
















function PackingList(){
  return(
    <div className="list">
    <ul>
      {initialItems.map((x)=>(
        <Items  objItem ={x} key={x.id}
      />))}
      

    </ul>
    </div>

  );
}
function Items({objItem}){
  return(
    <li>
      <span style={objItem.packed ? {textDecoration:"line-through"}:{}}>
        {objItem.description} {objItem.quantity}</span>
      <button>
         ❌
      </button>
      
    </li>

  );
}
    

function Stats(){
  return(
    <footer className="stats">
      <em>👜 You have X items on your list, and you already Packed X (X%)</em>
    </footer>

  );
}


export default App;
