import React from "react";
import {Link} from "react-router-dom";

const Header = (props)=>{
    const { site, profile} = props;
    const profileName = profile.firstName;
    const siteTitle = site.title;
    const logoImage = site.logoImage;
    return (
        <>
        <header>
            <div className="header-logo"><Link to="/"><img src={logoImage} alt="Realtor Logo" /></Link></div>
            <div className="header-title"><h1>{siteTitle}</h1></div>
            <div className="header-profile"> <Link to="/profile">Welcome {profileName}</Link></div>
        </header>
        </>
    )

}

export default Header