import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";



const pizzaData = [
    {
      name: "Focaccia",
      ingredients: "Bread with italian olive oil and rosemary",
      price: 6,
      photoName: "pizzas/focaccia.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Margherita",
      ingredients: "Tomato and mozarella",
      price: 10,
      photoName: "pizzas/margherita.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Spinaci",
      ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
      price: 12,
      photoName: "pizzas/spinaci.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Funghi",
      ingredients: "Tomato, mozarella, mushrooms, and onion",
      price: 12,
      photoName: "pizzas/funghi.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Salamino",
      ingredients: "Tomato, mozarella, and pepperoni",
      price: 15,
      photoName: "pizzas/salamino.jpg",
      soldOut: true,
    },
    {
      name: "Pizza Prosciutto",
      ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
      price: 18,
      photoName: "pizzas/prosciutto.jpg",
      soldOut: false,
    },
  ];

  







function App() {
  return (
    <div className="container ">
      <Header></Header>
      <Menu></Menu>
      <Footer></Footer>
    </div>
  );
}

function Pizza(props) {
  return (
    <li className="pizza">
      <img src={props.pizzaObj.photoName }  alt="j bhi naam hai"/>
      <div>
      <h3>{props.pizzaObj.name}</h3>
      <p>{props.pizzaObj.ingredients}</p>
      <span>{props.pizzaObj.price}</span>

      </div>
      

    </li>
  );
}

function Header() {
  const style = {};
  return (
    <header className="header">
      <h1 style={style}> BHAI AND BHAI PIZZZ CO. </h1>
    </header>
  );
}

function Menu() {
  return (
    <main className="menu"> 
    <h2> OUR MENU</h2>

    {/* here we adding the data manually 

       <Pizza name="Pizza Focaccia" photoname="./pizzas/focaccia.jpg" price={10}  ingredients="samosa vada"             //other than string everything should be written in curly bracket in this
       />
       <Pizza name="Pizza funghi" photoname="./pizzas/funghi.jpg" price={12}  ingredients="dal chawal"
       />
        <Pizza name="Pizza marghertia" photoname="./pizzas/margherita.jpg" price={14}  ingredients="Roti sabji"
       />
        <Pizza name="Pizza prosciutto" photoname="./pizzas/prosciutto.jpg" price={16}  ingredients="Butter chicken"
       />
        <Pizza name="Pizza salamino " photoname="./pizzas/salamino.jpg" price={18 +10}  ingredients="Chicken65"                  // to add the price by 100 
       />
        <Pizza name="Pizza spinaci" photoname="./pizzas/spinaci.jpg" price={20}  ingredients="Murg Musaalam"
       />  */}




       {/* ADDING DATA FROM LIST OF JSON */}

       Syntax of rendring a list 
       {/* {list Name .map(elementNameTOParse) =>(
        < child-Component-Name  anyvariable-for- complete-object-ko- denote-karne-k liye ={elementNameTOParse}/>)
        )} */}

      <ul className="pizzas">

      {pizzaData.map((x) =>  (

      <Pizza pizzaObj={x}   key="x.name"/>)          // any attribute thatbis unique
      )}
      </ul>
       









    </main>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openhour = 12;
  const closehour = 22;
  const isOpen = hour >= openhour && hour <= closehour;
  console.log(isOpen);

  // if(){
  //     alert("OPEN HAI BHAI");
  // }else{
  //     alert("Close ho gaya hai gh pe jaa kal mast naah dhoke aana")
  // }
  return (
    <footer className="footer">

        {isOpen && (
            <div className="order">
            <p>We are open until {closehour}</p>
            <button className="btn">
                ORDER NOW 

            </button>
        

    
            </div>
        )}
        
      
    </footer>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
