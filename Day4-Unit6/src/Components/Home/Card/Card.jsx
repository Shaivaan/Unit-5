import { Link } from "react-router-dom";
import "./Card.css";
export const Card = ({cardData})=>{
    return <div id = "carad">
        <h4>{cardData.title}</h4>
        <h4>Description</h4>
        <span><u><b>Subtasks:</b></u></span>
      <div>{cardData.subtasks}</div>
       <h4>Status:{cardData.status}</h4>
       <Link to = {`/edit/${cardData.id}`}><button>Edit</button></Link>
    </div>
}