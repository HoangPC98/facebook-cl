import  { useState } from 'react'

const DropdownAcc = () => {
    return (
        <div className="header-right__item-more header-right__setting active">
            <div className="setting-head nav-wall">
                <img
                    id="header-me-dropdown"
                    src=""
                    alt=""
                    className="setting-head__avatar avatar-img-logined"
                />
                <div className="setting-head__content">
                    <p className="setting-head__content-name full-name">Default UserName</p>
                    <p className="setting-head__content-note">Xem trang cá nhân của bạn</p>
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
                    <p className="setting__item-content">Cài đặt &amp; quyền riêng tư</p>
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
                <span>Quảng cáo</span> ·<span>Cookie</span> ·<span>Chính sách</span> ·
                Facebook © 2021
            </footer>
        </div>
    )
}

export default DropdownAcc