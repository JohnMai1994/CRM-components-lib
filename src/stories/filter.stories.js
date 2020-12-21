import React from "react";
import Filter from "../components/Filter"
import Select from "../components/Select";
import Option from "../components/Option";
import Button from "../components/Button";
import Icon from "../components/Icon";
import {ReactComponent as Plus} from "../asserts/icons/plus.svg"
import  "stories/story.css"

export default {
    title: "UI 组件/Filter",
    components: Filter
};

export const Default = () => (
    <Filter>
        <Filter.Filters label={"列表排序"}>
            <Select>
                <Option>最新消息优先</Option>
                <Option>在线好友优先</Option>
            </Select>
        </Filter.Filters>

        <Filter.Action label={"创建会话"}>
            <Button>
                <Icon icon={Plus} width={12} height={12}/>
            </Button>
        </Filter.Action>


    </Filter>


)