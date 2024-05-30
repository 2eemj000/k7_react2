// map과 filter는 배열에만 적용가능, object이면 키를 활용해서 사용, 결과도 배열로 나옴
// onClick={handleOK}이랑 아래랑 같은 의미 (뭘쓰든 상관없음)
// onClick={()=>handleOK(key값)} 인수가 있을 때는 반드시 이렇게 써야함

import { useEffect,useState,useRef } from "react";
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
  const [tags, setTags] = useState() // 화면 tr 생성
  // 컴포넌트 생성 시 selectbox에 다 나오도록
  useEffect(()=>{
    let tm = sarea.map(item=>item["측정소"])
    setOps(tm)
  },[])

  const handleStation = ()=>{
    let tm = sarea.filter(item=> item["측정소"] === selRef.current.value)
    tm=tm[0];
    console.log("handleStation", tm, selRef.current.value);
    setCode(tm["코드"]) // object로 풀리도록
    setStation(tm["측정소"]) // object로 풀리도록
  }
  const getFetchData = (url)=>{
    fetch(url)
    .then(resp=>resp.json())
    .then(data=>{console.log(data) ; setTdata(data.getIndoorAirQualityByStation.body.items.item)}) // tdata
    .catch(err=>console.log(err))
  }

  useEffect(()=>{
    let url = 'http://apis.data.go.kr/6260000/IndoorAirQuality/getIndoorAirQualityByStation?serviceKey='
    url = url+`${process.env.REACT_APP_API_KEY}&pageNo=1&numOfRows=104&resultType=json&controlnumber=2024052918`
    console.log(url)
    getFetchData(url);
},[]);

  useEffect(()=>{
    console.log(tdata)
  })

  useEffect(()=>{
    if (!station || !code) return;
    console.log("station",station)
    let tm = tdata.filter(item=>item['areaIndex']===code) // 위에서 code를 잡았으니까 
                  .map(item=>
                    <tr key={`${item['controlnumber']}${item['areaIndex']}`}
                        className="border-b border-neutral-200  ease-in-out hover:bg-neutral-100">
                      <th scope="col" className="px-6 py-3">{item["pm10"]}</th>
                      <th scope="col" className="px-6 py-3">{item["co2"]}</th>
                      <th scope="col" className="px-6 py-3">{item["co"]}</th>
                      <th scope="col" className="px-6 py-3">{item["no2"]}</th>
                      <th scope="col" className="px-6 py-3">{item["no"]}</th>
                      <th scope="col" className="px-6 py-3">{item["nox"]}</th>
                      <th scope="col" className="px-6 py-3">{item["o3"]}</th>
                      <th scope="col" className="px-6 py-3">{item["pm25"]}</th>
                      <th scope="col" className="px-6 py-3">{item["fad"]}</th>
                    </tr>
                  )
  console.log("station tm",tm)
  setTags(tm)
  },[code, station])

  return (
    <div className="w-full h-full flex flex-col justify-start items-center">
        <h1 className="w-10/12 text-2xl font-bold flex justify-center items-center m-5 p-5 ">
        실내공기질 측정소별 정보 조회
       </h1>
       <div className="w-full grid grid-cols-1 justify-center items-center">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 p-5 gap-5">
          <TailInput id="dt" type="date" inRef={inRef}/>
          <TailSelect id="sel" ops={ops} selRef={selRef} initText="--- 측정소 선택 ---" handleChange={handleStation} />
        </div>
        <table className="bg-slate-100 w-full p-2 text-left text-sm font-light text-surface">
          <thead className="border-b border-neutral-00 font-medium">
            <tr className="bg-orange-400 text-white font-bold">
              <th scope="col" className="px-6 py-3">미세먼지 측정값 (㎍/㎥)</th>
              <th scope="col" className="px-6 py-3">이산화탄소 측정값 (ppm)</th>
              <th scope="col" className="px-6 py-3">일산화탄소 측정값 (ppm)</th>
              <th scope="col" className="px-6 py-3">이산화질소 측정값 (ppm)</th>
              <th scope="col" className="px-6 py-3">일산화질소 측정값 (ppm)</th>
              <th scope="col" className="px-6 py-3">질소산화물 측정값 (ppm)</th>
              <th scope="col" className="px-6 py-3">오존 측정값 (ppm)</th>
              <th scope="col" className="px-6 py-3">초미세먼지 측정값 (㎍/㎥)</th>
              <th scope="col" className="px-6 py-3">폼말데하이드 측정값 (㎍/㎥)</th>
            </tr>
          </thead>
          <tbody>
            {tags}
          </tbody>
        </table>
       </div>
      </div>
  )
}
