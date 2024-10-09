import {createRoot} from "react-dom/client";
import { App as NewApp} from "./App";

// created a element which create root and hold
const react_vite = createRoot(document.getElementById("root"));
// changes in root element 
react_vite.render(<NewApp />)