// Write your code here
import './index.css'

const AppItem = props => {
  const {eachAppList} = props
  return (
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
}
export default AppItem
