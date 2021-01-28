import React from 'react';
import StyleConversation, {Conversations, MyChatBubble} from "./style";
import ChatBubble from "../ChatBubble";
import VoiceMessage from "../VoiceMessage";
import Emoji from "../Emoji";
import TitleBar from "../TitleBar";
import Footer from "../Footer";
import PropTypes from 'prop-types';

function Conversation({onAvatarClick,onVideoClick,  children, ...rest}) {
    return (
        <StyleConversation {...rest}>
            <TitleBar onVideoClick={onVideoClick} onAvatarClick={onAvatarClick}/>
            <Conversations>
                <ChatBubble time={"昨天 下午14：26"}>
                    Hello 小朋友，你在干什么
                </ChatBubble>


                <MyChatBubble time={"昨天 下午16：30"}>
                    没有啊，就是一直在加班改bug，然后修改各种UI/UX
                </MyChatBubble>


                <ChatBubble time={"昨天 下午18：10"}>
                    <VoiceMessage time={"01:24"}/>
                </ChatBubble>


                <MyChatBubble time={"昨天 下午16：30"}>
                    明天搞一把英雄联盟，拿个首胜就睡觉
                    <Emoji label={"loveandpeace"}>🤟</Emoji>
                    <Emoji label={"loveandpeace"}>🤟</Emoji>
                </MyChatBubble>



            </Conversations>

            <Footer/>


        </StyleConversation>
    );
}


Conversation.propTypes = {
    children: PropTypes.any
};

export default Conversation;