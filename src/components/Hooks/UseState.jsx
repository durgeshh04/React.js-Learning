import React, { useState } from "react";

// const UseState = () => {
//   const [count, setCount] = useState(0);

//   const handleCount = () => {
//     setCount((prevCount) => prevCount + 1);
//     console.log(count)
//   };

//   return (
//     <div>
//       <button onClick={handleCount}>Count {count}</button>
//     </div>
//   );
// };

// export default UseState;

//---------------using useState HOOk with help of prevCount variable-----------------

// const UseState = () => {
//   const [count, setCount] = useState(0);

//   const IncreamentFive = () => {
//     setCount((count) => count + 5);
//   };
//   return (
//     <div>
//       <h1>Count {count}</h1>
//       <button onClick={() => setCount(0)}>Reset</button>
//       <button onClick={() => setCount((prevCount) => prevCount + 1)}>
//         Increament
//       </button>
//       <button onClick={() => setCount((prevCount) => prevCount - 1)}>
//         Decreament
//       </button>
//       <button onClick={IncreamentFive}>Increament by 5</button>
//     </div>
//   );
// };

// export default UseState;

// -------------------Working with useState and form---------------------------------

// const UseState = () => {
//   const [formData, setFormData] = useState({
//     username: '',
//     email: ''
//   });

//   const handleChange = (e) =>{
//     const {name, value} = e.target
//     setFormData((prevData)=>({
//         ...prevData,
//         [name]: value
//     }))
//   }

//   const handleSubmit = (e) =>{
//     e.preventDefault()
//     console.log(formData)
//   }

//   return (
//     <div>
//       <form
//         onSubmit={handleSubmit}
//         style={{
//           display: "flex",
//           flexDirection: "column",
//           justifyContent: "center",
//           alignItems: "center",
//         }}
//       >
//         <div className="input-group" style={{ marginTop: "10px" }}>
//           <label htmlFor="username">Username:</label>
//           <input
//             type="text"
//             id="username"
//             name="username"
//             style={{outline: "none"}}
//             value={formData.username}
//             onChange={handleChange}
//           />
//         </div>
//         <div className="input-group" style={{ marginTop: "10px" }}>
//           <label htmlFor="email">Email:</label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             style={{outline: "none"}}
//             value={formData.email}
//             onChange={handleChange}
//           />
//         </div>
//         <button type="submit" style={{outline: "none", marginTop: "10px"}}>Submit</button>
//       </form>
//     </div>
//   );
// };

// export default UseState;

// ----------------------useState Hook Working with Array-------------------------


const UseState = () => {
  const [items, setItems] = useState([]);

  const handleAddItem = () => {
    try {
      setItems([
        ...items,
        { id: items.length, value: Math.floor(Math.random() * 10) + 1 },
      ]);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <button onClick={handleAddItem}>Add Item</button>
      <ul>
        {items.map((item) => (
          <li key={item.id} style={{listStyleType: "none"}}>{item.value}</li>
        ))}
      </ul>
    </div>
  );
};

export default UseState;

