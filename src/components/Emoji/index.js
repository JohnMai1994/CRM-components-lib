import React from 'react';
import StyleEmoji from "./style";
import PropTypes from 'prop-types';

function Emoji({children, label, ...rest }) {
    return (
        <StyleEmoji role="img" aria-label={label} {...rest}>
            {children}
        </StyleEmoji>
    );
}


Emoji.propTypes = {
   children: PropTypes.any,
    label: PropTypes.string
};

export default Emoji;