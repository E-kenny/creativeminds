import React from 'react';
import List from './list';
import Nav from './nav';
import Footer from './footer';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {// requireimport { Link } from "react-router-dom";('@tailwindcss/aspect-ratio')
      date: new Date()
    }; 

  }
      
      componentDidMount(){<Footer/>
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
            <h1 className="text-3xl font-bold">Welcome!</h1>
            <h2>{state.date.toLocaleTimeString()}.</h2>
            <List/>
            {/* <Footer/> */}
          </div>
        )
      }
     
    }
  
  export default App
  