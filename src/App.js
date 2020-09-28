import React, { useEffect, useState } from 'react';
import './App.css';
import Login from './Login';
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from "spotify-web-api-js"
import Player from './Player';
import {useDataLayerValue} from "./DataLayer"

//connection between react app and spotify api
const spotify = new SpotifyWebApi();

function App() {
  
 // const [token,setToken] = useState(null);
  const [{ user, token }, dispatch] = useDataLayerValue(); 


  //run code based on given condition
  useEffect(() => {
    //code
    const hash = getTokenFromUrl();
    window.location.hash = "";  //we cant see access token in url using this line
    const _token = hash.access_token;

    if(_token) {
      dispatch({
        type: 'SET_TOKEN',
        token: _token,
      })
   
      
      spotify.setAccessToken(_token); //giving access to spotify

      spotify.getMe().then(user => {
        // console.log(user);
        dispatch({
          type: 'SET_USER',
          user: user,
        });
      });
      spotify.getUserPlaylists().then((playlists) => {
          dispatch({
            type: "SET_PLAYLISTS",
            playlists: playlists,
          })
      })
      spotify.getPlaylist('6MBY2nKuREIwt3J3fYoNcD').then(response => {
          dispatch({
            type: "SET_DISCOVER_WEEKLY",
            discover_weekly: response,
          })
      })
    }

    //console.log('token>>>',token);
  },[]);

    //console.log("USER", user);
    //console.log("TOKEN", token);

  return (
    //BEM 
    <div className="app">
      {
        token ? (
          <Player spotify = {spotify}/>
        ) : (
          <Login/>
        )
      }
    </div>
  );
}

export default App;
