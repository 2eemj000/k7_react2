import { useEffect,useState } from "react";
import ButtonC from "../UI/ButtonC";

export default function AirIndoor() {
  const [tdata, setTdata] = useState([]);

  const getFetchData = (url)=>{
    fetch(url)
    .then(resp=>resp.json())
    .then(data=>setTdata(data.response.body.items.item))
    .catch(err=>console.log(err))
  }

  useEffect(()=>{
    let url = 'http://apis.data.go.kr/6260000/IndoorAirQuality/getIndoorAirQualityByStation?serviceKey='
    url = `${process.env.REACT_APP_API_KEY}&pageNo=1&numOfRows=5&resultType=xml&controlnumber=2024052718&areaIndex=201193`;
    console.log(url)
    getFetchData(url);
},[]);

  return (
    <div>
        AirIndoor
    </div>
  )
}
