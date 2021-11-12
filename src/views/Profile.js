import React from "react";

import {data} from "../helpers/data";


const Profile = (props)=>{
    const profile = data.profile;
    return (
        <div className="profile-page">
        <h2>Profile</h2>
        <div className="profile">
            <div className="profile-image">
                <img src={profile.avatarImage} />
            </div>
            <div className="profile-info">

                <div className="profile-info-row">
                    <div className="label">First Name</div>
                    <div>{profile.firstName}</div>
                </div>
                <div className="profile-info-row">
                    <div className="label">Last Name</div>
                    <div>{profile.lastName}</div>
                </div>
                <div className="profile-info-row">
                    <div className="label">Phone</div>
                    <div>{profile.phone}</div>
                </div>
                <div className="profile-info-row">
                    <div className="label">Email</div>
                    <div >{profile.email}</div>
                </div>
                <div className="profile-info-row">
                    <div className="label">Bio</div>
                    <div>{profile.bio}</div>
                </div>

            </div>
        </div>
        </div>
    );
}


export default Profile;