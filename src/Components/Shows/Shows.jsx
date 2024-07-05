import Header from "../Header/Header";
import "./Shows.css"

const Shows = (prop)=>{
    return(
        <div className="shows">
        <div>
        <Header head="Shows"/>
        </div>
       
        <div className="display">
            
            <img src="./images/lion.jpeg" />
            <img src="./images/frozen.jpeg" />
            
        </div>
        </div>
    )
}

export default Shows;