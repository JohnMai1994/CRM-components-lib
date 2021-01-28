import React from 'react';
import StyleChatApp, {Drawer, Nav, Sidebar, Content} from "./style";
import PropTypes from 'prop-types';
import NavBar from "../NavBar";
import MessageList from "../MessageList";
import Conversation from "../Conversation";
import Profile from "../Profile";
import ContactList from "../ContactList";
import FileList from "../FileList";
import NoteList from "../NoteList";
import EditProfile from "../EditProfile";
import {Route, Switch} from "react-router-dom"

function ChatApp({children, ...rest}) {
    return (
        <StyleChatApp {...rest}>
            <Nav>
                <NavBar/>
            </Nav>
            <Sidebar>
                <Switch>


                    <Route exact path="/">
                        <MessageList/>
                    </Route>

                    <Route exact path="/contacts">
                        <ContactList/>
                    </Route>

                    <Route exact path="/files">
                        <FileList/>
                    </Route>

                    <Route exact path="/notes">
                        <NoteList/>
                    </Route>

                    <Route path="/settings">
                        <EditProfile/>
                    </Route>
                </Switch>


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