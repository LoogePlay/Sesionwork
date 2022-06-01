import Header from "../Components/Header";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import NotFound from "./NotFound";
import Registration from "./Registration";
import Main from './home'
import Order from "./just-order";
import Footer from "../Components/footer";

function App() {
  return (
    <div>
      <Header/>
        <Router>
          <Routes>
            <Route path='/home' element={<Main/>}/>
            <Route path='/login' element={<Registration/>}/>
            <Route path="/order" element={<Order/>}/>
            <Route path='*' element={<NotFound/>}/>
          </Routes>
        </Router>
      <Footer/>
    </div>
  );
}

export default App;