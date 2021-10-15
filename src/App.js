import './App.css';
import { useState , useRef} from 'react';

function App() {

  const [serverUrl, setServerUrl] = useState('')
  //const [requestBody, setRequestBody] = useState('')
  const resultRef = useRef();

  async function handleRequest(){

  // const requestObject = {query:requestBody}

    await fetch(serverUrl)
    .then(res => {
      if (res.status !== 200 && res.status !== 201) {
        resultRef.current.value = "Failed to request the server";
      }
      return res.json();
    })
    .then(response => {      
      resultRef.current.value =  JSON.stringify(response)  
  

    })
      .catch(err => {
        resultRef.current.value = err;
      
    });

  }

  async function handleSubmit() {
    resultRef.current.value = ""
    handleRequest()    
  }

  async function handleClear() {
    resultRef.current.value = ""  
  }

  // var example=`
  //    {
  //      email,
  //      name,
  //      active
  //    }
  //   `
  return (
    <div className="App">
      <textarea
          onChange={event => setServerUrl(event.target.value)}
          placeholder="https://cbmistask10.herokuapp.com/" rows={1}  cols={75}
     /><br/><br/>  
      <button type="button" onClick={handleSubmit}>Submit</button><br/><hr/><br/> 
      <button type="button" onClick={handleClear}>Clear</button> <br/>
      <textarea
          ref={resultRef} placeholder="Result" rows={15} cols={75}
        />
    </div>
  );
}
export default App;










// import React from "react";
// import { Switch, Route, Link } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "./App.css";

// import AddTutorial from "./components/AddTutorial";
// import Tutorial from "./components/Tutorial";
// import TutorialsList from "./components/TutorialsList";

// function App() {
//   return (
//     <div>
//       <nav className="navbar navbar-expand navbar-dark bg-dark">
//         <a href="/tutorials" className="navbar-brand">
//           bezKoder
//         </a>
//         <div className="navbar-nav mr-auto">
//           <li className="nav-item">
//             <Link to={"/tutorials"} className="nav-link">
//               Tutorials
//             </Link>
//           </li>
//           <li className="nav-item">
//             <Link to={"/add"} className="nav-link">
//               Add
//             </Link>
//           </li>
//         </div>
//       </nav>

//       <div className="container mt-3">
//         <Switch>
//           <Route exact path={["/", "/tutorials"]} component={TutorialsList} />
//           <Route exact path="/add" component={AddTutorial} />
//           <Route path="/tutorials/:id" component={Tutorial} />
//         </Switch>
//       </div>
//     </div>
//   );
// }

// export default App;
