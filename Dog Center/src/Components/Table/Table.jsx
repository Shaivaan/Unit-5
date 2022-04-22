import { Link } from "react-router-dom";
import "./Table.css";
export const Table = ({data})=>{
      return  <table >
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>City</th>
                <th>Address</th>
                <th>Capacity</th>
                <th>Cost Per Day</th>
                <th>Verified</th>
                <th>Rating</th>
                <th>Detail</th>
            </tr>
                {data.map((el,i)=>{
                    return  <tr key={i}>
                    <td>{i+1}</td>
                    <td>{el.Name}</td>
                    <td>{el.City}</td>
                    <td>{el.Address}</td>
                    <td>{el.Capacity}</td>
                    <td>{el.CPD}</td>
                    <td>{el.Verified}</td>
                    <td>{el.Rating}</td>
                    <td><Link to = {`/listing/${el.id}`}><button>Detail</button></Link></td>
                </tr>
                })}
                

        </table>
}