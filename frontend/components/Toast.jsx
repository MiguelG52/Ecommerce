import React,{useState, useEffect} from 'react'


const showToast = (duration)=>{
  const [active, setActive] = useState(true);
  
  useEffect(()=>{
    let timer = setTimeout(()=> setActive(false), duration*1000)
   
    return () => clearInterval(timer.current)
  })

  return(
    <>
      {active ? <p>hola</p>:<></>}
    </>
  )
}
const Toast = ({message, isActive}) => {  
  return (
    <div className={`${isActive ? 'toast': 'toast toast-hide'} `}>
      <div className="bg-white rounded-full p-1">
        <p>✔️</p>
      </div>
      <p>{message}</p>
    </div>
  )
}


export {Toast, showToast}