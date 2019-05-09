import {ADD_SONG, DELETE_SONG, UPDATE_LINK} from "./action-types";

export function updateLink(newLink) {
    return {type: UPDATE_LINK, link: newLink};
}

export function updateSongName(newSongName) {
    return {type: UPDATE_LINK, songName: newSongName};
}

export function addSong(name, link) {
    return {type: ADD_SONG, name: name, link: link};
}

export function deleteSong(id) {
    return {type: DELETE_SONG, id: id};
}