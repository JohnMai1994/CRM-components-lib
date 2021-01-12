import React from 'react';
import StyleContactCard, {Intro, Name} from "./style";
import PropTypes from 'prop-types';
import Avatar from "../Avatar";
import face from "asserts/images/face.jpg"

function ContactCard({children, ...rest }) {
    return (
        <StyleContactCard {...rest}>
            <Avatar src={face} status={"online"}/>
            <Name>Johnny Boy</Name>
            <Intro>我是挣扎在前线的开发工程师</Intro>
        </StyleContactCard>
    );
}


ContactCard.propTypes = {
   children: PropTypes.any
};

export default ContactCard;