import './App.css';
import Header from './components/Header';
import {BrowserRouter,Route , Switch} from 'react-router-dom';
import Grocery from './components/Grocery';
import ColorParent from './components/ColorParent';

function App() {
 
  return (
    <div className="App">
      <BrowserRouter>
      <Header title="React Fundamentals" />
       <Switch>
       <Route path="/" exact  component={Grocery}/>
       <Route path="/color" exact component={ColorParent}/>
       </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
