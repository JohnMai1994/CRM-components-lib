import React from "react";
import MessageCard from "../components/MessageCard"
import face from "../asserts/images/face.jpg"
import "stories/story.css"

export default {
    title: "UI 组件/MessageCard",
    components: MessageCard
};

export const Default = () => (

    <MessageCard
        avatarSrc={face}
        name="小麦同学"
        avatarStatus="online"
        statusText={"在线"}
        time={"3 小时之前"}
        message={"即使爬到最高的山上，一次也只能脚踏实地"}
        unreadCount={2}
    />
)

export const Active = () => (
    <MessageCard
        active
        avatarSrc={face}
        name="小麦同学"
        avatarStatus="online"
        statusText={"在线"}
        time={"3 小时之前"}
        message={"即使爬到最高的山上，一次也只能脚踏实地"}
        unreadCount={2}
    />
)

export const Replied = () => (
    <>

        <MessageCard
            avatarSrc={face}
            name="小麦同学"
            avatarStatus="online"
            statusText={"在线"}
            time={"3 小时之前"}
            message={"即使爬到最高的山上，一次也只能脚踏实地"}
            unreadCount={2}
            replied
        />

        <MessageCard
            active
            avatarSrc={face}
            name="小麦同学"
            avatarStatus="online"
            statusText={"在线"}
            time={"3 小时之前"}
            message={"即使爬到最高的山上，一次也只能脚踏实地"}
            unreadCount={2}
            replied
        />

    </>
)