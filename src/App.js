import "./App.css";
import Navbar from "./components/Navbar";

function App(component, pageProps) {
  return(
  <div>
    <Navbar />
    <component {...pageProps} />
  </div> 
  )
}

export default App;
