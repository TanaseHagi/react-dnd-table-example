import React, { useState, useCallback } from 'react'
import Example from './example'
import update from 'immutability-helper'

function App() {
  // eslint-disable-next-line
  const [bodys, setBodys] = useState([
    {
      id: 1,
      color: "lightgray"
    },
    {
      id: 2,
      color: "skyblue"
    }
  ]);

  const moveCard = useCallback(
    (dragIndex: number, hoverIndex: number) => {
      const dragCard = bodys[dragIndex]
      setBodys(
        update(bodys, {
          $splice: [[dragIndex, 1], [hoverIndex, 0, dragCard]],
        }),
      )
    },
    [bodys],
  )

  return (
    <table>
        {bodys.map((body, index) => {
          return (
            <Example key={body.id} color={body.color} index={index} id={body.id} moveCard={moveCard} />
          );
        })}
    </table>
  );

}

export default App;
