import { Component } from "react";
import Child from "./child";
 
class App extends Component{
    render(){
        return <div>
                    <h2>App Component</h2>
                    <Child version={101} show={true}/>
                    <Child version={101} show={false}/>
                    <Child version={101} show="true"/>
                    <Child version={101}/>
                    <Child version="202"/>
               </div>
    }
}
export default App;