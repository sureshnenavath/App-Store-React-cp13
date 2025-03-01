import React from 'react'
import './index.css' // Ensure correct path

const AppItem = ({eachAppList}) => (
  <li>
    <div className="app-list-item">
      <img
        src={eachAppList.imageUrl}
        alt={eachAppList.appName}
        className="app-img"
      />
      <button className="app-butt">{eachAppList.appName}</button>
    </div>
  </li>
)

export default AppItem
