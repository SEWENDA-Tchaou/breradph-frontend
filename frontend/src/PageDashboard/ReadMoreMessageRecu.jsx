import React, { useState } from 'react'

function ReadMoreMessageRecu({children}) {
    const [showReadMore2, setShowReadMore2] = useState(false)
    const toggleReadMore2 = ()=>{
        setShowReadMore2(prevState => !prevState)
    }
    let chars = ()=>{
      children
    }
  return (
    <div className='w-1/3 text-justify text-[10px]'>
        {showReadMore2 ? children : chars}
        <button onClick={toggleReadMore2} className='ml-14  text-md my-2 border p-1 rounded-xl'>{showReadMore2 ? "Voir Moins" : "Voir Plus"}</button>
    </div>
  )
}

export default ReadMoreMessageRecu;