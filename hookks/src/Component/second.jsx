import WithCount from "./withCount";
 
let Second = (props) => {
 
    return <div  style={ {border : "2px solid red", padding : "10px", backgroundColor : "slategray"} }>
                <h1>Second Component</h1>
                <h2>Count : { props.count }</h2>
                <h2>{ props.title }</h2>
                <button onClick={ props.increaseCount }>Increase Count</button>
                <button onClick={ props.decreaseCount }>Decrease Count</button>
                Set Count with range input 
                <input type="range" onChange={ props.setCountToValue }/>
            </div>
}
 
export default WithCount(Second)