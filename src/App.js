// import logo from './logo.svg';
// import './App.css';

// function App() {
//   const a = 3;
//   const b = 3;
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>

//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           learn react
//         </a>
//         <ul>
//           <li>li1</li>
//           <li>li2</li>
//           <li>li3</li>
//         </ul>
//         <h1 data-testid="mytestid" >hello</h1>
//         <span title='sum' >{a+b}</span>
//       </header>
//     </div>
    
//   );
// }

// export default App;


import './App.css';
import Login from './components/login/Login';

function App() {
  return (
    <div className="App">
      <Login/>
    </div>
  );
}

export default App;