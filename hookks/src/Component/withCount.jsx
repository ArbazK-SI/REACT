import { Component } from "react";
 
let WithCount = function(TargetComp){
    return class extends Component {
        state = {
            title : "Sports Interactive",
            count : 0
        }
        increaseCount = ()=>{
            this.setState({ count : this.state.count += 1 })
        }
        decreaseCount = ()=>{
            this.setState({ count : this.state.count -= 1 })
        }
        /*
        */
        setCountToValue = (evt)=>{
            // console.log(val.target.value);
            this.setState({ count : evt.target.value })
        }
        render(){
            return <TargetComp setCountToValue={ this.setCountToValue } increaseCount={ this.increaseCount } decreaseCount={ this.decreaseCount } count={ this.state.count } title={ this.state.title }/>
        }
    }
 
};
 
export default WithCount;