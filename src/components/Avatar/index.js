import React from 'react';
import StyleAvatar, {AvatarClip, AvatarImage, StatusIcon} from "./style";
import PropTypes from 'prop-types';

// src: 图片状态 img path
// size: 图片大小 img size
// status: 状态 online or offline
// statusIconSize: 在线状态图片尺寸 Status Icon picture size
function Avatar
({
     src,
     size = "48px",
     status,
     statusIconSize = "8px",
     ...rest
 }) {
    return (
        <StyleAvatar {...rest}>
            {
                status && <StatusIcon status={status} size={size} statusIconSize={statusIconSize}/>
            }
            <AvatarClip size={size}>
                <AvatarImage src={src} alt="Avatar"/>
            </AvatarClip>
        </StyleAvatar>
    );
}


Avatar.propTypes = {
    src: PropTypes.string.isRequired,
    size: PropTypes.string,
    status: PropTypes.oneOf(["online", "offline"]),
    statusIconSize: PropTypes.string
};

export default Avatar;