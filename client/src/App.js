import "./App.css";
import React from "react";

import { Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";


import { useReducer } from "react";



import { useState } from "react";

import HomeScreen from "./Screen/Homescreen";
import Navbar from "./components/Navnar";
import OnlyPartyScreen from "./Screen/OnlyPartyScreen";
import Onlyblog from "./Screen/OnlyBlogScreen";
import Footer from "./components/Footer";
import Error from "./Screen/Error";
import SearchScreen from "./Screen/Searchscreen";


function App() {
  const [posts, setposts] = useState([]);

 

  const Routing = () => {
    return (
      <Switch>
        <Route exact path="/">
          <HomeScreen />
        </Route>

       
        <Route
          path="/getmoreonparty/:name"
          render={(props) => <OnlyPartyScreen {...props} />}
        />
        <Route
          path="/onlyblog/:id"
          render={(props) => <Onlyblog {...props} />}
        />
         <Route
          path="/search"
          render={(props) => <SearchScreen {...props} />}
        />
        <Route>
         <Error/>
        </Route>
      </Switch>
    );
  };

  return (
    <>
     
      
          <Navbar/>
        <Routing />
        <Footer/>
     
    </>
  );
}

export default App;
