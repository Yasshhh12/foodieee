import React, { useEffect, useState } from 'react'
import data from './Data'

const Learn = () => {
  const [selected, setSelected] = useState(null)

  const handleClickEvent = (setCurrentId) => {
    setSelected(setCurrentId === selected ? null : setCurrentId)
  }

  return (
    <div>
      <h1>Accordian</h1>
      <div>
        {data.map((dataItem, index) => (
          <div>
            <div key={index}>
              <h2 onClick={() => handleClickEvent(dataItem.id)}>
                {dataItem.question}
              </h2>
              <span>+</span>
            </div>
            <div>
              {selected == dataItem.id ? <div>{dataItem.answer}</div> : null}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Learn
