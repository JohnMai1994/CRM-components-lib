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
import blockedData from "../../data/blocked";

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
                {
                    blockedData.map((user, i) => {
                    return (
                        <ClosableAvatar key={user.id}>
                            <BlockedAvatar size={"105px"} src={user.avatar}/>
                            <CloseIcon width={46} height={51} icon={closeCircle}/>
                            <BlockedName>{user.name}</BlockedName>
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