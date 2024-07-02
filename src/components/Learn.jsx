import React, { useEffect, useState } from 'react'
import data from './Data'

const Learn = () => {

  const [typeOfColor,setTypeOfColor]
  const [color,setColor] = useState("#000000");



  return (
    <div>
      <button onClick={()=>setTyp}>
        Create Hex color
      </button>
      <button>
        Create Rgb color
      </button>
      <button>
        Generate Random color
      </button>
    </div>
  )
}

export default Learn
