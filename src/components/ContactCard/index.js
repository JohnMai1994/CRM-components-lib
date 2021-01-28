import React from 'react';
import StyleContactCard, {Intro, Name} from "./style";
import PropTypes from 'prop-types';
import Avatar from "../Avatar";
import face from "asserts/images/face.jpg"

function ContactCard({contact, children, ...rest }) {
    return (
        <StyleContactCard {...rest}>
            <Avatar src={contact.avatar} status={"online"}/>
            <Name>{contact.name}</Name>
            <Intro>{contact.intro}</Intro>
        </StyleContactCard>
    );
}


ContactCard.propTypes = {
   children: PropTypes.any
};

export default ContactCard;