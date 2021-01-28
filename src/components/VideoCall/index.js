import React, {useState} from 'react';
import StyleVideoCall, {Actions, Minimize, Action, Self, VideoCallAlert } from "./style";
import PropTypes from 'prop-types';
import videoCaller from "asserts/images/video-caller.jpg"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCompressAlt, faMicrophone, faPhoneSlash, faVideo, faVolumeMute} from "@fortawesome/free-solid-svg-icons";
import face from "asserts/images/face.jpg"
import Avatar from "../Avatar";
import Paragraph from "../Paragraph";
import "styled-components/macro"

function VideoCall({children, onHandOffClicked, ...rest }) {
    const [fullScreen, setFullScreen] = useState(true);

    if (!fullScreen) {
        return (
            <VideoCallAlert>
                <Avatar src={face} css={`grid-area: avatar`}/>
                <Paragraph size={"medium"} css={`grid-area: info`}>
                    正在跟 权志龙 进行视频通话
                </Paragraph>
                <Paragraph type={"secondary"} css={`grid-area: action`} onClick={() => setFullScreen(true)}>
                    点击切换全屏
                </Paragraph>
                <FontAwesomeIcon icon={faVideo} css={`grid-area: icon; font-size: 20px; justify-self: end;opacity: 0.3;`}/>
            </VideoCallAlert>   
            
        )
    }
    

    return (
        <StyleVideoCall src={videoCaller} {...rest}>
            <Minimize shape={"rect"} onClick={() => setFullScreen(false)}>
                <FontAwesomeIcon icon={faCompressAlt}/>
            </Minimize>
            <Actions>
                <Action>
                    <FontAwesomeIcon icon={faMicrophone}/>
                </Action>
                <Action type={"hangoff"}>
                    <FontAwesomeIcon icon={faPhoneSlash} onClick={onHandOffClicked}/>
                </Action>
                <Action>
                    <FontAwesomeIcon icon={faVolumeMute}/>
                </Action>
            </Actions>
            <Self src={face} size={"140px"}/>



        </StyleVideoCall>
    );
}

 
VideoCall.propTypes = {
   children: PropTypes.any
};

export default VideoCall;