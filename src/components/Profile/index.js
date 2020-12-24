import React from 'react';
import StyleProfile, {SocialLinks} from "./style";
import PropTypes from 'prop-types';
import Avatar from "../Avatar";
import Paragraph from "../Paragraph";
import Emoji from "../Emoji";
import Icon from "../Icon";
import  face from "../../asserts/images/face.jpg";
import "styled-components/macro"
import {faWeibo, faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";


function Profile({children, ...rest }) {
    return (
        <StyleProfile {...rest}>
            <Avatar
                css={`
                margin: 26px 0;
                `}
                src={face}
                size={"160px"}
                status={"online"}
                statusIconSize={"25px"}
            />

            <Paragraph size={"xlange"} css={`margin-bottom: 12px`}>
                小麦同学
            </Paragraph>

            <Paragraph size={"medium"} type={"secondary"} css={`margin-bottom: 18px`}>
                广州市 荔湾区
            </Paragraph>

            <Paragraph css={`margin-bottom: 26px`}>
                从头学怎么搭建CRM系统的小鹏友~加油
                <Emoji label={"fire"}>🔥</Emoji>
            </Paragraph>

            <SocialLinks>
                <Icon.Social icon={faWeibo} bgColor={"#F06767"} href={"https://www.weibo.com"}/>
                <Icon.Social icon={faGithub} bgColor={"black"} />
                <Icon.Social icon={faLinkedin} bgColor={"#2483c0"} />
            </SocialLinks>


        </StyleProfile>
    );
}


Profile.propTypes = {
   children: PropTypes.any
};

export default Profile;