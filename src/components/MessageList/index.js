import React from 'react';
import StyleMessageList, {ChatList} from "./style";
import PropTypes from 'prop-types';
import MessageCard from "../MessageCard";
import face from "../../asserts/images/face.jpg"
import FilterList from "../FilterList";
import { animated} from "react-spring";
import useStaggeredList from "../../hooks/useStaggeredList";
import messagesData from "../../data/messages"


function MessageList({...rest}) {
    const trailAnimes = useStaggeredList(6)


    return (
        <StyleMessageList {...rest}>
            <FilterList
                options={["最新消息优先", "在线好友优先"]}
                actionLabel="创建会话"
            >
                <ChatList>
                    {
                        messagesData.map((message, index) => (
                            <animated.div key={message.id} style={trailAnimes[index]}>
                                <MessageCard
                                    key={message.id}
                                    active={index === 3}
                                    replied={message.replied}
                                    avatarSrc={message.avatarSrc}
                                    name={message.name}
                                    avatarStatus={message.status}
                                    statusText={message.statusText}
                                    time={message.time}
                                    message={message.message}
                                    unreadCount={message.unreadCount}
                                />
                            </animated.div>
                        ))
                    }
                </ChatList>
            </FilterList>
        </StyleMessageList>
    );
}


MessageList.propTypes = {
    children: PropTypes.any
};

export default MessageList;