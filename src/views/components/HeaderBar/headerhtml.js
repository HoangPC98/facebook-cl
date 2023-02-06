
import './index.css'


function headerhtml() {
    return (
        <div>
            <header className="header">
                <div className="header-grid">
                    <div className="header-left">
                        <a href="/home">
                            <div className="header-left__logo">
                                <i className="fab fa-facebook header-left__icon-logo" />
                            </div>
                        </a>
                        <div className="header-left__search">
                            <div className="header-left__search-icon">
                                <i className="fal fa-search" />
                            </div>
                            <input
                                type="text"
                                id="search-input"
                                className="header-left__search-input"
                                placeholder="Search in  facebook"
                            />
                        </div>
                    </div>
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
                    <div className="header-switch">
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
                    <ul className="header-right">
                        <li className="header-right__profile nav-wall">
                            <a href="/profile/me" className="link-profile a-non-decor flex-roww">
                                <img
                                    src="https://thumbs.dreamstime.com/b/default-avatar-profile-vector-user-profile-default-avatar-profile-vector-user-profile-profile-179376714.jpg"
                                    className="header-profile__img avatar-img-logined"
                                    id="header-avatar"
                                />
                                <span
                                    id="header-username"
                                    className="header-profile__name user-name-text-logined "
                                />
                            </a>
                        </li>
                        <li className="header-right__item plus">
                            <i className="fas fa-plus header-right__item-plus" />
                            <div className="header-right__item-more">
                                <h2 className="header-right__item-more-head">Tạo</h2>
                                <ul className="header-right__item-more-list">
                                    <div>
                                        <li className="header-right__item-more-item">
                                            <div className="header-right__item-more-item__icon">
                                                <i className="fas fa-edit" />
                                            </div>
                                            <div className="header-right__item-more-item__content">
                                                <div className="header-right__item-more__head">Đăng</div>
                                                <div className="header-right__item-more-item-more__note">
                                                    Chia sẻ bài viết trên Bảng tin.
                                                </div>
                                            </div>
                                        </li>
                                        <li className="header-right__item-more-item">
                                            <div className="header-right__item-more-item__icon">
                                                <i className="fas fa-book-open" />
                                            </div>
                                            <div className="header-right__item-more-item__content">
                                                <div className="header-right__item-more__head">Tin</div>
                                                <div className="header-right__item-more-item-more__note">
                                                    Bạn có thể chia sẻ hoặc viết gì đó.
                                                </div>
                                            </div>
                                        </li>
                                        <li className="header-right__item-more-item">
                                            <div className="header-right__item-more-item__icon">
                                                <i className="fas fa-video" />
                                            </div>
                                            <div className="header-right__item-more-item__content">
                                                <div className="header-right__item-more__head">
                                                    Phòng họp mặt
                                                </div>
                                                <div className="header-right__item-more-item-more__note">
                                                    Chat video với bất kì ai trên hoặc bên ngoài Facebook, không
                                                    giới hạn thời gian.
                                                </div>
                                            </div>
                                        </li>
                                    </div>
                                    <li className="header-right__item-more-item">
                                        <div className="header-right__item-more-item__icon">
                                            <i className="fas fa-font-awesome-flag" />
                                        </div>
                                        <div className="header-right__item-more-item__content">
                                            <div className="header-right__item-more__head">Trang</div>
                                            <div className="header-right__item-more-item-more__note">
                                                Kết nối, chia sẻ với khách hàng hoặc fan
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="header-right__item">
                            <i className="fab fa-facebook-messenger header-right__item-mess" />
                            <div className="header-right__item-more header-right__mess">
                                <div className="mess-heading">
                                    <h2 className="mess-heading__text">Messenger</h2>
                                    <div className="mess-heading__right">
                                        <div className="mess-heading__right-icon">
                                            <i className="fas fa-ellipsis-h" />
                                        </div>
                                    </div>
                                </div>
                                <div className="mess-search">
                                    <div className="mess-search__icon">
                                        <i className="far fa-address-card" />
                                    </div>
                                    <input
                                        className="mess-search__input"
                                        type="text"
                                        placeholder="Search in Messenger"
                                    />
                                </div>
                                <ul className="mess-list">
                                    <li className="mess-item">
                                        <div>
                                            <img
                                                src="./assets/img/Home/avatar-mess-2.jpg"
                                                alt=""
                                                className="mess-item__avatar"
                                            />
                                        </div>
                                        <div className="mess-list__info">
                                            <div className="mess-item__info-name">Group thông báo IT02</div>
                                            <div className="mess-item__info-text">
                                                Trịnh: G9
                                                <i className="fas fa-circle" />
                                                <span>8 giờ</span>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="mess-item">
                                        <div className="mess-item__active">
                                            <img
                                                src="./assets/img/Home/avatar-mess-3.jpg"
                                                alt=""
                                                className="mess-item__avatar"
                                            />
                                        </div>
                                        <div className="mess-list__info">
                                            <div className="mess-item__info-name">Lê Hồ</div>
                                            <div className="mess-item__info-text">
                                                Bạn đã gửi 1 video
                                                <i className="fas fa-circle" />
                                                <span>10 giờ</span>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                                <form className="mess-open-Mess" action="./mess.html">
                                    <button className="mess-open-Mess__btn">
                                        Xem tất cả trong Messenger
                                    </button>
                                </form>
                            </div>
                        </li>
                        <li className="header-right__item">
                            <span className="header-right__item-count">1</span>
                            <i className="fas fa-bell header-right__item-notify" />
                            <div className="header-right__item-more header-right__notify">
                                <div className="notify-heading">
                                    <h2 className="notify-heading__text">Thông báo</h2>
                                    <div className="notify-heading__right">
                                        <div className="notify-heading__right-icon">
                                            <i className="fas fa-ellipsis-h" />
                                        </div>
                                    </div>
                                </div>
                                <div className="notify-content">
                                    <div className="notify-content__new">
                                        <div className="notify-content__new-head">
                                            <p className="notify-content__head-text new-notify__title">
                                                Mới
                                            </p>
                                            <ul className="notify-content__new-list"></ul>
                                            <p className="notify-content__head-text">Trước đó</p>
                                            <ul className="notify-content__before-list"></ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="header-right__item caret-down-btn">
                            <i className="fas fa-caret-down header-right__item-caret-down" />
                            <div className="header-right__item-more header-right__setting">
                                <div className="setting-head nav-wall">
                                    <img
                                        id="header-me-dropdown"
                                        src=""
                                        alt=""
                                        className="setting-head__avatar avatar-img-logined"
                                    />
                                    <div className="setting-head__content">
                                        <p className="setting-head__content-name full-name">
                                            Default UserName
                                        </p>
                                        <p className="setting-head__content-note">
                                            Xem trang cá nhân của bạn
                                        </p>
                                    </div>
                                </div>
                                <div className="setting__respond">
                                    <div>
                                        <div className="setting__respond-img">
                                            <i className="fas fa-exclamation-circle" />
                                        </div>
                                        <div className="setting__respond-content">
                                            <p className="setting__respond-title">Đóng góp ý kiến</p>
                                            <p className="setting__respond-note">
                                                Góp phần cải thiện Facebook mới.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <ul className="setting__list">
                                    <li className="setting__item">
                                        <div className="setting__item-img">
                                            <i className="fas fa-cogs" />
                                        </div>
                                        <p className="setting__item-content">
                                            Cài đặt &amp; quyền riêng tư
                                        </p>
                                        <i className="fas fa-chevron-right" />
                                    </li>
                                    <li className="setting__item">
                                        <div className="setting__item-img">
                                            <i className="fas fa-question-circle" />
                                        </div>
                                        <p className="setting__item-content">Trợ giúp &amp; hỗ trợ</p>
                                        <i className="fas fa-chevron-right" />
                                    </li>
                                    <li className="setting__item">
                                        <div className="setting__item-img">
                                            <i className="fas fa-moon" />
                                        </div>
                                        <p className="setting__item-content">Màn hình &amp; trợ năng</p>
                                        <i className="fas fa-chevron-right" />
                                    </li>
                                    <li className="setting__item nav-logout">
                                        <a>
                                            <div className="setting__item-img">
                                                <i className="fas fa-sign-out-alt" />
                                            </div>
                                            <p className="setting__item-content">Đăng xuất</p>
                                        </a>
                                    </li>
                                </ul>
                                <footer className="setting__footer">
                                    <span>Quyền riêng tư</span> ·<span>Điều khoản</span> ·
                                    <span>Quảng cáo</span> ·<span>Cookie</span> ·<span>Chính sách</span>{" "}
                                    · Facebook © 2021
                                </footer>
                            </div>
                        </li>
                    </ul>
                </div>
            </header>

        </div>
    )
}

export default headerhtml