// Write your code here
import './index.css'

const TabItem = props => {
  const {eachTabList, onHandleTabClick, isActive} = props
  const applyLineStyle = isActive ? 'active-tab-btn' : ''
  const handleClick = () => {
    onHandleTabClick(eachTabList.tabId)
  }
  return (
    <li>
      <button className={`tab-btn ${applyLineStyle}`} onClick={handleClick}>
        {eachTabList.displayText}
      </button>
    </li>
  )
}
export default TabItem
