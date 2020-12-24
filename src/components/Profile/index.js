import React from 'react';
import StyleProfile, {SocialLinks, CloseIcon, ContactSection,Photo, AlbumTitle, Album, AlbumSection, } from "./style";
import PropTypes, {func} from 'prop-types';
import Avatar from "../Avatar";
import Paragraph from "../Paragraph";
import Emoji from "../Emoji";
import Icon from "../Icon";
import Seperator from "../Seperator";
import Text from "../Text";
import  face from "../../asserts/images/face.jpg";
import  photo1 from "../../asserts/images/photo1.jpg";
import  photo2 from "../../asserts/images/photo2.jpg";
import  photo3 from "../../asserts/images/photo3.jpg";
import "styled-components/macro"
import {faWeibo, faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";
import {ReactComponent as Cross} from "../../asserts/icons/cross.svg";

function Profile({children, ...rest }) {
    return (
        <StyleProfile {...rest}>
            <CloseIcon icon={Cross}/>
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

            <Seperator css={`margin: 30px 0`}/>

            <ContactSection>
                <Description label={"联系电话"}>+1 15197812973</Description>
                <Description label={"电子邮箱"}>mjd64929@icloud.com</Description>
                <Description label={"个人网站"}>https://www.jiadong.work</Description>
            </ContactSection>

            <Seperator css={`margin: 30px 0`}/>

            <AlbumSection>
                <AlbumTitle>
                    <Text type={"secondary"}>相册 (31)</Text>
                    <a >查看全部</a>
                </AlbumTitle>
                <Album>
                    <Photo src={photo1} alt="" />
                    <Photo src={photo2} alt="" />
                    <Photo src={photo3} alt="" />
                </Album>
            </AlbumSection>


        </StyleProfile>
    );
}

function Description({label, children}) {
    return (
        <Paragraph>
            <Text type={"secondary"}>{label} :  </Text>
            <Text>{children}</Text>
        </Paragraph>

    )

}


Profile.propTypes = {
   children: PropTypes.any
};

export default Profile;