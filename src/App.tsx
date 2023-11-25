//가장 상위 페이지

import {useState} from 'react';
import './App.css';

import SearchGroup from "./components/SearchGroup";
import Profile from "./components/Profile";
import ListGroup from "./components/ListGroup";
import YourCurrentGroup from "./components/YourCurrentGroup";



function App() {
  const [mode, setMode] = useState('ListGroup');
  
  let content = null;
  if(mode === 'FindGroups'){
    content = <div><ListGroup/></div>
  } 
  else if(mode === 'YourCurrentGroups'){
    content = <div><YourCurrentGroup/></div>
  } 
  else if(mode === 'Profile'){
    content = <div><Profile/></div>
  } 
  
  return (
  <> 
    <div style = {{display : 'flex'}}>
        <h1>소모임</h1>
				<p><a onClick={(event) => {setMode('FindGroups')}}>Find Groups</a></p>
				<p><a onClick={(event) => {setMode('YourCurrentGroups')}}>__Your Current Group</a></p>
        <p><a onClick={(event) => {setMode('Profile')}}>__Profile</a></p>        
    </div>    

    <div>
      {content}
    </div>
    
  
  </>

  
  
  );
}

export default App;
