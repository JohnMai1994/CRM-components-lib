import React from "react";
import Popover from "../components/Popover"
import Button from "../components/Button";
import "stories/story.css"

export default {
    title: "UI 组件/Popover",
    components: Popover
};





export const Default = () => (
    <div
        style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "50vh"
        }}
    >
        <Popover content={"你好呀"}>
            <Button shape={"rect"}>点我</Button>
        </Popover>
    </div>

)


export const withOffset = () => (
    <div
        style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "50vh"
        }}
    >
        <Popover offset="left" content={"Hello"}>
            <Button shape={"rect"}>点我</Button>
        </Popover>
        <div style={{width: "50px"}}/>
        <Popover offset="right" content={"Hello"}>
            <Button shape={"rect"}>点我</Button>
        </Popover>
    </div>

)
