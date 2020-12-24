import React from "react";
import Seperator from "../components/Seperator"
import  "stories/story.css"

export default {
    title: "UI 组件/Seperator",
    components: Seperator
};

export const Default = () => (
    <div style={{padding: "24px"}}>
        <Seperator/>
    </div>

    )