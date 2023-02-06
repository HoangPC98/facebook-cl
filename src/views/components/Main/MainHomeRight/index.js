

const MainHomeRight = () => {
    return (
        <div id="main-right">
            <section className="container-right">
                <div className="container-right__page">
                    <div className="container-right__page-head">
                        <p className="container-right__page-head-text">Trang của bạn</p>
                        <div className="container-right__page-more more-dots">
                            <i className="fas fa-ellipsis-h" />
                        </div>
                    </div>
                    <div className="container-right__page-item">
                        <img
                            src="https://pluspng.com/img-png/nodejs-logo-png-show-images-in-console-with-node-js-console-png-600.png"
                            alt=""
                            className="container-right__page-item-avatar"
                        />
                        <span className="container-right__page-item-title">NodeJS Medeia</span>
                    </div>
                    <div className="container-right__page-ads">
                        <div className="container-right__page-ads-img">
                            <i className="fas fa-volume-down" />
                        </div>
                        <div className="container-right__page-ads-text">Tạo quảng cáo</div>
                    </div>
                </div>
                <div className="container-right__connect">
                    <div className="container-right__connect-head">
                        <p className="container-right__connect-head-text">Đang online</p>
                        <div className="container-right__connect-head-more more-dots">
                            <i className="fas fa-ellipsis-h" />
                        </div>
                    </div>
                    <ul className="container-right__connect-list"></ul>
                </div>
            </section>
        </div>
    )
}

export default MainHomeRight