import { useEffect,useState,useRef } from "react";
import ButtonC from "../UI/ButtonC";
import sarea from "./sarea.json";
import TailInput from "../UI/TailInput";
import TailSelect from "../UI/TailSelect"

export default function AirIndoor() {
  const [tdata, setTdata] = useState([]);
  const [ops,setOps] = useState([])
  const inRef = useRef();
  const selRef = useRef();
  const [code, setCode] = useState()
  const [station, setStation] = useState()
  // 컴포넌트 생성 시 selectbox에 station이 다 나오도록
  useEffect(()=>{
    let tm = sarea.map(item=>item["코드"])
    setOps(tm)
  },[])
  const handleStation = ()=>{
    let tm = sarea.filter(item=> item["코드"] === selRef.current.value)
    tm=tm[0]
    console.log(tm)
    setCode(selRef.current.value)
    setStation(tm["측정소"])
  }
  const getFetchData = (url)=>{
    fetch(url)
    .then(resp=>resp.json())
    .then(data=>setTdata(data.response.body.items.item))
    .catch(err=>console.log(err))
  }

  useEffect(()=>{
    let url = 'http://apis.data.go.kr/6260000/IndoorAirQuality/getIndoorAirQualityByStation?serviceKey='
    url = url+`${process.env.REACT_APP_API_KEY}&pageNo=1&numOfRows=5&resultType=xml&controlnumber=2024052718&areaIndex=201193`
    console.log(url)
    getFetchData(url);
},[]);

  return (
    <div className="w-full h-full flex flex-col justify-start items-center">
        <h1 className="w-10/12 text-2xl font-bold flex justify-center items-center m-5 p-5 ">
        실내공기질 측정소별 정보 조회
       </h1>
       <div className="w-full grid grid-cols-1 justify-center items-center">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 p-5 gap-5">
          <TailInput id="dt" type="date" inRef={inRef} />
          <TailSelect id="sel" ops={ops} selRef={selRef} initText="--- 측정소 선택 ---" handleChange={handleStation} />
        </div>
        <table className="bg-slate-100 w-full p-2 text-left text-sm font-light text-surface">
          <thead className="border-b border-neutral-400 font-medium">
            <tr className="bg-orange-400 text-white font-bold">
              <th scope="col" className="px-6 py-3">미세먼지 측정값(㎍/㎥)</th>
              <th scope="col" className="px-6 py-3">이산화탄소 측정값(ppm)</th>
              <th scope="col" className="px-6 py-3">일산화탄소 측정값(ppm)</th>
              <th scope="col" className="px-6 py-3">이산화질소 측정값(ppm)</th>
              <th scope="col" className="px-6 py-3">일산화질소 측정값(ppm)</th>
              <th scope="col" className="px-6 py-3">질소산화물 측정값(ppm)</th>
              <th scope="col" className="px-6 py-3">오존 측정값(ppm)</th>
              <th scope="col" className="px-6 py-3">초미세먼지 측정값(㎍/㎥)</th>
              <th scope="col" className="px-6 py-3">폼말데하이드 측정값(㎍/㎥)</th>

            </tr>
          </thead>
          <tbody>
            {/* {tags} */}
          </tbody>
        </table>
       </div>
      </div>
  )
}
