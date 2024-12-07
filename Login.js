import axios from 'axios'

function Login({store}){
    function handleLogin(){
        axios.post('http://localhost:8080/check',{
            name: document.getElementsByName("un")[0].value,
            password: document.getElementById("idpw").value
        }).then((res)=>{
            console.log(res.data)
            if(res.data.name != "null")
            {
                store.dispatch({"type":"login","data":{"un":res.data.name,"role":res.data.role}})
            }
        })
    }
    function handlemover(){
        document.getElementById("lp")["style"]["boxShadow"]="15px 15px 20px black";
    }
    function handlemleave(){
        document.getElementById("lp")["style"]["boxShadow"]="5px 5px 7px black";
    }
    return(
        <div className="login-parent">
            <center>
        <div id="lp" className="login-page" onMouseOver={handlemover} onMouseLeave={handlemleave} style={{boxShadow: "5px 5px 7px black"}}>
            <p><b><i style={{textShadow: "1px 2px 5px yellow, -1px -2px 3px white"}}>Login Page</i></b></p>
            username: <input type="text" name="un" id="idun" /><br />
            password: <input type="password" name="pw" id="idpw" /><br /><br />
            <button onClick={handleLogin}>Login</button>
        </div>
        </center>
        </div>
    );
}
export default Login