import React from "react";
import Button from "../components/Button"
import  "stories/story.css"
import {ReactComponent as Plus} from "../asserts/icons/plus.svg"
import Icon from "../components/Icon";

export default {
    title: "UI 组件/Button",
    components: Button
};

export const RectButton = () => <Button shape="rect"> 默认按钮 </Button>
export const CircleButton = () => (
    <Button>
        <Icon icon={Plus} width={12} height={12}/>

    </Button>
)