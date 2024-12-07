import logo from './logo.svg';
import './App.css';
import Registration from './components/Signup'
import Show from './components/Show';
import Appbar from './components/Appbar'
import Login from './components/Login'
import Fb from './components/Fb';
import Error from './components/Error';
import Update from './components/Update';

function App({store}) {
 
  function Page(){
    console.log(localStorage.getItem("role"))
    console.log(store.getState().NavReducer)
    var d={"name":"Balajee R M","course":"JFSD"}
        switch(store.getState().NavReducer){
          case "Login":
            return(<div><Login store={store} /></div>)
          case "Registration":
            return(<div><Registration /></div>)
          case "Show":
            if(localStorage.getItem("role")==1)
              return(<div><Show /></div>)
            else
              return(<div><Error /></div>)
          case "Fb":
            if(localStorage.getItem("role")==1 || localStorage.getItem("role")==2)
              return(<div><Fb /></div>)
            else
              return(<div><Error /></div>)
          case "Update":
            if(localStorage.getItem("role")==1)
              return(<div><Update /></div>)
            else
            return(<div><Error /></div>)
        }
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Feedback Management System</p>
      </header>
      <div className="App-body">
        <Appbar store={store} />
        <Page />
      </div>
    </div>
  );
}

export default App;