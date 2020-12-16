import React from "react";
import Icon from "../components/Icon"
import  "stories/story.css"
import {ReactComponent as LogoIcon} from "../asserts/icons/smile.svg"
import {faCommentDots, faFolder, faStickyNote} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export default {
    title: "UI 组件/Icon",
    components: Icon
};

export const Default = () => <Icon icon={LogoIcon} />
export const CustomerColor = () => <Icon icon={LogoIcon} height={48} width={48}/>
export const CustomerSize = () => <Icon icon={LogoIcon} color={"red"} />

export const FontAwesome = () => {
    return <FontAwesomeIcon icon ={faCommentDots}/>
}

export const FontAwesomeColor = () => {
    return <FontAwesomeIcon icon ={faCommentDots} style={{color: "#ccc"}}/>
}

export const FontAwesomeSizes = () => {
    return (
        <div className="rowElements">
            <FontAwesomeIcon icon ={faCommentDots} style={{fontSize: "24px"}}/>
            <FontAwesomeIcon icon ={faFolder} style={{fontSize: "36px"}}/>
            <FontAwesomeIcon icon ={faStickyNote} style={{fontSize: "48px"}}/>
        </div>


        )

}