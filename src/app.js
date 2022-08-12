import React from 'react';
import Nav from './nav';
// import Feed from './feed';
// import Footer from './footer';


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {// requireimport { Link } from "react-router-dom";('@tailwindcss/aspect-ratio')
      date: new Date()
    }; 

  }
      
      componentDidMount(){
      this.timerID = setInterval(() => {this.tick()
      }, 1000);
      }
      componentWillUnmount(){
      clearInterval(this.timeID);
      }

      tick(){
        this.setState({date:new Date()})
      }

      render(){
        const state = this.state
        return (
          <div>
            <Nav/>
            <h1 className="text-3xl font-bold">Creative Minds Furniture</h1>
            <h2>{state.date.toLocaleTimeString()}.</h2>
            {/* <Feed/> */}
            {/* <Footer/> */}
          </div>
        )
      }
     
    }
  
  export default App
  