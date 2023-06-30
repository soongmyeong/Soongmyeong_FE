import {Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import SignIn from './pages/SingIn';
import Post from './pages/Posts';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/signin" element={<SignIn/>} />
      <Route path="/post" element={<Post/>}>
        <Route path=":id"/>
      </Route>
    </Routes>
  );
}

export default App;
