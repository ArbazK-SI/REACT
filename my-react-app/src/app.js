import {Header} from "./header";
import {Footer} from "./footer";
import { Middle } from "./middle";


function App(){
    return(
        <div style={{backgroundColor:"#FFF6DC" , textAlign : "center"   ,padding : "5px" ,border: "1px solid grey"  }}>
            <h1>APPLICATION</h1>
         <Header/>
        <Middle/>
        
        <Footer/>

        </div>
      

    )
}
export  {App};