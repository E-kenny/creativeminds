import React from 'react';
import Nav from './nav';
import Feed from './feed';
import Footer from './footer';


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
        // const state = this.state
        return (
          <div>
            <Nav className="sticky top-0"/>
            <div className='m-4'>
              <h1 className="m-auto py-10 w-80 sm:w-7/12 text-2xl md:text-4xl font-bold">Creative Minds   Furniture</h1>
              <Feed/>
              <Footer/>
            </div>
            
          </div>
        )
      }
     
    }
  
  export default App
  