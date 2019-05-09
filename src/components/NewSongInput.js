import React from 'react'
import PropTypes from 'prop-types'
import config from "../config";
import "../styles/new-song-input.css"

export const NewSongInput = ({songName, link, updateSongName, updateLink}) => (
    <div className="new-song-input column-center">
        <input type="text" className="song-name-input" value={songName}
        onChange={event => updateSongName(event.target.value)} placeholder={config.songNameInputPlaceHolder}/>
        <input type="text" className="song-link-input" value={link}
               onChange={event => updateLink(event.target.value)} placeholder={config.songLinkInputPlaceHolder}/>
    </div>
);


NewSongInput.propTypes = {
    songName: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    updateSongName: PropTypes.func.isRequired,
    updateLink: PropTypes.func.isRequired
};

export default NewSongInput;