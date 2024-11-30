import { Component, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import Movies from "./Movies";
import Counters from "./Counters";
import Navbar from "./Navbar";
import { Routes, Route } from "react-router-dom";
import Products from "./pages/Products";
import Admin from "./pages/Admin";
import NotFound from "./pages/NotFound";

// function App() {
//   const [counters, setCounters] = useState([
//     { id: 1, value: 0 },
//     { id: 2, value: 4 },
//     { id: 3, value: 3 },
//     { id: 4, value: 11 },
//   ]);

//   const handleDelete = (id) => {
//     console.log("Counter " + id + " has been deleted");
//     setCounters(counters.filter((c) => c.id != id));
//   };

//   const handleIncrement = (counter) => {
//     counters.filter((c) => c.id == counter.id)[0].value++;
//     setCounters(
//       counters.map((c) => {
//         return c;
//       })
//     );
//   };

//   const handleDecrement = (counter) => {
//     counters.filter((c) => c.id == counter.id)[0].value--;
//     setCounters(
//       counters.map((c) => {
//         return c;
//       })
//     );
//   };

//   const handleReset = (i) => {
//     setCounters(
//       counters.map((c) => {
//         c.value = 0;
//         return c;
//       })
//     );
//     console.log(counters);
//   };

//   return (
//     <div className="App">
//       {/* <Navbar totalCounters={counters.length}/>
//     <Counters 
//       counters={counters}
//       onReset={handleReset}
//       onDelete={handleDelete}
//       onIncrement={handleIncrement}
//       onDecrement={handleDecrement}
//     /> */}
//       <Navbar totalCounters={counters.length} />
//       <Routes>
//         <Route
//           path="/"
//           element={
//             <Counters
//               counters={counters}
//               onReset={handleReset}
//               onDelete={handleDelete}
//               onIncrement={handleIncrement}
//               onDecrement={handleDecrement}
//             />
//           }
//         />
//         <Route
//           path="/products"
//           element={
//             <Products />
//           }
//         >
//           <Route path=":year" element={<Products/>} />
//           <Route path=":year/:month" element={<Products/>} />
//         </Route>
//          <Route
//           path="/admin"
//           element={
//             <Admin />
//           }
//         />
//         <Route
//           path="*"
//           element={
//            <NotFound />
//           }
//         />
//       </Routes>
//     </div>
//   );
// }

export default class App extends Component {
  state={}

  constructor(props){
    super(props);
    console.log('App - Constructor');
    this.state.props = {props}
  }

  componentDidMount(){
    this.setState({});
    console.log('App - Mounted');
  }
  
  componentDidUpdate(){
    console.log('App - Updated');
  }

  componentWillUnmount(prevProps,newProps){
    console.log('App - will be removed');
  }

  render(){
    console.log('App - Render');
    return(
      <h1>This is Class based Component</h1>
    )
  }
}

