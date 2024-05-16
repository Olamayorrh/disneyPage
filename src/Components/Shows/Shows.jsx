import Header from "../Header/Header";
import "./Shows.css"

const Shows = (prop)=>{
    return(
        <>
        <div>
        <Header head="Shows"/>
        </div>
       
        <div className="display">
            
            <img src="./images/lion.jpeg" />
            <img src="./images/frozen.jpeg" />
            
        </div>
        </>
    )
}

export default Shows;