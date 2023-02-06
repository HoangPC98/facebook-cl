import   { useEffect, useState } from 'react'

import HeaderBar from '../../components/HeaderBar'
import SearchResult from './SearchResult'
import { useNavContext } from '../../../store/Context'
import { http } from '../../../common/httpRequest'
import  Sidebar from '../../components/Sidebar'
import './index.css'


const SearchPage = () => {
    const { apiNav }  = useNavContext()
    const [searchData, setSearchData ] = useState([])

    useEffect(() => {
        const search = async () => {
            const searchRes = await http.get(apiNav.endpoint, apiNav.q)
            if(searchRes.code === 200){
                setSearchData(searchRes.data)
            }
        }
        search()
    }, [])

    return (
        <div>
            <div className="app">
                <div className="container-grid">
                    <HeaderBar />
                    <div className="main-body">
                        <Sidebar />
                        <SearchResult searchData={searchData}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchPage