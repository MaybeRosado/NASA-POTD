const SideBar = (props) => {
    const {handleToggleModal, data} = props;

  return (
    <div className="sideBar">
        <div onClick={handleToggleModal} 
        className="bgOverlay">
            <div className="sideBarContents">
                <h2 className="descriptionTitle">{data?.title}</h2>
                <div className="descriptionContainer">
                    <p>{data?.date}</p>
                    <p>{data?.explanation}</p>
                </div>
            </div>
            <button onClick={handleToggleModal}>
                <i className="fa-solid fa-arrow-right"></i>
            </button>
        </div>
    </div>
  )
}

export default SideBar