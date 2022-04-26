import React from 'react'

const DraftQueen = ({queen, isSelected, toggleQueenSelected}) => {
  return (
    <div onClick={e => toggleQueenSelected(queen.id)}>
        <h3>{isSelected ? "X " : null}{queen.name}</h3>
        <hr />
    </div>
  )
}

export default DraftQueen