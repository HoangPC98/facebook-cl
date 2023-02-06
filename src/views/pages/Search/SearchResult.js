
import SearchItem from './SearchItem'

const SearchResult = ({ searchData }) => {
    console.log('SearchResult', searchData)
    return (
        <div class="container">
            <div class="row">
                <div id="search-items">
                    {searchData.map(item => {
                        return <SearchItem item={item} />
                    })}
                </div>
            </div>

        </div>
    )
}

export default SearchResult