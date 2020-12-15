import Avatar from "../components/Avatar";
import React from "react";
import face from "asserts/images/face.jpg"
import  "stories/story.css"


export default {
    title: "Example/Avatar",
    component: Avatar,
}

export const Default = () => <Avatar src={face} size={"48px"}/>

export const Sizes = () => {
    return <div className="rowElements">

        <Avatar src={face} size="xs" />
        <Avatar src={face} size="s" />
        <Avatar src={face} size="default" />
        <Avatar src={face} size="l" />
        <Avatar src={face} size="xl"/>
    </div>
}

export const Status = () => {
    return <div className="rowElements">
        <Avatar src={face} size={"xs"} status={"offline"} statusIconSize={"8px"}/>
        <Avatar src={face} size={"s"} status={"online"}/>
        <Avatar src={face} size={"m"} status={"offline"}/>
        <Avatar src={face} size={"l"} status={"online"}/>
        <Avatar src={face} size={"xl"} status={"offline"}/>
    </div>
}