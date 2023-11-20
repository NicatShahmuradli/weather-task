import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { DatePicker } from 'antd';
import './App.css'
import axios from 'axios';
import Card from "./Card"
import { Input, Space } from 'antd';
const { Search } = Input;

function App() {
  const [data, setData] = useState({})
  const [check, setCheck] = useState(false)
  let key="085cb0bd2e733a2f16536dc3c0c49c2c"
  const onSearch = (value, _e, info) => {
    axios(`https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=${key}`).then(
      res=>{
      setData(res.data)
      setCheck(true)
    
      })    


     

    // useEffect(() => {
    //   axios(`https://api.openweathermap.org/data/2.5/weather?q=baku&appid=${key}`).then(
    //     res=>{
    //     setData(res.data)
      
    //     })      
    //   },[])
  };

  useEffect(() => {
    axios(`https://api.openweathermap.org/data/2.5/weather?q=baku&appid=${key}`).then(
      res=>{
      setData(res.data)
    
      })      
    },[])

  return (
    <>
     <Search placeholder="input search text" onSearch={onSearch} enterButton />

{/* <h1>{data.name}</h1> */}
    {check? <Card data={data}/>:null}

      
    </>
  )
}

export default App
