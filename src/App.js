import "./App.css";

import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import {Route,Routes} from "react-router-dom"
import LoadingBar from 'react-top-loading-bar'
let size=18;

export default class App extends Component {
  constructor(){
    super()
    this.state={
      progress:0
    }
  }
  setProgress=(pro)=>{
    this.setState({
      progress:pro
    })
  }
  apiKey=process.env.REACT_APP_API_KEY
  render() {
    return (
      <>
        <Navbar />
        <LoadingBar
        color='#f11946'
        progress={this.state.progress}
      />
        <Routes>
          <Route path="/" element={<News progress={this.setProgress} apiKey={this.apiKey} key='general' size={size} category='general'/>}/>
          <Route path="/business" element={<News progress={this.setProgress} apiKey={this.apiKey} key='business' size={size} category='business'/>}/>
          <Route path="/sports" element={<News  progress={this.setProgress} apiKey={this.apiKey} key='sports'size={size} category='sports'/>}/>
          <Route path="/entertainment" element={<News progress={this.setProgress} apiKey={this.apiKey} key='entertainment' size={size} category='entertainment'/>}/>
          <Route path="/science" element={<News progress={this.setProgress} apiKey={this.apiKey} key='science' size={size} category='science'/>}/>
          <Route path="/health" element={<News progress={this.setProgress} apiKey={this.apiKey} key='health' size={size} category='health'/>}/>
          <Route path="/technology" element={<News  progress={this.setProgress} apiKey={this.apiKey} key='technology'size={size} category='technology'/>}/>
        </Routes>
        
      </>
    );
  }
}


