import Header from "./Header";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import NotFound from "./NotFound";
import Registration from "./Registration";
import Main from './home'

function App() {
  return (
    <div>
      <Header/>
        <Router>
          <Routes>
            <Route path='/home' element={<Main/>}/>
            <Route path='/login' element={<Registration/>}/>
            <Route path='*' element={<NotFound/>}/>
          </Routes>
        </Router>
    </div>
  );
}

export default App;