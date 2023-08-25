/*import { Component } from "react";
 
class App extends Component{
    // default 
    companyname = "Sports Interactive";
    state={
        version : 1001
    }
    constructor(){
        super();
        // default 
        setTimeout(()=>{
            this.companyname = "New Company";
            console.log(this.companyname);
            this.setState({version : 2});
           
        },2000);
        // this.render();
    }
    render(){
        return <div>
                    <h1>Hello from App Component</h1>
                    <h2>{ this.companyname }</h2>
                    <h2>
                        {this.state.version}
                    </h2>
                </div>
    }
}
 
export default App;

import { Component } from "react";
 
class App extends Component{
    state = {
        avengers : ["Ironman", "Hulk", "Captain America", "Hulk"]
    }
    render(){
        return <div>
                    <h1>Avengers List</h1>
                    <label htmlFor="">New Avenger</label>
                    <input type="text" />
                    <button>Add Avenger</button>
                    <ol>
                        {
                            this.state.avengers.map((hero, idx) => <li key={idx}>{ hero }</li>)
                        }
                    </ol>
                </div>
    }
}
 
export default App;



import { Component } from "react";
 
class App extends Component{
    state = {
        avengers : ["Ironman", "Hulk", "Captain America", "Hulk"]
    }
    changeHandler = () => {
        // alert("you changed the input")
        this.setState({ avengers : ["Antman"] })
    }
    render(){
        return <div>
                    <h1>Avengers List</h1>
                    <label htmlFor="">New Avenger</label>
                    <input type="text" onChange={ this.changeHandler } />
                    <ol>
                        {
                            this.state.avengers.map((hero, idx) => <li key={idx}>{ hero }</li>)
                        }
                    </ol>
                </div>
    }
}
 
export default App;
*/
import { Component } from "react";
 
class App extends Component{
    state = {
        tempavenger : "default",
        avengers : ["Ironman", "Hulk", "Captain America", "Hulk"]
    }
    changeHandler = (evt) => {
        // alert("you changed the input")
        // console.log(evt.target.value);
        // let newhero = evt.target.value;
        this.setState(()=> {
            return { tempavenger : evt.target.value }
        }, ()=>{
            this.setState({ avengers : [this.state.tempavenger] })
        })
    }
    render(){
        return <div>
                    <h1>Avengers List</h1>
                    <label htmlFor="">New Avenger</label>
                    <input value={this.state.tempavenger} type="text" onChange={ this.changeHandler } />
                    <ol>
                        {
                            this.state.avengers.map((hero, idx) => <li key={idx}>{ hero }</li>)
                        }
                    </ol>
                </div>
    }
}
 
export default App;