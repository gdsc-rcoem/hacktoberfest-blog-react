import React from "react";
import {DiGithubFull} from "react-icons/di";
import {GrInstagram} from "react-icons/gr";
import UserMusic from "./UserMusic";

function UserCard({id, name, about, bio, userNameGitHub, userNameInsta, songName, singerName, songCover}){

    let songData = {songName, singerName, songCover}
    console.log(userNameGitHub, userNameInsta, name, about)

    return(
        <article className="single-contrib">
        <div className="primary-card-container">
        <div className="intro">
            <div className="user-image" style={{backgroundImage: `url('/images/image${id}.jpg')`}}>
            </div>
            <div className="primary-info">
                <div className="name title">{name}</div>
                <div className="bio subtitle">{about}</div>
            </div>
        </div>
        <div className="about">
            <p> {bio}
            </p>
        </div>
        <div className="icon-tray" style={{display: 'flex', justifyContent: 'space-around', alignItems: 'center'}}>
            <a href={`https://github.com/${userNameGitHub}`} style={{textDecoration: 'none', color: 'black'}}> <DiGithubFull size={100} /></a>
            <a href={`https://instagram.com/${userNameInsta}`} style={{textDecoration: 'none', color: 'black'}}> <GrInstagram size={50} /></a>
        </div>
            <UserMusic SongData = {songData}/>
    </div>
        </article>
    );
}

export default UserCard;