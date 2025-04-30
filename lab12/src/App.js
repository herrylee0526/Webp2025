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
import MultiButton from './cgu_mutibutton'
import HelloCGU from './HelloCGU'
import MultiButton2 from './icon'
///const styleArgument = { fontSize: '60px', color: 'red' };

///const changeText = (event) => {
///  console.log(event.target);
///  event.target.innerText = event.target.innerText + ' 被點了';
///};
///const multiButton=(num)=>{ 
///  var output=[]; 
///for(let i=1;i<num+1;++i) 
///output.push(<button onClick={changeText}>第{i}個按鍵</button>) 
///return output; 
///}  

///function App() {
///  return (
///    <div className="App"> 
///      { multiButton(10) } 
///    </div> 
///  );


   /// <div className="App">
   ///   <h1 style={styleArgument} onClick={changeText}>
   ///     Hello CGU!!
   ///   </h1>
   /// </div>
   ///};
///}
function App() { 
  return ( 
  <div className="App"> 
  <div> 
  { HelloCGU()} 
  </div> 
  <div> 
  { MultiButton(10) } 
  </div> 
  <div>
    {MultiButton2(3)}
  </div>
  </div> 
    ); 
  }
export default App;
