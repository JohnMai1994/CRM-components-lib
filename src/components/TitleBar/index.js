import React from 'react';
import StyleTitleBar, {Title, Actions} from "./style";
import PropTypes from 'prop-types';
import Avatar from "../Avatar";
import Paragraph from "../Paragraph";
import Text from "../Text";
import Icon from "../Icon";
import face from "../../asserts/images/face.jpg"
import {ReactComponent as Call} from "../../asserts/icons/call.svg"
import {ReactComponent as Camera} from "../../asserts/icons/camera.svg"
import {ReactComponent as Options} from "../../asserts/icons/options.svg"
import Dropdown from "../Dropdown";
import {DropdownItem} from "../Dropdown/style";
import Seperator from "../Seperator";

function TitleBar(
    {
        animeProps,
        style,
        onVideoClick,
        onAvatarClick,
        children,
        ...rest
    }) {
    return (
        <StyleTitleBar style={{ ...style, ...animeProps}} {...rest}>
            <Avatar onClick={onAvatarClick} status={"offline"} src={face}/>
            <Title>
                <Paragraph size={"large"}>小麦同学</Paragraph>
                <Paragraph type={"secondary"}>
                    <Text>离线</Text>
                    <Text>· 最后阅读： 3小时前</Text>
                </Paragraph>
            </Title>
            <Actions>
                <Icon opacity={0.4} icon={Call} onClick={onVideoClick}/>
                <Icon opacity={0.4} icon={Camera}/>

                <Dropdown
                    content={
                        <>
                            <DropdownItem>
                                <Paragraph>个人资料</Paragraph>
                            </DropdownItem>
                            <DropdownItem>
                                <Paragraph>关闭会话</Paragraph>
                            </DropdownItem>
                            <Seperator/>
                            <DropdownItem>
                                <Paragraph type={"danger"}>屏蔽此人</Paragraph>
                            </DropdownItem>
                        </>
                    }
                >
                    <Icon opacity={0.3} icon={Options}/>
                </Dropdown>

            </Actions>
        </StyleTitleBar>
    );
}


TitleBar.propTypes = {
    children: PropTypes.any
};

export default TitleBar;