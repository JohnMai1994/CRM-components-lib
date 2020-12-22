import React from "react";
import VoiceMessage from "../components/VoiceMessage"
import  "stories/story.css"

export default {
    title: "UI 组件/VoiceMessage",
    components: VoiceMessage
};

export const Default = () => <VoiceMessage time={"01:24"}/>