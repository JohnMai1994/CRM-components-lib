import React from 'react';
import StyleChatApp, {Drawer, Nav, Sidebar, Content} from "./style";
import PropTypes from 'prop-types';
import NavBar from "../NavBar";
import MessageList from "../MessageList";
import Conversation from "../Conversation";
import Profile from "../Profile";

function ChatApp({children, ...rest }) {
    return (
        <StyleChatApp {...rest}>
            <Nav>
                <NavBar />
            </Nav>
            <Sidebar>
                <MessageList/>
            </Sidebar>
            <Content>
                <Conversation/>
            </Content>
            <Drawer>
                <Profile/>
            </Drawer>
        </StyleChatApp>
    );
}


ChatApp.propTypes = {
   children: PropTypes.any
};

export default ChatApp;