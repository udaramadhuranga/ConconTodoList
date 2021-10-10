//All the frontend route codes are manage in here 

import {BrowserRouter as Router,Route} from "react-router-dom";
import ManageItems from './pages/ItemPages/itemMainPage'
import DoneItems from './pages/ItemPages/doneItemsPage'

function App() {
  return (
    <div className="App">
     
        <Router>
        <Route path="/" exact component={ManageItems}/>
        <Route path="/doneItems" exact component={DoneItems}/>



        </Router>

    </div>
  );
}

export default App;
