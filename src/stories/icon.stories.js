import React from "react";
import Icon from "../components/Icon"
import  "stories/story.css"
import {ReactComponent as LogoIcon} from "../asserts/icons/smile.svg"
import {faCommentDots, faFolder, faStickyNote} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {ReactComponent as Replied} from "../asserts/icons/replied.svg";

export default {
    title: "UI 组件/Icon",
    components: Icon
};

export const Default = () => <Icon icon={LogoIcon} />
export const  CustomerSize= () => <Icon icon={LogoIcon} height={48} width={48}/>
export const CustomerColor = () => <Icon icon={LogoIcon} color={"red"} />

export const FontAwesome = () => {
    return <FontAwesomeIcon icon ={faCommentDots}/>
}

export const FontAwesomeColor = () => {
    return <FontAwesomeIcon icon ={faCommentDots} style={{fontSize: "24px",color: "#ccc"}}/>
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

export const Test = () => (
    <Icon width={16} height={16} icon={Replied} color="rgba(41, 47,76,0.3)" opacity={1}
    />
)