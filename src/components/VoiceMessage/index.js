import React from 'react';
import StyleVoiceMessage from "./style";
import Button from "../Button";
import Icon from "../Icon";
import {ReactComponent as Play} from "../../asserts/icons/play.svg";
import {ReactComponent as Wave} from "../../asserts/icons/wave.svg";
import Text from "../Text";
import PropTypes from 'prop-types';
import theme from "../../theme";

function VoiceMessage({children,time, type, ...rest }) {
    return (
        <StyleVoiceMessage type={type} {...rest}>
            <Button size={"40px"}>
                <Icon
                    icon={Play}
                    color={"white"}
                    width={"14"}
                    height={"16"}
                    style={{transform: "translateX(1px)"}}
                />
            </Button>
            <Icon icon={Wave} width={"100%"} height={"100%"} color={theme.primaryColor}/>
            <Text bold>{time}</Text>

        </StyleVoiceMessage>
    );
}


VoiceMessage.propTypes = {
   children: PropTypes.any,
    type: PropTypes.oneOf(["mine"]),
    time: PropTypes.string
};

export default VoiceMessage;