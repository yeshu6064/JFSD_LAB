import axios from "axios";
import { useState } from "react";
function Show(){
    const[r,setR] = useState(null)
    if (r == null) {
        axios.get('http://localhost:8080/fb',{}).then((res)=>{
            console.log(res.data)
            setR(res.data)
        })
    }
   
    function handleDelete(event){
         alert(event.currentTarget.getAttribute("user"))
         axios.delete('http://localhost:8080/fb',{params:{
            "name":event.currentTarget.getAttribute("name")
         }}).then((res)=>{
            console.log(res.data)
         })
         setR(null);
    }

    if(r!=null){
    return(
        <table border="1">
            <tr>
                <th>Name</th>
                <th>Product Quality</th>
                <th>Product Efficiency</th>
                <th>Feedback</th>
                <th>delete</th>
            </tr>
        {r.map((fb)=>{
            return(
                
                    <tr>
                        <td> {fb.name} </td>
                        <td> {fb.productQuality} </td>
                        <td> {fb.productEfficiency} </td>
                        <td> {fb.feedback} </td>
                        <td> <button name = {fb.name} onClick={handleDelete}>delete</button> </td>
                    </tr>
                
            )
        })}
        </table>
    );
}
else{
    return(
        <div>
            Data Fetching
        </div>
    )
}
}
export default Show