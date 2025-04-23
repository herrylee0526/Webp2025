// import logo from './logo.svg';
///import './App.css';
//<script>
///</script>const changeText=(event)=>{ 
/// console.log(event.target) 
/// event.target.innerText = event.target.innerText + "被點了" 
///} 
///</script>function App() { 
/// return ( 
///   <div className="App"> 
///<h1 style = { styleArgument } onClick= {changeText}> Hello CGU!!  
///</h1> 
///   </div> 
 ///); 
///} 
///</script>
///function App() {
///  const changeText=(event)=>{ 
///    console.log(event.target) 
///    event.target.innerText = event.target.innerText + "被點了" 
///  }
///  return (
///    <div className="App">
///      <h1 onClick= {changeText}> hello CGU!!</h1>
///    </div>
///  );
///}

///export default App;
import React from 'react';
import './App.css';

const styleArgument = { fontSize: '60px', color: 'red' };

const changeText = (event) => {
  console.log(event.target);
  event.target.innerText = event.target.innerText + ' 被點了';
};

function App() {
  return (
    <div className="App">
      <h1 style={styleArgument} onClick={changeText}>
        Hello CGU!!
      </h1>
    </div>
  );
}

export default App;
