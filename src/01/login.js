import { useRef } from 'react'
import { useRecoilState } from 'recoil'
import { AtomN } from './StAtom'

export default function Login() {

    const txt1Ref = useRef()
    const txt2Ref = useRef()
    const [loginTF, setLoginTF] = useRecoilState(AtomN) // 로그인상태를 전역으로 관리 (recoil)
    const handleOK = (event) => {
        event.preventDefault();
        if (txt1Ref.current.value === "") {
            alert('Email을 입력하시오 !');
            txt1Ref.current.focus();
            return;
        }
        if (txt2Ref.current.value === "") {
            alert('password를 입력하시오 !');
            txt2Ref.current.focus();
            return;
        }
        if (txt1Ref.current.value === "2eemj000@gmail.com" && txt2Ref.current.value === "0000") {
            setLoginTF(true);
            alert(`${txt1Ref.current.value}님 반갑습니다 !`);
            
         } else {
            alert('로그인 정보와 일치하지 않습니다 !');
            txt1Ref.current.focus();
            return;
        }
    }

return (
    <div className="flex min-h-full flex-col justify-center px-6 py-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="text-center text-2xl font-bold leading-4 tracking-tight text-gray-900">[ Sign in to your account ]</h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-7" action="#" method="POST">
                <div>
                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-slate-600">Email address</label>
                    <div className="mt-2">
                        <input ref={txt1Ref} id="email" name="email" type="text"
                            required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6" />
                    </div>
                </div>

                <div>
                    <div className="flex items-center justify-between">
                        <label htmlFor="password" className="block text-sm font-medium leading-6 text-slate-600">Password</label>
                    </div>
                    <div className="mt-2">
                        <input ref={txt2Ref} id="password" name="password" type="password"
                            required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6" />
                    </div>
                </div>
                <div>
                    {loginTF === true ? (
                    <button onClick={handleOK} type="submit" className="flex w-full justify-center rounded-md bg-orange-400 px-3 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-orange-500">sign out</button>
                    ) : (
                        <button onClick={handleOK} type="submit" className="flex w-full justify-center rounded-md bg-orange-400 px-3 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-orange-500">sign in</button>
                    )}
                    
                </div>
            </form>
        </div>
    </div>
)
}
