import React, {useState} from "react";
import NavBar, {MenuItem} from "../components/NavBar"
import "stories/story.css"
import {faCommentDots} from "@fortawesome/free-solid-svg-icons";
import "styled-components/macro"

export default {
    title: "页面/NavBar",
    components: NavBar
};

export const Default = () => <NavBar/>

export const ExploreDefault = () => <NavBar explore/>


export const Explore = () => {

    const [explore, setExplore] = useState(false)


    return (
        <div
            css={`
              display: flex;
              `}
        >
            <NavBar explore={explore}/>

            <button style={{height: "30px"}} onClick={() => setExplore(!explore)}>点击我</button>
        </div>
    )
}

export const MenuStory = () => {
    return (
        <div
            css={`
              background-color:${({theme}) => theme.darkPurple};
              width: 100px;
            `}
        >
            <MenuItem showBadge active icon={faCommentDots}/>
            <MenuItem icon={faCommentDots}/>
        </div>
    )
}

export const ExploreMenuStory = () => {
    return (
        <div
            css={`
              background-color:${({theme}) => theme.darkPurple};
              width: 300px;
            `}
        >
            <MenuItem showBadge explore active icon={faCommentDots}>聊天信息</MenuItem>
            <MenuItem explore icon={faCommentDots}>聊天信息</MenuItem>
        </div>
    )
}