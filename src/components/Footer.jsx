const Footer = (props) => {

    const {showModal, handleToggleModal, data} = props

  return (
    <footer>
        <div className="bgGradiant"></div>
        <div>
            <h2>APOD</h2>
            <h1>{data?.title}</h1>
        </div>
        <button onClick={handleToggleModal}>
            <i className="fa-solid fa-circle-info"></i>
        </button>
    </footer>
  )
}

export default Footer