import React from "react";
import Badge from "../components/Badge"
import "stories/story.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCommentDots} from "@fortawesome/free-solid-svg-icons";

export default {
    title: "UI 组件/Badge",
    components: Badge
};

export const Default = () => <Badge count={5}/>
export const DoVariant = () => {
    return <Badge show variant="dot">
        <FontAwesomeIcon icon={faCommentDots} style={{fontSize: "24px"}}/>
    </Badge>
}
export const ShowZero = () => <Badge count={0} showZero/>