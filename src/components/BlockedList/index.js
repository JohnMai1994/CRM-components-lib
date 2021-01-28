import React from 'react';
import StyleBlockedList, {
    BlockedAvatar,
    BlockedName,
    ClosableAvatar,
    CloseIcon,
    FriendList,
    SettingsMenu
} from "./style";
import PropTypes from 'prop-types';
import Icon from "../Icon";
import {ReactComponent as ArrowMenuLeft} from "../../asserts/icons/arrowMenuLeft.svg";
import {ReactComponent as closeCircle} from "../../asserts/icons/closeCircle.svg";
import face from "../../asserts/images/face.jpg";
import Text from "../Text";
import "styled-components/macro"
import {useHistory} from "react-router-dom"

function BlockedList({children, ...rest }) {
    const history = useHistory();

    return (
        <StyleBlockedList {...rest}>
            <SettingsMenu>
                <Icon
                    icon={ArrowMenuLeft}
                    css={`
                      cursor: pointer;
`                   }
                    onClick={() => history.goBack()}
                />
                <Text size={"xxlarge"}>已屏蔽的好友</Text>
            </SettingsMenu>

            <FriendList>
                {new Array(8).fill(0).map((_, i) => {
                    return (
                        <ClosableAvatar key={i}>
                            <BlockedAvatar size={"105px"} src={face}/>
                            <CloseIcon width={46} height={51} icon={closeCircle}/>
                            <BlockedName>李浩</BlockedName>
                        </ClosableAvatar>
                    )
                })}

            </FriendList>


        </StyleBlockedList>
    );
}


BlockedList.propTypes = {
   children: PropTypes.any
};

export default BlockedList;