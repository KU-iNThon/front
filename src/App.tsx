<<<<<<< HEAD
//가장 상위 페이지

import {useState} from 'react';
import './App.css';

import SearchGroup from "./components/SearchGroup";
import Profile from "./components/Profile";
import ListGroup from "./components/ListGroup";
import YourCurrentGroup from "./components/YourCurrentGroup";


=======
import Profile from "./Profile";
import ListGroup from "./components/ListGroup";
import FindPage from "./FindPage";
import RightBar from "./components/RightBar";
import SearchGroup from "./components/SearchGroup";
import { Grid, Box, Toolbar, Container, Paper, Stack } from "@mui/material";
import "./App.css";
>>>>>>> 0394c9c9c7a616c36623d6077ead3e1f94e287f5

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
<<<<<<< HEAD
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

  
  
=======
    <>
      <FindPage />
      <Box
        component="main"
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === "light"
              ? theme.palette.grey[100]
              : theme.palette.grey[900],
          flexGrow: 1,
          height: "100vh",
          overflow: "auto",
        }}
      >
        <Container maxWidth="xl" sx={{ mt: 2, mb: 4 }}>
          <Grid
            container
            spacing={3}
            direction={"row"}
            justifyContent="center"
            alignItems="stretch"
          >
            <Grid item xs={12} md={9}>
              <Paper
                sx={{
                  p: 2,
                  display: "flex",
                  flexDirection: "column",
                  height: 775,
                }}
              ></Paper>
            </Grid>
            <Grid item xs={12} md={3}>
              <RightBar />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
>>>>>>> 0394c9c9c7a616c36623d6077ead3e1f94e287f5
  );
}

export default App;
