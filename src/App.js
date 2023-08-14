import "./App.css";

import React, {  useState } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import {Route,Routes} from "react-router-dom"
import LoadingBar from 'react-top-loading-bar'

const App=()=> {
  
  const [progress,setState]=useState(0)
  const setProgress=(pro)=>{
    setState(pro)
  }
  let apiKey=process.env.REACT_APP_API_KEY
  let size=9;
 
    return (
      <>
        <Navbar />
        <LoadingBar
        color='#f11946'
        progress={progress}
      />
        <Routes>
          <Route path="/" element={<News progress={setProgress} apiKey={apiKey} key='general' size={size} category='general'/>}/>
          <Route path="/business" element={<News progress={setProgress} apiKey={apiKey} key='business' size={size} category='business'/>}/>
          <Route path="/sports" element={<News  progress={setProgress} apiKey={apiKey} key='sports'size={size} category='sports'/>}/>
          <Route path="/entertainment" element={<News progress={setProgress} apiKey={apiKey} key='entertainment' size={size} category='entertainment'/>}/>
          <Route path="/science" element={<News progress={setProgress} apiKey={apiKey} key='science' size={size} category='science'/>}/>
          <Route path="/health" element={<News progress={setProgress} apiKey={apiKey} key='health' size={size} category='health'/>}/>
          <Route path="/technology" element={<News  progress={setProgress} apiKey={apiKey} key='technology'size={size} category='technology'/>}/>
        </Routes>
        
      </>
    );
  }
export default App;

