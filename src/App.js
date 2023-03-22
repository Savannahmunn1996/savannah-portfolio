import "./App.css";
import PortfolioContainer from "./components/PortfolioContainer";



function App(component, pageProps) {
  return(
  <div className="bg-gradient-to-r from-green-200 to-blue-300 absolute top-0 left-0 w-full h-full">
 <PortfolioContainer />;
   
    <component {...pageProps} />
  </div> 
  )
}

export default App;
