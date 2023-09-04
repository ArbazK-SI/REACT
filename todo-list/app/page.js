"use client";
import React, { useState } from "react";
const page = () => {

  //Setting the task
  const [task, setTask] = useState("");

  //setting the description
  const [desc, setDesc] = useState("");

  //tas aur description ko ek saath ek array m rakhne k liye
  const [together, setTogether] = useState([]);


  //input m se task value set karega
  function taskHandler(event) {
    setTask(event.target.value);
  }

  //input m se desc ka value set karega
  function descHandler(event) {
    setDesc(event.target.value);
  }

  //like isme humlog ne ek copy task ka variable banaya then usme jo mera array hai usko copy kiya phir uss copy m se vo jo i=index hai usko hata diya
  //  q ki humlog uska key =index i.e i rakha hai  splice karne k baad humlog ne setTogther ko new jo copy task tha vo de diya
  function deleteHandler(i){
    let copyTask=[...together]
    copyTask.splice(i,1)
    setTogether(copyTask)
  }

  //setTogether m purana jo task aur description vo daala by writingf ...together and phir usme new task aur description laga dioya 
  function submitHandler(event) {
    event.preventDefault();
    setTogether([...together, { task, desc }]);

    //usko wapas back to normal karne k liye

    setTask("");
    setDesc("");
  }


   // agar list m kuch nhi hai toh ye print hoga
  let renderlist = <h3>NO Task Availabe</h3>;
  

  //agar jo mera array hai usme already hai value mtlb uska length is greater than 0 then "NO task available nhi print karaunga"
  //infact main list ko render karaunga
  if (together.length > 0) {
    //map method se list ko render kara k usko list tag m print karaya
    //list ko key =index diya so that remove k time identify kar sake
    renderlist = together.map((x,i) => {
      return (
        <li key={i} className="flex items-center justify-between mb-10">
          <div className="flex justify-between mb-5 w-2/3">
            <h5 className="text-2xl font-semibold">{x.task}</h5>
            <h5 className="text-xl font-semibold">{x.desc}</h5>
          </div>
          <button onClick={()=>{deleteHandler(i)}}className="bg-red-400 text-white px-4 py-2 rounded font-bold">Delete</button>
        </li>
      );
    });
  }
  return (
    <>
      <h1 className="bg-black text-white p-5 text-5xl font-bold text-center ">
        Arbaz TODO List
      </h1>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          className="text-2xl border-zinc-800 border-4 m-8 px-4 py-2"
          value={task}
          onChange={taskHandler}
          placeholder="Enter your text here"
        ></input>
        <input
          type="text"
          className="text-2xl border-zinc-800 border-4 m-8 px-4 py-2"
          value={desc}
          onChange={descHandler}
          placeholder="Enter your description here"
        ></input>
        <button className="bg-black text-white m-5 px-4 py-2 text-2 font-bold rounded">
          Add Task
        </button>
      </form>
      <hr></hr>
      <div className="P-8 bg-slate-200">
        <ul>
          {renderlist}
        </ul>
      </div>
    </>
  );
};
export default page;
