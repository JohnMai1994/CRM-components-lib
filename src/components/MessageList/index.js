import React from 'react';
import StyleMessageList, {ChatList} from "./style";
import PropTypes from 'prop-types';
import Filter from "../Filter";
import Select from "../Select";
import Option from "../Option";
import Button from "../Button";
import Icon from "../Icon";
import Input from "../Input";
import {ReactComponent as Plus} from "../../asserts/icons/plus.svg";
import MessageCard from "../MessageCard";
import face from "../../asserts/images/face.jpg"


function MessageList({...rest }) {
    return (
        <StyleMessageList {...rest}>
            <Input.Search/>
            <ChatFilter/>
            <ChatList>
                {
                    [1,2,3,4,5,6].map((_, index) => (
                        <MessageCard
                            key={index}
                            active={index === 3 }
                            replied={index % 2 === 0}
                            avatarSrc={face}
                            name={"小麦同学"}
                            avatarStatus={index % 3 === 0 ? "online":"offline" }
                            statusText={index % 3 === 0 ? "在线":"不在线"}
                            time={`${index} 小时之前`}
                            message={"哪怕前路困难重重，我仍不惧向前"}
                            unreadCount={index}
                        />
                    ))
                }
            </ChatList>


        </StyleMessageList>
    );
}

function ChatFilter () {
    return (
        <Filter style={{padding: "20px 0"}}>
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
}






MessageList.propTypes = {
   children: PropTypes.any
};

export default MessageList;