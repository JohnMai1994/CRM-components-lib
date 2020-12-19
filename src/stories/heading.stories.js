import React from "react";
import Heading from "../components/Heading"
import  "stories/story.css"

export default {
    title: "排版/Heading",
    components: Heading
};

export const Header = () => (

    <>
        <Heading level={1}> 这是标题 </Heading>
        <Heading level={2}> 这是标题 </Heading>
        <Heading level={3}> 这是标题 </Heading>
        <Heading level={4}> 这是标题 </Heading>
        <Heading level={5}> 这是标题 </Heading>
        <Heading level={6}> 这是标题 </Heading>
    </>
)
