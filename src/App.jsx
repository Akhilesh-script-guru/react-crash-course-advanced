// ************// project 1+***********************

// import { useState } from "react";
// import "./App.css";
// function App() {
//   const [count, setCount] = useState(0);

//   const [Hide, setshwHide] = useState(true);

//   let message = "";
//   if (count === 1) {
//     message = "Step 1: Learn React";
//   } else if (count === 2) {
//     message = "Step 2: Apply for Jobs";
//   } else if (count === 3) {
//     message = "Step 3: Invest Your Income";
//   }

//   const handleShow = () => {
//     setshwHide(!Hide);
//   };

//   return (
//     <>
//       {Hide && (
//         <div className="steps">
//           <div className="numbers ">
//             <div className={`step-1 ${count >= 1 ? "active" : ""}`}>1</div>
//             <div className={`step-2 ${count >= 2 ? "active" : ""}`}>2</div>
//             <div className={`step-3 ${count >= 3 ? "active" : ""}`}>3</div>
//           </div>

//           <p className="message">{message}</p>
//           <div className="buttons">
//             <button className="previous" onClick={(prev) => setCount(prev - 1)}>
//               Previous
//             </button>
//             <button className="next" onClick={(prev) => setCount(prev + 1)}>
//               Next
//             </button>
//           </div>
//         </div>
//       )}

//       <h1 onClick={handleShow}>**</h1>
//     </>
//   );
// }

// export default App;

//****************** */ project2 ?************************

// import { useState } from "react";
// import { useState } from "react";

// function App() {
//   const [count, setCount] = useState(0); // Offset days
//   const [step, setStep] = useState(1); // Step for increment/decrement

//   // Calculate target date
//   const date = new Date();
//   date.setDate(date.getDate() + count);

//   // Step Controls
//   const plusStep = () => setStep((prev) => prev + 1);
//   const minusStep = () => {
//     if (step > 1) setStep((prev) => prev - 1); // prevent step < 1
//   };

//   // Count Controls
//   const plusCount = () => setCount((prev) => prev + step);
//   const minusCount = () => setCount((prev) => prev - step);

//   return (
//     <>
//       <button onClick={minusStep}>-</button>
//       <h1>step {step}</h1>
//       <button onClick={plusStep}>+</button>

//       <button onClick={minusCount}>-</button>
//       <h1>count {count}</h1>
//       <button onClick={plusCount}>+</button>

//       <h1>
//         <h1>
//           {count === 0
//             ? "Today is"
//             : count > 0
//             ? `${count} day${count > 1 ? "s" : ""} from today is`
//             : `${Math.abs(count)} day${
//                 Math.abs(count) > 1 ? "s" : ""
//               } ago was`}{" "}
//           {date.toDateString()}
//         </h1>
//       </h1>
//     </>
//   );
// }

// export default App;

// ***************//  project 3 //*********************** */

import React from "react";

export const App = () => {
  return <div>App</div>;
};
