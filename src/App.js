import { BrowserRouter,Routes,Route, Navigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './App.css';
import Login from './01/Login';

function App() {
  return (
  <BrowserRouter>
  <div className="flex flex-col w-full max-w-screen-lg h-screen overflow-y-auto mx-auto">
    <header className='flex justify-between items-center text-xl font-bold h-20 p-10 bg-blue-100'>
      <p>리액트 실습</p> 
      <ul className='flex justify-center items-center gap-2'>
        <li className='bg-blue-400 hover:bg-orange-400 px-3 py-3 
                      rounded-md justify-center items-center
                      text-white font-bold text-sm'><Link to="/Login">Login</Link></li>                           
      </ul>
      {/* <p><RiHomeHeartFill className='text-3xl text-orange-500'/></p> */}
    </header>
    <main className='grow flex justify-center items-center'>
      <Routes>
        <Route path="/Login" element={<Login />}/>
      </Routes>
    </main>
    <footer className='flex justify-center items-center h-20 bg-yellow-900 text-slate-100'>
    ⓒ Lee Min Ju , K-digital-7
    </footer>
  </div>
  </BrowserRouter>
  );
}

export default App;
