'use strict';

const e = React.createElement;

class APP extends React.Component {
 
 HelloGuys() {
 const newtext = [ "x" , "y" , "z"] ; 
 console.log('test') ;
 return newtext[ Math.floor(Math.random()*newtext.length) ] ;
} 
result = HelloGuys();
   
  render() { 
      return( 
      <div> 
          <h1> 
          'hello'
          </h1>
           </div> 
  ) ;
   
  }
}

const domContainer = document.getElementById('root');
ReactDOM.render(<APP/> , domContainer);
