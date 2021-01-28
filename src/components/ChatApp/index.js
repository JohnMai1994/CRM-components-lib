import React, {useState} from 'react';
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
import Settings from "../Settings";
import BlockedList from "../BlockedList";
import VideoCall from "../VideoCall";

function ChatApp({children, ...rest}) {
    const [showDrawer, setShowDrawer] = useState(false);
    const [videoCalling, setVideoCalling] = useState(false);

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
                {videoCalling &&
                <VideoCall onHandOffClicked={() => setVideoCalling(false)}/>}

                <Switch>
                    <Route exact path={"/settings"}>
                        <Settings/>
                    </Route>

                    <Route exact path={"/settings/blocked"}>
                        <BlockedList/>
                    </Route>

                    <Route path={"/"}>
                        <Conversation
                            onAvatarClick={() => setShowDrawer(true)}
                            onVideoClick={() => setVideoCalling(true)}
                        />
                    </Route>
                </Switch>

            </Content>
            <Drawer show={showDrawer}>
                <Profile onCloseClick={() => setShowDrawer(false)}/>
            </Drawer>
        </StyleChatApp>
    );
}


ChatApp.propTypes = {
    children: PropTypes.any
};

export default ChatApp;