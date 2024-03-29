import React, { useRef, ReactElement } from 'react'
import { useDrag, useDrop, DropTargetMonitor } from 'react-dnd'
import { XYCoord } from 'dnd-core'
import { ItemTypes } from './ItemTypes';

export interface DraggableCardProps {
  id: any;
  index: number;
  moveCard: (dragIndex: number, hoverIndex: number) => void;
  parentIndex: number;
  color: string;
  type: ItemTypes;
  children(ref: React.RefObject<any>, isDragging: boolean): ReactElement | null;
}

interface DragItem {
  index: number;
  id: string;
  type: string;
}

const DraggableCard: React.FC<DraggableCardProps> = ({ id, index, moveCard, parentIndex, color, children, type }) => {
  const ref = useRef<HTMLTableRowElement>(null)
  const [, drop] = useDrop({
    accept: `${type}-${parentIndex}`,
    hover(item: DragItem, monitor: DropTargetMonitor) {
      if (!ref.current) {
        return
      }
      const dragIndex = item.index
      const hoverIndex = index

      // Don't replace items with themselves
      if (dragIndex === hoverIndex) {
        return
      }

      // Determine rectangle on screen
      const hoverBoundingRect = ref.current!.getBoundingClientRect()

      // Get vertical middle
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2

      // Determine mouse position
      const clientOffset = monitor.getClientOffset()

      // Get pixels to the top
      const hoverClientY = (clientOffset as XYCoord).y - hoverBoundingRect.top

      // Only perform the move when the mouse has crossed half of the items height
      // When dragging downwards, only move when the cursor is below 50%
      // When dragging upwards, only move when the cursor is above 50%

      // Dragging downwards
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return
      }

      // Dragging upwards
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return
      }

      // Time to actually perform the action
      moveCard(dragIndex, hoverIndex)

      // Note: we're mutating the monitor item here!
      // Generally it's better to avoid mutations,
      // but it's good here for the sake of performance
      // to avoid expensive index searches.
      item.index = hoverIndex
    },
  })

  const [{ isDragging }, drag] = useDrag({
    item: { type: `${type}-${parentIndex}`, id, index },
    collect: (monitor: any) => ({
      isDragging: monitor.isDragging(),
    }),
  })

  drag(drop(ref))

  return typeof children === "function"
    ? children(ref, isDragging)
    : null;
}

export default DraggableCard
