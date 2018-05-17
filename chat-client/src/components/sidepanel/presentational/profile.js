import React from 'react'

class Profile extends React.Component {
    render() {
        let user = JSON.parse(sessionStorage.getItem('user'));
        return <div id="profile">
            <div className="wrap">
                <img id="profile-img" src={"https://api.adorable.io/avatars/285/" + user.nick + ".png"} className="online" alt=""/>
                <div>
                    <span className="profile-name"> { user.nick } </span>
                    <span className="profile-info"> <i className="fa fa-calendar" aria-hidden="true"></i>  { user.age } </span>
                    <span className="profile-info"> <i className="fa fa-building" aria-hidden="true"></i> { user.city } </span>
                </div>
            </div>
        </div>
    }
}

export default Profile