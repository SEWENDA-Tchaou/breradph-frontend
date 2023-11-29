import React, { useState } from 'react'

function ReadPrincipe({ children}) {
    const [affichePlus, setAffichePlus] = useState(false)

    const toggleReadMore = () =>{
        setAffichePlus(prevState => !prevState)
    }
  return (
    <div>
        {affichePlus ? children : ' Ancrer sa vie en la VAV ; c’est partir de la stratégie SRA pour le bien-être. Ce qui incite à apprendre à :'}
        <button onClick={toggleReadMore} className='text-rouge font-bold text-xl'>{affichePlus ? "Voir Moins" : "...Voir Plus"}</button>
    </div>
  )
}

export default ReadPrincipe;