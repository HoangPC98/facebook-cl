
import HeaderBar from '../../components/HeaderBar/index'
import Main from '../../components/Main/index.js'
import './index.css'


const HomePage = () => {
    return (
        <div className="app">
            <div className="container-grid">
                <HeaderBar />
                <Main />
            </div>
        </div>

    )
}

export default HomePage