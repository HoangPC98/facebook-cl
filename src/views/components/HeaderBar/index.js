import HeaderCenter from './HeaderCenter'
import HeaderLeft from './HeaderLeft'
import HeaderRight from './HeaderRight'
import './index.css'

const HeaderBar = () => {
    return (
        <header className="header">
            <div className="header-grid">
                <HeaderLeft />
                <HeaderCenter />
                <HeaderRight />
            </div>
        </header>
    )
}

export default HeaderBar