import WithCount from "./withCount";
 
let First = (props) => {
 
    return <div style={ {border : "2px solid red",marginBottom : '20px', padding : "10px", backgroundColor : "silver"} }>
                <h1>First Component</h1>
                <h2>Count : { props.count }</h2>
                <h2>{ props.title }</h2>
                <button onClick={ props.increaseCount }>Increase Count</button>
                <button onClick={ props.decreaseCount }>Decrease Count</button>
                Set Count with Number input
                <input type="number"onChange={ props.setCountToValue } />
            </div>
}
 
export default WithCount(First)