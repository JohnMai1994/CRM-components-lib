import React from "react";
import Paragraph from "../components/Paragraph"
import  "stories/story.css"

export default {
    title: "排版/Paragraph",
    components: Paragraph
};

export const Default = () => (
    <>
        <Paragraph> 这是一个段落 </Paragraph>
        <Paragraph> 这是一个段落 </Paragraph>
    </>
)

export const Ellipsis = () => (
    <Paragraph ellipsis>
        这是一个段落这是一个段落这是一个段落这是一个段落这是一个段落这是一个段落这是一个段落这是一个段落这是一个段落这是一个段落这是一个段落这是一个段落这是一个段落这是一个段落这是一个段落这是一个段落这是一个段落这是一个段落这是一个段落这是一个段落这是一个段落这是一个段落这是一个段落这是一个段落这是一个段落这是一个段落这是一个段落这是一个段落这是一个段落这是一个段落这是一个段落这是一个段落这是一个段落这是一个段落这是一个段落这是一个段落这是一个段落这是一个段落这是一个段落这是一个段落这是一个段落这是一个段落这是一个段落这是一个段落这是一个段落这是一个段落这是一个段落这是一个段落这是一个段落这是一个段落这是一个段落这是一个段落这是一个段落这是一个段落这是一个段落
    </Paragraph>

)