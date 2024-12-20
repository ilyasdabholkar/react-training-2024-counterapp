import { Component, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import Movies from "./Movies";
import Counters from "./Counters";
import { Routes, Route } from "react-router-dom";
import Products from "./pages/Products";
import Admin from "./pages/Admin";
import NotFound from "./pages/NotFound";
import Accounts from "./pages/Accounts";
import Navbar from "./components/Navbar";
import AccountForm from "./pages/AccountForm";

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

function App(){
  return(
  <div className="container">
    <Navbar />
    <div className="d-flex justify-content-center">
      <Routes>
        <Route path="/" element={<Accounts />} />
        <Route path="/account/:id" element={<AccountForm />} />
      </Routes>
    </div>
  </div>
  )
}

export default App;
