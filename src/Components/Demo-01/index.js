import './index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretLeft, faCaretRight, faMagnifyingGlass, faTable } from '@fortawesome/free-solid-svg-icons'

const DragTabsMenu = (props) => {

const rightBtnClick = () =>{
    const tabsBox = document.querySelector(".tab-menu")
    tabsBox.scrollLeft += 100;
}
const leftBtnClick = () =>{
    const tabsBox = document.querySelector(".tab-menu")
    tabsBox.scrollLeft -= 100;
}

const mapsContent = (title) => {
    title.map((list, index) => {
        return (
          <tr key={index}>
            <td><input type='checkbox' /> <span>{list}</span></td>
            <td>
              <button type="button" className={props.isDTBottomOpen ? "btn btn-outline-primary btn-sm btn-bottom-active" : "btn btn-outline-primary btn-sm"}
                onClick={props.DTBottomOpen}
              >
                <FontAwesomeIcon icon={faTable} />
              </button>
              <button type="button" className="btn btn-outline-primary btn-sm m-1">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </button>
            </td>
          </tr>
        )
    
      })
} 

    return ( 
        <>
            <section className="main-container">
                <nav>

                </nav>
                <div className="tab-nav-bar">
                    <div className="tab-navigation">
                        <div className="icon" onClick={leftBtnClick}><FontAwesomeIcon className='left-btn' icon={faCaretLeft} size="xl" /></div>                        
                        <ul className="tab-menu">
                            <li className="tab"></li>
                            <li className="tab">Lớp bản đồ</li>
                            <li className="tab">Tìm kiếm</li>
                            <li className="tab">Thuộc tính</li>
                            <li className="tab">Đã Lưu</li>
                            <li className="tab"></li>
                        </ul>
                        <div className="icon" onClick={rightBtnClick}><FontAwesomeIcon className='right-btn' icon={faCaretRight} size="xl" /></div>
                    </div>
                    <div className='tabs-content'>

                    </div>
                </div>
                <div className="main-map">
                    <div className='map'></div>
                    <div className="detail-attri"></div>
                </div>
            </section>        
        </>
     );
}
 
export default DragTabsMenu;