import { useState , useEffect} from 'react'

import './App.css'

function App() {
 const [time, setTime]=useState(new Date())
useEffect(()=>{
 const settingTime=setInterval(()=>{
  setTime(new Date())
},1000)
return ()=>clearInterval(settingTime)
},[])
  return (
    <>
      <h2>{time.toLocaleTimeString()} hello</h2>
      hi
    </>
  )
}

export default App
