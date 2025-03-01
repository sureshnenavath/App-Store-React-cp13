import React from 'react'
import './index.css' // Ensure correct path

const AppItem = ({eachAppList}) => (
  <li className="app-list-item">
    <img
      src={eachAppList.imageUrl}
      alt={eachAppList.appName}
      className="app-img"
    />
    <p className="app-name">{eachAppList.appName}</p>
  </li>
)

export default AppItem
