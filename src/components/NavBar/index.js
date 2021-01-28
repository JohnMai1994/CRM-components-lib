import React from 'react';
import StyleNavBar, {StyledMenuItem, MenuIcon, MenuItems, StyledWord} from "./style";
import Badge from "../Badge";
import PropTypes, {func} from 'prop-types';
import Avatar from "../Avatar";

import face from "../../asserts/images/face.jpg"
import {faCog, faCommentDots, faEllipsisH, faFolder, faStickyNote, faUser} from "@fortawesome/free-solid-svg-icons";
import "styled-components/macro"
import {Link, useLocation, matchPath} from "react-router-dom";

function NavBar({explore, ...rest }) {
    return (
        <StyleNavBar explore={explore} {...rest}>
           <Avatar src={face} status="online"/>
            <MenuItems explore={explore}>
                <MenuItem to="/" explore={explore} showBadge icon={faCommentDots} >  聊天记录 </MenuItem>
                <MenuItem to="/contacts" explore={explore} icon={faUser}> 联系人 </MenuItem>
                <MenuItem to="/files" explore={explore} icon={faFolder}> 上传文件 </MenuItem>
                <MenuItem to="/notes" explore={explore} icon={faStickyNote}> 个人随笔  </MenuItem>
                <MenuItem explore={explore} icon={faEllipsisH}> 更多选项 </MenuItem>
                <MenuItem to="/settings" explore={explore} icon={faCog} css={`align-self: end`}> 设置 </MenuItem>
            </MenuItems>
        </StyleNavBar>
    );
}

function MenuItem({to, icon, showBadge,explore,children, ...rest}) {
    const loc = useLocation();
    const active = !!matchPath(loc.pathname, {
        path: to,
        exact: to === "/",
    });

    return (
        <StyledMenuItem explore={explore} active={active} {...rest}>
            <Link to={to}>
                <Badge show={showBadge}>
                    <MenuIcon active={active} icon={icon}/>
                </Badge>

                {!explore||  <Word active={active}>{children}</Word>}

            </Link>
        </StyledMenuItem>
    )
}


function Word({active, children, ...rest}) {

    return (
        <StyledWord active={active} {...rest}>
            {children}
        </StyledWord>

    )

}



NavBar.propTypes = {};

export default NavBar;
export {MenuItem}