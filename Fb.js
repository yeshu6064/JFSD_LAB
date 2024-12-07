import axios from "axios"
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

export default function insert(){
    function handleInsert(){
        console.log({
            name:document.getElementById("idname").value,
            productQuality:document.getElementsByName("pq")[0].value,
	        productEfficiency:document.getElementsByName("pe")[0].value,
            feedback:document.getElementsByName("fb")[0].value
        })
        axios.post('http://localhost:8080/fb',{
            name:document.getElementById("idname").value,
            productQuality:document.getElementsByName("pq")[0].value,
	        productEfficiency:document.getElementsByName("pe")[0].value,
            feedback:document.getElementsByName("fb")[0].value
        }).then((res)=>{
            console.log(res.data)
        })
    }
    return (
        <div>
        Name: <input type="text" id="idname" name="name" placeholder="name"/>    
        <br/><br/>
        Product Quality:
        <Select id="idpq" defaultValue={0} label="ProductQuality" name="pq">
            <MenuItem value={0}>Zero Worth</MenuItem>
            <MenuItem value={1}>Very Poor</MenuItem>
            <MenuItem value={2}>Poor</MenuItem>
            <MenuItem value={3}>Ok</MenuItem>
	        <MenuItem value={4}>Good</MenuItem>
	        <MenuItem value={5}>Extremely Good</MenuItem>
        </Select> 
        <br/><br/>
        Product Efficiency: <Select id="idpe" defaultValue={0} label="Product Efficiency" name="pe">
                <MenuItem value={0}>Zero Worth</MenuItem>
                <MenuItem value={1}>Very Poor</MenuItem>
                <MenuItem value={2}>Poor</MenuItem>
                <MenuItem value={3}>Ok</MenuItem>
	    <MenuItem value={4}>Good</MenuItem>
	    <MenuItem value={5}>Extremely Good</MenuItem>
        </Select>
        <br/><br/>
        Feed Back: <input type="text" id="idfb" name="fb" placeholder="Feed Back"/> 
        <br/><br/>
        <button onClick={handleInsert}>Insert</button>
        </div>
    )
}
