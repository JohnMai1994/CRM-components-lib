import React from 'react';
import StyleConversation, {Conversations, MyChatBubble} from "./style";
import ChatBubble from "../ChatBubble";
import VoiceMessage from "../VoiceMessage";
import Emoji from "../Emoji";
import TitleBar from "../TitleBar";
import Footer from "../Footer";
import PropTypes from 'prop-types';
import {useSpring} from "react-spring";

function Conversation({onAvatarClick,onVideoClick,  children, ...rest}) {
    const topBarAnimeProps = useSpring({
        opacity: 1,
        transform: "translate3d(0px, 0px, 0px)",
        from: {opacity: 0, transform: "translate3d(0px, -50px, 0px)"},
        delay: 300,
    })

    const convsAnimeProps = useSpring({
        opacity: 1,
        transform: "translate3d(0px, 0px, 0px)",
        from: {opacity: 0, transform: "translate3d(50px, 0px, 0px)"},
        delay: 300,
    })

    const footAnimeProps = useSpring({
        opacity: 1,
        transform: "translate3d(0px, 0px, 0px)",
        from: {opacity: 0, transform: "translate3d(0px, 0px, 50px)"},
        delay: 300,
    })




    return (
        <StyleConversation {...rest}>
            <TitleBar
                onVideoClick={onVideoClick}
                onAvatarClick={onAvatarClick}
                animeProps={topBarAnimeProps}
            />
            <Conversations style={convsAnimeProps}>
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

            <Footer animeProps={footAnimeProps} />


        </StyleConversation>
    );
}


Conversation.propTypes = {
    children: PropTypes.any
};

export default Conversation;