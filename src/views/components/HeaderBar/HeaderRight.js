import HeaderAcc from './HeaderAcc'
import HeaderMessenger from './HeaderMessenger'
import HeaderNotification from './HeaderNotification'

const HeaderRight = () => {
  return (
    <div className='header-right'>
        <HeaderMessenger />
        <HeaderNotification />
        <HeaderAcc />
    </div>
  )
}

export default HeaderRight