import { useState } from 'react'

const Color = ({ color, selectedColor, setSelectedColor }) => {
  const classes = `${color} ${selectedColor === color ? 'selected' : ''}`.trim()
  return (
    <div
      className={classes}
      onClick={() => setSelectedColor(color)}
      role="button"
      aria-label={`Select ${color}`}
    />
  )
}

export default function Picker() {
  const [selectedColor, setSelectedColor] = useState('')

  return (
    <>
      <div id="navbar">
        <div>Currently selected: </div>
        <div className={selectedColor}>{selectedColor || 'none'}</div>
      </div>

      <div id="colors-list">
        <Color
          color="yellow"
          selectedColor={selectedColor}
          setSelectedColor={setSelectedColor}
        />
        <Color
          color="green"
          selectedColor={selectedColor}
          setSelectedColor={setSelectedColor}
        />
        <Color
          color="black"
          selectedColor={selectedColor}
          setSelectedColor={setSelectedColor}
        />
      </div>
    </>
  )
}
