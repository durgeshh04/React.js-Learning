// import React, { useReducer } from "react";

// const initialState = 0;
// const reducer = (state, action) => {
//   switch (action) {
//     case "increament":
//       return state + 1;
//     case "decreament":
//       return state - 1;
//     case "reset":
//       return initialState;
//     default:
//       return state;
//   }
// };
// const UseReducerHook = () => {
//   const [count, dispatch] = useReducer(reducer, initialState);
//   return (
//     <div>
//       <h1>Count: {count}</h1>
//       <button onClick={() => dispatch("increament")}>Increament</button>
//       <button onClick={() => dispatch("decreament")}>Decreament</button>
//       <button onClick={() => dispatch("reset")}>Reset</button>
//     </div>
//   );
// };

// export default UseReducerHook;

// {-------------------useReducer Hook using another logic---------------------------}

// import React, { useReducer } from "react";

// const initialState = {
//   firstCounter: 0,
//   secondCounter: 10,
// };

// const reducer = (state, action) => {
//   switch (action.type) {
//     case "increament":
//       return { ...state, firstCounter: state.firstCounter + 1 };
//     case "decreament":
//       return { ...state, firstCounter: state.firstCounter - 1 };
//     case "increament5":
//       return { ...state, firstCounter: state.firstCounter + 5 };
//     case "increament2":
//       return { ...state, secondCounter: state.secondCounter + 2 };
//     case "decreament2":
//       return { ...state, secondCounter: state.secondCounter - 2 };
//     case "reset":
//       return initialState;
//     default:
//       return state;
//   }
// };

// const UseReducerHook = () => {
//   const [count, dispatch] = useReducer(reducer, initialState);
//   return (
//     <div>
//       <h1>First Counter: {count.firstCounter}</h1>
//       <h1>Second Counter: {count.secondCounter}</h1>
//       <button onClick={() => dispatch({ type: "increament" })}>
//         Increment First
//       </button>
//       <button onClick={() => dispatch({ type: "decreament" })}>
//         Decrement First
//       </button>
//       <button onClick={() => dispatch({ type: "increament5" })}>
//         Increment First by 5
//       </button>
//       <button onClick={() => dispatch({ type: "increament2" })}>
//         Increment Second by 2
//       </button>
//       <button onClick={() => dispatch({ type: "decreament2" })}>
//         Decrement Second by 2
//       </button>
//       <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
//     </div>
//   );
// };

// export default UseReducerHook;

// {--------------------Multiple useReducer Hook----------------------------}
// import React, { useReducer } from "react";

// const initialState = 0;
// const reducer = (state, action) => {
//   switch (action) {
//     case "increament":
//       return state + 1;
//     case "decreament":
//       return state - 1;
//     case "reset":
//       return initialState;
//     default:
//       return state;
//   }
// };
// const UseReducerHook = () => {
//   const [count, dispatch] = useReducer(reducer, initialState);
//   const [countTwo, dispatchTwo] = useReducer(reducer, initialState);
//   return (
//     <>
//       <div>
//         <h1>Count: {count}</h1>
//         <button onClick={() => dispatch("increament")}>Increament</button>
//         <button onClick={() => dispatch("decreament")}>Decreament</button>
//         <button onClick={() => dispatch("reset")}>Reset</button>
//       </div>
//       <div>
//         <h1>Count: {countTwo}</h1>
//         <button onClick={() => dispatchTwo("increament")}>Increament</button>
//         <button onClick={() => dispatchTwo("decreament")}>Decreament</button>
//         <button onClick={() => dispatchTwo("reset")}>Reset</button>
//       </div>
//     </>
//   );
// };

// export default UseReducerHook;

// {----------------------useReducer with useContext Hook-------------------}
// import React, { useReducer } from "react";
// import ComponentA from "./ComponentA";
// import ComponentB from "./ComponentB";
// import ComponentD from "./ComponentD";

// const initialState = 0;
// const reducer = (state, action) => {
//   switch (action) {
//     case "increament":
//       return state + 1;
//     case "decreament":
//       return state - 1;
//     case "reset":
//       return initialState;
//     default:
//       return state;
//   }
// };
// export const countContext = React.createContext();
// const UseReducerHook = () => {
//   const [count, dispatch] = useReducer(reducer, initialState);
//   return (
//     <div>
//       <h1>Original Count Value: {count}</h1>
//       <countContext.Provider
//         value={{ countValue: count, dispatchValue: dispatch }}
//       >
//         <ComponentA />
//         <ComponentB />
//         <ComponentD />
//       </countContext.Provider>
//     </div>
//   );
// };

// export default UseReducerHook;

// {------------------------useEffect hook with useReducer hook to fetch the data----------------------------}
import axios from "axios";
import React, { useEffect, useReducer } from "react";

const initialState = {
  isLoading: true,
  error: null,
  post: {},
};

const reducer = (state, action) => {
  switch (action.type) {
    case "fetch_success":
      return {
        isLoading: false,
        post: action.payload,
      };
    case "fetch_error":
      return {
        isLoading: false,
        post: {},
        error: "Something went wrong",
      };
    default:
      return state;
  }
};

const UseReducerHook = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    const fetchData = async () => {
      try {
        await axios
          .get("https://jsonplaceholder.typicode.com/posts/1")
          .then((response) => {
            dispatch({ type: "fetch_success", payload: response.data });
          })
          .catch(() => {
            dispatch({ type: "fetch_error" });
          });
      } catch (error) {
        console.log("Error while fetching data", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      {state.isLoading ? "Loading..." : state.post.title}
      {state.error ? state.error : null}
    </div>
  );
};

export default UseReducerHook;
