import { useState } from 'react'

function ReadMission({limit, children}) {
    const [affichePlus, setAffichePlus] = useState(false)

    const toggleReadMore = () =>{
        setAffichePlus(prevState => !prevState)
    }

  return (
    <div>
        {affichePlus ? children : children.substr(0, limit)}
        <button onClick={toggleReadMore} className='text-rouge font-bold text-xl'>{affichePlus ? "Voir Moins" : "...Voir Plus"}</button>
    </div>
  )
}

export default ReadMission;