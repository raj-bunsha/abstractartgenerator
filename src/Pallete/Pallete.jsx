import React from 'react'
import DropDown from '../Utilities/DropDown'
import Text from '../Utilities/Text'

function Pallete() {
  const color_palette_names = [
    "Forest",
    "Futuristic",
    "Sunset",
    "Vintage",
    "Crimson",
    "Vampire",
    "Lightning",
    "Pastel",
    "Lava",
    "Neon",
    "Lilac",
    "Soft Gray",
    "Low Saturation",
    "Poison",
    "Spring",
    "Black & White",
    "Corruption",
    "Ivy",
    "Ocean",
    "Royalty"
]
  return (
    <div className="card">
        {/* make a dropdown */}
        <Text Text="COLOR PALLETE" Size="1.2rem" />
        <DropDown options={color_palette_names} name="pallete"/>
    </div>
  )
}

export default Pallete