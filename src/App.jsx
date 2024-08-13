import "./App.css";
import CustomeTwo from "./components/Hooks/CustomeTwo";
import CustomeOne from "./components/Hooks/CustomeOne";
import FetchingData from "./components/Hooks/FetchingData";
import UseCallback from "./components/Hooks/UseCallback";
import UseContextHook from "./components/Hooks/UseContextHook";
import UseEffectOne from "./components/Hooks/UseEffectOne";
import UseEffectTimer from "./components/Hooks/UseEffectTimer";
import UseEffectTwo from "./components/Hooks/UseEffectTwo";
import UseMemo from "./components/Hooks/UseMemo";
import UseReducerHook from "./components/Hooks/UseReducerHook";
import UseRef from "./components/Hooks/UseRef";
import UseRef2 from "./components/Hooks/UseRef2";
// import Greet from "./components/Greet";
// import Welcome from "./components/Welcome";
// import StateHook from "./components/StateHook";
// import SetState from "./components/SetState";
// import Parent from "./components/Parent";
// import ConditionalRendering from "./components/ConditionalRendering";
// import NameList from "./components/NameList";
// import StylesInReact from "./components/StylesInReact";
// import styles from "./CSS_Style.module.css";
// import FormHandling from "./components/FormHandling";
// import FragmentDemo from "./components/FragmentDemo";
// import TableFragment from "./components/TableFragment";
// import Pure_Component from "./components/Pure_Component";
// import Diff_Pure_Regu from "./components/Diff_Pure_Regu";
// import MemoParent from "./components/MemoParent";
// import RefsReact from "./components/RefsReact";
// import ForwadingRefs from "./components/ForwadingRefs";
// import PortalsReact from "./components/PortalsReact";
// import CustomHook from "./components/CustomHook";
// import ParentPattern from "./components/ParentPattern";
// import { UserProvider } from "./components/UserContext";
// import ThemeConsumer from "./components/ThemeConsumer";
// import HTTPHandling from "./components/HTTPHandling";
// import HTTPHandlingPost from "./components/HTTPHandlingPost";
// import HTTPHandlingDelete from "./components/HTTPHandlingDelete";
// import HTTPHandlingPut from "./components/HTTPHandlingPut";
// import UseState from "./components/Hooks/UseState";

function App() {
  // Basic understanding of how to send props to the component
  // const names = {
  //   name1: {
  //     name: "Durgesh",
  //     heroname: "Batman"
  //   },
  //   name2: {
  //     name: "Prathmesh",
  //     heroname: "Superman"
  //   },
  //   name3: {
  //     name: "Harshal",
  //     heroname: "Hulk"
  //   },
  //   name4: {
  //     name: "Sakshi",
  //     heroname: "Superwoman"
  //   },
  // }

  return (
    <>
      <div>
        {/* Component Practice */}
        {/* <Greet name="Durgesh" heroname="Batman">
          <p>He is a sigma man</p>
        </Greet>
        <Greet name="Krishna" heroname="Hulk" />
        <Greet name="Prathmesh" heroname="Superman" /> */}
        {/* JSX vs Without JSX */}
        {/* <Welcome /> */}
        {/* State Hook */}
        {/* <StateHook /> */}
        {/* More practice on setState */}
        {/* <SetState /> */}
        {/* Methods as props */}
        {/* <Parent /> */}
        {/* Conditional Rendering */}
        {/* <ConditionalRendering /> */}
        {/* List Rendering */}
        {/* <NameList /> */}
        {/* Styles in React */}
        {/* <StylesInReact /> */}
        {/* Css Modules */}
        {/* <h1 className={styles.success}>Success</h1> */}
        {/* Form Handling in React */}
        {/* <FormHandling /> */}
        {/* Fragment in React */}
        {/* <FragmentDemo /> */}
        {/* <TableFragment /> */}
        {/* Practice on Pure Component */}
        {/* <Pure_Component /> */}
        {/* <Diff_Pure_Regu /> */}
        {/* Memo Practice */}
        {/* <MemoParent /> */}
        {/* Use of useRef hook */}
        {/* <RefsReact /> */}
        {/* Forwading useRef */}
        {/* <ForwadingRefs /> */}
        {/* Portals in React */}
        {/* <PortalsReact /> */}
        {/* Custom Hooks: Encapsulate reusable logic in hooks, allowing you to share functionality between different functional components without altering the component hierarchy. This is often the preferred method in modern React development.
        --------------------------------------------------------------------------
        Children as a Function: This pattern allows you to pass a function as a child to a component, similar to render props, and is a straightforward way to share rendering logic. */}
        {/* Custome Hooks */}
        {/* <CustomHook /> */}
        {/* Alternate for Custom Hooks is Children as a Function Pattern */}
        {/* <ParentPattern /> */}
        {/* Context API */}
        {/* <UserProvider value="Durgesh">
          <ComponentC />
        </UserProvider> */}
        {/* Another Example of useContext API */}
        {/* <UserProvider>
          <ThemeConsumer />
        </UserProvider> */}
        {/* HTTP Get Request in React.js */}
        {/* <HTTPHandling /> */}
        {/* HTTP POST Request in React.js */}
        {/* <HTTPHandlingPost /> */}
        {/* HTTP DELETE Request in React.js */}
        {/* <HTTPHandlingDelete/> */}
        {/* HTTP PUT Request in React.js */}
        {/* <HTTPHandlingPut /> */}
        {/* Difference between Destructuring  or No-Destructuring  */}
        {/* Destructuring */}
        {/* This syntax uses destructuring to directly extract the names property from the props object passed to the function. It is useful when you want to directly access specific properties of an object passed as an argument. */}
        {/* --------------------------------- */}
        {/* No-Destructuring */}
        {/* This syntax does not use destructuring. The entire props object is passed to the function. You then access properties of the props object within the function. */}

        {/* ----------------------------------HOOKS----------------------------------------- */}

        {/* useState Hook */}
        {/* <UseState /> */}

        {/* useEffect Hook */}
        {/* <UseEffectOne /> */}
        {/* <UseEffectTwo /> */}
        {/* <UseEffectTimer /> */}
        {/* Fetching Data */}
        {/* <FetchingData /> */}

        {/* useContext Hook */}
        {/* <UseContextHook /> */}

        {/* useReducer Hook */}
        {/* <UseReducerHook /> */}

        {/* useCallback Hook */}
        {/* <UseCallback /> */}

        {/* useMemo Hook */}
        {/* <UseMemo /> */}

        {/* useRef Hook */}
        {/* <UseRef /> */}
        {/* <UseRef2 /> */}

        {/* Custome Hooks */}
        <CustomeOne />
        <CustomeTwo />
      </div>
    </>
  );
}

export default App;
