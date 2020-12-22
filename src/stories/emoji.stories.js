import React from "react";
import Emoji from "../components/Emoji"
import  "stories/story.css"

export default {
    title: "UI 组件/Emoji",
    components: Emoji
};

export const Default = () => (
    <div>
        <Emoji label={"smile"}>🙂 </Emoji>
        <Emoji label={"todo"}> ✅ </Emoji>
        <Emoji label={"clock"}> ⏰ </Emoji>
    </div>
)