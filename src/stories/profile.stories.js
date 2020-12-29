import React from "react";
import Profile from "../components/Profile"
import  "stories/story.css"

export default {
    title: "页面/Profile",
    components: Profile
};

export const Default = () => <Profile status={"offline"}/>