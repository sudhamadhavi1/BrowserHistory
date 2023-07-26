import './index.css'

const BrowserHistory = props => {
  const {historyDetails, deleteHistory} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = historyDetails

  const onDelete = () => {
    deleteHistory(id)
  }

  return (
    <li className="history-card-conatiner">
      <div className="items">
        <p>{timeAccessed}</p>
        <img src={logoUrl} className="logo-img" alt="domain logo" />
        <p>{title}</p>
        <p>{domainUrl}</p>
      </div>
      <button
        className="delete-button"
        onClick={onDelete}
        type="button"
        data-testid="delete"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png "
          alt="delete"
          className="delete-img"
        />
      </button>
    </li>
  )
}

export default BrowserHistory
