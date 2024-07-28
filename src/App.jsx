import "./App.css";
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";
import StateHook from "./components/StateHook";
import SetState from "./components/SetState";
import Parent from "./components/Parent";
import ConditionalRendering from "./components/ConditionalRendering";
import NameList from "./components/NameList";
// import StylesInReact from "./components/StylesInReact";
import styles from "./CSS_Style.module.css";
import FormHandling from "./components/FormHandling";
import FragmentDemo from "./components/FragmentDemo";
import TableFragment from "./components/TableFragment";
import Pure_Component from "./components/Pure_Component";
import Diff_Pure_Regu from "./components/Diff_Pure_Regu";
import MemoParent from "./components/MemoParent";
import RefsReact from "./components/RefsReact";
import ForwadingRefs from "./components/ForwadingRefs";
import PortalsReact from "./components/PortalsReact";
import CustomHook from "./components/CustomHook";
import ParentPattern from "./components/ParentPattern";
import { UserProvider } from "./components/UserContext";
import ThemeConsumer from "./components/ThemeConsumer";
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
        <UserProvider>
          <ThemeConsumer />
        </UserProvider>
      </div>
    </>
  );
}

export default App;
