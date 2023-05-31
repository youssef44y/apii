import logo from './logo.svg';
import './App.css';
import axios from "axios"
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import UserList from './components/UserList';
import Loading from './components/Loading'

function App() {
  const [listOfUser,setListOfUser]=useState(null)
  useEffect( () => {
axios.get("https://jsonplaceholder.typicode.com/users")
.then( (users) => setListOfUser(users.data) )
.catch((err) => console.log("error:",err))
  },[])

  return (
    <div className="App">
      <header className="App-header">
        {
          listOfUser ? <UserList listOfUser={listOfUser}/>: <Loading/>
        }
          
      </header>
    </div>
  );
}

export default App;
