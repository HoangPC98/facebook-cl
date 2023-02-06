
const HeaderCenter = () => {
    return (
        <div>
            <ul className="header-main">
                <li className="header-main__item home-btn active nav-home">
                    <i className="fas fa-home" />
                    <span className="header-main__item-title">Trang chủ</span>
                </li>
                <li className="header-main__item">
                    <i className="fas fa-user-friends" />
                    <span className="header-main__item-title">Nhóm</span>
                </li>
                <li className="header-main__item">
                    <i className="fas fa-gamepad" />
                    <span className="header-main__item-title">Trò chơi</span>
                </li>
                <li className="header-main__item nav-left-layout">
                    <i className="fas fa-bars" />
                    <span className="header-main__item-title">Khác</span>
                </li>
            </ul>
        </div>
    )
}

export default HeaderCenter