
import MainHomeLeft from './MainHomeLeft/index'
import MainCenter from './MainCenter/index'
import MainHomeRight from './MainHomeRight/index'
import './index.css'

const Main = () => {
  const path = window.location.pathname;
  return (
    <div className='home-main d-flex justify-content-between'>
        {(path==='/' || '/home') && <MainHomeLeft />}
        <MainCenter />
        {(path==='/' || '/home') && <MainHomeRight />}
    </div>
  )
}

export default Main