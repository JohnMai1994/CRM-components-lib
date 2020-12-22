import React from 'react';
import StyleChatBubble, {BubbleTip, Bubble, Time, MessageText} from "./style";
import PropTypes from 'prop-types';
import {ReactComponent as BubbleTipIcon} from "../../asserts/icons/bubbleTip.svg";

function ChatBubble({children, type, time, ...rest }) {
    return (
        <StyleChatBubble type={type} {...rest}>
            <Bubble>
                <BubbleTip icon={BubbleTipIcon} width={40} height={28} color={"white"}/>
                <MessageText>{children}</MessageText>
            </Bubble>
            <Time>{time}</Time>


        </StyleChatBubble>
    );
}


ChatBubble.propTypes = {
   children: PropTypes.any,
    type: PropTypes.oneOf(["mine"]),
    time: PropTypes.string,
};

export default ChatBubble;