import "./styles.css";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/container/Header";
import Body from "./components/container/Body";
 
export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Body />
      </div>
    </BrowserRouter>
  );
}