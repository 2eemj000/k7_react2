import { BrowserRouter,Routes,Route, Navigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './App.css';
import Login from './01/Login';
import AirIndoor from './01/AirIndoor';
import { RecoilRoot } from 'recoil';
import Nav from './01/Nav'; // App.js 파일에 있을 내용 나눠넣었음

function App() {

  return (
  <BrowserRouter>
  <RecoilRoot>
  <div className="flex flex-col w-full max-w-screen-lg h-screen overflow-y-auto mx-auto">
    <Nav />
    <main className='grow flex justify-center items-center'>
      <Routes>
        <Route path="/Login" element={<Login />}/>
        <Route path="/AirIndoor" element={<AirIndoor />}/>
      </Routes>
    </main>
    <footer className='flex justify-center items-center h-20 bg-yellow-900 text-slate-100'>
    ⓒ Lee Min Ju , K-digital-7
    </footer>
  </div>
  </RecoilRoot>
  </BrowserRouter>
  );
}

export default App;
