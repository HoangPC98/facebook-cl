import React from "react";

function NotificationList({ type, list }) {
  return (
    <div className="noti-item">
      <div className="row">
        <div className="col-md-2 noti-avatar">
          <img
            path={"users/profile?uid=" + item.user_id}
            src={item.user_avatar_url}
            className="profile-photo-lg"
            alt="user"
          />
        </div>
        <div className="col-sm-7 notification-content">
          <Link
            to={"/users/profile?uid=" + item.user_id} 
            className="profile-link"
          >
            <p className="noti-subject"></p>
            <p className="noti-title"></p>
            {item.user_name}
          </Link>
         
            {item.num_friend} friends ({item.mutual_friend.length} mutual
            friend)
        </div>
        <div className="col-md-1 read-yet">
         
        </div>
      </div>
    </div>
  );
}

export default NotificationList;
