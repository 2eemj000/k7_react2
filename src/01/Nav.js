import { Link } from "react-router-dom"

import { useRecoilState } from 'recoil'
import { AtomN } from './StAtom'
export default function Nav() {
  const [loginTF, setLoginTF] = useRecoilState(AtomN)
  const handleLogout = () => {
    setLoginTF(false);
    alert('로그아웃 되었습니다.');

  };
  return (
    <header className='flex justify-between items-center text-xl font-bold h-20 p-10 bg-blue-100'>
      <p>리액트 실습</p> 
      <ul className='flex justify-center items-center gap-2'>   
        <li className='bg-blue-600 hover:bg-orange-600 px-5 py-3 
                        rounded-md justify-center items-center
                        text-white font-bold text-sm'><Link to="/AirIndoor">지하철 대기정보</Link></li>
        <li className='bg-slate-400 hover:bg-slate-600 px-3 py-3 
                            rounded-md justify-center items-center
                            text-white font-bold text-sm'>
                {loginTF === true ? (
                  <button onClick={handleLogout}>로그아웃</button>
                ) : (
                  <Link to="/Login">로그인</Link>
                )}
        </li>              
      </ul>
      {/* <p><RiHomeHeartFill className='text-3xl text-orange-500'/></p> */}
    </header>
  )
}
