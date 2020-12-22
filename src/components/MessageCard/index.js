import React from 'react';
import StyleMessageCard, {Name, UnreadBadge, MessageText, Message, Status, Time}from "./style";
import PropTypes from 'prop-types';
import Avatar from "../Avatar";
import {useTheme} from "styled-components";
import Icon from "../Icon";
import {ReactComponent as Replied } from "../../asserts/icons/replied.svg"


function MessageCard
({
     avatarSrc,
     avatarStatus,
     statusText,
     name,
     time,
     message,
     unreadCount,
     active,
     replied,
     children,
     ...rest
 }) {
    const theme = useTheme()

    return (
        <StyleMessageCard active={active} {...rest}>
            <Avatar status={avatarStatus} src={avatarSrc}/>

            <Name>{name}</Name>
            <Status>{statusText}</Status>
            <Time>{time}</Time>
            <Message replied={replied}>
                {
                    replied && (
                        <Icon
                            width={16}
                            height={16}
                            icon={Replied}
                            color={active? theme.inactiveColorDark: theme.inactiveColor}
                            style={{
                                justifyContent: "start"
                            }}
                        />
                    )
                }
                <MessageText>{message}</MessageText>
                <UnreadBadge count={unreadCount}/>
            </Message>
        </StyleMessageCard>
    );
}


MessageCard.propTypes = {
    avatarSrc: PropTypes.string.isRequired,
    avatarStatus: PropTypes.any,
    statusText: PropTypes.any,
    name: PropTypes.any,
    time: PropTypes.any,
    message: PropTypes.any,
    unreadCount: PropTypes.number,
    active: PropTypes.bool,
    replied: PropTypes.bool,
    children: PropTypes.any
};

export default MessageCard;