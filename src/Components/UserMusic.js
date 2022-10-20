import React from "react";


function UserMusic({SongData}) {
    return (
        <div className="music-player">
            <div className="song-icon" style={{backgroundImage: `url("${SongData.songCover}")`}}>
            </div>
            <div className="song-info">
                <div className="now-playing">Now Playing</div>
                <div className="song-name">{SongData.songName}</div>
                <div className="song-singer">{SongData.singerName}</div>
                <div className="progressbar">
                    <div className="progressbar-active">

                    </div>
                </div>
                <div className="progressbar-num">
                    <div className="num">2:28</div>
                    <div className="num">4:09</div>
                </div>
            </div>
        </div>
    );

}

export default UserMusic;