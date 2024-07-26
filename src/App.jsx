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
        <PortalsReact />
      </div>
    </>
  );
}

export default App;
