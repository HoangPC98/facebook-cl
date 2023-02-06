import PropTypes from 'prop-types'
import SearchInput from './SearchInput'
import LogoIcon from './LogoIcon'

const HeaderLeft = props => {
    return (
        <div className="header-left">
            <LogoIcon />
            <SearchInput />
        </div>
    )
}

export default HeaderLeft