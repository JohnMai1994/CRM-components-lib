import React from "react";
import Input from "../components/Input"
import "stories/story.css"
import Icon from "../components/Icon";
import {ReactComponent as ClipIcon} from "../asserts/icons/clip.svg"
import {ReactComponent as SmileIcon} from "../asserts/icons/smile.svg"


export default {
    title: "UI 组件/Input",
    components: Input
};

export const Default = () => <Input/>

export const Search = () => <Input.Search/>

export const WithAffix = () => <Input
    prefix={<Icon icon={ClipIcon} color={"#ccc"}/>}
    suffix={<Icon icon={SmileIcon} color={"#ccc"}/>}
    />

export const InputTextWithLabel = () => <Input.Text label={"昵称"}/>
export const InputTextWithoutLabel = () => <Input.Text />

