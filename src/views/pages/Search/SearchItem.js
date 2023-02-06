
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { http, apiEndpoint } from '../../../common/httpRequest'

const SearchItem = ({ item }) => {
    var textFriendBtn = 'Add Friend'
    var styleFriendBtn = 'btn-primary'
    if (item.friendship_2u === 'pending') {
        textFriendBtn = 'Cancel Request'
        styleFriendBtn = 'btn-secondary'
    }
    else if (item.friendship_2u === 'follow') {
        textFriendBtn = 'Folowing'
        styleFriendBtn = 'btn-light'
    }
    else if (item.friendship_2u === 'friend') {
        textFriendBtn = 'Send Message'
        styleFriendBtn = 'btn-success'
    }
    const { addFriendReq } = apiEndpoint
    const addFriendRequest = async (user_id) =>{
        const addFrRes = await http[addFriendReq.method](addFriendReq.path, { receiver_uid: item.user_id })
        console.log('ADDD FRIEND',addFrRes)
    }

    return (
        <div className="user-item">
            <div className="row">
                <div className="col-md-2 col-sm-2">
                    <Link to={'/users/profile?uid=' + item.user_id} className="profile-link">
                        <img
                            path={'users/profile?uid=' + item.user_id}
                            src={item.user_avatar_url}
                            className="profile-photo-lg" alt="user"
                        />
                    </Link>
                </div>
                <div className="col-sm-7">
                    <h5>
                        <Link to={'/users/profile?uid=' + item.user_id} className="profile-link">{item.user_name}</Link>
                    </h5>

                    <p>{item.num_friend} friends ({item.mutual_friend.length} mutual friend)</p>
                </div>
                <div className="col-md-3 col-sm-3">
                    <Button 
                        id={"addfr-uid_" + item.user_id} 
                        className={'btn pull-right add-fr-btn ' + styleFriendBtn}
                        onClick={(e) =>{ addFriendRequest(e.target.id.split('_')[1])}}
                    >
                        {textFriendBtn}
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default SearchItem