import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './component/Header/Header';
import Shop from './component/Shop/Shop';

function App() {
  return (
    <div className="App container">
     <Header></Header>
     <Shop></Shop>
     <hr />
    </div>
  );
}


export default App;
