import React, { useState } from 'react'

function ReadValeur({ children}) {
    const [affichePlus, setAffichePlus] = useState(false)

    const toggleReadMore = () =>{
        setAffichePlus(prevState => !prevState)
    }
  return (
    <div>
        {affichePlus ? children : '•	Volonté Existentielle : Chaque individu manifeste sa vie en respectant les droits de l’autre'}
      <button onClick={toggleReadMore} className='text-rouge font-bold text-xl'>{affichePlus ? "Voir Moins" : "...Voir Plus"}</button>
    </div>
  )
}

export default ReadValeur