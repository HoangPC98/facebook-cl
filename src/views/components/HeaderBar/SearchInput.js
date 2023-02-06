import   { useContext } from 'react'
import { http } from '../../../common/httpRequest'
import { useNavigate } from "react-router-dom"
import { useNavContext } from '../../../store/Context'


const SearchInput = () => {
    const { apiNav, setApiNav } = useNavContext()
    const navigate = useNavigate();

    const getSearchApi = async (keyCode, keyword) => {
        console.log(keyword, keyCode)
        if (keyCode === 'Enter') {
            keyword = keyword.replaceAll(' ', '_')
            setApiNav({endpoint: '/users/search', q : {key: keyword}})
            navigate(`/search`)
        }
    }
    console.log(apiNav)
    return (
        <div className="header-left__search">
            <div className="header-left__search-icon">
                <i className="fal fa-search" />
            </div>
            <input
                onKeyDown={(e) => { getSearchApi(e.key, e.target.value) }}
                type="text"
                id="search-input"
                className="header-left__search-input"
                placeholder="Search in Facebook"
            />
        </div>
    )
}

export default SearchInput