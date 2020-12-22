import React from 'react';
import StyleTitleBar, {Title, Actions} from "./style";
import PropTypes from 'prop-types';
import Avatar from "../Avatar";
import Paragraph from "../Paragraph";
import Text from "../Text";
import Icon from "../Icon";
import face from "../../asserts/images/face.jpg"
import {ReactComponent as Call } from "../../asserts/icons/call.svg"
import {ReactComponent as Camera } from "../../asserts/icons/camera.svg"
import {ReactComponent as Options} from "../../asserts/icons/options.svg"

function TitleBar({children, ...rest }) {
    return (
        <StyleTitleBar {...rest}>
            <Avatar status={"offline"} src={face}/>
            <Title>
                <Paragraph size={"large"}>小麦同学</Paragraph>
                <Paragraph type={"secondary"}>
                    <Text>离线</Text>
                    <Text>· 最后阅读： 3小时前</Text>
                </Paragraph>
            </Title>
            <Actions>
                <Icon opacity={0.4} icon={Call}/>
                <Icon opacity={0.4} icon={Camera}/>
                <Icon opacity={0.4} icon={Options}/>
            </Actions>
        </StyleTitleBar>
    );
}


TitleBar.propTypes = {
   children: PropTypes.any
};

export default TitleBar;