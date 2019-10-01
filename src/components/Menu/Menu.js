import React from 'react';
import './Menu.css'

const Menu = (props) => {

  const handleClick = (event) => {
    console.log(event.target.className)
    props.selectTopic(event.target.className)
  }

  return (
    <ul>
      <li onClick={handleClick} className="entertainment">Entertainment</li>
      <li onClick={handleClick} className="health">Health</li>
      <li onClick={handleClick} className="local">Local</li>
      <li onClick={handleClick} className="science">Science</li>
      <li onClick={handleClick} className="technology">Technology</li>
    </ul>
  )
}

export default Menu;