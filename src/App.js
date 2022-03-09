import './App.css';
import Home from './pages/home/home';
// import Login from './pages/login/login';
import {Routes,Route,BrowserRouter} from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' exact element={<Home/>}/>
        {/* <Route path='/login' exact element={<Login/>}/> */}
        
{/* <div className="APP">
  <Home/>
</div> */}
        
     </Routes>
     </BrowserRouter>
  );
}

export default App;
