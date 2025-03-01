import React from 'react'
import './index.css' // Ensure you have the correct path

const TabItem = ({eachTabList, isActive, onHandleTabClick}) => {
  const clickButton = () => {
    onHandleTabClick(eachTabList.tabId)
  }
  return (
    <li>
      <button
        className={`tab-btn ${isActive ? 'active-tab-btn' : ''}`}
        onClick={clickButton}
      >
        {eachTabList.displayText}
      </button>
    </li>
  )
}

export default TabItem
