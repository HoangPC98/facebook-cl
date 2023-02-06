

const MainHomeLeft = () => {
    return (
        <div id="main-left">
            <section className="container-left">
                <div className="header-switch sub-switch">
                    <div className="header-switch__box">
                        <div
                            style={{ color: "rgba(235, 235, 235, 0.842)" }}
                            className="header-switch-icon switch-moon"
                        >
                            <i className="fas fa-moon" />
                        </div>
                        <div
                            style={{ color: "rgb(226, 226, 116)" }}
                            className="header-switch-icon switch-sun"
                        >
                            <i className="fas fa-sun" />
                        </div>
                    </div>
                </div>
                <div className="container-left__favorite">
                    <ul className="favorite-list">
                        <li className="favorite-item">
                            <img
                                src="/img/Home/item-fav-1.png"
                                alt=""
                                className="favorite-item__img"
                            />
                            <span className="favorite-item__text">Bạn bè</span>
                        </li>
                        <li className="favorite-item">
                            <img
                                src="/img/Home/item-fav-2.png"
                                alt=""
                                className="favorite-item__img"
                            />
                            <span className="favorite-item__text">Đã lưu</span>
                        </li>
                        <li className="favorite-item">
                            <img
                                src="/img/Home/item-fav-3.png"
                                alt=""
                                className="favorite-item__img"
                            />
                            <span className="favorite-item__text">Watch</span>
                        </li>
                        <li className="favorite-item">
                            <img
                                src="/img/Home/item-fav-4.png"
                                alt=""
                                className="favorite-item__img"
                            />
                            <span className="favorite-item__text">Nhóm</span>
                        </li>
                        <li className="favorite-item">
                            <img
                                src="/img/Home/item-fav-5.png"
                                alt=""
                                className="favorite-item__img"
                            />
                            <span className="favorite-item__text">Marketplace</span>
                        </li>
                    </ul>
                    <div className="container-left__more more-less-btn">
                        <div className="container-left__more-icon more-less-icon">
                            <i className="fas fa-chevron-down" />
                        </div>
                        <span className="container-left__more-text more-less-text">Xem thêm</span>
                    </div>
                    <ul className="container-left__more-list">
                        <li className="favorite-item">
                            <img
                                src="/img/Home/item-fav-6.png"
                                alt=""
                                className="favorite-item__img"
                            />
                            <span className="favorite-item__text">Chơi game</span>
                        </li>
                        <li className="favorite-item">
                            <img
                                src="/img/Home/item-fav-7.png"
                                alt=""
                                className="favorite-item__img"
                            />
                            <span className="favorite-item__text">Yêu thích</span>
                        </li>
                        <li className="favorite-item">
                            <img
                                src="/img/Home/item-fav-8.png"
                                alt=""
                                className="favorite-item__img"
                            />
                            <span className="favorite-item__text">Sự kiện</span>
                        </li>
                        <li className="favorite-item">
                            <img
                                src="/img/Home/item-fav-9.png"
                                alt=""
                                className="favorite-item__img"
                            />
                            <span className="favorite-item__text">Kỉ niệm</span>
                        </li>
                    </ul>
                    <div className="container-left__less more-less-btn">
                        <div className="container-left__more-icon more-less-icon">
                            <i className="fas fa-chevron-up" />
                        </div>
                        <span className="container-left__more-text more-less-text">Ẩn bớt</span>
                    </div>
                </div>
                <div className="container-left__shortcut">
                    <div className="shortcut-head">
                        <div className="shortcut-head__text">Lối tắt của bạn</div>
                        <span className="shortcut-head__btn">Chỉnh sửa</span>
                    </div>
                    <ul className="shortcut-list">
                        <li className="shortcut-item">
                            <img
                                src="/img/Home/avatar-notify-4.jpg"
                                alt=""
                                className="shortcut-item__img"
                            />
                            <span className="shortcut-item__text">Titan Gaming</span>
                        </li>
                        <li className="shortcut-item">
                            <img
                                src="/img/Home/item-group-1.png"
                                alt=""
                                className="shortcut-item__img"
                            />
                            <span className="shortcut-item__text">Cờ tướng</span>
                        </li>
                        <li className="shortcut-item">
                            <img
                                src="/img/Home/item-group-2.png"
                                alt=""
                                className="shortcut-item__img"
                            />
                            <span className="shortcut-item__text">Nametests</span>
                        </li>
                        <li className="shortcut-item">
                            <img
                                src="/img/Home/item-group-3.png"
                                alt=""
                                className="shortcut-item__img"
                            />
                            <span className="shortcut-item__text">J2TEAM Community</span>
                        </li>
                        <li className="shortcut-item">
                            <img
                                src="/img/Home/item-group-4.png"
                                alt=""
                                className="shortcut-item__img"
                            />
                            <span className="shortcut-item__text">Chia sẻ cùng thách đấu</span>
                        </li>
                    </ul>
                    <div className="container-left__more more-less-btn">
                        <div className="container-left__more-icon more-less-icon">
                            <i className="fas fa-chevron-down" />
                        </div>
                        <span className="container-left__more-text more-less-text">Xem thêm</span>
                    </div>
                    <ul className="container-left__more-list">
                        <li className="shortcut-item">
                            <img
                                src="/img/Home/item-group-5.png"
                                alt=""
                                className="shortcut-item__img"
                            />
                            <span className="shortcut-item__text">Ngôi sao lấp lánh Offical</span>
                        </li>
                        <li className="shortcut-item">
                            <img
                                src="/img/Home/item-group-6.png"
                                alt=""
                                className="shortcut-item__img"
                            />
                            <span className="shortcut-item__text">Sinh viên OU</span>
                        </li>
                        <li className="shortcut-item">
                            <img
                                src="/img/Home/item-group-7.png"
                                alt=""
                                className="shortcut-item__img"
                            />
                            <span className="shortcut-item__text">LÀM CHỦ SLIDE</span>
                        </li>
                    </ul>
                    <div className="container-left__less more-less-btn">
                        <div className="container-left__less-icon more-less-icon">
                            <i className="fas fa-chevron-up" />
                        </div>
                        <span className="container-left__less-text more-less-text">Ẩn bớt</span>
                    </div>
                </div>
                <footer className="container-left__footer">
                    <p className="container-left__footer-text">
                        <a href="">Quyền riêng tư</a> -<a href="">Điều khoản</a> -
                        <a href="">Quảng cáo</a> -<a href="">Cookie</a> -
                        <span className="container-left__footer-more-text">Xem thêm</span>
                        <br /> Facebook © 2021
                    </p>
                </footer>
            </section>
        </div>
    )
}

export default MainHomeLeft