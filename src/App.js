import logo from './logo.svg';
import './App.css';
import courseData from './fakeData/courseData.js';
import Shop from './Components/Shop/Shop';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header';

function App() {
  
  return (
       <div>
         <Header></Header>
         <Shop></Shop>
       </div>
  );
}

export default App;
