
import './App.scss';
import {  Routes, Route } from 'react-router-dom';
import Layout from './components/layout'; // import Layout component
import Home from './components/home';
import About from './components/About';


function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element ={<Home/>} />
        <Route path='about' element ={<About/>} />
      </Route>
    </Routes>
    </>
  );
}

export default App;