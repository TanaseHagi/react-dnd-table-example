import React, { useState, useCallback } from 'react'
import DraggableCard from "./DraggableCard";
import update from 'immutability-helper'
import { ItemTypes } from './ItemTypes';

const style = {
  width: 400,
}

const trStyle = {
  border: '1px dashed gray',
  padding: '0.5rem 1rem',
  marginBottom: '.5rem',
  backgroundColor: 'white',
  cursor: 'move',
}

export interface ContainerProps {
  index: number;
  id: any;
  color: string;
  moveCard: (dragIndex: number, hoverIndex: number) => void;
}

export interface ContainerState {
  cards: Array<{
    id: number
    text: string
  }>
}

const Container: React.FC<ContainerProps> = (props) => {
  {
    const [cards, setCards] = useState([
      {
        id: 1,
        text: 'Write a cool JS library',
      },
      {
        id: 2,
        text: 'Make it generic enough',
      },
      {
        id: 3,
        text: 'Write README',
      },
      {
        id: 4,
        text: 'Create some examples',
      },
      {
        id: 5,
        text:
          'Spam in Twitter and IRC to promote it (note that this element is taller than the others)',
      },
      {
        id: 6,
        text: '???',
      },
      {
        id: 7,
        text: 'PROFIT',
      },
    ])

    const moveCard = useCallback(
      (dragIndex: number, hoverIndex: number) => {
        const dragCard = cards[dragIndex]
        setCards(
          update(cards, {
            $splice: [[dragIndex, 1], [hoverIndex, 0, dragCard]],
          }),
        )
      },
      [cards],
    )

    return (
      <DraggableCard
        index={props.index}
        id={props.id}
        moveCard={props.moveCard}
        parentIndex={-1}
        color={props.color}
        type={ItemTypes.BODY}
      >
        {(ref, isDragging) => {
          const opacity = isDragging ? 0 : 1;
          return (
            <tbody ref={ref} style={{ backgroundColor: props.color, ...style, opacity }}>
              <tr>
                <td style={{ fontWeight: "bold" }}>Header {props.index + 1}</td>
                <td>some</td>
                <td>column</td>
                <td>extra</td>
              </tr>
              {cards.map((card, cardIndex) =>
                <DraggableCard
                  key={card.id}
                  index={cardIndex}
                  id={card.id}
                  moveCard={moveCard}
                  parentIndex={props.index}
                  color={props.color}
                  type={ItemTypes.ROW}
                >
                  {(ref, isDragging) => {
                    const opacity = isDragging ? 0 : 1;
                    return (
                      <tr ref={ref} style={{ backgroundColor: props.color, ...trStyle, opacity }}>
                        <td style={{ backgroundColor: props.color }}>{card.text}</td>
                        <td style={{ backgroundColor: props.color }}>111</td>
                        <td style={{ backgroundColor: props.color }}>222</td>
                        <td style={{ backgroundColor: props.color }}>333</td>
                      </tr>
                    )
                  }}
                </DraggableCard>
              )}
            </tbody>
          )
        }}
      </DraggableCard>
    )
  }
}

export default Container
