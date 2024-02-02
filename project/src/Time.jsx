import { useState , useEffect} from 'react'
const Time=()=>{
    const [time, setTime]=useState(new Date())
useEffect(()=>{
setInterval(()=>{
  setTime(new Date.now())
},1000)
return ()=>clearInterval(setInterval)
},[])
return (

    <>
     <h2>{time.toLocaleTimeString()}</h2>
    </>
)

}
export default Time;