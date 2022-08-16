import React from 'react';
import Nav from './nav';
// import Feed from './feed';
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
        const state = this.state
        return (
          <div>
            <Nav className="sticky top-0"/>
            <>
              <h2 className="m-auto w-80 sm:w-7/12 text-2xl">{state.date.toLocaleTimeString()}</h2>
              <h1 className="m-auto py-4 w-80 sm:w-7/12 text-2xl md:text-4xl font-bold">Creative Minds   Furniture</h1>
              <img className='shadow h-80 w-80 sm:w-96 m-auto' src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg" alt="CreativeMinds" />
              {/* <Feed/> */}
              <Footer/>
            </>
            
          </div>
        )
      }
     
    }
  
  export default App
  