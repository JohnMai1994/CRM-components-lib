import React from "react";
import ChatBubble from "../components/ChatBubble"
import  "stories/story.css"

export default {
    title: "UI 组件/ChatBubble",
    components: ChatBubble,
    decorators: [storyFn => <div style={{padding:"24px"}}>{storyFn()}</div>]
};

export const FromOther = () => (
    <ChatBubble time="昨天 下午14: 26">
        这是一条其他人发送的聊天记录
    </ChatBubble>
)

export const FromMine = () => (
    <ChatBubble type="mine" time="昨天 下午16: 26">
        这是一条我自己发送的聊天记录
    </ChatBubble>
)