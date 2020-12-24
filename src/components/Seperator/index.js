import React from 'react';
import StyleSeperator from "./style";
import PropTypes from 'prop-types';

function Seperator({children, ...rest }) {
    return (
        <StyleSeperator {...rest}>
            {children}
        </StyleSeperator>
    );
}


Seperator.propTypes = {
   children: PropTypes.any
};

export default Seperator;