import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./component/Header/Header";
import Shop from "./component/Shop/Shop";
import QusPart from "./component/QusPart/QusPart";
import Footer from "./component/Footer/Footer";

function App() {
  return (
    <div className="App container">
      <Header></Header>
      <Shop></Shop>
      <hr />
      <QusPart></QusPart>
      <Footer></Footer>
    </div>
  );
}

export default App;
