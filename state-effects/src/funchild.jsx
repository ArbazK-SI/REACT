import { useEffect  } from "react"; 
 
function ChildFun(props){
    // useEffect(); // componentDidMount
    // useEffect(); // componentDidUpdate
    // useEffect(); // componentWillUnmount
    useEffect(function(){
        // componentDidMount;
        console.log("ChildFun's componentDidMount was called");
    },[]);
    useEffect(function(){
        // componentDidUpdate
        console.log("ChildFun's componentDidUpdate was called");
    },[props.version]);
    useEffect(function(){
       return function(){
         // componentWillUnmount
         console.log("ChildFun's componentWillUnmount was called");
       }
    },[]);
 
    // useEffect(function(){
    //     // componentDidMount;
    //     console.log("ChildFun's componentDidMount was called");
    //     return function(){
    //         // componentWillUnmount
    //         console.log("ChildFun's componentWillUnmount was called");
    //       }
    // },[props.version]);
 
    return <div>
            <h2>Function Child Component</h2>
            <h3>Version { props.version }</h3>
            <h3>Power { props.power }</h3>
           </div>
} 
export default ChildFun;